import { ReactNode } from "react";

export const NavButton = ({ logo }: { logo: string }) => {
	const border = (logoName: string) => {
		switch (logoName) {
			case "Telegram":
				return "border-[#28719e] bg-[#2ba2db]";
			case "X":
				return "border-[#212121] bg-[#0f0f0f]";
			case "Flooz":
				return "border-[#4527bb] bg-[#5e38f4]";
			default:
				break;
		}
	};

	return (
		<button
			className={`pl-2 pr-1 border-2 border-r-[6px] border-solid  border-b-[6px] rounded-full ${border(
				logo
			)}`}
		>
			<a href="#">
				<img
					src={`/src/assets/${logo.toLowerCase()}-logo.png`}
					width={40}
					height={40}
					className="p-2"
					alt={logo}
				/>
			</a>
		</button>
	);
};

export const Button = ({ text, logo }: { text: ReactNode; logo?: string }) => {
	const border = (logoName?: string) => {
		switch (logoName) {
			case "Telegram":
				return "border-[#28719e] bg-[#2ba2db]";
			case "X":
				return "border-[#212121] bg-[#0f0f0f]";
			default:
				return "border-[#1d465c] bg-[#2b607b]";
		}
	};

	return (
		<button
			className={`px-8 py-2 border-2 border-r-[6px] border-solid  border-b-[6px] rounded-full ${border(
				logo
			)}`}
		>
			<a href="#" className="text-white font-kardia">
				{text}
			</a>
		</button>
	);
};
