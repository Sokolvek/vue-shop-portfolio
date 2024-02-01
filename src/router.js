import { createRouter, createWebHistory } from 'vue-router'

import index from "./pages/index.vue"
import Catalog from "./pages/Catalog.vue"
import ProductPage from "./pages/ProductPage.vue"
import Cart from "./pages/Cart.vue"

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:index
        },
        {
            path:"/catalog",
            component:Catalog
        },
        {
            path:"/product-page/:id",
            component:ProductPage
        },
        {
            path:"/cart",
            component:Cart
        }
    ]
})