import About from "./About/About";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";
import Skill from "./Skill/Skill";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <About></About>
         <Skill></Skill>
         <Education></Education>
        </div>
    );
};

export default Home;