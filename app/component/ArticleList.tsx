import React from 'react';
import Link  from "next/link";
import Image from "next/image";
// Articleモジュール
import { Article } from '../types';

// ArticleListの呼び出し
type ArticleListProps = {
	artciles:Article[];
}

const ArticleList = ({ artciles }: ArticleListProps) => {
	return (
		<div>
			{artciles.map((artcile)=>( //←mapで全JSON出力
			<article className="flex flex-col shadow my-4" key={artcile.id}>
				<Link href="#" className="hover:opacity-75">
					<Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
					alt=""
					width={1280}
					height={300}/>
				</Link>
				<div className="bg-white flex flex-col justify-start p-6">
					<Link href={`article/${artcile.id}`} className="text-blue-700 pb-4 font-bold">Technology</Link>
					<Link href={`article/${artcile.id}`}  className="text-slate-700  text-3xl font-bold hover:text-gray-700 pb-4">{artcile.title}</Link>
					<p className="text-sm pb-3 text-slate-700">By YamaAtsu, published on { artcile.createdAt }</p>
					<Link href={`article/${artcile.id}`}  className="pb-6 text-slate-700">{artcile.content}</Link>
					<Link href={`article/${artcile.id}`}  className='text-pink-800 hover:text-black'>続きを読む</Link>
				</div>
			</article>
			))}
		</div>
	)
}

export default ArticleList