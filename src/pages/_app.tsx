import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { useRouter } from "next/router";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const MyApp: AppType = ({ Component, pageProps }) => {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      {/* {isPublicPage ? (
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
        </>
      )} */}
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
