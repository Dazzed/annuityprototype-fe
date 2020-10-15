const ColumnFilterDrop = () => (
  <div className="dropdown show d-inline-block">
    <a
      className=""
      href="#"
      role="button"
      id="dropdownMenuLink2"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img src="/imgs/svgs/dropdown-block.svg" alt="dropdown Icon" />
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
      <ul className="px-1 m-0">
        <li className="dropdown-item px-2" href="#">
          <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <svg className="checkbox__check" width="20" height="20">
              <polyline points="15 6 10 14 5 11"></polyline>
            </svg>
            <span className="ml-2">Select 1</span>
          </label>
        </li>
        <li className="dropdown-item px-2" href="#">
          <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <svg className="checkbox__check" width="20" height="20">
              <polyline points="15 6 10 14 5 11"></polyline>
            </svg>
            <span className="ml-2">Select 2</span>
          </label>
        </li>
        <li className="dropdown-item px-2" href="#">
          <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <svg className="checkbox__check" width="20" height="20">
              <polyline points="15 6 10 14 5 11"></polyline>
            </svg>
            <span className="ml-2">Select 3</span>
          </label>
        </li>
        <li className="dropdown-item px-2" href="#">
          <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <svg className="checkbox__check" width="20" height="20">
              <polyline points="15 6 10 14 5 11"></polyline>
            </svg>
            <span className="ml-2">Select 4</span>
          </label>
        </li>
        <li className="dropdown-item px-2" href="#">
          <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <svg className="checkbox__check" width="20" height="20">
              <polyline points="15 6 10 14 5 11"></polyline>
            </svg>
            <span className="ml-2">Select 5</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
);

export default ColumnFilterDrop;
