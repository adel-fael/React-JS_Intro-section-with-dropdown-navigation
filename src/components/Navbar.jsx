import { logo } from '../assets'
import Dropdown from './Dropdown'
import Sidebar from './SideBar'

const Navbar = () => {
  return (
    <nav className="m-4">
      <div className="flex justify-between p-4">
        <ul className="flex">
          <li>
            <img src={logo} alt="snap logo" />
          </li>
          <li className="hidden mobile:block">
            <Dropdown />
          </li>
        </ul>

        <ul>
          <li className="hidden mobile:block">
            <a
              href="#"
              className="text-gray-500 text-lg  hover:text-black  transition duration-400 px-10 "
            >
              Login
            </a>
            <a
              href="#"
              className="text-gray-500 text-lg border-2 rounded-xl border-gray-400 hover:text-black  hover:border-black transition duration-400 px-4 py-2"
            >
              Register
            </a>
          </li>
        </ul>

        
          <div className="block mobile:hidden">
            <Sidebar />
          </div>

      </div>
    </nav>
  )
}

export default Navbar
