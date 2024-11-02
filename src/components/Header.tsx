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
      tension: 270,
      friction: 13,
      mass: 1,
    },
    immediate: false,
    translateZ: 0,
    willChange: "transform",
  });

  return (
    <header className="top-0 left-0 w-full flex justify-center bg-tvGreen text-tvLight font-extrabold flex-col z-30 border-black border-b-4 rounded-sm">
      {/* Mobile */}
      <div className="flex justify-between items-center px-6 py-3 md:hidden z-30">
        <a href=""><img src="./logo.jpeg" className="w-24" alt="Logo" /></a>
        <Twirl toggled={isOpen} toggle={setOpen} />
      </div>
      <animated.ul
        style={menuAnimation}
        className="fixed top-0 right-0 h-full w-full text-5xl bg-tvGreen shadow-lg flex flex-col justify-center mt-12 md:hidden z-20"
      >
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#menu"
            className=" hover:text-tvFire"
          >
            menu
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#hours"
            className=" hover:text-tvFire"
          >
            hours
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#about"
            className=" hover:text-tvFire"
          >
            about
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            href="https://order.tinyvegantakeout.com/"
            className=" hover:text-tvFire"
          >
            order
          </a>
        </li>

        <a href="https://www.instagram.com/tinyveganfoodcart/" target="_blank" rel="noopener noreferrer" className="text-center px-4 py-8 hover:text-tvFire">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </animated.ul>

      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 w-full h-full">
        <a href=""><img src="./logo.jpeg" className="w-24" alt="Logo" /></a>
        <ul className="flex space-x-8 text-3xl h-full">
          <li className="h-full flex items-center">
            <a
              href="#menu"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-tvFire"
            >
              menu
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#hours"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-tvFire"
            >
              hours
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#about"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-tvFire"
            >
              about
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="https://order.tinyvegantakeout.com/"
              className="h-full flex items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-tvFire"
            >
              order
            </a>
          </li>
        </ul>
        <a href="https://www.instagram.com/tinyveganfoodcart/" target="_blank" rel="noopener noreferrer" className="h-full flex text-2xl items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-tvFire">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </header>
  );
};

export default Header;
