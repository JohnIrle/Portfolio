import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <div className="navbar-text pull-left mt-4">
                    <p>Copyright &copy; John Irle {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
