import React from 'react';

interface CopyrightProps {
  companyName?: string;
  year?: number;
}

const Copyright: React.FC<CopyrightProps> = ({
  companyName = 'Hendra Cloud, Inc',
  year = new Date().getFullYear()
}) => {
  return (
    <div className="text-sm text-gray-400 lowercase">
      &copy; {year} {companyName}. Semua hak dilindungi undang-undang.
    </div>
  );
};

export default Copyright;
