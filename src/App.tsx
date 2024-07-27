import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Hours from "./components/Hours";

function useIntersectionObserver(): [MutableRefObject<null>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef<null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        console.log(`Component in view: ${entry.isIntersecting}`);
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, inView];
}

function App() {
  const [heroRef, heroInView] = useIntersectionObserver();
  const [menuRef, menuInView] = useIntersectionObserver();
  const [hoursRef, hoursInView] = useIntersectionObserver();

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0)" : "translateY(50px)",
  });

  const menuAnimation = useSpring({
    opacity: menuInView ? 1 : 0,
    transform: menuInView ? "translateY(0)" : "translateY(50px)",
  });

  const hoursAnimation = useSpring({
    opacity: hoursInView ? 1 : 0,
    transform: hoursInView ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <div className="bg-green-100">
      <Header />
      <animated.div ref={heroRef} style={heroAnimation}>
        <Hero />
      </animated.div>
      <animated.div ref={menuRef} style={menuAnimation}>
        <Menu />
      </animated.div>
      <animated.div ref={hoursRef} style={hoursAnimation}>
        <Hours />
      </animated.div>
    </div>
  );
}

export default App;
