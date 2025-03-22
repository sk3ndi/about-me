import { useState, useEffect, useRef } from 'react';

import logo from './assets/img/logo-tilt.png';

function Header() {

	const [NavisScrolled, setNavIsScrolled] = useState(false);
	const navSection = useRef(null);

  	useEffect(() => {
	    const handleScroll = () => {
	      const scrollY = window.scrollY;

	      // Add a class if the user scrolls past 200 pixels
	      if (scrollY > 250) {
	        setNavIsScrolled(true);
	      } else {
	        setNavIsScrolled(false);
	      }
	    };

	    // Add scroll event listener
	    window.addEventListener('scroll', handleScroll);

	    // Cleanup the event listener on component unmount
	    return () => {
	      window.removeEventListener('scroll', handleScroll);
	    };
  	}, []);

	return (

		<nav id="header" 
			ref={navSection}
			className={NavisScrolled ? "flex bg-[#fff] justify-center px-10 fixed top-0 w-full z-50 transition duration-300" : "flex justify-center px-10 fixed top-0 w-full z-50 transition duration-300"}
		>
			<div className="container py-8"> 
				<div className="row-box flex flex-wrap items-center justify-between max-[768px]:justify-center">

					<div ref={navSection} className={NavisScrolled ? "visible transition duration-500 delay-[2500ms]" : "invisible transition duration-500"}>
						<a href="#">
							<img src={logo} alt="Logo Image" className="w-12" />
						</a>
					</div>

					<div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
						<ul className="menu-list flex flex-row gap-x-10 uppercase text-lg font-medium text-[#113C4A]">
							<li><a href="#" className="no-underline hover:text-[#113C4A]">Home</a></li>
							<li><a href="#projects" className="no-underline hover:text-[#113C4A]">Projects</a></li>
							<li><a href="#contact" className="no-underline hover:text-[#113C4A]">Send Message</a></li>
						</ul>
					</div>

				</div>
	        </div>
		</nav>			

	)
}
export default Header;