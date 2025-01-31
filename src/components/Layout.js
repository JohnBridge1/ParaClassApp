import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow main-content">
        {children}
      </main>
      <BottomNav />
    </div>
  );
} 