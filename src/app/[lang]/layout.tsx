import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {getDictionary, Locale} from "@/app/[lang]/i18n";
import DictionaryProvider from "@/app/[lang]/dictionary-provider";
import "../../styles/global.scss";
import "./global.scss";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "WoWMoons",
    description: "Design",
};


export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'de'}, {lang: 'es'}, {lang: 'fr'}, {lang: 'it'},]
}


export default async function RootLayout({
                                             children,
                                             params,
                                         }: Readonly<{
    children: React.ReactNode;
    params: {
        lang: Locale,
    };
}>) {
    const dictionary = await getDictionary(params.lang || "en")

    return (
        <html lang={params.lang}>
        <body className="adsdasda">
        <DictionaryProvider dictionary={dictionary}>
            {children}
        </DictionaryProvider>
        </body>
        </html>
    );
}

