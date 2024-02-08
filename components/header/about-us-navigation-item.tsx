'use client'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { ListItem } from '@/components/ui/list-item'

export function AboutUsNavigationItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Sobre nós</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col gap-3 p-4 md:w-[300px] lg:w-[400px]">
          <ListItem href="/docs" title=" ⚡ Metodologia de Ensino">
            Conheça a metodologia que já ajudou diversos alunos
          </ListItem>
          <ListItem href="/docs" title="🏆 Nosso Time">
            Os responsáveis por trás do Hoogle Education
          </ListItem>
          <ListItem href="/docs" title="📢 Depoimentos">
            O que nossos alunos tem a dizer sobre nós
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
