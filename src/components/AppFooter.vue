<script>
    import {store} from '../store.js';

    export default {
        name: 'AppFooter',
        data(){
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="footer-wrapper">
        <div class="container">
            <div class="logo item">
                <img src="../assets/images/log_white.png" alt="">
                <div class="text">
                    {{ store.text_1 }}
                </div>
            </div>

            <div class="links item">
                <div class="title">Quick Links</div>
                <ul>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="resource item">
                <div class="title">Resources</div>
                <ul>
                    <li>Art Design</li>
                    <li>Computer</li>
                    <li>IT News</li>
                    <li>Networking</li>
                    <li>Web Security</li>
                </ul>
            </div>
            <div class="contacts item">
                <div class="title">Contact Us</div>
                <ul>
                    <li><span>Address: </span>Patricia C. Amedee 4401 Waldeck
                        Street Grapevine Nashville, Tx 76051
                    </li>
                    <li><span>Phone: </span>+99 (0) 101 0000 888</li>
                    <li><span>Email: </span>info@yourdomain.com</li>
                </ul>

                
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="item-sx item">C 2020 Pholx All Right Reserved.</div>
                <div class="item-dx item">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div class="chat">
                <i class="fa-regular fa-comment"></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../styles/mixins' as *;
    @use '../styles/variables' as *;
    @use '../styles/general.scss';

    .footer-wrapper {
        margin-top: 100px;
        @include blue_gradient(180deg);
        padding-top: 150px;
    }
    .container {
        width: 1000px;
        margin: auto;
        @include flexbox(space-between,start,nowrap);

        .item{
            width: 200px;
            color: $text_tertiary;
            .title{
                color: white;
                margin-bottom: 30px;
            }
            ul{
                list-style: none;
                li{
                    font-size: 0.8rem;
                    margin: 5px 0;
                    span{
                        color: white;
                    }
                }
            }

        }
    }
    .text{
        color: $text_tertiary;
        font-size: 0.7rem;
        margin-top: 50px;
    }
    .footer-bottom{
        border-top: 1px solid $background_header;
        margin-top: 50px;
        position: relative;

        .container {
            width: 1000px;
            margin: auto;
            @include flexbox(space-between,center,nowrap);

            .item-sx {
                width: 50%;
                font-size: 0.7rem;
                margin: 10px
            }
            .item-dx{
                @include flexbox(space-between,center,nowrap);
                width: 20%;
                margin: 10px;
            }
        }
    }
    .chat{
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: $tertiary_color;
        border-radius: 50%;
        @include flexbox(center,center,nowrap);
    }
</style>