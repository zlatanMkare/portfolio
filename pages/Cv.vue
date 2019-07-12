<template>
    <div>
        <main class="page cv-page">
            <section class="cv-block block-intro border-bottom">
                <div class="container">
                <div class="avatar">
                    <img ref="profile" class="img" width="auto" src="../static/profile.jpeg"> 
                </div>
                <br>
                <br>
                <p ref="intro">Hello! I am <strong>Job Njoroge</strong>. I am a Front End developer. I have passion for building pixel perfect, sensible and easy to use applications.</p>
                </div>
            </section>
            <section class="cv-block info">
                <div class="container">
                    <div class="work-experience group" id="work-experience">
                        <h2 ref="title" class="text-center">Work Experience</h2>
                        <div ref="item" class="item">
                            <div class="row">
                                <div class="col-md-6">
                                <h3>Front End Developer</h3>
                                <h4 class="organization">Finans 247 ApS</h4>
                                </div>
                                <div class="col-md-6">
                                <time class="period float-right">05/2017 - present</time>
                                </div>
                            </div>
                            <div class="text-muted">
                                Working as the lead Front End developer to ensure all the company's loan concepts (3) are interactive and usable.
                                <ul class="pt-2">
                                    <li>Implementing the Frontend system in Vue.js to adapt nicely to the backend core system built in symfony</li>
                                    <li>Prototyping, designing and coding new designs</li>
                                    <li>Occassionally updating the company's statistics (Vue and Chart.js)</li>
                                    <li>Maintaining all our websites</li>
                                </ul>
                            </div>
                        </div>
                        <div ref="item1" class="item">
                            <div class="row">
                                <div class="col-md-6">
                                <h3>Freelance Web Developer</h3>
                                <h4 class="organization">Freelancer, upwork</h4>
                                </div>
                                <div class="col-md-6">
                                <time class="period float-right">04/2015 - 12/2015</time>
                                </div>
                            </div>
                            <div class="text-muted">
                                After my studies, I began working as a freelance web developer. I developed websites for different clients.
                                <ul class="pt-2">
                                    <li>Built websites for clients in Drupal CMS and WordPress.</li>
                                    <li>Prototyping, designing and coding new designs</li>
                                    <li>Occassionally made custom website templates, and UI kits</li>
                                </ul>
                            </div>
                        </div>
                        <div ref="item2" class="item">
                            <div class="row">
                                <div class="col-md-6">
                                <h3>Web Developer</h3>
                                <h4 class="organization">Startup Kyiv Org.</h4>
                                </div>
                                <div class="col-md-6">
                                <time class="period float-right">03/2014 - 06/2014</time>
                                </div>
                            </div>
                            <div class="text-muted">
                                Worked as an intern Web Developer at Startup Kyiv, a startup based in Copenhagen that helps startups in Kyiv, Ukraine, easily network. My tasks included
                                <ul class="pt-2">
                                    <li>Implementing the system in in Drupal</li>
                                    <li>Implementing the startup maps using Google Maps API</li>
                                    <li>Prototyping, designing and coding new features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="education group" id="education">
                        <h2 class="text-center">Education</h2>
                        <div class="item">
                        <div class="row">
                            <div class="col-md-6">
                            <h3>Bachelor in Web Development</h3>
                            <!-- <h4 class="organization">Erhvervsakademi sjælland</h4> -->
                            <img width="200px" src="../static/school_logo.png">
                            <br>
                            <br>
                            </div>
                            <div class="col-md-6">
                            <time class="period float-right">09/2009 - 06/2014</time>
                            </div>
                        </div>
                        <p class="text-muted">
                            Studied at Zealand (Erhvervsakademi Sjælland - Roskilde). I started out with an A.P Degree in Computer Science, where I was introduced to programming, mostly Java and C#. After finishing my degree, I toped up in 
                            Bachelor in Web Development, where I turned my focus to Frontend development (JavaScript, HTML5 and Css3).
                        </p>
                        </div>
                    </div>
                    <div class="group" id="skills">
                        <div class="row">
                        <div class="col-md-6">
                            <div class="skills info-card">
                            <h2>Skills</h2>
                            <h3>Vue js, ES6 & JQuery</h3>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="80" style="width:80%">
                                </div>
                            </div>
                            <h3>HTML5, CSS/CSS3, LESS</h3>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="80" style="width:80%">
                                </div>
                            </div>
                            <h3>CMS (Wordpress)</h3>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="70" style="width:70%">
                                </div>
                            </div>
                            <h3>Other notable skills</h3>
                            <p>Drupal, twig, Sass, Vanilla Js </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-info info-card">
                            <h2>Contact Info</h2>
                            <div class="row">
                                <div class="col-1">
                                    <img width="20px" src="https://img.icons8.com/ios-glyphs/48/000000/user.png">
                                </div>
                                <div class="col-9">
                                <span>Job Gathu Njoroge</span>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-1">
                                <img width="20px" src="https://img.icons8.com/ios/50/000000/phonelink-ring.png">
                                </div>
                                <div class="col-9">
                                <span>+45 28 38 74 94</span>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-1">
                                <img width="20px" src="https://img.icons8.com/ios/50/000000/new-post.png">
                                </div>
                                <div class="col-9">
                                <span>jobgathunjoroge@yahoo.com</span>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-1">
                                <img width="20px" src="https://img.icons8.com/ios/50/000000/linkedin.png">
                                </div>
                                <div class="col-9">
                                <span><a href="https://www.linkedin.com/in/job-njoroge/" target="_blank">linkedin profile</a></span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="hobbies group" id="hobbies">
                        <h2 style="margin-bottom: 20px;" class="text-center">Hobbies</h2>
                        <p class="text-center text-muted">
                            Long walks, shooting pool, football, Netflix and chill, learning something new and the list goes on and on :D
                        </p>
                    </div>
                </div>
            </section>
            </main>
    </div>
