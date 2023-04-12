<script>
import {store} from '../store.js';
import SectionTitle from './SectionTitle.vue';
import PriceCard from './PriceCard.vue';

export default {
    name: 'AppPrice',
    components: {
        SectionTitle,
        PriceCard
    },
    data(){
        return{
            store
        }
    }
}
</script>


<template>
    <div class="section-wrapper">
        <div class="title">
            <SectionTitle 
                :section="store.title[1].section"
                :first="store.title[1].first"
                :title="store.title[1].title"
            />
        </div>
        <div class="container">
            <div v-for="card in store.priceCard" class="card-wrapper">
                <div class="bg-price">{{ card.price }}</div>
                <PriceCard 
                    :title="card.title"
                    :type="card.type"
                    :price="card.price"
                />
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .section-wrapper {

        @include blue_gradient;
        padding: 50px;
        height: 500px;
        position: relative
    }
    .container {
        width: 1000px;
        margin: auto;
        position: absolute;
        bottom: -180px;
        left: 50%;
        transform: translate(-50%);
        @include flexbox(space-between,center,nowrap);

        .card-wrapper {
            margin: 10px;
            padding: 0 20px;
            width: calc((100% / 3) - 20px);
            height: 100%;
            border-radius: 20px;
            position: relative;
            background-color: white;

            .bg-price {
                position: absolute;
                top: -79px;
                right: -14px;
                font-size: 15rem;
                opacity: 0.4;
            }
        }
    }
    .title {
        width: 300px;
        margin: auto;
        text-align: center;
        padding-bottom: 100px;
        
    }
</style>