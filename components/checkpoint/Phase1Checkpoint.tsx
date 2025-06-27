
import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { CHECKPOINTS } from '../../constants';
import Notification from '../ui/Notification';
import { evaluateStrategyAnswer } from '../../services/geminiService';

const Phase1Checkpoint: React.FC = () => {
    const { completeCheckpoint } = useGameState();
    const checkpoint = CHECKPOINTS.find(c => c.id === 'C1')!;
    
    const [walletAddress, setWalletAddress] = useState('');
    const [pizzaAnswer, setPizzaAnswer] = useState('');
    const [strategyAnswer, setStrategyAnswer] = useState('');

    const [strategyFeedback, setStrategyFeedback] = useState('');
    const [isEvaluating, setIsEvaluating] = useState(false);

    const [showNotification, setShowNotification] = useState(false);

    const isWalletValid = useMemo(() => /^0x[a-fA-F0-9]{40}$/.test(walletAddress), [walletAddress]);
    const isPizzaValid = useMemo(() => pizzaAnswer.trim() === '10000', [pizzaAnswer]);
    const isStrategyValid = useMemo(() => strategyFeedback.includes('¡Buen análisis!') || strategyFeedback.includes('¡Exacto!'), [strategyFeedback]);

    const allTasksCompleted = isWalletValid && isPizzaValid && isStrategyValid;

    const handleEvaluate = async () => {
        if (!strategyAnswer) return;
        setIsEvaluating(true);
        const feedback = await evaluateStrategyAnswer(strategyAnswer);
        setStrategyFeedback(feedback);
        setIsEvaluating(false);
    };

    const handleComplete = () => {
        completeCheckpoint('C1');
        setShowNotification(true);
    };

    return (
        <div className="space-y-6 animate-slideInUp">
            {showNotification && <Notification message={`¡Fase Completada! +${checkpoint.reward.xp} XP`} icon={checkpoint.reward.trophy.icon} onClose={() => setShowNotification(false)} />}
            <Card>
                <h2 className="text-2xl font-bold text-white mb-2">⭐ Checkpoint Práctico: Mi Kit de Lanzamiento Cripto</h2>
                <p className="text-dark-text-secondary mb-6">Completa estas tareas para demostrar tus nuevas habilidades y finalizar la Fase 1.</p>

                {/* Task 1: Wallet Address */}
                <div className="mb-6 p-4 border border-dark-border rounded-lg">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-white">Tarea 1: Dirección de Wallet</h3>
                         {isWalletValid && <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">COMPLETADO</span>}
                    </div>
                    <p className="text-sm text-dark-text-secondary mt-1 mb-3">Crea tu wallet de MetaMask y pega aquí tu dirección PÚBLICA.</p>
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="Pega tu dirección 0x..."
                        className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 font-mono focus:ring-brand-primary focus:border-brand-primary"
                    />
                </div>

                {/* Task 2: Block Explorer */}
                <div className="mb-6 p-4 border border-dark-border rounded-lg">
                    <div className="flex items-center justify-between">
                         <h3 className="font-bold text-lg text-white">Tarea 2: Explorador de Bloques</h3>
                         {isPizzaValid && <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">COMPLETADO</span>}
                    </div>
                    <p className="text-sm text-dark-text-secondary mt-1 mb-3">Usa un explorador de bloques para la transacción de Bitcoin con hash <code className="text-xs bg-dark-bg p-1 rounded">a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d</code>. ¿Cuántos BTC se enviaron?</p>
                    <input
                        type="text"
                        value={pizzaAnswer}
                        onChange={(e) => setPizzaAnswer(e.target.value)}
                        placeholder="Número de bitcoins"
                        className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 font-mono focus:ring-brand-primary focus:border-brand-primary"
                    />
                </div>

                {/* Task 3: Strategy */}
                <div className="mb-6 p-4 border border-dark-border rounded-lg">
                     <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-white">Tarea 3: Estrategia</h3>
                        {isStrategyValid && <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">COMPLETADO</span>}
                    </div>
                    <p className="text-sm text-dark-text-secondary mt-1 mb-3">Si quisieras crear un sistema de votación online que nadie pueda censurar, ¿usarías la tecnología de Bitcoin o la de Ethereum? ¿Por qué?</p>
                    <textarea
                        value={strategyAnswer}
                        onChange={(e) => setStrategyAnswer(e.target.value)}
                        rows={3}
                        placeholder="Escribe tu razonamiento..."
                        className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 focus:ring-brand-primary focus:border-brand-primary mb-3"
                    />
                    <Button onClick={handleEvaluate} disabled={isEvaluating || !strategyAnswer}>
                        {isEvaluating ? 'Evaluando con IA...' : 'Obtener Feedback de IA'}
                    </Button>
                     {strategyFeedback && (
                        <div className={`mt-3 p-3 rounded-lg text-sm ${isStrategyValid ? 'bg-green-900/50 border border-green-500 text-green-300' : 'bg-yellow-900/50 border border-yellow-500 text-yellow-300'}`}>
                            <p><span className="font-bold">Feedback IA: </span>{strategyFeedback}</p>
                        </div>
                    )}
                </div>
            </Card>

            {allTasksCompleted && (
                <Card className="text-center bg-brand-secondary">
                    <h2 className="text-2xl font-bold text-white">¡Todas las tareas completadas!</h2>
                    <p className="text-indigo-100 mb-4">Has demostrado tu conocimiento. ¡Reclama tu recompensa y desbloquea la Fase 2!</p>
                    <Button onClick={handleComplete} className="bg-white text-brand-secondary hover:bg-gray-200">
                        Completar Fase 1 {checkpoint.reward.trophy.icon} (+{checkpoint.reward.xp} XP)
                    </Button>
                </Card>
            )}
        </div>
    );
};

export default Phase1Checkpoint;
