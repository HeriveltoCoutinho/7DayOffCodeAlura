let segundaOpcao;
const primeiraOpcao = prompt("Você vai seguir a área de programação Front-End ou Back-End?")

if (primeiraOpcao == "Front-End"){
    segundaOpcao = prompt("Você vai aprender React ou Vue?");
    if (segundaOpcao == "React"){
        console.log("Você quer aprender " + primeiraOpcao + " e " + segundaOpcao);
    }       else if (segundaOpcao == "Vue"){
        console.log("Você quer aprender " + primeiraOpcao + " e " + segundaOpcao);
    }
}       else if (primeiraOpcao == "Back-End"){
    segundaOpcao = prompt("Você quer aprender C# ou Java?")
    if (segundaOpcao == "C#") {
        console.log("Você quer aprender " + primeiraOpcao + " e " + segundaOpcao);
    }       else if (segundaOpcao == "Java"){
        console.log("Você quer aprender " + primeiraOpcao + " e " + segundaOpcao);
    }
}

const terceiraOpcao = prompt("Você pretende se especializar na sua área escolhida ou virar full-stack?");

let quartaOpcao = [];
let i = 0;
while (i <= 0){
    let novaOpcao = prompt("Tem mais alguma tecnologia que você pretende se especializar ou conhecer?");
    if (novaOpcao == "" || novaOpcao == undefined || novaOpcao == null){
        i++
    } else {
        quartaOpcao.push(novaOpcao);
        alert("Interessante, " + novaOpcao + " é uma tecnologia bacana, boa sorte!")
        console.log(quartaOpcao)
    }
}

const finalMessage = alert(`Você vai ser ${primeiraOpcao} e aprenderá ${segundaOpcao}, além de querer ${terceiraOpcao} e tem interesse nessas tecnologias: ${quartaOpcao}`);