import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Twirl } from "hamburger-react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () =>
{
  const [isOpen, setOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      duration: 200,
    },
  });

  return (
    <header className="sticky top-0 left-0 w-full flex justify-center bg-amber-300 text-black flex-col sm:h-24 z-30 border-black border-b-2 rounded-sm">
      {/* Mobile */}
      <div className="flex justify-between items-center px-6 py-3 md:hidden z-30">
        <a href=""><img src="./logo.png" className="w-36" alt="Logo" /></a>
        <Twirl toggled={isOpen} toggle={setOpen} />
      </div>
      <animated.ul
        style={menuAnimation}
        className="fixed top-0 right-0 h-full w-full text-5xl bg-amber-200 shadow-lg flex flex-col justify-around py-4 md:hidden z-20"
      >
        <div></div>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#menu"
            className=" hover:text-green-500"
          >
            menu
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#about"
            className=" hover:text-green-500"
          >
            about
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#contact"
            className=" hover:text-green-500"
          >
            contact
          </a>
        </li>
        <a href="https://www.instagram.com/tinyveganfoodcart/" target="_blank" rel="noopener noreferrer" className="text-center px-4 py-8 hover:text-green-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </animated.ul>

      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 w-full h-full">
        <a href=""><img src="./logo.png" className="w-36" alt="Logo" /></a>
        <ul className="flex space-x-8 text-xl h-full">
          <li className="h-full flex items-center">
            <a
              href="#menu"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-emerald-700"
            >
              menu
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#about"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-emerald-700"
            >
              about
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#contact"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-emerald-700"
            >
              contact
            </a>
          </li>
        </ul>
        <a href="https://www.instagram.com/tinyveganfoodcart/" target="_blank" rel="noopener noreferrer" className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-emerald-700">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </header>
  );
};

export default Header;