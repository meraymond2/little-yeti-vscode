import { editor_colours, syntax_colours, Colour } from "./colours"

const fs = require("fs")

export const generate_theme_json = () => ({
  name: "Little Yeti",
  type: "dark",
  colors: {
    "editor.background": editor_colours.background,
    "editor.foreground": editor_colours.text,
    "editor.lineHighlightBackground": editor_colours.line_highlight,
    "editorCursor.foreground": editor_colours.text,
    "editorLineNumber.foreground": editor_colours.line_nums,
    "sideBar.background": editor_colours.side_bar,
    "sideBar.foreground": editor_colours.text,
    "sideBarTitle.foreground": editor_colours.text,
    "statusBar.background": editor_colours.status_bar,
    "statusBar.foreground": editor_colours.text,
  },
  tokenColors: [
    {
      name: "Comment",
      scope: ["comment"],
      settings: {
        fontStyle: "italic",
        foreground: syntax_colours.comment,
      },
    },
    {
      name: "Doc Comment",
      scope: ["comment.line.documentation"],
      settings: {
        fontStyle: "italic",
        foreground: syntax_colours.doc_comment,
      },
    },

    {
      name: "Declaration Keywords",
      scope: ["keyword.default", "keyword.storage", "storage.type.function"],
      settings: {
        foreground: syntax_colours.decl_keyword,
      },
    },
    {
      name: "Builtin",
      scope: ["support.function.builtin"],
      settings: {
        foreground: syntax_colours.builtin,
      },
    },
    {
      name: "String",
      scope: ["string.quoted"],
      settings: {
        foreground: syntax_colours.string,
      },
    },
    {
      name: "Number",
      scope: ["constant.numeric"],
      settings: {
        foreground: syntax_colours.number_literal,
      },
    },
    {
      name: "Type",
      scope: ["entity.name.type", "keyword.type"],
      settings: {
        foreground: syntax_colours.type,
      },
    },
    {
      name: "Type",
      scope: ["keyword.operator"],
      settings: {
        foreground: syntax_colours.operator,
      },
    },
    {
      name: "Control Flow",
      scope: ["keyword.control"],
      settings: {
        foreground: syntax_colours.control_flow,
      },
    },
  ],
})

// fs.writeFileSync(
//   "themes/Little Yeti-color-theme.json",
//   JSON.stringify(genTheme())
// )
