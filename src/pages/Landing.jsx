import texture from "../assets/texture.jpg"
import room from "../assets/room.jpg"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <main
            className="w-screen h-screen text-[#f5efe6]"
            style={{
                backgroundImage: `url(${texture})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "120% 120%", // texture appears larger / zoomed
                backgroundPosition: "center"
            }}
        >
            <div className="grid grid-cols-12 w-full h-full px-24 py-16">

                {/* LEFT TEXT */}
                <div className="col-span-6 flex flex-col items-start">

                    {/* GDG moved slightly DOWN */}
                    <span className="mt-6 text-[10px] tracking-[0.35em] uppercase text-[#c2a27d]/80 mb-6">
                        GDG HOTELS
                    </span>

                    {/* Bigger rooms.io */}
                    <h1 className="font-serif text-[clamp(6.5rem,12vw,10rem)] leading-[0.9] tracking-tight text-[#f3e6d3] mb-4">
                        rooms.io
                    </h1>

                    <p className="max-w-md text-sm text-[#d2b892] leading-relaxed mb-8">
                        Thoughtfully designed spaces for rest, silence, and slow travel.
                        A modern hotel experience shaped by calm and clarity.
                    </p>

                    {/* Glass buttons */}
                    <div className="flex gap-8 mt-2">
                        <Link
                            to="/hotels"
                            className="
                px-7 py-3
                text-sm tracking-wide
                text-[#f3e6d3]
                border border-[#d6b98a]
                bg-white/10
                backdrop-blur-lg
                hover:bg-white/20
                transition-all duration-300
              "
                        >
                            Explore now
                        </Link>

                        <Link
                            to="/login"
                            className="
                px-7 py-3
                text-sm tracking-wide
                text-[#f3e6d3]
                border border-[#d6b98a]
                bg-white/10
                backdrop-blur-lg
                hover:bg-white/20
                transition-all duration-300
              "
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-span-6 relative flex justify-center items-center">

                    {/* Golden frames */}
                    <div className="absolute w-[420px] h-[520px] border border-[#d6b98a]"></div>
                    <div className="absolute w-[440px] h-[540px] border border-[#d6b98a]/50 translate-x-6 translate-y-6"></div>

                    {/* Room image */}
                    <img
                        src={room}
                        alt="Hotel room"
                        className="relative z-10 w-[380px] h-[480px] object-cover translate-y-10"
                    />
                </div>

            </div>
        </main>
    )
}
