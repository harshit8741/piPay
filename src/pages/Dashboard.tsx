import { useState } from 'react'
import Charts from '../components/Chart'
export default function Dashboard() {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return <div className="bg-[#FFFFFF]">
        <div className="h-36 bg-[#025864] flex rounded-2xl p-10 justify-between">
            <div className="flex flex-col">
                <div className="text-white text-lg">
                    Total Balance
                </div>
                <div className="text-white text-4xl flex items-baseline gap-1">
                    $ 320.845,20
                    <div className="text-green-500 text-sm font-medium">
                        15.8% up
                    </div>
                </div>
            </div>
            <div className="flex gap-2 py-3">
                <button className="flex items-center rounded-md bg-[#00D47E] font-medium text-sm px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add
                </button>
                <button className="flex items-center rounded-md text-white bg-[#2A737D] font-medium text-sm px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>

                    Send
                </button>
                <button className="flex items-center rounded-md text-white bg-[#2A737D] font-medium text-sm px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    Request
                </button>
                <button className="flex items-center rounded-md text-white bg-[#2A737D] font-semibold text-sm px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div className='mt-4 rounded-lg p-4 h-full border border-gray-300'>
            <div className='flex justify-between items-center'>
                <div>
                    Cash Flow
                </div>
                <div className='flex gap-2'>
                    <label className='themeSwitcherTwo shadow-card inline-flex cursor-pointer select-none items-center font-medium justify-center rounded-md bg-[#F2F5F7] p-1'>
                        <input type='checkbox' className='sr-only' checked={isChecked} onChange={handleCheckboxChange} />
                        <span
                            className={`flex items-center space-x-[6px] rounded py-1 px-2 text-sm font-medium ${!isChecked ? 'text-primary bg-white' : 'text-body-color text-[#C6CED6]'}`}>
                            Weekly
                        </span>
                        <span
                            className={`flex items-center space-x-[6px] rounded py-1 px-2 text-sm font-medium ${isChecked ? 'text-primary bg-white' : 'text-body-color text-[#C6CED6]'}`}>
                            Daily
                        </span>
                    </label>
                    <button className="flex gap-2 items-center rounded-lg px-3 border border-gray-300 font-medium text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Manage
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className='basis-2/3'>
                    <Charts />
                </div>
                <div className='basis-1/3'>
                    <div className='flex flex-col h-full'>
                        <div className="flex items-center basis-1/2 gap-4 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#025864]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                                </svg>

                            </div>
                            <div className='flex items-end gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <p className="text-black text-sm font-normal">Income</p>
                                    <p className="text-black text-3xl font-medium">€12,378.20</p>
                                </div>
                                <p className="flex items-baseline ml-auto text-[#00D47E] text-sm font-semibold gap-1 mb-1">45.0%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>

                                </p>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 mx-3'></div>
                        <div className="flex items-center basis-1/2 gap-4 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#00D47E]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                            <div className='flex items-end gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <p className="text-black text-sm font-normal">Expense</p>
                                    <p className="text-black text-3xl font-medium">€12,378.20</p>
                                </div>
                                <p className="flex items-baseline ml-auto text-red-500 text-sm font-semibold gap-1 mb-1">12.5%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 mt-4'>
                <div className='flex flex-col gap-3 rounded-lg p-4 h-full border border-gray-300 basis-1/3'>
                    <div className='font-medium flex justify-between text-sm '>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                            Business account
                        </div>
                        <div className='text-gray-500'>
                            Last 30 days
                        </div>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className="text-black text-3xl font-medium">€8,672.20</p>
                        </div>
                        <p className="flex items-baseline text-[#00D47E] text-sm font-semibold gap-1 mb-1">16.0%
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </p>
                    </div>
                    <div className='font-medium text-sm text-gray-500'>
                        vs. 7,120.14 Last Period
                    </div>
                </div>
                <div className='flex flex-col gap-3 rounded-lg p-4 h-full border border-gray-300 basis-1/3'>
                    <div className='font-medium flex justify-between text-sm '>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                            Total Saving
                        </div>
                        <div className='text-gray-500'>
                            Last 30 days
                        </div>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className="text-black text-3xl font-medium">€3,765.35</p>
                        </div>
                        <p className="flex items-baseline text-red-500 text-sm font-semibold gap-1 mb-1">8.2%
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                        </p>
                    </div>
                    <div className='font-medium text-sm text-gray-500'>
                        vs. 4,116.50 Last Period
                    </div>
                </div>
                <div className='flex flex-col gap-3 rounded-lg p-4 h-full border border-gray-300 basis-1/3'>
                    <div className='font-medium flex justify-between text-sm '>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            Tax Reserve
                        </div>
                        <div className='text-gray-500'>
                            Last 30 days
                        </div>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className="text-black text-3xl font-medium">€14,376.16</p>
                        </div>
                        <p className="flex items-baseline text-[#00D47E] text-sm font-semibold gap-1 mb-1">35.2%
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </p>
                    </div>
                    <div className='font-medium text-sm text-gray-500'>
                        vs. 10,236.46 Last Period
                    </div>
                </div>
            </div>
            <div className='flex gap-3 mt-4'>
                <div className='border-gray-300 border rounded-lg basis-[67%] p-4'>
                    <div className='flex justify-between w-full items-center text-sm font-medium'>
                        <div className='flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                            Recent Activity
                        </div>
                        <div className='flex gap-2'>
                            <button className="flex gap-1 items-center rounded-lg px-3 py-1 border border-gray-300 font-medium text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                                </svg>
                                Filter
                            </button>
                            <button className="flex gap-1 items-center rounded-lg px-3 py-1 border border-gray-300 font-medium text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>
                                Sort
                            </button>
                            <button className="flex items-center rounded-lg px-3 py-1 border border-gray-300 font-medium text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='border-t-2 border-gray-300 w-full mt-4 mb-2'></div>
                    <div className='flex justify-between text-gray-700 text-sm'>
                        <div>
                            Type
                        </div>
                        <div className='justify-self-start'>
                            Amount
                        </div>
                        <div>
                            Status
                        </div>
                        <div>
                            Method
                        </div>
                    </div>
                    <div className='border-t-2 border-gray-300 w-full mt-2 mb-4'></div>
                    <div>
                        <div className='flex text-sm justify-between'>
                            <div className='flex gap-1'>
                                <div className='flex bg-[#E5FBF2] rounded-full w-10 h-10 items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                <div className='flex flex-col'>
                                    Theo Lawrence
                                    <div className='font-medium text-sm text-gray-500'>
                                        Add . Oct 18, 2024
                                    </div>
                                </div>
                            </div>
                            <div className='pr-32'>
                                €500,00
                                <div className='font-medium text-sm text-gray-500'>
                                    120 USD
                                </div>
                            </div>
                            <div className='pr-24'>
                                <div className='bg-[#E4F9F1] rounded-lg p-2'>
                                    Success
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                Credit Card
                                <div className='font-medium text-sm text-gray-500'>
                                    **** 3560
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-2 border-gray-300 w-full mt-4 mb-4'></div>
                    <div>
                        <div className='flex text-sm justify-between'>
                            <div className='flex gap-1'>
                                <div className='flex bg-[#E5FBF2] rounded-full w-10 h-10 items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                <div className='flex flex-col'>
                                    Amy March
                                    <div className='font-medium text-sm text-gray-500'>
                                        Sent . May 24, 2024
                                    </div>
                                </div>
                            </div>
                            <div className='pr-32'>
                                - €200,00
                                <div className='font-medium text-sm text-gray-500'>
                                    80 USD
                                </div>
                            </div>
                            <div className='pr-20'>
                                <div className='bg-[#e4e4e4] rounded-lg p-2'>
                                    Pending
                                </div>
                            </div>
                            <div  className='flex flex-col items-end'>
                                Bank Transfer
                                <div className='font-medium text-sm text-gray-500'>
                                    **** 6860
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-gray-300 border rounded-lg basis-[33%] p-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            My Card
                        </div>
                        <div>
                            <button className="flex gap-1 items-center rounded-lg px-3 py-1 border border-gray-300 font-medium text-sm">
                                See All
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='rounded-t-lg h-3 mx-4 bg-[#00D37D]'></div>
                        <div className='rounded-lg text-gray-50 bg-[#025864] w-full flex flex-col h-44 p-4 justify-between'>
                            <div className='flex justify-between'>
                                <div className='font-myriad font-semibold text-lg'>
                                    VISA
                                </div>
                                <div>
                                    **** **** **** 2104
                                </div>
                            </div>
                            <div className='text-3xl'>
                                €12,378.20
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}