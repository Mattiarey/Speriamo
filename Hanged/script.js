const arrayStringhe = ["onomatopeico", "aberrazione", "toponimo", "aracnofobia", "entropia", "iniquo"]
numero = Math.floor(Math.random() * arrayStringhe.length)
var parola = arrayStringhe[numero]
var listaSbagli = ""

//quando premi il bottone "fatto"
function done() {



    let lettera = document.getElementById("id_lettera").value
    lettera = lettera.toLowerCase()

    if (lettera == "" && lettera.length != 1) { alert("scrivi una cosa sensata") }
    else {
        canContinue = true;
        let tempstring = ""

        let isWordHere = false

        //l'idea è che si crei una stringa con la lettera richiesta nelle posizioni dove dovrebbe essere e con i trattini dove non dovrebbe essere
        for (i = 0; i < parola.length && canContinue; i++) {
            if (parola.indexOf(lettera) != -1) {
                if (parola[i] == lettera) {
                    tempstring += lettera
                    isWordHere = true
                }
                else {

                    tempstring += document.getElementById("id_parola").value[i]

                }

            } else {
                canContinue = false
                tempstring = document.getElementById("id_parola").value

            }
        }
        document.getElementById("id_parola").value = tempstring

        if (!isWordHere) {
            //fare tuttecose con l'immagine
            errore()
            if (listaSbagli.lastIndexOf(lettera) == -1) { listaSbagli += lettera; listaSbagli += ", " }

            document.getElementById("id_errore").value = listaSbagli
        }
    }
    pulisci()
    stato()
}

//questa è la prima cosa che parte quando carica la pagina
window.onload = function () {
    generazione()
    scompari()
}

//questa funzione sceglie dal primo la parola da usare 
function generazione() {

    let trattini = "";
    for (i = 0; i < arrayStringhe[numero].length; i++) {
        trattini += "*"
    }
    document.getElementById("id_parola").value = trattini
}
function scompari() {

    //questa funzione setta tutte le immagini a invisibili, tranne la base e la testa morta
    const immagini = document.getElementsByTagName("img")
    for (i = 0; i < immagini.length; i++) {
        immagini[i].style.visibility = "hidden"
    }
    immagini[0].style.visibility = "visible"
}
var position = 1
function errore() {

    //far comparire pian piano i pezzi
    const immagini = document.getElementsByTagName("img")
    if (position != 2) {
        immagini[position].style.visibility = "visible"
    } else {
        position++
        immagini[position].style.visibility = "visible"
    }
    if (position <= 6) {
        position++
    }
}
function pulisci() {
    document.getElementById("id_lettera").value = ""
}
function stato() {
    if (parola == document.getElementById("id_parola").value) {
        alert("Hai vinto!")
    }
    if (document.getElementsByTagName("img")[7].style.visibility == "visible") {
        alert("Hai perso!")
        const immagini = document.getElementsByTagName("img")
        immagini[2].style.visibility = "visible"
    }
}


//Cheat code con la bellissima funzione freccia
document.addEventListener('keyup', (event) => {
    var name = event.key
    if (name == "h") {
        document.getElementById("id_parola").value = parola
        stato()
    }
}, false);
