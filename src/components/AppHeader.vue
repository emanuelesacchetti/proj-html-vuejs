<script>
    import AppHero_1 from './AppHero_1.vue';
    export default {
        name: 'AppHeader',
        components: {
            AppHero_1
        },
        props: {
            links: Array
        }
    }
</script>


<template>
    <header>
        <div class="container">
            <img src="../assets/images/log_white.png" alt="logo">
            <nav>
                <ul v-for="(link, index) in links" :key="index">
                    <li>{{ link }}</li>
                </ul>
                <button>Sign In</button>
            </nav>
        </div>
    </header>
    <AppHero_1 />
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';
    

    header {
        height: 70px;
        background-color: $background_header;

        .container {
            @include container;
            @include flexbox(space-between,center,nowrap);

            img {
            height: 70%;
            }
            nav {
                @include flexbox(center,center,nowrap);

                ul {
                @include flexbox(center,center,nowrap);
                list-style: none;
                color: white;

                    li {
                        padding-right: 1rem;

                        &:hover {
                            color: $secondary_color;
                            cursor: pointer;
                        }
                    }
                }
                button {
                    @include blue_button;
                    font-family: "Roboto Slab", serif;
                }
            }
        }
    }
</style>