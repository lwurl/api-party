import React, { Component } from 'react';
import './StockInfo.css';
let index = 0;

class StockInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information: []
        };

        this.fetchStockInfo();
    }

    componentWillReceiveProps = (newProps) => {
        const locationChanged = newProps.location !== this.props.location
        if (locationChanged) {
            this.fetchStockInfo(newProps);
        }
    }

    fetchStockInfo(props) {
        fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${this.props.match.params.ticker}.json?column_index=4&start_date=2014-01-01&end_date=2014-12-31&collapse=monthly&transform=rdiff&api_key=UCqtFiLfeMy1Ln3eUuoH`)
            .then(response => response.json())
            .then(data => {
                let info = {}
                if (!data.hasOwnProperty('quandl_error')){
                    info = {
                        data: data.dataset.data,
                    }
                    this.setState({ information : info.data })
                }
                else {
                    info = null
                    this.setState({ information : info })
                }
            })
    }

    render() {
        return (
            <div className="StockInfo">
                <h3>Stock: {this.props.match.params.ticker}</h3>                
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>% Monthly Change</th>
                        </tr>
                        {this.state.information 
                            ? this.state.information.map(datum => 
                                <tr key={index++}>
                                    <td>{datum[0]}</td>
                                    <td>{datum[1]}</td>
                                </tr>)
                            : <h3> ERROR </h3>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockInfo;