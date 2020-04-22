<template>
  <div>
    <div class="container no-padd-x">
      <nav class="navbar navbar-expand-lg navbar-light">
        <nuxt-link to="/">
          <span ref="logo" class="navbar-brand">Njoroge.</span>
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li ref="link1" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
              <nuxt-link class="link" to="/"> 
                <span class="menu-item-name">Home</span>
              </nuxt-link>
            </li>
            <li ref="link2" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
              <nuxt-link class="link" to="/portfolio">
                <span class="menu-item-name">Portfolio</span>
              </nuxt-link>
            </li>
            <li ref="link3" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
              <nuxt-link class="link" to="/cv">
                <span class="menu-item-name">Resume</span>
              </nuxt-link>
            </li>
            <li ref="link4" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
              <nuxt-link class="link" to="/contact">
                <span class="menu-item-name">Contact</span>
              </nuxt-link>
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
        const { logo, link1, link2, link3, link4 } = this.$refs
        const timeline = new TimelineLite()

          timeline.from(logo, 1, {
            y: -10,
            opacity: 0,
            ease: Sine.easeInOut
          })

          timeline.from(link1, .15, {
            y: -10,
            opacity: 0,
            ease: Sine.easeInOut
          })

          timeline.from(link2, .15, {
            y: -10,
            opacity: 0,
            ease: Sine.easeInOut
          })

          timeline.from(link3, .15, {
            y: -10,
            opacity: 0,
            ease: Sine.easeInOut
          })

          timeline.from(link4, .15, {
            y: -10,
            opacity: 0,
            ease: Sine.easeInOut
          })
    }
}
  
</script>

<style>
  .navbar {
    padding: 2rem 1.5rem;
  }
  .nav-item {
    position: relative;
    padding: 10px 0;
  }
  .nav-item .link {
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 20px;
    color: #000;
    letter-spacing: 2px;
    font-weight: 500;
  }

  @media(max-width: 992px) {
    .nav-item .link {
      padding: 0;
    }
  }

  .link .menu-item-name:before {
    content: '';
    position: absolute;
    bottom: -5px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 45%;
    height: 2px;
    pointer-events: none;
    background: currentColor;
    transform: scale3d(0,1,1);
    transform-origin: 100% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.8,0,0.2,1);
  }

  .link:hover .menu-item-name::before,
  .link:focus .menu-item-name::before,
  .link:active .menu-item-name::before {
    transform: scale3d(1,1,1);
    transform-origin: 0% 50%;
  }

  @media (max-width: 481px) {
    .link:hover .menu-item-name::before,
    .link:focus .menu-item-name::before,
    .link:active .menu-item-name::before {
      display: none;
    }
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
