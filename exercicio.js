const alunos = [];

const alunosComNota = alunos.map( (aluno) => {
  return {
    nome: aluno,
    nota: ''
  }
})

alunosComNota.push({nome: 'Pedro', nota: 5})
alunosComNota.push({nome: 'Sheri', nota: 10})
alunosComNota.push({nome: 'Joaquim', nota: 6})

const Aprovados = () => {

  for (let i=0; i<alunosComNota.length; i++ ) {
    if (alunosComNota[i].nota >= 6) {
      console.log(alunosComNota[i]);
    }
  }
}

Aprovados();
