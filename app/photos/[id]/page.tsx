import PolaroidPreview from "@/components/PolaroidPreview";
import polaroids from "@/config/polaroids";

type Props = {
	params: { id: string };
};

const PhotoPolaroidPreviewPage = ({ params }: Props) => {
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<PolaroidPreview polaroid={polaroids[Number(params?.id)]} />
		</div>
	);
};

export default PhotoPolaroidPreviewPage;
