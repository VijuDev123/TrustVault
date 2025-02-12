// import MobileNav from "@/components/MobileNav";
// import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";
import { IoLogoCodepen } from "react-icons/io";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'viju', lastName: 'vastrad' };

    if (!loggedIn) redirect('/sign-in')

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <IoLogoCodepen className="size-[24px] text-[#FF4C29] w-10 h-10" />

                    {/* <Image src="/icons/logo.svg" width={30} height={30} alt="logo" /> */}
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}