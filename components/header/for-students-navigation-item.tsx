'use client'

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'

export function ForStudentsNavigationItem() {
  return (
    <NavigationMenuItem>
      <Link href="/alunos" passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Para Alunos
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
