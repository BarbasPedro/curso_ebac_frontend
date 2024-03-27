class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  fazerSom() {
    throw new Error('Método abstrato fazerSom não implementado');
  }
}

class Cachorro extends Animal {
  fazerSom() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  fazerSom() {
    return "Miau!";
  }
}

const animal1 = new Cachorro("Joaquim", 2);
const animal2 = new Gato("Simba", 8);
const animal3 = new Cachorro("Pini", 7);

console.log(`${animal1.nome} faz ${animal1.fazerSom()}`);
console.log(`${animal2.nome} faz ${animal2.fazerSom()}`);
console.log(`${animal3.nome} faz ${animal3.fazerSom()}`);
