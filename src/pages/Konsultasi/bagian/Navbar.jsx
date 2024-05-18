import Sidebar from './Sidebar'

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        
                    </div>
                    <div className="dropdown dropdown-bottom absolute inset-x-3">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-start">
                                    Profile
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <h1 className='absolute inset-x-16 font-semibold'>Nama</h1>
            </div>
            <hr />
        </div>
    )
}
