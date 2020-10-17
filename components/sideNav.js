import { useEffect, useState } from "react";
import Link from "next/link";

export default function SideNav(props) {
  const { isNavOpen } = props;
  let [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  if (!isNavOpen) {
    return (
      <div>
        <button className="btn-arrow-icon"  onClick={() => props.toggleSideNav()}><img src="/imgs/svgs/rightarrow-icon-white.svg " /></button>
      </div>
    );
  }

  return (
    <div className="col-lg-3 col-md-12 px-0 order-second">
      <div className="sidebar-left">
        <div className="logo-section text-center">
          <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
          <button className="btn-arrow-icon-1"   onClick={() => props.toggleSideNav()}><img src="/imgs/svgs/rightarrow-icon1.svg" /></button>
        </div>
        <div className="nav-list">
          <ul>
            <li
              className={activePath === "/dashboard" ? "active-nav-item" : ""}
            >
              <Link href="/dashboard">
                <a href="#">
                  <img src="/imgs/svgs/navlist-icons-unactive.svg" />
                  <span className="p-0 d-none-view">Dashboard</span>
                </a>
              </Link>
            </li>
            <li className={activePath === "/" ? "active-nav-item" : ""}>
              <Link href="/">
                <a href="#">
                  <img src="/imgs/svgs/navlist-icons-unactive.svg" />
                  <span className="p-0 d-none-view">My Clients</span>
                </a>
              </Link>
            </li>
            <li
              className={activePath === "/contracts" ? "active-nav-item" : ""}
            >
              <Link href="/contracts">
                <a href="#">
                  <img src="/imgs/svgs/navlist-icons-active.svg" />
                  <span className="p-0 d-none-view">Contracts</span>
                </a>
              </Link>
            </li>
            <li
              className={
                activePath === "/notifications" ? "active-nav-item" : ""
              }
            >
              <Link href="/notifications">
                <a href="#">
                  <img src="/imgs/svgs/navlist-icons-unactive.svg" />
                  <span className="p-0 d-none-view">Notifications</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-list userProSection ">
          <ul>
            <li>
              <Link href="/notifications">
                <a href="#">
                  <img src="/imgs/svgs/navlist-icons-unactive.svg" />
                  <span className="p-0 d-none-view">Support</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/notifications">
                <a href="#">
                  <img
                    src="/imgs/user-profile-sidebar.png"
                    className="profile-pic"
                  />
                  <span className="p-0 d-none-view ">My Profile</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
