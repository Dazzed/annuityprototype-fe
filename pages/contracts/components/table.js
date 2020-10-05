import React, { Component } from "react";
import _ from "lodash";

import { CONTRACT_COLUMNS } from "../../../config/constants";

require("jszip");
require("pdfmake");
require("datatables.net-dt");
require("datatables.net-autofill-dt");
require("datatables.net-buttons-dt");
require("datatables.net-buttons/js/buttons.colVis.js");
require("datatables.net-colreorder-dt");
require("datatables.net-fixedcolumns-dt");
require("datatables.net-fixedheader-dt");
require("datatables.net-keytable-dt");
require("datatables.net-responsive-dt");
require("datatables.net-rowgroup-dt");
require("datatables.net-rowreorder-dt");
require("datatables.net-scroller-dt");
require("datatables.net-searchpanes-dt");
require("datatables.net-select-dt");

const $ = require("jquery");
$.DataTable = require("datatables.net");

class Table extends Component {
  componentDidMount() {
    $(this.refs.main).DataTable({
      dom: "Bfrtip",
      data: this.props.contracts,
      columns: CONTRACT_COLUMNS,
      buttons: ["colvis"],
      responsive: true
    });
  }

  componentWillUnmount() {
    $(".data-table-wrapper").find("table").DataTable().destroy(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.contracts &&
      !_.isEqual(this.props.contracts, prevProps.contracts)
    ) {
      console.log("update table", this.props.contracts.length);
      const table = $(this.refs.main).DataTable();
      table.clear();
      table.rows.add(this.props.contracts);
      table.draw();
    }
  }

  render() {
    return (
      <div>
        <table
          ref="main"
          className="display responsive nowrap"
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default Table;
