'use client'

import { ListItem } from '@/components/ui/list-item'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Anti Patterns com Getters e Setters',
    href: '/',
    description:
      'Cuidados com classes anêmicas e como getters e setters podem ser um anti pattern.',
  },
  {
    title: 'Como criar um hook de useFetch',
    href: '/',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
]

export function FreeContentNavigationItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Conteudos Gratuitos</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="space-y-2 p-4">
          <span className="text-bold">✨ Últimas publicações ✨</span>
          <ul className="w-max md:w-[500px] lg:w-[500px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={`${component.title}`}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
