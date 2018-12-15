<template>
  <div>
    <div class="container no-padd-x">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a ref="logo" class="navbar-brand" href="#">Njoroge.</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <nuxt-link
              to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
              to="/portfolio">Portfolio</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
              to="/cv">Resume</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
              to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from 'gsap'

export default {
    mounted() {
        const { logo } = this.$refs
          const timeline = new TimelineLite()

          timeline.to(logo, 1, {
            x: -15,
            opacity: 1,
            ease: Back.easeInOut, // Specify an ease
          })
    }
}
  
</script>

<style>
  .navbar {
    padding: 2rem 1.5rem;
  }
  .nav-item a {
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 20px;
    color: #000;
    letter-spacing: 2px;
  }
  .nav-item a::hover {
    text-decoration: underline;
    font-weight: 500;
  }
  .no-padd-x {
    padding-left: 0px;
    padding-right: 0px;
  }
  .navbar-brand {
      font-size: 25px;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
  }
  .page-enter-active {
    transition: opacity 0.25s ease-out;
  }

  .page-leave-active {
    transition: opacity 0.25s ease-in;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
</style>
