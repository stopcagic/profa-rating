<template>
  <div id="home" class="container">
    <template>
<div id="login" class="container">
 <div class="card">
 <div class="card-body">
  <h1>Prijava</h1>
  
 
  <div class="input-group mb-5">
  <div class="input-group-prepend">
    <span class="input-group-text"><i class="far fa-envelope"></i></span>
  </div>
  <input type="email" name="email" required class="form-control" placeholder="Email" >
</div>
  <div class="input-group mb-5">
  <div class="input-group-prepend">
    <span class="input-group-text"><i class="fas fa-key"></i></span>
  </div>
  <input type="password" name="lozinka" required class="form-control" placeholder="Lozinka" >
</div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Zapamti me</label>
  </div>
  
<div>
    <button type="submit" class="btn btn-primary btn-lg">Prijavi se</button>
</div>

<p class="text-center">
   Nemate račun?
   <router-link to="/registracija" href="button">Registriraj se</router-link>
</p>


 </div>
      </div>
  </div>
</template>
 
  </div>
</template>

<script>


export default {
  name: 'Home',
  
}
</script>
<style scoped>

.card{
  margin: 0px auto 10px;
  width: 85%;
  background-color: #708090;
  border: 1px solid white;
  color: #272727;
  padding-top: 5%;
    color: #FFF5EE;
}

.container {
  margin: 0px auto 10x;
  max-width: 800 px;
  padding: 0px;
  font-family: 'Gotu', sans-serif;
  text-align: center;
  
  
}
a{
  color:#4169E1
}

.btn {
  margin-bottom: 5%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #4169E1;
  outline: none;
  transition: 1s ease-in-out;
  color: #FFF5EE;
  margin-top: 5%;
}
.btn:hover {
  transition: 1s ease-in-out;
  background: #4169E1;
}

input[type=email],[type=password]{
  background: transparent;
  
}

::placeholder{
  color: #FFF5EE;
}
h1{
  margin-bottom: 5%;
}
.input-group{
   
    width: 50%;
    margin: 0 auto;
}




</style>

