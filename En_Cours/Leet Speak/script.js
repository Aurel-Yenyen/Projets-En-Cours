let alphabet = {
    "a": "4"
}


function getValue(){
    let text = document.getElementById('text').value
    let insert = text

    if (text === alphabet)
        alert(text)

}
function replaceChr(chr) {
    var chrs = {'a':'4','e':'3','l':'1','t':'7','s':'5','o':'0'};
    return chrs[chr] || chr;
  }
   
  var message = prompt("Veuillez saisir votre mot").toLowerCase();
   
  alert( message.replace(/[aeltso]/g, replaceChr) );