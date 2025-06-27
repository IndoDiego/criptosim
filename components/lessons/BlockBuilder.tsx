import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS } from '../../constants';
import Notification from '../ui/Notification';

const PENDING_TX = [
    { id: 1, text: 'Ana envía 1 ETH a Juan' },
    { id: 2, text: 'Luis compra un NFT' },
    { id: 3, text: 'Sara paga 0.2 ETH' },
    { id: 4, text: 'Carlos reclama un airdrop' },
];

const BlockBuilder: React.FC = () => {
    const { completeLesson } = useGameState();
    const [transactions, setTransactions] = useState<{id: number, text: string}[]>([]);
    const [mining, setMining] = useState(false);
    const [mined, setMined] = useState(false);
    const [puzzleInput, setPuzzleInput] = useState('');
    const [error, setError] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const lesson = LESSONS.find(l => l.id === '1.2')!;

    const handleAddTx = (tx: {id: number, text: string}) => {
        if (transactions.length < 3 && !transactions.find(t => t.id === tx.id)) {
            setTransactions(prev => [...prev, tx]);
        }
    };

    const handleMine = () => {
        if (puzzleInput.toLowerCase() === 'secure') {
            setError('');
            setMining(true);
            setTimeout(() => {
                setMining(false);
                setMined(true);
            }, 2000);
        } else {
            setError('Incorrecto. Intenta de nuevo.');
        }
    };

    const handleComplete = () => {
        completeLesson('1.2');
        setShowNotification(true);
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
                <h2 className="text-2xl font-bold text-white mb-2">Tarea Práctica: Constructor de Bloques</h2>
                <p className="text-dark-text-secondary mb-4">Haz clic en 3 transacciones para crear un bloque y luego minarlo.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold mb-2">Transacciones Pendientes</h3>
                        <div className="space-y-2">
                            {PENDING_TX.map(tx => (
                                <button key={tx.id} onClick={() => handleAddTx(tx)} 
                                    disabled={transactions.length >= 3 || !!transactions.find(t => t.id === tx.id)}
                                    className="w-full text-left p-2 bg-dark-bg rounded border border-dark-border disabled:opacity-50 disabled:cursor-not-allowed hover:border-brand-primary transition">
                                    {tx.text}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg border-2 ${mined ? 'border-green-500' : 'border-dashed border-dark-border'} h-full flex flex-col`}>
                        <div className="flex justify-between items-center mb-2">
                             <h3 className="font-bold text-white">Nuevo Bloque #8452</h3>
                             {mined && <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">VALIDADO</span>}
                        </div>
                        <div className="flex-1 space-y-2 bg-dark-bg/50 p-2 rounded">
                            <p className="text-xs text-dark-text-secondary">Hash Anterior: <span className="font-mono">0x1a2b...c3d4</span></p>
                            {transactions.map(tx => <p key={tx.id} className="text-sm font-mono animate-fadeIn">-{tx.text}</p>)}
                            {!transactions.length && <p className="text-sm text-dark-text-secondary">Añade transacciones...</p>}
                        </div>
                        {mined && (
                            <div className="mt-2 animate-fadeIn">
                                <p className="text-xs text-dark-text-secondary">Nonce: <span className="font-mono">7331</span></p>
                                <p className="text-xs text-green-400">Hash de Bloque: <span className="font-mono">0x5e6f...a7b8</span></p>
                            </div>
                        )}
                    </div>
                </div>
            </Card>

            {transactions.length === 3 && !mined && !mining && (
                <Card>
                    <h3 className="font-bold text-white">Paso 2: Minar el Bloque</h3>
                    <p className="text-dark-text-secondary mb-2">Para simular la "Prueba de Trabajo", resuelve este puzzle:</p>
                    <div className="flex items-center gap-2">
                        <input 
                            type="text" 
                            value={puzzleInput}
                            onChange={(e) => setPuzzleInput(e.target.value)}
                            placeholder="Escribe la palabra 'secure'"
                            className="flex-grow bg-dark-bg border border-dark-border rounded px-3 py-2 focus:ring-brand-primary focus:border-brand-primary"
                        />
                        <Button onClick={handleMine} variant="primary">Minar</Button>
                    </div>
                    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                </Card>
            )}

            {mining && (
                <Card>
                    <div className="flex items-center space-x-3">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-bold">Minando... encontrando el hash correcto...</span>
                    </div>
                </Card>
            )}

            {mined && (
                <Card>
                    <h3 className="text-xl font-bold text-green-400">¡Bloque Minado y Encadenado!</h3>
                    <p className="text-dark-text-secondary mb-4">El hash del bloque anterior se usó para crear el nuevo, asegurando la cadena.</p>
                    <div className="text-center">
                        <Button onClick={handleComplete} variant="secondary">Completar Lección (+{lesson.reward.xp} XP)</Button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default BlockBuilder;
