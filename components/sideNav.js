import Link from "next/link";

export default function Criteria() {
  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link href="/">
              <a href="#">
                <img src="/imgs/svgs/dashboard-icon.svg" />
                <span className="p-0 d-none-view">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="active-nav-item">
            <Link href="/contracts">
              <a href="#">
                <img src="/imgs/svgs/contract-icon.svg" />
                <span className="p-0 d-none-view">
                  Contract <span>Management</span>
                </span>
              </a>
            </Link>
          </li>
          <li>
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
