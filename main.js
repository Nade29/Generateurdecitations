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
    "Y a pas à dire, ",
    "Mon père, il n'était pas ébouriffé, ",
    "C’est vrai ce qu’on dit, ",
    "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe, ",
    "Sur le principe, ",
    "Oui, je sais, ",
    "Au bout d'un moment, ",
    "On se fait couper les deux bras, ",
    "La prochaine fois que vous faites venir un barde, ",
    "Oh, mais c'est pas vrai, ",
    "Merlin, i'sait déjà pas monter des blancs en neige, ",
    "Mais comment voulez-vous que j'vous prouve que j'suis moi, ",
    "De toutes façons, ",
    "Rangez moi ça, débile, "
];

const milieu = [
    " dès qu'il y a du dessert, ",
    " déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, ",
    " vous êtes le fils d’un démon et d’une pucelle ? ",
    " ah non, ça c’est que nous, parce qu’il faut être capable de passer pour des cons en un temps record. ",
    " la Table ronde, ",
    " j'ai arbitré un peu sec, ",
    " il est vraiment druide, c'mec-là, ",
    " on revient vous voir et 5 minutes après on retourne se mettre sur la gueule, ",
    " je lui ouvre le bide de là à là, j'lui sors les boyaux et je file sa langue à bouffer aux chiens, ",
    " une heure que j'crapahute dans tout le château avec ma bougie, ",
    " alors préparer une potion de polymorphie… ",
    " ça devient débile, ",
    " c'est ma mère, ",
    " la table ronde, "
];

const milieu2 = [
    " faut que j'enlève mon armure sinon y va se passer quelque chose d'atroce, ",
    " il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe,",
    " je ne me sens pas dans mon assiette, ",
    "vous êtes un grand malade mental, ",
    " l'incident n'a fait aucune victime, ",
    " et nous, pauvres âmes chagrines, nous perdons notre regard dans l'horizon blanc de notre solitude, ",
    " finalement c'est pas des démons, ",
    " c'est juste les pires bestioles de tout l'univers, ",
    " mettons deux gardes là devant et allons boire un coup, ",
    " balancez-leur les radasses et qu'ils s'en aillent au diable, ",
    " ne comptez plus sur moi pour vous amener mes gâteaux à la purée de pomme dont vous êtes si friand, ",
    " je m'occupe d'aller chercher ces petites salopes par la peau du fion, ",
    " je tiens à préciser que l'incident n'a fait aucune victime, ",
    " c'est une catastrophe, "
];

const fin = [
    "le repas est tout de suite plus chaleureux !",
    "voilà ! Allez, au lit !",
    "vous avez plus pris de la pucelle.",
    "ah non, là-dessus on a une avance considérable.",
    "c'est pas obligatoire.",
    "mais en même temps…",
    "ou ça fait quinze ans qu'il me prend pour un con ?",
    "mettez-vous à la place des ennemis, c'est désespérant.",
    "c'est clair, ça ?",
    "ça va bien, maintenant !",
    "permettez-moi d'avoir des doutes.",
    "à la fin !",
    "j'vais pas la faire tabasser par la garde.",
  "c'est pas la fête de l'artisanat !"
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