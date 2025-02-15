import { Fragment } from "react";

export default function RightSideNav(props) {
  const { navState = 0, expandable = true } = props;

  /**
   * navState
   * 0. In closed state
   * 1. In open state
   * 2. In expanded state
   */
  return (
    <div
      className={`sidebar-right  bg-white ${navState === 1
        ? "sidebar-right-zero "
        : navState === 2
          ? "expandsidebar-right"
          : "width-none"
        }`}
    >
      <div className="logo-section text-center">
        {expandable && navState !== 2 ? (
          <button
            className="btn-arrow-icon-1-1"
            onClick={() => props.expandNav()}
          >
            <img src="/imgs/svgs/rightarrow-icon1.svg" />
          </button>
        )
          : null}

        <button className="btn-arrow-icon-2" onClick={() => props.shrinkNav()}>
          <img src="/imgs/svgs/rightarrow-icon1.svg" />
        </button>
        <button className="close-btn-icon" onClick={() => props.shrinkNav()}>
          <img src="/imgs/svgs/close-btn-icon.svg" />
        </button>
      </div>
      <Fragment>{props.children}</Fragment>
    </div>
  );
}
