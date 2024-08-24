import PolaroidType from "@/types/polaroid";

import Link from "next/link";
import Image from "next/image";

type Props = {
	polaroid: PolaroidType;
};

const PolaroidPreview = ({ polaroid }: Props) => {
	return (
		<div className='p-4 w-96 bg-white space-y-2 relative'>
			<Link href='/' className='absolute -top-16 -left-16'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1}
					stroke='black'
					className='size-16'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18 18 6M6 6l12 12'
					/>
				</svg>
			</Link>
			<Image src={polaroid.image} alt={polaroid.title} />
			<div className='h-24 space-y-1'>
				<h2 className='text-xl font-bold'>{polaroid.title}</h2>
				<p className='text-base font-sans'>{polaroid.description}</p>
			</div>
		</div>
	);
};

export default PolaroidPreview;
