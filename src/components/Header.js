import React, {Component} from "react";
import MockingSB from "../images/mockingSB.png";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <div id="profile-links">
                    <a href="https://github.com/AGuyNamedC-Los/text-mockify" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                    <a href="https://carlos-castillo-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-user-circle"></i></a>
                </div>
                <img src={MockingSB} alt="Mocking Sponge Bob"></img>
                <h1>Text Mockify</h1>
                <div id="desc">
                    <p>Place text into the mockify generator to mockify plain text!</p>
                    <i class="fas fa-arrow-right"></i>
                    <p>aND tHen GEt MOcKiFiEd TEXT jUst liKe ThiS!</p>
                </div>
            </header>
        );
    }
}

export default Header