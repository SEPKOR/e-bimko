import { Link } from 'react-router-dom'
import ArtikelMenuNo1 from './ArtikelMenuNo1'

export default function ArtikelMenu() {
    return (
        <div>
            <br />
            <h1 className="flex font-extrabold text-2xl text-center justify-center">
                ARTIKEL
            </h1>
            <br />
            <div className="flex flex-wrap gap-6 place-content-center content-center justify-center">
                <button onClick className="btn btn-neutral btn-lg btn-wide ">
                    <Link to={'/app/artikel/kesehatan'}>Kesehatan</Link>
                </button>

                <button onClick className="btn btn-neutral btn-lg btn-wide ">
                    <Link to={'/app/artikel/tipsandtrick'}>Tips And Trick</Link>
                </button>

                <button onClick className="btn btn-neutral btn-lg btn-wide ">
                    <Link to={'/app/artikel/berita'}>Berita</Link>
                </button>

                <button onClick className="btn btn-neutral btn-lg btn-wide ">
                    <Link to={'/app/artikel/outdoorlearning'}>
                        Outdoor Learning{' '}
                    </Link>
                </button>
            </div>
        </div>
    )
}
