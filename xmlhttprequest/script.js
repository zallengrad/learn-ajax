const request = new XMLHttpRequest();

request.onload = function (){
    data = JSON.parse(this.response)
    console.log(data)
}

request.error = function () {
    console.log("error", this)
}

 

