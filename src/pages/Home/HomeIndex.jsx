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
                    <div
                        tabIndex={0}
                        className="collapse collapse-plus border border-base-300 bg-base-200"
                    >
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Apa itu E-bimko
                        </div>
                        <div className="collapse-content">
                            <p>
                                E-Bimko adalah layanan Bimbingan Konseling (BK)
                                online yang dibuat oleh SMP Negeri 1
                                Karangmoncol untuk membantu siswa mengatasi
                                berbagai masalah, seperti rasa percaya diri
                                rendah, perundungan, dan masalah keluarga,
                                dengan cara yang mudah diakses dan tanpa stigma
                                negatif. E-Bimko menawarkan informasi tentang
                                masalah remaja dan tips mengatasinya, serta
                                konsultasi dengan konselor pilihan. Layanan ini
                                diharapkan dapat membantu siswa merasa lebih
                                baik, meningkatkan rasa percaya diri, prestasi
                                belajar, dan membangun hubungan yang lebih baik.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-wrap gap-1">
                        <ul>
                            {' '}
                            <il>
                                <Link to={'/app/kotaksaran'}>
                                    <button className="relative inset-x-2 h-20 w-40 card bg-base-300 rounded-box place-items-center btn btn-active btn-neutral text-slate-500 font-semibold text-xl">
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
