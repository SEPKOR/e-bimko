import { Link } from 'react-router-dom'
export default function Verifikasi() {
    return (
        <body>
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
                    <Link to={'login'}>
                        <button className="btn btn-outline btn-accent">
                            <h1>Murid</h1>
                        </button>
                    </Link>
                </il>
                <il>
                    <Link to={'loginguru'}>
                        <button className="btn btn-outline btn-accent">
                            <h1>Guru</h1>
                        </button>
                    </Link>
                </il>
            </ul>
        </body>
    )
}
