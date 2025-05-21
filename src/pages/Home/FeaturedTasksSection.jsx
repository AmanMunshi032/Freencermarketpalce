import React from 'react';


const FeaturedTasksSection = ({grape}) => {
  const{TaskTitle,Category,Description,
Deadline}=grape
 
  return (
    <div className="card bg-base-100  shadow-sm hover:bg-gray-600 hover:text-white">
  <div className="card-body  text-center">
  
     <h2 className="text-xl font-bold">{TaskTitle}</h2>
       <p className=''>{Category}</p>
      <p>{Deadline}</p>
    <p className=''>{Description}</p>

  </div>
</div>
  );
};

export default FeaturedTasksSection;