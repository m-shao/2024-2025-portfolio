import React from "react";

type Props = {
	children?: React.ReactNode;
};

const CorkBoard = ({ children }: Props) => {
	return (
		<div className='bg-cork-background w-[min(85rem,90%)] h-[90%] bg-repeat relative p-8 md:p-12 lg:p-16'>
			<div className='absolute top-0 left-0 right-0 h-4 md:h-6 bg-trim-top bg-cover'></div>
			<div className='absolute top-0 right-0 bottom-0 w-4 md:w-6 bg-trim-side bg-cover'></div>
			<div className='absolute bottom-0 left-0 right-0 h-4 md:h-6 bg-trim-top bg-cover'></div>
			<div className='absolute top-0 left-0 bottom-0 w-4 md:w-6 bg-trim-side bg-cover'></div>
			{children}
		</div>
	);
};

export default CorkBoard;
