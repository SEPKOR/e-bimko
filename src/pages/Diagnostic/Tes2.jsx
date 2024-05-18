import { Link, useNavigate } from 'react-router-dom'
export default function TGB() {
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
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim minus culpa, dolores dolorum ea deserunt itaque nisi
                    fugiat, neque laboriosam officia illo? Sapiente, quisquam.
                    Facilis numquam iusto repellendus vero! Minima!
                </p>
            </div>
            <div>
                {' '}
                <a href="">
                    <button className="btn btn-outline absolute w-20 inset-x-36 inset-y-96">
                        Mulai
                    </button>
                </a>
            </div>
        </div>
    )
}
