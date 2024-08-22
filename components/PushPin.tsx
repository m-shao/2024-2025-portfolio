import Image from "next/image";
import pushpin from "@/assets/pushpin.svg";

const PushPin = () => {
	return <Image src={pushpin} alt='pushpin' className='w-8 h-8' />;
};

export default PushPin;
