import React from 'react'
import Masonry from 'react-masonry-css'

import Images from'./Image'

const breakpoint = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonaryLayout = ({images}) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpoint}>
    {images?.map((photos) => <Images key={photos._id} photos={photos} className="w-max" />)}
  </Masonry>
  )
}

export default MasonaryLayout