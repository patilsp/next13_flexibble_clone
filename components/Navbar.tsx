import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constant"
import AuthProviders from "@/components/AuthProviders"

const Navbar = () => {
    const session = null;
  return (
    <section>
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={120}
                        height={45}
                        alt="Logo"
                    />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}

                </ul>
            </div>
            
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        userPhoto
                        <Link href="/create-project">
                            Share Work
                        </Link>

                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    </section>
  )
}

export default Navbar
