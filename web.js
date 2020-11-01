const common = "/";

const outputFolder = "/webp" + common; // Output folder

const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin([`./images${common}*.{jpg,png}`], {
  destination: outputFolder,
  plugins: [
    imageminWebp({
      quality: 90,
      resize: {
        width: 1000,
        height: 0,
      },
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
