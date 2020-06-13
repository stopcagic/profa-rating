<template>
  <div class="card">
    <router-link class="link" to="/anketa">
      <div class="card-body">
        {{info.titula}}
        {{info.ime}}
        {{info.prezime}}
        <i class="fas fa-clipboard"></i>
      </div>
    </router-link>
  </div>
</template> 
<script>
export default {
  props: ["info"]
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
.card {
  cursor: pointer;
  margin: 0px auto 10px;
  width: 85%;
  background-color: #f2f3f5;
  margin-top: 5%;
}
.fas {
  color: rgba(51, 62, 121, 0.842);
  float: right;
  font-size: 150%;
}
.card-body {
  color: #272727;
}
</style>
