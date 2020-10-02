import React, {Component} from 'react';

import { CONTRACT_COLUMNS } from "../../../config/constants";

const $ = require('jquery');
$.DataTable = require('datatables.net');


class Table extends Component {
    componentDidMount() {
      console.log(this.props.contracts)
      console.log(CONTRACT_COLUMNS)
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.contracts,
            columns: CONTRACT_COLUMNS,
            ordering: false
        });
    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}

export default Table;