<script>
    import HeroCard from './HeroCard.vue';
    import {store} from '../store.js';

    export default {
        name: 'AppHero_2',
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

            <div class="img-cont">
                <img src="../assets/images/hero_2/men-data.png" alt="">
            </div>
            <div class="text-cont">
                <HeroCard 
                    :first="store.hero[1].first"
                    :second="store.hero[1].second"
                    :third="store.hero[1].third"
                />
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables';
    @use '../styles/general.scss';
    

    .hero{
        background-color: variables.$background_blue;
        @include blue_gradient;
        padding: 50px
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
            text-align: center;
            padding-top: 20px;
            background-image: url(../assets/images/hero_2/nemoodar.png);
            background-position: 55px 30px;
            background-size: 50%;
            background-repeat: no-repeat;
            img {
                width: 60%;
            }
        }
    }
</style>
