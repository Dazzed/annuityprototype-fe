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

          <div id="collapseOne" class="collapse position-relative" aria-labelledby="headingOne" data-parent="#accordion">
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
            <select className="dropdown-toggle-menu">
              <option>section 1</option>
              <option>section 2</option>
              <option>section 3</option>
            </select>
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

          <div id="collapseTwo" class="collapse position-relative" aria-labelledby="headingTwo" data-parent="#accordion">
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
            <select className="dropdown-toggle-menu">
              <option>section 1</option>
              <option>section 2</option>
              <option>section 3</option>
            </select>
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

          <div id="collapseThree" class="collapse position-relative" aria-labelledby="headingTne" data-parent="#accordion">
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
            <select className="dropdown-toggle-menu">
              <option>section 1</option>
              <option>section 2</option>
              <option>section 3</option>
            </select>
          </div>
        </div>
        <div class="card">
          <div class="card-header cardcustomheader p-1" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                Client Age
              </button>
            </h5>
          </div>

          <div id="collapseFour" class="collapse position-relative" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body px-2 py-1">
              <div class="row">
                <div className="col-lg-6">
                  <label>Min</label>
                  <input
                    type="text"
                    name="ownerFilterVal"
                    placeholder=""
                    className="form-field w-100"
                    value={ownerFilterVal}

                  />
                </div>
                <div className="col-lg-6">
                  <label>Max</label>
                  <input
                    type="text"
                    name="ownerFilterVal"
                    placeholder=""
                    className="form-field w-100"
                    value={ownerFilterVal}

                  />
                </div>
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
