<script>
    import {store} from '../store.js';

    export default {
        name: 'PriceCard',
        props: {
            title: String,
            type: String,
            price: Number
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
        <div class="price-absolute"></div>
        <div class="title">{{ title }}</div>
        <div class="type">{{ type }}</div>
        <div class="price-box">
            <div class="dollar">$</div>
            <div class="price">{{ price }}</div>
            <div class="durating">Per Month</div>
        </div>
        <ul class="selection" v-for="select in store.priceCardSelection">
            <li>
                <span><strong>{{ select.first }}</strong></span>
                <span>{{ select.second }}</span>
            </li>
        </ul>
        <button>
            <div>Order Now</div>
            <div>icon</div>
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
            top: -56px;
            right: -8px;
            font-size: 11rem;
        }
        .title {
            font-size: 1.8rem;
            font-weight: bold;
            padding: 10px;
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
        }
    }
</style>