import { useNavigate } from 'react-router-dom'
export default function Faq() {
     let navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)} className="btn btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                    </svg>
                </button>
            </div>
            <br />
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
                        E-Bimko adalah layanan Bimbingan Konseling (BK) online
                        yang dibuat oleh SMP Negeri 1 Karangmoncol untuk
                        membantu siswa mengatasi berbagai masalah, seperti rasa
                        percaya diri rendah, perundungan, dan masalah keluarga,
                        dengan cara yang mudah diakses dan tanpa stigma negatif.
                        E-Bimko menawarkan informasi tentang masalah remaja dan
                        tips mengatasinya, serta konsultasi dengan konselor
                        pilihan. Layanan ini diharapkan dapat membantu siswa
                        merasa lebih baik, meningkatkan rasa percaya diri,
                        prestasi belajar, dan membangun hubungan yang lebih
                        baik.
                    </p>
                </div>
            </div>
        </div>
    )
}
