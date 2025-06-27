"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";

const ChatPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex items-center justify-between p-4 border-b">
				<h1 className="text-2xl font-bold">Chat (WIP)</h1>
				<UserButton afterSignOutUrl="/" />
			</div>

			<div className="flex-1 p-4">
				<div className="max-w-3xl mx-auto">
					<div className="text-center text-muted-foreground">In development...</div>
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
