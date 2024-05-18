import MessageAnonym from "./bagian/MessageAnonym";
import ChatReverse from "./bagian/ChatAnonim";
import Navbar from "./bagian/Navbar";
import Return from "./bagian/Return";

export default function KonsulAnonim(params) {
    return <div>
        <Navbar />
        <Return />
        <MessageAnonym />
        <ChatReverse/>
    </div>
}