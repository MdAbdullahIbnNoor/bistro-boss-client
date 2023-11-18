import React from 'react';

const SectionTitle = ({ heading, subHeading, textColor }) => {

    return (
        <div className='md:w-10/12 mx-auto'>
            <p className={`${textColor ? textColor : "text-orange-500"} italic text-center text-lg mb-2`}>{subHeading}</p>
            <h2
                className={`text-4xl border-y-4 mb-10 py-3 text-center w-1/3 mx-auto font-semibold font-serif ${textColor ? textColor : 'text-gray-600'}`}
            >
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;
