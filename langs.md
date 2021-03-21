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

Not covered
- operators, punctutation, brackets
- variable names
- function calls

# Extensions tested
julia - `language-julia`
typescript (ts) - vscode
zig - `vscode-zig`

## Boolean Literals
julia: constant.language.julia
ts: constant.language.boolean.true.ts
zig: keyword.constant.bool.zig

## Builtins
julia: support.function.julia
ts: keyword.operator.expression.typeof.ts
zig: support.function.builtin.zig

## Comment
julia:
  - comment.block.number-sign-equals.julia
  - comment.line.number-sign.julia
ts:
  - comment.block.ts
  - comment.line.double-slash.ts
zig: comment.line.double-slash.zig

## Control Flow
julia
  - keyword.control.julia
  - keyword.control.end.julia
ts:
  - keyword.control.conditional.ts
  - keyword.control.flow.ts
  - keyword.control.loop.ts
  - keyword.control.switch.ts
zig:
  - keyword.control.conditional.zig
  - keyword.control.flow.zig
  - keyword.control.repeat.zig
  - keyword.control.trycatch.zig

## Doc-Comment/String
julia: string.docstring.julia
ts: comment.block.documentation.ts
zig: comment.line.documentation.zig

## Keywords
julia:
  - keyword.control.import.julia
  - keyword.other.julia
  - keyword.storage.modifier.julia
ts:
  - keyword.control.export.ts
  - keyword.control.from.ts
  - keyword.control.import.ts
  - keyword.operator.expression.is.ts
  - storage.modifier.ts
  - storage.type.ts
  - storage.type.interface.ts
  - storage.type.type.ts
zig:
  - keyword.default.zig
  - keyword.storage.zig
  - keyword.structure.zig
  - storage.type.function.zig

## Macros
julia: support.function.macro.julia
ts: n/a
zig: n/a

## Null Literals
julia: not scoped
ts:
  - constant.language.null.ts
  - constant.language.undefined.ts
zig: keyword.constant.default.zig

## Number Literals
julia: constant.numeric.julia
ts: constant.numeric.decimal.ts
zig: constant.numeric.float.zig

## String Interpolation
julia: variable.interpolation.julia
ts: meta.template.expression.ts
zig: n/a

## String Literals
julia:
  - string.quoted.double.julia
  - string.quoted.single.julia
  - string.quoted.triple.double.julia
ts:
  - string.quoted.double.ts
  - string.quoted.single.ts
  - string.template.ts
zig:
  - string.quoted.double.zig
  - string.quoted.single.zig

## Type Decls
julia: support.type.julia
ts:
  - entity.name.type.alias.ts
  - support.type.primitive.ts
zig:
  - entity.name.type.zig
  - keyword.type.integer.zig

# Issues
Julia has `module` as a keyword, but the module `end` as control flow, so they may end up separate colours.

Typescript has a lot of keyword.control.x scopes, and I think it would be a lot of work to split them into control-flow and keywords.
