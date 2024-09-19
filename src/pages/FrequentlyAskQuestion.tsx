import { useState } from "react";
import { faqs } from "../data/data";
import { SlArrowDown } from "react-icons/sl";

const FrequentlyAskQuestion = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleDropdown = (index: number | null) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="bg-[url('/src/assets/bg-four.jpg')] bg-cover flex items-center bg-right min-h-screen text-white">
			<div className="container flex flex-col px-4 max-w-[75%] py-16 mx-auto text-white sm:px-6 sm:py-24">
				<h2 className="mb-8 text-4xl text-center text-outline-black font-kardia">
					FAQ
				</h2>
				<div className="space-y-2 max-w-[90vw] sm:max-w-[640px]">
					{faqs.map(
						(
							{ question, answer }: { question: string; answer: string },
							index
						) => (
							<div key={index} onClick={() => toggleDropdown(index)}>
								<h3
									className={`text-lg sm:text-xl flex font-kardia items-center justify-between bg-[#0d2133] rounded-lg border-4 border-[#2c3455] p-3 sm:p-4 ${
										openIndex === index && "pb-2 rounded-b-none border-b-0"
									} cursor-pointer`}
								>
									{question}
									<span
										className={`p-2 sm:p-3 ${
											openIndex === index && "rotate-180"
										} rounded-lg bg-[#2b607b]`}
									>
										<SlArrowDown className="font-bold text-white" />
									</span>
								</h3>
								{openIndex === index && (
									<p className="bg-[#0d2133] border-4 border-t-0 rounded-b-xl font-semibold border-[#2c3455] p-3 sm:p-4 pt-2">
										{answer}
									</p>
								)}
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default FrequentlyAskQuestion;
