import { useComments } from '../hooks/use-comments';
import { CommentsForm } from './comments-form';
import { CommentsList } from './comments-list';

export const Comments = () => {
  const { data, isPending, error } = useComments();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  if (data === undefined) {
    return <p>No data...</p>;
  }

  return (
    <>
      <CommentsList data={data.comments} />
      <CommentsForm />
    </>
  );
};
