import { Card, CardButton } from "../components/Card";
import { cex, partner } from "../data/data";

const Partner = () => {
	return (
		<div className="bg-gradient-to-b from-[#09aad4] font-kardia to-90% to-[#012438] py-16">
			<div className="flex flex-col gap-12 container mx-auto items-center text-[#dcf3ff]">
				{/* CEX */}
				<div className="flex flex-col gap-4 md:gap-8">
					<h2 className="mb-4 text-3xl text-center text-outline-black">
						BUY ON CEX
					</h2>
					<div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-flow-col md:grid-rows-2">
						{cex.map(
							(
								{
									name,
									color,
									url,
								}: {
									name: string;
									color: string;
									url: string;
								},
								id: number
							) => (
								<CardButton name={name} color={color} url={url} key={id} />
							)
						)}
					</div>
				</div>
				{/* PARTNER */}
				<div className="flex flex-col gap-4 md:gap-8">
					<h2 className="mb-4 text-3xl text-center text-outline-black">
						OUR PARTNER
					</h2>
					<div className="flex gap-4 md:gap-8">
						{partner.map(
							(
								{
									name,

									url,
								}: { name: string; url: string },
								id: number
							) => (
								<Card name={name} url={url} key={id} />
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;
