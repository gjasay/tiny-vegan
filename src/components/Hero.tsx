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

const Hero = () =>
{
  return (
    <div
      id="hero"
      className="flex flex-col justify-around items-center text-center min-h-screen bg-cover bg-center pb-16 md:flex-row md:justify-between md:px-20"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="italic text-xl py-4 md:text-3xl">
          enjoy the lentil things
        </h2>
        <div className="w-3/4 md:w-1/2 lg:w-1/2 flex-shrink-0">
          <img
            src="./store-front.jpg"
            alt="store front"
            className="rounded-3xl border-black border-2 max-w-full h-auto object-cover"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <a href="https://tiny-vegan-108123.square.site">
        <button className="sm:flex md:hidden text-black bg-amber-300 hover:bg-green-500 text-2xl py-3 px-5 my-8 rounded-full mx-auto font-light border-black border-2">
          Order Now
        </button>
      </a>

      <div className="md:mt-20 lg:mt-20 xl:mt-20 w-3/4 md:w-1/2 md:mr-10 lg:w-1/3 flex flex-col justify-center">
        <Slide easing="ease">
          {slideImages.map((each, index) => (
            <div
              key={index}
              className="each-slide flex justify-center items-center w-full"
              style={{ position: 'relative', paddingBottom: '100%' }}
            >
              <img
                src={each}
                alt="food"
                className="rounded-3xl border-black border-2 object-cover w-full h-full"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </Slide>
        <div className="w-full flex justify-center">
          <a href="https://tiny-vegan-108123.square.site">
            <button className="hidden sm:hidden md:block lg:block xl:block bg-amber-300 text-black hover:bg-green-500 rounded-full font-light border-black border-2 my-6 w-48 h-14 text-xl">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;