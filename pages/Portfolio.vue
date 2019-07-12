<template>
    <section id="portfolio">
        <div class="smallpadding"></div>

        <div class="row">
            <div class="col-md-10">
                <p ref="subheading" class="subheading">some projects I've worked on</p>
                <h2 ref="title" class="title">
                    As a front-end developer, I try to build <span class="text-bg">progressive</span> and modern <span class="text-bg">websites</span> that users will love.
                </h2>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6">
                <img ref="port" class="img-fluid" src="../static/minifinans.png">
            </div>
            <div class="col-md-5 offset-md-1 align-self-center">
                <span class="number">01.</span>
                <br>
                <p class="subheading">Minifinans</p>
                <p>
                    Minifinans is one of the flagship websites for Finans247. I worked on everything on the website, from the homepage design to the loan application process.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="https://minifinans.dk">View Live Site</a>
            </div> 
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-5 align-self-center">
                <span class="number">02.</span>
                <br>
                <p class="subheading">Destinasia</p>
                <p>
                    Destinasia is a pet project of mine that I worked on. The website is basically a tour booking system. Currently I havn't had time to finish building it to a fully working website.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://destinasia.jobnjoroge.com">View Live Site</a>
            </div>
            <div class="col-md-6 offset-md-1">
                <img ref="port2" class="img-fluid" src="../static/destinasia.png">
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6">
                <img ref="port3" class="img-fluid" src="../static/learnnow.png">
            </div>
            <div class="col-md-5 offset-md-1 align-self-center">
                <span class="number">03.</span>
                <br>
                <p class="subheading">Learn Now</p>
                <p>
                    Learn now is a website where users can easily learn a new language. The website is coded in Vue js on the frontend, and symfony framework on the backend.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="https://learnnow.eu">View Live Site</a>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-5 align-self-center">
                <span class="number">04.</span>
                <br>
                <p class="subheading">Kozy Kitchen</p>
                <p>
                    Kozy Kitchen is a restaurant based in Copenhagen. They needed an updated website that showcases their style, and includes menu's and online reservation form.
                </p>
                <a class="btn btn-primary btn-pill" target="_blank" href="http://kozykitchen.jobnjoroge.com">View Live Site</a>
            </div>
            <div class="col-md-6 offset-md-1">
                <img ref="port4" class="img-fluid" src="../static/kozykitchen.png">
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-12">
                <h3 class="others">
                    Other projects I've been involved in include <a target="_blank" href="https://kassekreditten.dk">kassekreditten.dk</a>, <a target="_blank" href="https://folkelaan.dk">folkelaan.dk</a>, <a target="_blank" href="https://kvikto.dk">kvikto.dk</a> and <a target="_blank" href="https://detmodernehjem.dk">detmodernehjem.dk</a> among others.
                </h3>
            </div>
        </div>

        <div class="bigpadding"></div>
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
    
    .number {
        font-size: 3rem;
        color: #ddd;
    }

    #portfolio .title{
        font-size: 2rem;
        line-height: 3.25rem !important;
    }

    .text-bg {
        background: rgb(25, 25, 25);
        padding: 0px 10px;
        color: rgb(255, 255, 255);
    }

    .others {
        line-height: 2;
    }

    .others a {
        color: #eeeeee;
        background: #000;
        padding: 5px;
    }
</style>
