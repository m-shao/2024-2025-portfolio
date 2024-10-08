import CorkBoard from "@/components/CorkBoard";
import Newspaper from "@/components/Newspaper";
import Polaroids from "@/components/Polaroids";
import Name from "@/components/Name";
import BlogStickyNote from "@/components/BlogStickyNote";

import DriedFlower from "@/components/DriedFlower";
import ProjectsExperiencePaper from "@/components/ProjectsExperiencePaper";
import ContactMeEnvelope from "@/components/ContactMeEnvelope";

export default function Home() {
	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<CorkBoard>
				<div className='w-full h-full flex flex-col md:flex-row items-center md:items-start gap-0 lg:gap-12'>
					<div className='flex flex-col gap-[min(5vh-1rem,12rem)] h-full w-full md:w-[24rem] xl:w-[32rem]'>
						<div className='w-3/4'>
							<Newspaper />
						</div>
						<div className='flex flex-row gap-8 items-start flex-1 pb-12'>
							<div className='translate-y-[15%]'>
								<Polaroids />
							</div>
							{/* <div className='h-full flex items-end absolute'>
								<BlogStickyNote />
							</div> */}
						</div>
					</div>
					<div className='flex-1 flex flex-col h-full'>
						<Name />
						<div className='flex justify-between flex-1'>
							<div className='flex-1 flex flex-col justify-start items-start lg:items-stretch pt-6 relative'>
								<div className=''>
									<ProjectsExperiencePaper />
								</div>
								<div className='self-end'>
									<ContactMeEnvelope />
								</div>
							</div>
							<div className=''>
								<DriedFlower />
							</div>
						</div>
					</div>
				</div>
			</CorkBoard>
		</main>
	);
}
