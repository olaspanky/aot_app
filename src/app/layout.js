import './globals.css'
import { Mulish } from 'next/font/google'
import { Providers } from '../store/provider'
import { configureStore } from '@reduxjs/toolkit';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';





const mulish = Mulish({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const theme = createTheme({
  /** Put your mantine theme override here */
});



export default function RootLayout({ children }) {
  return (

    <html lang="en">
    <body className={mulish.className}> 
    <MantineProvider theme={theme} >
    <Providers>
        {children}
    </Providers>
    </MantineProvider> 
    </body>
    </html>
  )
}
