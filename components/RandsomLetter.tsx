import Image from "next/image";

type Props = {
	handleMouseOver: (index: number) => void;
	index: number;
	letter: {
		image: any;
		letter: string;
	};
	rotation: number;
};

const RandsomLetter = ({ handleMouseOver, index, letter, rotation }: Props) => {
	return (
		<Image
			onMouseOver={() => {
				handleMouseOver(index);
			}}
			className='w-[12%] lg:w-14 aspect-square transition-transform'
			src={letter.image}
			alt={letter.letter}
			style={{
				transform: `rotate(${rotation}deg)`,
			}}
		/>
	);
};

export default RandsomLetter;
