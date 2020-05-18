<template>
  <div id="about" class="container">
    <div class="card">
      <h1>O aplikaciji</h1>
      <p>
        Ova web aplikacija izrađena je u svrhu vrednovanja profesora i asistenata od strane
        studenata. Profa rating omogućuje studentu da odabere profesora kojega
        želi ocjeniti, te mu zatim nudi određena pitanja, ta ista pitanja se sastoje od
        tri dijela. Prvi dio su osobna pitanja, u kojima student odgovara koliko često izlazi
        na predavanja te koja mu je najčešća ocjena u indeksu, drugi dio je anketa o porfesoru/asistentu
        a treća je komentar ukoliko student želi nešto svoje nadodati.
      </p>
      <p>
        Cilj aplikacije je omoćiti ocjenjivanje preko interneta, bez ikakve potrebe
        fizičkog dolaska studenta u učionu.
      </p>
      <p>
        Da bi ste bili u mogućnosti koristiti našu aplikaciju morate se prvo prijaviti,
        to možete postići klikom na gumb ispod.
      </p>
    </div>
    <button class="btn btn-primary btn-lg" @click="show">Prijavi se</button>
    <modal></modal>
  </div>
</template>


<script>
import kartica from "@/components/kartica.vue";
import modal from "@/components/modalPrijava.vue";

export default {
  components: {
    kartica,
    modal
  },
  methods: {
    show() {
      this.$modal.show("prijava-modal");
    },
    hide() {
      this.$modal.hide("prijava-modal");
    }
  }
};
</script>

<style scoped>
#about {
  margin: 0px auto 10x;
  padding: 0px;
  text-align: center;
}

.btn {
  margin-bottom: 5%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #4169e1;
  outline: none;
  transition: 0.3s ease-in-out;
  color: gray;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s ease-in-out;
  background: #4169e1;
  color: white;
}

.card {
  margin: 0px auto 10px;
  width: 85%;
  background-color: #f2f3f5;
  color: gray;
  padding-top: 5%;
}
p {
  margin: 5%;
}
</style>
