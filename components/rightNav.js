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
      style={navState ? {} : { display: "none" }}
      className={`col-lg-3 col-md-12 px-0 order-second ${
        navState === 1 ? "" : ""
      }`}
    >
      <div className="sidebar-right">
        <div className="logo-section text-center">
          {expandable && (
            <button
              className="btn-arrow-icon-1"
              onClick={() => props.expandNav()}
            >
              <img src="/imgs/svgs/rightarrow-icon1.svg" />
            </button>
          )}

          <button
            className="btn-arrow-icon-2"
            onClick={() => props.shrinkNav()}
          >
            <img src="/imgs/svgs/rightarrow-icon1.svg" />
          </button>
        </div>
        <Fragment>{props.children}</Fragment>
      </div>
    </div>
  );
}
