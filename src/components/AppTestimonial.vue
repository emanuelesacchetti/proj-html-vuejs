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
            getImageUrl(img){
                return new URL(`../assets/images/testimonail_img/${img}`,
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
                            <img :src="getImageUrl(person)" alt="">
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
                    </div>
                </div>
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
</style>