import {AppProps} from 'next/dist/shared/lib/router/router';
import React, {PropsWithChildren} from 'react';

import DictionaryProvider from "@/app/[lang]/dictionary-provider";
import {de, en, es, fr, it} from "../constants"
import Cookies from "js-cookie";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <div>
                <Providers>
                    <Component {...pageProps} />
                </Providers>
            </div>
        </>
    );
}

export default MyApp;

function Providers<T>({children}: PropsWithChildren<T>) {
    const lang = Cookies.get("NEXT_LOCALE") || "en";
    let dict;
    if (lang === "en") dict = en;
    if (lang === "es") dict = es;
    if (lang === "it") dict = it;
    if (lang === "fr") dict = fr;
    if (lang === "de") dict = de;
    return (
        // @ts-ignore
        <DictionaryProvider dictionary={dict}>
            {children}
        </DictionaryProvider>
    );
}
