import img from '../../../assets/Image/WhatsApp Image 2023-11-11 at 9.26.55 PM.jpeg'

const About = () => {
    return (
        <div >
            <h1 className='text-4xl text-center mt-5 font-bold'>About Me</h1>
            <div className=" py-5 px-4 bg-gradient-to-r from-red-500 to-white-200 md:flex gap-10 rounded-b-none justify-center px-4py-5 rounded-xl items-center mt-10">
                <div className='flex justify-center' >
                    <img className='rounded-full  w-64' src={img} alt="" />


                </div>
                <div className='flex-1 mt-5 text-white'>
                    <h1>Hello there! 👋 I am Zihadul Islam, a passionate Junior Web Developer with a love for creating interactive and dynamic web applications.I thrive on turning ideas into reality through code. From crafting seamless user interfaces to building robust server-side functionalities, I enjoy the entire web development spectrum. My goal is to create engaging and user-centric web experiences.Constantly curious and eager to learn, I am on a journey to evolve into a Senior Web Developer. My current focus includes deepening my understanding of backend technologies, exploring new frontend frameworks, and staying updated on industry best practices.</h1>
                </div>
            </div>
            <div className='relative bg-gradient-to-r from-red-500 to-white-200 rounded-b-xl py-5 '>
                <h1 className=' mt-5 text-2xl text-center mb-5'>Connect With Me:</h1>
                <p className='flex items-center justify-center gap-5'>
                    <a href="https://linkedin.com/in/zihad-islam-b03412289" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="zihad-islam-b03412289" height="30" width="40" /></a>
                    <a href="https://instagram.com/rishan_web_devoloper" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="rishan_web_devoloper" height="30" width="40" /></a>
                    <a href="https://www.youtube.com/c/www.youtube.com/@weblearner-vr5ie" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="www.youtube.com/@weblearner-vr5ie" height="30" width="40" /></a>
                </p>
            </div>
        </div>
    );
};

export default About;