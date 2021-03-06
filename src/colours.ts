export enum Colour {
  darker_grey = "#222222",
  dark_grey = "#2b2b2b",
  medium_grey = "#383838",
  medium_light_grey = "#666666",
  light_grey = "#bbbbbb",
  red = "#e06c75",
  golden = "#e5c07b",
  green = "#00ddad",
  blue = "#47B5E7",
  purple = "#b77ee0",
  turquoise = "#00afaf",
  unknown = "#FF00FF", // to identify un-set styles
}

type Token =
  | "builtin"
  | "comment"
  | "control_flow"
  | "decl_keyword"
  | "doc_comment"
  | "number_literal"
  | "operator"
  | "source"
  | "string"
  | "type"

type EditorElement =
  | "background"
  | "line_highlight"
  | "line_nums"
  | "side_bar"
  | "status_bar"
  | "text"

// https://vscode.readthedocs.io/en/latest/getstarted/theme-color-reference/
export const editor_colours: Record<EditorElement, Colour> = {
  background: Colour.medium_grey,
  line_highlight: Colour.dark_grey,
  line_nums: Colour.medium_light_grey,
  side_bar: Colour.darker_grey,
  status_bar: Colour.dark_grey,
  text: Colour.light_grey,
}

export const syntax_colours: Record<Token, Colour> = {
  builtin: Colour.green,
  comment: Colour.medium_light_grey,
  control_flow: Colour.blue,
  decl_keyword: Colour.red,
  doc_comment: Colour.blue,
  number_literal: Colour.purple,
  operator: Colour.light_grey,
  source: Colour.light_grey,
  string: Colour.golden,
  type: Colour.turquoise,
}

type MarkdownElement = "heading" | "italics" | "bold" | "link" | "codeBg"

export const markdown_colours: Record<MarkdownElement, Colour> = {
  heading: Colour.red,
  italics: Colour.purple,
  bold: Colour.green,
  link: Colour.blue,
  codeBg: Colour.dark_grey,
}

export const html_attr = Colour.green
export const data_key = Colour.red
export const data_header = Colour.green
