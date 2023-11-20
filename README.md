# Style Sorter

Style Sorter is a VS Code extension that sorts your declarations meaningfully.

## Installation

#### Option 1

- Click [here](https://marketplace.visualstudio.com/items?itemName=NateDavis.style-sorter&ssr=false)
- Click `Install`

#### Option 2

- Open the extensions panel in VS Code
- Search for `Style Sorter`
- Click `Install`

## Usage

- Press `Cmd/Ctrl + Shift + P`
- Type `Sort Styles`
- Press `Enter`

## Configuration

- Press `Cmd/Ctrl + ,`
- Search for `Style Sorter`
- Choose desired order

  - Alphabetical: Sort alphabetically.

  - Concentric: Sort properties applying outside the box model, moving inward to intrinsic changes.

    - Box
    - Border
    - Background
    - Text
    - Other

  - SMACSS: Sort from most important, flow affecting properties, to least important properties.
    - Positioning
    - Visibility
    - Box model
    - Dimensions
    - Text

## Credits

- Extension is built on [css-declaration-sorter](https://github.com/Siilwyn/css-declaration-sorter/).
