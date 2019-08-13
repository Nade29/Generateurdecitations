const input = document.getElementsById("item");
const  submitButton = document.getElementsById("submit");

const list = document.getElementById("list");
const genererButton = document.getElementById("generer");
const generateur = document.getElementById("generateur");

let itemArray = [];

submitButton.addEventlistener("click", () => {
    let itemName = input.value;

    if (itemName != "") {
        itemsArray.push(itemsName);
        let itemElem = docuement.creatElement("div");
        itemsElem.classList.add("list-item");
        itemElem.innerText = itemsName;
        list.appendChild(itemsElem);
        input.value ="";
        return;
    }s
alert("Saisir et pointé");
   
});

genererButton.addEventlistener("click", () => {
    generateur.innerText = itemsArray[randomIndex(0, itemsArray.length)];
})

function randomIndex (min, max) {
return Math.floor(Math.random() * (max -min) + min);
}