var btntranslate = document.querySelector('#btn-translate');
var text = document.querySelector('#text-input');
var output = document.querySelector('#output');

var url = "https://api.funtranslations.com/translate/yoda.json"

function getUrl(input){
    return url + "?" + "text=" + input;
}

function errorHandler(error){
    alert('error or request limit exceeded')
    console.log('error or request limit exceeded')
}



function clickHandler(){
    var inputVal = text.value;

    //call api
    fetch( getUrl(inputVal) )
        .then(response => response.json())
        .then(json => {
            var translatedVal = json.contents.translated;
            output.innerText = translatedVal; 
        })
        .catch(errorHandler)
};



btntranslate.addEventListener('click',clickHandler)
