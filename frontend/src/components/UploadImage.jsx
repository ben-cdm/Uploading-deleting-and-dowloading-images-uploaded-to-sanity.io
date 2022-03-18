import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'

import {user} from '../user'

const uploadImage = () => {
   
    const navigate = useNavigate(); 
    const [imagesAssets, setImagesAssets] = useState(null);
    const [wrongTypeofImage, setWrongTypeofImage] = useState(false);
    const [setField] = useState();

    const uploadImage = (e) => {
       const selectedImage = e.target.files[0];

    // uploading asset to sanity
    if (selectedImage.type === 'image/png' || selectedImage.type === 'image/svg' || selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/gif' || selectedImage.type === 'image/tiff') {
        setWrongTypeofImage(false);
  
          user.assets
          .upload('image', selectedImage, { contentType: selectedImage.type, filename: selectedImage.name })
          .then((document) => {
            setImagesAssets(document);
           
          })
          .catch((error) => {
            console.log('Upload failed:', error.message);
          });
      } else {
        setWrongTypeofImage(true);
      }
    };
    
  const saveImage = () => {
    if(imagesAssets?._id){

      const doc = {
        _type: 'photo',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imagesAssets?._id,
          },
        },
      };
      user.create(doc).then(() => {
        navigate('/');
      });
    } else {
      setField(true);

      setTimeout(
        () => {
          setField(false);
        },
        2000,
      );
    }
  };
  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:hh-4/5'>
        <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
           <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420 '>
                {wrongTypeofImage && <p>Wrong type of image</p>}
                {!imagesAssets ? (
                     <label>
                         <div className='flex flex-col items-center justify-center h-full'>
                             <div className='flex flex-col justify-center items-center'>
                                  <p className='font-bold text-2xl'>
                                     <AiOutlineCloudUpload/>
                                  </p>
                                  <p className='text-lg'>Click to upload</p>
                             </div>
                         </div>
                         <input
                        type="file"
                        name="upload-image"
                        onChange={uploadImage}
                        className="hidden"
                      />
                     </label>
                ) :(
                    <div className='relative h-full'>
                        <img src={imagesAssets?.url} alt='uploaded_image'
                        className='h-full w-full'
                        />
                        <button
                        type='button'
                        className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                        onClick={() => setImagesAssets(null)}
                        >
                          <MdDelete/>
                        </button>
                    </div>
                )}
           </div>
        </div>
                 <div className='flex justify-end items-end mt-5'>
                 <button
                type="button"
                onClick={saveImage}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
                >
                Save Image
              </button>
                 </div>
             </div>
  )
}


export default uploadImage