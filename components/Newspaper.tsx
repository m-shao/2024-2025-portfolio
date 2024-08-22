import Image from "next/image";
import newspaper from "@/assets/newspaper.png";
import PushPin from "@/components/PushPin";

type Props = {};

const Newspaper = (props: Props) => {
	return (
		<div>
			<div className='flex flex-col items-center w-[65%]'>
				<div className='-translate-y-2 z-10 absolute'>
					<PushPin />
				</div>
				<Image
					src={newspaper}
					alt='newspaper'
					className='hover:scale-[1.02] transition-all cursor-pointer'
				/>
			</div>
		</div>
	);
};

export default Newspaper;
