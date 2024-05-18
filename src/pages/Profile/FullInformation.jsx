import { useNavigate } from 'react-router-dom'
export default function MyInformation(params) {
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
            <div>
                <h1 className="text-2xl relative inset-x-3 font-bold">DATA DIRI</h1>
            </div>
            <br />
            <div>
                <form action="">
                    <div className="grid grid-flow-row auto-rows-max gap-2">
                        <label className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                defaultValue={'Developer'}
                                disabled
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M17.58 4H14V2h7v7h-2V5.41l-3.83 3.83A5 5 0 0 1 12 16.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1A5 5 0 0 1 6 12a5 5 0 0 1 5-5c1 0 1.96.3 2.75.83zM11 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                defaultValue={'Gender'}
                                disabled
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 ">
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
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                            </svg>

                            <input
                                type="date"
                                className="grow"
                                defaultValue={12 / 6 / 2010}
                                disabled
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 25 25"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                                />
                            </svg>
                            <input
                                class="remove-arrow"
                                type="text"
                                className="grow"
                                defaultValue={'NISN'}
                                maxLength={10}
                                inputMode="numeric"
                                disabled
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
