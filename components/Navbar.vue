<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
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
  
</script>

<style>
  .nav-item a {
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 20px;
    color: #000;
    letter-spacing: 2px;
  }
</style>
