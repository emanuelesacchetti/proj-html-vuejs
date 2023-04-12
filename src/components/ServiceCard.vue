<script>
    import {store} from '../store.js'

    export default{
        name: 'ServiceCard',
        data(){
            return {
                store
            }
        },
        props: {
            title: String,
            text: String,
            image: String
        },
        methods: {
            getImageUrl(img){
                return new URL(`../assets/images/service_img/${img}`,
                    import.meta.url).href
            }
        }
    }
</script>

<template>
    <div class="wrapper">
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <div class="image">
            <img :src=getImageUrl(image) />
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .wrapper{
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 50% 20px 0;
        position: relative;
        color: white;
        @include blue_gradient(80deg);
        border-radius: 20px;


        h4{
            font-size: 1rem;
            padding-bottom: 20px;
        }
        p{
            font-size: 0.8rem;
        }
    }
    .image {
        width: 150px;
        height: 150px;
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 50%);
        padding: 20px;
        background-color: white;
        box-shadow: black 0px -1px 5px 0px;
        border-radius: 20%;


        img{
           width: 110%;
           object-fit: cover;
        }
    }
</style>