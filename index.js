// Criando a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O heroi ${this.nome} da classe ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando um herói e chamando o método atacar
const meuHeroi = new Heroi("Kratos", 30, "guerreiro");
meuHeroi.atacar();
