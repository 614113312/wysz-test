import FirstView from '../pages/FirstView/FirstView.vue'
import Classification from '../pages/Classification/Classification.vue'
import Canbuy from '../pages/Canbuy/Canbuy.vue'
import Shoopping_cart from '../pages/Shopping_cart/Shopping_cart.vue'
import Personal_center from '../pages/Personal_center/Personal_center.vue'

export default[
    {
        path:'/firstview',
        component:FirstView,
    },
    {
        path:'/classification',
        component:Classification,
    },
    {
        path:'/canbuy',
        component:Canbuy,
    },
    {
        path:'/shoopping_cart',
        component:Shoopping_cart,
    },
    {
        path:'/personal_center',
        component:Personal_center,
    },
    {
        path: '/',
        redirect: '/firstview'
    }

]