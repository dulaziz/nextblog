import { useState } from "react";
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
const [dropdown, setDropdown] = useState(false);
const [offcanvas, setOffcanvas] = useState(false);
const [search, setSearch] = useState(false);
  const dropdownList = [
    {text: 'internet', href: '#'},
    {text: 'Books', href: '#'},
    {text: 'Open Source', href: '#'},
  ];
return (
<nav className='py-10'>
  <Container>
          <div className='flex items-center'>
            <div className='w-3/12 lg:hidden'>
              <button onClick={() => setOffcanvas(!offcanvas) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
            </div>
            <div className='lg:w-2/12 w-6/12'>
              <Link href="/">
                <a className="flex items-center justify-center lg:justify-start">
                  <div className='w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl'>N</div>
                  Next Blog
                </a>
              </Link>
            </div>
            <div className='w-3/12 lg:hidden text-right'>
              <button onClick={() => setSearch(!search) }>
              <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
            </div>
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcanvas ? 'left-0' : '-left-full'}`}>
              <button className='absolute top-10 right-10 lg:hidden' onClick={() => setOffcanvas(false) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <ul className='lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0'>
                 <li><Link href="/Posts"><a className='hover:underline'>UI Design</a></Link></li>
                 <li><Link href="/Posts"><a className='hover:underline'>Frontend</a></Link></li>
                 <li><Link href="/Posts"><a className='hover:underline'>Backend</a></Link></li>
                 <li className='relative'>
                   <a
                    className='hover:underline cursor-pointer'
                    onClick={() => setDropdown(!dropdown)}
                    >Others
                    </a>
                    {dropdown && (
                   <ul className='absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
                     {dropdownList.map(({text, href}) => (
                       <li key={text} className="border-b border-white/5 last:border-0">
                         <a href={href} className='flex py-3 px-6 hover:bg-gray-700/60'>{text}</a>
                       </li>
                     ))}
                   </ul>
                   )}
                 </li>
              </ul>
            </div>
            <div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0  transition-all ${search ? 'top-10' : '-top-40'}`}>
            <button className='absolute top-3 right-12 lg:hidden' onClick={() => setSearch(false) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <input className='bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12' placeholder='Search ...' />
            </div>
          </div>
  </Container>
      </nav>
    );
}