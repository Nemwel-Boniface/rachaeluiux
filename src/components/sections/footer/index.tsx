import Link from "next/link";

const currentYear = new Date().getFullYear();

function GmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
      <path fill="#1e88e5" d="M3,16.2l3.819,1.807L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0 C4.924,8,3,9.924,3,12.298z" />
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#1769FF"
        d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.16 1.35-.49.35-1.05.6-1.67.76-.63.16-1.27.24-1.93.24H0V4.51h6.938v-.007zm-.34 5.65c.574 0 1.05-.135 1.425-.4.37-.27.557-.7.557-1.29 0-.33-.06-.6-.18-.82-.12-.22-.29-.39-.5-.51-.21-.12-.45-.2-.72-.25-.27-.04-.56-.06-.86-.06H3.19v3.33h3.408zm.157 5.925c.32 0 .625-.03.913-.09.29-.06.543-.17.758-.32.215-.15.387-.35.51-.61.124-.26.187-.59.187-.99 0-.79-.22-1.35-.66-1.69-.44-.34-1.02-.51-1.73-.51H3.19v4.21h3.565zm9.1-1.574c.39.38.955.57 1.693.57.527 0 .98-.13 1.36-.4.377-.27.61-.56.697-.87h2.68c-.43 1.33-1.09 2.28-1.97 2.85-.88.57-1.95.86-3.2.86-.87 0-1.65-.14-2.34-.42-.69-.28-1.28-.67-1.76-1.18-.48-.51-.85-1.12-1.1-1.83-.25-.71-.38-1.49-.38-2.34 0-.82.13-1.59.4-2.3.267-.71.643-1.32 1.13-1.83.49-.51 1.08-.91 1.77-1.2.69-.29 1.46-.43 2.3-.43.94 0 1.76.18 2.46.54.7.36 1.28.85 1.73 1.47.45.62.78 1.33.97 2.13.19.8.26 1.64.2 2.52h-7.99c.04.87.28 1.51.67 1.89l-.347-.03zM21.3 12.66c-.31-.34-.84-.51-1.58-.51-.46 0-.845.08-1.15.23-.304.15-.548.34-.73.56-.18.22-.31.46-.386.71-.076.25-.12.49-.13.71h4.73c-.1-.77-.44-1.36-.754-1.7zM14.5 6.51h5.02V7.9H14.5V6.51z"
      />
    </svg>
  );
}

const contacts = [
  {
    id: "email",
    label: "rachelngotho9@gmail.com",
    href: "mailto:rachelngotho9@gmail.com",
    icon: <GmailIcon />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/rachael",
    icon: <LinkedInIcon />,
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://behance.net/rachael",
    icon: <BehanceIcon />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#EDEAE4]">

      {/* Main CTA block */}
      <div className="px-5 md:px-8 pt-20 pb-16 md:pt-24 md:pb-20 flex flex-col items-center text-center gap-8">

        {/* Headline */}
        <h2 className="text-[40px] md:text-[72px] lg:text-[80px] font-semibold text-[#1a1a1a] tracking-tight leading-[1.05] max-w-4xl">
          Let&apos;s build something meaningful
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] md:text-[17px] text-[#5a5652] leading-relaxed max-w-lg">
          Whether you&apos;re launching a new product or improving an existing one,
          I&apos;d love to hear about it.
        </p>

        {/* CTA button */}
        <Link
          href="mailto:rachelngotho9@gmail.com"
          className="w-full max-w-xs md:w-auto inline-flex items-center justify-center bg-[#C4714A] hover:bg-[#b5603a] text-white text-[16px] font-medium px-10 py-4 rounded-xl transition-colors"
        >
          Schedule a Conversation
        </Link>

        {/* Contact links — column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 mt-2">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              target={contact.id !== "email" ? "_blank" : undefined}
              rel={contact.id !== "email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2.5 text-[15px] text-[#1a1a1a] hover:text-[#C4714A] transition-colors"
            >
              {contact.icon}
              <span>{contact.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d4cfc9] px-5 md:px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-[13px] text-[#7a7672]">
            © {currentYear} · All rights reserved
          </p>
          <p className="text-[13px] text-[#7a7672]">
            Designed by{" "}
            <Link
              href="https://behance.net/rachael"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4714A] transition-colors"
            >
              Rachael
            </Link>
            {" · "}Developed by{" "}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4714A] transition-colors"
            >
              Nemwel
            </Link>
          </p>
        </div>
      </div>

    </footer>
  );
}
