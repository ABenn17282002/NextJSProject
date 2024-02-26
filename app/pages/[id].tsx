import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabaseClient";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("posts").select("*").eq('id', id).single();
      if (error) {
        console.error(error);
        return;
      }
      setPost(data);
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* 他の詳細情報を表示 */}
    </div>
  );
}
