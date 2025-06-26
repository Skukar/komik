import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-6  border-t border-gray-700 bg-gray-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="flex gap-4 text-sm text-white">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        <p className="mt-4 text-sm text-white md:mt-0">
          {new Date().getFullYear()} AbKomik All Rights Reserved.
        </p>

        <Link
          to={`https://github.com/Gungcakra/kurokami-manhwa-api`}
          target="_Blank"
          className="text-sm text-white hover:text-blue-600"
        >
          data provided by @kurokami-manhwa-api
        </Link>

        <div className="flex gap-4 mt-4 text-white md:mt-0">
          <Link to="#" className="hover:text-blue-600">
            <FaFacebookF size={18} />
          </Link>
          <Link to="#" className="hover:text-sky-500">
            <FaTwitter size={18} />
          </Link>
          <Link to="#" className="hover:text-gray-500">
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
