import { useState } from "react";
import { CardTokenomic } from "../components/Card";
import { tokenomic } from "../data/data";
import moonbag from "../assets/miggles-moonbag.png";

const Tokenomic = () => {
	const [copied, setCopied] = useState(false);
	const textToCopy = "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d";

	const handleCopy = () => {
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	return (
		<div className="bg-[url('/src/assets/bg-three.jpg')] bg-cover bg-bottom">
			<div className="px-4 py-8 md:px-8">
				<div className="text-[#dcf3ff] flex flex-col items-center mx-auto">
					<h2 className="mb-4 text-2xl text-center font-kardia md:text-3xl lg:text-4xl text-outline-black">
						TOKENOMICS
					</h2>

					<p className="mb-6 text-base text-center font-kardia md:text-lg">
						Disclaimer: We Are A Memecoin Fan Community That Is Not Affiliated
						With Coinbase Or Base
					</p>

					<div className="py-4 px-8 bg-white font-kardia border-[#2b607b] md:px-12 border-2 flex gap-2 items-center cursor-pointer border-b-[8px] border-r-[8px] border-solid rounded-full w-full md:w-auto">
						<p className="truncate text-[#1d465c]">
							0xB1a03EdA10342529bBF8EB700a06C60441fEf25d
						</p>
						<button
							className="px-4 ml-8 py-2  text-white bg-[#2b607b] border-[#1d465c] border-2 cursor-pointer border-b-[5px] border-r-[5px] rounded-full"
							onClick={handleCopy}
						>
							{copied ? "Copied!" : "Copy to Clipboard"}
						</button>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mt-8">
						{tokenomic.map(
							(
								{ title, content }: { title: string; content: string },
								id: number
							) => (
								<CardTokenomic title={title} content={content} key={id} />
							)
						)}
					</div>
				</div>

				<div className="relative mt-12 md:mt-16">
					<img
						src={moonbag}
						className="w-48 mx-auto md:w-60 lg:w-72 -rotate-3"
						alt="Miggles Moonbag"
					/>
				</div>
			</div>
		</div>
	);
};

export default Tokenomic;
