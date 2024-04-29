import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-56'>
            <footer className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Logo and Website Name */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold">Wonder Tour</h3>
                        <p className="mt-2 text-gray-400">Exploring The World</p>
                    </div>
                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                        <p className="text-gray-400"> Chittagong, Bangladesh</p>
                        <p className="text-gray-400">Phone: +123 456 789</p>
                        <p className="text-gray-400">Email: abdulbaset.ayon@gmail.com</p>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="flex mt-4">
                    <a href="#" className="text-gray-400 hover:text-white mr-4">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mr-4">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaInstagram />
                    </a>
                </div>
                {/* Copyright */}
                <div className="mt-8 text-center">
                    <p>&copy; <span id="currentYear" className="text-gray-400"></span> Wonder Tour. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
