import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Criteria from "./components/criteria";
import { CONTRACT_COLUMNS } from "../../config/constants";

export default function Contracts() {
  let [contracts, setContracts] = useState([]);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Criteria applyFilter={applyFilter} />
          <div id="main">
            {/* <span style={{ fontSize: "30px", cursor: "pointer" }}>&#9776;</span> */}
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
    </div>
  );
}
