import { useIdentity } from '../context/IdentityContext'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai'
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
        <div className={`py-4 lg:pb-6 flex flex-col items-center transition-all duration-500 relative ${isCollapsed ? 'px-2' : 'px-0'}`}>
            {/* Collapse Toggle Button - Hidden on Mobile */}
            <div className="hidden md:flex w-full justify-end px-2 h-6 mb-1">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1 px-1.5 rounded-full glass-card hover:bg-primary hover:text-background transition-all z-50 group border border-primary/20 shadow-sm"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? <HiChevronDoubleRight className="w-3 h-3" /> : <HiChevronDoubleLeft className="w-3 h-3" />}
                </button>
            </div>

            <div className={`relative transition-all duration-500 ${isCollapsed ? 'w-10 h-10' : 'w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32'} mb-1 lg:mb-4 group mt-1 lg:mt-2`}>
                <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full">
                    <Image
                        src="/images/Headshot.jpeg"
                        alt="Profile"
                        className="rounded-full border-2 border-primary z-10 object-cover"
                        fill
                        sizes="(max-width: 1024px) 80px, 128px"
                        priority
                    />
                </div>
            </div>

            {/* Profile */}
            {!isCollapsed && (
                <div className="flex flex-col items-center lg:contents">
                    <h3 className="my-1 lg:my-4 text-lg lg:text-3xl font-black tracking-tighter uppercase whitespace-nowrap text-center">
                        <span className="text-primary tracking-widest">Devon</span> Nathan
                    </h3>
                    <p className={`my-0.5 lg:my-3 px-2 py-1 glass-card rounded-full text-[9px] lg:text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/20`}>
                        {TITLES[identity as ThemeType]}
                    </p>
                </div>
            )}

            <div className="w-full px-4 flex flex-col gap-2 lg:gap-3 lg:mt-4">
                <a
                    className={`flex items-center justify-center w-full px-2 py-2 glass-card rounded-xl text-xs lg:text-base font-bold hover:bg-primary hover:text-background transition-all ${isCollapsed ? 'h-10' : ''}`}
                    href="/images/Devon Nathan.pdf"
                    target="_blank" rel="noopener noreferrer"
                    download="Devon_Nathan_CV.pdf"
                    aria-label="CV Download"
                >
                    {isCollapsed ? <AiOutlineFilePdf className="w-5 h-5 text-primary" /> : "Download CV"}
                </a>

                {!isCollapsed && (
                    <p className="flex items-center justify-center w-full px-2 py-1.5 lg:py-2 glass-card rounded-xl text-[10px] lg:text-xs font-mono truncate border border-border/50">
                        devon.nathan@protonmail.com
                    </p>
                )}
            </div>

            {/* Social Icons */}
            <div className={`flex ${isCollapsed ? 'flex-col gap-4' : 'justify-center lg:justify-around w-full gap-4 lg:gap-0 lg:px-10'} my-3 lg:my-4 text-primary`}>
                <a href="https://github.com/devon-n" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:scale-125 transition-transform">
                    <AiFillGithub className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6 lg:w-8 lg:h-8'} cursor-pointer`} />
                </a>
                <a href="https://www.linkedin.com/in/devonnathan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-125 transition-transform">
                    <AiFillLinkedin className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6 lg:w-8 lg:h-8'} cursor-pointer`} />
                </a>
                <a href="mailto:devon.nathan@protonmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:scale-125 transition-transform">
                    <AiOutlineMail className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6 lg:w-8 lg:h-8'} cursor-pointer`} />
                </a>
            </div>

            {/* Identity Switcher Integrated */}
            <div className={`w-full ${isCollapsed ? 'px-2' : 'px-4 lg:px-6'} mt-2 lg:mt-6`}>
                {!isCollapsed && (
                    <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 lg:mb-4 font-black text-center opacity-60">Professional Persona</p>
                )}
                <div className="flex flex-col gap-2">
                    {IDENTITIES.map(({ id, name, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setIdentity(id)}
                            aria-label={`Switch to ${name} persona`}
                            className={`rounded-xl transition-all duration-300 flex items-center border group ${isCollapsed ? 'justify-center p-2' : 'px-3 py-1 lg:px-4 lg:py-2.5 gap-2 lg:gap-3 w-full'} ${identity === id
                                ? 'bg-primary border-primary text-background shadow-lg shadow-primary/20'
                                : 'border-border text-primary hover:bg-primary/5 hover:border-primary/30'
                                }`}
                        >
                            <Icon className={`text-sm lg:text-xl transition-transform duration-500 ${identity === id ? 'scale-110' : 'group-hover:scale-110'}`} />
                            {!isCollapsed && (
                                <span className={`text-[10px] lg:text-xs font-bold uppercase tracking-widest ${identity === id ? '' : 'text-text-main group-hover:text-primary'}`}>{name}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar