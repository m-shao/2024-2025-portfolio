import Image from "next/image";
import driedFlower from "@/assets/dried-flower.png";

const DriedFlower = () => {
	return (
		<Image
			src={driedFlower}
			alt='dried flower decor'
			className='h-full translate-x-10'
		/>
	);
};

export default DriedFlower;
