<template>
  <div class="naslov">
    <ul class="navbar">
      <button class="button">
        <router-link class="link" to="/about">
          <a v-bind:class="{ currentLink: isActive }" @click="myFilter" class="dugme">| About</a>
        </router-link>
      </button>

      <div v-if="auth.authenticated">
        <button class="button">
          <router-link class="link" to="/popis">
            <a class="dugme">| Popis</a>
          </router-link>
        </button>
      </div>

      <div v-if="auth.authenticated">
        <button class="button">
          <router-link class="link" to="/oznacene">
            <a class="dugme">| Popunjene forme</a>
          </router-link>
        </button>
      </div>

      <div v-if="!auth.authenticated">
        <button class="button" v-on:click="prijaviSe = !prijaviSe">
          <router-link class="link" to="/prijava">
            <a class="dugme">| Prijava</a>
          </router-link>
        </button>
      </div>

      <div v-if="auth.authenticated">
        <button class="button" @click="logout">
          <router-link class="link" to="/">
            <a class="dugme odjava">| Odjavi se</a>
          </router-link>
        </button>
      </div>
      <a href="javascript:void(0);" class="ikona" @click="myFunction">
        <i class="fa fa-bars"></i>
      </a>
    </ul>
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
      prijaviSe: store.prijavi_se,
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.go();
    },
    myFilter: function () {
      this.isActive = !this.isActive;
      // some code to filter users
    },
    /*  myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }, */
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
ul {
  float: right;
}
.naslov {
  height: 40px;
  border-radius: 0px 0px 0px 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.384);
  backdrop-filter: blur(5px);
  -webkit-animation: w70 3s ease backwards;
}
.naslov .w70 {
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
.odjava {
  float: right;
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

@media screen and (max-width: 410px) {
  .navbar a .dugme .odjava {
    display: none;
  }
}
@media screen and (max-width: 410px) {
}
</style>
