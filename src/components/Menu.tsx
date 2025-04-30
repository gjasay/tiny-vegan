const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center py-8 h-screen"
    >
      <h1 className="text-center font-bold text-4xl my-4">Menu</h1>
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <img
          src="./menu.png"
          alt="menu"
          className="object-fit rounded-lg border-black border-4 m-4"
        />
      </div>
    </div>
  );
};

export default Menu;
