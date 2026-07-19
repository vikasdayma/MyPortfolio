"use client";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";
const CHANNELS = [
  { key: "email", value: "vikasdayma900@gmail.com", href: "mailto:vikasdayma900@gmail.com", icon: SiGmail },
  { key: "phone", value: "+91 9232094322", href: "tel:+919232094322", icon: FaPhone },
  { key: "github", value: "github.com/vikasdayma", href: "https://github.com/vikasdayma", icon: FaGithub },
  { key: "linkedin", value: "linkedin.com/in/vikas-dayma-react", href: "https://www.linkedin.com/in/vikas-dayma-react/", icon: FaLinkedin },
];

export default function ContactPage() {
  return (
    <main id="contact" className="flex-1 px-4 py-16 sm:px-8 md:px-12">
      <div className="">
      
        <div className="overflow-hidden rounded-2xl border border-[#232323] bg-black ">
          <div className="flex items-center gap-2 border-b border-[#232323] bg-[#111214] px-5 py-3.5">
         
            <span className="ml-2 font-mono text-[12px] tracking-[0.05em] text-[#5a5a56]">
              contact.json
            </span>
          </div>

          <div className="px-6 py-7 sm:px-8">
            <pre className="mb-6 overflow-x-auto font-mono text-[13.5px] leading-[2] sm:text-[14.5px]">
              <code>
                <span className="text-[#5a5a56]">{"{"}</span>
                {"\n"}
                {CHANNELS.map((c, i) => (
                  <span key={c.key}>
                    {"  "}
                    <span className="text-[#c7f547]">{c.key}</span>
                    <span className="text-[#5a5a56]">: </span>
                    <span className="text-[#e8e6df]">&quot;{c.value}&quot;</span>
                    <span className="text-[#5a5a56]">
                      {i < CHANNELS.length - 1 ? "," : ""}
                    </span>
                    {"\n"}
                  </span>
                ))}
                <span className="text-[#5a5a56]">{"}"}</span>
              </code>
            </pre>

            <div className="flex gap-3 border-t border-[#232323] pt-6">
              {CHANNELS.map(({ key, href, icon: Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={key}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}