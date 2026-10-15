import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {title: 'Ugo.com'};
export default function RootLayout({children}: {children: ReactNode}){
    return (
        <html>
            <head>
                random ass app
            </head>
            <body>
                <p>A map app</p>
            </body>
        </html>
    );
}