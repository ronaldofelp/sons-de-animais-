function playSound(selectorAudio) {

    document.querySelector(selectorAudio).play();

}

const keyList = document.querySelectorAll(".image");

for (let i = 0; i < keyList.length; i++) {

    const key = keyList[i];


    const animals = key.classList[1]


    const idAudio = `#sound_animal_${animals}`

    console.log(idAudio)

    key.onclick = function () {
        playSound(idAudio)
    };

    key.addEventListener('click', function () {

        this.classList.add('active');


        for (let j = 0; j < keyList.length; j++) {
            if (keyList[j] !== this) {
                keyList[j].classList.remove('active');
            }
        }
    });
}