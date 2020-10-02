import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Criteria from "./components/criteria";
import { CONTRACT_COLUMNS } from "../../config/constants";

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

          <div className="row">
            <div className="col-lg-12">
              <DataTable
                title="Contracts"
                columns={CONTRACT_COLUMNS}
                data={contracts}
                striped
                highlightOnHover
                pointerOnHover
                responsive
                fixedHeader
                persistTableHead
                pagination
                paginationPerPage={100}
                paginationRowsPerPageOptions={[10, 50, 100, 200]}
                overflowY
                noHeader
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
