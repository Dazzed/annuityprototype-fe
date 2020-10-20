import format from "date-fns/format";
import numeral from "numeral";

export default function RightNavContent(props) {
  return (
    <div className="row hl-100">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils pt-info-noti">
        <ul
          className="nav nav-pills nav-custom-pills nav-pills-support  mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link-custom active"
              id="pills-info-tab"
              data-toggle="pill"
              href="#pills-infos"
              role="tab"
              aria-controls="pills-infos"
              aria-selected="true"
            >
              Info
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link-custom"
              id="pills-forms-tab"
              data-toggle="pill"
              href="#pills-forms"
              role="tab"
              aria-controls="pills-forms"
              aria-selected="false"
            >
              Forms
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link-custom"
              id="pills-tab3-tab"
              data-toggle="pill"
              href="#pills-tab3"
              role="tab"
              aria-controls="pills-tab3"
              aria-selected="false"
            >
              Tabs
            </a>
          </li>
        </ul>
        <div
          className="tab-content tab-custom-supportsection"
          id="pills-tabContent"
        >
          <div
            className="tab-pane fade show active col-width-suportsection"
            id="pills-infos"
            role="tabpanel"
            aria-labelledby="pills-info-tab"
          ></div>
          <div
            className="tab-pane fade column-width-pills col-width-suportsection"
            id="pills-forms"
            role="tabpanel"
            aria-labelledby="pills-forms-tab"
          ></div>
          <div
            className="tab-pane fade column-width-pills col-width-suportsection"
            id="pills-tab3"
            role="tabpanel"
            aria-labelledby="pills-tab3"
          ></div>
        </div>
      </div>
    </div>
  );
}
