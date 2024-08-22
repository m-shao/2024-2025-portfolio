import Image from "next/image";
import driedFlower from "@/assets/dried-flower.png";

const DriedFlower = () => {
	return (
		<Image
			src={driedFlower}
			alt='dried flower decor'
			className='h-80 lg:h-[28rem] w-auto hidden md:block md:-translate-x-6 lg:translate-x-10 lg:static absolute right-0'
		/>
	);
};

export default DriedFlower;
