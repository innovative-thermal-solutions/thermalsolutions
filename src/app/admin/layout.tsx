'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const [authorized, setAuthorized] = useState<boolean | null>(isLoginPage ? true : null);

  useEffect(() => {
    if (isLoginPage) {
      setAuthorized(true);
      return;
    }

    let isMounted = true;

    async function checkAuth() {
      try {
        const res = await fetch('/api/admin/auth/me', {
          cache: 'no-store',
          credentials: 'include'
        });
        if (!res.ok) {
          if (isMounted) {
            setAuthorized(false);
            window.location.href = `/admin/login?redirect=${encodeURIComponent(pathname || '/admin')}`;
          }
          return;
        }
        const data = await res.json();
        if (isMounted) {
          if (data.authenticated) {
            setAuthorized(true);
          } else {
            setAuthorized(false);
            window.location.href = `/admin/login?redirect=${encodeURIComponent(pathname || '/admin')}`;
          }
        }
      } catch {
        if (isMounted) {
          setAuthorized(false);
          window.location.href = `/admin/login?redirect=${encodeURIComponent(pathname || '/admin')}`;
        }
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [pathname, isLoginPage]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  // Security gate check screen while validating session
  if (authorized === null) {
    return (
      <div className="min-h-screen bg-[#0a0f11] text-neutral-100 flex items-center justify-center p-6">
        <div className="text-center space-y-3 font-mono text-xs">
          <RefreshCw className="w-6 h-6 animate-spin text-[#01747A] mx-auto" />
          <p className="text-neutral-400">Verifying administrator credentials & session security...</p>
        </div>
      </div>
    );
  }

  // Blocked unauthenticated state
  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0a0f11] text-neutral-100 flex items-center justify-center p-6">
        <div className="text-center space-y-3 font-mono text-xs max-w-sm">
          <ShieldAlert className="w-8 h-8 text-rose-500 mx-auto" />
          <p className="text-white font-bold text-sm">Access Restricted</p>
          <p className="text-neutral-400">Valid administrator authentication required to enter the CMS system.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f11] text-neutral-100 flex">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-8 overflow-y-auto max-h-screen">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
