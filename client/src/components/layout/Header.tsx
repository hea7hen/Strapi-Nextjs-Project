"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import type { LinkProps, LogoProps } from "../../types";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  console.log("Header component received data:", JSON.stringify(data, null, 2));
  if (!data) {
    console.log("No data received in Header component");
    return null;
  }
  
  const { logo, navigation, cta } = data;
  console.log("Header component destructured data:", {
    logo: JSON.stringify(logo, null, 2),
    navigation: JSON.stringify(navigation, null, 2),
    cta: JSON.stringify(cta, null, 2)
  });

  if (!logo?.image?.url) {
    console.error("Missing logo image URL");
    return null;
  }
  
  return (
    <header className="header">
      <Link href="/">
        <StrapiImage 
          src={logo.image.url} 
          alt={logo.image.alternativeText || "Logo Image"} 
          width={120} 
          height={120} 
          className="header__logo"
        />
      </Link>
      <ul className="header__nav">
        {navigation?.map((item) => (
          <li key={item.id}>
            <Link href={item.href} target={item.isExternal ? "_blank" : "_self"}>
              <h5>{item.text}</h5>
            </Link>
          </li>
        ))}
      </ul>
      {cta && (
        <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
          <button className="btn btn--black btn--small">{cta.text}</button>
        </Link>
      )}
    </header>
  );
}