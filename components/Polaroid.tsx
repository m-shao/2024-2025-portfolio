"use client";

import { useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

import PolaroidType from "@/types/polaroid";
import Image from "next/image";
import clsx from "clsx";

type PolaroidProps = {
	polaroid: PolaroidType;
	transform: string;
};

const Polaroid = ({ polaroid, transform }: PolaroidProps) => {
	const router = useRouter();

	const [ref, animate] = useAnimate();

	const handleClick = async () => {
		// animate(
		// 	ref.current,
		// 	{ transform: "translateY(1rem)" },
		// 	{ duration: 0.6, ease: "linear" }
		// );

		const degrees = ["40deg", "-40deg"];
		for (let j = 0; j < 3; j++) {
			for (let i = 0; i < degrees.length; i++) {
				await animate(
					ref.current,
					{ rotate: degrees[i] },
					{ duration: i / 5, ease: "easeInOut" }
				);
			}
		}

		await animate(
			ref.current,
			{ transform: "translateY(80vh)" },
			{ duration: 0.5, ease: "easeIn" }
		);

		router.push(`/photos/${polaroid.id}`);
	};

	return (
		<button
			ref={ref}
			onClick={handleClick}
			className={clsx(
				"origin-top hover:scale-[1.01] transition-all w-16 md:w-24 lg:w-[min(18vh,7rem)] xl:w-[min(18vh,9rem)] px-[1%] pt-[1%] pb-[10%] bg-gray-200 shadow-md",
				transform
			)}
		>
			<Image src={polaroid.image} alt={polaroid.title} />
		</button>
	);
};

export default Polaroid;
