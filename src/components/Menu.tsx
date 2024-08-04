const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-screen"
    >
      <h1 className="text-center text-4xl my-8">Menu</h1>
      <img
        src="./menu.jpg"
        alt="menu"
        className="object-cover w-11/12 md:w-1/3 max-h-full  rounded-lg border-black border-2"
      />
    </div>
  );
};

export default Menu;
