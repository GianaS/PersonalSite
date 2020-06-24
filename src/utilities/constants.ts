const navbarItems = [
  {
    title: 'Home',
    link: '/home',
    icon: 'home'
  },
  {
    title: 'About',
    link: '/about',
    icon: 'smile outline'
  },
  {
    title: 'Resume',
    link: '/resume',
    icon: 'file alternate outline'
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: 'phone'
  },
  {
    title: 'Not Found',
    link: '/404',
    icon: 'cancel'
  }
] as const

export {
  navbarItems
}