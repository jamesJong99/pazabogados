const Footer = () => {
  return (
    <footer
      className=" border-t-[1px] hidden md:block"
    >
      <div className="flex justify-evenly gap-4">
        <div>
          <div className="flex flex-col cursor-pointer text-xl">
            All rights reserved. @2024 by Paz lawyers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
