<template>
  <div class="container-fluid" id="about">
    <div class="row">
      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 left">
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12 left title">
            <div class="w3-container">
              <div @click="idiHome" class="w3-center w3-animate-left hero">
                OCIJENITE
                PROFESORA
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
            <div class="w3-center w3-animate-left" id="logo logo_about">
              <div class="logo-title">
                <div class="first-container share">
                  <h1 class="Profa">
                    <span id="one">P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>f</span>
                    <span>a</span>
                    <br />
                    <span>R</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="w3-container col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
            <div class="w3-center w3-animate-left">
              <h1>O aplikaciji</h1>
              <p class="opis">
                Ova web aplikacija izrađena je u svrhu vrednovanja profesora i asistenata od strane
                studenata. Profa rating omogućuje studentu da odabere profesora kojega
                želi ocjeniti, te mu zatim nudi određena pitanja, ta ista pitanja se sastoje od
                tri dijela. Prvi dio su osobna pitanja, u kojima student odgovara koliko često izlazi
                na predavanja te koja mu je najčešća ocjena u indeksu, drugi dio je anketa o porfesoru/asistentu
                a treća je komentar ukoliko student želi nešto svoje nadodati.
              </p>
              <p class="opis">
                Cilj aplikacije je omoćiti ocjenjivanje preko interneta, bez ikakve potrebe
                fizičkog dolaska studenta u učionu.
              </p>
              <p class="opis">
                Da bi ste bili u mogućnosti koristiti našu aplikaciju morate se prvo prijaviti,
                to možete postići klikom na gumb ispod.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6 right">
        <app-header></app-header>

        <div class="col">
          <div v-if="auth.authenticated">
            <div class="profil">
              <div class="card-header">
                <h2>Korisnički profil</h2>
              </div>

              <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
                <div class="row">
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12">Email:</div>
                </div>
                <div class="row">
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12">Fakultet:</div>
                </div>

                <div class="row">
                  <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6">
                    <button
                      v-on:click="prikaziEmail=!prikaziEmail "
                      class="profil-btn"
                    >Promijeni Email</button>
                  </div>

                  <div class="col-xs-6 .col-sm-6 .col-md-6 col-lg-6">
                    <button
                      v-on:click="prikaziLozinku=!prikaziLozinku  "
                      class="profil-btn"
                    >Promijeni Lozinku</button>
                  </div>
                </div>
                <div
                  v-if="!prikaziEmail"
                  class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12"
                >
                  Trenutačan email
                  <div class="col promjena">
                    <input
                      type="text"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>Novi email
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12 promjena">
                    <input
                      type="text"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>Ponovite novi email
                  <div class="card-body col-xs-12 .col-sm-12 .col-md-12 col-lg-12 promjena">
                    <input
                      type="text"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>
                </div>

                <div v-if="!prikaziLozinku" class="col">
                  Trenutačna lozinka
                  <div class="col promjena">
                    <input
                      type="password"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>Nova lozinka
                  <div class="col promjena">
                    <input
                      type="password"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>Ponovite novu lozinku
                  <div class="col promjena">
                    <input
                      type="password"
                      name="lozinka"
                      required
                      class="form-control"
                      v-model="lozinka"
                    />
                  </div>
                  <button>Podnesi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import kartica from "@/components/kartica.vue";
import header from "@/components/header";
import prijava from "./Prijava.vue";
import registracija from "./Registracija.vue";
import store from "../store.js";
import { auth } from "@/services";

export default {
  data() {
    return {
      prikaziPrijava: store.prikaziPrijava,
      prikaziRegistracija: store.registriraj_se,
      auth: auth.state,
      prikaziEmail: true,
      prikaziLozinku: true
    };
  },
  components: {
    kartica,
    "app-header": header,
    prijava,
    registracija
  },
  methods: {
    idiHome() {
      this.$router.push({ name: "About" });
    }
  }
};
</script>

<style scoped>
@import url("../css/styles.css");
</style>
