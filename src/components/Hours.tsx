import { faMap, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hours = () =>
{
  return (
    <div id="hours" className="py-6 h-screen">
      <h1 className="text-4xl text-center pb-6">Hours</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">Wednesday: 12pm - 3pm</p>
        <p className="text-xl">Thursday: 9am - 3pm</p>
        <p className="text-xl">Friday: 9am - 3pm</p>
        <p className="text-xl">Saturday: 9am - 3pm</p>
        <p className="text-xl">Sunday: 9am - 3pm</p>
      </div>
      <h1 className="text-4xl text-center py-6">Address</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">104 S Sheppard St</p>
        <p className="text-xl">Richmond, VA 23221</p>
        <a href="https://maps.app.goo.gl/aQe6eJmjQY1zF2dk7" target="_blank">
          <h1 className="text-2xl bg-amber-200 hover:bg-green-500 rounded-3xl p-3 my-4 border-black border-2">
            <FontAwesomeIcon icon={faMap} /> Get Directions <FontAwesomeIcon icon={faMapPin} />
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Hours;
