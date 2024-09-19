export const CardButton = ({
	name,
	color,
	url,
}: {
	name: string;
	color: string;
	url: string;
}) => {
	const colorSelect = (color: string): string => {
		switch (color) {
			case "black":
				return "bg-[#0f0f0f] border-[#212121]";
			case "green":
				return "bg-[#3ddb51] border-[#23af34]";
			case "blue":
				return "bg-[#3d9fdb] border-[#28719e]";
			default:
				return "bg-white border-black";
		}
	};
	return (
		<div
			className={`px-4 border-2 cursor-pointer my-auto border-b-[5px] border-r-[5px] border-solid rounded-2xl w-[180px] h-[80px] flex flex-col justify-center items-center ${colorSelect(
				color
			)}`}
		>
			<img src={url} alt={name} />
		</div>
	);
};

export const Card = ({ name, url }: { name: string; url: string }) => {
	const colorSelect = (name: string): string => {
		switch (name) {
			case "beefy":
				return "bg-[#1a1c2e] border-[#2b2b44]";
			case "flooz":
				return "bg-[#859bf0] border-[#324381]";
			default:
				return "bg-white border-black";
		}
	};
	return (
		<div
			className={`px-4 border-2 cursor-pointer my-auto border-b-[5px] border-r-[5px] border-solid rounded-2xl w-[180px] h-[80px] flex flex-col justify-center items-center  ${colorSelect(
				name
			)}`}
		>
			<img src={url} alt={name} />
		</div>
	);
};

export const CardTokenomic = ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	return (
		<div className="px-4 border-2 cursor-pointer my-auto border-b-[8px] border-r-[8px] border-solid rounded-2xl w-[180px] h-[100px] flex flex-col bg-[#2b607b] border-[#1d465c]  justify-center items-center">
			<div className="text-center text-white">
				<h3 className="text-md">{title}</h3>
				<p className="font-kardia">{content}</p>
			</div>
		</div>
	);
};
