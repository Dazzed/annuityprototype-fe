import Link from "next/link";

export default function Criteria() {
  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li
            className={
              window.location.pathname === "/" ? "active-nav-item" : ""
            }
          >
            <Link href="/">
              <a href="#">
                <img src="/imgs/svgs/dashboard-icon.svg" />
                <span className="p-0 d-none-view">Dashboard</span>
              </a>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/contracts" ? "active-nav-item" : ""
            }
          >
            <Link href="/contracts">
              <a href="#">
                <img src="/imgs/svgs/contract-icon.svg" />
                <span className="p-0 d-none-view">Contracts</span>
              </a>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/notifications"
                ? "active-nav-item"
                : ""
            }
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
