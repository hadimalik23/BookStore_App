import list from "../../public/List.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:4xl text-black ">
            We're delighted to have you {""}
            <span className="text-pink-500">Here! :</span>
          </h1>
          <p className="mt-12 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/">
            <button className="hover:scale-105  bg-pink-500 text-white hover:bg-pink-700 duration-300 mt-6 py-2 px-4 rounded-md">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((items) => (
            <Cards key={items.id} items={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
