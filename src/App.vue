<script setup>
import { reactive } from "vue";

const state = reactive({
  numero1: 0,
  numero2: 0,
  operacao: "+",
  resultado: 0,
});

const multiplicacao = () => {
  return state.numero1 * state.numero2;
};

const operacoes = () => {
  const { operacao } = state;

  switch (operacao) {
    case "*":
      return state.numero1 * state.numero2;
    case "/":
      return (state.numero1 / state.numero2).toFixed(2);
    case "-":
      return state.numero1 - state.numero2;
    default:
      return parseInt(state.numero1) + parseInt(state.numero2);
  }
};
</script>

<template>
  <div class="container bg-light">
    <div class="row">
      <h1>Calculadora aritmética</h1>
    </div>
    <div class="row">
      <div class="col-md-5">
        <input
          type="number"
          value="0"
          @keyup="(e) => (state.numero1 = e.target.value)"
        />
      </div>
      <div class="col-md-3">
        <input
          type="number"
          value="0"
          @keyup="(e) => (state.numero2 = e.target.value)"
        />
      </div>
      <div class="col-md-2">
        <select @change="(e) => (state.operacao = e.target.value)">
          <option value="*">Multiplicar</option>
          <option value="/">Dividir</option>
          <option value="+" selected>Somar</option>
          <option value="-">Subtrair</option>
        </select>
      </div>
    </div>
    <div class="row">
      <h2>Resultado: {{ operacoes() }}</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
.row {
  margin-bottom: 10px;
}
</style>
