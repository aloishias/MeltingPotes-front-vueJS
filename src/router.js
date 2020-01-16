import Vue from 'vue'
import Router from 'vue-router'

import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Timeline from './views/Timeline.vue'
import NewPost from "./views/NewPost.vue"
import Profil from './views/Profil'
import Users from './views/Users'

Vue.use(Router)

export default new Router({
    
    routes: [
        {
            path: '/',
            name: 'Timeline',
            component: Timeline
        },
        {
            path: '/NewPost',
            name: 'NewPost',
            component: NewPost
        },
        {
            path: '/Profil',
            name: 'Profil',
            component: Profil
        },
        {
            path: '/Users',
            name: 'Users',
            component: Users
        }
    ]
    
})
