import Link from 'next/link';
import React from 'react';
import { Post } from '../typings'
import { urlFor } from '../sanity'
interface Props {
    posts: [Post]
}
const Blog = ({ posts }: Props) => {
    return <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map(post => (
            <Link key={post.id} href={`/post/${post.slug.current}`}>
                <div className='group border rounded-lg cursor-pointer overflow-hidden'>
                    {/* Exclamation mark @ the end is to make sure value is neve null/ 
                    same as using {post.mainImage && ()} Shorter Code Bro... */}
                    <img
                        className='h-60 w-full object-cover group-hover:scale-105
                        transition-transform duration-200 ease-in-out'
                        src={
                            urlFor(post.mainImage).url()!
                        } alt="" />
                    <div className='flex justify-between p-5 bg-white'>
                        <div>
                            <p className='text-lg font-bold'>{post.title}</p>
                            <p className='text-xs'>{post.description} by {post.author.name}</p>
                        </div>
                        <div>
                            <img
                                className='h-12 w-12 rounded-full'
                                src={
                                    urlFor(post.author.image).url()!
                                } alt="" />
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>;
};

export default Blog;

