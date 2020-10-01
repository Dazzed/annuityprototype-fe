import { useState } from "react";

export default function Criteria(props) {
  let [contractNumberFilterOp, setContractNumberFilterOp] = useState("eq");
  let [contractNumberFilterVal, setContractNumberFilterval] = useState("");
  let [ownerFilterOp, setOwnerFilterOp] = useState("eq");
  let [ownerFilterVal, setOwnerFilterVal] = useState("");
  let [productNameFilterOp, setProductNameFilterOp] = useState("eq");
  let [productNameFilterVal, setProductNameFilterVal] = useState("");

  const applyFilter = () => {
    const filters = {};

    if (contractNumberFilterVal) {
      filters.contract_number = JSON.stringify([
        contractNumberFilterOp,
        contractNumberFilterVal,
      ]);
    }

    if (ownerFilterVal) {
      filters.owner = JSON.stringify([ownerFilterOp, ownerFilterVal]);
    }

    if (productNameFilterVal) {
      filters.product_name = JSON.stringify([
        productNameFilterOp,
        productNameFilterVal,
      ]);
    }

    props.applyFilter(filters);
  };

  const resetFilter = () => {
    setContractNumberFilterval("");
    setOwnerFilterVal("");
    setProductNameFilterVal("");
  };

  return (
    <div id="mySidenav" className="sidenav">
      <li className="bg-colorli">
        Set Criteria
        <a href="#0" className="closebtn">
          &times;
        </a>
      </li>
      <li>
        <a href="#">Contract Number</a>
        <input
          type="text"
          name="contractNumberFilterVal"
          placeholder=""
          className="form-field"
          value={contractNumberFilterVal}
          onChange={(e) => setContractNumberFilterval(e.target.value)}
        />
      </li>
      <li>
        <a href="#">Owner</a>
        <input
          type="text"
          name="ownerFilterVal"
          placeholder=""
          className="form-field"
          value={ownerFilterVal}
          onChange={(e) => setOwnerFilterVal(e.target.value)}
        />
      </li>
      <li>
        <a href="#">Product</a>
        <input
          type="text"
          name="productNameFilterVal"
          placeholder=""
          className="form-field"
          value={productNameFilterVal}
          onChange={(e) => setProductNameFilterVal(e.target.value)}
        />
      </li>

      <div className="apply-section">
        <button onClick={applyFilter}>Apply</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
    </div>
  );
}
