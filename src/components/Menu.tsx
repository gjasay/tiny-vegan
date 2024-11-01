const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-screen"
    >
      <h1 className="text-center font-bold text-4xl my-8">Menu</h1>
      <img
        src="./menu.jpg"
        alt="menu"
        className="object-fit w-11/12 md:w-1/3  rounded-lg border-black border-4"
      />
    </div>
  );
};

export default Menu;
