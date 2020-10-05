import React, {Component} from 'react';

import { CONTRACT_COLUMNS } from "../../../config/constants";


require( 'jszip' );
require( 'pdfmake' );
require( 'datatables.net-dt' );
require( 'datatables.net-autofill-dt' );
require( 'datatables.net-buttons-dt' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-colreorder-dt' );
require( 'datatables.net-fixedcolumns-dt' );
require( 'datatables.net-fixedheader-dt' );
require( 'datatables.net-keytable-dt' );
require( 'datatables.net-responsive-dt' );
require( 'datatables.net-rowgroup-dt' );
require( 'datatables.net-rowreorder-dt' );
require( 'datatables.net-scroller-dt' );
require( 'datatables.net-searchpanes-dt' );
require( 'datatables.net-select-dt' );

const $  = require( 'jquery' );
$.DataTable = require( 'datatables.net' );

class Table extends Component {
    componentDidMount() {
      console.log(this.props.contracts)
      console.log(CONTRACT_COLUMNS)
        $(this.refs.main).DataTable({
            dom: 'Bfrtip',
            data: this.props.contracts,
            columns: CONTRACT_COLUMNS,
            ordering: true,
            buttons: [
                'colvis'
            ]
        });
    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    render() {
        return (
            <div>
                <table ref="main"  className="display responsive nowrap" style={{ width: "100%"}}  />
            </div>);
    }
}

export default Table;