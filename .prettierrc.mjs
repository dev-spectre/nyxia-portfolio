/** @type {import("prettier").Config} */
export default {
  bracketSameLine: true,
	htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
