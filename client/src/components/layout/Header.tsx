"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import type { LinkProps, LogoProps } from "../../types";

// export interface LinkProps {
//   id: number;
//   text: string;
//   href: string;
//   isExternal: boolean;
// }

// export interface ImageProps {
//   id: number;
//   documentId: string;
//   url: string;
//   alternativeText: string;
// }

// export interface LogoProps {
//   logoText: string;
//   image: ImageProps;
// }

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/";

  if (!data) return null;

  const { logo, navigation, cta } = data;
  return (
    <header className={`header ${headerLight ? "header--light" : ""}`}>
      <Link href="/">
        <StrapiImage
          src={logo.image.url}
          alt={logo.image.alternativeText || "Logo Image"}
          className={`header__logo header__logo--${
            headerLight ? "white" : "black"
          }`}
          width={120}
          height={120}
        />
      </Link>
      <ul className="header__nav">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <h5>{item.text}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
        <button className="btn btn--black btn--small">{cta.text}</button>
      </Link>
    </header>
  );
}