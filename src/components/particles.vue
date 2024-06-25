<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      url="http://foo.bar/particles.json"
      class="h-full opacity-40"
    />

    <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#212529',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -100,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 500,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 300,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          move: {
            direction: 'left',
            enable: true,
            outModes: 'out',
            random: false,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
            },
            value: 20,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 5, max: 13 },
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>

<script setup>
const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>
