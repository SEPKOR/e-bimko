import Chat from "./bagian/Chat";
import Message from "./bagian/Message";
import Navbar from "./bagian/Navbar";
import Return from "./bagian/Return";

export default function Konsultasi(params) {
    return (
        <div>
            <Navbar />
            <Return />
            <Message/>
            <Chat/>
        </div>
    )
}
