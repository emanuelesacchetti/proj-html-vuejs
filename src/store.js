import {reactive} from 'vue'
export const store = reactive({
    text_1: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.',
    text_2: 'of the impenetrable foliage of my trees, and but a few stray leams steal into the inner sanctuary',
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
    ]
})