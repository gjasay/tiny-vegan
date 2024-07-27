import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "./food1.jpg",
  "./food2.jpg",
  "./food3.jpg",
  "./food4.jpg",
  "./food5.jpg",
  "./food6.jpg",
];

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col justify-around items-center text-center h-screen bg-cover bg-center mt-6 py-8 pb-16 md:flex-row md:justify-between md:px-20"
    >
      <h2 className="italic text-xl py-4 rounded-md md:text-3xl">
        enjoy the lentil things
      </h2>
      <div className="w-3/4 md:w-1/2 md:ml-10 lg:w-1/3 flex-shrink-0">
        <img
          src="./store-front.jpg"
          alt="store front"
          className="rounded-3xl border-black border-2 max-w-full h-auto"
        />
      </div>
      <button className="bg-amber-200 hover:bg-green-500 text-2xl py-3 px-5 my-8 rounded-full mx-auto font-light border-black border-2 md:mx-0">
        Order Now
      </button>
      
      <div className="w-3/4 md:w-1/2 md:mr-10 lg:w-1/3 flex-shrink-0">
        <Slide easing="ease">
          {slideImages.map((each, index) => (
            <div
              key={index}
              className="each-slide flex justify-center items-center"
            >
              <img
                src={each}
                alt="food"
                className="mx-4 rounded-3xl border-black border-2"
                style={{ width: "300px", height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slide>
      </div>
      
      
    </div>
  );
};

export default Hero;
