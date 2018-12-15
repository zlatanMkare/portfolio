<template>
    <section id="portfolio">
        <div class="smallpadding"></div>

        <div class="row">
            <div class="col-md-10">
                <p class="subheading">some projects I've worked on</p>
                <h2 class="title">
                    As a front-end developer, I try to build <span class="text-bg">progressive</span> and modern <span class="text-bg">websites</span> that users will love.
                </h2>
            </div>
        </div>

        <div class="bigpadding"></div>

        <div class="row portfolio">
            <div class="col-md-8">
                <img class="img-fluid" src="../static/project1.png">
            </div>
            <div class="col-md-4">
                <span class="number">01.</span>
                <br>
                <p class="subheading">Project one</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum natus deleniti dignissimos delectus sequi, dolores eius saepe in sunt fuga maxime rerum rem explicabo iste magnam nesciunt libero recusandae.
                </p>
                <br>
                <h2 class="title">Project one</h2>
            </div> 
        </div>

        <div class="smallpadding"></div>

        <div class="row portfolio">
            <div class="col-md-8">
                <img class="img-fluid" src="../static/dest.png">
            </div>
            <div class="col-md-4">
                <span class="number">02.</span>
                <br>
                <p class="subheading">Project two</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum natus deleniti dignissimos delectus sequi, dolores eius saepe in sunt fuga maxime rerum rem explicabo iste magnam nesciunt libero recusandae.
                </p>
                <br>
                <h2 class="title">Project two</h2>
            </div>
        </div>

        <div class="smallpadding"></div>

        <div class="row portfolio">
            <div class="col-md-8">
                <img class="img-fluid" src="../static/learnnow.png">
            </div>
            <div class="col-md-4">
                <span class="number">03.</span>
                <br>
                <p class="subheading">Project three</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum natus deleniti dignissimos delectus sequi, dolores eius saepe in sunt fuga maxime rerum rem explicabo iste magnam nesciunt libero recusandae.
                </p>
                <br>
                <h2 class="title">Project three</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
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
