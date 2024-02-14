import { error } from "console";
import { Article } from "./types";
import { resolve } from "path";
import { notFound } from "next/navigation";

// 記事取得用
export const getAllArticles = async (): Promise<Article[]>=>{
	const res = await fetch(`http://localhost:3001/posts`,{cache:"no-store"}); //SSR

	// Responseがない場合に限り、Error
	if (!res.ok){
		throw new Error("エラーが発生しました。");
	}

	// 遅延ローディング
	await new Promise((resolve) => setTimeout(resolve,1500));

	const articles = await res.json();
	return articles;
}

// 詳細記事取得用
export const getDetailArticle = async (id:string): Promise<Article>=>{
	const res = await fetch(`http://localhost:3001/posts/${id}`,{
		next:{ revalidate:60 },
	}); //SSR

	// 404Errorの場合
	if (res.status === 404){
		notFound();
	}

	// Responseがない場合に限り、Error
	if (!res.ok){
		throw new Error("エラーが発生しました。");
	}

	// 遅延ローディング
	await new Promise((resolve) => setTimeout(resolve,1000));

	const articles = await res.json();
	return articles;
}