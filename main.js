/*Ce premier projet a été spécialement conçu pour ceux qui débutent dans la programmation JavaScript et qui n'ont pas l'habitude de développer des algorithmes. Votre objectif sera à la fois simple et amusant : vous allez construire un générateur de citations ! Les citations seront construites aléatoirement en assemblant des morceaux de phrase.
Etape 1 : des citations aléatoires
Vous devez respecter les consignes suivantes :
    Les citations sont générées aléatoirement une par une à chaque appel du programme JavaScript => OK
    Chaque citation est la combinaison d'au moins 3 morceaux de phrases (à vous de préparer ces morceaux de phrase) => OK
    A défaut d'être intelligible, la phrase doit être cohérente (pas de point d'exclamation au milieu d'une phrase) => OK
Le programme peut simplement afficher le résultat dans la console JavaScript.. => OK
Etape 2 : des citations configurables
Vous souhaitez maintenant aller plus loin et proposer les options suivantes :
    Choisir le nombre de citations générées (de 1 à 5) => OK
    Choisir entre 2 types de générateurs de citations (vous devrez donc avoir 2 ensembles de phrases) => OK
    Une fois les citations générées, proposer de générer de nouvelles citations ou d'arrêter là le programme => OK
Adaptez le programme pour qu'il puisse offrir ces fonctionnalités. A vous de jouer ! */

//création des constantes
const debut = [
    "Je suis un enfant trouvé, ",
    "Mais, jusqu’à huit ans, j’ai cru que, comme tous les autres enfants, ",
    "serrait si doucement dans ses bras en me berçant, que mes larmes , ",
    "s’arrêtaient de couler., ",
    "Jamais je ne me couchais dans mon lit sans qu’une femme vint , ",
    "m’embrasser, et, quand le vent de décembre collait la neige contre les , ",
    "vitres blanchies, elle me prenait les pieds entre ses deux mains et elle , ",
    "restait à me les réchauffer en me chantant une chanson, dont je retrouve , ",
    "encore dans ma mémoire l’air et quelques paroles., ",
    "Quand j’avais une querelle avec un de mes camarades, elle me faisait , ",
    "conter mes chagrins, et presque toujours elle trouvait de bonnes paroles , ",
    "pour me consoler ou me donner raison., ",
    "Par tout cela et par bien d’autres choses encore, par la façon dont elle , ",
    "me parlait, par la façon dont elle me regardait, par ses caresses, par la  ",
];

const milieu = [
    "douceur qu’elle mettait dans ses gronderies, je croyais qu’elle était ma mère. , ",
    "Voici comment j’appris qu’elle n’était que ma nourrice , ",
    "Mon village, ou, pour parler plus justement, le village où j’ai été élevé,  ",
    "car je n’ai pas eu de village à moi, pas de lieu de naissance, pas plus que je  , ",
    "n’ai eu de père et de mère, le village enfin où j’ai passé mon enfance se  , ",
    "nomme Chavanon ; c’est l’un des plus pauvres du centre de la France. , ",
    "Cette pauvreté, il la doit non à l’apathie ou à la paresse de ses  , ",
    "habitants, mais à sa situation même dans une contrée peu fertile. Le sol  , ",
    "n’a pas de profondeur, et pour produire de bonnes récoltes il lui faudrait  , ",
    "des engrais ou des amendements qui manquent dans le pays. Aussi ne , ",
    "rencontre-t-on (ou tout au moins ne rencontrait-on à l’époque dont je  ",
    "parle) que peu de champs cultivés. , ",
    "C’est dans un repli de terrain, sur les bords d’un ruisseau qui va  , ",
    "perdre ses eaux rapides dans un des affluents de la Loire, que se dresse la  , "
];

const milieu2 = [
    "maison où j’ai passé mes premières années. , ",
    "Jusqu’à huit ans, je n’avais jamais vu d’homme dans cette maison ;  ,",
    "cependant ma mère n’était pas veuve, mais son mari, qui était tailleur de  , ",
    "pierre, comme un grand nombre d’autres ouvriers de la contrée, travaillait , ",
    "à Paris, et il n’était pas revenu au pays depuis que j’étais en âge de voir ou  , ",
    "de comprendre ce qui m’entourait. De temps en temps seulement, il , ",
    "envoyait de ses nouvelles par un de ses camarades qui rentrait au village., ",
    "« Mère Barberin, votre homme va bien ; il m’a chargé de vous dire que  , ",
    "l’ouvrage marche fort, et de vous remettre l’argent que voilà ; voulez-vous  , ",
    "compter ? » , ",
    "Et c’était tout. Mère Barberin se contentait de ces nouvelles : son  , ",
    "homme était en bonne santé ; l’ouvrage donnait ; il gagnait sa vie. , ",
    "De ce que Barberin était resté si longtemps à Paris, il ne faut pas  , ",
    "croire qu’il était en mauvaise amitié avec sa femme. La question de  , "
];

