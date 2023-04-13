<script>
    export default {
        name: 'PortfolioCard',
        props: {
            title: String,
            sector: String,
            image: String,
            index: Number
        },
        methods: {
            getImageUrl(img){
                return new URL(`../assets/images/portfolio_img/${img}`,
                import.meta.url).href
            }
        }
    }
</script>


<template>
    <div class="wrapper">
        <div class="text">
            <div class="text-item-sx">{{title}}</div>
            <div class="text-item-dx">{{sector}}</div>
        </div>
        <div class="image">
            <img :src="getImageUrl(image)" :alt="title">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .wrapper {
        width: 300px;
        height: 250px;
        @include pink_gradient(90deg);
        @include flexbox(space-between,end,nowrap);
        position: relative;
        border-radius: 20px;

        .text {
            @include flexbox(space-between,center,nowrap);
            width: 100%;

            .text-item-sx {
              font-size: 0.9rem;  
              font-weight: bold;
              color: white;
              padding: 0 0 15px 10px;
            }
            .text-item-dx{
                font-size: 0.7rem;
                color: $text_secondary;
                padding: 0 8px 15px 10px;
            }
        }
    }

    .image {
        width: 300px;
        height: 200px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }
</style>