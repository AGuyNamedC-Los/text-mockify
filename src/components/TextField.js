import React, {Component} from "react";

class TextField extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <textarea id="text-area" name="mockify-area" placeholder="ENTER YOUR TEXT HERE" spellCheck="false">

            </textarea>
        );
    }
}

export default TextField