import React from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/Linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-white py-12">
      <div className="container mx-auto px-5 md:px-12 lg:px-44">
        <div className="flex flex-wrap justify-between items-start">
          {/* Company Info Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img src={logo} alt="GameNation Logo" className="h-16 mb-6" />
            <p className="mb-4 text-gray-400">Empowering gamers worldwide with a seamless buy, play, experience.</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                +91-9841112979
              </p>
              <p className="flex items-center">
                <span className="mr-3">📧</span>
                support@gamershaven.in
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg text-green-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Terms and Conditions', 'Privacy Policy', 'FAQs', 'Cancellation & Refund Policy', 'Shipping Policy'].map((item, index) => (
                <li key={index}>
                  <a href="/#" className="text-gray-400 hover:text-green-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg text-green-500 mb-4">Need Help</h4>
            <ul className="space-y-2">
              {['FAQs', 'My Account', 'My Orders', 'GameNation Wallet', 'Meet the Team', 'About Us'].map((item, index) => (
                <li key={index}>
                  <a href="/#" className="text-gray-400 hover:text-green-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="w-full md:w-1/4">
            <h4 className="font-semibold text-lg text-green-500 mb-4">Connect with Us</h4>
            <div className="flex space-x-6 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </a>
            </div>
            <p className="text-gray-400">Follow us for updates and offers!</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-wrap justify-between items-center">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>Buy » Play » Enjoy » Repeat</p>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right mt-4 md:mt-0">
            <p>© {new Date().getFullYear()} GH Interactive Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;