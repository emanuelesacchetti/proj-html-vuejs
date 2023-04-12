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
                <div v-for="service in store.services" class="card-item">
                    <ServiceCard 
                        :title="service.title"
                        :text="store.text_1"
                        :image="service.img"
                    />
                </div>
                
            </div>
            <button>View All Services</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .wrapper {
        background-color: white;
        width: 100%;

        .container {
            @include container;
            padding: 20px;
            flex-direction: column;
            @include flexbox(center,center,nowrap);

            .title {
                width: 300px;
                text-align: center;
                padding-bottom: 100px;
            }
            .card-cont {
                @include flexbox(space-between, center, nowrap);

                .card-item {
                    width: calc(100% / 4);
                    height: 300px;
                    padding: 10px;
                }
            }
            button {
                @include pink_gradient(145deg);
                @include btn;
                margin: 50px;

            }
        }

    }
</style>