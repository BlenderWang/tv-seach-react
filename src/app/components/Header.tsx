import { SiZincsearch } from "react-icons/si";
import Searchbar from "./Searchbar";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-[rgba(227,188,248,40%)] dark:bg-[rgba(3,1,40,10%)]">
            <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
                <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                    <Link href="/" className="flex gap-2 items-center">
                        <SiZincsearch />
                        Next.js TV Search
                    </Link>
                </h1>

                <Searchbar />

                <ThemeSwitch />
            </nav>
        </header>
    );
};

export default Header;
