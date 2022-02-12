import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  /**
   * Find project id and dataset in sanity.json in your sanity studio project
   * these are considered public, but you can use environment variables
   * if you want to differ between local and production
   *
   * https://nextjs.org/docs/basic/features/environment-variables
   */
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  /**
   * Set useCdn to 'false' if your application require the
   * freshest possible data always
   */

  useCdn: process.env.NODE_ENV === 'production',
}
//set up the client for fetching data in the get Props page functions
export const sanityClient = createClient(config)
/**
 * set up regular function for generating Image urls with only the asset reference data in your documents
 * read more: https://www.sanity.io/docs/image-url
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)
