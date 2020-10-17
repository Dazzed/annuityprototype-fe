import { useEffect, useState } from "react";
import Link from "next/link";

export default function RightSideNav(props) {
  const { isNavOpen } = props;
//   let [activePath, setActivePath] = useState("");

//   useEffect(() => {
//     setActivePath(window.location.pathname);
//   }, []);

  if (!isNavOpen) {
    return (
      <div>
        <button className="btn-arrow-icon-right"  onClick={() => props.toggleRightSideNav()}><img src="/imgs/svgs/rightarrow-icon-white.svg " /></button>
      </div>
    );
  }

  return (
    <div className="col-lg-3 col-md-12 px-0 order-second">
      <div className="sidebar-right">
        <div className="logo-section text-center">
          <button className="btn-arrow-icon-1"   onClick={() => props.toggleRightSideNav()}><img src="/imgs/svgs/rightarrow-icon1.svg" /></button>
        </div>

      </div>
    </div>
  );
}
