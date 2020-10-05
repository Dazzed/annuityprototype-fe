import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export default function Criteria(props) {
  let [contractNumberFilterOp, setContractNumberFilterOp] = useState("eq");
  let [contractNumberFilterVal, setContractNumberFilterVal] = useState("");

  let [ownerFilterOp, setOwnerFilterOp] = useState("eq");
  let [ownerFilterVal, setOwnerFilterVal] = useState("");

  let [annuitantFilterOp, setAnnuitantFilterOp] = useState("eq");
  let [annuitantFilterVal, setAnnuitantFilterVal] = useState("");

  let [productNameFilterOp, setProductNameFilterOp] = useState("eq");
  let [productNameFilterVal, setProductNameFilterVal] = useState("");

  let [contractValueFilterOp, setContractValueFilterOp] = useState("eq");
  let [contractValueFilterVal, setContractValueFilterVal] = useState("");

  let [ownerAgeMin, setOwnerAgeMin] = useState();
  let [ownerAgeMax, setOwnerAgeMax] = useState();

  const generateFilters = () => {
    const filters = {};

    if (contractNumberFilterVal && contractNumberFilterOp) {
      filters.contract_number = JSON.stringify([
        contractNumberFilterOp,
        contractNumberFilterVal,
      ]);
    }

    if (ownerFilterVal && ownerFilterOp) {
      filters.owner = JSON.stringify([
        ownerFilterOp,
        ownerFilterOp === "like" ? `%${ownerFilterVal}%` : ownerFilterVal,
      ]);
    }

    if (annuitantFilterVal && annuitantFilterOp) {
      filters.annuitant = JSON.stringify([
        annuitantFilterOp,
        annuitantFilterOp === "like"
          ? `%${annuitantFilterVal}%`
          : annuitantFilterVal,
      ]);
    }

    if (productNameFilterVal && productNameFilterOp) {
      filters.product_name = JSON.stringify([
        productNameFilterOp,
        productNameFilterOp === "like"
          ? `%${productNameFilterVal}%`
          : productNameFilterVal,
      ]);
    }

    if (contractValueFilterVal && contractValueFilterOp) {
      filters.contract_value = JSON.stringify([
        contractValueFilterOp,
        contractValueFilterVal,
      ]);
    }

    if (ownerAgeMin || ownerAgeMax) {
      filters.owner_age = JSON.stringify([
        "or",
        { min: ownerAgeMin, max: ownerAgeMax },
      ]);
    }

    return filters;
  };

  const applyFilter = () => {
    const filters = generateFilters();
    props.applyFilter(filters);
    saveSearchCriteria(filters);
  };

  const getSearchCriteria = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/users/get-contract-search-criteria`
      );
      const keys = Object.keys(data);

      keys.forEach((key) => {
        const [op, value] = JSON.parse(data[key]);
        switch (key) {
          case "contractNumber":
            setContractNumberFilterVal(value);
            setContractNumberFilterOp(op);
            break;

          case "owner":
            setOwnerFilterVal(value);
            setOwnerFilterOp(op);
            break;

          case "ownerAge":
            setOwnerAgeMin(value.min);
            setOwnerAgeMax(value.max);
            break;

          case "annuitant":
            setAnnuitantFilterVal(value);
            setAnnuitantFilterOp(op);
            break;

          case "annuitantAge":
            break;
          case "issueDate":
            break;

          case "productName":
            setProductNameFilterVal(value);
            setProductNameFilterOp(op);
            break;

          case "contractValue":
            setContractValueFilterVal(value);
            setContractValueFilterOp(op);
            break;
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const saveSearchCriteria = async (filters) => {
    try {
      const params = _.mapKeys(filters, (value, key) => {
        return _.camelCase(key);
      });

      await axios.post(
        `http://localhost:3000/users/set-contract-search-criteria`,
        params
      );
    } catch (error) {
      console.error(error);
    }
  };

  const resetCriteria = () => {
    setContractNumberFilterVal("");
    setContractNumberFilterOp("eq");

    setOwnerFilterVal("");
    setOwnerFilterOp("eq");

    setProductNameFilterVal("");
    setProductNameFilterOp("eq");

    setAnnuitantFilterVal("");
    setAnnuitantFilterOp("eq");

    setContractValueFilterVal("");
    setContractValueFilterOp("eq");

    setOwnerAgeMin(0);
    setOwnerAgeMax(0);

    props.applyFilter();
  };

  useEffect(() => {
    getSearchCriteria();
  }, []);

  return (
    <div
      id="mySidenav"
      className="sidenav"
      style={props.showCriteria ? { width: "300px" } : { width: "0px" }}
    >
      <li className="bg-colorli">
        Set Criteria
        <a
          href="#0"
          className="closebtn"
          onClick={() => props.toggleShowCriteria()}
        >
          &times;
        </a>
      </li>
      <div id="accordion">
        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Contract Number
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse position-relative"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <input
                type="text"
                name="contractNumberFilterVal"
                placeholder=""
                className="form-field"
                value={contractNumberFilterVal}
                onChange={(e) => setContractNumberFilterVal(e.target.value)}
              />
            </div>
            <select
              className="dropdown-toggle-menu"
              value={contractNumberFilterOp}
              onChange={(e) => setContractNumberFilterOp(e.target.value)}
            >
              <option value=""></option>
              <option value="eq">Equals</option>
              <option value="ne">Not Equals</option>
              <option value="like">Contains</option>
            </select>
          </div>
        </div>

        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Owner
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse position-relative"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <input
                type="text"
                name="ownerFilterVal"
                placeholder=""
                className="form-field"
                value={ownerFilterVal}
                onChange={(e) => setOwnerFilterVal(e.target.value)}
              />
            </div>
            <select
              className="dropdown-toggle-menu"
              value={ownerFilterOp}
              onChange={(e) => setOwnerFilterOp(e.target.value)}
            >
              <option value=""></option>
              <option value="eq">Equals</option>
              <option value="ne">Not Equals</option>
              <option value="like">Contains</option>
            </select>
          </div>
        </div>

        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#annuitant_collapse"
                aria-expanded="true"
                aria-controls="annuitant_collapse"
              >
                Annuitant
              </button>
            </h5>
          </div>
          <div
            id="annuitant_collapse"
            className="collapse position-relative"
            aria-labelledby="headingTne"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <input
                type="text"
                name="annuitantFilterVal"
                placeholder=""
                className="form-field"
                value={annuitantFilterVal}
                onChange={(e) => setAnnuitantFilterVal(e.target.value)}
              />
            </div>
            <select
              className="dropdown-toggle-menu"
              value={annuitantFilterOp}
              onChange={(e) => setAnnuitantFilterOp(e.target.value)}
            >
              <option value=""></option>
              <option value="eq">Equals</option>
              <option value="ne">Not Equals</option>
              <option value="like">Contains</option>
            </select>
          </div>
        </div>

        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Product
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse position-relative"
            aria-labelledby="headingTne"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <input
                type="text"
                name="productNameFilterVal"
                placeholder=""
                className="form-field"
                value={productNameFilterVal}
                onChange={(e) => setProductNameFilterVal(e.target.value)}
              />
            </div>
            <select
              className="dropdown-toggle-menu"
              value={productNameFilterOp}
              onChange={(e) => setProductNameFilterOp(e.target.value)}
            >
              <option value=""></option>
              <option value="eq">Equals</option>
              <option value="ne">Not Equals</option>
              <option value="like">Contains</option>
            </select>
          </div>
        </div>

        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#contract_value"
                aria-expanded="true"
                aria-controls="contract_value"
              >
                Contract Value
              </button>
            </h5>
          </div>
          <div
            id="contract_value"
            className="collapse position-relative"
            aria-labelledby="headingTne"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <input
                type="text"
                name="contractValueFilterVal"
                placeholder=""
                className="form-field"
                value={contractValueFilterVal}
                onChange={(e) => setContractValueFilterVal(e.target.value)}
              />
            </div>
            <select
              className="dropdown-toggle-menu"
              value={contractValueFilterOp}
              onChange={(e) => setContractValueFilterOp(e.target.value)}
            >
              <option value=""></option>
              <option value="eq">Equals</option>
              <option value="ne">Not Equals</option>
              <option value="lt">Less than</option>
              <option value="lte">Less than equal</option>
              <option value="gt">Greater than</option>
              <option value="gte">Greater than equal</option>
            </select>
          </div>
        </div>

        <div className="card">
          <div className="card-header cardcustomheader p-1" id="headingFour">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Client Age
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            className="collapse position-relative"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div className="card-body px-2 py-1">
              <div className="row">
                <div className="col-lg-6">
                  <label>Min</label>
                  <input
                    type="number"
                    name="ownerAgeMin"
                    placeholder=""
                    className="form-field w-100"
                    value={ownerAgeMin}
                    onChange={(e) => setOwnerAgeMin(e.target.value)}
                  />
                </div>
                <div className="col-lg-6">
                  <label>Max</label>
                  <input
                    type="number"
                    name="ownerAgeMax"
                    placeholder=""
                    className="form-field w-100"
                    value={ownerAgeMax}
                    onChange={(e) => setOwnerAgeMax(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="apply-section">
        <button onClick={applyFilter}>Apply</button>
        <button onClick={resetCriteria}>Reset</button>
      </div>
    </div>
  );
}
