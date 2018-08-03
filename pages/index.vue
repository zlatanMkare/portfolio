<template>
  <section>
    <!-- <div class="left">
      <h1 class="title">
        <span>Hello!</span>
          <br> 
        I'm Job Njoroge.
      </h1>
      <br>
      <h2 class="subtitle">
        A front-end developer currently working at Finans247, a fintech startup company based in Copenhagen, Denmark. At the moment I work
        a lot with vue.js, Wordpress, CSS animations and Symfony PHP framework.
      </h2>
      <div class="links">
        <nuxt-link
          to="/about"
          class="button--green">About me</nuxt-link>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div class="contact-info">
        <ul>
            <li>
              <p>jobgathunjoroge@yahoo.com</p>
            </li>
            <li>
              <p>+45 28 38 74 94</p>
            </li>
        </ul>
      </div>
    </div> -->
    <div class="row col-md-10 middle-lg">
        <div class="col-md-10 front">
          <h1 class="title">
            <span>Hello!</span>
              <br> 
            I'm Job Njoroge.
          </h1>
          <br>
          <h2 class="subtitle">
            A front-end developer currently working at Finans247, a fintech startup company based in Copenhagen, Denmark. At the moment I work
            a lot with vue.js, Wordpress, CSS animations and Symfony PHP framework.
          </h2>
          <br>
          <div class="links">
            <nuxt-link
              to="/about"
              class="btn-primary">Behind the face</nuxt-link>
          </div>
        </div>
        <div class="col-md-2">
        </div>
    </div>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.left {
  flex: 7 0 0;
  text-align: left;
  padding: 0 25px;
}

.title span {
  color: #dedede;
  font-weight: 300;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #333;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


.front {
    position: relative;
    top: 50%;
    transform: translateY(50%);
}

</style>

