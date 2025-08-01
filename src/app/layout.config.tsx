import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Logo from "../../public/decoval-logo.jpg";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src={Logo} className="w-8 h-8 rounded-full" alt="logo" />
        Decoval
      </>
    ),
  },
  links: [
    /* {
      text: "Getting started",
      url: "/docs/getting-started/001",
      active: "nested-url",
    }, */
  ],
};
