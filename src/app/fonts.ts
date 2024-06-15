import { Montserrat, Playfair, Pinyon_Script } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const playfair = Playfair({
    subsets: ['latin'],
    display: 'swap',
})

export const pinyon = Pinyon_Script({
    display: 'swap',
    weight: '400',
    subsets: ['latin'],
})
