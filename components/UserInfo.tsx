import { FC } from 'react';
import { userType } from '../types';

type userTypeProps = {
    user: userType;
}

const UserInfo:FC<userTypeProps> = ({ user }) => {
    const { name, email, address } = user || {};
    const { street, suite, city, zipcode } = address || {};

    if (!user) {
        return <div>Information about this user is empty</div>
    }

    return (
        <>
            <h3> {name} </h3>
            <div>
                <strong> Email: </strong>
                {email}
            </div>
            <div>
                <strong> Address: </strong>
                {`${street} ${suite} ${city} ${zipcode}`}
            </div>
        </>
    )
}

export default UserInfo;