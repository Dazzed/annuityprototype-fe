import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

import Criteria from "./components/criteria";
import { CONTRACT_COLUMNS } from "../../config/constants";

export default function Contracts() {
  let [contracts, setContracts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`http://localhost:3000/contracts`);
        setContracts(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="container-fluids-kl">
      <div className="row-kl">
        <div className="col-kl-12">
          <div className="header-section">

          </div>
        </div>
        <div className="col-kl-12">
          {/* <Criteria /> */}
          {/* <div id="main"> */}
            {/* <span style={{ fontSize: "30px", cursor: "pointer" }}>&#9776;</span> */}
              <div className="col-kl-12">
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
        {/* </div> */}
      </div>
    </div>
  );
}
