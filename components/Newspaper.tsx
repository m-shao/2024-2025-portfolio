"use client";

import { useState } from "react";

import Image from "next/image";
import newspaper from "@/assets/newspaper.png";
import PushPin from "@/components/PushPin";

type Props = {};

const Newspaper = (props: Props) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
		console.log("Newspaper clicked");
	};

	return (
		<div className={"flex flex-col items-center"} onClick={handleClick}>
			<div className='-translate-y-2 z-10 absolute'>
				<PushPin />
			</div>
			<Image
				src={newspaper}
				alt='newspaper'
				className='hover:scale-[1.01] transition-all cursor-pointer w-full'
			/>
		</div>
	);
};

export default Newspaper;
