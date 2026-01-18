import { useIdentity } from '../context/IdentityContext'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Sidebar = () => {
    const { identity } = useIdentity();

    const titles = {
        architect: "Lead Blockchain Architect",
        neural: "AI & Web3 Researcher",
        cyber: "Senior Cyber-Engineer",
        minimalist: "Technical Lead"
    }

    return (
        <div className="pt-3 pb-6 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 group">
                <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity" />
                <Image
                    src="/images/Headshot.jpeg"
                    alt="Profile"
                    className="rounded-full border-2 border-primary z-10"
                    width={128}
                    height={128}
                    layout="intrinsic"
                />
            </div>

            {/* Profile */}
            <h3 className="my-4 text-3xl font-black tracking-tighter">
                <span className="text-primary">Devon </span>
                Nathan
            </h3>

            <p className="px-4 py-1 my-3 glass-card rounded-full text-sm font-bold uppercase tracking-widest text-primary">
                {titles[identity]}
            </p>

            <div className="w-full px-6 space-y-3 mt-4">
                <a
                    className="flex items-center justify-center w-full px-2 py-2 glass-card rounded-xl font-bold hover:bg-primary hover:text-background transition-all"
                    href="/images/Devon Nathan.pdf"
                    target="_blank" rel="noreferrer"
                    download="Devon_Nathan_CV.pdf"
                    aria-label="CV Download"
                >
                    Download CV
                </a>

                <p className="flex items-center justify-center w-full px-2 py-2 glass-card rounded-xl text-xs font-mono">
                    devon.nathan@protonmail.com
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-around w-full px-10 my-8 text-primary">
                <a href="https://github.com/devon-n" target="_blank" rel="noreferrer" aria-label="Github" className="hover:scale-125 transition-transform">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/devonnathan/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-125 transition-transform">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="mailto:devon.nathan@protonmail.com" target="_blank" rel="noreferrer" aria-label="Email" className="hover:scale-125 transition-transform">
                    <AiOutlineMail className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Sidebar