

// Parcourir chaque produit
var produit = document.getElementsByClassName("box");
for (let i = 0; i < produit.length; i++) {
    let bntPlus = produit[i].children[4].children[2];
    let nombre = produit[i].children[4].children[1];
    let prixUni = produit[i].children[2].children[1];
    let total = produit[i].children[3].children[1];
    let qty = parseInt(nombre.innerText);
    let prixUnitaire = parseInt(prixUni.innerText);

    console.log(prixUnitaire);

    bntPlus.addEventListener("click", function () {
        qty++;
        nombre.innerText = qty;
        total.innerText = qty * prixUnitaire;
        updateTotalCommande(); // Mettre à jour le total général
    });

    let bntmoins = produit[i].children[4].children[0];
    bntmoins.addEventListener("click", function () {
        if (qty > 0) { // Assurez-vous que la quantité ne devienne pas négative
            qty--;
            nombre.innerText = qty;
            total.innerText = qty * prixUnitaire;
            updateTotalCommande(); // Mettre à jour le total général
        }
    });

    let like = produit[i].children[5].children[0].children[0];
    like.addEventListener('click', function () {
        if (like.style.color === "red") {
            like.style.color = "black";
        } else {
            like.style.color = "red";
        }
    });

    let remove = produit[i].children[5].children[1].children[0];
    let box = produit[i];
    if (box) {
        remove.addEventListener('click', function () {
            box.remove();
            updateTotalCommande(); // Mettre à jour le total général après suppression
        });
    }
}
const produits = document.getElementsByClassName("box");

// Récupérer l'élément du total commande
const totalCommande = document.getElementById("tyu");

// Fonction pour mettre à jour le total commande
function updateTotalCommande() {
  let total = 0;
  for (let i = 0; i < produits.length; i++) {
    const totalUnit = produits[i].querySelector(".totalUnit .price");
    total += parseInt(totalUnit.innerText) || 0;
  }
  totalCommande.innerText = total; // Afficher le total mis à jour
}
