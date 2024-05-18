import { Link } from 'react-router-dom'

export default function DiagnosticMenu() {
    return (
        <div>
            <br />
            <div>
                <h1 className="flex font-extrabold text-2xl relative inset-x-3 text-center">
                    DIAGNOSTIK
                </h1>
            </div>
            <br />
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-200"
            >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Apa itu Diagnostik
                </div>
                <div className="collapse-content">
                    <p>
                        Diagnostik merupakan proses penting untuk memahami latar
                        belakang masalah siswa dan faktor-faktor yang
                        menyebabkannya. Dengan diagnosa yang tepat, konselor
                        dapat menentukan cara membantu siswa dengan lebih
                        efektif.
                    </p>
                </div>
            </div>
            <br />
            <div className="flex flex-wrap gap-3">
                <Link to={'/app/diagnostic/ekstra'}>
                    <button className="grid relative inset-x-2 h-20 w-40 flex-warp card bg-base-300 rounded-box place-items-center btn btn-active btn-neutral text-xl">
                        Ekstrakurikuler
                    </button>
                </Link>
                <Link to={'/app/diagnostic/tesgayabelajar'}>
                    <button className="grid h-20 w-40 flex-warp card bg-base-300 rounded-box place-items-center btn btn-active btn-neutral  text-xl">
                        Tes Gaya Belajar
                    </button>
                </Link>
            </div>
        </div>
    )
}
