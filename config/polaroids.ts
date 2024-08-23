import Bike from "@/assets/polaroids/bike-polaroid.png";
import Ferris from "@/assets/polaroids/ferris-polaroid.png";
import Grass from "@/assets/polaroids/grass-polaroid.png";

import PolaroidType from "@/types/polaroid";

const polaroids: PolaroidType[] = [
	{
		id: 0,
		image: Bike,
		title: "Bike",
		description:
			"A Tokyo, Japan policeman's bike parked on the sidewalk whilst he's on break",
	},
	{
		id: 1,
		image: Ferris,
		title: "Ferris Wheel",
		description: "Kobe, Japan's Ferris Wheel at night",
	},
	{
		id: 2,
		image: Grass,
		title: "Grass",
		description:
			"The little greenery in the middle of the urban Kobe, Japan",
	},
];

export default polaroids;
