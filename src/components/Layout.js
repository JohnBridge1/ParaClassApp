import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="pb-16"> {/* Add padding bottom for BottomNav */}
        {children}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
} 