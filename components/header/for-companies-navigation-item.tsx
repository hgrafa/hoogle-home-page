'use client'

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'

export function ForCompaniesNavigationItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Para Empresas</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className=" p-4 md:w-[400px] lg:w-[200px]">
          <li>Ja sou aluno</li>
          <li>Quero ser aluno</li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
