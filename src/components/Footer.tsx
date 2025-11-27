const Footer = () => {
  return (
    <div className="container mx-auto py-16 text-center text-sm tracking-tight text-gray-400">
      <p>
        Designed & Developed by <span className="font-tooltip font-bold">AnishGane</span>
      </p>
      <p>&copy; {new Date().getFullYear()}. All rights reserved. </p>
    </div>
  );
};

export default Footer;
