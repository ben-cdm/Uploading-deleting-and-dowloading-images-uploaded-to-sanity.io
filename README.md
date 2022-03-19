# Uploading, deleting, and downloading images uploaded to sanity.io

[Sanity.io](https://sanity.io/) is a structured content platform that uses the Content Lake database to store different types of data uploaded to their platform.

You can use sanity.io in various ways:
- Content Management System (CMS) The administrator usually has all the permissions, e.g., managing text, images, and any other type of information.
- Using sanity.io only for storing data and performing any other activity on the website.
 
In this blog, we will build a simple web application using sanity.io to store our data (images in our case). We will upload our photos to the database and retrieve them using GROQ. Activities such as uploading, deleting, and downloading uploaded images can be integrated into our website.

Let us begin!

## Prerequisites

For you to follow side by side, you require a few things:

- Knowledge of ReactJS
- Choose a code editor
- Create a React app
- [NodeJS](https://nodejs.org/en/)
- To install:
    - [Sanity.io](https://sanity.io/) 
    - [Tailwindcss](https://tailwindcss.com/docs/installation)
    - [React Masonary CSS](https://www.npmjs.com/package/react-masonry-css)
    - [React-icons](https://react-icons.github.io/react-icons)
    - [React-router-dom](https://www.npmjs.com/package/react-router-dom)
    - [@sanity/client](https://www.npmjs.com/package/@sanity/cli)
    - [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url)
    
## Installation

## Installing sanity.io


To get started, we have to install sanity.io by following the steps below:

- In an empty folder, create a new folder and name it "backend."
- Open your terminal and change the directory by typing
 ```
 cd backend
 ```
- In this folder, we will install sanity.io by :
```
npm install -g @sanity/cli
```
After installing sanity.io command line, we will initialize our project by :

 ```
 sanity init
 ``` 

If `sanity init` didn't work, run 
```
npx sanity init
```
- For Sanity API to set up the best project structure for us, we have to answer a few questions as follows:
    - Login  
    - Create a new project
    - Use the default dataset configuration. Enter: y and click enter
    - Select project template. Choose a clean project with no predefined schemas.

With that, we are all done with the sanity.io installation.
```
export const addQuery = `*[_type == "photo"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
  _id
    } `;//make sure you use back-ticks(``) instead of quotes
//_id is the specific image id and url retrieves all images with the help of order(_createdAt desc)

```
