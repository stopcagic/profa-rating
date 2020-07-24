<template>
  <div class="naslov">
    <div class="navbar" id="myTopnav">
      <router-link class="link button" to="/about">
        <a v-bind:class="{ currentLink: isActive }" class="dugme">| About</a>
      </router-link>

      <div v-if="auth.authenticated">
        <router-link class="link button" to="/popis">
          <a class="dugme">| Popis</a>
        </router-link>
      </div>

      <div v-if="auth.authenticated">
        <router-link class="link button" to="/oznacene">
          <a class="dugme">| Popunjene forme</a>
        </router-link>
      </div>

      <div v-if="!auth.authenticated">
        <router-link class="link button" to="/prijava" v-on:click="openLogin()">
          <a class="dugme">| Prijava</a>
        </router-link>
      </div>

      <div v-if="auth.authenticated">
        <router-link class="link button" to="/" @click="logout">
          <a class="dugme odjava">| Odjavi se</a>
        </router-link>
      </div>
      <!--   <a href="javascript:void(0);" class="ikona" @click="myFunction">
        <i class="fa fa-bars"></i>
      </a>-->
    </div>
  </div>
</template>
<script>
import { auth } from "@/services";
import store from "../store.js";

export default {
  data() {
    return {
      auth: auth.state,
      isActive: false,
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.go();
    },
    openLogin() {
      this.$store.commit("showLogin");
      console.log(this.$store.state.prijavi_se);
    },
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    },
  },
};
</script>

<style scoped>
.currentLink {
  font-size: 150%;
}
.odjava:hover {
  color: rgb(219, 6, 6);
}
.navbar {
  float: right;
}
.navbar a {
  -webkit-animation: w70 3s ease backwards;
  animation: w70 3s ease backwards;
}
.naslov {
  height: 40px;
  border-radius: 0px 0px 0px 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.384);
  backdrop-filter: blur(5px);
  -webkit-animation: w70 3s ease backwards;
  animation: w70 3s ease backwards;
}
.naslov .w70 {
  margin-left: 0%;
}
.navbar .w70 {
  margin-left: 0%;
}
.button {
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 1em;
  transition: all 0.5s;
  cursor: pointer;
}
.button .dugme {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.dugme::after:active {
  font-size: 50px;
}

.button .dugme:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover .dugme {
  padding-right: 25px;
}

.button:hover .dugme:after {
  opacity: 1;
  right: 0;
}
.naslov .ikona {
  display: none;
}
.link {
  color: white;
}

@-webkit-keyframes w70 {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}
@keyframes w70 {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

/* @media screen and (max-width: 407px) {
  .navbar a {
    display: none;
  }
  .navbar a.ikona {
    float: right;
    display: block;
  }
}
@media screen and (max-width: 407px) {
  .navbar.responsive {
    position: relative;
  }
  .navbar.responsive a.ikona {
    position: absolute;
    right: 0;
    top: 0;
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
} */
</style>
