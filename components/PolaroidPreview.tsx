import PolaroidType from "@/types/polaroid";

import Image from "next/image";

type Props = {
	polaroid: PolaroidType;
};

const PolaroidPreview = ({ polaroid }: Props) => {
	return (
		<div className='p-4 w-96 bg-white space-y-2'>
			<Image src={polaroid.image} alt={polaroid.title} />
			<div className='h-24 space-y-1'>
				<h2 className='text-xl font-bold'>{polaroid.title}</h2>
				<p className='text-base'>{polaroid.description}</p>
			</div>
		</div>
	);
};

export default PolaroidPreview;
