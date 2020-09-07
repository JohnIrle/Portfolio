import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
    return (
        <div className="social">
            <ul className="inline">
                <li>
                    <a href="https://twitter.com/irlejohn">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            size="2x"
                            color="#3b5999"
                        />
                    </a>
                </li>
                <li>
                    <a href="http://github.com/JohnIrle">
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            color="#171515"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/johnirle">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2x"
                            color="#0077B5"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialIcons;
