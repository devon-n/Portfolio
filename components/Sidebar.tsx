import { useIdentity } from '../context/IdentityContext'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { ThemeType } from '../types';
import { IconType } from 'react-icons';
import { TITLES, IDENTITIES } from '../data/identities';

interface ISidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (v: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
    const { identity, setIdentity } = useIdentity();

    return (
        <div className={`pt-3 pb-6 flex flex-col items-center transition-all duration-500 relative ${isCollapsed ? 'px-2' : 'px-0'}`}>
            {/* Collapse Toggle Button - Hidden on Mobile */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="hidden lg:flex absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-primary hover:text-background transition-all z-50 group"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                {isCollapsed ? <HiChevronDoubleRight className="w-4 h-4" /> : <HiChevronDoubleLeft className="w-4 h-4" />}
            </button>

            <div className={`relative transition-all duration-500 ${isCollapsed ? 'w-12 h-12' : 'w-32 h-32'} mb-4 group mt-8`}>
                <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity" />
                <Image
                    src="/images/Headshot.jpeg"
                    alt="Profile"
                    className="rounded-full border-2 border-primary z-10"
                    width={isCollapsed ? 48 : 128}
                    height={isCollapsed ? 48 : 128}
                    priority
                />
            </div>

            {/* Profile */}
            {!isCollapsed && (
                <>
                    <h3 className="my-4 text-3xl font-black tracking-tighter">
                        <span className="text-primary">Devon </span>
                        Nathan
                    </h3>

                    <p className="px-4 py-1 my-3 glass-card rounded-full text-sm font-bold uppercase tracking-widest text-primary border border-primary/20">
                        {TITLES[identity as ThemeType]}
                    </p>
                </>
            )}

            <div className="w-full px-4 space-y-3 mt-4">
                <a
                    className={`flex items-center justify-center w-full px-2 py-2 glass-card rounded-xl font-bold hover:bg-primary hover:text-background transition-all ${isCollapsed ? 'h-10' : ''}`}
                    href="/images/Devon Nathan.pdf"
                    target="_blank" rel="noopener noreferrer"
                    download="Devon_Nathan_CV.pdf"
                    aria-label="CV Download"
                >
                    {isCollapsed ? <AiFillGithub className="w-5 h-5" /> : "Download CV"}
                </a>

                {!isCollapsed && (
                    <p className="flex items-center justify-center w-full px-2 py-2 glass-card rounded-xl text-xs font-mono truncate border border-border/50">
                        devon.nathan@protonmail.com
                    </p>
                )}
            </div>

            {/* Social Icons */}
            <div className={`flex ${isCollapsed ? 'flex-col gap-4' : 'justify-around w-full px-10'} my-4 text-primary`}>
                <a href="https://github.com/devon-n" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:scale-125 transition-transform">
                    <AiFillGithub className={`${isCollapsed ? 'w-6 h-6' : 'w-8 h-8'} cursor-pointer`} />
                </a>
                <a href="https://www.linkedin.com/in/devonnathan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-125 transition-transform">
                    <AiFillLinkedin className={`${isCollapsed ? 'w-6 h-6' : 'w-8 h-8'} cursor-pointer`} />
                </a>
                <a href="mailto:devon.nathan@protonmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:scale-125 transition-transform">
                    <AiOutlineMail className={`${isCollapsed ? 'w-6 h-6' : 'w-8 h-8'} cursor-pointer`} />
                </a>
            </div>

            {/* Identity Switcher Integrated */}
            <div className={`w-full ${isCollapsed ? 'px-2' : 'px-6'} mt-6`}>
                {!isCollapsed && (
                    <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-4 font-black text-center opacity-60">Professional Persona</p>
                )}
                <div className="flex flex-col gap-2">
                    {IDENTITIES.map(({ id, name, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setIdentity(id)}
                            aria-label={`Switch to ${name} persona`}
                            className={`rounded-xl transition-all duration-300 flex items-center border w-full group ${isCollapsed ? 'justify-center p-2' : 'px-4 py-2.5 gap-3'} ${identity === id
                                ? 'bg-primary border-primary text-background shadow-lg shadow-primary/20'
                                : 'border-border text-primary hover:bg-primary/5 hover:border-primary/30'
                                }`}
                        >
                            <Icon className={`text-xl transition-transform duration-500 ${identity === id ? 'scale-110' : 'group-hover:scale-110'}`} />
                            {!isCollapsed && (
                                <span className={`text-xs font-bold uppercase tracking-widest ${identity === id ? '' : 'text-text-main group-hover:text-primary'}`}>{name}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar