<script>
    import ServiceCard from './ServiceCard.vue';
    import SectionTitle from './SectionTitle.vue';
    import {store} from '../store.js'
    
    export default {
        name: 'AppService',
        components: {
            ServiceCard,
            SectionTitle
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="wrapper">
        <div class="container">

            <div class="title">
                <SectionTitle />
            </div>

            <div class="card-cont">
                <ServiceCard />
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .wrapper {
        background-color: white;
        height: 500px;
        border-bottom: 1px solid black;

        .container {
            @include container;
            flex-direction: column;
            @include flexbox(center,center,nowrap);

            .title {
                width: 300px;
                text-align: center;

            }
            .card_cont {
                border: 1px solid black;
                height: 200px;
            }
        }

    }
</style>