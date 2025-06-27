import React from 'react';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS, CHECKPOINTS, PHASE_DATA } from '../../constants';
import type { ProgressStatus } from '../../types';

const StatusIcon: React.FC<{ status: ProgressStatus }> = ({ status }) => {
    switch (status) {
        case 'completed': return <span className="text-brand-secondary">✓</span>;
        case 'unlocked': return <span className="text-brand-primary animate-pulse">●</span>;
        case 'locked': return <span className="text-dark-text-secondary opacity-50">🔒</span>;
        default: return null;
    }
};

const Sidebar: React.FC = () => {
    const { progress, badges, trophies, setActiveLessonId, activeLessonId } = useGameState();

    return (
        <aside className="w-80 bg-dark-card border-r border-dark-border p-6 flex-col hidden md:flex">
            <div className="flex items-center space-x-2 mb-8">
                 <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h2 className="text-2xl font-black text-white">CryptoSim</h2>
            </div>
            
            <nav className="flex-1 overflow-y-auto -mr-2 pr-2">
                {Object.keys(PHASE_DATA).map(phaseKey => {
                    const phaseNum = parseInt(phaseKey, 10);
                    const phase = PHASE_DATA[phaseNum];
                    const phaseLessons = LESSONS.filter(l => l.phase === phaseNum);
                    const phaseCheckpoint = CHECKPOINTS.find(c => c.phase === phaseNum);

                    return (
                        <div key={phase.title} className="mb-6">
                             <h3 className="text-sm font-semibold text-dark-text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span>{phase.icon}</span>
                                <span>{phase.title}</span>
                            </h3>
                            <ul>
                                {phaseLessons.map(lesson => (
                                    <li key={lesson.id} className="mb-1">
                                        <button
                                            onClick={() => progress[lesson.id] !== 'locked' && setActiveLessonId(lesson.id)}
                                            disabled={progress[lesson.id] === 'locked'}
                                            className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                                                activeLessonId === lesson.id ? 'bg-brand-primary text-white' : 'hover:bg-dark-border'
                                            } ${progress[lesson.id] === 'locked' ? 'cursor-not-allowed opacity-60' : ''}`}
                                        >
                                            <StatusIcon status={progress[lesson.id]} />
                                            <span className="flex-1 text-sm">{lesson.id}: {lesson.title}</span>
                                        </button>
                                    </li>
                                ))}
                                {phaseCheckpoint && (
                                    <li key={phaseCheckpoint.id} className="mt-3 pt-3 border-t border-dark-border">
                                        <button
                                            onClick={() => progress[phaseCheckpoint.id] !== 'locked' && setActiveLessonId(phaseCheckpoint.id)}
                                            disabled={progress[phaseCheckpoint.id] === 'locked'}
                                            className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg font-bold transition-colors ${
                                                activeLessonId === phaseCheckpoint.id ? 'bg-brand-secondary text-white' : 'hover:bg-dark-border'
                                            } ${progress[phaseCheckpoint.id] === 'locked' ? 'cursor-not-allowed opacity-60' : ''}`}
                                        >
                                            <StatusIcon status={progress[phaseCheckpoint.id]} />
                                            <span className="flex-1 text-sm">{phaseCheckpoint.title}</span>
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    );
                })}
            </nav>

            <div className="mt-4">
                <h3 className="text-sm font-semibold text-dark-text-secondary uppercase tracking-wider mb-3">Recompensas</h3>
                <div className="flex flex-wrap gap-2 text-lg">
                    {badges.map(b => <span key={b.id} title={b.name} className="mr-1">{b.icon}</span>)}
                    {trophies.map(t => <span key={t.id} title={t.name} className="mr-1">{t.icon}</span>)}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
