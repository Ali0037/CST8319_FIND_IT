import { useNavigate } from "react-router-dom";
import { Card, Badge } from "./ui";
import type { Post } from "../types";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      variant="interactive"
      className="group overflow-hidden"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      {post.photoURL && (
        <img
          src={post.photoURL}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant={post.type} />
          <Badge variant={post.status} />
        </div>

        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {post.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {post.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
          <span>{post.category}</span>
          <span>·</span>
          <span className="truncate">{post.locationText}</span>
        </div>

        <div className="mt-4 flex items-center justify-end border-t border-gray-100 pt-3">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-0.5">
            View details
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
