<script>
    import {store} from '../store.js';
    import SectionTitle from './SectionTitle.vue';

    export default {
        name:'AppBlog',
        components: {
            SectionTitle
        },  
        data(){
            return {
                store,
                date: 'April 21,2019 - by Paul',
                text_big: 'Amazon gets CCI nod to acquire 49% stake in',
                text_little_sx: 'Clearing Corporations gets SEBI nod to invest in overnight funds',
                text_little_dx: 'Shabnam Dhillion, wife of RSSB cief Gurinder Dhillion, passes away in London'

            }
        }
    }
</script>


<template>
    <div class="blog-wrapper">
        <div class="container">
            <div class="title">
                <SectionTitle 
                    :section="store.title[2].section"
                    :first="store.title[2].first"
                    :title="store.title[2].title"
                />
            </div>
            <div class="card-cont">
                <div class="big-box box">
                    <div class="text-wrapper">
                        <span class="sx-box">
                            <div class="date">{{date}}</div>
                            <div class="text"><strong>{{text_big}}</strong></div>
                            <p class="text-p">{{ store.text_1 }}</p>
                        </span>
                        <button>Read More</button>
                    </div>
                </div>
                <div class="little-box box">
                    <div class="date">{{date}}</div>
                    <div class="text"><strong>{{text_little_sx}}</strong></div>
                    <p class="text-p">{{store.text_1}}</p>
                    <button>Read More</button>
                </div>
                <div class="little-box box">
                    <div class="date">{{date}}</div>
                    <div class="text"><strong>{{text_little_dx}}</strong></div>
                    <p class="text-p">{{store.text_1}}</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .container {
        @include container;
        margin-top: 250px;
    }
    .text-wrapper {
        background-color: rgba($color: #000000, $alpha: 0.3);
        @include flexbox(space-between,end,nowrap);
    }
    .sx-box {
        width: 67%
    }
    .card-cont {
        @include flexbox(space-between,center,nowrap);
        margin: 50px 0;

    }
    .box {
        height: 250px;
        padding: 17px;
        border: black 1px solid;
        border-radius: 20px;
        color: white;
    }
    .little-box {
        width: 250px;
        @include blue_gradient(300deg);
        padding: 28px;

        .text {
            margin: 25px 0;
        }
    }
    .big-box{
        width: 450px;
        background-image: url(../assets/images/blog_img.jpg);
        background-size: cover;
        @include flexbox(end,end,nowrap);

    }
    button {
        @include btn;
        color: $text_tertiary;
        margin: 20px 0;
    }
    .date {
        font-size: 0.6rem;
    }
    .text {
        font-size: 0.8rem;
        margin: 10px 0;
        text-shadow: #000000 0px 1px 4px;
    }
    .text-p {
        font-size: 0.6rem;
    }

</style>