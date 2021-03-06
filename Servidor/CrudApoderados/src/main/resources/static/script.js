// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3448/Banks/AllBanks', true);

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send();
// Begin accessing JSON data here
var data = JSON.parse(this.response);

data.forEach(bank => {
  // Log each movie's title
  console.log(bank.nombre);
});