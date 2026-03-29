"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { majors } from "@/src/data/mock-data";

export function SubNavBar() {
  return (
    <NavigationMenu viewport={false} className="h-12 border-b max-w-full w-full">
      <NavigationMenuList className="w-full">
        {majors.map((major) => (
          <NavigationMenuItem key={major.title}>
            {/* Trigger sẽ tự mở khi di chuột vào */}
            <NavigationMenuTrigger className="hover:text-primary">{major.title}</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-50 gap-2 p-4">
                {major.field_of_study.map((field) => (
                  <li key={field.name}>
                    <NavigationMenuLink href="/it">
                      {field.name}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
