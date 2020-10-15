import React, { Component } from "react";
import numeral from "numeral";

import DetailedContractModal from "./detailedModal";
import ColumnFilterDrop from "./columnFilterDrop";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetailedContractModal: false,
      currentSelectedContract: {},
    };

    this.selectContract = this.selectContract.bind(this);
    this.toggleDetailedModal = this.toggleDetailedModal.bind(this);
  }

  toggleDetailedModal() {
    this.setState((state) => ({
      showDetailedContractModal: !state.showDetailedContractModal,
    }));
  }

  selectContract(contract) {
    this.setState(
      {
        currentSelectedContract: contract,
      },
      () => this.toggleDetailedModal()
    );
  }

  render() {
    const { contracts } = this.props;
    const { showDetailedContractModal, currentSelectedContract } = this.state;

    return (
      <>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils m-0">
          <ul
            className="nav nav-pills nav-custom-pills nav-pills-support mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link-custom active"
                id="pills-contracts-tab"
                data-toggle="pill"
                href="#pills-contracts"
                role="tab"
                aria-controls="pills-contracts"
                aria-selected="true"
              >
                Contracts
                    </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link-custom"
                id="pills-anniversaries-tab"
                data-toggle="pill"
                href="#pills-anniversaries"
                role="tab"
                aria-controls="pills-anniversaries"
                aria-selected="false"
              >
                Anniversaries
                    </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link-custom"
                id="pills-groups"
                data-toggle="pill"
                href="#pills-groups"
                role="tab"
                aria-controls="pills-groups"
                aria-selected="false"
              >
                Groups
                    </a>
            </li>
          </ul>
          <div className="grid-section">
            <img src="/imgs/column-icon.png" alt="Column Icon" />
            <img src="/imgs/list-icon.png" alt="List Icon" />
          </div>
          <div
            className="tab-content"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active "
              id="pills-contracts"
              role="tabpanel"
              aria-labelledby="pills-contracts-tab"
            >
              <div className="table-responsive">
                <table className="table desktop-block">
                  <thead>
                    <tr className="box-none">
                      <th scope="col">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <svg className="checkbox__check" width="20" height="20">
                            <polyline points="15 6 10 14 5 11"></polyline>
                          </svg>
                        </label>
                        <img
                          src="/imgs/svgs/dropdown-grey.svg"
                          className="dropdwon-grey"
                          alt="dropdown Icon"
                        />
                      </th>
                      <th scope="col">
                        Contract
                <ColumnFilterDrop />
                      </th>
                      <th scope="col">
                        Owner Name
                <ColumnFilterDrop />
                      </th>
                      <th scope="col" className="text-center">
                        Age
                <ColumnFilterDrop />
                      </th>
                      <th scope="col" className="text-center">
                        Value
                <ColumnFilterDrop />
                        {/* <button className="add-btn">+</button> */}
                      </th>
                      <th scope="col">
                        Product Type
                <ColumnFilterDrop />
                      </th>
                      <th scope="col" className="text-center">
                        Issue Date
                <ColumnFilterDrop />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((contract) => (
                      <tr
                        key={contract.id}
                        onClick={() => this.selectContract(contract)}
                        className="btn-hover"
                      >
                        <td scope="row" className="">
                          <label className="checkbox">
                            <input className="checkbox__input" type="checkbox" />
                            <svg className="checkbox__check" width="20" height="20">
                              <polyline points="15 6 10 14 5 11"></polyline>
                            </svg>
                          </label>
                        </td>
                        <td className="">{contract.contract}</td>
                        <td className="w-22">{contract.ownerName}</td>
                        <td className="text-center">{contract.ageO}</td>
                        <td className=" text-right bold-text">
                          {numeral(contract.value).format("$0,0.00")}
                        </td>
                        <td className="w-17">{contract.product}</td>
                        <td className="text-right">
                          1/19/1996
                      </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="container responsive-block">
                {contracts.map((contract) => (
                  <div className="row background-color-res" key={contract.id}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-7 pr-0">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                          <label className="checkbox">
                            <input className="checkbox__input" type="checkbox" />
                            <svg className="checkbox__check" width="20" height="20">
                              <polyline points="15 6 10 14 5 11"></polyline>
                            </svg>
                          </label>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9 pl-0">
                          <div className="owner-section">
                            <h3>{contract.ownerName}</h3>
                            <h5>{contract.contract}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5 text-right">
                      <div className="arrow-dwonsection">
                        <img src="/imgs/svgs/dropdown-blue.svg" alt="dropdown Icon" />
                      </div>
                      <div className="value-section">
                        <h4>{numeral(contract.value).format("$0,0.00")}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {!contracts || contracts.length === 0 ? (
                <div className="text-center mt-30">
                  <p>No results found</p>
                </div>
              ) : null}
              <DetailedContractModal
                show={showDetailedContractModal}
                contractDetails={currentSelectedContract}
                handleClose={this.toggleDetailedModal}
              />
            </div>
            <div
              className="tab-pane fade column-width-pills "
              id="pills-anniversaries"
              role="tabpanel"
              aria-labelledby="pills-anniversaries-tab"
            ></div>
            <div
              className="tab-pane fade column-width-pills "
              id="pills-groups"
              role="tabpanel"
              aria-labelledby="pills-groups"
            ></div>
          </div>
        </div>
        {/* table old design */}

      </>
    );
  }
}

export default Table;
