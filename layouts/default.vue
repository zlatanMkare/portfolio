<template>
  <div>
    <Navbar></Navbar>

    <div class="container-fluid">
      <div class="content">
        <div class="container">
          <nuxt/>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Footer from "~/components/Footer.vue";

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position:relative; 
  min-height: 100%;
  margin: 0;
}

html,body{
  margin:0;
  padding:0;
  height: 100vh;
  cursor: url("https://i.imgur.com/xywWboC.png"), auto;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}


.lead {
  color: #000;
  font-size: 18px;
  line-height: 40px;
  font-weight: 300;
}

footer {
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.navigation-item {
  padding: 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: 700;
  color: #000;
  text-decoration: none;

}

.contact-info p {
  padding: 5px 0;
}

.social {
  list-style-type: none;
  display: inline-flex;
  padding: 0;
  margin-bottom: 10px;
}

.social li {
  font-size: 30px;
  padding: 0 10px;
}

.ion-logo-instagram {
  color: #333;
}
.ion-logo-github {
  color: #333;
}

.smallpadding {
    padding: 30px 0;
}

.bigpadding {
    padding: 60px 0;
}

.subheading {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
}

.title {
    display: block;
    font-weight: 500;
    font-size: 2.3rem;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 1px;
}

p {
    font-weight: 300;
    font-size: 15px;
    color: #333;
    word-spacing: 5px;
    padding-bottom: 15px;
    line-height: 1.5;
}

#__layout {
  overflow: hidden;
}

</style>

