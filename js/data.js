
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
            gradient: 'linear-gradient(135deg, #7D7D7D 0%, #525252 100%)'
        },
        {
            id: 'gravity',
            iconId: 'icon-gravity',
            titleKey: 'exp_gravity_title',
            titleDefault: 'Gravidade',
            subKey: 'exp_gravity_sub',
            subDefault: 'Partículas',
            gradient: 'linear-gradient(135deg, #B8860B 0%, #805C05 100%)'
        },
        {
            id: 'pendulum',
            iconId: 'icon-pendulum',
            titleKey: 'exp_pendulum_title',
            titleDefault: 'Pêndulo Duplo',
            subKey: 'exp_pendulum_sub',
            subDefault: 'Caos',
            gradient: 'linear-gradient(135deg, #4A565E 0%, #2C353C 100%)'
        },
        {
            id: 'fourier',
            iconId: 'icon-wave',
            titleKey: 'exp_fourier_title',
            titleDefault: 'Séries de Fourier',
            subKey: 'exp_fourier_sub',
            subDefault: 'Ondas',
            gradient: 'linear-gradient(135deg, #A66444 0%, #754229 100%)'
        },
        {
            id: 'harmonic',
            iconId: 'icon-harmonic',
            titleKey: 'exp_harmonic_title',
            titleDefault: 'Movimento Harmônico',
            subKey: 'exp_harmonic_sub',
            subDefault: 'Molas',
            gradient: 'linear-gradient(135deg, #6E6056 0%, #453B34 100%)'
        },
        {
            id: 'chaos',
            iconId: 'icon-chaos',
            titleKey: 'exp_chaos_title',
            titleDefault: 'Jogo do Caos',
            subKey: 'exp_chaos_sub',
            subDefault: 'Fractais',
            gradient: 'linear-gradient(135deg, #353b48 0%, #1e272e 100%)'
        },
        {
            id: 'lissajous',
            iconId: 'icon-lissajous',
            titleKey: 'exp_lissajous_title',
            titleDefault: 'Curvas de Lissajous',
            subKey: 'exp_lissajous_sub',
            subDefault: 'Curvas',
            gradient: 'linear-gradient(135deg, #806548 0%, #523F2A 100%)'
        }
    ]
};

window.PlaygroundData = PlaygroundData;
