import { error } from "console";
import { Article } from "./types";
import { resolve } from "path";

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