import Image from "next/image";
import leaf1 from "@/assets/leaf-1.png";
import leaf2 from "@/assets/leaf-2.png";
import leaf3 from "@/assets/leaf-3.png";

type Props = {};

const LeafOverlay = (props: Props) => {
	return (
		<div className='fixed z-50 pointer-events-none'>
			<Image
				src={leaf1}
				alt='leaf overlay leaf'
				className='fixed top-0 left-0 w-1/6'
			/>
			<Image
				src={leaf2}
				alt='leaf overlay leaf'
				className='fixed bottom-0 left-0 w-1/6 hidden md:block'
			/>
			<Image
				src={leaf3}
				alt='leaf overlay leaf'
				className='fixed bottom-0 right-0 w-2/3 md:w-1/3'
			/>
		</div>
	);
};

export default LeafOverlay;