</template>

<script>
    import { TimelineLite, Back, Elastic, Expo } from 'gsap'

    export default {
        mounted() {
            const { profile, intro, title, item, item1, item2 } = this.$refs
            const timeline = new TimelineLite()

            timeline.from(profile, .25, {
                y: 20,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })

            timeline.from(intro, .25, {
                y: 10,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })

            timeline.from(title, .25, {
                y: 10,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })

            timeline.from(item, .65, {
                x: 10,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })

            timeline.from(item1, .65, {
                x: 10,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })

            timeline.from(item2, .65, {
                x: 10,
                opacity: 0,
                ease: Sine.easeInOut, // Specify an ease
            })
        }
    }
</script>

<style>
.avatar img {
    border-radius: 50%;
    border: 5px solid #eee;
}
.cv-block{
    padding-top: 60px;
}

.cv-block.block-intro{
    text-align: center;
    max-width: 850px;
    margin: auto;
}

.cv-block.block-intro .about-me{
    max-width: 800px;
    margin: auto;
}

.cv-block.block-intro p{
    font-size: 1.5em;
    font-weight: 300;
    margin-bottom: 30px;
}

.cv-block.block-intro .btn {
  padding: 0.375rem 1rem;
  border-radius: 2em;
 }

.cv-block.block-intro .avatar{
    width: 150px;
    height: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 100px;
    margin-bottom: 50px;
    margin-top: -50px;
}

.cv-block.info{
    padding-top: 70px;
}

.cv-block.info h2{
    font-weight: bold;
    margin-bottom: 70px;
}

.cv-block.info h3{
    font-size: 1.3rem;
}

.cv-block.info .group{
    max-width: 800px;
    margin: auto;
}

.cv-block.info .group:not(:first-child){
    margin-top: 90px;
}

.cv-block.info .group .period{
    font-size: 0.8rem;
    float: none;
    font-weight: bold;
    margin-top: 4px;
    color: #6c757d;
    opacity: 0.8;
}

.cv-block.info .group .organization{
    font-size: 0.85em;
    background-color: #0ea0ff;
    display: inline-block;
    color: #fff;
    padding: 2px 20px;
    border-radius: 2em;
}

.cv-block.info .education.group .organization{
    background-color: #20c997; 
}

.cv-block.info .group .item{
    padding-bottom: 10px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
}

.cv-block.info .group h2 + .item{
    padding-top:25px;
    border-top: 1px solid #eee;
}

.cv-block.info .group .item .row{
    margin-bottom: 5px;
}

.cv-block.info .work-experience h3,
.cv-block.info .education h3{
    font-weight: bold;
}

.cv-block .info-card{
    padding: 40px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
    height: 100%;
}

.cv-block .info-card h2{
    margin-top: 0;
    margin-bottom: 24px !important;
    font-size: 1.4rem;
}

.cv-block .info-card.skills h3{
    margin-top: 25px;
    font-size: 1rem;
    font-weight: bold;
}

.cv-block .info-card.skills .progress{
    height: 3px;
}

.cv-block .info-card.contact-info .icon{
    font-size: 1.3em;
    color: #c9c9c9;
    position: relative;
    bottom: 4px;
}

.cv-block.info .hobbies p{
    max-width: 700px;
    margin: auto;
    font-size: 1.2em;
}

#hobbies {
    margin-bottom: 4em;
}

pt-2 {
    padding-top: 10px;
}
</style>
