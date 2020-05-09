<template>
  <div>
    <div v-for="profesor in profesori" :key="profesor._id">
      <kartica :info="profesor" />
    </div>
    <button class="btn btn-primary btn-lg" @click="show">Prijavi se</button>
    <modal></modal>
  </div>
</template>
 

<script>
import { profs } from "@/services";
import regeneratorRuntime from "regenerator-runtime";
import kartica from "@/components/kartica.vue";
import modal from "@/components/modalPrijava.vue";
export default {
  name: "Home",
  data() {
    return {
      profesori: []
    };
  },
  components: {
    kartica,
    modal
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.profesori = await profs.getall();
    },
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
</style>

