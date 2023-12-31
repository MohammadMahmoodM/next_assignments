import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 border-t border-gray-100 text-black-100">
    
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((footerLink) => {
            return (
              <div key={footerLink.title} className="footer__link">
                <h3 className="font-bold">{footerLink.title}</h3>

                {footerLink.links.map((LinkItem) => {
                  return (
                    <Link
                      key={LinkItem.title}
                      href={LinkItem.url}
                      className="text-gray-500"
                    >
                      {LinkItem.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
