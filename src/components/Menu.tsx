const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-screen"
    >
      <h1 className="text-center font-bold text-4xl my-4">Menu</h1>
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <img
          src="./menu.jpeg"
          alt="menu"
          className="object-fit w-3/5 md:w-1/3  rounded-lg border-black border-4 m-4"
        />
        <img
          src="./tiny_menu.jpeg"
          alt="menu"
          className="object-fit w-3/5 md:w-1/3  rounded-lg border-black border-4 m-4"
        />
      </div>
    </div>
  );
};

export default Menu;
