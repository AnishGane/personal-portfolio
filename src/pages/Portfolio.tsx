const Portfolio = () => {
  return (
    <section className="bg-red-300 mt-10">
      <div className="flex items-center justify-self-start gap-4">
        <div className="size-28 rounded-full overflow-hidden ring-2 ring-black dark:ring-white p-[1.5px]">
          <img
            src="/Images/GhibliImage.png"
            alt="My Image"
            className="object-cover w-full h-full rounded-full"
            title="Anish Gane"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-neutral-8">Anish Gane</h1>
          <p className="text-lg font-semibold">MERN Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
