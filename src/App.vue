<script setup>
import { ref } from 'vue';

const RUN = ref('22.222.222-2');
const apellidos = ref('MUSK');
const nombres = ref('ELON REEVE');
const nacionalidad = ref('SUDAFRICANO');
const sexo = ref('M');
const fechaNacimiento = ref('28 JUN 1971');
const numeroDocumento = ref('222.222.222');
const fechaEmision = ref('01 ENE 2025');
const fechaVencimiento = ref('01 ENE 2030');
</script>

<template>
  <div class="carnet">
    <aside>
      <div>
        <span>CEDULA DE INDENTIDAD</span>
        <img width="40" src="./assets/img/chile_bandera.png" alt="Bandera de Chile" />
      </div>
      <img src="./assets/img/foto_elon.jpg" alt="Foto de Elon" />
      <p>RUN {{ RUN }}</p>
    </aside>
    <main>
      <header>
        <p>REPUBLICA DE CHILE</p>
        <span>SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN</span>
      </header>
      <section>
        <article>
          <header>APELLIDOS</header>
          <span>{{ apellidos }}</span>
        </article>
        <article>
          <header>NOMBRES</header>
          <span>{{ nombres }}</span>
        </article>
        <div class="grid-2-columns">
          <article>
            <header>NACIONALIDAD</header>
            <span>{{ nacionalidad }}</span>
          </article>
          <article>
            <header>SEXO</header>
            <span>{{ sexo }}</span>
          </article>
        </div>
        <div class="grid-2-columns">
          <article>
            <header>FECHA DE NACIMIENTO</header>
            <span>{{ fechaNacimiento }}</span>
          </article>
          <article>
            <header>NÚMERO DOCUMENTO</header>
            <span>{{ numeroDocumento }}</span>
          </article>
        </div>
        <div class="grid-2-columns">
          <article>
            <header>FECHA DE EMISIÓN</header>
            <span>{{ fechaEmision }}</span>
          </article>
          <article>
            <header>FECHA DE VENCIMIENTO</header>
            <span>{{ fechaVencimiento }}</span>
          </article>
        </div>
        <article>
          <header>FIRMA DEL TITULAR</header>
          <span>X Æ A-12</span>
        </article>
      </section>
    </main>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 10px;
  font-family: sans-serif;
}

.carnet {
  width: 400px;
  height: 230px;
  background: #c8deed;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 15px;
  box-shadow: 0px 0px 10px 2px black;
}

aside div {
  display: flex;
}

aside > img {
  margin-top: 15px;
  width: 100%;
}

aside p {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}

main {
  padding: 0px 14px;
}

main article {
  margin: 4px 0px;
}

main article header {
  font-weight: bold;
  color: #0235a4;
  font-size: 8px;
}

main header p {
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #0235a4;
}

main header span {
  font-size: 8px;
  color: #399be1;
}

main section {
  margin-top: 10px;
}

main section article span {
  font-size: 13px;
  font-weight: 600;
}

main section .grid-2-columns {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>


