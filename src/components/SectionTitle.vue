<script>
    import {store} from '../store.js'
    export default {
        name: 'SectionTitle',
        data() {
            return {
                store
            }
        },
        props: {
            section: String,
            first: String,
            title: String,
            classe: String
        }
    }
</script>

<template>
    <div class="wrapper">
        <h6>{{ section }}</h6>
        <div class="title" :class="classe == 'white' ? 'white' : ''">
            <span class="bold">{{ first }}</span>
            <span>{{ title }}</span>
        </div>
        <h5 :class="classe == 'white' ? 'white' : ''">{{ store.text_1 }}</h5>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

        .wrapper {
            text-align: center;
       
            h6 { 
                color: $primary_color;
                font-size: 0.5rem;
            }
            .white {
                color: white;
            }

            h5 { 
                color: black;
                font-size: 0.6rem;
                font-weight: 300;
            }
            .title{
                font-size: 1.8rem;
            }
            .bold {
                font-weight: bold;
            }
        }


</style>