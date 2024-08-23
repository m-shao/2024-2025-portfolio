import { StaticImageData } from "next/image";

type PolaroidType = {
	id: number;
	image: StaticImageData;
	title: string;
	description: string;
};

export default PolaroidType;
