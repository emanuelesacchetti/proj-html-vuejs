<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader
    },
    data() {
      return {
        navLinks: [
          'Home','About','Services','Blog','Contact','Portfolio'
        ]
      }
    }
  }
</script>


<template>
  <AppHeader :links="navLinks"/>
</template>


<style lang="scss">
@use './styles/general.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
