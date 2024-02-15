import React from 'react';
import Link  from "next/link";
import Image from "next/image";
// Article,ArtcleCardモジュール
import { Article } from '../types';
import ArticleCard from './ArticleCard';

// ArticleListの呼び出し(artcile→article)
type ArticleListProps = {
	articles: Article[]; // Articleの配列を受け取る
}


const ArticleList = ({ articles }: ArticleListProps) => {
	return (
		<div>
			{articles.map((article)=>( //←mapで全JSON出力
				<ArticleCard article={ article } key={article.id}/>
			))}
		</div>
	)
}

export default ArticleList