import { IoChevronForward, IoChevronBack } from "react-icons/io5";

export interface IPagination {
    itemsPerPage: number;
    totalItems: number;
    jump: (pageNumber: number) => void;
    onPrev: () => void;
    onNext: () => void;
}

export default function Pagination({
    itemsPerPage,
    totalItems,
    jump,
    onNext,
    onPrev,
}: IPagination) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => onPrev()}
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => onNext()}
                >
                    Next
                </a>
            </div>

            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">97</span> results
                    </p>
                </div>

                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <IoChevronBack
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>

                        {pageNumbers.map((page) => (
                            <a
                                href="#"
                                aria-current="page"
                                key={page}
                                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                onClick={() => jump(page)}
                            >
                                {page}
                            </a>
                        ))}

                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <IoChevronForward
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
