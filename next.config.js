// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  ...nextTranslate(),
};
