"use client";

// useRouter,useState,BlogAPIの読み込み
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { createArticle } from '../blogAPI';

// Blog作成関数
const CreateBlogPage = () => {
	// useRouterフックを使用してrouterを取得
	const router = useRouter();
	// 作成する記事の型
	const [id, setId] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	// Load時の設定（defautl:false)
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Load
		setLoading(true);
		// 記事作成
		await createArticle(id, title, content);
  		// ホームページにリダイレクトする
		router.push("/");
	  	// ページを再読み込みする
		router.refresh();
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">新規投稿</h2>
			<form className="bg-slate-200 p-6 rounded shadow-lg"
				onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={(e) => setId(e.target.value)}/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={(e) => setTitle(e.target.value)}/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">本文</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
						onChange={(e) => setContent(e.target.value)}></textarea>
				</div>
				<button
					type="submit"
					className={`py-2 px-4 border rounded-md ${
								loading    // ← Load時のbutton挙動
									? "bg-orange-300 cursor-not-allowed"
									: "bg-orange-400 hover:bg-orange-500"
								} text-white font-semibold focus:outline-none`}
								disabled={loading}
				>
				作成
				</button>
			</form>
		</div>
	)
}

export default CreateBlogPage