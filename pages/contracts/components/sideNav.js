// import { useState, useEffect } from "react";
// import axios from "axios";
// import _ from "lodash";

export default function Criteria(props) {
  // let [contractNumberFilterOp, setContractNumberFilterOp] = useState("eq");
  // let [contractNumberFilterVal, setContractNumberFilterVal] = useState("");

  // let [ownerFilterOp, setOwnerFilterOp] = useState("eq");
  // let [ownerFilterVal, setOwnerFilterVal] = useState("");

  // let [annuitantFilterOp, setAnnuitantFilterOp] = useState("eq");
  // let [annuitantFilterVal, setAnnuitantFilterVal] = useState("");

  // let [productNameFilterOp, setProductNameFilterOp] = useState("eq");
  // let [productNameFilterVal, setProductNameFilterVal] = useState("");

  // let [contractValueFilterOp, setContractValueFilterOp] = useState("eq");
  // let [contractValueFilterVal, setContractValueFilterVal] = useState("");

  // let [ownerAgeMin, setOwnerAgeMin] = useState();
  // let [ownerAgeMax, setOwnerAgeMax] = useState();

  // const generateFilters = () => {
  //   const filters = {};

  //   if (contractNumberFilterVal && contractNumberFilterOp) {
  //     filters.contract_number = JSON.stringify([
  //       contractNumberFilterOp,
  //       contractNumberFilterOp === "like"
  //         ? `%${contractNumberFilterVal}%`
  //         : contractNumberFilterVal,
  //     ]);
  //   }

  //   if (ownerFilterVal && ownerFilterOp) {
  //     filters.owner = JSON.stringify([
  //       ownerFilterOp,
  //       ownerFilterOp === "like" ? `%${ownerFilterVal}%` : ownerFilterVal,
  //     ]);
  //   }

  //   if (annuitantFilterVal && annuitantFilterOp) {
  //     filters.annuitant = JSON.stringify([
  //       annuitantFilterOp,
  //       annuitantFilterOp === "like"
  //         ? `%${annuitantFilterVal}%`
  //         : annuitantFilterVal,
  //     ]);
  //   }

  //   if (productNameFilterVal && productNameFilterOp) {
  //     filters.product_name = JSON.stringify([
  //       productNameFilterOp,
  //       productNameFilterOp === "like"
  //         ? `%${productNameFilterVal}%`
  //         : productNameFilterVal,
  //     ]);
  //   }

  //   if (contractValueFilterVal && contractValueFilterOp) {
  //     filters.contract_value = JSON.stringify([
  //       contractValueFilterOp,
  //       contractValueFilterVal,
  //     ]);
  //   }

  //   if (ownerAgeMin || ownerAgeMax) {
  //     filters.owner_age = JSON.stringify([
  //       "or",
  //       { min: ownerAgeMin, max: ownerAgeMax },
  //     ]);
  //   }

  //   return filters;
  // };

  // const applyFilter = () => {
  //   const filters = generateFilters();
  //   props.applyFilter(filters);
  //   saveSearchCriteria(filters);
  // };

  // const getSearchCriteria = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/users/get-contract-search-criteria`
  //     );
  //     const keys = Object.keys(data);

  //     keys.forEach((key) => {
  //       const [op, value] = JSON.parse(data[key]);
  //       switch (key) {
  //         case "contractNumber":
  //           setContractNumberFilterVal(value);
  //           setContractNumberFilterOp(op);
  //           break;

  //         case "owner":
  //           setOwnerFilterVal(value);
  //           setOwnerFilterOp(op);
  //           break;

  //         case "ownerAge":
  //           setOwnerAgeMin(value.min);
  //           setOwnerAgeMax(value.max);
  //           break;

  //         case "annuitant":
  //           setAnnuitantFilterVal(value);
  //           setAnnuitantFilterOp(op);
  //           break;

  //         case "annuitantAge":
  //           break;
  //         case "issueDate":
  //           break;

  //         case "productName":
  //           setProductNameFilterVal(value);
  //           setProductNameFilterOp(op);
  //           break;

  //         case "contractValue":
  //           setContractValueFilterVal(value);
  //           setContractValueFilterOp(op);
  //           break;
  //       }

  //       const params = _.mapKeys(data, (value, key) => {
  //         return _.snakeCase(key);
  //       });

  //       // search again with saved criteria
  //       setTimeout(() => props.applyFilter(params), 500);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const saveSearchCriteria = async (filters) => {
  //   try {
  //     const params = _.mapKeys(filters, (value, key) => {
  //       return _.camelCase(key);
  //     });

  //     await axios.post(
  //       `http://localhost:3000/users/set-contract-search-criteria`,
  //       params
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const resetCriteria = () => {
  //   setContractNumberFilterVal("");
  //   setContractNumberFilterOp("eq");

  //   setOwnerFilterVal("");
  //   setOwnerFilterOp("eq");

  //   setProductNameFilterVal("");
  //   setProductNameFilterOp("eq");

  //   setAnnuitantFilterVal("");
  //   setAnnuitantFilterOp("eq");

  //   setContractValueFilterVal("");
  //   setContractValueFilterOp("eq");

  //   setOwnerAgeMin(0);
  //   setOwnerAgeMax(0);

  //   props.applyFilter();
  // };

  // useEffect(() => {
  //   getSearchCriteria();
  // }, []);

  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="/imgs/svg-imgs/logo-white.svg" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <a href="#">
              <img src="/imgs/svg-imgs/dashboard-icon.svg" />
              <span className="p-0 d-none-view">Dashboard</span>
            </a>
          </li>
          <li className="active-nav-item">
            <a href="#">
              <img src="/imgs/svg-imgs/contract-icon.svg" />
              <span className="p-0 d-none-view">Contract <span>Management</span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
