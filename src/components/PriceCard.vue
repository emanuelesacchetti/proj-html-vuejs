<script>
    import {store} from '../store.js';

    export default {
        name: 'PriceCard',
        props: {
            title: String,
            type: String,
            price: Number,
            classe: String
        },
        data(){
            return{
                store
            }
        }
    }
</script>


<template>
    <div class="price-wrapper">
        <div class="price-absolute">{{ price }}</div>
        <div class="title" :class="classe == 'pink' ? 'white' : ''">{{ title }}</div>
        <div class="type" :class="classe == 'pink' ? 'white' : ''">{{ type }}</div>
        <div class="price-box">
            <div class="dollar" :class="classe == 'pink' ? 'white' : ''">$</div>
            <div class="price" :class="classe == 'pink' ? 'white' : ''">{{ price }}</div>
            <div class="durating" :class="classe == 'pink' ? 'white' : ''">Per Month</div>
        </div>
        <ul class="selection" v-for="select in store.priceCardSelection" :class="classe == 'pink' ? 'white' : ''">
            <li>
                <span><strong>{{ select.first }}</strong></span>
                <span>{{ select.second }}</span>
            </li>
        </ul>
        <button :class="classe == 'pink' ? 'bg-white' : ''">
            <span>Order Now</span>
            <span><i class="fa-solid fa-arrow-right"></i></span>
        </button>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .price-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        text-align: center;
        padding: 20px;
        position: relative;

        .price-absolute {
            position: absolute;
            top: -79px;
            right: -34px;
            font-size: 15rem;
            opacity: 0.1;
        }
        .title {
            font-size: 1.8rem;
            font-weight: bold;
            padding: 10px;
        }
        .white {
            color: white;
        }
        .black{
            color: black;
        }
        .type {
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .price-box{
            width: 50%;
            margin: auto;

            .dollar {
                text-align: start;
            }
            .price {
                font-weight: bold;
                font-size: 4rem;
                padding: 10px;
            }
            .durating{
                margin-bottom: 25px;
                font-size: 0.7rem;
            }
        }
        .selection li{
            padding: 5px;
            list-style: none;
        }
        button{
            margin-top: 25px;
            @include btn;
            @include pink_gradient(180deg);
        }
        span{
            padding: 0 5px;
        }

        
    }
</style>