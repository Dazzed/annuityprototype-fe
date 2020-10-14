import { useEffect, useState } from "react";
import Link from "next/link";

export default function Criteria() {
  let [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li className={activePath === "/" ? "active-nav-item" : ""}>
            <Link href="/">
              <a href="#">
                <img src="/imgs/svgs/dashboard-icon.svg" />
                <span className="p-0 d-none-view">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className={activePath === "/contracts" ? "active-nav-item" : ""}>
            <Link href="/contracts">
              <a href="#">
                <img src="/imgs/svgs/contract-icon.svg" />
                <span className="p-0 d-none-view">Contracts</span>
              </a>
            </Link>
          </li>
          <li
            className={activePath === "/notifications" ? "active-nav-item" : ""}
          >
            <Link href="/notifications">
              <a href="#">
                <img src="/imgs/svgs/dashboard-icon.svg" />
                <span className="p-0 d-none-view">Notifications</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
