let result = document.querySelector('.ecran');

let r = 0;
let s = "";

document.querySelector(".calcul").addEventListener("click", evt=>{ 
  if(evt.target.classList.contains('bouton')){
     let contenu = evt.target.innerText;
     console.log("calcul");
     if(contenu == "="){
       console.log("calcul");
       /*afficher le resultat*/
       r = eval(s);
       result.innerText = r;
       s = r.toString();
     }
     else{
       
       if(contenu == "C"){
         s = "";
         result.innerText = s;
       }
       
       else{
         s = s + contenu; 
       result.innerText = s;
       }
      }
  }  
  });