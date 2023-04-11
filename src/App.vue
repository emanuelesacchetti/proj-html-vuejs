<script>
  import AppHeader from './components/AppHeader.vue';
  import AppService from './components/AppService.vue';

  export default {
    components: {
      AppHeader,
      AppService
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
  <main>
    <AppService />
  </main>
</template>


<style lang="scss">
@use './styles/general.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
