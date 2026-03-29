'use client'
import { SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import {
  // BookOpen,
  // Home,
  // Locate,
  // MessageCircle,
  // Settings,
  Sidebar,
} from "lucide-react";
import React from "react";

// const StudentItems = [
//   { title: "Trang chủ", url: "/", icon: <Home /> },
//   { title: "Khoá học của tôi", url: "/courses", icon: <BookOpen /> },
//   { title: "Lộ trình", url: "/", icon: <Locate /> },
//   { title: "AI chat", url: "/", icon: <MessageCircle /> },
//   { title: "Cài đặt", url: "/", icon: <Settings /> },
// ];

const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
