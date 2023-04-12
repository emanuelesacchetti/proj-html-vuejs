<script>
  import AppHeader from './components/AppHeader.vue';
  import AppService from './components/AppService.vue';
  import AppHero_2 from './components/AppHero_2.vue';
  import AppPortfolio from './components/AppPortfolio.vue';

  export default {
    components: {
      AppHeader,
      AppService,
      AppHero_2,
      AppPortfolio
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
    <AppHero_2 />
    <AppPortfolio />
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
