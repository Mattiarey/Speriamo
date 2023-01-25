//"onomatopeico","aberrazione","toponimo","aracnofobia","entropia","iniquo"
const arrayStringhe = ["saba"]
numero = Math.floor(Math.random() * arrayStringhe.length)

//quando premi il bottone "fatto"
function done() {
    let parola = arrayStringhe[numero]


    let lettera = document.getElementById("id_lettera").value
    lettera = lettera.toLowerCase()

    //mettere che ci siano 2 alert diversi
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

                    //cambiare trattini se si trova il modo di non farli attaccare tra loro _
                    //forse dovrei cambiare il font della pagina, o magari c'È un'opzione css
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
        }
    }
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
        trattini += "-"
    }
    document.getElementById("id_parola").value = trattini
}
function scompari(){
    let immagini = []
    immagini = document.getElementsByTagName("img").style
}
