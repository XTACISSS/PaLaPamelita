const buttonYes = document.getElementById('yes');
const buttonNo = document.getElementById('no');


const dijoQueSi = () => {

    Swal.fire({

        title: '😸',
        imageUrl: 'assets/img/gato.jpg',
        imageWidth: 200
    }).then(function() {
        window.location = "https://www.youtube.com/watch?v=eopPKANmKyg"
    });

}

const evitarMiCorazonRoto = () => {

    buttonNo.style.position = 'absolute';

    buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';

}

buttonYes.addEventListener('click', dijoQueSi);
buttonNo.addEventListener('mouseover', evitarMiCorazonRoto);