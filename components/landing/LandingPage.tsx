import React from 'react';
import { useGameState } from '../../context/GameStateContext';
import { PHASE_DATA } from '../../constants';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Feature: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-dark-text-secondary">{children}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const { loginAndShowPaywall } = useGameState();

  return (
    <div className="bg-dark-bg text-dark-text min-h-screen font-sans animate-fadeIn">
      {/* Header */}
      <header className="py-4 px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <h2 className="text-2xl font-black text-white">CryptoSim</h2>
        </div>
        <Button onClick={loginAndShowPaywall} variant="primary">Inscríbete</Button>
      </header>
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          Conviértete en un Inversor Cripto <br />
          <span className="text-brand-primary">Impulsado por IA</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8">
          Domina Blockchain, DeFi y NFTs con nuestro curso práctico y gamificado. Aprende a analizar el mercado con IA y a invertir con confianza.
        </p>
        <Button onClick={loginAndShowPaywall} variant="primary" className="text-lg px-8 py-4 animate-pulseGlow">
          Inscríbete Ahora por 99€
        </Button>
      </main>

      {/* Features Section */}
      <section className="bg-dark-card py-20">
        <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12">
          <Feature icon="🎮" title="Aprende Jugando">
            Gana XP, insignias y trofeos a medida que completas simulaciones interactivas. El aprendizaje se siente como un juego, no como una tarea.
          </Feature>
          <Feature icon="🤖" title="Copiloto de IA">
            Utiliza la IA como tu analista personal para resumir documentos complejos, analizar el sentimiento del mercado y tomar decisiones informadas.
          </Feature>
          <Feature icon="🛠️" title="Habilidades Prácticas">
            Desde crear tu primera wallet segura hasta realizar un análisis fundamental, adquirirás las habilidades que los inversores reales usan todos los días.
          </Feature>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">¿Qué Aprenderás?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(PHASE_DATA).map((phase, index) => (
              <Card key={phase.title} className="flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="text-3xl">{phase.icon}</span>
                    <span>Fase {index + 1}</span>
                  </h3>
                  <p className="text-dark-text-secondary font-semibold">{phase.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button onClick={loginAndShowPaywall} variant="secondary">Explorar el Curso Completo</Button>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
       <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu Viaje Hacia la Maestría Cripto Comienza Aquí</h2>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-8">No te quedes atrás en la revolución financiera. Invierte en tu conocimiento hoy.</p>
            <Button onClick={loginAndShowPaywall} variant="light" className="text-lg px-8 py-4">
                Conviértete en Inversor
            </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-dark-text-secondary">
        <p>&copy; {new Date().getFullYear()} CryptoSim. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;