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
            <div class="col-md-6" style="background-color: #16e5c5;">
                <!-- <img class="img-fluid" src="../static/project1.png"> -->
            </div>
            <div class="col-md-5 offset-md-1">
                <span class="number">01.</span>
                <br>
                <p class="subheading">Minifinans</p>
                <p>
                    Minifinans is one of the flagship websites for Finans247. I worked on everything on the website, from the homepage design to the loan application process.
                </p>
                <p><a target="_blank" href="https://minifinans.dk">Live site</a></p>
            </div> 
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-5">
                <span class="number">02.</span>
                <br>
                <p class="subheading">Destinasia</p>
                <p>
                    Destinasia is a pet project of mine that I worked on. The website is basically a tour booking system. Currently I havn't had time to finish building it to a fully working website.
                </p>
                <p><a target="_blank" href="destinasia.paperplane.io">Live site</a></p>
            </div>
            <div class="col-md-6 offset-md-1" style="background-color: #16e5c5;">
                <!-- <img class="img-fluid" src="../static/dest.png"> -->
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-6" style="background-color: #ec4c99;">
                <!-- <img class="img-fluid" src="../static/learnnow.png"> -->
            </div>
            <div class="col-md-5 offset-md-1">
                <span class="number">03.</span>
                <br>
                <p class="subheading">Learn Now</p>
                <p>
                    Learn now is a website where users can easily learn a new language. The website is coded in Vue js on the frontend, and symfony framework on the backend.
                </p>
                <p><a target="_blank" href="https://learnnow.eu">Live site</a></p>
            </div>
        </div>

        <div class="bigpadding"></div>
    </section>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from 'gsap'
export default {

    mounted() {
        const { title, subheading } = this.$refs
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
    }

}
</script>


<style scoped>
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
</style>
