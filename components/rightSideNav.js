export default function RightSideNav(props) {
  const { isNavOpen } = props;

  return (
    <div
      className="col-lg-3 col-md-12 px-0 order-second"
      style={!isNavOpen ? { display: "none" } : {}}
    >
      <div className="sidebar-right">
        <div className="logo-section text-center">
          <button
            className="btn-arrow-icon-1"
            onClick={() => props.toggleRightSideNav()}
          >
            <img src="/imgs/svgs/rightarrow-icon1.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
