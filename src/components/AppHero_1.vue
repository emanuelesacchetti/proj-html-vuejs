<script>
  export default {
    name: 'AppHero_1'
  }
</script>


<template>
    <div class="hero">
        <div class="container">

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables';
    

    .hero{
        height: 300px;
        background-color: variables.$background_blue;
        @include blue_gradient
    }
    .container {
        @include container
    }
</style>
