import { BookOpen, Home, LogOut, Users } from 'react-feather';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import authService from '../../services/AuthService';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  className: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const history = useHistory();

  const { authenticatedUser, setAuthenticatedUser } = useAuth();

  const handleLogout = async () => {
    await authService.logout();
    setAuthenticatedUser(null);
    history.push('/login');
  };

  return (
    <div
      className={'sidebar ' + className}
      style={{
        backgroundImage: `url(/sidemenu-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link to="/" className="no-underline flex justify-center">
        <img
          src="/urbano-logo-white.png"
          alt="Urbano Logo"
          className="h-10 w-auto"
        />
      </Link>
      <nav className="mt-14 flex flex-col gap-3 flex-grow">
        <SidebarItem to="/">
          <Home color="white" /> Dashboard
        </SidebarItem>
        <SidebarItem to="/courses">
          <BookOpen color="white" /> Courses
        </SidebarItem>
        {authenticatedUser.role === 'admin' ? (
          <SidebarItem to="/users">
            <Users color="white" /> Users
          </SidebarItem>
        ) : null}
      </nav>
      <button
        className="text-red-500 rounded-md p-3 transition-colors flex gap-3 justify-center items-center font-semibold focus:outline-none"
        onClick={handleLogout}
      >
        <LogOut /> Logout
      </button>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </div>
  );
}
