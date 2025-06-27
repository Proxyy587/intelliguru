import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<div className="flex w-full h-screen items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-4xl font-bold">Intelliguru </h1>
					<p className="text-lg">
						Transforming the way you learn with AI-powered education
					</p>
					<Link href="/sign-in">
						<Button className="mt-4">Get Started</Button>
					</Link>
				</div>
			</div>
		</>
	);
}
