import { ThemeType } from '../types';
import { IconType } from 'react-icons';
import { HiChip } from 'react-icons/hi';
import { MdOutlineArchitecture, MdLensBlur } from 'react-icons/md';

export const TITLES: Record<ThemeType, string> = {
    [ThemeType.Architect]: "Lead Blockchain Architect",
    [ThemeType.Neural]: "AI Researcher",
    [ThemeType.Matrix]: "Senior Software Engineer",
};

export const IDENTITIES: { id: ThemeType; name: string; icon: IconType }[] = [
    { id: ThemeType.Architect, name: 'Architect', icon: MdOutlineArchitecture },
    { id: ThemeType.Neural, name: 'Neural Network', icon: MdLensBlur },
    { id: ThemeType.Matrix, name: 'Matrix', icon: HiChip },
];
