import Image from "next/image";
import Navbar from "./ui/global-navbar";
import { lexend_Deca } from "./ui/font";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<div className="flex items-center justify-center">
					<div className="w-full px-10 py-12 md:px-32 md:py-36">
						<h1
							className={`text-4xl font-medium text-center leading-tight mb-16 md:mb-4 md:text-start md:text-[70px] ${lexend_Deca.className}`}
						>
							Learn without limits
						</h1>
						<p className="text-lg text-center leading-snug mb-16 md:mb-4 md:text-start">
							Start, switch, or advance your career with a wide variety of
							courses, professional certificates, and programs from world-class
							universities and companies.
						</p>
						<div className="flex flex-col items-center justify-evenly w-full">
							<button className="w-full md:w-[45%] md:mr-2 mb-4 md:mb-0 max-h-20 bg-blue-500 text-white text-base font-semibold py-4 rounded-sm">
								Sign In
							</button>
							<button className="w-full md:w-[65%] md:ml-2 max-h-20 text-blue-500 text-base font-semibold py-4 border border-blue-500 rounded-sm">
								Subscribe to SpringSkill Plus
							</button>
						</div>
					</div>
					<div className="hidden md:block w-full my-20 justify-items-center">
						<Image
							src={"/office-worker.png"}
							width={300}
							height={300}
							alt={"Teacher"}
						/>
					</div>
				</div>
			</main>
		</>
	);
}
