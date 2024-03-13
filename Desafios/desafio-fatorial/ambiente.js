function fatorial () {
    const txtNb = document.getElementById("textNb1");
    const num = Number(txtNb.value);
    const res = document.querySelector("p#result");
    res.innerHTML = `O valor foi: ${num}. `;
    if (num == 0) {
        res.innerHTML += "Por convenção o fatorial de 0 é 1.";
    } else if (num < 0) {
        res.innerHTML += "Impossível calcular! O valor é negativo.";
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        res.innerHTML += `O resultado desse fatorial é ${result}.`;
    }
}
