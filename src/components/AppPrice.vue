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
                :classe="store.title[1].class"
            />
        </div>
        <div class="container">
            <div v-for="card in store.priceCard" class="card-wrapper" :class="card.class == 'pink' ? 'pink' : 'white'">
                <PriceCard 
                    :title="card.title"
                    :type="card.type"
                    :price="card.price"
                    :classe="card.class"
                />
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .pink{
        @include pink_gradient(180deg)
    }
    .white{
        background-color: white;
    }
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
            box-shadow: 0px 0px 20px 0px black;
        }
    }
    .title {
        width: 300px;
        margin: auto;
        text-align: center;
        padding-bottom: 100px;
        
    }
</style>