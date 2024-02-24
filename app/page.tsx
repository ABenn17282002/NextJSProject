"use client"

// import { getAllArticles } from "./blogAPI";
import ArticleList from "./component/ArticleList";
import { Database } from "@/utils/supabase";
import { createClient } from "@/utils/supabaseClient";
import React, { useEffect, useState } from 'react'
import Loading from "./loading";


export default function Home() {

  const [db, setDb] = useState<Database['public']['Tables']['posts']['Row'][]>([]);
  const [loading, setLoading] = useState(true); // ローディング状態を管理するためのステート

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("posts").select("*");
      if (data) {
        setDb(data);
        // データ取得後にローディングをfalseに設定
        setLoading(false);
      }
      if (error) {
        console.error(error);
        // エラーがある場合もローディングをfalseに設定
        setLoading(false);
      }
    };

    fetchData();
    // 空の依存配列は、この効果が一度だけ実行されることを保証します
    }, []);

    if (loading) {
      // データ取得中はローディング状態またはnullをレンダリング
      return <Loading />;
    }

  return (
    <div className="md:flex">
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={db} />
    </section>

    <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
      <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
        <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
        <h3 className="font-bold text-gray-900 mb-2">Category</h3>
        <ul className="text-gray-600 mt-2">
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Automotive</a>
          </li>
          <li>
            <a href="#">Finance</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
  );

}
