import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HowToBuy = () => {
	return (
		<div className="from-[#000511] bg-gradient-to-b to-[#01040d] flex flex-col">
			<div className="relative">
				<svg
					id="wave"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
					className="absolute w-full h-28 md:h-48 lg:h-60 -top-20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#000511"
						d="M0,80L10,78.3C20,77,40,73,60,66.7C80,60,100,50,120,45C140,40,160,40,180,36.7C200,33,220,27,240,26.7C260,27,280,33,300,41.7C320,50,340,60,360,61.7C380,63,400,57,420,60C440,63,460,77,480,73.3C500,70,520,50,540,45C560,40,580,50,600,60C620,70,640,80,660,71.7C680,63,700,37,720,35C740,33,760,57,780,65C800,73,820,67,840,58.3C860,50,880,40,900,36.7C920,33,940,37,960,46.7C980,57,1000,73,1020,66.7C1040,60,1060,30,1080,20C1100,10,1120,20,1140,35C1160,50,1180,70,1200,68.3C1220,67,1240,43,1260,30C1280,17,1300,13,1320,25C1340,37,1360,63,1380,66.7C1400,70,1420,50,1430,40L1440,30L1440,320L0,320Z"
					/>
				</svg>
			</div>

			<div className="container z-10 px-4 py-16 mx-auto text-white md:px-8 lg:px-16">
				<h2 className="mb-8 text-3xl text-center md:text-4xl lg:text-5xl text-outline-blue font-kardia">
					HOW TO BUY
				</h2>

				<div className="grid grid-cols-2 gap-8 mx-auto lg:w-4/5 xl:w-3/5 2xl:w-1/2 md:grid-cols-3">
					<div className="col-span-2 p-4 bg-[#0a0f20] justify-center border-[#23284b] rounded-lg border-2 flex flex-col items-center">
						<div className="flex flex-col items-center text-lg font-semibold text-center">
							<img src="/src/assets/miggles.jpg" alt="Miggles" width={42} />
							<h2 className="mt-4 font-kardia">Download Coinbase Wallet</h2>
							<p className="px-2 mt-2 text-sm md:text-base">
								Download and install Coinbase Wallet from the app store, or use
								the browser extension on desktop.
							</p>
						</div>
						<div className="invisible md:visible md:absolute">
							<div className="relative bg-[#0a0f20] border-[#23284b] p-2 border-4 rounded-2xl left-[244px]">
								<MdKeyboardDoubleArrowRight
									size={40}
									className="text-[#6e8bc1]"
								/>
							</div>
						</div>
					</div>

					<div className="col-span-1 p-4 justify-center  bg-[#0a0f20] border-[#23284b] rounded-lg border-2 flex flex-col items-center">
						<div className="flex flex-col items-center mx-auto text-lg font-semibold text-center">
							<img src="/src/assets/miggles.jpg" alt="Miggles" width={42} />
							<h2 className="mt-4 font-kardia">Secure Your ETH</h2>
							<p className="px-2 mt-2 text-sm md:text-base">
								Purchase ETH and transfer it to your wallet from a centralized
								exchange (CEX).
							</p>
						</div>
					</div>

					<div className="col-span-1 p-4 justify-center bg-[#0a0f20] border-[#23284b] rounded-lg border-2 flex flex-col items-center">
						<div className="flex flex-col items-center text-lg font-semibold text-center">
							<img src="/src/assets/miggles.jpg" alt="Miggles" width={42} />
							<h2 className="mt-4 font-kardia">Buy some $MIGGLES</h2>
							<p className="px-2 mt-2 text-sm md:text-base">
								Go to Uniswap, switch to the Base chain, and swap your ETH for
								$MIGGLES.
							</p>
						</div>
						<div className="invisible md:visible md:absolute">
							<div className="relative bg-[#0a0f20] border-[#23284b] p-2 border-4 rounded-2xl left-[122px]">
								<MdKeyboardDoubleArrowRight
									size={40}
									className="text-[#6e8bc1]"
								/>
							</div>
						</div>
					</div>

					<div className="col-span-2 p-4 justify-center bg-[#0a0f20] border-[#23284b] rounded-lg border-2 flex flex-col items-center">
						<div className="flex flex-col items-center text-lg font-semibold text-center">
							<img src="/src/assets/miggles.jpg" alt="Miggles" width={42} />
							<h2 className="mt-4 font-kardia">Add to Your Wallet</h2>
							<p className="px-2 mt-2 text-sm md:text-base">
								Import the contract address into your wallet to view and track
								your $MIGGLES holdings.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowToBuy;
