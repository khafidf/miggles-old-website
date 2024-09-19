import { Button } from "../components/Button";
import migboat from "../assets/miggboat.png";

const Story = () => {
	return (
		<div className="bg-[url('/src/assets/bg-two.jpg')] overflow-hidden bg-no-repeat h-[860px] bg-right-bottom bg-cover md:bg-auto font-kardia">
			<div className="relative">
				<img
					src={migboat}
					className="absolute invisible -right-10 top-16 md:visible"
					width={640}
					alt="Miggles Fishing"
				/>
				<div className="absolute top-1/2  right-1/2 translate-x-1/2 lg:translate-x-1/4 h-[430px] lg:h-[440px] md:h-[530px] translate-y-1/3 md:translate-y-1/2 rounded-xl">
					<div className="bg-white shadow-[16px_16px_0px_2px_#1d465c] border  border-[#1d465c] w-[360px] md:w-[720px] md:py-20 p-8 h-fit text-center rounded-xl">
						<h2 className="text-[#dcf3ff] lg:text-4xl text-2xl mb-4 text-outline-black">
							THE STORY OF MR. MIGGLES
						</h2>
						<p className="mx-auto mb-4 text-sm lg:text-base">
							Coinbase unleashed the purrfect storm with their NFT campaign,
							featuring the most adorable cat video starring none other than Mr.
							Miggles! This cute kitty inspired the birth of a meme token,
							created to empower all creators—from musicians and artists to, of
							course, cats! <br />
							<br />
							The token had no pre-sale, no KOLs, and no airdrops—just pure,
							decentralized fun. When the initial developer decided to chase
							other mice, the community took the lead. Now, it's all paws on
							deck as we continue this adventure together! Meow! :3
						</p>
						<Button text="MEME GENERATOR" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
