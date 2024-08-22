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
				<div className='w-full h-full flex flex-col md:flex-row items-center md:items-start'>
					<div className='flex-1 flex flex-col gap-12 h-full'>
						<Newspaper />
						<div className='flex flex-row gap-8 items-start flex-1 pb-12'>
							<div className='translate-y-[15%]'>
								<Polaroids />
							</div>
							{/* <div className='h-full flex items-end absolute xl:static'>
								<BlogStickyNote />
							</div> */}
						</div>
					</div>
					<div className='flex-1 flex flex-col'>
						<Name />
						<div className='flex justify-between'>
							<div className='flex flex-col justify-between items-stretch'>
								<div className='flex-1 w-36'>
									<ProjectsExperiencePaper />
								</div>
								<div className='flex-1 w-3/4'>
									<ContactMeEnvelope />
								</div>
							</div>
							<div className='hidden lg:block'>
								<DriedFlower />
							</div>
						</div>
					</div>
				</div>
			</CorkBoard>
		</main>
	);
}
