<template>
  <div id="popis">
    <div class="container">
      <button class="btn btn-primary btn-lg" v-on:click="openProf=!openProf">Profesori</button>
      <button class="btn btn-primary btn-lg" v-on:click="openAsis=!openAsis">Asistenti</button>
      <div v-if="!openProf">
        <kartica :key="polje.id" :info="polje" v-for="polje in searchPosts"></kartica>
      </div>
    </div>

    <div v-if="!openAsis" class="card">
      <div class="card-body"></div>
    </div>
  </div>
</template>


<script>
import store from "@/store.js";
import kartica from "@/components/kartica.vue";
export default {
  data() {
    return {
      openProf: true,
      openAsis: true,
      store
    };
  },
  components: {
    kartica
  },
  computed: {
    searchPosts() {
      return this.polje.filter(polje => polje.title.includes(this.searchTerm));
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0px auto 10x;
  padding: 0px;
  font-family: "Gotu", sans-serif;
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
.far {
  margin-left: 5%;
}
.far :hover {
  cursor: pointer;
}
.fa-hand-pointer :hover {
  cursor: pointer;
  content: "\f023";
}
</style>
