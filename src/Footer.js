
const currentYear = new Date().getFullYear();

function Footer() {
	return (

		<section id="footer" className="flex justify-center px-10 pb-20">
			<div className="container py-4">
				<div className="row-box text-center uk-animation-scale-up uk-animation">
					<div className="footer-content">
						<h5 className="text-base max-[768px]:text-base max-[400px]:text-sm">
							© <span className="text-[#113C4A] font-semibold">{currentYear}</span> | All Rights Reserved.
						</h5>
		            </div>
            	</div>
            </div>
		</section>			

	)
}
export default Footer;