<script>
    import {store} from '../store.js'

    export default{
        name: 'HeroCard',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="card-cont">
        <h1>Business Planning</h1>
        <h2>Digital Technology</h2>
        <h1>Modern Solution !</h1>
        <p>{{ store.text_1 }}</p>
        <button class="btn-red">Try It Now</button>
        <button class="btn-blue">Explore More</button>
    </div>
    
</template>

<style lang="scss" scoped>
    @use '../styles/mixins';
    @use '../styles/variables';
    @use '../styles/general.scss';

    .card-cont {
        color: white;

        h1 {
            font-weight: bold;
        }
        h2 {
            padding: 0.8rem 0;
            font-size: 2rem;
            font-weight: 100;
        }
        p{
            padding: 1.2rem 0;
            font-size: 0.7rem;
            color: variables.$tertiary_color;
        }
        .btn-red {
            @include mixins.btn;
            @include mixins.pink_gradient(90deg);
            background-color: variables.$background_pink;
            font-family: "Roboto Slab", serif;
            margin-right: 20px
        }
        .btn-blue {
            @include mixins.btn;
            @include mixins.blue_button;
            font-family: "Roboto Slab", serif;

        }
    }

</style>