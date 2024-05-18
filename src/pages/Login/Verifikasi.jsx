import { Link } from 'react-router-dom'
export default function Verifikasi() {
    return (
        <body>
            <div role="alert" className="alert">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>Better Experien in Dark Mode</span>
            </div>
            <img
                width={250}
                className="object-center h-auto m-auto z-auto flex justify-center content-center place-content-center"
                src="\src\assets\company-logo.png"
                alt="company logo"
            />
            <h1 className="flex justify-center font-extrabold text-3xl">
                E-Bimko
            </h1>
            <br />
            <ul className="flex justify-center grid-cols-2 gap-4 h-48 content-center place-content-center flex-nowrap">
                <il>
                    <button className="btn btn-outline btn-accent">
                        <a href="/verifikasi/login">
                            <h1>Login</h1>
                        </a>
                    </button>
                </il>
            </ul>
        </body>
    )
}
