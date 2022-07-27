import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from "next/head";
import Link from "next/link";
import { userType } from '../../types';

type usersTypeProps = {
    users: [userType];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            users: data
        }
    }
}

const Users: FC<usersTypeProps> = ({ users }) => {
    return (
        <>
            <Head>
                <title> Users </title>
            </Head>
            <h1> Users list: </h1>
            <ul>
                {users && users.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`/users/${id}`}>
                            <a> {name} </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Users;