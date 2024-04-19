import React, {Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from 'react';
import {SingleService} from '../../types';
import {getDictionary} from "@/app/[lang]/i18n";
import DictionaryProvider from "@/app/[lang]/dictionary-provider";

interface ServicesContextProps {
    services: SingleService[] | null;
    setServices: Dispatch<SetStateAction<SingleService[] | null>>;
}

export const ServicesContext = React.createContext<ServicesContextProps | null>(null);

export async function ServicesContextProvider<T>({children}: PropsWithChildren<T>) {
    const [services, setServices] = useState<SingleService[] | null>(null);
    const dictionary = await getDictionary("en")

    return (
        <DictionaryProvider dictionary={dictionary}>

            <ServicesContext.Provider
                value={{
                    services,
                    setServices,
                }}
            >
                {children}
            </ServicesContext.Provider>
        </DictionaryProvider>

    );
}

export function useServicesContext() {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error('useServicesContext can only be used inside ServicesContextProvider');
    }
    return context;
}
