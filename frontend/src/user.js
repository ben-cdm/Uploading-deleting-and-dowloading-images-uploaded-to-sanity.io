import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const user =sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const build = imageUrlBuilder(user);

export const urlFor = (source) => build.image(source);

