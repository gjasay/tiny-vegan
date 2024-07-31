import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Hours from "./components/Hours";
import About from "./components/About";

function useIntersectionObserver(): [MutableRefObject<null>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef<null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
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
  const [aboutRef, aboutInView] = useIntersectionObserver();

  const isAnyOtherInView = menuInView || hoursInView || aboutInView;
  const adjustedHeroInView = heroInView || !isAnyOtherInView;

  const heroAnimation = useSpring({
    opacity: adjustedHeroInView ? 1 : 0,
    transform: adjustedHeroInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  const menuAnimation = useSpring({
    opacity: menuInView ? 1 : 0,
    transform: menuInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  const hoursAnimation = useSpring({
    opacity: hoursInView ? 1 : 0,
    transform: hoursInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  const aboutAnimation = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="bg-lime-600 text-white flex flex-col h-screen">
      <Header />
      <div className="overflow-y-auto flex-1">
        <animated.div ref={heroRef} style={heroAnimation}>
        <Hero />
        </animated.div>
        <animated.div ref={menuRef} style={menuAnimation}>
          <Menu />
        </animated.div>
        <animated.div ref={hoursRef} style={hoursAnimation}>
          <Hours />
        </animated.div>
        <animated.div ref={aboutRef} style={aboutAnimation}>
          <About />
        </animated.div>
      </div>
      
    </div>
  );
}

export default App;
