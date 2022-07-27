import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from "next/head";
import Link from "next/link";
import { postType } from '../../types';

type postsTypeProps = {
    posts: [postType];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            posts: data
        }
    }
}

const Posts: FC<postsTypeProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title> Posts </title>
            </Head>
            <h1> Posts list: </h1>
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>
                            <a> {title} </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Posts;