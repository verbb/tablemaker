# Field

Create a Table Maker field under **Settings → Fields**. Editors then manage both the column schema and the row content on the element itself.

<img src="/_screenshots/feature-tour/usage.png" width="600" alt="Table Maker field with Plan/Price rows and caption." />

**Edit columns** opens a modal for the column schema (heading, width, alignment, type):

<img src="/_screenshots/feature-tour/columns-modal.png" width="612" alt="Edit columns modal with heading, width, and alignment." />

## Field settings

- **Enable Width Column** — show a width control when editing columns.
- **Enable Alignment Column** — show left / center / right alignment when editing columns.
- **Enable Caption** — show a caption input below the table for each field value. Label, instructions, and placeholder are optional. A stored caption still renders in Twig / GraphQL even if you later turn this setting off (editors just can’t edit it until you turn it back on).
- **Allowed Column Types** — restrict which types appear in the Edit columns dialog. Leave **All** selected (or `*`) for every built-in type.
- **Min / Max Rows** — bound how many content rows editors can add or remove.
- **Min / Max Columns** — same for the column schema.
- **Add Row Label** — customise the “Add a row” button text.

### Column types

| Handle | Label |
| --- | --- |
| `checkbox` | Checkbox |
| `color` | Color |
| `date` | Date |
| `select` | Dropdown |
| `email` | Email |
| `heading` | Row heading |
| `lightswitch` | Lightswitch |
| `multiline` | Multi-line text |
| `number` | Number |
| `singleline` | Single-line text |
| `time` | Time |
| `url` | URL |

## Editing content

- **Edit columns** opens a modal to add, reorder, rename, and type columns (plus width / alignment / dropdown options when enabled). Deleting a column asks for confirmation.
- **Paste** spreadsheet TSV into a focused cell to fill neighbouring cells and add rows (within max-row limits).
- **Insert row above / below** from the row actions menu.
- **Caption** (when enabled) sits below the grid and maps to `{{ entry.myField.caption }}` / GraphQL `caption`.

:::tip
Older installs may still show Column / Row Label and Instructions settings in project config history — those were removed. Use the Craft field’s own label and instructions instead.
:::

For Twig and GraphQL output, see [Usage](docs:feature-tour/usage).
