import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header.js";
import TextField from "./components/TextField.js";
import Buttons from "./components/Buttons.js";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
			<div className="App">
				<Header />
				<div id="mockify-area">
					<TextField />
                    <Buttons />
                </div>
			</div>
        );
    }
}

export default App;
