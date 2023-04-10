const appConnect = (err) => {
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server started");
  }
};

module.exports = {appConnect}