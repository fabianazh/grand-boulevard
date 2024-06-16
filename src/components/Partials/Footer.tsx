import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="text-center w-full text-sm py-10 font-medium">
            <span>
                ©{new Date().getFullYear()} Created by{' '}
                <Link
                    href="https://github.com/fabianazh/"
                    className="text-Green font-semibold"
                >
                    Fabian
                </Link>
            </span>
        </footer>
    )
}
