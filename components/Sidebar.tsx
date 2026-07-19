"use client";

import { Home, Briefcase, User, Zap, Mail, Download, Contact } from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NAV_ITEMS = [
  { label: "HOME", icon: Home, href: "#hero" },
  { label: "WORK", icon: Briefcase, href: "#work" },
  { label: "ABOUT", icon: User, href: "#about" },
  { label: "CONTACT", icon: Contact, href: "#contact" },
];

const SOCIALS = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/vikasdayma",
    external: true,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikas-dayma-react/",
    external: true,
  },
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:vikasdayma900@gmail.com", 
    external: false,
  },
  {
    icon: Download,
    label: "Resume",
    href: "/VikasDaymaCv.pdf",
    external: false,
    download: true,
  },
];

type SidebarProps = {
  activeHref?: string;
};

export default function Sidebar({ activeHref = "/" }: SidebarProps) {
  const pathname=usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-50 flex-col gap-12 border-r border-[#232323]  p-10 xl:w-75 2xl:flex">
      <div className="flex flex-col items-center  gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#141412] to-[#0d0a17] text-[22px] font-semibold text-[#fffefe] border-2">
          VK
        </div>
        <div>
          <h1 className="font-mono text-[22px] font-bold tracking-wide text-[#f2f2ee]">
             VIKAS DAYMA
          </h1>
          <p className="mt-1 font-mono text-[13px] tracking-[0.12em] text-[#dddd12]">
            FRONTEND DEVELOPER
          </p>
        </div>
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, label, href, external, download }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={download ? true : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ label, icon: Icon, href }) => {
          const isActive = href === pathname;
          return (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-lg border-l-2 px-5 py-3.5 font-mono text-[14px] tracking-[0.1em] transition-colors ${
                isActive
                  ? " bg-[#c7f547]/[0.08] "
                  : "border-transparent text-[#8a8a85] hover:bg-white/[0.03] hover:text-[#f2f2ee]"
              }`}
            >
              <Icon size={20} />
              {label}
            </a>
          );
        })}
      </nav>

      <p className="mt-auto font-mono text-[11px] tracking-[0.08em] text-[#4a4a48]">
        © 2026 — BUILT WITH NEXT.JS
      </p>
    </aside>
  );
}