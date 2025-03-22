import { useState, useEffect, useRef } from 'react';

import logo from './assets/img/logo-up.png';

function Hero() {

	
	const [pageLoaded, setPageLoaded] = useState(false);

	  // This will run once after the component mounts (after page load)
	  useEffect(() => {

	    const delay = 1500; // 2 seconds delay
	    const timer = setTimeout(() => {
	      setPageLoaded(true); // Update state to add the class
	    }, delay);

	    // Cleanup the timer on component unmount
	    return () => clearTimeout(timer);

	  }, []);	

	return (

		<section id="hero" className="flex justify-center h-screen items-center px-10">
			<div className="container">
				<div className="row-box text-center uk-animation-scale-up uk-animation">
					<div className="hero-content">

			            <div className="logo-box flex justify-center mb-8">
			            	<img src={logo} alt="Logo" className={pageLoaded ? "w-52 rotate-12 transition duration-[1500ms] delay-[300ms]" : "w-52 transition duration-[1500ms] delay-[5500ms]"} /> 
			            </div>

						<h1 className="title text-7xl max-[768px]:text-5xl max-[400px]:text-3xl">ALBERT</h1>

			            <div className="subheading">
			            	Website Editor - Wordpress | Shopify  
			            </div>

			            <div className="text-info">
			            	A simple website I've created just to upload some of my previous works. Feel free to check it out. If you have any queries feel free to drop me a <a href="#">message</a>. Thanks!
		            	</div>

    	            	<div className="mini-boxes flex justify-center gap-[12px] flex-wrap">
		            		<a href="https://html.com/" target="_blank">HTML</a>
		            		<a href="https://www.php.net/" target="_blank">PHP</a>
		            		<a href="https://www.w3schools.com/w3css/default.asp" target="_blank">CSS</a>
		            		<a href="https://wordpress.org/" target="_blank">WORDPRESS</a>
		            		<a href="https://www.elegantthemes.com/gallery/divi/" target="_blank">DIVI</a>
		            		<a href="https://elementor.com/" target="_blank">ELEMENTOR</a>
		            		<a href="https://www.shopify.com/ph" target="_blank">SHOPIFY</a>
		            	</div>
		            </div>
            	</div>
            </div>
		</section>

	)
}

export default Hero;