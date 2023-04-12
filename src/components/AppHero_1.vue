<script>
    import HeroCard from './HeroCard.vue';
    import {store} from '../store.js'

    export default {
        name: 'AppHero_1',
        components: {
            HeroCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="hero">
        <div class="container">
            <div class="text-cont">
                <HeroCard 
                    :first="store.hero[0].first"
                    :second="store.hero[0].second"
                    :third="store.hero[0].third"
                />
            </div>
            <div class="img-cont">
                <img src="../assets/images/hero_1.png" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables';
    @use '../styles/general.scss';
    

    .hero{
        height: 500px;
        background-color: variables.$background_blue;
        @include blue_gradient;
        padding-bottom: 50px
    }
    .container {
        @include container;
        @include flexbox(space-between,center,nowrap);

        .text-cont{
            height: 60%;
            width: 40%;
        }
        .img-cont {
            width: 50%;
            height: 90%;
            
            img {
                width: 100%;
            }
        }
    }
</style>
