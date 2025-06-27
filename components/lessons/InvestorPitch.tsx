import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS } from '../../constants';
import Notification from '../ui/Notification';

const InvestorPitch: React.FC = () => {
    const { completeLesson } = useGameState();
    const [allocation, setAllocation] = useState(5000);
    const [submitted, setSubmitted] = useState(false);
    const lesson = LESSONS.find(l => l.id === '1.4')!;
    const [showNotification, setShowNotification] = useState(false);

    const btcAllocation = allocation;
    const ethAllocation = 10000 - allocation;
    
    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleComplete = () => {
        completeLesson('1.4');
        setShowNotification(true);
    };
    
    const feedback = () => {
        if(btcAllocation > 7000) {
            return "Tu inversión se inclina fuertemente hacia la seguridad y reserva de valor del 'Oro Digital'. Una estrategia conservadora y probada."
        }
        if(ethAllocation > 7000) {
            return "Has apostado con fuerza por la innovación y el potencial de las aplicaciones descentralizadas en la 'Computadora Mundial'. Una estrategia orientada al alto crecimiento."
        }
        return "Una cartera equilibrada. Diversificas entre la seguridad establecida y el potencial de innovación. Una estrategia prudente y moderada."
    }

    return (
        <div className="space-y-6 animate-slideInUp">
            {showNotification && <Notification message={`+${lesson.reward.xp} XP`} icon={lesson.reward.badge.icon} onClose={() => setShowNotification(false)} />}
            
            <Card>
                <h2 className="text-2xl font-bold text-white mb-2">El Qué y el Porqué</h2>
                <p className="text-dark-text-secondary mb-4 italic">{lesson.concept}</p>
                <div className="prose prose-sm md:prose-base prose-invert max-w-none text-dark-text-secondary space-y-4" dangerouslySetInnerHTML={{ __html: lesson.explanatoryContent }} />
            </Card>

            <Card>
                <h2 className="text-2xl font-bold text-white mb-2">Tarea Práctica: El Pitch del Inversor</h2>
                <p className="text-dark-text-secondary mb-4">Eres un inversor de capital riesgo con $10,000 virtuales. Distribúyelos entre estos dos proyectos.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-dark-bg rounded-lg border border-dark-border">
                        <h3 className="text-lg font-bold text-orange-400">Pitch A: Bitcoin</h3>
                        <p className="text-sm text-dark-text-secondary">"Nuestra visión es crear el activo de reserva más seguro y descentralizado del mundo. Un refugio contra la inflación. No hace nada más, y esa es su fortaleza."</p>
                    </div>
                     <div className="p-4 bg-dark-bg rounded-lg border border-dark-border">
                        <h3 className="text-lg font-bold text-indigo-400">Pitch B: Ethereum</h3>
                        <p className="text-sm text-dark-text-secondary">"Nuestra visión es construir una nueva internet donde el dinero y las apps son programables. Finanzas, arte, juegos... todo correrá sobre nuestra red."</p>
                    </div>
                </div>

                {!submitted && (
                    <div>
                        <div className="mb-4">
                            <div className="flex justify-between font-mono text-lg mb-2">
                                <span className="text-orange-400">BTC: ${btcAllocation}</span>
                                <span className="text-indigo-400">ETH: ${ethAllocation}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="100"
                                value={allocation}
                                onChange={(e) => setAllocation(Number(e.target.value))}
                                className="w-full h-2 bg-dark-border rounded-lg appearance-none cursor-pointer"
                                style={{ accentColor: '#4F46E5' }}
                            />
                        </div>
                        <div className="text-center">
                            <Button onClick={handleSubmit}>Confirmar Inversión</Button>
                        </div>
                    </div>
                )}
            </Card>
            
            {submitted && (
                <Card>
                     <h3 className="text-xl font-bold text-white mb-3">Feedback de tu Estrategia</h3>
                     <p className="text-dark-text-secondary mb-4">{feedback()}</p>
                     <div className="text-center">
                        <Button onClick={handleComplete} variant="secondary">Completar Lección (+{lesson.reward.xp} XP)</Button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default InvestorPitch;
