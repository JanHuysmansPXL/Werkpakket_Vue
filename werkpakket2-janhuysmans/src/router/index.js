import { createRouter, createWebHistory} from 'vue-router'

// OPD2 - De HomeView moet ook geimporteerd worden waar je hem gebruikt.
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import LoginView from '@/views/LoginView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'
import detailTestView from '@/views/detailTestView.vue'

import NotFound from '@/views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    // Views (pagina's) oproepen op basis van component/route of zo..
    // Path -> Welk pad ?

// OPD2 - Hier wordt de route van de HomeView ingegeven met pad /     
    routes: [ 
        { 
        // path / -> hetgeen achter de url komt (enkel slash omdat deze kan wijzigen afh. van omgeving)
            path: '/',
            component: HomeView, 
        },
        { 
            // path / -> hetgeen achter de url komt (enkel slash omdat deze kan wijzigen afh. van omgeving)
                path: '/',
                redirect:'/home',
            },
        { 
            path: '/cart', 
            component: CartView  
        },
        { 
            path: '/checkout', 
            component: CheckoutView   
        },
        { 
            path: '/products', 
            component: ProductsView  
        },
        { 
            path: '/productdetail', 
            component: ProductDetailView   
        },
        { 
            path: '/detailTest/:id', 
            component: detailTestView  
        },
        { 
            path: '/login', 
            component: LoginView  
        },
        { 
            path: '/success', 
            component: ConfirmationView  
        },
        { 
        path: '/:notFound(.*)', 
        component: NotFound 
        },
    ]
})

export default router