import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/table";
import Criteria from "./components/criteria";

export default function Contracts() {
  let [contracts, setContracts] = useState([]);
  let [showCriteria, setShowCriteria] = useState(true);

  const loadRecords = async (params) => {
    try {
      const result = await axios.get(`http://localhost:3000/contracts`, {
        params,
      });
      setContracts(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const applyFilter = (filters) => {
    loadRecords(filters);
  };

  const toggleShowCriteria = () => {
    setShowCriteria(!showCriteria);
  };

  return (
    <div className="container-fluids-kl">
      <div className="row-kl">
        <div className="col-kl-12">
          {/* <div className="header-section" /> */}
        </div>
        <Criteria
          applyFilter={applyFilter}
          showCriteria={showCriteria}
          toggleShowCriteria={toggleShowCriteria}
        />
        <div
          id="main"
          style={showCriteria ? { marginLeft: "300px" } : { marginLeft: "0px" }}
        >
          {!showCriteria ? (
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => toggleShowCriteria()}
            >
              &#9776;
            </span>
          ) : null}

          {contracts.length > 0 ? <Table contracts={contracts} /> : null}
        </div>
      </div>
    </div>
  );
}
