import { MdCastForEducation } from "react-icons/md"

const Education = () => {
    return (
        <div className="mt-10 px-2 mb-10">
            <h1 className=" text-3xl       text-center font-bold">My Education</h1>
            <div className=" rounded-xl shadow-lg shadow-green-400/100 bg-gradient-to-r from-red-500 to-white-200  mt-4 p-2 md:flex" >
                <div className="md:border-r-2 px-4 border-b-2 md:border-b-0 py-10 flex-1">
                    <h1 className="flex items-center text-2xl gap-2"><MdCastForEducation />Higher Secondary Certificate(HSC)</h1>
                    <p>Dr. Khandaker Mosharraf Hossain College</p>
                    <p>Session: 2021-2023</p>
                </div>
                <div className="flex-1 py-10  px-4  ">
                 <h1 className="flex text-2xl items-center gap-2"><MdCastForEducation />Secondary School Certificate (SSC)</h1>
                 <p>Daudkandi Adarsha Pilot High School</p>
                 <p>Session: 2019-2021</p>
                </div>
            </div>
        </div>
    );
};

export default Education;