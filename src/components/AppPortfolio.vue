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
                store,
                selectedIndex: 0,
                pointerIndex: 0
            }
        },
        methods: {
            goRight(){
                if(this.selectedIndex < this.store.portfolio.length-1){
                    this.selectedIndex++;
                    this.pointerIndex++
                } else {
                    this.selectedIndex = 0;
                    this.pointerIndex = 0
                } 
            },
            goLeft(){
                if(this.selectedIndex > 0){
                    this.selectedIndex--;
                    this.pointerIndex--
                } else {
                    this.selectedIndex = this.store.portfolio.length-1;
                    this.pointerIndex = this.store.portfolio.length-1
                }
            },
            selected(i){
                this.selectedIndex = i;
                this.pointerIndex = i
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
                    <span class="arrow" @click="goLeft()"><i class="fa-solid fa-arrow-left"></i></span>
                    <span class="arrow" @click="goRight()"><i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
        <div class="carousel">
            <span class="carousel-wrapper" v-for="(card, index) in store.portfolio">
                <PortfolioCard :class="selectedIndex == index? 'selected' : ''"
                    @click='selected(index)'
                        :title="card.title"
                        :sector="card.sector"
                        :image="card.image"
                        :index="index"
                />
            </span>
        </div>
        <div class="dots">
                <span class="dot" 
                    v-for="(a, index) in store.portfolio.length" 
                    @click="selected(index)"
                    :class="pointerIndex == index ? 'fa-solid': 'fa-regular'">
                    <i class="fa-circle"></i>
                </span>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/variables' as *;
    @use '../styles/mixins' as *;

    .wrapper{
        position: relative;
    }

    h6 { color: $primary_color }
    .container{
        width: 1000px;
        margin: auto;
        

        .item{
            margin-top: 60px;
            @include flexbox(space-between, center,nowrap);
        }
    }
    .selected {
        scale: 1.1;
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
        @include flexbox(space-between,center,nowrap);
        position: relative;

        .carousel-wrapper {
            width: 300px;
            height: 250px;
            margin: 15px;
        }
    }
    .dots {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(0, -50%);
    }
    .dot{
        margin: 2px;
        font-size: 0.6rem;
        color: $primary_color;
    }

</style>