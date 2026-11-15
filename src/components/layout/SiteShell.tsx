'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ReferenceInteractiveModals } from '@/components/ui/ReferenceInteractiveModals';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <div className="flex-1 w-full relative z-10">{children}</div>
      <Footer />
      <ReferenceInteractiveModals />
    </>
  );
}

