export default function MessageAnonym () {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Asep
                </div>
                <div className="chat-bubble">Bro pinjam 100</div>
                <div className="chat-footer opacity-50">12.45</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Anonym
                </div>
                <div className="chat-bubble">Fuck your self</div>
                <div className="chat-footer opacity-50">12:46</div>
            </div>
        </div>
    )
}
