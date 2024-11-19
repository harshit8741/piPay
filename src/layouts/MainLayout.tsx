// src/layouts/MainLayout.js

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';

const MainLayout = ({ children }: any) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Topbar />
                <main className="mt-12 ml-64 px-6 py-4 bg-[#FFFFFF] min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
