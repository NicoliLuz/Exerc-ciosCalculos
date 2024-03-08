// Desenvolva um algoritmo que valide a idade da pessoa conforme as
// leis brasileiras de votação, retornando
// uma mensagem com as condições

//1 Não possui idade para votar
//2 Voto facultativo
//3 Voto obrigatório

const idade = 7;

if (idade >= 18) {
        console.log("Possui idade para votar");
        console.log("Seu voto é obrigatório");
    } else {
        console.log("Não possui idade para votar");
        console.log("Seu voto é facultativo");
    }
