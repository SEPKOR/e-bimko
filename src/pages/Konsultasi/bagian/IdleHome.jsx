import { Link } from 'react-router-dom'
import Chat from './Chat'
import ChatReverse from './ChatAnonim'
import Return from './Return'

export default function IdleHome() {
    return (
        <div>
            <Return/>
            <div className="relative text-center top-60 text-2xl font-bold">
                <h1>Welcome</h1>
                <h4 className="font-semibold text-sm">
                    Apakah kau akan memulai dengan identitas aslimu
                </h4>
            </div>
            <div className="flex relative justify-center inset-y-64 gap-4">
                <Link to={'chat'}>
                    <button className="btn btn-outline w-16">Iya</button>
                </Link>
                <Link to={'chatanonim'}>
                    <button className="btn btn-outline w-16">Tidak</button>
                </Link>{' '}
            </div>
        </div>
    )
}
