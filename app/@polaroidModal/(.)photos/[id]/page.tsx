"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import PolaroidPreview from "@/components/PolaroidPreview";
import polaroids from "@/config/polaroids";

const Modal = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const dialogRef = useRef<React.ElementRef<"dialog">>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
		e.target === dialogRef.current && router.back();

	return (
		<dialog
			ref={dialogRef}
			onClick={closeModal}
			onClose={router.back}
			className='backdrop:bg-black/60 backdrop:backdrop-blur-sm text-3xl'
		>
			<PolaroidPreview polaroid={polaroids[Number(params?.id)]} />
		</dialog>
	);
};

export default Modal;
