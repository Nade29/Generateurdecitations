
const debut = [
    "Je suis un enfant trouvé, ",
    "Jusqu’à huit ans j’ai cru que comme tous les autres enfants, ",
    "Serrait si doucement dans ses bras en me berçant que mes larmes, ",
    "S’arrêtaient de couler, ",
    "Jamais je ne me couchais dans mon lit sans qu’une femme vint, ",
    "M’embrasser et quand le vent de décembre collait la neige contre les, ",
    "Vitres blanchies elle me prenait les pieds entre ses deux mains et elle, ",
    "Restait à me les réchauffer en me chantant une chanson dont je retrouve, ",
    "Encore dans ma mémoire l’air et quelques paroles, ",
    "Quand j’avais une querelle avec un de mes camarades elle me faisait, ",
    "Conter mes chagrins et presque toujours elle trouvait de bonnes paroles, ",
    "Pour me consoler ou me donner raison, ",
    "Par tout cela et par bien d’autres choses encore par la façon dont elle, ",
    "Me parlait par la façon dont elle me regardait par ses caresses par la  ",
];

const milieu = [
    "douceur qu’elle mettait dans ses gronderies je croyais qu’elle était ma mère, ",
    "voici comment j’appris qu’elle n’était que ma nourrice, ",
    "mon village ou pour parler plus justement le village où j’ai été élevé,  ",
    "car je n’ai pas eu de village à moi pas de lieu de naissance pas plus que je, ",
    "n’ai eu de père et de mère le village enfin où j’ai passé mon enfance se, ",
    "nomme Chavanon c’est l’un des plus pauvres du centre de la France, ",
    "cette pauvreté il la doit non à l’apathie ou à la paresse de ses, ",
    "habitants mais à sa situation même dans une contrée peu fertile le sol, ",
    "n’a pas de profondeur et pour produire de bonnes récoltes il lui faudrait, ",
    "des engrais ou des amendements qui manquent dans le pays Aussi ne, ",
    "rencontre-t-on ou tout au moins ne rencontrait-on à l’époque dont je,  ",
    "parle que peu de champs cultivés, ",
    "c’est dans un repli de terrain sur les bords d’un ruisseau qui va, ",
    "perdre ses eaux rapides dans un des affluents de la Loire que se dresse la, "
];


const fin = [
    "désaccord n’était pour rien dans cette absence.",
    "il demeurait à Paris parce que le travail l’y retenait  voilà tout. ",
    "quand il serait vieux il reviendrait vivre près de sa vieille femme et avec l’argent. ",
    "qu’ils auraient amassé ils seraient à l’abri de la misère pour le temps. ",
    "où l’âge leur aurait enlevé la force et la santé." ,
    "un jour de novembre comme le soir tombait un homme.  ",
    "que je ne connaissais pas s’arrêta devant notre barrière. ",
    "j’étais sur le seuil de la maison occupé à casser une bourrée. ",
    "levant sa tête par dessus en me regardant.  ",
    "l’homme me demanda si cen’était pas là que demeurait la mère Barberin.",
    "je lui dis d’entrer.",
    "au bruit de nos voix mère Barberin accourut. ",
    "franchissait notre seuil elle se trouva face à face avec lui.",
    "j’apporte des nouvelles de Paris dit-il.",
    "c’étaient là des paroles bien simples et qui déjà plus d’une fois avaient frappé nos oreilles. "
];

//=======================================================================================//


const generateur = document.getElementById("generateur");

function generate_citation(max) { // bonne pratique car fonction réutilisable
    const tab = [];
    for (let i = 0; i < max; i++) {
        let citation = debut[Math.floor(Math.random() * debut.length)] + milieu[Math.floor(Math.random() * milieu.length)] + fin[Math.floor(Math.random() * fin.length)];
        tab[i] = citation; // incrémente le tableau  
    }

    
    return tab;

}
let citations = [];
const genererButton = document.getElementById("generateCitation");

  function printCitations() {
    let citationNumber = Number(prompt("Choisissez un nombre de citation à generer entre 1 et 5."));
    console.clear(); 
    
    if (citationNumber >= 1 && citationNumber <= 5){

        let  citations = generate_citation(citationNumber); 
        for (let citation of citations){
            console.log(citation);
        }
            
    } else if (citationNumber > 5 || citationNumber < 1 ||isNaN(citationNumber) ) {

        console.log("Veuillez saisir un chiffre entre 1 et 5");

    } else {

        console.log("Veuillez saisir un chiffre entre 1 et 5");
    }
    
}
                
  genererButton.onclick = printCitations;
