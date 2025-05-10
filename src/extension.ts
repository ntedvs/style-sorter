import cssDeclarationSorter from "css-declaration-sorter"
import postcss from "postcss"
import { commands, ExtensionContext, Range, window, workspace } from "vscode"

export const activate = (context: ExtensionContext) => {
  const disposable = commands.registerCommand("style-sorter.sort", () => {
    const { showErrorMessage: error } = window

    const editor = window.activeTextEditor
    if (!editor) return error("No editor open")

    const { document } = editor
    if (document.languageId !== "css") return error("Not a CSS file")

    const text = document.getText()

    const configuration = workspace.getConfiguration("style-sorter")
    const order = configuration.get("order") as "alphabetical"

    postcss([cssDeclarationSorter({ order })])
      .process(text, { from: undefined })
      .then(({ css }) => {
        const range = new Range(0, 0, document.lineCount, 0)
        editor.edit((builder) => builder.replace(range, css))
      })
  })

  context.subscriptions.push(disposable)
}
