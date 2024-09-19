import { nav } from "../data/data";
import { Button, NavButton } from "./Button";

const Footer = () => {
	return (
		<div className="h-[180px] bg-white flex items-center">
			<div className="container flex flex-col items-center gap-8 mx-auto md:flex-row md:gap-0 md:justify-around">
				<div>
					<h3 className="font-semibold text-[#0d2133]">All Reserved, 2024</h3>
					<h1 className="text-4xl text-[#effafe] font-kardia text-outline-black">
						$MIGGLES
					</h1>
				</div>
				<div>
					<div className="flex gap-4">
						{nav.map((item: string, id: number) => (
							<NavButton logo={item} key={id} />
						))}
						<Button text="Buy Now" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
