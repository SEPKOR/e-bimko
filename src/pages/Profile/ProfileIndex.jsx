import { Link } from 'react-router-dom'

export default function ProfileIndex() {
    return (
        <div>
            <div className="card card-body bg-base-300 shadow-xl flex flex-wrap">
                <div>
                    <h1 class="text-center font-extrabold text-3xl">PROFILE</h1>
                </div>
                <br />
                <div className="avatar flex justify-center relative content-center">
                    <div className="w-24 rounded-full ring ring-neutral-600 ring-offset-base-300">
                        <img src="\src\assets\company-logo.png" />
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text-center text-xl font-sans font-semibold">
                        Developer
                    </h1>
                </div>
            </div>
            <br />
            <ul className="flex flex-wrap relative grid-flow-col flex-col gap-1 place-content-center justify-center content-center">
                <il>
                    <div>
                        <Link to={'informasi'}>
                            <button className="relative w-60 max-w-96 btn btn-active bg-zinc-800">
                                Informasi
                            </button>
                        </Link>
                    </div>
                </il>
                <il>
                    <div>
                        <Link to={'/app/faq'}>
                            <button className="relative w-60 max-w-96 btn btn-active bg-zinc-800">
                                FAQ
                            </button>
                        </Link>
                    </div>
                </il>
            </ul>
        </div>
    )
}
