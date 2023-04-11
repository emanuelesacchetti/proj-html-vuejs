<script>
    import {store} from '../store.js'
    export default {
        name: 'SectionTitle',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="wrapper">
        <h6>{{ store.title[0].section }}</h6>
        <h2>{{ store.title[0].title }}</h2>
        <h5>{{ store.text_1 }}</h5>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

        .wrapper {
            text-align: center;

            
            h6 { color: $primary_color }

            h5 { 
                color: black;
                font-size: 0.6rem;
                font-weight: 300;
            }
        }


</style>