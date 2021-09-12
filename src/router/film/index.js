export default {
  path: '/film',
  component: () => import('@/views/Film'),
  children: [
    {
      path: 'city',
      component: () => import('@/views/Film/City')
    },
    {
      path: 'nowplaying',
      component: () => import('@/views/Film/Nowplaying')
    },
    {
      path: 'comingsoon',
      component: () => import('@/views/Film/Comingsoon')
    },
    {
      path: 'search',
      component: () => import('@/views/Film/Search')
    },
    {
      path: '/film',
      redirect: '/film/nowplaying'
    }

  ]
}
