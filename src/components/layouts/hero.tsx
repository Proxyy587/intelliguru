import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Instrument_Serif } from "next/font/google";

const instrumentalSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: ["400"],
});

const Hero = () => {
	return (
		<div className="bg-gradient-to-br from-background to-secondary/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
				<div className="text-center mb-16">
					<h1 className={`text-5xl md:text-7xl mb-6 tracking-tighter font-medium`}>
						Get your smart notes with <br />
						<span className="text-blue-600 underline">AI-Powered</span> mentor
					</h1>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Experience personalized learning like never before. Our AI virtual
						teacher adapts to your unique learning style, provides instant
						feedback, and guides you towards mastery.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/signup">
							<Button size="lg">Start Learning</Button>
						</Link>
						<Link href="/login">
							<Button size="lg" variant="secondary">
								Sign In
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
