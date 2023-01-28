import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

import {
  CinIcon,
  CollapsIcon,
  UserIcon,
  EgovIcon,
  LogoutIcon,
  PermisIcon,
  MariageIcon,
  DiplomeIcon,
} from "./icons";
import DemandIcon from "./icons/demandIcon";

const menuItems = [
  { id: 1, label: "Gérer les Utilisateurs", icon: UserIcon, link: "/" },
  { id: 2, label: "Les Déclarations des naissances", icon: CinIcon, link: "/declarationNaissance" },
  { id: 3, label: "Gérer les Permis", icon: PermisIcon, link: "/permis" },
  { id: 4, label: "Gérer les Contrats du mariages", icon: MariageIcon, link: "/contratMariage" },
  { id: 5, label: "Gérer les Diplomes", icon: DiplomeIcon, link: "/Diplome" },
  { id: 6, label: "Gérer les demandes", icon: DemandIcon, link: "/demand" },
  
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const onClickLogout= () => {
    localStorage.clear()
    router.push("/signin")

  }
  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <EgovIcon />
            <span
              className={classNames("flex items-center mt-2 text-2xl font-semibold text-gray-900", {
                hidden: toggleCollapse,
              })}
            >
              E-Gov Admin
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div onClick={onClickLogout} className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
