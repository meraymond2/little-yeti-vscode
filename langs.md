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
- operators/symbols
  - arrows
  - assignment operators
  - colons

Not in colour
- variable names
- function calls

# Extensions tested
julia - `language-julia`
zig - `vscode-zig`

## Boolean Literals
julia: constant.language.julia
zig: keyword.constant.bool.zig

## Builtins
julia: support.function.julia
zig: support.function.builtin.zig

## Comment
julia:
  - comment.block.number-sign-equals.julia
  - comment.line.number-sign.julia
zig: comment.line.double-slash.zig

## Control Flow
julia
  - keyword.control.julia
  - keyword.control.end.julia
zig:
  - keyword.control.conditional.zig
  - keyword.control.flow.zig
  - keyword.control.repeat.zig
  - keyword.control.trycatch.zig

## Doc-Comment/String
julia: string.docstring.julia
zig: comment.line.documentation.zig

## Keywords
julia:
  - keyword.control.import.julia
  - keyword.other.julia
  - keyword.storage.modifier.julia
zig:
  - keyword.default.zig
  - keyword.storage.zig
  - keyword.structure.zig
  - storage.type.function.zig

## Macros
julia: support.function.macro.julia
zig: n/a

## Null Literals
julia: not scoped
zig: keyword.constant.default.zig

## Number Literals
julia: constant.numeric.julia
zig: constant.numeric.float.zig

## Operators
julia:
  - keyword.operator.arrow.julia
  - keyword.operator.boolean.julia
  - keyword.operator.range.julia
  - keyword.operator.relation.julia
  - keyword.operator.update.julia
zig: not scoped

## String Interpolation
julia: variable.interpolation.julia
zig: n/a

## String Literals
julia:
  - string.quoted.double.julia
  - string.quoted.single.julia
  - string.quoted.triple.double.julia
zig:
  - string.quoted.double.zig
  - string.quoted.single.zig

## Type Decls
julia: support.type.julia
zig:
  - entity.name.type.zig
  - keyword.type.integer.zig

# Issues
Julia has `module` as a keyword, but the module `end` as control flow, so they may end up separate colours.
