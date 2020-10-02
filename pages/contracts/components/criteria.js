import { useState } from "react";

export default function Criteria(props) {
  let [contractNumberFilterOp, setContractNumberFilterOp] = useState("eq");
  let [contractNumberFilterVal, setContractNumberFilterval] = useState("");
  let [ownerFilterOp, setOwnerFilterOp] = useState("like");
  let [ownerFilterVal, setOwnerFilterVal] = useState("");
  let [productNameFilterOp, setProductNameFilterOp] = useState("like");
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
      filters.owner = JSON.stringify([ownerFilterOp, `%${ownerFilterVal}%`]);
    }

    if (productNameFilterVal) {
      filters.product_name = JSON.stringify([
        productNameFilterOp,
        `%${productNameFilterVal}%`,
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
      <div id="accordion">
        <div class="card">
          <div class="card-header cardcustomheader p-1" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Contract Number
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body px-2 py-1">
              <input
                type="text"
                name="contractNumberFilterVal"
                placeholder=""
                className="form-field"
                value={contractNumberFilterVal}
                onChange={(e) => setContractNumberFilterval(e.target.value)}
              />
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle dropdown-toggle-menu" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" href="#">section 1</a>
                <a class="dropdown-item" href="#">section 2</a>
                <a class="dropdown-item" href="#">section 3</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header cardcustomheader p-1" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                Owner
              </button>
            </h5>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body px-2 py-1">
              <input
                type="text"
                name="ownerFilterVal"
                placeholder=""
                className="form-field"
                value={ownerFilterVal}
                onChange={(e) => setOwnerFilterVal(e.target.value)}
              />
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle dropdown-toggle-menu" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <a class="dropdown-item" href="#">section 1</a>
                <a class="dropdown-item" href="#">section 2</a>
                <a class="dropdown-item" href="#">section 3</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header cardcustomheader p-1" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                Product
              </button>
            </h5>
          </div>

          <div id="collapseThree" class="collapse" aria-labelledby="headingTne" data-parent="#accordion">
            <div class="card-body px-2 py-1">
              <input
                type="text"
                name="productNameFilterVal"
                placeholder=""
                className="form-field"
                value={productNameFilterVal}
                onChange={(e) => setProductNameFilterVal(e.target.value)}
              />
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle dropdown-toggle-menu" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                <a class="dropdown-item" href="#">section 1</a>
                <a class="dropdown-item" href="#">section 2</a>
                <a class="dropdown-item" href="#">section 3</a>
              </div>
            </div>  
          </div>
        </div>
      </div>
      {/* <li>
        <a href="#">Owner</a>
        <input
          type="text"
          name="ownerFilterVal"
          placeholder=""
          className="form-field"
          value={ownerFilterVal}
          onChange={(e) => setOwnerFilterVal(e.target.value)}
        />
      </li> */}
      {/* <li>
        <a href="#">Product</a>
        <input
          type="text"
          name="productNameFilterVal"
          placeholder=""
          className="form-field"
          value={productNameFilterVal}
          onChange={(e) => setProductNameFilterVal(e.target.value)}
        />
      </li> */}

      <div className="apply-section">
        <button onClick={applyFilter}>Apply</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
    </div >
  );
}
