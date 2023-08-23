import presetTypography from "@unocss/preset-typography";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        a: {
          "font-size": "1.3rem",
          "font-weight": "700",
          "text-decoration": "none",
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
