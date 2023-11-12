import cssDeclarationSorter from "css-declaration-sorter"
import postcss from "postcss"
import {
  ExtensionContext,
  Position,
  Range,
  commands,
  window,
  workspace,
} from "vscode"

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(
    commands.registerCommand("style-sorter.sort", async () => {
      const editor = window.activeTextEditor

      if (!editor) {
        return window.showErrorMessage("No editor open.")
      }

      const { document } = editor

      if (document.languageId !== "css") {
        return window.showErrorMessage("No CSS file open.")
      }

      const text = document.getText()

      if (!text) {
        return window.showErrorMessage("No text found.")
      }

      const { css } = await postcss([
        cssDeclarationSorter({
          order: workspace.getConfiguration("style-sorter").order,
        }),
      ]).process(text, { from: undefined })

      editor.edit((builder) => {
        builder.replace(
          new Range(new Position(0, 0), document.positionAt(text.length)),
          css
        )
      })
    })
  )
}