const fin = [
    "désaccord n’était pour rien dans cette absence.",
    "Il demeurait à Paris parce que le travail l’y retenait ; voilà tout. Quand ",
    "il serait vieux, il reviendrait vivre près de sa vieille femme, et avec l’argent ",
    "qu’ils auraient amassé ils seraient à l’abri de la misère pour le temps où ",
    "l’âge leur aurait enlevé la force et la santé." ,
    "Un jour de novembre, comme le soir tombait, un homme, que je ne ",
    "connaissais pas, s’arrêta devant notre barrière. J’étais sur le seuil de la ",
    "maison occupé à casser une bourrée. Sans pousser la barrière, mais en ",
    "levant sa tête par-dessus en me regardant, l’homme me demanda si ce ",
    "n’était pas là que demeurait la mère Barberin.",
    "Je lui dis d’entrer.",
    "Au bruit de nos voix, mère Barberin accourut et, au moment où il ",
    "franchissait notre seuil, elle se trouva face à face avec lui.",
    "« J’apporte des nouvelles de Paris », dit-il.",
  "C’étaient là des paroles bien simples et qui déjà plus d’une fois avaient frappé nos oreilles"
];

//=======================================================================================//

// Création de la constante Citation avec 3 ou 4 constantes
const Citation = {

    init: function(randomDebut, randomMilieu, randomMilieu2, randomFin) {
        this.randomDebut = randomDebut;
        this.randomMilieu = randomMilieu;
        this.randomFin = randomFin;
        if (randomMilieu2) {
            this.randomMilieu2 = randomMilieu2;
        } // si 4 constiables
    },
    // Renvoie la description de Citation avec 3 ou 4 constantes
    decrire: function() {
        if (this.randomMilieu2) {
            return (this.randomDebut + " " + this.randomMilieu + " " + this.randomMilieu2 + " " + this.randomFin); // si 4 const
        } else
          return (this.randomDebut + " " + this.randomMilieu + " " + this.randomFin); // si 3 const
    }
};

// retourne un entier aléatoire entre 1 et max
function generate_random(max) {
    return Math.floor((Math.random() * max) + 1);
}

// génère 'max' citation3
// retourne un tableau avec dans chaque case une citation unique
function generate_citation(max, type) { // bonne pratique car fonction réutilisable
    const tab = [];
    for (let i = 0; i < max; i++) {
        const citation = Object.create(Citation); // creation de la citation
        if (type == 3) { // si type =3 alors la citation aura cette forme
            citation.init(debut[generate_random(13)], milieu[[generate_random(13)]], null, fin[[generate_random(13)]]);
        } else if (type == 4) { // si type =4 alors la citation aura cette forme
            citation.init(debut[generate_random(13)], milieu[[generate_random(13)]], milieu2[[generate_random(13)]], fin[[generate_random(13)]]);
        }
        tab[i] = citation; // incrémente le tableau
    }
    return tab;
}

console.log("Bienvenue dans le générateur de citation, vous pouvez générer entre 1 et 5 citation(s) !");
let proposition; // let proposition => 5 choix possibles, générer de 1 à 5 citations
while (proposition !== "0") {
    console.log("1 : Générer 1 citation : ");
    console.log("2 : Générer 2 citations : ");
    console.log("3 : Générer 3 citations : ");
    console.log("4 : Générer 4 citations : ");
    console.log("5 : Générer 5 citations : ");
    console.log("0 : Quitter");
    const proposition = prompt("Choisissez une option : ");

    if ((proposition >= 0) && (proposition <= 5)) { // proposition saisie par l' utilisateur est compris entre 1 et 5
        const typeCitation = prompt("Saississez 3 pour une (des) citation(s) à 3 variables, 4 pour 4 variables :"); // choix du nombre de constiables
        if (typeCitation == 3 || typeCitation == 4) { // 2 choix possibles : générer 1 ou plusieurs citations à 3 (saisir 3) ou 4 (saisir 4) constiables
            const tableau_citation = generate_citation(proposition, typeCitation);
            for (let i = 0; i < proposition; i++) {
                const citation = tableau_citation[i];
                console.log("Voici la citation " + (i + 1) + " : ");
                console.log(citation.decrire());
            }
        } else { // si l'utilisateur choisit autre chose que 3 ou 4 constantes (chiffre autre que 3 ou 4, lettre,....)
              console.log("Vous avez saisi un autre chiffre que 3 ou 4, le programme ne peut générer vo(s)tre citation(s) !");
        };
    }
    if ((proposition > 5) || (proposition !== 'numbers')) { //si la proposition saisie par l'utilisateur est supérieur à 5 ou n'est pas un chiffre
        console.log("Veuillez saisir un chiffre entre 1 et 5 pour générer des citations ou 0 pour quitter.");
    }
    if (proposition === 0) { // quitte le programme si la proposition saisie par l' utilisateur est 0
        console.log("Au revoir !");
        break;
    }
}