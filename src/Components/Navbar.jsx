
import Lottie from "lottie-react";
import catAnimation from "./animation/cat-animation.json";



const Navbar = () => {
 

  return (
    <div className="navbar  md:px-10 lg:px-24  text-white shadow-2xl">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    {/* <p className="btn btn-ghost lg:block hidden  text-xl"><img className="w-[50px] h-[50px] rounded-full" src="/public/Rian1.png" alt="" /></p> */}
    <Lottie className="w-14 lg:block hidden" animationData={catAnimation} />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
    <li><a href="#skills">Skills</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div className="lg:hidden navbar-end ">
  {/* <p className="btn btn-ghost text-xl"><img className="w-[50px] h-[50px] rounded-full" src="/public/Rian1.png" alt="" /></p> */}
  <Lottie className="w-14" animationData={catAnimation} />
  </div>
  
</div>
  );
};

export default Navbar;
