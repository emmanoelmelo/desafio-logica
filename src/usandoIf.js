let heroName = "Zeno"
let heroExp = 1000
let heroRank = ""

if (heroExp <= 1000){
heroRank = "Ferro"
}
else if (heroExp <= 2000){
heroRank = "Bronze"
}
else if (heroExp <= 5000){
heroRank = "Prata"
}
else if (heroExp <= 7000){
heroRank = "Ouro"
}
else if (heroExp <= 8000){
heroRank = "Platina"
}
else if (heroExp <= 9000){
heroRank = "Ascendente"
}
else if (heroExp <= 10000){
heroRank = "Imortal"
}
else{
heroRank = "Radiante"
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroRank)