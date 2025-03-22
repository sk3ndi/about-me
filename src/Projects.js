import React from 'react';
import Slider from 'react-slick';

import { useState, useEffect } from 'react';
import axios from 'axios'

import datas from './assets/json/webData.json';
import fallbackImage from './assets//img/icwarriors.png';


function Projects() {

	/* Set Tab One as Active */
	const [activeTab, setActiveTab] = useState(datas.work_category[0].id);

	/* Set Click Tab to be Active */
  const clickToActiveTab = (catId) => { setActiveTab(catId); };

  /* Get Img URL */
  const getImageUrl = (imageId) => {
    try {
      // Try to require the image dynamically
      return require(`./assets/img/${imageId}`);   
    } catch (error) {
      // If the image is not found, return the fallback image
      console.error('Image not found, using fallback:', error);
      return fallbackImage;
    }
  };


  /* Slider Settings for Projects */
	var settings = {
	  dots: true,
	  infinite: false,
	  arrows: false,
	  autoplay: true,
    autoplaySpeed: 4500,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  initialSlide: 0,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        initialSlide: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	};


	return (

		<section id="projects" className="flex justify-center items-center px-10 py-20">
			<div className="container">
				<div className="row-box text-center uk-animation-scale-up uk-animation">
					<div className="project-content">

						<div className="flex mx-7 justify-between items-center max-[1024px]:flex-wrap">

							<div className="title-and-texts flex flex-wrap items-start">
									<h3 className="title text-7xl max-[768px]:text-5xl max-[400px]:text-3xl">
										Projects
									</h3>

			            <div className="text-info text-left">
			            	Arranged from latest to earliest date.
		            	</div>
							</div>
							
							<div className="work-tab-lists flex gap-8 flex-wrap max-[1024px]:gap-3 ">
									{datas.work_category.map(category => (
										<div 
											key={category.id} 
											onClick={() => clickToActiveTab(category.id)} 
											className={ activeTab === category.id ? "active bg-[#113C4A] text-[#fff] w-60 max-[1050px]:w-40 max-[487px]:w-full rounded p-3 cursor-pointer transition duration-300" : "w-60 max-[1050px]:w-40 max-[487px]:w-full bg-[#dddee2] hover:bg-[#113C4A] text-[#113C4A] hover:text-[#fff] rounded p-3 cursor-pointer transition duration-300"} >
												{category.name}
										</div>
									))}
							</div>

						</div>

						{datas.work_category.map(category => (
					    <div key={category.id} className={activeTab === category.id ? "opacity-100 block slider-container py-20 transition duration-300" : "opacity-0 hidden slider-container py-20 transition duration-300"} >
					      <Slider {...settings}>

					      	{category.work_lists.sort( (a, b) => b.id - a.id ).map(work => (
						        <div key={work.id} className="projectCard flex-wrap lg:flex-nowrap gap-x-3 relative uk-transition-toggle">
						        	<div className="flex-1 basis-full">
						        		<img src={getImageUrl(work.img)} alt="Project Image"/>
						        	</div>

						        	<div className="flex flex-1 basis-full text-left absolute p-8 overlay-box items-end pb-10">

						        		<div className="uk-transition-slide-bottom-medium">
							        		<h3 className="text-2xl font-semibold mb-4">
							        			{work.title}
							        		</h3>
							        		<div className="text-sm mb-4">
							        			If you have any questions or need my assistance, feel free to drop me a message on the following icon links below.
							        		</div>	
							        		<div className="my-11">
							        			<a href={work.url === '' ? getImageUrl(work.img) : work.url } target="_blank" rel="noopener noreferrer" alt={work.title} className="btnProject">
							        				View Project
							        			</a>
							        		</div>

						        		</div>

						        	</div>
						        </div>	
					      	))}

					      </Slider>
					    </div>
						))}

          </div>
      	</div>
      </div>
		</section>

	)
}

export default Projects;