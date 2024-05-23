import { Link } from 'react-router-dom'

export default function HomeIndex() {
    return (
        <div>
            <br />
            <div>
                <h3 className="relative inset-x-3 font-semibold">
                    {' '}
                    Hai (nama)
                </h3>
                <h1 className="font-extrabold text-2xl relative inset-x-3">
                    SELAMAT DATANG
                </h1>
                <br />
                <div>
                    <br />
                    <div>
                        <ul className="flex justify-center grid-cols-2 gap-4 content-center place-content-center flex-nowrap">
                            {' '}
                            <il>
                                <Link to={'/app/kotaksaran'}>
                                    <button className="relative inset-x-1 h-20 w-40 card bg-base-300 rounded-box place-items-center btn btn-active btn-neutral text-slate-500 font-semibold text-xl">
                                        Kotak Saran
                                    </button>
                                </Link>
                            </il>
                            <il>
                                <Link to={'/app/developer'}>
                                    {' '}
                                    <button className="relative h-20 w-40 card bg-base-300 rounded-box place-items-center btn btn-active btn-neutral text-slate-500 font-semibold text-xl">
                                        Developer
                                    </button>
                                </Link>
                            </il>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
