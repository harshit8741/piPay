import { NavLink } from "react-router-dom";
import avtar from '../assets/avtar.jpg'

export default function Sidebar() {
    return <aside className="fixed top-0 left-0 h-full w-64 bg-[#F5F7F9] flex flex-col p-2 pr-5 justify-between">
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold drop-shadow-md shadow-red-900 text-[#025864]">piPay</h2>
                <button className="flex gap-2 items-center rounded-lg p-2 bg-white border border-gray-300 font-medium text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className='border-t-2 border-gray-300 w-full'></div>
            {/* <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/dashboard" className="hover:text-gray-300">dashboard</a>
            <a href="/settings" className="hover:text-gray-300">Settings</a>
        </nav> */}
            <div className="text-black w-full text-sm mr-2 ml-2 mt-4">
                <ul className="flex flex-col">
                    <li className="items-center pl-2 text-[#aeb4ba]">
                        GENERAL
                    </li>
                    <li className="flex w-full">
                        <NavLink to="/" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Home
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/dashboard" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Overview
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/market" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Market
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/news" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>
                            </div>
                            <div className="my-1">
                                News
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/notification" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Notification
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div className="text-black text-xs mx-2 my-4">
                <ul className="flex flex-col">
                    <li className="flex w-full">
                        <NavLink to="/csdcscdcs" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="size-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Setting
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex w-full">
                        <NavLink to="/csdcsd" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="size-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Help
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex w-full">
                        <NavLink to="/sdcsdc" className={({ isActive }) => isActive
                            ? "flex flex-row items-center rounded-lg text-[#025864] font-semibold bg-[#FFFFFF] shadow-md h-10 w-full pl-2"
                            : "flex flex-row items-center rounded pl-2 h-10"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="size-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Pro Mode
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='border-t-2 border-gray-300 w-full'></div>
            <div className="bg-white rounded-lg mt-4 p-3 shadow-md flex gap-2 items-center">
                <img src={avtar} className="border rounded-full w-8 h-8" />
                <div className="text-sm">
                    Harshit Singh
                    <div className="text-xs text-gray-400">
                        harshits0240@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </aside>
}