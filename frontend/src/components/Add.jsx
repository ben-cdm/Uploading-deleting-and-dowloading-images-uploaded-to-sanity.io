import React ,{useState, useEffect} from 'react';

import MasonaryLayout from './MasonaryLayout';
import { addQuery} from '../utils/data';
import { user } from '../user';


const Feed = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {

    user.fetch(addQuery)
    .then((data) => {
      setImages(data);
    })
  }, [])


  return (
    <div>   
       {images && <MasonaryLayout images={images}/>}
    </div>
  )
  }
  export default Feed