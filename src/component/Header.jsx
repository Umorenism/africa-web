import { useState, useEffect } from 'react';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

const AppHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles
  const headerClasses = `fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  }`;

  const textColor = scrolled ? 'text-black' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="max-w-[1120px] mx-auto flex justify-between items-center p-3 border-b">
        {/* Logo */}
        <div className={`text-xl font-bold ${textColor}`}>
          AFRICA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className={`font-semibold text-[18px] ${textColor}`}> Home</a>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center font-bold focus:outline-none ${textColor}`}
            >
              About<DownOutlined className="ml-1 text-sm" />
            </button>
            {showDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-gray-100 border shadow-lg rounded-[8px] py-2 w-48 z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Casual</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Office</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Custom Prints</a>
              </div>
            )}
          </div>

          <a href="#" className={`font-semibold text-[18px] ${textColor}`}>Services</a>
          <a href="#" className={`font-semibold text-[18px] ${textColor}`}>Testimonials</a>
          <a href="#" className={`font-semibold text-[18px] ${textColor}`}>Blog</a>
          <a href="#" className={`font-semibold text-[18px] ${textColor}`}>Contact</a>
          {/* <a href="#" className={`font-semibold text-[18px] ${textColor}`}>BRAND</a> */}
        </nav>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-green-600 text-white px-6 py-2 rounded-[8px] font-bold"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-xl">
          <MenuOutlined className={scrolled ? 'text-black' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <ul className="space-y-4">
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Services</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>About Us</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Reviews</a></li>
          <li>
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-bold inline-block"
              onClick={toggleDrawer}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default AppHeader;
