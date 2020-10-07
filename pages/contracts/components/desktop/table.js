import React, { Component } from "react";
import numeral from "numeral";

import DetailedContractModal from "../detailedModal";

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
        <table className="table table-responsive-md">
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
                  src="/imgs/svg-imgs/dropdown-grey.svg"
                  className="dropdwon-grey"
                  alt="dropdown Icon"
                />
              </th>
              <th scope="col">
                Contract
              <div class="dropdown show d-inline-block">
                  <a class="" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img
                      src="/imgs/svg-imgs/dropdown-blue.svg"
                      alt="dropdown Icon"
                    />
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                    <ul className="px-1 m-0">
                      <li class="dropdown-item px-2" href="#">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <svg className="checkbox__check" width="20" height="20">
                            <polyline points="15 6 10 14 5 11"></polyline>
                          </svg>
                          <span className="ml-2">Select 1</span>
                        </label>
                      </li>
                      <li class="dropdown-item px-2" href="#">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <svg className="checkbox__check" width="20" height="20">
                            <polyline points="15 6 10 14 5 11"></polyline>
                          </svg>
                          <span className="ml-2">Select 2</span>
                        </label>
                      </li>
                      <li class="dropdown-item px-2" href="#">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <svg className="checkbox__check" width="20" height="20">
                            <polyline points="15 6 10 14 5 11"></polyline>
                          </svg>
                          <span className="ml-2">Select 3</span>
                        </label>
                      </li>
                      <li class="dropdown-item px-2" href="#">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <svg className="checkbox__check" width="20" height="20">
                            <polyline points="15 6 10 14 5 11"></polyline>
                          </svg>
                          <span className="ml-2">Select 4</span>
                        </label>
                      </li>
                      <li class="dropdown-item px-2" href="#">
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
              </th>
              <th scope="col">
                Owner Name
                <img
                  src="/imgs/svg-imgs/dropdown-blue.svg"
                  alt="dropdown Icon"
                />
              </th>
              <th scope="col" className="text-center">
                Age
                <img
                  src="/imgs/svg-imgs/dropdown-blue.svg"
                  alt="dropdown Icon"
                />
              </th>
              <th scope="col">
                Product
                <img
                  src="/imgs/svg-imgs/dropdown-blue.svg"
                  alt="dropdown Icon"
                />
              </th>
              <th scope="col">
                Value
                <img
                  src="/imgs/svg-imgs/dropdown-blue.svg"
                  alt="dropdown Icon"
                />{" "}
                <button className="add-btn">+</button>
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
                <td className="w-15">{numeral(contract.value).format("$0,0.00")}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
