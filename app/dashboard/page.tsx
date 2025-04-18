"use client"
import React, {useState} from "react"

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <header className="bg-gray-900 p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button
                    className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors lg:hidden"
                    onClick={toggleSidebar}>
                    {isSidebarOpen ? "Close Menu" : "Open Menu"}
                </button>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside
                    className={`bg-gray-800 p-6 flex flex-col space-y-6 transition-all ${
                        isSidebarOpen
                            ? "w-64"
                            : "left-[-100%] fixed top-0 h-screen"
                    } lg:w-1/4 lg:block overflow-hidden lg:relative absolute top-0 left-0 bottom-0 z-10`}>
                    <h2 className="text-xl font-semibold">Navigation</h2>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-all">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-all">
                                Users
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-all">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-all">
                                Profile
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-full p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold">Welcome, Admin</h2>
                        <div className="text-sm text-gray-400">
                            Last login: 2 days ago
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold">
                                Total Users
                            </h3>
                            <p className="mt-2 text-4xl">1,234</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold">
                                Total Sales
                            </h3>
                            <p className="mt-2 text-4xl">$10,500</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold">Revenue</h3>
                            <p className="mt-2 text-4xl">$15,300</p>
                        </div>
                    </div>

                    {/* Latest Activity */}
                    <section className="mt-10">
                        <h3 className="text-2xl font-semibold">
                            Latest Activity
                        </h3>
                        <div className="bg-gray-900 mt-4 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-xl font-semibold">
                                        New User Registration
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        1 hour ago
                                    </p>
                                </div>
                                <span className="text-green-400 font-semibold">
                                    +5 Users
                                </span>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold">
                                    Sales Update
                                </h4>
                                <p className="text-sm text-gray-400">
                                    3 hours ago
                                </p>
                                <div className="mt-2 text-green-400 font-semibold">
                                    +200 Sales
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default DashboardPage
