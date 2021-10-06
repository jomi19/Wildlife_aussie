import React from "react";
import { Instagram, Facebook } from "@material-ui/icons"

function Footer() {

	return (
        <footer className="outer-footer">
            <div className="inner-footer">
                <a href="https://www.instagram.com/wildlife_aussie/" ><Instagram /></a>
                <Facebook />
            </div>
        </footer>
	);
}
export default Footer;
