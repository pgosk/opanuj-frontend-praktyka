import { type Comment } from '../types/Comment';
export const CommentsList = ({ data }: { data: Comment[] }) => {
  return data.map((comment) => (
    <div
      className="bg-violet-400 rounded-xl text-white p-4 mb-2 shadow"
      key={comment.id}
    >
      <p className="italic">"{comment.text}"</p>
      <p className="text-sm text-violet-900">
        {comment.author} - Rating {comment.rating}/5
      </p>
    </div>
  ));
};
