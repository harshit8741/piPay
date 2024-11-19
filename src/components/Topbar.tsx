export default function Topbar() {
    return <header className="z-10 fixed top-0 left-64 w-[calc(100%-16rem)] h-12 bg-[#FFFFFF] flex items-center justify-between px-6">
        <div className="flex text-sm border border-gray-300 rounded-md w-72 items-center p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input placeholder="Search" className="w-72" />
        </div>
        <div className="flex gap-2">
            <form className="text-sm max-w-sm flex rounded-lg w-full border border-gray-300 items-center">
                <div className="font-medium p-1 pl-4 basis-[70%] flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div>
                        18 Oct 2024 - 18 Nov 2024
                    </div>
                </div>
                <select id="countries" className="basis-[30%] block font-medium border-l p-1 mr-2">
                    <option selected>Last 30 Days</option>
                    <option value="US">Last 60 Days</option>
                    <option value="CA">Last 90 Days</option>
                    <option value="FR">Last 120 Days</option>
                </select>
            </form>
            <button className="flex gap-2 items-center rounded-lg px-2 border border-gray-300 font-medium text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>

                Export
            </button>
        </div>
    </header>
}