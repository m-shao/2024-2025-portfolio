//minglun shao

import m from "@/assets/name/first-name/m-letter.png";
import i from "@/assets/name/first-name/i-letter.png";
import n1 from "@/assets/name/first-name/n-letter-1.png";
import g from "@/assets/name/first-name/g-letter.png";
import l from "@/assets/name/first-name/l-letter.png";
import u from "@/assets/name/first-name/u-letter.png";
import n2 from "@/assets/name/first-name/n-letter-2.png";

import s from "@/assets/name/last-name/s-letter.png";
import h from "@/assets/name/last-name/h-letter.png";
import a from "@/assets/name/last-name/a-letter.png";
import o from "@/assets/name/last-name/o-letter.png";

import { StaticImageData } from "next/image";

type Letter = {
	letter: string;
	image: StaticImageData;
};

export const firstName: Letter[] = [
	{ letter: "M", image: m },
	{ letter: "I", image: i },
	{ letter: "N", image: n1 },
	{ letter: "G", image: g },
	{ letter: "L", image: l },
	{ letter: "U", image: u },
	{ letter: "N", image: n2 },
];
export const lastName: Letter[] = [
	{ letter: "S", image: s },
	{ letter: "H", image: h },
	{ letter: "A", image: a },
	{ letter: "O", image: o },
];
