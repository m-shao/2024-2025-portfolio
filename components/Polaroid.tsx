"use client";

import { useState } from "react";

import PolaroidType from "@/types/polaroid";
import Image from "next/image";
import clsx from "clsx";

type PolaroidProps = {
	polaroid: PolaroidType;
	transform: string;
};

const Polaroid = ({ polaroid, transform }: PolaroidProps) => {
	return (
		<div
			className={clsx(
				"w-20 md:w-28 lg:w-[min(18vh,8rem)] xl:w-[min(18vh,10rem)] px-[1%] pt-[1%] pb-[10%] bg-gray-200 shadow-md",
				transform
			)}
		>
			<Image src={polaroid.image} alt={polaroid.title} />
		</div>
	);
};

export default Polaroid;
