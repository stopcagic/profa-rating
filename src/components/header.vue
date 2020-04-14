<template>
<div class="naslov">
    <div class="title">Profa rating</div>
    <div class="subtitle">Ocijenite vašeg profesora</div>
    <div id="header">          
    <div id="app-header" >
        <ul type="button" class="navbar">
      
           <button class="button">
             <router-link class="link" to="/"><span>Home</span></router-link>
           </button>
             <button class="button">
             <router-link class="link" to="/about"><span>About</span></router-link>
           </button>
            
          
        </ul>              
    </div>
</div> 
</div>
   

</template>

<style scoped>
.button {
  
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}







#header{
    display: block;
    background: #708090  /* navbar */
}

.link{
    color: #FFF5EE;
    font-weight: bold;
}
.naslov{
    margin-bottom: 5%;
    text-align: center;
    background-image: linear-gradient(to bottom right,  #1E90FF,rgb(70, 112, 238));  /* gornji header */
    
      
}
.subtitle{
    color: #FFF5EE;
    font-size: 20px;
    margin-bottom: 5%;

}
.navbar{
  list-style: none;
   
  
}
.navbar li{
  
  display: inline-block;
  padding: 0px 20px;
  letter-spacing: 0.5px;
}

.navbar li :hover{
  border: 1px solid blue;
}


.title {
  padding-bottom: 5%;  
  padding-top: 5%;
  color: #FFF5EE;
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  font-size: 3em;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  transition: 0.3s;
  text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
  1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
  5px 13px 15px black;
}
.title:hover {
  transition: 0.3s;
  transform: scale(1.1)translate(-5%, -5%);
  text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
  1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
  1px -8px 0 grey, 5px -13px 15px black, 5px -13px 25px #808080;
}


</style>