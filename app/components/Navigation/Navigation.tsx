"use client";
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import Link from 'next/link';

type dataType = {
  name: string;
  location: string
}
type NavigationProps = {
  data: dataType[]
}


function Navigation({ data } : NavigationProps) {
  const pathname = usePathname();

  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      {
        data?.map((tab, i) => {
          const isActive = pathname === tab.location;
          return (

          <li key={i} className="nav-item" role="presentation">
            <Link href={tab.location} className={`nav-link ${isActive ? 'active' : ""}`} id="ex1-tab-1"
              >
                {tab.name}
            </Link>
          </li>
          )
        })
      }
    </ul>
  );
}

export default Navigation;