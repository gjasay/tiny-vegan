const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-full"
    >
      <h1 className="text-center font-bold text-4xl my-8">Menu</h1>
      <div className="flex flex-col md:flex-row justify-center">
        <img
          src="./menu.jpeg"
          alt="menu"
          className="object-fit w-11/12 md:w-1/3  rounded-lg border-black border-4 m-4"
        />
        <img
          src="./tiny_menu.jpeg"
          alt="menu"
          className="object-fit w-11/12 md:w-1/3  rounded-lg border-black border-4 m-4"
        />
      </div>

    </div>
  );
};

export default Menu;
