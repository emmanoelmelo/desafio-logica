let heroName = "Zeno"
let heroExp = 1001
let heroRank = ""

const ranks = [
  { maxExp: 1000, nome: "Ferro" },
  { maxExp: 2000, nome: "Bronze" },
  { maxExp: 5000, nome: "Prata" },
  { maxExp: 7000, nome: "Ouro" },
  { maxExp: 8000, nome: "Platina" },
  { maxExp: 9000, nome: "Ascendente" },
  { maxExp: 10000, nome: "Imortal" },
  { maxExp: Infinity, nome: "Radiante" }
]

for (let i = 0; i < ranks.length; i++) {
  if (heroExp <= ranks[i].maxExp) {
    heroRank = ranks[i].nome
    break
  }
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroRank)