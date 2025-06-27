import type { Lesson, Badge, Trophy, Checkpoint } from './types';

export const PHASE_DATA: { [key: number]: { title: string; subtitle: string; icon: string } } = {
  1: { title: 'Fase 1: Fundamentos Sólidos', subtitle: 'Tus Primeros Pasos en Cripto', icon: '🌱' },
  2: { title: 'Fase 2: Conoce el Terreno', subtitle: 'Explora el Universo Cripto', icon: '🧭' },
  3: { title: 'Fase 3: Análisis Inteligente', subtitle: 'Tu Copiloto IA', icon: '🧠' },
  4: { title: 'Fase 4: Invierte con Seguridad', subtitle: 'Protege tu Capital', icon: '🛡️' },
  5: { title: 'Fase 5: Estrategia y Futuro', subtitle: 'Construye tu Futuro', icon: '🏆' },
};

export const BADGES: { [key: string]: Badge } = {
  // Phase 1
  ISLAND_ECONOMIST: { id: 'ISLAND_ECONOMIST', name: 'Economista de la Isla', icon: '🏅', description: 'Comprendiste la escasez digital.' },
  CHAIN_ARCHITECT: { id: 'CHAIN_ARCHITECT', name: 'Arquitecto de la Cadena', icon: '🔗', description: 'Minaste tu primer bloque.' },
  WALLET_GUARDIAN: { id: 'WALLET_GUARDIAN', name: 'Mi Primera Wallet Segura', icon: '🔑', description: 'Aseguraste tu frase semilla.' },
  VISIONARY_INVESTOR: { id: 'VISIONARY_INVESTOR', name: 'Inversor Visionario', icon: '🧐', description: 'Analizaste Bitcoin vs. Ethereum.' },
  // Phase 2
  PROJECT_DETECTIVE: { id: 'PROJECT_DETECTIVE', name: 'Detective de Proyectos', icon: '🔬', description: 'Clasificaste altcoins y detectaste banderas rojas.' },
  STABILITY_ANCHOR: { id: 'STABILITY_ANCHOR', name: 'Ancla de Estabilidad', icon: '⚓', description: 'Usaste stablecoins para protegerte de la volatilidad.' },
  DEFI_PIONEER: { id: 'DEFI_PIONEER', name: 'Inversor DeFi Pionero', icon: '💸', description: 'Interactuaste con un protocolo de préstamos DeFi.' },
  DIGITAL_CURATOR: { id: 'DIGITAL_CURATOR', name: 'Curador Digital', icon: '🎨', description: 'Entendiste la propiedad verificable de los NFTs.' },
  // Phase 3
  PILOT_IN_COMMAND: { id: 'PILOT_IN_COMMAND', name: 'Piloto al Mando', icon: '🧑‍✈️', description: 'Comprendiste el rol de la IA como copiloto.' },
  SENTIMENT_ANALYST: { id: 'SENTIMENT_ANALYST', name: 'Analista de Sentimiento', icon: '🌡️', description: 'Usaste la IA para medir el pulso del mercado.' },
  AI_SCANNER: { id: 'AI_SCANNER', name: 'Escáner IA', icon: '🤖', description: 'Realizaste tu primer análisis de una cripto con una herramienta IA.' },
  PROMPT_MASTER: { id: 'PROMPT_MASTER', name: 'Maestro del Prompt', icon: '🧠', description: 'Usaste un LLM para resumir un whitepaper técnico.' },
  // Phase 4
  SCAM_SHIELD: { id: 'SCAM_SHIELD', name: 'Escudo Anti-Estafas', icon: '🛡️', description: 'Aprendiste a identificar las estafas más comunes.' },
  CODE_VIGILANTE: { id: 'CODE_VIGILANTE', name: 'Vigilante del Código', icon: '🤖', description: 'Entendiste cómo la IA ayuda a auditar contratos inteligentes.' },
  BALANCED_STRATEGIST: { id: 'BALANCED_STRATEGIST', name: 'Estratega Equilibrado', icon: '⚖️', description: 'Aplicaste los principios de diversificación y gestión de riesgo.' },
  ACCOUNT_BOOK: { id: 'ACCOUNT_BOOK', name: 'Libro de Cuentas', icon: '🧾', description: 'Comprendiste los conceptos básicos de la fiscalidad en cripto.' },
  // Phase 5
  WEALTH_ARCHITECT: { id: 'WEALTH_ARCHITECT', name: 'Arquitecto de Riqueza', icon: '📈', description: 'Construiste un portafolio simulado y diversificado.' },
  SMART_RADAR: { id: 'SMART_RADAR', name: 'Radar Inteligente', icon: '📡', description: 'Configuraste un sistema de monitoreo de portafolio con IA.' },
  VANGUARD_EXPLORER: { id: 'VANGUARD_EXPLORER', name: 'Explorador de Vanguardia', icon: '🔮', description: 'Exploraste las tendencias futuras de Cripto+IA.' },
  INVESTOR_CHECKLIST: { id: 'INVESTOR_CHECKLIST', name: 'El Checklist del Inversor', icon: '✅', description: 'Consolidaste tu aprendizaje en una herramienta de referencia.' },
};

export const TROPHIES: { [key: string]: Trophy } = {
  CRYPTO_EXPLORER: { id: 'CRYPTO_EXPLORER', name: 'Explorador Cripto', icon: '🏆', description: 'Completaste la Fase 1.' },
  ECOSYSTEM_CARTOGRAPHER: { id: 'ECOSYSTEM_CARTOGRAPHER', name: 'Cartógrafo del Ecosistema', icon: '🗺️', description: 'Completaste la Fase 2.' },
  AUGMENTED_ANALYST: { id: 'AUGMENTED_ANALYST', name: 'Analista Aumentado', icon: '🕵️', description: 'Completaste la Fase 3.' },
  CAPITAL_GUARDIAN: { id: 'CAPITAL_GUARDIAN', name: 'Guardián del Capital', icon: '🏰', description: 'Completaste la Fase 4.' },
  CERTIFIED_INVESTOR: { id: 'CERTIFIED_INVESTOR', name: 'Inversor Inteligente Certificado', icon: '🚀', description: '¡Te has graduado! Completaste el Proyecto Final.' },
};

export const LESSONS: Lesson[] = [
  // Phase 1
  { 
    id: '1.1', 
    phase: 1, 
    title: '¿Qué es el Dinero Cripto?', 
    concept: 'Diferenciar entre el dinero fiduciario (FIAT), que puede ser ilimitado, y las criptomonedas con suministro finito, entendiendo el concepto de "escasez digital".', 
    explanatoryContent: '<p>El dinero que usas todos los días (dólares, euros, pesos) se conoce como dinero "fiduciario" o FIAT. Su valor se basa en la confianza en el gobierno que lo emite, y los bancos centrales pueden imprimir más cuando lo consideran necesario. Esto puede llevar a la inflación, haciendo que tu dinero valga menos con el tiempo.</p><p>Bitcoin, en cambio, nació con reglas fijas y transparentes. Solo existirán 21 millones de bitcoins, nunca más. Esta escasez digital, similar a la del oro, es lo que le da potencial como "reserva de valor". Es una propiedad verificable por cualquiera en su código, no depende de la decisión de una autoridad.</p>',
    reward: { xp: 10, badge: BADGES.ISLAND_ECONOMIST } 
  },
  { 
    id: '1.2', 
    phase: 1, 
    title: 'Blockchain en 15 Minutos', 
    concept: 'Visualizar cómo se agrupan las transacciones en bloques y cómo estos se encadenan de forma segura e inmutable.', 
    explanatoryContent: '<p>Imagina un cuaderno de contabilidad público que todos pueden ver, pero nadie puede borrar. Eso es una blockchain. Cada página de ese cuaderno es un "bloque" y contiene una lista de transacciones.</p><p>Cuando una página (bloque) se llena, se le pone un sello único y seguro (un "hash") y se añade al final del cuaderno. Lo ingenioso es que el sello de cada nueva página incluye el sello de la página anterior, creando una "cadena" irrompible. Si alguien intentara alterar una transacción en una página antigua, el sello se rompería y todos se darían cuenta inmediatamente.</p>',
    reward: { xp: 15, badge: BADGES.CHAIN_ARCHITECT } 
  },
  { 
    id: '1.3', 
    phase: 1, 
    title: 'Tu Primera Billetera Digital', 
    concept: 'Crear una billetera de criptomonedas y comprender que la seguridad de la "frase semilla" es la responsabilidad más crítica del inversor.',
    explanatoryContent: '<p>Tu billetera (o "wallet") no guarda tus monedas. Tus monedas siempre están en la blockchain. Lo que tu wallet guarda son tus claves privadas: la contraseña secreta que te da derecho a mover esos fondos.</p><p>La "frase semilla" (12 o 24 palabras) es la copia de seguridad maestra de todas tus claves privadas. Quien tenga esa frase, tiene control total sobre tu dinero. Por eso, la regla número uno en cripto es: NUNCA compartas tu frase semilla con nadie y NUNCA la guardes en un dispositivo conectado a internet. Escríbela en papel y guárdala en un lugar seguro.</p>',
    reward: { xp: 20, badge: BADGES.WALLET_GUARDIAN } 
  },
  { 
    id: '1.4', 
    phase: 1, 
    title: 'El Dúo Dinámico: Bitcoin y Ethereum', 
    concept: 'Articular la diferencia fundamental entre Bitcoin (reserva de valor) y Ethereum (plataforma de aplicaciones descentralizadas).',
    explanatoryContent: '<p>No todas las criptomonedas aspiran a lo mismo. Bitcoin es como el oro digital. Su diseño es simple y robusto a propósito. Su principal objetivo es ser una reserva de valor fiable, descentralizada y resistente a la censura.</p><p>Ethereum, por otro lado, es como una computadora mundial. Su propósito no es solo ser dinero, sino una plataforma sobre la cual cualquiera puede construir aplicaciones (dApps) y programas (contratos inteligentes) que se ejecutan sin intermediarios. Piensa en Bitcoin como una calculadora (hace una cosa muy bien) y en Ethereum como un smartphone (puedes instalarle miles de apps).</p>',
    reward: { xp: 15, badge: BADGES.VISIONARY_INVESTOR } 
  },
  // Phase 2
  { id: '2.1', phase: 2, title: 'El Zoo de las "Altcoins"', concept: 'Aprender a clasificar las "altcoins" y a realizar un análisis fundamental básico.', explanatoryContent: '...', reward: { xp: 15, badge: BADGES.PROJECT_DETECTIVE } },
  { id: '2.2', phase: 2, title: '"Stablecoins": Tu Refugio Seguro', concept: 'Entender la función de las stablecoins como un ancla de estabilidad en un mercado volátil.', explanatoryContent: '...', reward: { xp: 15, badge: BADGES.STABILITY_ANCHOR } },
  { id: '2.3', phase: 2, title: '¿Qué es DeFi?', concept: 'Comprender el concepto básico de las Finanzas Descentralizadas (DeFi).', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.DEFI_PIONEER } },
  { id: '2.4', phase: 2, title: 'NFTs: Más que Imágenes de Monos', concept: 'Entender el concepto de un NFT como un certificado de propiedad digital único.', explanatoryContent: '...', reward: { xp: 15, badge: BADGES.DIGITAL_CURATOR } },
  // Phase 3
  { id: '3.1', phase: 3, title: 'La IA como tu Copiloto de Inversión', concept: 'Establecer expectativas realistas sobre el uso de la IA en la inversión.', explanatoryContent: '...', reward: { xp: 10, badge: BADGES.PILOT_IN_COMMAND } },
  { id: '3.2', phase: 3, title: 'Analizando el "Sentimiento" del Mercado con IA', concept: 'Entender qué es el análisis de sentimiento y cómo puede dar una ventaja.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.SENTIMENT_ANALYST } },
  { id: '3.3', phase: 3, title: 'Práctica: Tu Primer Análisis con una Herramienta de IA', concept: 'Realizar un análisis guiado paso a paso de una criptomoneda utilizando una herramienta de IA real.', explanatoryContent: '...', reward: { xp: 25, badge: BADGES.AI_SCANNER } },
  { id: '3.4', phase: 3, title: 'Pidiéndole a Gemini/ChatGPT que te resuma un Whitepaper', concept: 'Aprender a usar un Modelo de Lenguaje Grande (LLM) para "traducir" documentos técnicos.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.PROMPT_MASTER } },
  // Phase 4
  { id: '4.1', phase: 4, title: 'Las 5 Estafas Más Comunes y Cómo Evitarlas', concept: 'Reconocer las características de las estafas más frecuentes.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.SCAM_SHIELD } },
  { id: '4.2', phase: 4, title: '¿Puede la IA Detectar un Fraude?', concept: 'Entender cómo la IA se usa para analizar la seguridad de los contratos inteligentes.', explanatoryContent: '...', reward: { xp: 15, badge: BADGES.CODE_VIGILANTE } },
  { id: '4.3', phase: 4, title: 'Gestión de Riesgo para Principiantes', concept: 'Aprender y aplicar los principios de diversificación y tamaño de la posición.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.BALANCED_STRATEGIST } },
  { id: '4.4', phase: 4, title: 'Impuestos y Criptomonedas: Lo Básico', concept: 'Crear conciencia de que las transacciones con criptomonedas suelen tener implicaciones fiscales.', explanatoryContent: '...', reward: { xp: 10, badge: BADGES.ACCOUNT_BOOK } },
  // Phase 5
  { id: '5.1', phase: 5, title: 'Construyendo tu Portafolio Simulado', concept: 'Aplicar los conceptos de análisis y gestión de riesgos para construir un portafolio simulado.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.WEALTH_ARCHITECT } },
  { id: '5.2', phase: 5, title: 'Usando IA para Monitorear tu Portafolio', concept: 'Aprender a configurar un sistema de monitoreo semiautomatizado con IA.', explanatoryContent: '...', reward: { xp: 20, badge: BADGES.SMART_RADAR } },
  { id: '5.3', phase: 5, title: 'El Futuro es Cripto+IA', concept: 'Explorar las tendencias emergentes en la intersección de Cripto e IA.', explanatoryContent: '...', reward: { xp: 10, badge: BADGES.VANGUARD_EXPLORER } },
  { id: '5.4', phase: 5, title: 'Checklist Final del Inversor Inteligente', concept: 'Consolidar todo el curso en una única herramienta de referencia.', explanatoryContent: '...', reward: { xp: 10, badge: BADGES.INVESTOR_CHECKLIST } },
];

export const CHECKPOINTS: Checkpoint[] = [
    { id: 'C1', phase: 1, title: 'Checkpoint: Mi Kit de Lanzamiento Cripto', mission: '...', reward: { xp: 50, trophy: TROPHIES.CRYPTO_EXPLORER } },
    { id: 'C2', phase: 2, title: 'Checkpoint: Mi Primer Portafolio Diversificado', mission: '...', reward: { xp: 50, trophy: TROPHIES.ECOSYSTEM_CARTOGRAPHER } },
    { id: 'C3', phase: 3, title: 'Checkpoint: Mi Primer Informe de Inteligencia', mission: '...', reward: { xp: 50, trophy: TROPHIES.AUGMENTED_ANALYST } },
    { id: 'C4', phase: 4, title: 'Checkpoint: Mi Plan de Fortaleza Personal', mission: '...', reward: { xp: 50, trophy: TROPHIES.CAPITAL_GUARDIAN } },
    { id: 'C5', phase: 5, title: 'Proyecto Final: Mi Tesis de Inversión', mission: '...', reward: { xp: 100, trophy: TROPHIES.CERTIFIED_INVESTOR } },
];

// Defines the order of all learnable items in the course
export const COURSE_PROGRESSION = [
    '1.1', '1.2', '1.3', '1.4', 'C1',
    '2.1', '2.2', '2.3', '2.4', 'C2',
    '3.1', '3.2', '3.3', '3.4', 'C3',
    '4.1', '4.2', '4.3', '4.4', 'C4',
    '5.1', '5.2', '5.3', '5.4', 'C5',
];
