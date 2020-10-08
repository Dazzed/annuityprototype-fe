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
        <table className="table table-responsive-md desktop-block">
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
              <th scope="col">
                Product
                <ColumnFilterDrop />
              </th>
              <th scope="col" className="text-center">
                Value
                <ColumnFilterDrop /> <button className="add-btn">+</button>
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
                <td scope="row" className="w-6">
                  <label className="checkbox">
                    <input className="checkbox__input" type="checkbox" />
                    <svg className="checkbox__check" width="20" height="20">
                      <polyline points="15 6 10 14 5 11"></polyline>
                    </svg>
                  </label>
                </td>
                <td className="w-22">{contract.contract}</td>
                <td className="w-22">{contract.ownerName}</td>
                <td className="w-22 text-center">{contract.ageO}</td>
                <td className="w-15">{contract.product}</td>
                <td className="w-15 text-right">
                  {numeral(contract.value).format("$0,0.00")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="container responsive-block">
          {contracts.map((contract) => (
            <div className="row background-color-res" key={contract.id}>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
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
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-right">
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
        <DetailedContractModal
          show={showDetailedContractModal}
          contractDetails={currentSelectedContract}
          handleClose={this.toggleDetailedModal}
        />
      </>
    );
  }
}

export default Table;
