import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex min-h-screen w-full'>
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
