import Image from "next/image";
import Link from "next/link";
import PushPin from "@/components/PushPin";

const BlogStickyNote = () => {
	return (
		<div className='flex flex-col items-center'>
			<div className='-translate-y-4 z-10 absolute'>
				<PushPin />
			</div>
			<a
				target='_blank'
				href={"https://blog.minglunshao.com"}
				className='w-40 h-40 bg-[#fff740] space-y-4 p-3 hover:scale-[1.01] transition-all shadow-lg'
			>
				<h1 className='text-2xl'>
					Personal <br /> Blog
				</h1>
				<p className='underline text-sm'>Click To Read {"->"}</p>
			</a>
		</div>
	);
};

export default BlogStickyNote;
