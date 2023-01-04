import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className="bg-yellow-100">
            <div>Nav bar</div>
            <div className="flex">
                <Link to="/" className="text-blue-500 hover:text-indigo-600">Home</Link>
                <Link to="/people" className="ml-[20px] text-blue-500	hover:text-indigo-600">People</Link>
                <Link to="/accounts" className="ml-[20px] text-blue-500	hover:text-indigo-600">Accounts</Link>
            </div>
        </div>
    )
}