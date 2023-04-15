function tocaSom() {
    document.querySelector("#som_animal_vaca").play()

}

const listaDeTeclas = document.querySelectorAll(".imagem")



for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]
    tecla.onclick = function () {
        tocaSom()
    }





}