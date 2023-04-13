<script>
    import SectionTitle from './SectionTitle.vue';
    import {store} from '../store.js';

    export default {
        name: 'AppTestimonial',
        components: {
            SectionTitle
        },
        data() {
            return{
                store
            }
        },
        methods: {
            getImageUrl(path, img){
                return new URL(`../assets/images/${path}/${img}`,
                import.meta.url).href
            }
        }
    }
</script>


<template>
    <div class="test-wrapper">
        <div class="container">
            <div class="title">
                <SectionTitle 
                    :section="store.title[3].section"
                    :first="store.title[3].first"
                    :title="store.title[3].title"
                />
            </div>
            
            <div class="card-cont">
                <div class="flex-item" v-for="person in store.testimonial">
                    <div class="card">
                        <div class="image">
                            <img :src="getImageUrl('testimonail_img' , person)" />
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <p class="text">
                            {{ store.text_1 }}
                        </p>
                        <div class="name"><strong>Michkel Anegl</strong></div>
                        <div class="role">
                            Marketing Management
                        </div>
                        <div class="absolute">
                            <i class="fa-solid fa-quote-right"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="client-cont">
                <div class="client-item" v-for="client in store.clients">
                    <img :src="getImageUrl('client_img', client)" />
                </div>
            </div>
            <div class="cta">
                <div class="cta-sx">
                    <div>We offer the awesome service</div>
                    <p>{{ store.text_1 }}</p>
                </div>
                <span class="cta-dx">
                    <input type="email" placeholder="Enter your email address">
                    <button>Subscribe</button>
                </span>
            </div>

        </div>
    </div>    
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';


    .container {
        @include container;
        position: relative
    }
    .card-cont {
        @include flexbox(space-between,center,nowrap);
        margin: 70px 0 20px;
    }
    .flex-item{
        width: calc((100% / 3) - 20px);
    }
    .card {
        text-align: center;
        @include flexbox(center,center,nowrap);
        flex-direction: column;
        padding: 10px;
        position: relative;
    }
    .absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;
        font-size: 135px;
    }
    .cta {
        position: absolute;
        top: 116%;
        left: -50%;
        transform: translate(50%, -50%);
        height: 150px;
        @include pink_gradient(90deg);
        width: 100%;
        border-radius: 20px;
        @include flexbox(space-between,center,nowrap);
        padding: 20px;
    }
    .cta-sx {
        width: 50%;
        color: white;

        div{
            font-size: 1.5rem;
        }
        p {
            font-size: 9px
        }
    }
    .cta-dx {
        @include flexbox(end,center,nowrap);
        background-color: white;
        padding: 5px 10px 5px 20px;
        border-radius: 20px;

        input{
            border: none;
        }
        button{
            @include blue-button;
            @include btn;
        }
    }
    .image{
        height: 70px;
        width: 70px;
        border: solid 3px $primary_color;
        border-radius: 50%;
    }
    img {
        width: 100%;
    }
    .stars {
        margin: 30px 0;
        color: $primary_color;
    }
    .text{
        margin: 0px 0 20px;
        font-size: 0.7rem;
    }
    .role {
        margin: 10px 0;
        font-size: 0.8rem;
    }
    .name {
        font-size: 0.8rem;
    }
    .client-cont {
        @include flexbox(space-around,center,nowrap);
        height: 100px;
        margin: 100px 0;
    }
    .client-item {
        width: 100px;
        margin: 20px;
        height: 100px;
    }
</style>