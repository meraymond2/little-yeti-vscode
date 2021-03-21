# Categories
- comment, including block comment
- doc-comment
- keywords
  - var decls
  - imports
  - fn/func/function/def/defn
- control-flow
  - if/else/then
  - switch
  - while, for, loop
  - return
  - try/catch
- builtins (I don't know if these are common outside of Zig)
- macros - in languages where they're distinct like Rust and Julia, but not Clojure
- type declarations
- string literals
- number literals
- boolean litearls
- null/nil/undefined literal

Not in colour
- operators/symbols
  - arrows
  - assignment operators
  - brackets
  - colons
- variable names
- function calls

# Extensions tested
zig - `vscode-zig`

## Boolean Literals
zig: keyword.constant.bool.zig

## Builtins
zig: support.function.builtin.zig

## Comment
zig: comment.line.double-slash.zig

## Control Flow
zig:
  - keyword.control.conditional.zig
  - keyword.control.flow.zig
  - keyword.control.repeat.zig
  - keyword.control.trycatch.zig

## Doc-Comment
zig: comment.line.documentation.zig

## Keywords
zig:
  - keyword.default.zig
  - keyword.storage.zig
  - keyword.structure.zig
  - storage.type.function.zig

## Macros
zig: n/a

## Null Literals
zig: keyword.constant.default.zig

## Number Literals
zig: constant.numeric.float.zig

## Operators
zig: not scoped

## String Literals
zig:
  - string.quoted.double.zig
  - string.quoted.single.zig

## Type Decls
zig:
  - entity.name.type.zig
  - keyword.type.integer.zig
