import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Twirl } from "hamburger-react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      duration: 200,
    },
  });

  return (
    <header className="sticky top-0 left-0 w-full flex justify-center bg-amber-200 flex-col sm:h-24 z-30">
      {/* Mobile */}
      <div className="flex justify-between items-center px-6 py-3 md:hidden z-30">
          <a href=""><img src="./logo.png" className="w-36"/></a>
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
            className="border-black border-b-2"
          >
            menu
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#hours"
            className="border-black border-b-2"
          >
            hours
          </a>
        </li>
        <li className="text-center px-4 py-8">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#about"
            className="border-black border-b-2"
          >
            about
          </a>
        </li>
        <li className="text-center">
          <a
            href="https://www.instagram.com/tinyveganfoodcart/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-center px-4 py-8"
            />
          </a>
        </li>
      </animated.ul>
      {/* Desktop */}
      <div className="hidden md:flex flex-col justify-center items-center py-4">
        <a href=""><img src="./logo.png" className="w-36"/></a>
        <ul className="flex flex-row justify-center items-start">
          <li className="text-2xl text-center px-4">
            <a href="#menu">menu</a>
          </li>
          <li className="text-2xl text-center px-4">
            <a href="#hours">hours</a>
          </li>
          <li className="text-2xl text-center px-4">
            <a href="#about">about</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
