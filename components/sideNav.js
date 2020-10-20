import { useEffect, useState, Fragment } from "react";
import Link from "next/link";

export default function SideNav(props) {
  const { isNavOpen } = props;
  let [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <Fragment>
      {!isNavOpen ? (
        <button
          className="btn-arrow-icon"
          onClick={() => props.toggleSideNav()}
        >
          <img src="/imgs/svgs/rightarrow-icon-white.svg " />
        </button>
      ) : null}
      <div
        className={` ${isNavOpen ? "sidebar-left" : "sidebar-left-zero"}`}
        style={!isNavOpen ? { width: "0 !important" } : {}}
      >
        <div className="logo-section text-center">
          <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
          <button
            className="btn-arrow-icon-1"
            onClick={() => props.toggleSideNav()}
          >
            <img src="/imgs/svgs/rightarrow-icon1.svg" />
          </button>
        </div>
        <div className="nav-list">
          <ul>
            <li
              className={activePath === "/dashboard" ? "active-nav-item" : ""}
            >
              <Link href="/dashboard">
                <a href="#">
                  <img
                    src={
                      activePath === "/dashboard"
                        ? "/imgs/svgs/navlist-icons-active.svg"
                        : "/imgs/svgs/navlist-icons-unactive.svg"
                    }
                  />
                  <span className="p-0 d-none-view">Dashboard</span>
                </a>
              </Link>
            </li>
            <li className={activePath === "/clients" ? "active-nav-item" : ""}>
              <Link href="/clients">
                <a href="#">
                  <img
                    src={
                      activePath === "/clients"
                        ? "/imgs/svgs/navlist-icons-active.svg"
                        : "/imgs/svgs/navlist-icons-unactive.svg"
                    }
                  />
                  <span className="p-0 d-none-view">My Clients</span>
                </a>
              </Link>
            </li>
            <li
              className={activePath === "/contracts" ? "active-nav-item" : ""}
            >
              <Link href="/contracts">
                <a href="#">
                  <img
                    src={
                      activePath === "/contracts"
                        ? "/imgs/svgs/navlist-icons-active.svg"
                        : "/imgs/svgs/navlist-icons-unactive.svg"
                    }
                  />
                  <span className="p-0 d-none-view">Contracts</span>
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/#">
                <a href="#">
                  <img
                    src={
                      activePath === "/#"
                        ? "/imgs/svgs/navlist-icons-active.svg"
                        : "/imgs/svgs/navlist-icons-unactive.svg"
                    }
                  />
                  <span className="p-0 d-none-view">Settings</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-list userProSection ">
          <ul>
            <li className={activePath === "/support" ? "active-nav-item" : ""}>
              <Link href="/support">
                <a href="#">
                  <img
                    src={
                      activePath === "/support"
                        ? "/imgs/svgs/navlist-icons-active.svg"
                        : "/imgs/svgs/navlist-icons-unactive.svg"
                    }
                  />
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
      {/* </div> */}
    </Fragment>
  );
}
