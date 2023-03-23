import Link from 'next/link';
import { ReactNode } from 'react';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-2 items-start">
        {items.map((crumb, i) => {
          const isLastItem = i === items.length - 1;
          if (!isLastItem) {
            return (
              <>
                <Link
                  href={crumb.path}
                  key={i}
                  className="text-indigo-500 hover:text-indigo-400 hover:underline"
                >
                  {crumb.label}
                </Link>
                {/* separator */}
                <span> {'/'} </span>
              </>
            );
          } else {
            return crumb.label;
          }
        })}
      </div>
    </div>
  );
};
export default Breadcrumbs;
