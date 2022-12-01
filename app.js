window.onload = function(){
    // Récuperr rep_labels
    liste_reponses_labels = [
        document.getElementById("rep1_label"),
        document.getElementById("rep2_label"),
        document.getElementById("rep3_label"),
        document.getElementById("rep4_label")
    ];
    question_n = 0;
    document.getElementById("questionnaire_titre").textContent = liste_question[question_n];
    for (let i = 0; i < liste_question.length; i++) {
        liste_reponses_labels[i].textContent = liste_reponses[question_n][i];
    }
}
var question_n;
var liste_reponses_labels ;
var liste_question = ["Question A","Question B","Question C","Question D"]
var liste_reponses = [["Réponse A-1","Réponse A-2","Réponse A-3","Réponse A-4"],["Réponse B-1","Réponse B-2","Réponse B-3","Réponse B-4"],["Réponse C-1","Réponse C-2","Réponse C-3","Réponse C-4"],["Réponse D-1","Réponse D-2","Réponse D-3","Réponse D-4"]];
function choix(n){
    alert(n);
}
function valider(){
    question_n++;
    document.getElementById("questionnaire_titre").textContent = liste_question[question_n];
    for (let i = 0; i < liste_question.length; i++) {
        liste_reponses_labels[i].textContent = liste_reponses[question_n][i];
    }
}