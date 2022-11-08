import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <Link className="title" to="/">
                Final project : Quiz TIME
            </Link>
            <hr className="divider" />
        </div>
    );
}