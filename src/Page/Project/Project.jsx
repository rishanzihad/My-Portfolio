
import { Link } from 'react-router-dom';
import img1 from '../../assets/Image/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand_327072-27524.jpg-3.avif'
import img2 from '../../assets/Image/blogging-website-and-internet-concept-banner-with-blog-word-sign-on-ERMBBJ.jpg'
import img3 from '../../assets/Image/dark-debian-blue-spiral-wallpaper-preview.jpg'
const Project = () => {
    return (
       <div>
         <p>.</p>
        <h1 className='text-4xl text-center mb-5 mt-10 font-bold'>My Project</h1>
        <div className='grid grid-cols-2 gap-4'>
          
            <div className="card  bg-base-100 shadow-xl">
                <figure ><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Health ManageMent</h2>
                    <p>Description: MedCamp is a sophisticated web-based platform designed to streamline the management of medical camps, fostering efficient collaboration among Organizers, Healthcare Professionals, and Participants. This comprehensive system prioritizes intuitive design, robust features, and user-specific dashboards to enhance the experience for all stakeholders.</p>
                    <div className="card-actions justify-end">
                  <Link className='w-full' to='https://medical-camp-management.web.app'>
                  <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">Live Link</button>
                  </Link>
                     
                    </div>
                    <div className="card-actions justify-end">
                     <Link className='w-full' to='https://github.com/rishanzihad/Health-Management-Client'>
                     <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">GitHub Link</button>
                     </Link>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure ><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Blog Mania</h2>
                    <p>Description: Blogify is a comprehensive and feature-rich blogging platform designed to elevate the user experience in the world of content creation. With a focus on user-friendly design, advanced authentication, and responsive functionality, Blogify provides a robust foundation for bloggers and readers alike.</p>
                    <div className="card-actions justify-end">
                  <Link className='w-full' to='(https://exultant-business.surge.sh'>
                  <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">Live Link</button>
                  </Link>
                     
                    </div>
                    <div className="card-actions justify-end">
                     <Link className='w-full' to='(https://github.com/rishanzihad/Blog_Mania'>
                     <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">GitHub Link</button>
                     </Link>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Brand Shop</h2>
                    <p>Description: TechHub is a unique website that sets itself apart by offering an original design and concept focused on the dynamic realm of Technology and Electronics. Meticulous research ensures that the website stands out, avoiding any resemblance to previous assignments or demo projects.</p>
                    <div className="card-actions justify-end">
                  <Link className='w-full' to='https://future-oil.surge.sh'>
                  <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">Live Link</button>
                  </Link>
                     
                    </div>
                    <div className="card-actions justify-end">
                     <Link className='w-full' to='(https://github.com/rishanzihad/Brand-Shop'>
                     <button className="btn w-full bg-gradient-to-r from-red-500 to-white-200">GitHub Link</button>
                     </Link>
                    </div>
                </div>
            </div>

        </div>
       </div>
    );
};

export default Project;