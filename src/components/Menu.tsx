const Menu = () => {
  console.log("Menu component rendered");
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-screen"
    >
      <h1 className="text-center text-4xl my-8">Menu</h1>
      <img
        src="./menu.jpg"
        alt="menu"
        className="lg:w-2/4 sm:w-11/12 md:w-2/3 rounded-lg object-cover border-black border-2"
      />
    </div>
  );
};

export default Menu;
