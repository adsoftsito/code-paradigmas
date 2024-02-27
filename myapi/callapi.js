function getMyIpHttp() {
  var request = new XMLHttpRequest()

  // open a new connection, using GET request on URL endpoint
  
  request.open('GET', 'https://api.ipify.org?format=json', true)
  request.onload = function(data) {
    console.log(data);
    console.log(data.target.response);
  }
  // send request
  request.send()
}

function getMyIpFetch() {
// create request object

  var request = new Request('https://randomuser.me/api/?results=3',

      {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
      });

  // now use it
  
  fetch(request)
  .then(function(response) {
     console.log(response);
     response.json().then(function(respjson) {
       console.log(respjson);
       console.log(respjson.results);
     });
   })
  .catch(err => {
     console.log(err);
   });
}
