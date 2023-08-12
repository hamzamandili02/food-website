import Home from './components/Home-resto.vue'
import SignUp from './components/SignUp-resto.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login-resto.vue'
import Update from './components/Update-resto.vue'
import Add from './components/Add-resto.vue'

const routes=[
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path:'/login'
    },
    {
        name: 'Add',
        component: Add,
        path:'/add'
    },
    {
        name: 'Update',
        component: Update,
        path:'/update/:id'
    }
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;