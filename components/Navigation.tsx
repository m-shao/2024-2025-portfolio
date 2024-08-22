"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hamburgerMenu from "@/assets/hamburger-menu.svg";

import { useAnimate } from "framer-motion";

import navLinks from "@/config/navLinks";

type Props = {};

const Navigation = (props: Props) => {
	const [innerScope, innerAnimate] = useAnimate();
	const [outerScope, outerAnimate] = useAnimate();
	const [lightScope, lightAnimate] = useAnimate();
	const [stringScope, stringAnimate] = useAnimate();

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = async () => {
		setIsOpen(true);
		outerAnimate(
			outerScope.current,
			{ transform: "translateY(0)" },
			{ duration: 0.8, ease: [0.59, 0, 0.08, 1] }
		);
		await stringAnimate(
			stringScope.current,
			{ transform: "translateY(100vh)" },
			{ duration: 0.8, ease: [0.59, 0, 0.08, 1] }
		);
		await innerAnimate(
			innerScope.current,
			{ opacity: 1 },
			{ duration: 0.2, ease: [0.28, -0.35, 0.74, 1.41], delay: 0.2 }
		);
		await lightAnimate(
			lightScope.current,
			{ opacity: 1 },
			{ duration: 0.3, ease: [0.51, 2.27, 0.44, -1.5], delay: 0.8 }
		);
	};

	const handleClose = async () => {
		setIsOpen(false);
		await lightAnimate(
			lightScope.current,
			{ opacity: 0 },
			{ duration: 0.3, ease: "linear" }
		);
		await innerAnimate(
			innerScope.current,
			{ opacity: 0 },
			{ duration: 0.3, ease: "linear" }
		);
		outerAnimate(
			outerScope.current,
			{ transform: "translateY(-100vh)" },
			{ duration: 0.8, ease: [0.77, -0.01, 0.64, 0.99] }
		);
		await stringAnimate(
			stringScope.current,
			{ transform: "translateY(0)" },
			{ duration: 0.8, ease: [0.77, -0.01, 0.64, 0.99] }
		);
	};

	return (
		<>
			<div
				ref={outerScope}
				className={
					"fixed z-50 w-screen top-0 left-0 -translate-y-[100vh]"
				}
			>
				<div className='relative'>
					<div
						ref={innerScope}
						className='fixed bg-[#141414] opacity-0 w-screen h-screen'
					>
						<div
							ref={lightScope}
							className='relative w-full h-full flex justify-center items-start opacity-0'
						>
							<nav className='w-full flex items-center flex-col gap-8 py-24 z-30 absolute'>
								<button
									className='flex justify-center'
									onClick={handleClose}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1}
										stroke='white'
										className='size-16'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18 18 6M6 6l12 12'
										/>
									</svg>
								</button>
								{navLinks.map((link, index) => (
									<div className='group' key={index}>
										<Link
											href={link.href}
											className='text-4xl text-white'
										>
											{link.name}
										</Link>
										<div className='w-0 group-hover:w-full h-[1px] bg-white transition-all'></div>
									</div>
								))}
							</nav>
							<div
								className='h-screen w-[min(95vw,65rem)] bg-yellow-radial-gradient bg-no-repeat bg-contain absolute'
								style={{
									clipPath:
										"polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
								}}
							></div>
						</div>
					</div>
					<div
						className='w-screen h-screen bg-short-vertical-gradient bg-repeat'
						style={{ backgroundSize: "100% 12.5%" }}
					></div>
				</div>
			</div>
			<div
				className='absolute top-0 right-8 md:right-12 lg:right-24 z-50 flex gap-2'
				ref={stringScope}
			>
				<p className='bg-yellow-200 size-32 p-4'>
					Psst! <br />
					This is a
					<br />
					Navigation
					<br />
					Menu {"->->"}
				</p>
				<button onClick={handleOpen} className='w-6 md:w-8 lg:w-10'>
					<Image
						src={hamburgerMenu}
						alt='hamburger menu'
						className='shadow-lg brightness-95'
					/>
				</button>
			</div>
		</>
	);
};

export default Navigation;
