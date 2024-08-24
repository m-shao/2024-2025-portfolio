"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import PolaroidPreview from "@/components/PolaroidPreview";
import polaroids from "@/config/polaroids";

import { motion } from "framer-motion";

const Modal = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const dialogRef = useRef<React.ElementRef<"dialog">>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
		e.target === dialogRef.current && router.back();

	return (
		<motion.dialog
			initial={{
				translateY: "100vh",
				backgroundColor: "rgba(0 0 0 / 0)",
			}}
			animate={{ translateY: 0, backgroundColor: "rgba(0 0 0 / 0.8)" }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			ref={dialogRef}
			onClick={closeModal}
			onClose={router.back}
			className=' text-3xl' //backdrop:bg-black/60 backdrop:backdrop-blur-sm
		>
			<PolaroidPreview polaroid={polaroids[Number(params?.id)]} />
		</motion.dialog>
	);
};

export default Modal;
