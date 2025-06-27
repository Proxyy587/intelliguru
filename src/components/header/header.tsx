"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<header className="bg-secondary/50 backdrop-blur-sm shadow-sm border-b border-border">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2">
						<GraduationCap className="h-8 w-8 text-blue-600" />
						<span className="text-xl font-bold">intelliguru</span>
					</Link>

					<div className="flex items-center space-x-4">
						<>
							<Link href="/sign-up">
								<Button variant="ghost">Login</Button>
							</Link>
							<Link href="/sign-up">
								<Button size="sm">Get Started</Button>
							</Link>
						</>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
