"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavigationProps } from '@/app/types/props.type';

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