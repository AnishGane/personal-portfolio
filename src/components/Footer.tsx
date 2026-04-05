
const Footer = () => {
  return (
    <div className="container mx-auto py-16 text-center text-sm tracking-tight text-gray-400">
      <p>
        Designed & Developed by <a href="https://github.com/AnishGane" target="_blank" rel="noopener noreferrer" className="font-tooltip hover:underline font-semibold">AnishGane</a>
      </p>
      <div className="flex items-center justify-center gap-2 ml-8 -mt-2">
        <p>&copy;{new Date().getFullYear()}. Let&apos;s work together. </p>
        <img src="/Images/arrow.svg" alt="arrow" className="size-10 rotate-20 -ml-2 transition-transform duration-200" />
      </div>
    </div>
  );
};

export default Footer;
