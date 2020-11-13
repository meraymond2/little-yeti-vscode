import * as fs from "fs"
import { generate_theme_json } from "./generate"

fs.writeFileSync(
  "themes/Little Yeti-color-theme.json",
  JSON.stringify(generate_theme_json(), null, 2)
)
