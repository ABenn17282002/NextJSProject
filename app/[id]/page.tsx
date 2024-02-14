import React from 'react'
import Image from "next/image";

const Article = ({params} :{params:{id: string }}) => {
	console.log(params.id);
	return (
		<div className='max-w-3xl mx-auto p-5'>
			<Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
				alt=""
				width={1280}
				height={300}/>
				<h1 className='text-4xl text-center mb-10 mt-10'>ここにタイトルが入ります</h1>
				<div className='text-lg leading-relaxed text-justfy'>
					<p>ここに本文が入ります</p>
				</div>
		</div>
	)
}

export default Article;