const timeline = gsap.timeline({ default: { ease: "power4.out" } });
timeline
  .from(".name", {
    delay: 0.5,
    duration: 1.3,
    opacity: 0,
    y: -25,
  })
  .from(
    ".location",
    {
      duration: 2,
      opacity: 0,
      y: -5,
    },
    0.6
  )
  .from(
    ".first__box",
    {
      duration: 1.2,
      opacity: 0,
    },
    1.3
  )
  .from(
    ".second__box",
    {
      duration: 1.2,
      opacity: 0,
    },
    1.8
  )
  .from(
    ".third__box",
    {
      duration: 1.2,
      opacity: 0,
    },
    2.3
  )
  .from(
    ".first__number",
    {
      duration: 0.5,
      opacity: 0,
      y: -15,
    },
    1.5
  )
  .from(
    ".second__number",
    {
      duration: 0.5,
      opacity: 0,
      y: -15,
    },
    2
  )
  .from(
    ".third__number",
    {
      duration: 0.5,
      opacity: 0,
      y: -15,
    },
    2.5
  )
  .from(".category", {
    duration: 0.8,
    opacity: 0,
    y: -10,
  });
