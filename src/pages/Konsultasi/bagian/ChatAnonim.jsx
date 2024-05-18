
export default function ChatReverse() {
    return (
        <div>
            <div className="absolute content-center inset-y-96 -bottom-36 ">
                <div className="absolute items-center w-80 inset-x-5 ">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Message"
                            inputMode="text"
                        />{' '}
                        <button type="submit" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70 end"
                            >
                                <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </label>
                </div>
            </div>
        </div>
    )
}
