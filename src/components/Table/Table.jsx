import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router';
const Table = ({shudul,index, handeldelete}) => {
    
    return (
        < >
        <tr>
          <td>{index+1}</td>
          <td>{shudul?.TaskTitle}</td>
          <td>{shudul?.
Category}</td>
          <td>{shudul?.
Deadline
}</td>
          <td>
          <div className='space-x-4 '>
             <Link to={`/UpdateData/${shudul._id}`}>
              <button  className='text-purple-600 p-3 rounded-md'><FaEdit  size={24}/></button>
             </Link>
            <button onClick={()=> handeldelete(shudul?._id)} className='text-purple-600 p-3 rounded-md'><MdDelete  size={24}/></button>
            
          </div>
          </td>
        </tr>  
        </>
    );
};

export default Table;