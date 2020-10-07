import React, { Component } from "react";

class Table extends Component {
  render() {
    const { contracts } = this.props;
    return (
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
              <img src="/imgs/svg-imgs/dropdown-blue.svg" alt="dropdown Icon" />
            </th>
            <th scope="col">
              Owner Name
              <img src="/imgs/svg-imgs/dropdown-blue.svg" alt="dropdown Icon" />
            </th>
            <th scope="col">
              Age
              <img src="/imgs/svg-imgs/dropdown-blue.svg" alt="dropdown Icon" />
            </th>
            <th scope="col">
              Product
              <img src="/imgs/svg-imgs/dropdown-blue.svg" alt="dropdown Icon" />
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
            <tr key={contract.id}>
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
    );
  }
}

export default Table;
