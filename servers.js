var http = require("http");

var nicePORT = 7000;
var meanPORT = 7500;

var niceList = ["You are constantly working to improve yourself!","You're a good person!","You are fun to be around!","You persevere even in the face of overwhelming obstacles!"];
var meanList = ["You should have been a success by now.","You are estranged from your family.","You are weak.","Nobody likes you."];
var niceServer = http.createServer(niceRequest);
var meanServer = http.createServer(meanRequest);

function niceRequest(request, response) {
  var random = Math.floor(Math.random()*niceList.length);
  // Send the below string to the client when the user visits the PORT URL
  response.end(niceList[random]);
}

function meanRequest(request, response) {
  var random = Math.floor(Math.random()*meanList.length);

  // Send the below string to the client when the user visits the PORT URL
  response.end(meanList[random]);
}

niceServer.listen(nicePORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + nicePORT);
});

meanServer.listen(meanPORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + meanPORT);
});
