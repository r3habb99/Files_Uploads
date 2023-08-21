const Image = require("../models/image");

exports.imagePost = async (res, req) => {
  const imageUrl = req.body.imageUrl;
  try {
    const image = new Image({
      imageUrl: imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};
