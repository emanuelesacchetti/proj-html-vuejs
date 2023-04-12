<script>
    import PortfolioCard from '../components/PortfolioCard.vue';
    import {store} from '../store.js'

    export default {
        name: 'AppPortfolio',
        components: {
            PortfolioCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="wrapper">
        <div class="container">
            <div class="item">
                <div class="item-title">
                    <h6>Portfolio</h6>
                    <h2>
                        <strong>latest</strong>
                        <span>work</span>
                    </h2>
                </div>
                <div class="item-arrows">
                    <div class="arrow"><i class="fa-solid fa-arrow-left"></i></div>
                    <div class="arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
        <div class="carousel">
            <span class="carousel-wrapper" v-for="card in store.portfolio">
                <PortfolioCard 
                    :title="card.title"
                    :sector="card.sector"
                    :image="card.image"
                />
            </span>
            
        </div>
        <div class="selected"></div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/variables' as *;
    @use '../styles/mixins' as *;

    h6 { color: $primary_color }
    .container{
        width: 1000px;
        margin: auto;

        .item{
            margin-top: 60px;
            @include flexbox(space-between, center,nowrap);
        }
    }
    .item-arrows{
        @include flexbox(space-between,center,nowrap);

        .arrow {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 1px solid $primary_color;
            text-align: center;
            color: $primary_color;
            margin-left: 20px;
        }
    }

    .carousel {
        padding: 30px 0;
        overflow-x: scroll;
        @include flexbox(space-around,center,nowrap);

        &::-webkit-scrollbar {
            display: none;
        }
        .carousel-wrapper {
            width: 300px;
            height: 250px;
            margin: 15px;
        }
    }

</style>