/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lmiQM2trkTp
 */
import Link from "next/link";
import { DarkModeToggler } from "../DarkModeToggler/DarkModeToggler";

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <h1 className="text-lg font-bold">GPrompTer Web</h1>
      <nav className="flex items-center space-x-4">
        <DarkModeToggler />
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          href="/prompts/new"
        >
          Add Prompt
        </Link>
      </nav>
    </header>
  );
}
