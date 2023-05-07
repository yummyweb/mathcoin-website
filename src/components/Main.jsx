import "./Main.css"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

function Main() {
    return (
        <div className="main">
            <div className="left">
                <h1>$MATH</h1>
                <p>A mathematical deflationary token created by Memetoshi Mathamoto with a developer first approach and infused with incredible memetic powers.</p>
                <div className="icons">
                    <AiOutlineTwitter color="#1A8CD8" size={50} />
                    <FaDiscord color="#404EED" size={50} />
                    <img className="solscan-icon" src="https://pbs.twimg.com/profile_images/1613087186932596736/cJiIPd2s_400x400.jpg" />
                    <img className="raydium-icon" src="https://pbs.twimg.com/profile_images/1432652054665723904/glv2HQ1o_400x400.jpg" />
                </div>
            </div>
            <div className="right">
                <img src="https://pbs.twimg.com/profile_images/1654516965199970304/j2zHHZo6_400x400.jpg" alt="Mathcoin Logo" />
            </div>
        </div>
    )
}

export default Main