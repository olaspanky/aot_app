import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/logo.png';
import vect from '../../../public/vect.png';
import dash from '../../assets/dash.png';
import users from '../../assets/Vectoruserdetails.png';
import disp from '../../assets/disp.png';
import promo from '../../assets/Vectorpromo.png';
import staff from '../../assets/Vectorstaffs.png';
import control from '../../assets/Vectorusercontrol.png';
import support from '../../assets/Vectorsupport.png';
import Logout from "../components/Logout"
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const currentRoute = usePathname();
  const user = useSelector(state => state.user); // Access the entire user object
  const username = user && user.name; // Access the user's name

  const [open, setOpen] = useState(true)

  const Menus = [
    { title: 'Dashboard', src: dash, link: 'dashboard', path: '/dash/dashboard' },
    { title: 'Users Details', src: users, link: 'userdetails', path: '/dash/userdetails' },
    { title: 'Disputes', src: disp, link: 'disputes', path: '/dash/disputes' },
    { title: 'Promotions', src: promo, link: 'promotions', path: '/dash/promotions' },
    { title: 'Staffs', src: staff, link: 'staffs', path: '/dash/staffs' },
    { title: 'User Control', src: control, link: 'controls', path: '/dash/controls' },
    { title: 'Support', src: support, link: 'faq', path: '/dash/faq' },
    { title: 'test', src: support, link: 'test', path: '/dash/test' },
  ];

  return (
    <div className="flex shadow-md">
      <div
        className={`${
          open ? 'w-64' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          className={`cursor-pointer top-0 rounded-full ${!open ? 'rotate-180' : ''} ${
            open ? 'w-[60px]' : ''
          } `}
          onClick={() => setOpen(!open)}
        >
          <Image src={logo} width={60} height={60} alt="image" />
        </div>
        <div className="w-full justify-center items-center gap-3 flex mt-7 mb-4">
          <div className="rounded-full bg-gray-200 grid place-content-center w-[60px] h-[60px] overflow-clip">
            <Image src={vect} alt="" width={20} height={20} />
          </div>
          <div className="flex flex-col text-center">
            <span className={`${open ? '' : 'hidden'} text-black text-[20px]`}>{username}</span>
            <span className={`${open ? '' : 'hidden'} text-black text-[14px]`}>Administrator</span>
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2  cursor-pointer hover:text-[#FFE5CC] text-[#040404] items-center gap-x-6 ${
                open ? 'ml-[20%]' : ''
              } ${currentRoute === Menu.path ? 'bg-[#FFE5CC]' : ''}`}
            >
              <Link href={Menu.link}>
                <div className="flex gap-3 items-center p-1">
                  <Image src={Menu.src} width={20} height={20} alt="image" />
                  <span className={`${!open && 'hidden'} origin-left duration-200 text-[80%]`}>
                    {Menu.title}
                  </span>
                </div>
              </Link>

            </li>
          ))}
        </ul>
        <Logout/>

      </div>
    </div>
  );
};

export default Sidebar;
