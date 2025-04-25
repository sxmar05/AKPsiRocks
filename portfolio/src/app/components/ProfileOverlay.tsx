// components/ProfileOverlay.tsx
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProfileOverlay = () => {
  const pathname = usePathname();
  
  return (
    <div className="profile-overlay">
      <div className="profile-content">
        <div className="profile-image">
          <Image 
            src="/profile.jpg" 
            alt="Sneha Maram" 
            width={80} 
            height={80} 
          />
        </div>
        <h2>Sneha Maram</h2>
        <div className="profile-links">
          <Link 
            href="/" 
            className={pathname === '/' ? "active-link" : ""}
          >
            my work
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? "active-link" : ""}
          >
            about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverlay;
