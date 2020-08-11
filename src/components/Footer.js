import React from "react";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="navbar-text pull-left">
                    <p>Copyright &copy; John Irle {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
