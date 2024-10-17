const request = new XMLHttpRequest();

request.onload = function (){
    data = JSON.parse(this.response)
    console.log(data)
}

request.error = function () {
    console.log("error", this)
}

request.open('GET', 'https://swapi.dev/api/people/1/' );

request.send();


