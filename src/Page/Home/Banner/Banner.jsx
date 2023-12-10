
import imageBanner from '../../../assets/Image/Screenshot 2023-12-11 at 12.56.05 AM.jpeg'
const Banner = () => {
    return (
        <div className='max-w-[1200px]'>
       <img className="w-full rounded-lg " src={imageBanner} alt="" />
        <h1 className='bg-red-400'>hi</h1>
        </div>
    );
};

export default Banner;