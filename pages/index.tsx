import Head from 'next/head'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Header from '../components/Header'

import { sanityClient } from '../sanity'
import { Post } from '../typings'


//because typescript doesn't understand the props format type 
//that i got from the serverside rendering, i defined it using interface
interface Props {
  posts: [Post]
}

//defined the props above as Props and destructured the props to posts below
export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" />
      </Head>
      <Header />
      <Banner />
      {/* posts */}
      <Blog posts={posts} />
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]|order(_createdAt desc){
    _id,
    title,
    slug,
    author -> {
    name,
    image, 
  },
  description,
  mainImage,
  _createdAt,
  slug
  
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    }
  }
}