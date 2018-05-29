import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Github.css';

class Github extends Component {
    state = {
        username: '',
    }

    handleChange = (ev) => {
        this.setState({
            username: ev.target.value
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/github/${this.state.username}`);
    }

    render() {
        return (
            <div className="Github">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up GitHub user</button>
                    </div>
                </form>
                <Route path="/github/:username" render={(props) => <h3>You entered {props.match.params.username}</h3>} />
                <Route exact path="/github" render={() => <h3>Please enter a username to search on Github</h3>} />
            </div>
        );
    }
}

export default Github;