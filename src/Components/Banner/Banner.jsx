import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-[#1313130D] rounded-3xl mt-12 md:h-[554px]">
  <div className="flex gap-20 md:flex-row flex-col-reverse justify-center items-center">
    <div className='py-32'>
      <h1 className="text-5xl font-bold text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="mt-12 bg-[#23BE0A] w-48 h-16 rounded-lg text-white font-bold text-xl text-center flex items-center justify-center p-5">View The List</button>
    </div>
    <div>
    <img
      src="../../../Image/herobooks.png"
      className="w-[318px] h-[394px] mt-4"
    />
    </div>
  </div>
</div>
    );
};

export default Banner;