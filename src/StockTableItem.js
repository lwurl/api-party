import React from 'react';
import './StockTableItem.css';

class StockTableItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.point[0]}</td>
                <td>{this.props.point[1]}</td>
            </tr>
        );
    }
}

export default StockTableItem;