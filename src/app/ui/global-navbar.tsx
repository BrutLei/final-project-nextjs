"use client";
import { LinkProps } from "next/link";
import React, { useState } from "react";
import Searchbar from "./search-bar";

export default function Navbar() {
	return (
		<nav className="bg-white drop-shadow-sm sticky top-0 z-50">
			<div className="max-w-screen flex items-center justify-between mx-4 p-4">
				<div className="flex items-center justify-i">
					<a href="#" className="flex items-center space-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="132"
							height="30"
							fill="none"
							viewBox="0 0 176 40"
						>
							<path
								fill="#2563eb"
								fillRule="evenodd"
								d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
								clipRule={"evenodd"}
							></path>
							<path
								fill="#2563eb"
								d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
							></path>
						</svg>{" "}
						<span className="self-center text-xl hidden md:block text-pretty text-blue-600 font-semibold whitespace-nowrap dark:text-white">
							SkillSpring
						</span>
					</a>
					<button className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<FlyoutLink
						href="#"
						FlyoutContent=""
						className="mx-4 hidden md:block"
					>
						Explore
						<svg
							className="w-2.5 h-2.5 ms-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</FlyoutLink>
					<Searchbar className={"hidden md:block"} />
				</div>
				<div className="md:flex items-center hidden">
					<button
						type="button"
						className="text-blue-600 hover:underline text-lg"
					>
						Login
					</button>
				</div>
			</div>
		</nav>
	);
}

function FlyoutLink({
	children,
	href,
	FlyoutContent,
	className,
}: {
	children: React.ReactNode;
	href: string;
	FlyoutContent: String;
	className?: String;
}) {
	const [open, setOpen] = useState(false);
	const showFlyout = open && FlyoutContent;
	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className={`relative h-fit w-fit ${className}`}
		>
			<a href={href} className="flex items-center">
				{children}
				<span
					style={{
						transform: open ? "scaleX(1)" : "scaleX(0)",
					}}
					className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left 
            rounded-full bg-blue-400 transition-transform duration-300 
            ease-out"
				></span>
			</a>
		</div>
	);
}
