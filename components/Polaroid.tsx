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
				"w-1/3 px-[1%] pt-[1%] pb-[10%] bg-gray-200 shadow-md",
				transform
			)}
		>
			<Image src={polaroid.image} alt={polaroid.title} />
		</div>
	);
};

export default Polaroid;
