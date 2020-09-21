import React, {Component} from "react";

class Buttons extends Component {
    constructor() {
        super();
        this.mockify = this.mockify.bind(this);
        this.copyMockify = this.copyMockify.bind(this);
    }

    mockify() {
        let text = document.getElementsByTagName("textarea")[0].value;
        document.getElementsByTagName("textarea")[0].value = "";
        let mockifyText = "";

        if(text === "") {return;}
        for(let i = 0; i < text.length; i++) {
            if(Math.floor((Math.random() * 10) + 1) % 3 == 0) {
                mockifyText = mockifyText.concat(text[i].toUpperCase());
            } else {
                mockifyText = mockifyText.concat(text[i].toLowerCase());
            }
        }
        document.getElementsByTagName("textarea")[0].value = mockifyText;
    }

    copyMockify(e) {
        let copyText = document.getElementsByTagName("textarea")[0];
        copyText.select();
        copyText.setSelectionRange(0, 99999);   /*For mobile devices*/
        document.execCommand("copy");   /* Copy the text inside the text field */
        e.target.innerHTML = "Copied!";

        copyText.style.opacity = 0;
        setTimeout(()=> {
            copyText.style.opacity = 1;
            document.getSelection().removeAllRanges();
            
        }, 200);
        e.target.innerHTML = "Copy";
    }

    bouncyButton(e) {
        
    }

    render() {
        return(
            <div id="buttons">
                <button onClick={() => {this.mockify()}}>Mockify</button>
                <button onClick={(e)=> this.copyMockify()}>Copy</button>
            </div>
        );
    }
}

export default Buttons