import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => (
  <span className="inline-flex px-2 mr-1 text-xs font-semibold leading-5 text-blue-800 uppercase whitespace-no-wrap bg-blue-100 rounded-full">
    {children}
  </span>
);

export default Tag;
