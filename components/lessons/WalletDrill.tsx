import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS } from '../../constants';
import Notification from '../ui/Notification';

const SEED_PHRASE = "apple banana kiwi grape mango pear orange lemon cherry coconut kiwi salad";

type Step = 'intro' | 'creation' | 'test1' | 'test2' | 'test3' | 'completed';

const WalletDrill: React.FC = () => {
    const { completeLesson } = useGameState();
    const [step, setStep] = useState<Step>('intro');
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const lesson = LESSONS.find(l => l.id === '1.3')!;
    const [showNotification, setShowNotification] = useState(false);

    const handleAction = (action: string) => {
        setFeedback(null);
        if (step === 'test2') {
            if (action === 'never_share') {
                setFeedback({ type: 'success', message: '¡Correcto! Jamás compartas tu frase con nadie.' });
                setTimeout(() => setStep('test3'), 1500);
            } else {
                setFeedback({ type: 'error', message: '¡Peligro! Si compartes tu frase, te robarán los fondos.' });
            }
        }
    };
    
    const handleComplete = () => {
        completeLesson('1.3');
        setShowNotification(true);
    };

    const renderSimulation = () => {
        switch (step) {
            case 'intro':
                return (
                    <div>
                        <p className="text-dark-text-secondary mb-4">Vamos a crear una wallet ficticia para aprender el concepto más importante: la seguridad de tu Frase Semilla.</p>
                        <Button onClick={() => setStep('creation')}>Iniciar Simulación</Button>
                    </div>
                );
            case 'creation':
                return (
                    <div>
                        <h3 className="font-bold text-white">Tu Frase Semilla Secreta</h3>
                        <p className="text-dark-text-secondary mb-4">Esta es la llave maestra de tu wallet. Anótala y guárdala en un lugar seguro y secreto. NUNCA la compartas.</p>
                        <div className="p-4 bg-dark-bg border-2 border-dashed border-yellow-400 rounded-lg font-mono text-lg text-center text-white tracking-wider">
                            {SEED_PHRASE}
                        </div>
                        <p className="text-yellow-400 text-sm mt-2">En una wallet real, tendrías que confirmar que la has guardado.</p>
                        <Button onClick={() => setStep('test1')} className="mt-4">Entendido, la guardé</Button>
                    </div>
                );
            case 'test1':
                 return (
                    <div>
                        <h3 className="font-bold text-white">Prueba 1: La Recuperación</h3>
                        <p className="text-dark-text-secondary mb-4">¡Oh no! Tu navegador se cerró. Para continuar, reintroduce tu frase semilla.</p>
                        <textarea 
                            className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 font-mono" 
                            rows={3}
                            onChange={(e) => {
                                if (e.target.value.trim() === SEED_PHRASE) {
                                    setStep('test2');
                                }
                            }}
                        />
                    </div>
                );
            case 'test2':
                return (
                    <div>
                        <h3 className="font-bold text-white">Prueba 2: El Intento de Phishing</h3>
                        <div className="mt-2 p-4 bg-blue-900/50 rounded-lg border border-blue-500">
                            <p className="font-bold">Soporte de MetaMask (FALSO):</p>
                            <p>"Hola, hemos detectado actividad sospechosa. Para verificar tu cuenta, por favor, envíame tu frase semilla."</p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Button onClick={() => handleAction('share')} className="bg-red-600 hover:bg-red-500 w-full">Compartir Frase</Button>
                            <Button onClick={() => handleAction('never_share')} className="bg-green-600 hover:bg-green-500 w-full">JAMÁS COMPARTIR</Button>
                        </div>
                    </div>
                );
            case 'test3':
                return (
                    <div>
                        <h3 className="font-bold text-white">Prueba 3: Nueva Instalación</h3>
                        <p className="text-dark-text-secondary mb-4">Quieres instalar tu wallet en un nuevo teléfono. ¿Qué necesitas?</p>
                         <div className="space-y-2">
                             <Button variant="ghost" className="w-full text-left" onClick={() => setFeedback({ type: 'error', message: 'Incorrecto. La contraseña es solo para este dispositivo.' })}>Mi contraseña</Button>
                             <Button variant="ghost" className="w-full text-left" onClick={() => {
                                 setFeedback({ type: 'success', message: '¡Exacto! La frase semilla te da acceso en cualquier lugar.' });
                                 setTimeout(() => setStep('completed'), 1500);
                             }}>Mi frase semilla</Button>
                             <Button variant="ghost" className="w-full text-left" onClick={() => setFeedback({ type: 'error', message: 'Incorrecto. La dirección pública es para recibir fondos, no para restaurar.' })}>Mi dirección pública</Button>
                         </div>
                    </div>
                );
            case 'completed':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-green-400">¡Pruebas Superadas!</h2>
                        <p className="text-dark-text-secondary mb-4">Has demostrado entender el concepto de soberanía sobre tu "llave maestra". ¡Tu wallet está segura en tus manos!</p>
                        <Button onClick={handleComplete} variant="secondary">Completar Lección (+{lesson.reward.xp} XP)</Button>
                    </div>
                );
        }
    };

    return (
        <div className="space-y-6 animate-slideInUp">
            {showNotification && <Notification message={`+${lesson.reward.xp} XP`} icon={lesson.reward.badge.icon} onClose={() => setShowNotification(false)} />}
            
            <Card>
                <h2 className="text-2xl font-bold text-white mb-2">El Qué y el Porqué</h2>
                <p className="text-dark-text-secondary mb-4 italic">{lesson.concept}</p>
                <div className="prose prose-sm md:prose-base prose-invert max-w-none text-dark-text-secondary space-y-4" dangerouslySetInnerHTML={{ __html: lesson.explanatoryContent }} />
            </Card>

            <Card>
                 <h2 className="text-2xl font-bold text-white mb-2">Tarea Práctica: La Bóveda Digital</h2>
                {renderSimulation()}
                {feedback && (
                    <p className={`mt-4 text-center font-bold ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {feedback.message}
                    </p>
                )}
            </Card>
        </div>
    );
};

export default WalletDrill;
