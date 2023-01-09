import { createRouter, createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import LoveFlower from './views/LoveFlower.vue'
import BirthdayFlower from './views/BirthdayFlower.vue'
import FriendFlower from './views/FriendFlower.vue'
import WeddingFlower from './views/WeddingFlower.vue'
import FlowerDetail from './views/FlowerDetail.vue'
import FlowerPay from './views/FlowerPay.vue'
import PersonCenter from './views/PersonCenter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/loveflower',
            component: LoveFlower
        },
        {
            path: '/birthdayflower',
            component: BirthdayFlower
        },
        {
            path: '/friendflower',
            component: FriendFlower
        },
        {
            path: '/weddingflower',
            component: WeddingFlower
        },
        {
            path: '/flowerdetail',
            component: FlowerDetail
        },
        {
            path: '/flowerpay',
            component: FlowerPay
        },
        {
            path: '/personcenter',
            component: PersonCenter
        }
    ]
});

export default router;

