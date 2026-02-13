import React from 'react'

export default function NavBar() {
    return (
        <main>
            <section className='w-full bg-[#f1faee] h-full p-6 flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-[#1b1b1b]'>Dashboard</h1>
                </div>
                <div>
                    <button className='bg-[#1b1b1b] text-white px-4 py-2 rounded-md'>Sign In</button>
                </div>
            </section>
        </main>
    )
}
