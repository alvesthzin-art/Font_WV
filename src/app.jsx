import React, { useState } from 'react';
import { Login } from './pages/login';
import { Sidebar } from './components/layout/sidebar';
import { Topbar } from './components/layout/topbar';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-slate-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        <Topbar activePage={activePage} />

        <main className="flex-1 p-8">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-card">
            <h2 className="text-lg font-semibold text-white">
              Painel de Controle - {activePage}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Você está autenticado no Watt Vision.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}