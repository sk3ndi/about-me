function Contact() {
	return (

		<section id="contact" className="flex justify-center items-center px-10 py-44">
			<div className="container">
				<div className="row-box text-center uk-animation-scale-up uk-animation">
					<div className="contact-content">
						<h3 className="title text-7xl max-[768px]:text-5xl max-[400px]:text-3xl">
							Have Any Queries?
						</h3>

			            <div className="text-info">
			            	I'm looking forward to hear from you! I'm open for new feedback, suggestions and opportunities for my improvement.
			            	<br/><br/>
							If you have any questions or need my assistance, feel free to drop me a message on the following icon links below.
		            	</div>

    	            	<div className="flex justify-center gap-[12px] flex-wrap pt-4">
		            		<a href="mailto:thedev.kenalbert@gmail.com" target="_blank" className="w-60 bg-[#dddee2] hover:bg-[#113C4A] text-[#113C4A] hover:text-[#fff] rounded p-3 cursor-pointer transition duration-300">
		            			EMAIL
		            		</a>
		            		<a href="https://www.linkedin.com/in/albert-t-98155165/" target="_blank" className="w-60 bg-[#dddee2] hover:bg-[#113C4A] text-[#113C4A] hover:text-[#fff] rounded p-3 cursor-pointer transition duration-300">
		            			LINKEDIN
		            		</a>
		            		<a href="https://github.com/sk3ndi" target="_blank" className="w-60 bg-[#dddee2] hover:bg-[#113C4A] text-[#113C4A] hover:text-[#fff] rounded p-3 cursor-pointer transition duration-300">
		            			GITHUB
		            		</a>		            		
		            	</div>
	            	
		            </div>
            	</div>
            </div>
		</section>

	)
}

export default Contact;