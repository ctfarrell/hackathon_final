import App from "next/app";
import ErrorPage from "next/error";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import { getStrapiURL } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import { ChakraProvider, Button } from '@chakra-ui/react'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider"; 
import getLibrary from "../utils/getLibrary";
import { useEagerConnect } from "../utils/hooks";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }
  
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps}>
            </Component>
          </QueryClientProvider>  
        </ChakraProvider>
      </Web3ReactProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch(
      getStrapiURL(
        `/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*&locale=${locale}`
      )
    );
    const globalData = await res.json();
    const globalDataAttributes = globalData.data.attributes;

    return { ...appProps, pageProps: { global: globalDataAttributes } };
  } catch (error) {
    return { ...appProps };
  }
};

export default MyApp;
