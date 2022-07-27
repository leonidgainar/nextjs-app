import { FC } from 'react';
import { postType } from '../types';

type postTypeProps = {
  post: postType;
}

const PostInfo: FC<postTypeProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <h3> Empty post </h3>
  }

  return (
    <>
      <h3> {title} </h3>
      <p> {body} </p>
    </>
  );
}

export default PostInfo;