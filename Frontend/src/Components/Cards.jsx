import booke from "../assets/booke.jpg";

const Cards = ({ items }) => {
  // Destructure items from props
  return (
    <div className="mt-4 my-3 p-3 ">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={booke} alt="Shoes" />
        </figure>
        <div className="card-body bg-white ">
          <h2 className="card-title text-black">
            {items.name}
            <div className="badge badge-secondary text-black">
              {items.category}
            </div>
          </h2>
          <p className="text-black">{items.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{items.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white text-black">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
