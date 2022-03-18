import React, {useState} from 'react'

import { AiTwotoneDelete } from 'react-icons/ai';
import { MdDownloadForOffline } from 'react-icons/md';
import { urlFor,user } from '../user';

const Image = ({ photos }) => {

  const [imageHovered, setImageHovered] = useState(false);

  const {_id,image} = photos;

  const deleteImage = (id) => {
    user
      .delete(id)
      .then(() => {
        window.location.reload();
      });
     };

  return (
    <div className='m-2'>
      <div
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
      className=" relative hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
      <img className='rounded-lg w-full' alt="users_post" src={urlFor(image).width(250).url()}/>
      {imageHovered && (
        <div
        className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
        style={{ height: '100%' }}
        >
              <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${image?.asset?.url}?dl=`}//make sure you use back-ticks(``) instead of quotes
                  download
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                ><MdDownloadForOffline />
                </a>
                <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteImage(_id);
                }}
             className="bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none"
           >
             <AiTwotoneDelete />
           </button>
              </div>
              </div>
     </div>
      )}
      </div>
      
    </div>
  )
}

export default Image