module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // カラーは好きなように定義する
      white: "#ffffff",
      black: {
        DEFAULT: "#131418",
        light: "#333333",
        dark: "#202225",
      },
      gray: {
        DEFAULT: "#aaaaaa",
      },
    },
    fontFamily: {
      // フォントは好きなように定義する
      ja: ["YakuHanJP", "Noto Sans JP", "ヒラギノ角ゴ Pro W3", "メイリオ", "sans-serif"],
      en: ["Inter", "Verdana", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
