'use client'

import { Logo } from '@/components/logo'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { HomeNavigationItem } from './home-navigation-item'
import { AboutUsNavigationItem } from './about-us-navigation-item'
import { FreeContentNavigationItem } from './free-content-navigation-item'
import { ForCompaniesNavigationItem } from './for-companies-navigation-item'
import { ForStudentsNavigationItem } from './for-students-navigation-item'

type Tab =
  | 'Homepage'
  | 'About us'
  | 'Free Content'
  | 'For companies'
  | 'For students'

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <HomeNavigationItem />
          <AboutUsNavigationItem />
          <FreeContentNavigationItem />
          <ForCompaniesNavigationItem />
          <ForStudentsNavigationItem />
        </NavigationMenuList>
      </NavigationMenu>
      <div />
    </div>
  )
}
