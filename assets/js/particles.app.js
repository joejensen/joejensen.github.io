Particles.init
({
  selector: '.background',
  color: ['#FFFFFF'],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 5000,
      options: {
        maxParticles: 150,
      }
    },
    {
      breakpoint: 768,
      options: {
        maxParticles: 80,
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 80,
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0
      }
    }
  ]
});