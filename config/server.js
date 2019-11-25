module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "b60ec93460df30501bb5ade2bf75b944d061e728206a621ed2d88b69a1ad5aef",
  SECRET:
    process.env.SECRET ||
    "f6bb388f1e09cf63605bbfb8face119f5a1af4a6970330ce75357a98c84bc912",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
