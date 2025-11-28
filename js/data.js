
/**
 * Data definitions for Resume and Playground content.
 * Used to populate the UI via Components.js.
 */

const PlaygroundData = {
    experiments: [
        {
            id: 'fluid',
            iconId: 'icon-fluid',
            titleKey: 'exp_fluid_title',
            titleDefault: 'Simulação de Fluidos',
            subKey: 'exp_fluid_sub',
            subDefault: 'Interativo',
            gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
        },
        {
            id: 'gravity',
            iconId: 'icon-gravity',
            titleKey: 'exp_gravity_title',
            titleDefault: 'Gravidade',
            subKey: 'exp_gravity_sub',
            subDefault: 'Partículas',
            gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
        },
        {
            id: 'pendulum',
            iconId: 'icon-pendulum',
            titleKey: 'exp_pendulum_title',
            titleDefault: 'Pêndulo Duplo',
            subKey: 'exp_pendulum_sub',
            subDefault: 'Caos',
            gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
        },
        {
            id: 'fourier',
            iconId: 'icon-wave',
            titleKey: 'exp_fourier_title',
            titleDefault: 'Séries de Fourier',
            subKey: 'exp_fourier_sub',
            subDefault: 'Ondas',
            gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
        },
        {
            id: 'harmonic',
            iconId: 'icon-harmonic',
            titleKey: 'exp_harmonic_title',
            titleDefault: 'Movimento Harmônico',
            subKey: 'exp_harmonic_sub',
            subDefault: 'Molas',
            gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
        },
        {
            id: 'chaos',
            iconId: 'icon-chaos',
            titleKey: 'exp_chaos_title',
            titleDefault: 'Jogo do Caos',
            subKey: 'exp_chaos_sub',
            subDefault: 'Fractais',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 'lissajous',
            iconId: 'icon-lissajous',
            titleKey: 'exp_lissajous_title',
            titleDefault: 'Curvas de Lissajous',
            subKey: 'exp_lissajous_sub',
            subDefault: 'Curvas',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
    ]
};

window.PlaygroundData = PlaygroundData;
