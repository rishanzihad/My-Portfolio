import React from 'react';

const Skill = () => {
    return (
        <div className='mt-10'>
            <h1 className='mb-5 text-center text-4xl font-bold underline'>My Skill</h1>
            <div className='grid lg:grid-cols-3 gap-4  md:grid-cols-2 '>

                <div className='card py-2 relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=html" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Expert</h1>
                </div>
                <div className='card py-2 relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=css" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Expert</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=tailwind" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Expert</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=react" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Proficient</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=js" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Proficient</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=nodejs" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Intermedieate</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=express" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Intermedieate</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=firebase" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Intermedieate</h1>
                </div>
                <div className='card py-2  relative bg-gradient-to-r from-red-500 to-white-200 px-2'>
                    <img className='w-12' src="https://skillicons.dev/icons?i=mongodb" />
                    <h1 className='absolute ml-44 mt-2 text-2xl'>Entry-Level</h1>
                </div>
               


            </div>
        </div>
    );
};

export default Skill;