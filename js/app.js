 /* Initialisation des variables dont nous allons avoir besoin. 
le canvas, le context, l'enregistremment du dernière évènement de la souris
et on définit le click souris en faux */
const canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");
var lastEvent;
var mouseDown = false;
context.fillStyle = "#FFFFFF";
context.fillRect(0, 0, canvas.width, canvas.height);

// Taille du pinceau
const choisirTaille = document.querySelector('input[type="range"]');
const output = document.querySelector('.output');
choisirTaille.oninput = function() {
        output.textContent = choisirTaille.value;
        console.log(choisirTaille.value)
      }

// Event de la souris 

canvas.addEventListener('mousedown', e => {
    lastEvent = e;
    mouseDown = true;
});

canvas.addEventListener('mousemove', e => {
    // Dessiner les lignes
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = inputCouleur.value;
        context.lineWidth = choisirTaille.value;
        context.lineCap = 'round';
        context.stroke();
        lastEvent = e;
    }
});

canvas.addEventListener('mouseup', e => {
    mouseDown = false;
});

canvas.addEventListener('mouseleave', e => {
    mouseDown = false;
});

//Effacer tout le canvas
function toutEffacer()
{
    console.log("alo");
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
};
//On récupère l'input de la palette de couleur
var inputCouleur = document.getElementById("paletteCouleur");
couleurPinceau = inputCouleur.value
//On fait des fonctions couleur de base pour l'ergonomie de l'app
function rouge(){
        inputCouleur.value = "#E74C3C" 
}
function jaune(){
        inputCouleur.value = "#F1C40F" 
}
function bleu(){
        inputCouleur.value = "#3498DB" 
}
function vert(){
        inputCouleur.value = "#04A82C" 
}
function gomme(){
    console.log("alo")
    inputCouleur.value = "#FFFFFF"
}
//On télécharge notre canevas en tant qu'image
function DownloadCanvasAsImage(){
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    let canvas = document.getElementById('mainCanvas');
    let dataURL = canvas.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
    downloadLink.setAttribute('href',url);
    downloadLink.click();
}
//On va changer le fond du canevas, on récupère la palette associé au fond pour utiliser sa valeur
let changerFond = document.getElementById("mainCanvas");
var changerCouleurFond = document.getElementById("couleurFond");
couleurFond = changerCouleurFond.value
// On applique le changement, c'est une validation pour éviter que cela ce fasse automatiquement
function jeChangeLeFond(){
        context.fillStyle = changerCouleurFond.value;
        context.fillRect(0, 0, canvas.width, canvas.height);

}
//On met le fond de base du canevas.
function clearFond(){
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
}


//Taille du canevas, même principe que la taille du pinceau mais cette fois-ci avec deux valeurs ! 
const choisirTailleLongueur = document.querySelector('input[name="longueur"]');
const outputLongueur = document.querySelector('.outputLongueur');
const choisirTailleLargeur = document.querySelector('input[name="largeur"]');
const outputLargeur = document.querySelector('.outputLargeur');
choisirTailleLongueur.oninput = function() {
        console.log(choisirTailleLongueur.value)
        outputLongueur.textContent = choisirTailleLongueur.value
        context.canvas.width = choisirTailleLongueur.value
      }
choisirTailleLargeur.oninput = function() {
        console.log(choisirTailleLargeur.value)
        outputLargeur.textContent = choisirTailleLargeur.value
        context.canvas.height = choisirTailleLargeur.value
      }

function tailleDeBase(){
        context.canvas.width = 1250
        context.canvas.height = 500
        outputLongueur.textContent = 1250
        outputLargeur.textContent = 500
}
