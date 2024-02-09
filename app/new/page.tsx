import React from 'react'

const page = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">新規投稿</h2>
			<form className="bg-slate-200 p-6 rounded shadow-lg">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
					<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
					<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">本文</label>
					<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"></textarea>
				</div>
				<button type="submit" className="py-2 px-4 border rounded-md bg-orange-300">作成</button>
			</form>
		</div>
	)
}

export default page