import React from "react";  
const bgImage = `${import.meta.env.BASE_URL}social-images/cfProfile.png`;
const profileImage = `${import.meta.env.BASE_URL}social-images/CSW11.png`;
import { socialIcons, listItems } from "./constant/data";

import { RiArrowRightUpLine } from "@remixicon/react";
function Card () {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <div className="max-w-2xl w-full bg-white mx-auto flex flex-col items-center md:rounded-2xl overflow-hidden shadow-md
            px-4 md:my-8 relative">
                <div className="absolute top-0 left-0 right-0">
                    <img src={bgImage} alt="Background" width={610} height={142}
                    className="w-full h-auto" />
                </div>
                <div className="mt-30 border-8 border-white rounded-full overflow-hidden z-10">
                    <img src={profileImage} alt="Profile" width={165} height={165}
                   
                     />
                </div>
                <div className="mt-5 mb-3.5 text-center max-w-111 space-y-1.5">
                    <h1 className="text-3xl font-bold">Farhad Nuri</h1>
                    <p>Full Stack Developer with strong problem-solving skills. Proficient in React, TypeScript, Next.js, Node.js, MongoDB, Neon, and Prisma. Passionate about large scale system design.</p>

                </div>
                <ul className="flex items-center gap-2.5">
                    {socialIcons.map((item) => (
                        <li key={item.id} className="group">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-600 text-white flex items-center justify-center rounded-full
                            hover:opacity-80 transition-opacity
                            group-nth-[1]:bg-blue-600
                             group-nth-[2]:bg-black
                             group-nth-[3]:bg-blue-700
                             group-nth-[4]:bg-green-500"
                             title={item.label}>
                                <item.icon />
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="grid gap-3 my-8">
                    {listItems.map((item) => (
                        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer"
                        className={`border-zinc-300 border flex items-center justify-between 
                        p-1.5 gap-8 sm:gap-16 lg:gap-37.25 rounded-full pl-8
                        hover:bg-zinc-900 transition-colors hover:text-white ${!item.url && 'pointer-events-none opacity-50'}`}>
                            <p className="font-bold">{item.label}</p>
                        <span className="w-12 h-12 bg-neutral-200 flex items-center justify-center rounded-full
                        text-zinc-700"><RiArrowRightUpLine /></span>
                        </a>
                    ))}
                </ul>
            </div>
        </section>
    );
}
export default Card