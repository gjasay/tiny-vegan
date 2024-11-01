import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "./food1.jpg",
  "./food2.jpg",
  "./food3.jpg",
  "./food4.jpg",
  "./food5.jpg",
  "./food6.jpg",
  "./food7.jpg",
  "./food8.jpg",
  "./food9.jpg",
];

const Hero = () =>
{
  return (
    <div
      id="hero"
      className="flex flex-col justify-around items-center text-center min-h-screen bg-cover bg-center pb-16 md:flex-row md:justify-between md:px-20"
    >
      <div>

      </div>
      <div className="flex flex-col justify-center items-center text-center ">
        <h2 className="italic text-2xl py-6 md:text-3xl">
          enjoy the lentil things
        </h2>
        <div className="w-3/4 flex-shrink-0">
          <img
            src="./store_front.jpeg"
            alt="store front"
            className="rounded-3xl border-black border-4 max-w-full h-auto object-cover"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <a href="https://order.tinyvegantakeout.com/">
        <button className="sm:flex md:hidden text-tvLight bg-tvFire hover:bg-tvGreen text-2xl py-3 px-5 my-8 rounded-full mx-auto font-bold border-black border-4">
          <p> <FontAwesomeIcon icon={faUtensils} /> Order Now <FontAwesomeIcon icon={faUtensils} /> </p>
        </button>
      </a>

      <div className=" w-2/3 md:w-1/3 md:mr-10 lg:w-1/3 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <a href="https://order.tinyvegantakeout.com/">
            <button className="hidden sm:hidden md:block lg:block xl:block bg-tvFire text-tvLight font-bold hover:bg-tvGreen rounded-full border-black border-4  my-6 w-48 h-14 text-xl">
              <p> <FontAwesomeIcon icon={faUtensils} /> Order Now <FontAwesomeIcon icon={faUtensils} /> </p>
            </button>
          </a>
        </div>
        <Slide
          easing="ease-in"
          prevArrow={
            <div className="flex items-center justify-center text-tvLight bg-tvFire hover:bg-tvGreen border-4 border-black rounded-full pt-2 h-12 w-12 text-4xl">
              {"<"}
            </div>
          }
          nextArrow={
            <div className="flex items-center justify-center text-tvLight bg-tvFire hover:bg-tvGreen border-4 border-black rounded-full pt-2 h-12 w-12 text-4xl">
              {">"}
            </div>
          }
        >
          {slideImages.map((each, index) => (
            <div
              key={index}
              className="each-slide flex justify-center items-center w-full"
              style={{ position: 'relative', paddingBottom: '100%' }}
            >
              <img
                src={each}
                alt="food"
                className="rounded-3xl border-black border-4 object-cover"
                style={{ position: 'absolute', top: "2.5%", left: '2.5%', width: '95%', height: '95%' }}
              />
            </div>
          ))}
        </Slide>

      </div>
    </div>
  );
};

export default Hero;
