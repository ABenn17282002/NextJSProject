import React from 'react';
import Link  from "next/link";
import Image from "next/image";

const ArticleList = () => {
	return (
		<div>
			<article className="flex flex-col shadow my-4">
				<Link href="#" className="hover:opacity-75">
					<Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
					alt=""
					width={1280}
					height={300}/>
				</Link>
				<div className="bg-white flex flex-col justify-start p-6">
					<Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
					<Link href="#" className="text-slate-700  text-3xl font-bold hover:text-gray-700 pb-4">Next.jsの勉強中</Link>
					<p className="text-sm pb-3 text-slate-700">By YamaAtsu, published on 2024/02/09</p>
					<Link href="#" className="pb-6 text-slate-700">
						With each step, the crunch of leaves beneath my feet echoed through the forest,
						a melodic rhythm that seemed to sync with the beating of my heart.
						Nature has a way of captivating the soul,
						drawing us into its embrace and reminding us of the beauty that surrounds us,
						if only we take the time to notice.
					</Link>
					<Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
				</div>
			</article>
			<article className="flex flex-col shadow my-4">
				<Link href="#" className="hover:opacity-75">
					<Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
					alt=""
					width={1280}
					height={300}/>
				</Link>
				<div className="bg-white flex flex-col justify-start p-6">
					<Link href="#" className="text-blue-700 pb-4 font-bold">Automotive</Link>
					<Link href="#" className="text-slate-700  text-3xl font-bold hover:text-gray-700 pb-4">自動車産業のトレンド</Link>
					<p className="text-sm pb-3 text-slate-700">By YamaAtsu, published on 2024/02/09</p>
					<Link href="#" className="pb-6 text-slate-700">
						In the automotive industry, electrification continues to dominate as a key trend,
						with more companies investing in electric vehicle (EV) development to meet sustainability goals.
						Additionally, autonomous driving technology is rapidly advancing,
						with companies competing to achieve higher levels of automation.
					</Link>
					<Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
				</div>
			</article>
		</div>
	)
}

export default ArticleList