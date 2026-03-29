'use client'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  Menubar,
  MenubarGroup,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const NavBar = () => {
  return (
    <Menubar className="h-20">
      <MenubarGroup className="mx-23 w-full flex items-center justify-between">
        <MenubarGroup className="flex items-center justify-center gap-4">
          <Image
            src="/Logo-ĐH-Công-Nghệ-Sài-Gòn-STU.svg"
            alt="logo"
            width={60}
            height={60}
          />
          <div className="flex flex-col justify-center items-start">
            <Link href="/">
              <span className="font-bold text-xl">Smart Learning Hub</span>
            </Link>
            <span className="text-sm opacity-50">Trường Đại học Công nghệ sài gòn</span>
          </div>
        </MenubarGroup>

        <InputGroup className="h-10.5  max-w-2xl ">
          <InputGroupInput placeholder="Tìm kiếm khoá học, bài học..." />
          <InputGroupAddon>
            <Search className="opacity-70" />
          </InputGroupAddon>
        </InputGroup>
        <MenubarGroup className="flex items-center justify-center gap-4">
          <Link href="/notifications">
            <Bell />
          </Link>
          <MenubarMenu>
            <MenubarTrigger>Profile</MenubarTrigger>
          </MenubarMenu>
        </MenubarGroup>
      </MenubarGroup>
    </Menubar>
  );
};

export default NavBar;
