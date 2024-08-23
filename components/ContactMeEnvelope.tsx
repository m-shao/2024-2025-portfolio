import Image from "next/image";
import envelope from "@/assets/envelope.svg";
import contactTape from "@/assets/contact-tape.svg";

type Props = {};

const ContactMeEnvelope = (props: Props) => {
	return (
		<div className='flex flex-col gap-2 items-start w-44 lg:w-52 xl:w-60 absolute bottom-2 right-0'>
			{/* -translate-y-1 lg:-translate-y-24 xl:-translate-y-24 */}
			<Image src={contactTape} alt='contact tape' className='w-4/5' />
			<Image src={envelope} alt='envelope' className='w-full' />
		</div>
	);
};

export default ContactMeEnvelope;
