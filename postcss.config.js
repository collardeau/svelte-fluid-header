const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      whitelist: [
        "sm:block",
        "sm:hidden",
        "sm:flex",
        "sm:justify-between",
        "sm:items-center",
        "md:block",
        "md:hidden",
        "md:flex",
        "md:justify-between",
        "md:items-center",
        "lg:block",
        "lg:hidden",
        "lg:flex",
        "lg:justify-between",
        "lg:items-center",
        "xl:block",
        "xl:hidden",
        "xl:flex",
        "xl:justify-between",
        "xl:items-center"
      ],
      content: ["./**/*.html", "./**/*.svelte"],
      defaultExtractor: extractor
    })
  ]
};

function extractor(content) {
  const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
  const res = matches.map(match => {
    if (match.startsWith("class:")) {
      return match.split(":")[1];
    }
    return match;
  });
  return res;
}
