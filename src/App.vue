<script>
  import AppHeader from './components/AppHeader.vue';
  import AppService from './components/AppService.vue';
  import AppHero_2 from './components/AppHero_2.vue';
  import AppPortfolio from './components/AppPortfolio.vue';
  import AppPrice from './components/AppPrice.vue';
  import AppBlog from './components/AppBlog.vue';
  import AppTestimonial from './components/AppTestimonial.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components: {
      AppHeader,
      AppService,
      AppHero_2,
      AppPortfolio,
      AppPrice,
      AppBlog,
      AppTestimonial,
      AppFooter
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
    <AppPrice />
    <AppBlog />
    <AppTestimonial />
    <AppFooter />
  </main>
</template>


<style lang="scss">
@use './styles/general.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button{
  cursor: pointer;
}
i{
  cursor: pointer;
}
</style>
