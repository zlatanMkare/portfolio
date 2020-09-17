<template>
    <section id="portfolio">
        <div class="smallpadding"></div>

        <div class="row">
            <div class="col-md-10">
                <p ref="subheading" class="subheading">some projects I've worked on</p>
                <h2 ref="title" class="title">
                    As a front-end developer, I aim to build <span class="text-bg">progressive</span> and modern <span class="text-bg">websites</span>.
                </h2>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-5 align-self-center">
                <span class="number">01.</span>
                <br>
                <p class="subheading">Nuxt Js Template</p>
                <p>
                    Maasai is a free Nuxt js template that I built as a way to say thank you to an awesome open source project. The template features multiple blocks which I plan to increase in the near future.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://maasai.netlify.app/">View Live Site</a>
            </div>
            <div class="col-md-6 offset-md-1 order-first order-md-2">
                <img ref="port2" class="img-fluid" src="../static/maasai.png">
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6">
                <img ref="port" class="img-fluid" src="../static/folkelaanet.png">
            </div>
            <div class="col-md-5 offset-md-1 align-self-center">
                <span class="number">02.</span>
                <br>
                <p class="subheading">Folkelaanet</p>
                <p>
                    Folkelaanet is one of the flagship websites for Lendomatic. I worked on everything on the website, from the homepage design to the loan application process.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://folkelaanet.dk/">View Live Site</a>
            </div> 
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-5 align-self-center">
                <span class="number">03.</span>
                <br>
                <p class="subheading">Destinasia</p>
                <p>
                    Destinasia is a pet project of mine that I worked on. The website is basically a tour booking system. Currently I havn't had time to finish building it to a fully working website.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://destinasia.jobnjoroge.com">View Live Site</a>
            </div>
            <div class="col-md-6 offset-md-1 order-first order-md-2">
                <img ref="port2" class="img-fluid" src="../static/destinasia_new.png">
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6">
                <img ref="port3" class="img-fluid" src="../static/profilkredit_new.png">
            </div>
            <div class="col-md-5 offset-md-1 align-self-center">
                <span class="number">04.</span>
                <br>
                <p class="subheading">Profilkredit</p>
                <p>
                    Profilkredit is a Swedish mikro loan company offering consumers loans upto 20k. The site is built with Symfony Framework for the backend and Vue.js for the frontend, utilising Vuetify framework.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="https://profilkredit.se">View Live Site</a>
            </div>
        </div>

        <div class="bigpadding"></div>

        <!-- <div class="row portfolio">
            <div class="col-md-5 align-self-center">
                <span class="number">04.</span>
                <br>
                <p class="subheading">Kozy Kitchen</p>
                <p>
                    Kozy Kitchen is a restaurant based in Copenhagen. They needed an updated website that showcases their style, and includes menu's and online reservation form.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://kozykitchen.jobnjoroge.com">View Live Site</a>
            </div>
            <div class="col-md-6 offset-md-1 order-first order-md-2">
                <img ref="port4" class="img-fluid" src="../static/kozykitchen.png">
            </div>
        </div> 

        <div class="bigpadding"></div> -->

        <!-- <div class="row portfolio">
            <div class="col-md-12">
                <h3 class="others">
                    Other projects I've been involved in include <a target="_blank" href="https://folkelaanet.dk">folkelaanet.dk</a>, <a target="_blank" href="https://kvikto.dk">kvikto.dk</a> among others.
                </h3>
            </div>
        </div> -->

        <div class="smallpadding"></div>
    </section>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from 'gsap'
export default {

    mounted() {
        const { title, subheading, port } = this.$refs
        const timeline = new TimelineLite()

        timeline.from(subheading, .15, {
            y: 10,
            opacity: 0,
            ease: Sine.easeInOut
        })

        timeline.from(title, .3, {
            y: 10,
            opacity: 0,
            ease: Sine.easeInOut,
            delay: .01
        })

        timeline.from(port, .3, {
            x: -10,
            opacity: 0,
            ease: Sine.easeInOut,
            delay: .01
        })
    }

}
</script>


<style scoped>
    #portfolio {
        position: relative;
        overflow: hidden;
    }

    #portfolio img {
        border: 10px solid rgb(238 238 238);
        border-radius: 10px;
    }
    
    .number {
        font-size: 3rem;
        color: #ddd;
    }

    #portfolio .title{
        font-size: 2rem;
        line-height: 3.25rem !important;
    }

    .text-bg {
        color: #007bff;
        font-weight: 700;
    }

    .others {
        line-height: 2;
    }

    .others a {
        color: rgb(0, 123, 255);
    }
</style>
