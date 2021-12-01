// import { useEffect } from 'react';
import dynamic from 'next/dynamic';
// const Header = dynamic(() => import('./Header'));
// const Footer = dynamic(() => import('./Footer'));
import Sidebar from './Sidebar_desktop'
// const MobileSidebar = dynamic(() => import('./Sidebar_mobile'));

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main>{children}</main>
            </div>
        </>
    )
}