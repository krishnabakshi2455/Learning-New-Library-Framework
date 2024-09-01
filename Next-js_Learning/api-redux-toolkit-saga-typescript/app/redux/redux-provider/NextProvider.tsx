"use client"
import { ReactNode } from "react";
import { Provider, ProviderProps } from "react-redux";
import store from "../redux-store/store";

interface NextProviderProps {
    children: ReactNode;
    // NextProviderProps: This TypeScript interface defines the props that the NextProvider component will accept.
    // children: ReactNode: Specifies that the children prop can be any valid React node, allowing you to pass in JSX elements or other renderable content.
}



export const NextProvider = ({ children }: NextProviderProps): JSX.Element => {
    return <Provider store={ store } > { children } </Provider>;

    // NextProvider: This is a functional component that accepts NextProviderProps as its props
    // Destructuring Props: { children } destructures the children prop from NextProviderProps.
    // Return Type: The function returns a JSX.Element, which is the type of value that a React component returns.In TypeScript, this represents a React element to be rendered.
    // <Provider store={store}>: This wraps the children with the Redux Provider component, passing in the store as a prop. This makes the Redux store available to all components within this provider.
    // { children }: This represents the content that will be wrapped by the Provider.It allows you to render whatever is passed as children within the NextProvider component.

};