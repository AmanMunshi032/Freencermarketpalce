import React from 'react';

const Hightretingcard = ({hi}) => {
    const {photo, country, category ,rating,salary,name}= hi

    return (
          <div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body  ">
   <div className="flex  justify-between">
     <h4 className="card-title">{name}</h4>
    <h4 className="card-title text-amber-400">{rating}</h4>
    
   </div>
   <p>{category}</p>
    <p>{country}</p>
    <div className="card-actions">
     <p className="text-pink-600 font-semibold">{salary}</p>
    </div>
  </div>
</div>
            </div>
    );
};

export default Hightretingcard;