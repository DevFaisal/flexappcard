const Intro = () => {
  return (
    <div className="fixed w-full h-screen bg-gradient-to-r from-[#0569E8] to-[#76D232] z-[9999]">
      <div className="flex flex-col justify-center items-center h-full text-white gap-4 md:gap-9">
        <img src="/logo.svg" alt="logo" className="w-48 h-38 md:w-96 md:h-46" />
        <h3 className="text-xl md:text-4xl font-light text-center">Pay For What You Owe</h3>
      </div>
    </div>
  );
};

export default Intro;
