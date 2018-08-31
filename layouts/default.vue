<template>
  <div>
    <div class="nav container">
      <div class="col-md-12">

        <div class="humburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <ul class="navigation">
          <li class="navigation-item">
            <nuxt-link
            to="/">Home</nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link
            to="/about">About</nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link
            to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link
            to="/contact">Contact</nuxt-link>
          </li>
        </ul>
        
      </div>
    </div>

    <div class="content">
      <div class="container">
        <nuxt/>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="row center-xs">
          <div class="col-xs-4">
            <ul class="social">
              <li>
                <i class="icon ion-logo-codepen"></i>
              </li>
              <li>
                <i class="icon ion-logo-instagram"></i>
              </li>
              <li>
                <i class="icon ion-logo-github"></i>
              </li>
            </ul>
            <br>
            <small>© 2018. Thou shall not steal</small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  padding: 30px;
}

.lead {
  color: #000;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
}

.humburger {
  cursor: pointer;
  float: right;
  margin-top: -8px;
  margin-left: 15px;
}

.humburger .line {
  width: 30px;
  height: 1px;
  background-color: #333;
  margin: 8px 0;
}

.content {
  min-height: 90vh;
  padding-bottom: 100px;
}

footer {
  height: 100px;
  margin-top: -100px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.navigation {
  list-style-type: none;
  display: inline-flex;
  float: right;
}

/** Navigation items **/
.navigation-item a {
  
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
    font-family: 'Open Sans', sans-serif;
    display: block;
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 1px;
}

p {
    font-weight: 300;
    font-size: 18px;
    color: #333;
    word-spacing: 5px;
    padding-bottom: 15px;
    line-height: 1.5;
}

.btn-primary {
  border: 1px solid #000;
  padding: 15px 20px;
  background: transparent;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  transition: all 1.5s cubic-bezier(.23,1,.32,1)
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #000;
  color: #fff;
}
</style>

