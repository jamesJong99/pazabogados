'use client'
import { useRouter } from 'next/navigation';
import { madamAddress } from './homePageData';
export const goMadarm = () => {
    window.location.href = madamAddress
};