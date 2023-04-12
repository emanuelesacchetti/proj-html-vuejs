import {reactive} from 'vue'
export const store = reactive({
    text_1: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.',
    text_2: 'of the impenetrable foliage of my trees, and but a few stray leams steal into the inner sanctuary',
    hero:[
        {
            first: 'Business Planning',
            second: 'Digital Technology',
            third: 'Modern Solution !'
        },
        {
            first: 'Start Your Project',
            second: 'Grow Your Business',
            third: 'With Our Strategy'
        }
    ],
    title:[
        {
            section: 'Our Services',
            title: 'What We Do'
        },
        {
            section: 'Price List',
            title: 'Our Pricing'
        },
        {
            section: 'Blog',
            title: 'Latest Posts'
        },
        {
            section: 'Testimonials',
            title: 'What People Say'
        },

    ],
    services: [
        {
            title:'Data Analysis',
            img:'Group-247.png'
        },
        {
            title: 'SEO Optimization',
            img: 'Group-538.png'
        },
        {
            title: 'Security Data',
            img: 'Group-566.png'
        },
        {
            title: 'Branding Strategy',
            img: 'Group-567.png'
        }
    ],
    portfolio: [
        {
            title: 'Basket of Flower on Table',
            sector: 'Branding Strategy',
            image: '8wa60okr-1-790x576.jpg'
        },
        {
            title: 'Purinky Products',
            sector: 'Digital Experience',
            image: 'DRY-1-790x576.jpg'
        },
        {
            title: 'Safity Poster',
            sector: 'Branding Strategy',
            image: '84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg'
        },
        {
            title: 'Basket of Flower on Table',
            sector: 'Branding Strategy',
            image: 'a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg'
        },
        {
            title: 'Purinky Products',
            sector: 'Digital Experience',
            image: 'studio-republic-644339-unsplash-1380x703.jpg'
        },
        {
            title: 'Safity Poster',
            sector: 'Branding Strategy',
            image: 'timon-studler-63413-unsplash-1380x703.jpg'
        }
    ]
})