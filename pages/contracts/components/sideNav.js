export default function Criteria() {
  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="/imgs/svgs/logo-white.svg" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <a href="#">
              <img src="/imgs/svgs/dashboard-icon.svg" />
              <span className="p-0 d-none-view">Dashboard</span>
            </a>
          </li>
          <li className="active-nav-item">
            <a href="#">
              <img src="/imgs/svgs/contract-icon.svg" />
              <span className="p-0 d-none-view">
                Contract <span>Management</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
