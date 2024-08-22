"use client";

import { useState } from "react";
import Image from "next/image";
import hamburgerMenu from "@/assets/hamburger-menu.svg";
import clsx from "clsx";

type Props = {};

const Navigation = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<button
			className={clsx(
				"fixed z-50 w-screen top-0 left-0 -translate-y-[100vh] transition-all duration-[800ms]",
				isOpen && "translate-y-0"
			)}
		>
			<div
				className='w-screen h-screen bg-short-vertical-gradient bg-repeat'
				style={{ backgroundSize: "100% 12.5%" }}
				onClick={handleClick}
			></div>
			<div className='w-screen h-screen relative'>
				<Image
					onClick={handleClick}
					src={hamburgerMenu}
					alt='hamburger menu'
					className=' absolute top-0 right-8 md:right-12 lg:right-24 w-6 md:w-8 lg:w-10'
				/>
			</div>
		</button>
	);
};

export default Navigation;
