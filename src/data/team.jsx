import React from 'react';
import fabiImg from '../assets/fabi.jpg';
import mateusImg from '../assets/mateus.jpg';
import dudaImg from '../assets/duda.jpg';
import samaraImg from '../assets/samara.jpg';
import thiagoImg from '../assets/thiago.jpg';
import amandaImg from '../assets/amanda.jpg';
import biaImg from '../assets/bia.jpg';
import josiasImg from '../assets/josias.jpg';
import kaiImg from '../assets/kai.jpg';

import livyImg from '../assets/livy.jpg';
import luizImg from '../assets/luiz.jpg';
import jumpstartCoverImg from '../assets/jumpstart_cover.jpg';
import jumpinhoImg from '../assets/jumpinho.png';
import jumpstartLogo from '../assets/jumpstart_logo.png';


export const teamData = [
    {
        id: 'jumpstart',
        name: 'Jumpstart',
        role: 'Year Review',
        avatar: jumpstartCoverImg,
        theme: 'founder',
        stats: {
            items: [
                { label: 'Crescimento', value: '+30%' },
                { label: 'Receita', value: 'US$ 2.7M' },
                { label: 'Time', value: '12 🚀' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "JUMPSTART WRAPPED 2025",
                subtitle: "O ano que a gente fez nevar no verão brasileiro.",
                sticker: "The Big Wrap 🎁"
            },
            {
                type: 'persona',
                bg: 'bg-christmas-red',
                title: "O Dono do Brasil 🇧🇷",
                mainText: "\"JUMPINHO\"",
                subText: "O Jumpinho vai dominar o mundo!",
                sticker: "O seu amiguinho!",
                noRotate: true,
                showAvatar: true,
                customAvatar: jumpinhoImg
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "O Primeiro Milhão 💰",
                highlight: "US$ 1M",
                highlightLabel: "REACHED",
                text: "O melhor presente de Natal antecipado. Batemos a marca histórica!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Segura esse Trenó!",
                highlight: "+30%",
                highlightLabel: "CRESCIMENTO MoM",
                text: "Crescemos mês a mês mais rápido que a barriga do Papai Noel."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Olhando pro Futuro",
                highlight: "US$ 2.7M",
                highlightLabel: "E crescendo",
                text: "Anualizado. A previsão para 2026 é de muito sol (e muita receita)."
            },
            {
                type: 'chart',
                bg: 'bg-christmas-red',
                title: "Temos mais Jumpinhos",
                subtitle: "Começamos em 5 gatos pingados... Agora somos 12 Vingadores.",
                chartData: [
                    { label: 'Jan', value: 5, color: '#e5e7eb' },
                    { label: 'Dec', value: 12, color: '#1DB954' }
                ],
                footer: "Status: Casa Cheia House Full"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "E não paramos...",
                highlight: "HIRING",
                highlightLabel: "WE WANT YOU",
                text: "Tem cadeira vazia na ceia. Mande currículos!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Nasceu a Plataforma 💻",
                highlight: "MVP",
                highlightLabel: "REAL",
                text: "O MVP virou produto real. Agora a mágica acontece com cliques."
            },
            {
                type: 'list',
                bg: 'bg-christmas-green',
                title: "Extra! Extra! 📰",
                items: [
                    { label: "Veículos", value: "+10" },
                    { label: "Fama", value: "Internacional" },
                    { label: "O Fabi", value: "Fala, Habla & Speak" }
                ],
                subtitle: "Saímos em +10 veículos e jornais. O Fabi falou mais que o homem da cobra!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Casa Arrumada",
                highlight: "OPS",
                highlightLabel: "CLEAN",
                text: "A operação deixou de ser um emaranhado de pisca-pisca e virou um laser."
            },

            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Prontos para 2026!",
                highlight: "ROCKET",
                highlightLabel: "LAUNCH",
                text: "A base está pronta, o time está montado e o tanque está cheio."
            },
            {
                type: 'outro',
                bg: 'bg-cream',
                title: "Obrigado, Time Jumpstart! ❤️",
                text: "Investidores e amigos: vocês são as estrelas da nossa árvore. Feliz Natal!",
                cta: "Lets go 2026",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footerLogo: jumpstartLogo
            }
        ]
    },
    {
        id: 'investors',
        name: 'Investors',
        role: 'Year Review',
        avatar: jumpstartCoverImg,
        theme: 'founder',
        stats: {
            items: [
                { label: 'Revenue', value: '$1M+' },
                { label: 'Growth', value: '30% MoM' },
                { label: 'Scale', value: 'Global 🌎' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "JUMPSTART WRAPPED 2025",
                subtitle: "What a year! Buckle up.",
                sticker: "Investors Edition 🚀"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "First Million Unlocked! 🔓",
                highlight: "US$ 1M",
                highlightLabel: "CONTRACTED REVENUE",
                text: "We hit the big milestone. Market fit: Validated."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "We Are Flying",
                highlight: ">30%",
                highlightLabel: "MoM GROWTH",
                text: "Breaking records every single month."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Next Stop?",
                highlight: "US$ 2.7M",
                highlightLabel: "And growing",
                text: "Entering 2026 with serious momentum."
            },
            {
                type: 'chart',
                bg: 'bg-christmas-red',
                title: "From 5 to 12 Rockstars",
                subtitle: "Top talent only. No passengers, just drivers.",
                chartData: [
                    { label: 'Start', value: 5, color: '#e5e7eb' },
                    { label: 'Now', value: 12, color: '#1DB954' }
                ],
                footer: "Status: Still Hiring"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Good Problems to Have",
                highlight: "DEMAND",
                highlightLabel: "> CAPACITY",
                text: "We are hiring fast to keep up with the market!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "It's Alive! 🤖",
                highlight: "PLATFORM",
                highlightLabel: "LAUNCHED",
                text: "Platform launched successfully."
            },
            {
                type: 'list',
                bg: 'bg-christmas-green-light',
                title: "Making Headlines 📰",
                items: [
                    { label: "Media Outlets", value: "10+" },
                    { label: "Articles", value: "in English, Spanish and Portuguese" },
                    { label: "Brand", value: "Strong" }
                ],
                subtitle: "Everyone is talking about Jumpstart."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "We Cleaned the House",
                highlight: "OPS",
                highlightLabel: "STREAMLINED",
                text: "Operations are now fast, organized, and scalable."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "2026 Mission",
                highlight: "GLOBAL",
                highlightLabel: "SCALE 🌎",
                text: "We proved the model. Now we multiply it."
            },
            {
                type: 'outro',
                bg: 'bg-cream',
                title: "Thank You!",
                text: "To our investors: Thanks for trusting the vision. Let's rock 2026!",
                cta: "Lets go 2026",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footerLogo: jumpstartLogo
            }
        ]
    },
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
    },
    {
        id: 'samara',
        name: 'Samara',
        role: 'Legal Writer & Strategist',
        avatar: samaraImg,
        theme: 'christmas-gold',
        stats: {
            items: [
                { label: 'Cartas', value: 'Impeccable' },
                { label: 'GPA', value: '4.0' },
                { label: 'Erros', value: 'Zero' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "SAMARA WRAPPED 2025",
                subtitle: "A união perfeita de gentileza e genialidade.",
                sticker: "Top Student 🎓"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "A Mente Mais Brilhante 💡",
                highlight: "GENIUS",
                highlightLabel: "& SWEET",
                text: "Como alguém pode ser tão inteligente e tão querida ao mesmo tempo? Um mistério natalino."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "A Caneta de Ouro",
                highlight: "GOLDEN",
                highlightLabel: "PEN",
                text: "Suas cartas não são apenas textos; são obras de arte impecáveis que abrem portas."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-green',
                title: "Tradutora de Sonhos",
                mainText: "\"MAGIC\"",
                subText: "Você pega a complexidade da vida dos clientes e transforma em petições perfeitas.",
                sticker: "Dream Maker ✨",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Férias... Só da Faculdade! 🎓",
                highlight: "FOCUS",
                highlightLabel: "ON JUMP",
                text: "Enquanto a turma sofre nas finais, você já gabaritou tudo. Sorte da Jump, que ganha seu foco extra!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Erro 404: Não Encontrado",
                highlight: "ZERO",
                highlightLabel: "ERRORS",
                text: "Número de erros gramaticais nas suas cartas em 2025: Zero. Perfeição é seu sobrenome."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "A Calmaria no Caos",
                highlight: "PEACE",
                highlightLabel: "MAKER",
                text: "Sua gentileza é o nosso porto seguro quando a operação fica maluca. Obrigada por ser assim."
            },
            {
                type: 'quote',
                bg: 'bg-christmas-green',
                title: "Favorita dos Clientes",
                quote: "\"OBRIGADO! ❤️\"",
                subText: "Eles podem não te ver, mas sentem o carinho e a inteligência em cada palavra.",
                emoji: "📬"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Para 2026...",
                highlight: "SHINE",
                highlightLabel: "BRIGHT",
                text: "Que seu próximo ano seja tão brilhante quanto as suas notas (e suas petições)."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Feliz Natal, Samara!",
                text: "Sem provas de faculdade na cabeça, ninguém te segura! Bora fechar o ano com chave de ouro na Jump! 🎄🚀",
                cta: "Work Mode: On",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Continue encantando!"
            }
        ]
    },
    {
        id: 'thiago',
        name: 'Thiago',
        role: 'Co-Founder & Rainmaker',
        avatar: thiagoImg,
        theme: 'christmas-gold',
        stats: {
            items: [
                { label: 'Vendas', value: 'Record' },
                { label: 'Pitchs', value: 'Imbatível' },
                { label: 'Energia', value: '1000%' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "THIAGO WRAPPED 2025",
                subtitle: "O Braço Direito (e esquerdo) da Jumpstart.",
                sticker: "The Pilot 🚀"
            },
            {
                type: 'persona',
                bg: 'bg-christmas-gold',
                title: "O Fazedor de Chuva ☔",
                mainText: "\"RAINMAKER\"",
                subText: "Se tem cliente novo entrando ou investidor sorrindo, você provavelmente está na sala.",
                sticker: "Business 💰",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Máquina de Vendas",
                highlight: "SALES",
                highlightLabel: "MACHINE",
                text: "Você vendeu o sonho americano melhor que o próprio Tio Sam esse ano."
            },
            {
                type: 'persona',
                bg: 'bg-tech',
                title: "Oratória Nível: TED Talk",
                mainText: "\"SPEAKER\"",
                subText: "Sua habilidade de encantar clientes e acalmar ânimos deveria ser estudada pela NASA.",
                sticker: "Gold Mic 🎤",
                showAvatar: false
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Encantador de Tubarões 🦈",
                highlight: "PITCH",
                highlightLabel: "PERFECT",
                text: "Pitch Deck? Feito. Reunião difícil? Ganha. O Fundraising está em boas mãos."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Sem Frescura 🛠️",
                highlight: "HANDS",
                highlightLabel: "ON",
                text: "Glamour é bom, mas quando a operação aperta, você é o primeiro a pular na trincheira."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Dupla Dinâmica",
                highlight: "DUO",
                highlightLabel: "POWER",
                text: "Você e o Fabi juntos são perigosos. Ninguém segura!"
            },
            {
                type: 'list',
                bg: 'bg-christmas-red',
                title: "Energia Infinita ⚡",
                items: [
                    { label: "08:00 AM", value: "Reunião de Alinhamento" },
                    { label: "14:00 PM", value: "Closing Deals", sub: "(Vendas)" },
                    { label: "20:00 PM", value: "Operação na Trincheira" }
                ],
                subtitle: "E ainda sobra tempo para sorrir."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Missão 2026:",
                highlight: "SCALE",
                highlightLabel: "TO THE MOON 🚀",
                text: "O alicerce está pronto. Agora é hora de multiplicar tudo por 10."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Feliz Natal, Thiago!",
                text: "Obrigado por carregar o piano e ainda vender o concerto. 2026 é todo nosso! 🥂",
                cta: "Let's Scale",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Wolf of Jumpstart Street"
            }
        ]
    },
    {
        id: 'amanda',
        name: 'Amanda',
        role: 'Lawyer & Marketer',
        avatar: amandaImg,
        theme: 'christmas-green',
        stats: {
            items: [
                { label: 'Aprovações', value: 'Imã' },
                { label: 'Detalhes', value: 'Sherlock' },
                { label: 'Carisma', value: '100%' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "AMANDA WRAPPED 2025",
                subtitle: "Advogada, Marqueteira e Dona da Razão (no bom sentido).",
                sticker: "The Hybrid ⚖️"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "O Combo Secreto 🍹",
                highlight: (
                    <div className="flex flex-col items-center leading-none">
                        <span>LAW</span>
                        <span className="text-3xl md:text-5xl mt-2">&</span>
                    </div>
                ),
                highlightLabel: "MARKETING",
                text: "Direito + Marketing? Você não só defende o cliente, você vende a história dele pro governo. Genial."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-green',
                title: "AmandaGPT",
                mainText: "\"ORACLE\"",
                subText: "Dúvida jurídica? Dúvida sobre a vida? Você sempre tem a resposta certa na ponta da língua.",
                sticker: "All Knowing 🔮",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Imã de Aprovações",
                highlight: "APPROVED",
                highlightLabel: "MAGNET",
                text: "Se o processo passou pela sua mão, o Green Card já está praticamente no correio."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Olhos de Águia 🦅",
                highlight: "SHERLOCK",
                highlightLabel: "MODE",
                text: "Sua atenção aos detalhes é o que separa um 'quase' de um 'APROVADO'. Nada passa despercebido."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Alegria das Reuniões",
                highlight: "FUN",
                highlightLabel: "BRINGER",
                text: "Obrigada por tirar o peso do juridiquês e trazer leveza (e risadas) para os nossos dias."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Nossa Rocha",
                highlight: "TRUST",
                highlightLabel: "LEVEL 100",
                text: "Nível de confiança: 100%. Se a Amanda disse que resolve, a gente nem se preocupa mais."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-gold',
                title: "Poder de Convencimento",
                mainText: "\"STORY\"",
                subText: "Você usa o marketing para contar a história do cliente de um jeito que até o oficial mais rabugento se emociona.",
                sticker: "Magic Wand ✨",
                showAvatar: false
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Para 2026...",
                highlight: "WINS",
                highlightLabel: "MORE & MORE",
                text: "Que o próximo ano traga processos fáceis, oficiais de bom humor e muito sucesso."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Feliz Natal, Amanda!",
                text: "A Jumpstart tem muita sorte de ter sua energia e seu talento. Você é essencial! ❤️🎄",
                cta: "Win 2026",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Official Hybrid Lawyer"
            }
        ]
    },
    {
        id: 'bia',
        name: 'Bia',
        role: 'Operations Lead',
        avatar: biaImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Processos', value: '100%' },
                { label: 'Caos', value: '0%' },
                { label: 'Adaptação', value: 'Flash' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "BIA WRAPPED 2025",
                subtitle: "Menos de 2 meses de casa? Impossível.",
                sticker: "Veteran Rookie 🚀"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "O Efeito Bia ⏳",
                highlight: "SENIOR",
                highlightLabel: "LEVEL",
                text: "Você chegou ontem, mas parece que fundou a empresa com a gente. A adaptação mais rápida da história."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-green',
                title: "A Grande Organizadora",
                mainText: "\"MAGIC\"",
                subText: "Você olhou para o caos e disse: 'Vamos colocar processos nisso'. E a mágica aconteceu.",
                sticker: "Organizer ✨",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Aceleradora de Sonhos 🚀",
                highlight: "SPEED",
                highlightLabel: "BOOST",
                text: "Graças aos seus processos, os clientes estão sendo aprovados mais rápido. Menos burocracia, mais resultados."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Onde está o arquivo?",
                highlight: "FOUND",
                highlightLabel: "IT!",
                text: "Antes: 'Ninguém sabe'. Agora: 'A Bia já organizou na pasta certa'. Paz de espírito definida."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Coração da Operação ❤️",
                highlight: "TEAM",
                highlightLabel: "MOM",
                text: "Você acolhe e ajuda todo mundo. Não é só sobre processos, é sobre pessoas."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "A Guardiã da Linha",
                highlight: "ON",
                highlightLabel: "TRACK",
                text: "Doce, mas firme. Você garante que o trem não saia dos trilhos (e a gente agradece por isso)."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Sua Filosofia",
                highlight: "FLOW",
                highlightLabel: "= SUCCESS",
                text: "Processo organizado = Cliente feliz = Sucesso da Jumpstart."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Meta para 2026:",
                highlight: "SCALE",
                highlightLabel: "PERFECTLY",
                text: "A casa está arrumada. Agora vamos construir um arranha-céu em cima dela."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Feliz Natal, Bia!",
                text: "Que bom que você chegou. A Jumpstart finalmente encontrou seu eixo. ✨🎁",
                cta: "Keep Organizing",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Official Process Queen"
            }
        ]
    },
    {
        id: 'josias',
        name: 'Josias',
        role: 'Operations & Engineering',
        avatar: josiasImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Lógica', value: '100%' },
                { label: 'Proatividade', value: 'Level 1000' },
                { label: 'Energia', value: 'Solar' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "JOSIAS WRAPPED 2025",
                subtitle: "Direto de Aracaju para o Mundo 🌎",
                sticker: "Engineer Writer 🦀"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Engenharia de Petições ⚙️",
                highlight: "LOGIC",
                highlightLabel: "& ARGUMENTS",
                text: "Você cursa Engenharia da Computação, mas quem ganha são os clientes. Seus argumentos têm a lógica perfeita de um código sem bugs."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-green',
                title: "O Vidente",
                mainText: "\"PREMONITION\"",
                subText: "Você resolve problemas antes mesmo de eles aparecerem. Isso não é proatividade, é premonição.",
                sticker: "Proactive King 👑",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Senhor dos Detalhes",
                highlight: "RAM",
                highlightLabel: "MEMORY",
                text: "Você sabe o status daquela aplicação obscura de 3 meses atrás de cabeça. Sua memória RAM é impressionante."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Onipresente",
                highlight: "ALWAYS",
                highlightLabel: "ONLINE",
                text: "Precisa de ajuda? O Josias já respondeu. 'Sempre presente' não é só um elogio, é um fato."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Coração de Ouro",
                highlight: "HELPER",
                highlightLabel: "HERO",
                text: "Inteligente, técnico, mas acima de tudo: prestativo. Você nunca deixa um colega na mão."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "O Sol da Jumpstart ☀️",
                highlight: "ARACAJU",
                highlightLabel: "ENERGY",
                text: "Trazendo o calor e a energia do Nordeste para a nossa operação. A UFS está criando um monstro (no bom sentido)!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Malabarista Acadêmico",
                highlight: "MULTI",
                highlightLabel: "TASKER",
                text: "Dominar integrais na faculdade e aprovar vistos no trabalho? Só para quem pode."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Meta 2026:",
                highlight: "BUILDING",
                highlightLabel: "BRIDGES 🌉",
                text: "Continuar conectando sua engenharia com o sonho dos nossos clientes."
            },
            {
                type: 'outro',
                bg: 'bg-black',
                title: "Feliz Natal, Josias!",
                text: "Obrigado por toda a dedicação e inteligência. Você é gigante! 🚀🦀",
                cta: "Code Future",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Official Engineer Writer"
            }
        ]
    },
    {
        id: 'kai',
        name: 'Kai',
        role: 'Head of Legal',
        avatar: kaiImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Dias de Casa', value: '15' },
                { label: 'Responsabilidade', value: 'Total' },
                { label: 'Visão', value: 'Império' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "KAI WRAPPED 2025",
                subtitle: "Do Tradicional ao Exponencial em 15 dias.",
                sticker: "New Sheriff ⚖️"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "O Salto de Fé 🪂",
                highlight: "BIG",
                highlightLabel: "SWITCH",
                text: "Trocou o escritório tradicional pela loucura da Jumpstart. E não olhou para trás."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Eu Sou a Equipe",
                highlight: "ONE MAN",
                highlightLabel: "ARMY",
                text: "Hoje o Legal Team é você, você e você. E está dando conta do recado como um batalhão."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Download de Cérebro 🧠",
                highlight: "FAST",
                highlightLabel: "LEARNING",
                text: "Sua curva de aprendizado não é uma curva, é uma linha vertical. Você absorveu a operação em tempo recorde."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Já está Entregando?",
                highlight: "DONE",
                highlightLabel: "DEAL",
                text: "15 dias de casa e já tem petição saindo do forno. A tinta da caneta nem secou e você já está assinando aprovações."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-green',
                title: "O Arquiteto",
                mainText: "\"BUILDER\"",
                subText: "Você não veio só para advogar. Veio para desenhar como o jurídico da Jump vai funcionar!",
                sticker: "Legal Architect 📐",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Camaleão Jurídico",
                highlight: "ADAPT",
                highlightLabel: "ABILITY",
                text: "A velocidade com que você se adaptou ao nosso ritmo assusta (no bom sentido)."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Upgrade Concluído",
                highlight: "LEGAL",
                highlightLabel: "2.0",
                text: "Trazendo a solidez do direito tradicional com a agilidade que a gente precisa."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Meta 2026:",
                highlight: "EMPIRE",
                highlightLabel: "MODE 🏛️",
                text: "Hoje é só você. Ano que vem, você vai liderar o time que você mesmo vai construir."
            },
            {
                type: 'outro',
                bg: 'bg-tech',
                title: "Feliz Natal, Kai!",
                text: "Que começo incrível! Estamos ansiosos para ver o time que você vai montar. Bem-vindo ao foguete! 🚀",
                cta: "Lead the Way",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Official Head of Legal"
            }
        ]
    },
    {
        id: 'luiz',
        name: 'Luiz Felipe',
        role: 'Tech Intern',
        avatar: luizImg,
        theme: 'tech',
        stats: {
            items: [
                { label: 'Dias de Casa', value: '< 30' },
                { label: 'Velocidade', value: 'Light' },
                { label: 'Bugs', value: 'Zapped' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-tech',
                title: "LUIZ WRAPPED 2025",
                subtitle: "O Estagiário que já sentou na janelinha.",
                sticker: "Prodigy ⚡"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Efeito Dezembro ⚡",
                highlight: "TIME",
                highlightLabel: "WARP",
                text: "Você tem menos de 30 dias de casa, mas já conhece a plataforma melhor que muita gente. Como isso é possível?"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Entrega em Tempo Recorde",
                highlight: "FAST",
                highlightLabel: "DELIVERY",
                text: "O Mateus mal termina de pedir a feature e você já manda o Pull Request. A velocidade é surreal."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Download Completo 🧠",
                highlight: "FULL",
                highlightLabel: "DOWNLOAD",
                text: "Curva de aprendizado? A sua foi uma linha reta pra cima. Você absorveu o código fonte inteiro em dias."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "A Dupla Tech",
                highlight: "DEV",
                highlightLabel: "DUO",
                text: "Junto com o mestre Mateus e entregando valor real. O estagiário que dá orgulho pro CTO."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Código Limpo ✨",
                highlight: "CLEAN",
                highlightLabel: "CODE",
                text: "Estagiário no crachá, mas a qualidade da entrega é de gente grande."
            },
            {
                type: 'persona',
                bg: 'bg-christmas-red',
                title: "Mãos de Midas",
                mainText: "\"UPGRADE\"",
                subText: "Tudo que você toca na plataforma fica melhor, mais rápido e mais eficiente.",
                sticker: "Golden Touch 🌟",
                showAvatar: true
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Quebra de Expectativa",
                highlight: "ROCK",
                highlightLabel: "STAR",
                text: "Você redefiniu o que a gente espera de um estagiário. A barra subiu!"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Próxima Fase: 2026 🎮",
                highlight: "LEVEL",
                highlightLabel: "UP",
                text: "Se em 15 dias você fez isso, imagine em um ano inteiro? O céu é o limite."
            },
            {
                type: 'outro',
                bg: 'bg-tech',
                title: "Feliz Natal, Luiz!",
                text: "Continue acelerando. Estamos muito felizes de ter você no time Jumpstart! 🚀🎄",
                cta: "Press Start",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Official Tech Prodigy"
            }
        ]
    },
    {
        id: 'livy',
        name: 'Livy',
        role: 'Operations',
        avatar: livyImg,
        theme: 'ops',
        stats: {
            items: [
                { label: 'Dias de Casa', value: '5' },
                { label: 'Impacto', value: 'Instante' },
                { label: 'Energy', value: '100%' }
            ]
        },
        slides: [
            {
                type: 'intro',
                bg: 'bg-christmas-red',
                title: "LIVY WRAPPED... OPS, STARTED 2025",
                subtitle: "A última peça do quebra-cabeça de 2025.",
                sticker: "The New Challenger 🆕"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-green',
                title: "Tempo de Casa",
                highlight: "1 Semana",
                highlightLabel: "FRESH START",
                text: "Você mal chegou e já sentou na janela. Isso que é entrada triunfal."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Download em Progresso 🧠",
                highlight: "LOADING",
                highlightLabel: "KNOWLEDGE",
                text: "Absorvendo anos de conhecimento migratório em dias. O cérebro deve estar fervendo, mas o sorriso está lá."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Olhar de Novato",
                highlight: "FRESH EYES",
                highlightLabel: "PERSPECTIVE",
                text: "Você traz aquele olhar fresco que a gente precisava para dizer: 'Por que fazemos assim? Dá pra ser melhor!'"
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "A Dupla de Operações",
                highlight: "LIVY & BIA",
                highlightLabel: "DREAM TEAM",
                text: "A Bia organizou a casa, e você chegou para ajudar a manter o castelo de pé. Ninguém segura essa dupla."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-black',
                title: "Primeiros Impactos",
                highlight: "ACTION",
                highlightLabel: "TAKING",
                text: "Mesmo com dias de casa, você já está colocando a mão na massa e otimizando fluxos."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-tech',
                title: "Spoiler de 2026",
                highlight: "1%",
                highlightLabel: "BUT DREAMING BIG",
                text: "Se em uma semana você já mostrou a que veio, 2026 vai ser pequeno para você."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-gold',
                title: "Sua Missão:",
                highlight: "DOMINAR",
                highlightLabel: "A OPERAÇÃO ⚙️",
                text: "Aprender, Otimizar e Executar. O time conta com sua energia para voarmos mais alto."
            },
            {
                type: 'stat-highlight',
                bg: 'bg-christmas-red',
                title: "Bem-vinda à Loucura!",
                highlight: "TEAM",
                highlightLabel: "VIBES",
                text: "Startup é caos, correria e propósito. Que bom que você escolheu pular nesse barco com a gente."
            },
            {
                type: 'outro',
                bg: 'bg-cream',
                title: "Feliz Ano Novo, Livy!",
                text: "2025 foi só o 'Oi'. 2026 é onde sua história na Jumpstart realmente começa. Vamos com tudo! 🚀✨",
                cta: "Lets go 2026",
                ctaLink: "https://www.jumpstartimmigration.com/",
                footer: "Future Ops Star"
            }
        ]
    }
];
