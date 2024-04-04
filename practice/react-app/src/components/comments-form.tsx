import { FormEvent } from 'react';
import { useAddComment } from '../hooks/use-add-comment';

export const CommentsForm = () => {
  const addComment = useAddComment();

  const handleAddComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.target as HTMLFormElement);
    addComment.mutate({
      comment: values.get('comment') as string,
      rating: values.get('rating') as string,
    });
  };

  return (
    <form onSubmit={handleAddComment}>
      <div className="flex flex-col">
        <input
          type="text"
          name="comment"
          placeholder="Write a comment..."
          className="w-full p-2 rounded-lg mb-2"
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          className="w-full p-2 w-12 rounded-lg"
        />
      </div>
      <button className="bg-violet-400 text-white p-2 rounded-lg mt-2">
        Submit
      </button>
    </form>
  );
};
