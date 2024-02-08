'use client'

import Link from 'next/link'

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function HomeNavigationItem() {
  return (
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Início
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
