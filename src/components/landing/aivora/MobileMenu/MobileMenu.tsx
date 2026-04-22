/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import "./style.css";

// MUI Collapse replaced with a lightweight inline version to avoid the MUI dep
function Collapse({ in: open, children }: { in: boolean; timeout?: unknown; unmountOnExit?: boolean; children: React.ReactNode }) {
  return <div style={{ display: open ? "block" : "none" }}>{children}</div>;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    link: "#",
    submenu: [
      { id: 21, title: "AI Chat", link: "/chat" },
      { id: 22, title: "Watchlist Scanner", link: "/scanner" },
      { id: 23, title: "Telegram Alerts", link: "/alerts" },
      { id: 24, title: "Economic Calendar", link: "/calendar" },
      { id: 25, title: "Settings", link: "/settings" },
    ],
  },
  {
    id: 3,
    title: "Strategies",
    link: "#",
    submenu: [
      { id: 31, title: "Price Action", link: "/chat" },
      { id: 32, title: "Smart Money (SMC)", link: "/chat" },
      { id: 33, title: "Supply & Demand", link: "/chat" },
      { id: 34, title: "RSI / Momentum", link: "/chat" },
      { id: 35, title: "MA Trend", link: "/chat" },
      { id: 36, title: "Fibonacci", link: "/chat" },
    ],
  },
  {
    id: 4,
    title: "Chat",
    link: "/chat",
  },
  {
    id: 5,
    title: "Scanner",
    link: "/scanner",
  },
  {
    id: 6,
    title: "Alerts",
    link: "/alerts",
  },
];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={
                    openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                  }
                ></i>
              </p>

              {/* MUI Collapse for smooth animation */}
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {menu.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link href={sub.link} onClick={handleClick}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} onClick={handleClick}>
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
