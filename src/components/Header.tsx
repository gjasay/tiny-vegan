import { Twirl } from "hamburger-react"
import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  const menuAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      duration: 200,
    }
  })

  return (
    <header className="flex justify-center bg-green-200 flex-col py-4">
      {/* Mobile */}
      <div className="flex justify-between items-center px-6 py-3 md:hidden">
        <h1 className="text-4xl font-bold text-green-600">Tiny Vegan</h1>
        <Twirl toggled={isOpen} toggle={setOpen} />
      </div>
      <animated.ul
        style={menuAnimation}
        className="fixed top-0 right-0 h-full w-full text-4xl bg-amber-200 shadow-lg flex flex-col py-4 md:hidden"
      >
        <div className="flex justify-start px-6 py-3"><Twirl toggled={isOpen} toggle={setOpen} /></div>
        <li className="text-center px-4 py-6"><a href="#menu">menu</a></li>
        <li className="text-center px-4 py-6"><a href="#hours">hours</a></li>
        <li className="text-center px-4 py-6"><a href="#about">about</a></li>
      </animated.ul>
      {/* Desktop */}
      <div className="hidden md:flex flex-col justify-center py-4">
        <h1 className="text-4xl font-bold text-center text-green-500 pb-4">Tiny Vegan</h1>
        <ul className="flex flex-row justify-center">
          <li className="text-2xl text-center px-4"><a href="#menu">menu</a></li>
          <li className="text-2xl text-center px-4"><a href="#hours">hours</a></li>
          <li className="text-2xl text-center px-4"><a href="#about">about</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header