var convertBrn = document.querySelector('.convert-button');
var URLinput = document.querySelector('URL-input');

convertBrn.addEventListener('Click', () =>{
    SVGAnimatedNumberList(URLinput.value);

});

function sendURL(URL){
    window.location.href = 'http://localhost:4000/download?URL==${URL}';
}