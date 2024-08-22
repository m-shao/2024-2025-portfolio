import Image from "next/image";

import paperTrim from "@/assets/paper-trim.svg";
import pinkTape from "@/assets/pink-tape.svg";
import paperPattern from "@/assets/paper-pattern.svg";

type Props = {};

const ProjectsExperiencePaper = (props: Props) => {
	return (
		<div className='relative rotate-6'>
			<Image
				src={pinkTape}
				alt='pink tape'
				className='z-10 w-1/2 absolute -rotate-45 -left-6'
			/>
			<Image
				src={pinkTape}
				alt='pink tape'
				className='z-10 w-1/3 absolute -rotate-45 bottom-1 -right-4'
			/>
			<Image
				src={paperPattern}
				alt='paper pattern'
				className='absolute w-2/5 bottom-0 left-0 opacity-40'
			/>
			<Image
				src={paperTrim}
				alt='paper trim'
				className='translate-y-[1px]'
			/>
			<div className='bg-white w-full h-48 p-4 text-xl'>
				Projects & <br />
				Experience
			</div>
		</div>
	);
};

export default ProjectsExperiencePaper;
