import React from "react";
import logo2 from "../../assets/logo2.png";
import {
  FacebookSolid,
  InstagramOutline,
  LinkedInSolid,
  TwitterSolid,
} from "../UI/icons";
import Typography from "components/UI/Typography";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img src={logo2} alt="" />
          </div>
          <div>
            <Typography variant="h5" as="h5" className="mb-4">
              <Link to="/property-listing/rent">Services</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/property-listing/buy">Buy</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/property-listing/sell">Sell</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/installments">Installments</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/companies">Companies</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/videos">Videos</Link>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" as="h5" className="mb-3">
              About Dyarko
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/terms&conditions">Terms & Conditions </Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/faqs">FAQs </Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/contact-us">Contact Us </Link>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" as="h5" className="mb-3">
              Social Media
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/">Instagram</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/">Facebook</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/">LinkedIn</Link>
            </Typography>
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-3 text-gray-600"
            >
              <Link to="/">Twitter</Link>
            </Typography>
          </div>
        </div>
      </div>
      <div className="border-t border-main-100">
        <div className="container mx-auto py-5">
          <div className="flex flex-col md:flex-row md:justify-between">
            <Typography
              variant="body-sm-medium"
              as="p"
              className="mb-6 text-center text-gray-400 md:mb-0 md:text-left"
            >
              ©2021 Dyarko. All rights reserved
            </Typography>
            <div className="flex justify-center md:justify-end">
              <Link to="/">
                <FacebookSolid className="mr-12 fill-gray-400" />
              </Link>
              <Link to="/">
                <InstagramOutline className="mr-12 fill-gray-400" />
              </Link>
              <Link to="/">
                <TwitterSolid className="mr-12 fill-gray-400" />
              </Link>
              <Link to="/">
                <LinkedInSolid className="fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
