import fabiImg from '../assets/fabi.jpg';
import mateusImg from '../assets/mateus.jpg';
import dudaImg from '../assets/duda.jpg';

export const teamData = [
    {
        id: 'fabi',
        name: 'Fabi',
        role: 'Founder',
        avatar: fabiImg,
        theme: 'founder',
        stats: {
            items: [
                { label: 'Vistos Aprovados', value: '30+' },
                { label: 'Cafés Tomados', value: '3.452' },
                { label: 'Minutos no Meet', value: '42k' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-green',
                title: "FABI'S 2025 REVIEW",
                subtitle: "A retrospectiva do homem que está movendo o Brasil para os EUA.",
                sticker: "WRAPPED"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Esse ano você não parou.",
                highlight: "30+",
                highlightLabel: "Famílias aprovadas.",
                text: "Seus esforços em 2024 fundaram as bases. Em 2025, você decolou."
            },
            {
                type: 'chart',
                bg: 'bg-tech',
                title: "Sua dieta em 2025 ☕",
                subtitle: "Houve uma leve desproporção nos números.",
                chartData: [
                    { label: 'Vistos', value: 30, color: '#1DB954' },
                    { label: 'Cafés', value: 3452, color: '#FFD700' }
                ],
                footer: "Top Caffeine Source: Starbucks Duplo"
            },
            {
                type: 'persona',
                bg: 'bg-christmas-gold',
                title: "Personalidade do Ano",
                mainText: "\"FOUNDER MODE\"",
                subText: "Você entrou no modo construção de império.",
                sticker: "Team Builder 🚀",
                showAvatar: true
            },
            {
                type: 'quote',
                bg: 'bg-christmas-green',
                title: "Sua frase mais dita:",
                quote: "\"A GENTE PRECISA CONTRATAR!\"",
                subText: "O time está foda, mas a demanda está insana.",
                emoji: "🤯"
            },
            {
                type: 'list',
                bg: 'bg-christmas-red',
                title: "Slack & Calls",
                items: [
                    { label: "Minutos no Google Meet:", value: "42.000 min" },
                    { label: "Emoji mais usado:", value: "🇺🇸", sub: "(Runner up: ✈️)" }
                ]
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "FELIZ NATAL, FABI! 🎅",
                text: "Que 2026 traga mais vistos aprovados e menos noites em claro.",
                cta: "Bora pra 2026",
                ctaLink: "https://www.jumpstartimmigration.com/pt/",
                footer: "Obrigado por liderar esse time foda."
            }
        ]
    },
    {
        id: 'mateus',
        name: 'Mateus',
        role: 'CTO / Co-founder',
        avatar: mateusImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Commits', value: '2.4k' },
                { label: 'Bugs Fixed', value: '99%' },
                { label: 'Coffee', value: '∞' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "MATEUS WRAPPED 2025",
                subtitle: "O Papai Noel dos Dados chegou.",
                sticker: "CTO EDITION"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Tech, Data & AI",
                highlight: "CTO",
                highlightLabel: "Mestre dos Algoritmos",
                text: "Enquanto os duendes fazem brinquedos, você treina algoritmos."
            },
            {
                type: 'quote',
                bg: 'bg-christmas-green',
                title: "Frase mais ouvida no Polo Norte:",
                quote: "\"Na minha máquina funciona! 🎄\"",
                subText: "(O bug era só um recurso natalino surpresa).",
                emoji: "💻"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Nevasca de Dados",
                highlight: "BIG DATA",
                highlightLabel: "Processamento Massivo",
                text: "Você processou tanta informação esse ano que o Excel pediu férias."
            },
            {
                type: 'persona',
                bg: 'bg-tech',
                title: "O Mago da IA",
                mainText: "\"AI WIZARD\"",
                subText: "Sua inteligência artificial é a única que sabe exatamente o que eu quero de Natal.",
                sticker: "Future is Now 🤖",
                showAvatar: true
            },
            {
                type: 'list',
                bg: 'bg-christmas-red',
                title: "Suporte de Ouro 🛠️",
                items: [
                    { label: "Telas Azuis Salvas:", value: "404" },
                    { label: "Grinchs Derrotados:", value: "Todos" }
                ],
                // Repurposing list for text content since we don't have a plain text slide
                subtitle: "Salvou o time de telas azuis mais vezes que o Grinch tentou roubar o Natal."
            },
            {
                type: 'chart',
                bg: 'bg-christmas-gold',
                title: "Combustível Premium ☕",
                subtitle: "Rodando à base de cafeína e sobras da ceia.",
                chartData: [
                    { label: 'Café', value: 90, color: '#6F4E37' },
                    { label: 'Chester', value: 10, color: '#CD853F' }
                ],
                footer: "Status: 100% Energizado"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Entrega Contínua",
                highlight: "CADA DIA MELHOR",
                highlightLabel: "Evolução Constante",
                text: "Seus deploys trazem mais alegria que presente na manhã de Natal."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Sua Missão para 2026:",
                highlight: "O CLIQUE ÚNICO 👆",
                highlightLabel: "Next Level UX",
                text: "Nesse novo ano, você fará as aplicações funcionarem com apenas UM clique. Sem mágica, só o Mateus sendo o Mateus."
            },
            {
                type: 'outro',
                bg: 'bg-tech',
                title: "FELIZ NATAL, MATEUS! 🚀",
                text: "Que seu código compile de primeira em 2026! O time Jumpstart te adora.",
                footer: "Obrigado por transformar café em código.",
                cta: "Git Push 2026",
                ctaLink: "https://www.jumpstartimmigration.com/"
            }
        ]
    },
    {
        id: 'duda',
        name: 'Duda',
        role: 'Product Manager',
        avatar: dudaImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Dias de Casa', value: '15' },
                { label: 'Petições', value: 'Turbo' },
                { label: 'Velocidade', value: 'Mach 5' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "DUDA WRAPPED 2025",
                subtitle: "15 dias acelerados na Jumpstart.",
                sticker: "Speedrun Edition 🏃‍♀️💨"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "O Desafio aceito 🤝",
                highlight: "DECEMBER",
                highlightLabel: "Onboarding Turbo",
                text: "Entrar em Dezembro é para poucos. Foi intenso, mas valeu cada dia."
            },
            {
                type: 'list',
                bg: 'bg-tech',
                title: "Expectativa vs Realidade",
                items: [
                    { label: "O Plano:", value: "Definir a Visão" },
                    { label: "O Caos:", value: "SOCORRO, PETIÇÃO!", sub: "Aprendendo e enviando ao mesmo tempo." }
                ]
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Destravando Processos",
                highlight: "SENT ✅",
                highlightLabel: "Missão Cumprida",
                text: "O backlog estava lá, mas a gente uniu forças e fez acontecer."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Modo Acelerado ⚡",
                highlight: "SPEED",
                highlightLabel: "100km/h",
                text: "Foi tudo tão rápido que mal deu tempo de decorar o nome de todo mundo!"
            },
            {
                type: 'persona',
                bg: 'bg-christmas-red',
                title: "Impacto Real",
                mainText: "\"SONHOS\"",
                subText: "Ver essas aprovações saindo antes do ano acabar é a melhor recompensa.",
                sticker: "Dream Team 🇺🇸",
                showAvatar: true
            },
            {
                type: 'quote',
                bg: 'bg-christmas-gold',
                title: "Resumo do Onboarding:",
                quote: "\"NA PRÁTICA 🔥\"",
                subText: "Documentação fica pra 2026. O negócio agora é rodar.",
                emoji: "🚀"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Chegando pra Somar",
                highlight: "TIME",
                highlightLabel: "Jumpstart",
                text: "Feliz demais em fazer parte dessa loucura organizada."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Foco total em 2026:",
                highlight: "PRODUTO",
                highlightLabel: "Construir o Futuro",
                text: "A casa está em ordem. Agora sim: vamos criar a melhor plataforma desse mercado."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Vem ni mim, 2026! ✨",
                text: "Obrigada por me receberem tão bem. Agora vou ali descansar (mentira).",
                footer: "Bora construir!",
                cta: "Start 2026",
                ctaLink: "https://www.jumpstartimmigration.com/"
            }
        ]
    }
];
