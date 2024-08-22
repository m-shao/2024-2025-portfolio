import polaroids from "@/config/polaroids";
import Polaroid from "@/components/Polaroid";

const Polaroids = () => {
	return (
		<div className='flex justify-center'>
			<Polaroid polaroid={polaroids[0]} transform={"translate-x-[15%]"} />
			<Polaroid
				polaroid={polaroids[1]}
				transform={"z-10 translate-y-[15%]"}
			/>
			<Polaroid
				polaroid={polaroids[2]}
				transform={"-translate-x-[15%] -translate-y-[15%]"}
			/>
		</div>
	);
};

export default Polaroids;
