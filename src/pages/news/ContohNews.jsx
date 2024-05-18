import { Link, useNavigate } from 'react-router-dom'
export default function Berita(params) {
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
                <title>News</title>
            </div>
            <div className="flex content-center justify-center h-40">
                <img src="src\assets\react.svg" alt="" />
            </div>
            <br />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, aspernatur maiores expedita nostrum excepturi rem
                    ratione, et cumque, nemo praesentium esse laboriosam ullam?
                    Et cumque accusantium cum, quos officia voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, aspernatur maiores expedita nostrum excepturi rem
                    ratione, et cumque, nemo praesentium esse laboriosam ullam?
                    Et cumque accusantium cum, quos officia voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, aspernatur maiores expedita nostrum excepturi rem
                    ratione, et cumque, nemo praesentium esse laboriosam ullam?
                    Et cumque accusantium cum, quos officia voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, aspernatur maiores expedita nostrum excepturi rem
                    ratione, et cumque, nemo praesentium esse laboriosam ullam?
                    Et cumque accusantium cum, quos officia voluptatum.
                </p>
            </div>
        </div>
    )
}
