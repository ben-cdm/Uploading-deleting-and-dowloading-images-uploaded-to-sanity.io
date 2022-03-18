export const addQuery = `*[_type == "photo"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
  _id
    } `;//make sure you use back-ticks(``) instead of quotes
//_id is the specific image id and url retrieves all images with the help of order(_createdAt desc)
