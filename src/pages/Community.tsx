import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "../components/Button";
import { FaXTwitter } from "react-icons/fa6";

const Community = () => {
	return (
		<div className="bg-[#437cbf] py-16 md:h-[540px] flex my-auto">
			<div className="container flex flex-col items-center gap-8 mx-auto md:flex-row md:gap-12">
				<div className="flex justify-center w-full md:w-1/2">
					<img
						src="/src/assets/miggles-rari.png"
						className="w-[320px] sm:w-[420px] max-w-full"
						alt="Miggles Rari"
					/>
				</div>
				<div className="w-full space-y-6 text-center md:w-1/2">
					<h2 className="text-4xl font-bold text-white font-kardia sm:text-5xl text-outline-black">
						MR MIGGLES <br /> COMMUNITY
					</h2>
					<p className="text-lg text-white sm:text-xl">
						Why chase the bag alone when it's so much more fun together? Join
						our community on Telegram or X and let's make magic happen!
						Together, we're stronger, furrier, and a whole lot more fun.
					</p>
					<div className="flex justify-center gap-4">
						<Button
							text={
								<span className="flex items-center gap-2">
									<FaTelegramPlane />
									Telegram
								</span>
							}
							logo="Telegram"
						/>
						<Button
							text={
								<span className="flex items-center gap-2">
									<FaXTwitter />
									X/Twitter
								</span>
							}
							logo="X"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Community;
