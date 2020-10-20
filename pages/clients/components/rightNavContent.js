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
          >
            {/* client page navright */}
            <div className="row mx-0">
              <div className="col-lg-12 px-0">
                <div className="usersection-clients">
                  <div className="userPicSection-info">
                    <img src="/imgs/profile-pic.png" alt="user picture" />
                  </div>
                  <div className="clients-title-name">
                    <h3>Jane Doe</h3>
                    <h6>$1,345,889</h6>
                    <p>Total Value</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="clients-rightNav-value">
                <div className="client-value-section">
                  <div className="client-contract-section">
                    <p>Contracts</p>
                    <h5>3</h5>
                  </div>
                  <div className="client-contract-section">
                    <p>Age</p>
                    <h5>81</h5>
                  </div>
                  <div className="client-contract-section">
                    <p>Beneficiaries</p>
                    <h5>2</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-height">
            </div>
            <div className="row mx-0 position-relative">
              <div className="address-section-client">
                <h4>Address</h4>
                <p>1234 S. Main St New York, NY 12345</p>
              </div>
              <div className="address-edit">
                <img src="/imgs/svgs/edit-icon.svg" />
              </div>
            </div>
            <div className="row mx-0 position-relative">
              <div className="address-section-client mb-3">
                <h4>Contracts</h4>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12">
                <div className="title-contract-name">
                  <h3>Pacific Select</h3>
                  <p>XX12345678</p>
                </div>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12 position-relative">
                <div className="title-contract-name-value">
                  <h3>$23,004</h3>
                </div>
                <div className="arrow-right">
                  <img src="/imgs/svgs/rightarrow-large.svg" />
                </div>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12">
                <div className="title-contract-name">
                  <h3>Pacific Select</h3>
                  <p>XX12345678</p>
                </div>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12 position-relative">
                <div className="title-contract-name-value">
                  <h3>$23,004</h3>
                </div>
                <div className="arrow-right">
                  <img src="/imgs/svgs/rightarrow-large.svg" />
                </div>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12">
                <div className="title-contract-name">
                  <h3>Pacific Select</h3>
                  <p>XX12345678</p>
                </div>
              </div>
              <div className="col-lg-6 col-nd-6 col-sm-6 col-12 position-relative">
                <div className="title-contract-name-value">
                  <h3>$23,004</h3>
                </div>
                <div className="arrow-right">
                  <img src="/imgs/svgs/rightarrow-large.svg" />
                </div>
              </div>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
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
