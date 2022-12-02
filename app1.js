window.onload = function(){
    resultat = document.getElementById("resultat");
}
var resultat;
function resultat_final(){
    if(score_test > liste_question.length){
        resultat.textContent = "haut";
    }else if(score_test > 0){
        resultat.textContent = "haut";
    }else{
        resultat.textContent = "bas";
    }
}