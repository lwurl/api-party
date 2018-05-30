import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StockInfo from './StockInfo';

class Stocks extends Component {
    state = {
        ticker: '',
    }

    handleChange = (ev) => {
        this.setState({
            ticker: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/stocks/${this.state.ticker}`);
    }

    render() {
        return (
            <div className="Stocks">
                <h1>Stocks</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit ticker</button>
                    </div>
                </form>
                <Route path="/stocks/:ticker" component={StockInfo} />
                <Route exact path="/stocks" render={() => <h3>Please enter a stock ticker</h3>} />
            </div>
        );
    }
}

export default Stocks;