
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
            subDefault: 'Interativo'
        },
        {
            id: 'gravity',
            iconId: 'icon-gravity',
            titleKey: 'exp_gravity_title',
            titleDefault: 'Gravidade',
            subKey: 'exp_gravity_sub',
            subDefault: 'Partículas'
        },
        {
            id: 'pendulum',
            iconId: 'icon-pendulum',
            titleKey: 'exp_pendulum_title',
            titleDefault: 'Pêndulo Duplo',
            subKey: 'exp_pendulum_sub',
            subDefault: 'Caos'
        },
        {
            id: 'fourier',
            iconId: 'icon-wave',
            titleKey: 'exp_fourier_title',
            titleDefault: 'Séries de Fourier',
            subKey: 'exp_fourier_sub',
            subDefault: 'Ondas'
        },
        {
            id: 'harmonic',
            iconId: 'icon-harmonic',
            titleKey: 'exp_harmonic_title',
            titleDefault: 'Movimento Harmônico',
            subKey: 'exp_harmonic_sub',
            subDefault: 'Molas'
        },
        {
            id: 'chaos',
            iconId: 'icon-chaos',
            titleKey: 'exp_chaos_title',
            titleDefault: 'Jogo do Caos',
            subKey: 'exp_chaos_sub',
            subDefault: 'Fractais'
        },
        {
            id: 'lissajous',
            iconId: 'icon-lissajous',
            titleKey: 'exp_lissajous_title',
            titleDefault: 'Curvas de Lissajous',
            subKey: 'exp_lissajous_sub',
            subDefault: 'Curvas'
        }
    ]
};

window.PlaygroundData = PlaygroundData;
