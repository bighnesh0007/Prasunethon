"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <a href="http://localhost:3000/">
        <Image src="/logo.svg" width={160} height={160} alt="Logo" />
      </a>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold translate-x-0 cursor-pointer ${
            path === "/dashboard" ? "text-primary font-bold" : ""
          }`}
          onClick={() => handleNavigation("/dashboard")}
        >
          DashBoard
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-x-0 cursor-pointer ${
            path === "/dashboard/questions" ? "text-primary font-bold" : ""
          }`}
          onClick={() => handleNavigation("/dashboard/questions")}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-x-0 cursor-pointer ${
            path === "/dashboard/upgrade" ? "text-primary font-bold" : ""
          }`}
          onClick={() => handleNavigation("/dashboard/upgrade")}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-x-0 cursor-pointer ${
            path === "/dashboard/faq" ? "text-primary font-bold" : ""
          }`}
          onClick={() => handleNavigation("/dashboard/faq")}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header
