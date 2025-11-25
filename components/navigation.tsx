"use client";

import * as React from "react";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "@/app/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Image to Doc",
    href: "https://github.com/Dev-Saurabh-K/image-to-doc",
    description:
      "A tool that converts images into downloadable documents using AI-powered text extraction and formatting.",
  },
  {
    title: "Planner v2",
    href: "https://github.com/Dev-Saurabh-K/Planner-v2",
    description:
      "A planning and productivity application designed to manage schedules, tasks, and daily workflows efficiently.",
  },
  {
    title: "ServerED",
    href: "https://github.com/Dev-Saurabh-K/serverED",
    description:
      "A backend server project showcasing APIs, authentication flow, and modular server-side structure.",
  },
  {
    title: "Greeting Card Generator",
    href: "https://github.com/Dev-Saurabh-K/Greeting-card-generator",
    description:
      "An app that generates customized greeting cards with dynamic styling and personalized messages.",
  },
];


export function NavigationMenuDemo() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile} className="w-full ">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dev-Saurabh-Kumar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  asChild
                  className="bg-white bg-[url('/javascript.svg')] bg-cover bg-center"
                >
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6 "
                    href="https://github.com/Dev-Saurabh-K"
                  >
                    {/* <div className="mb-2 text-lg font-medium sm:mt-4">
                      
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      🚀 MERN Stack Developer | 💻 Open Source Enthusiast | 🐳 Exploring DevOps (Docker • CI/CD • GitHub Actions)
                    </p> */}
                  </a>
                </NavigationMenuLink>
              </li>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <ListItem
                    href="https://github.com/Dev-Saurabh-K"
                    title="Github"
                  >
                    🚀 MERN Stack Developer | 💻 Open Source Enthusiast | 🐳
                    Exploring DevOps (Docker • CI/CD • GitHub Actions)
                  </ListItem>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="/github-light.svg" />
                      <AvatarFallback>github</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@Dev-Saurabh-K</h4>
                      <p className="text-sm">
                    
                        MERN Stack Developer | Exploring Docker, CI/CD &
                        GitHub Actions
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined September 2024
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
               <HoverCard>
                <HoverCardTrigger asChild>
                  <ListItem
                href="https://www.linkedin.com/in/saurabh-kumar-sakr/"
                title="Linkedin"
                className="bg-blue-700"
              >
                Computer Science Undergraduate | Full Stack Web Developer | GDG
                App domain Core Member |SIH 2k24 Qualifier | Educathon 2k25
                finalist | NextJS
              </ListItem>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-blue-700">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="/linkedin.svg" />
                      <AvatarFallback>linkedin</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@Dev-Saurabh-K</h4>
                      <p className="text-sm">
                    
                        Computer Science Undergraduate | Full Stack Web Developer | GDG App domain Core Member |SIH 2k24 Qualifier | Educathon 2k25 finalist | NextJS

                      </p>
                      <div className=" text-xs text-blue-400">
                        288+ Connections
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <ListItem
                href="https://www.instagram.com/saurabh_kumar_0100110/"
                title="Instagram"
                className="bg-pink-700 "
              >
                21 posts 1.1k followers 358 following
              </ListItem>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-pink-700">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="/instagram.svg" />
                      <AvatarFallback>instagram</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">saurabh_kumar_0100110</h4>
                      <p className="text-sm">
                    
                        21 posts 1.1k followers 358 following
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined August 2020
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>

            {/* using it later for message me section */}
            <Link href="/docs">Contact Me</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
