let nome = "mulherMaravilha";
let xp = 8500;
let nível = "";

if (xp < 1000) {
    nível = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nível = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nível = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nível = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nível = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nível = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nível = "Imortal";
} else if (xp >= 10001) {
    nível = "Radiante";
}

// Saída da mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nível}.`);


