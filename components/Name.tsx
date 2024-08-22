"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { firstName, lastName } from "@/config/name";
import RandsomLetter from "@/components/RandsomLetter";

type Props = {};

const Name = (props: Props) => {
	const [randomFirstNameRotations, setRandomFirstNameRotations] = useState([
		0, 0, 0, 0, 0, 0, 0,
	]);
	const [randomLastNameRotations, setRandomLastNameRotations] = useState([
		0, 0, 0, 0,
	]);

	useEffect(() => {
		setRandomFirstNameRotations(
			firstName.map(() => Math.random() * 40 - 20)
		);
		setRandomLastNameRotations(lastName.map(() => Math.random() * 40 - 20));
	}, []);

	const handleMouseOverFirstName = (index: number) => {
		const newRotations = randomFirstNameRotations.map((rotation, i) => {
			if (i === index) {
				return Math.random() * 40 - 20;
			} else {
				return rotation;
			}
		});
		setRandomFirstNameRotations(newRotations);
	};

	const handleMouseOverLastName = (index: number) => {
		const newRotations = randomLastNameRotations.map((rotation, i) => {
			if (i === index) {
				return Math.random() * 40 - 20;
			} else {
				return rotation;
			}
		});
		setRandomLastNameRotations(newRotations);
	};

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex gap-4'>
				{firstName.map((letter, index) => (
					<Fragment key={index}>
						<RandsomLetter
							handleMouseOver={handleMouseOverFirstName}
							index={index}
							letter={letter}
							rotation={randomFirstNameRotations[index]}
						/>
					</Fragment>
				))}
			</div>
			<div className='flex gap-4'>
				{lastName.map((letter, index) => (
					<Fragment key={index}>
						<RandsomLetter
							handleMouseOver={handleMouseOverLastName}
							index={index}
							letter={letter}
							rotation={randomLastNameRotations[index]}
						/>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Name;
