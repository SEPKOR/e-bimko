
import { Link, useNavigate } from 'react-router-dom'
export default function KotakIsi() {
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
            <h1 className="font-bold text-2xl relative inset-x-3">
                Kotak Saran
            </h1>
            <br />
            <textarea
                placeholder="saran"
                className="flex relative textarea inset-x-5 justify-center content-center textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
            <br />
            <input
                type="file"
                className="relative inset-x-5 file-input file-input-xs file-input-bordered w-60 max-w-xs"
                placeholder="haha"
            />
            <Link to={'terimakasih'}>
                <input
                    type="submit"
                    value="Submit"
                    className="btn relative inset-y-60 inset-x-3"
                />
            </Link>{' '}
        </div>
    )
}
