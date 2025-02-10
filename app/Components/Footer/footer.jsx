import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D7492B] mt-10 text-white px-12 py-6 relative overflow-hidden">
      {/* Left Section */}
      <div className="flex justify-between items-start relative z-10">
        {/* Brand Info */}
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold">Pandit Ronak Vyas</h2>
          <p className="text-lg opacity-90">
            Vedic Scholar & Ritual Specialist
          </p>
        </div>

        {/* Social Links */}
        <div className="w-1/2 pl-10">
          <h3 className="text-2xl font-semibold border-b">SOCIAL</h3>
          <nav className="flex flex-col mt-1 gap-2">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden">
                <div className="flex flex-col">
                  <span className="group-hover:-translate-y-full transition-transform duration-300">
                    Instagram
                  </span>
                  <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Instagram
                  </span>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h4>
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden">
                <div className="flex flex-col">
                  <span className="group-hover:-translate-y-full transition-transform duration-300">
                    Facebook
                  </span>
                  <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Facebook
                  </span>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h4>
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden">
                <div className="flex flex-col">
                  <span className="group-hover:-translate-y-full transition-transform duration-300">
                    Linkedin
                  </span>
                  <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Linkedin
                  </span>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h4>
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden">
                <div className="flex flex-col">
                  <span className="group-hover:-translate-y-full transition-transform duration-300">
                    X
                  </span>
                  <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    X
                  </span>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h4>
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-16 relative z-10">
        <div className="version">
          <p className="opacity-60 font-bold text-[1vw]">VERSION</p>
          <p className="text-lg">© 2024</p>
        </div>
        <div className="time text-center">
          <p className="opacity-60 font-bold text-[1vw]">LOCAL TIME</p>
          <p className="text-lg">UTC+05:30</p>
        </div>
        <div className="time text-right">
          <p className="opacity-60 font-bold text-[1vw]">CODE AND DESIGN BY</p>
          <p className="text-lg">JASH PATEL & KENIL AVAIYA</p>
        </div>
      </div>

      {/* Background Gradient Effect */}
      {/* <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-[#C13D22] to-transparent opacity-50 rounded-full blur-xl"></div> */}
    </footer>
  );
};

export default Footer;
