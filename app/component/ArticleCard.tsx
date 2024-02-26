import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '../types';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="flex flex-col shadow my-4" key={article.id}>
      <Link href={`/pages/${article.id}`}>
        <div className="hover:opacity-75">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
            alt=""
            width={1280}
            height={300}
            priority
          />
        </div>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <div className="text-blue-700 pb-4 font-bold">Technology</div>
        <div className="text-slate-700 text-3xl font-bold hover:text-gray-700 pb-4">{article.title}</div>
        <p className="text-sm pb-3 text-slate-700">By YamaAtsu, published on {article.createdAt}</p>
        <div className="pb-6 text-slate-700">
          {article.content && article.content.length > 70
            ? article.content.substring(0, 70)
            : article.content || 'No content available'}
        </div>
        <Link href={`/pages/${article.id}`}>
          <div className="text-pink-800 hover:text-black">Read More</div>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;