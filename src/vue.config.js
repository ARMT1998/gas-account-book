module.exports = {
    devServer: {
      proxy: {
        "https://script.google.com/macros/s/AKfycbzKZjTsk3t3KtGWaacfVJ4rzBzbTUGHnjlbzcktub1vNjSl8eENFh7mHvsZ-DQ2IuuyNQ/exec": {
          target: "http://localhost:8080",
        }
      }
    }
  };