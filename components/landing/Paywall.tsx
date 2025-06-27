import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';

const Paywall: React.FC = () => {
  const { confirmPaymentAndStartCourse } = useGameState();

  return (
    <div className="bg-dark-bg min-h-screen flex items-center justify-center p-4 animate-fadeIn">
      <Card className="max-w-md w-full">
        <div className="text-center">
          <svg className="w-16 h-16 text-brand-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <h2 className="text-3xl font-bold text-white mb-2">Acceso Completo a CryptoSim</h2>
          <p className="text-dark-text-secondary mb-6">Estás a un paso de comenzar tu viaje de aprendizaje.</p>
        </div>

        <div className="bg-dark-bg rounded-lg p-4 mb-6">
          <p className="text-sm text-dark-text-secondary">Conectado como:</p>
          <p className="font-semibold text-white">tu-email@gmail.com (Simulado)</p>
        </div>

        <Card className="bg-dark-bg border-brand-primary">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Plan CryptoSim Pro</h3>
            <p className="text-2xl font-bold text-brand-primary">99€</p>
          </div>
          <p className="text-sm text-dark-text-secondary mt-1">Pago único. Acceso de por vida.</p>
        </Card>
        
        <ul className="space-y-2 my-6 text-dark-text-secondary">
          <li className="flex items-center"><span className="text-brand-secondary mr-2">✓</span> Acceso a las 5 fases del curso</li>
          <li className="flex items-center"><span className="text-brand-secondary mr-2">✓</span> Todas las simulaciones y proyectos</li>
          <li className="flex items-center"><span className="text-brand-secondary mr-2">✓</span> Herramientas de análisis con IA</li>
          <li className="flex items-center"><span className="text-brand-secondary mr-2">✓</span> Insignias, trofeos y certificado final</li>
        </ul>

        <Button onClick={confirmPaymentAndStartCourse} variant="primary" className="w-full text-lg py-3">
          Pagar y Empezar a Aprender
        </Button>

        <p className="text-xs text-dark-text-secondary text-center mt-4">
          🔒 Transacción segura simulada. No se requiere tarjeta de crédito real.
        </p>
      </Card>
    </div>
  );
};

export default Paywall;
