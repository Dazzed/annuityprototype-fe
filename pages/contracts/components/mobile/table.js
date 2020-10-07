import React, { Component } from "react";

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
                  src="/imgs/svgs/dropdown-grey.svg"
                  className="dropdwon-grey"
                  alt="dropdown Icon"
                />
              </th>
              <th scope="col">
                Contract
                <img src="/imgs/svgs/dropdown-blue.svg" alt="dropdown Icon" />
              </th>
              <th scope="col">
                Owner Name
                <img src="/imgs/svgs/dropdown-blue.svg" alt="dropdown Icon" />
              </th>
              <th scope="col">
                Age
                <img src="/imgs/svgs/dropdown-blue.svg" alt="dropdown Icon" />
              </th>
              <th scope="col">
                Product
                <img src="/imgs/svgs/dropdown-blue.svg" alt="dropdown Icon" />
              </th>
              <th scope="col">
                Value
                <img
                  src="/imgs/svgs/dropdown-blue.svg"
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
                <td scope="row">
                  <label className="checkbox">
                    <input className="checkbox__input" type="checkbox" />
                    <svg className="checkbox__check" width="20" height="20">
                      <polyline points="15 6 10 14 5 11"></polyline>
                    </svg>
                  </label>
                </td>
                <td>{contract.contract}</td>
                <td>{contract.ownerName}</td>
                <td>{contract.ageO}</td>
                <td>{contract.product}</td>
                <td>{contract.value}</td>
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
