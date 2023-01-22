function main() {
    const form = document.querySelector('.form');

    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log("foi enviado");
    };
}

main();