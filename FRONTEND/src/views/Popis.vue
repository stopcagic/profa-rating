<template>
  <div class="container-fluid p-0">
    <div class="row np-gutters">
      <div class="w3-container col-xs-12 .col-sm-12 .col-md-12 col-lg-12">
        <appheader class="navbar-about"></appheader>

        <div class="container w3-center w3-animate-right">
          <div v-for="profesor in profesori" :key="profesor._id">
            <kartica :info="profesor" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { profs, auth } from "@/services";
import regeneratorRuntime from "regenerator-runtime";
import kartica from "@/components/kartica.vue";
import appheader from "@/components/header";
export default {
  name: "Home",
  data() {
    return {
      profesori: [],
    };
  },
  components: {
    kartica,
    appheader,
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let faks = auth.getFaks();
      this.profesori = await profs.getNeoznacene(faks);
    },
  },
};
</script>
<style scoped>
.w3-container {
  padding: 0px;
  margin: 0px;
}
.navbar-about {
  -webkit-animation: w100 3s ease backwards;
  animation: w100 3s ease backwards;
}
.navbar-about w100 {
  margin-left: 0%;
}
@-webkit-keyframes w100 {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0%;
  }
}
@keyframes w100 {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0%;
  }
}
</style>
