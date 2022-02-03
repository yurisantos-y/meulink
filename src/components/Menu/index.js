import './menu.css';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://twitter.com/yurisantos_y">
                <BsTwitter color="#FFF" size={24} />
            </a>
            <a className="social" href="https://instagram.com/yurisantos.y">
                <BsInstagram color="#FFF" size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>

        </div>
    )
}