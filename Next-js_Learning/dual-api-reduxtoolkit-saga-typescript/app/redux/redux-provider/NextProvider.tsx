"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux";
import store from "../redux-store/store";



interface NextProviderProps {
    children: ReactNode
}

export const NextProvider = ({ children }: NextProviderProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;

}
