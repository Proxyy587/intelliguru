import { LayoutTransition } from "@/components/providers/layout-transition";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Particles from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeSwitch from "@/components/widgets/theme-switcher";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className={`min-h-screen`}>
				<LayoutTransition
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className="min-h-screen flex flex-col lg:flex-row">
						<div className="lg:hidden flex justify-between items-center p-4">
							<Link href="/">
								<Button
									size="sm"
									variant="ghost"
									className="flex items-center gap-2backdrop-blur-sm"
								>
									<ArrowLeft size={20} />
									<span className="font-medium">Back</span>
								</Button>
							</Link>
							<ThemeSwitch />
						</div>

						<div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-green-900 to-emerald-800 items-center justify-center p-8">
							<div className="relative w-full h-full">
								<div className="absolute inset-0">
									<Image
										src="/pandawebp.webp"
										alt="Cute panda"
										className="object-cover rounded-lg"
										fill
										sizes="100vw"
										priority
									/>
									<div className="absolute -top-4 -right-4 w-16 h-24 bg-green-400 dark:bg-green-600 rounded-full opacity-20 blur-xl"></div>
									<div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-400 dark:bg-emerald-600 rounded-full opacity-20 blur-xl"></div>
								</div>

								<div className="relative text-center mt-8 z-10">
									<h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-2">
										Welcome to Intelliguru
									</h1>
									<p className="text-green-600 text-lg">
										Your friendly AI learning companion.
									</p>
								</div>
							</div>
						</div>

						<div className="relative flex-1 flex items-center justify-center p-8">
							<div className="hidden lg:flex absolute top-6 left-6 right-6 justify-between items-center">
								<Link href="/">
									<Button
										size="sm"
										variant="ghost"
										className="flex items-center gap-2backdrop-blur-sm"
									>
										<ArrowLeft size={20} />
										<span className="font-medium">Back</span>
									</Button>
								</Link>
								<ThemeSwitch />
							</div>
							<div className="w-full max-w-md">
								<div className="">
									<div className="text-center mb-8">
										<h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">
											Sign in to Intelliguru
										</h2>
										<p className="text-gray-600 dark:text-gray-400">
											Continue your learning journey
										</p>
									</div>

									{children}

									<div className="mt-8 text-center">
										<Link
											href="/privacy-policy"
											className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
										>
											Privacy Policy
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</LayoutTransition>
			</div>
			<Particles
				quantityDesktop={160}
				quantityMobile={100}
				ease={80}
				refresh={true}
			/>
		</>
	);

	// (
	//   <>
	//     <div className="min-h-screen flex flex-col items-center justify-center">
	//       <LayoutTransition
	//         initial={{ opacity: 0 }}
	//         animate={{ opacity: 1 }}
	//         exit={{ opacity: 0 }}
	//       >
	//         <div className="fixed top-4 left-4 m-4">
	//           <Link href="/">
	//             <Button
	//               className="flex items-center justify-center gap-2"
	//             >
	//               <ArrowLeft className="w-4 h-4" />
	//               Go Back
	//             </Button>
	//           </Link>
	//         </div>
	//         {children}
	//       </LayoutTransition>
	//       <div className="fixed bottom-4 text-center text-sm text-zinc-500">
	//         <Link href="#" className="hover:text-zinc-300 transition-all">
	//           Terms of Service
	//         </Link>
	//         {' · '}
	//         <Link href="#" className="hover:text-zinc-300 transition-all">
	//           Privacy Policy
	//         </Link>
	//       </div>
	//     </div>
	//     <Particles
	//       quantityDesktop={160}
	//       quantityMobile={100}
	//       ease={80}
	//       refresh={true}
	//     />
	//   </>
	// )
}
