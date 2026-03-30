"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import { SubNavBar } from "../../components/SubNavBar";
import Link from "next/link";

const StudentDashboard = () => {
  return (
    <div>
      <header>
        <NavBar />
        <SubNavBar />
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between bg-primary-400/10 rounded-lg p-8 mb-8 border border-primary/20">
          <div>
            <h1 className="font-bold text-2xl">Chào mừng trở lại</h1>
            <p className="opacity-50 mt-1">
              Tiếp tục hành trình học tập của bạn hôm nay
            </p>
            <div className="border border-primary-300/50 px-4 py-2 w-fit mt-4 rounded-md bg-primary-foreground">
              <span className="text-sm flex items-center">
                <span className="font-bold">Lời khuyến từ AI:</span>
                <span className="text-primary-900/50 ml-0.5">
                  Hãy tiếp tục khoá học React để đạt mốc hoàn thành 70%
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <Link
              href=""
              className="flex items-start bg-primary-400 px-6 py-3 text-white font-semibold"
            >
              Xem lộ trình AI
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
