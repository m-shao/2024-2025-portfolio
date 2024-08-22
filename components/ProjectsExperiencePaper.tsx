import Image from "next/image";

import paperTrim from "@/assets/paper-trim.svg";
import pinkTape from "@/assets/pink-tape.svg";
import paperPattern from "@/assets/paper-pattern.svg";

type Props = {};

const ProjectsExperiencePaper = (props: Props) => {
	return (
		<div className='relative rotate-6 w-36 lg:w-40 hover:scale-[1.02] transition-all'>
			<Image
				src={pinkTape}
				alt='pink tape'
				className='z-10 w-1/2 absolute -rotate-45 -left-6'
			/>
			<Image
				src={pinkTape}
				alt='pink tape'
				className='z-10 w-2/5 absolute -rotate-45 bottom-1 -right-4'
			/>
			<Image
				src={paperPattern}
				alt='paper pattern'
				className='absolute w-2/5 lg:w-1/2 bottom-0 left-0 opacity-40'
			/>
			<Image
				src={paperTrim}
				alt='paper trim'
				className='translate-y-[1px]'
			/>
			<div className='bg-white h-48 lg:h-56 w-36 lg:w-40 p-4 lg:p-5 text-xl lg:text-2xl'>
				Projects & <br />
				Experience
			</div>
		</div>
	);
};

export default ProjectsExperiencePaper;
