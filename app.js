window.onload = function(){
    score_test = 0;
    resultat = document.getElementById("resultat");
    liste_reponses_input = [
        document.getElementById("rep1"),
        document.getElementById("rep2"),
        document.getElementById("rep3"),
        document.getElementById("rep4")
    ];
    liste_reponses_labels = [
        document.getElementById("rep1_label"),
        document.getElementById("rep2_label"),
        document.getElementById("rep3_label"),
        document.getElementById("rep4_label")
    ];
    reponse_choisie = 0;
    question_n = 0;
    //alert(document.getElementById("questionnaire_titre").textContent);
    document.getElementById("questionnaire_titre").textContent = liste_question[question_n];
    update();
}

var question_n;
var liste_reponses_input;
var liste_reponses_labels;
var liste_question = ["Savez-vous ce que veut dire MST ?",
    "Combien connaissez-vous de MST ?",
    "Où se faire dépister ?",
    "Savez-vous comment l'on se dépiste ?",
    "Avez-vous souvent des rapports sexuels sans protections ?",
    "Savez-vous quelle est l'espérance de vie d'une personne atteinte du SIDA ?",
    "Quand se faire dépister?",
    "Quels sont les symptômes d'une MST",
    "Comment prévenir une MST ?",
    "Avez-vous beaucoup appris ?"];

var liste_reponses = [
    ["Meuf Sans T-shirt","Maison Sans Toit","Marmotte Sous Thérapie","Maladie Sexuellement Transmissible"],
    ["1","2","3 ou 4","+ de 5"],
    ["Dans une maison close","Chez mémé","Dans une clinique","A l'hôpital"],
    ["En se coupant une partie de son intimitté","Avec un test Covid","Par prélèvement salivaire","Par prise de sang et/ou prélèvement urinaire"],
    ["Toujours","Souvent","Parfois","Jamais"],
    ["On s'en fout, elle va creuver","50 ans","10 ans","20 ans"],
    ["On le fait pas, c'est pour les faibles","1h ou 2h après l'acte","2 semaines après","2 ou 3 mois après"],
    ["C'est quoi une MST, Hagueuegueu ???","Tu meurs","Dans certain cas de la fièvre et des maux de tête","Des douleurs aux alentours des parties génitales"],
    ["Bha, dans tout les cas j'en aurais pas","On la prévient par SMS MDR !!!","Faire voeu de chasteté","Par l'usage d'un préservatif et de vaccins contre certaines MST"],
    ["Nan, c'était nul","bof, je m'en fiche","Je connaissais déjà certains aspects de ce sujet","Oui, c'était bien expliqué"]];
var reponse_choisie;
var score_test;
function choix(n){
    reponse_choisie = n;
}
function valider(){
    if(liste_question.length-1 <= question_n){
        window.location.href='pageDEfin.html';
        resultat_final();
    }
    if(reponse_choisie != 0){
        switch (reponse_choisie) {
            case 1:
                score_test +=2;
                break;
            case 2:
                score_test ++;
                break;
            case 4:
                score_test--;
                break;
        }
        question_n++;
        document.getElementById("questionnaire_titre").textContent = liste_question[question_n];
        update();
        liste_reponses_input[reponse_choisie-1].checked = false;
        reponse_choisie = 0;
    }  
}
function update(){
    for (let i = 0; i < liste_reponses[0].length; i++) {
        liste_reponses_labels[i].textContent = liste_reponses[question_n][i];
    }
}