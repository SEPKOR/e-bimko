import { Link } from 'react-router-dom'

export default function ProfileIndex() {
    return (
        <div>
            <div className="card card-body bg-base-300 shadow-xl">
                <div>
                    <h1 class="text-center font-extrabold text-3xl">PROFILE</h1>
                </div>
                <br />
                <div className="avatar flex justify-center content-center">
                    <div className="w-24 rounded-full ring ring-neutral-600 ring-offset-base-300">
                        <img src="\src\assets\company-logo.png" />
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text-center text-xl font-sans font-semibold">
                        Nama
                    </h1>
                </div>
            </div>
            <br />
            <ul className="flex relative grid-flow-col flex-col gap-1 ">
                <il>
                    <div>
                        <Link to={'informasi'}>
                            <button className="btn btn-active relative w-80 bg-zinc-800">
                                Informasi
                            </button>
                        </Link>
                    </div>
                </il>
                <il>
                    <div>
                        <Link to={'/app/faq'}>
                            <button className="btn btn-active relative w-80 bg-zinc-800">
                                FAQ
                            </button>
                        </Link>
                    </div>
                </il>
            </ul>
        </div>
    )
}
