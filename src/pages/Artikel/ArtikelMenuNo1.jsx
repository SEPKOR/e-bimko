import { Link, useNavigate } from 'react-router-dom'
export default function ArtikelMenuNo1() {
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
                <br />
            </div>
            <div>
                <a href="/berita">
                    <button>
                        <div className="card card-side bg-base-200 w-96 h-36 shadow-xl">
                            <figure className="">
                                <img
                                    src="\src\assets\company-logo.png"
                                    alt="news"
                                    className="flex relative inset-x-1 right-1 w-28 rounded-box"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">penulis</h2>
                                <textarea
                                    className="textarea"
                                    placeholder="judul/penulis"
                                    disabled
                                ></textarea>
                            </div>
                        </div>
                    </button>
                </a>
            </div>
            <br />
            <div className="flex relative flex-wrap gap-4 place-content-center content-center justify-center">
                <div>
                    <a href="/berita">
                        <button>
                            <div className="card card-side bg-base-200 w-96 h-36 shadow-xl">
                                <figure className="">
                                    <img
                                        src="\src\assets\company-logo.png"
                                        alt="news"
                                        className="flex relative inset-x-1 right-1 w-28 rounded-box"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">penulis</h2>
                                    <textarea
                                        className="textarea"
                                        placeholder="judul/penulis"
                                        disabled
                                    ></textarea>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>{' '}
                <br />
                <div>
                    <a href="/berita">
                        <button>
                            <div className="card card-side bg-base-200 w-96 h-36 shadow-xl">
                                <figure className="">
                                    <img
                                        src="\src\assets\company-logo.png"
                                        alt="news"
                                        className="flex relative inset-x-1 right-1 w-28 rounded-box"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">penulis</h2>
                                    <textarea
                                        className="textarea"
                                        placeholder="judul/penulis"
                                        disabled
                                    ></textarea>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>{' '}
                <br />
                <div>
                    <a href="/berita">
                        <button>
                            <div className="card card-side bg-base-200 w-96 h-36 shadow-xl">
                                <figure className="">
                                    <img
                                        src="\src\assets\company-logo.png"
                                        alt="news"
                                        className="flex relative inset-x-1 right-1 w-28 rounded-box"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">penulis</h2>
                                    <textarea
                                        className="textarea"
                                        placeholder="judul/penulis"
                                        disabled
                                    ></textarea>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
