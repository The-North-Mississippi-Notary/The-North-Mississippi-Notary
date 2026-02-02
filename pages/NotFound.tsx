
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-black text-brandNavy/10 absolute -z-10">404</h1>
      <h2 className="text-4xl font-bold text-brandNavy font-serif mb-4">Stamp Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">The page you're looking for doesn't seem to exist. It might have moved or was never notarized.</p>
      <Link to="/" className="bg-brandGold text-brandNavy font-bold py-3 px-8 rounded-lg hover:bg-brandGoldHover transition shadow-lg">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
