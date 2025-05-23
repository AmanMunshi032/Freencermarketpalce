
const Freelencerjob = ({user}) => {
 const {job_title,category,image , rating ,salary,description } = user
    return (
      
            <div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body  ">
   <div className="flex  justify-between">
     <h4 className="card-title">{job_title}</h4>
    <h4 className="card-title text-amber-400">{rating}</h4>
    
   </div>
   <p>{category}</p>
    <p>{description}</p>
    <div className="card-actions">
     <p className="text-pink-600 font-semibold">{salary}</p>
    </div>
  </div>
</div>
            </div>
    );
};

export default Freelencerjob;