<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="social">
              <li>
                <!-- <i class="icon ion-logo-codepen"></i> -->
                <a href="https://codepen.io/jobgathu/" target="_blank">codepen</a>
              </li>
              <li>
                <!-- <i class="icon ion-logo-instagram"></i> -->
                <a href="https://github.com/zlatanMkare" target="_blank">instagram</a>
              </li>
              <li>
                <!-- <i class="icon ion-logo-github"></i> -->
                <a href="https://github.com/zlatanMkare" target="_blank">github</a>
              </li>
            </ul>
            <small class="text-uppercase">© 2018. Thou shall not steal</small>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .social {
      float: right;
    }
    .social:before {
      content: '';
      height: 1px;
      width: 4rem;
      background: #000;
      position: relative;
      top: 1.85rem;
      left: 0;
    }
    .social li a{
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1px;
        color: #000;
        font-weight: 400;
    }

    small {
      padding-top: 25px;
      font-size: 10px;
      float: left;
      color: #000;
      font-weight: 400;
    }
</style>

