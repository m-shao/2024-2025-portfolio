import Image from "next/image";
import driedFlower from "@/assets/dried-flower.png";

const DriedFlower = () => {
	return (
		<Image
			src={driedFlower}
			alt='dried flower decor'
			className='h-full w-auto hidden md:block md:translate-x-6 lg:translate-x-10'
		/>
	);
};

export default DriedFlower;
