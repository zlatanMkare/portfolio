<template>
    <section id="portfolio">
        <div class="smallpadding"></div>

        <div class="row">
            <div class="col-md-10">
                <p ref="subheading" class="subheading">some projects I've worked on</p>
                <h2 ref="title" class="title">
                    As a front-end developer, I aim to build <span class="text-bg">scalable</span>, <span class="text-bg">maintainable</span> and <span class="text-bg">modern</span> websites, and applications.
                </h2>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
               <div ref="port1Text" class="col-md-5 align-self-center">
                    <span class="number">01.</span>
                    <p class="subheading mb-1">Jack&Jones - Ecommerce store</p>
                    <p class="mb-2">
                        Jack&Jones is a brand house of Bestseller - Denmark's largest fashion company. I was resonsible of developing the Frontend using NUXT JS - composition API and Typescript. The site is also a Progressive Web APP (PWA).
                    </p>
                    <a class="btn btn-dark btn-pill" target="_blank" href="https://only.com">View Live Site</a>
               </div> 
               <div class="col-md-6 offset-md-1 order-first order-md-2">
                    <img ref="port1" class="img-fluid" src="../static/jj.png">
               </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
               <div class="col-md-6">
                    <img ref="port2" class="img-fluid" src="../static/shindabets.png">
               </div>
               <div ref="port2Text" class="col-md-5 offset-md-1 align-self-center">
                    <span class="number">02.</span>
                    <p class="subheading mb-1">Shinda Bets</p>
                    <p class="mb-2">
                        I build ShindaBets from scratch using Nuxt Js and Vue 3, utilizing REST API from Wordpress and a custom API. The site is also Server-Side rendered and well optimized for SEO.
                    </p>
                    <a class="btn btn-dark btn-pill" target="_blank" href="http://shindabets.co.ke">View Live Site</a>
               </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
               <div class="col-md-5 align-self-center">
                    <span class="number">03.</span>
                    <p class="subheading mb-1">Maasai - Nuxt Template</p>
                    <p class="mb-2">
                        Maasai is a free Nuxt js template that I built as a way to say thank you to an awesome open source project. The template features multiple blocks which I plan to increase in the near future.
                    </p>
                    <a class="btn btn-dark btn-pill" target="_blank" href="http://maasai.netlify.app/">View Live Site</a>
               </div> 
               <div class="col-md-6 offset-md-1 order-first order-md-2">
                    <img ref="port" class="img-fluid" src="../static/maasai.png">
               </div>
        </div>    

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6">
                <img ref="port3" class="img-fluid" src="../static/profilkredit_new.png">
            </div>
            <div class="col-md-5 offset-md-1 align-self-center">
                <span class="number">04.</span>
                <p class="subheading mb-1">Profilkredit - Online banking</p>
                <p class="mb-2">
                    Profilkredit is a Swedish online bank. I was responsible of building the front-facing website and the loan application flow which is built on Symfony 3, Vue JS 2 and Twig templating language.
                </p>
                <a class="btn btn-dark btn-pill" target="_blank" href="https://profilkredit.se">View Live Site</a>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="smallpadding"></div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
export default {

    mounted() {
        const { title, subheading, port1, port2, port1Text, port2Text } = this.$refs
        const timeline = gsap.timeline()

        timeline.from(subheading, .15, {
            y: 10,
            opacity: 0,
            ease: "sine.easeInOut"
        })

        timeline.from(title, .3, {
            y: 10,
            opacity: 0,
            ease: "sine.easeInOut",
            delay: .01
        })

        timeline.from(port1, .3, {
            x: -10,
            opacity: 0,
            ease: "sine.easeInOut",
            delay: .01
        })

        timeline.from(port1Text, .3, {
            x: 10,
            opacity: 0,
            ease: "sine.easeInOut",
            delay: .01
        })

        timeline.from(port2, .3, {
            x: -10,
            opacity: 0,
            ease: "sine.easeInOut",
            delay: .01
        })

        timeline.from(port2Text, .3, {
            x: 10,
            opacity: 0,
            ease: "sine.easeInOut",
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
        color: #a8a8a8;
        font-weight: 800;
        text-decoration: none;
        border-bottom: 2px dashed #a8a8a8;
        padding-bottom: 3px;
    }

    .others {
        line-height: 2;
    }

    .others a {
        color: rgb(0, 123, 255);
    }
</style>
