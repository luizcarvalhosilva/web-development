function whatTime() {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    let dayOfWeek = dayName[diaAtual];
    if (dataAtual.getHours() <= 12) {
        var x = "AM";
    } else {
        var x = "PM";
    }
    console.log(`Today is: ${dayOfWeek}.`);
    console.log(`${dataAtual.getHours()} ${x} : ${dataAtual.getMinutes()} : ${dataAtual.getSeconds()}`);
}

whatTime();