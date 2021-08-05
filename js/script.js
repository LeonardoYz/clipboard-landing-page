const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#header .header__logo, #header .header__text,
  #header .buttons, #details .details__text,
  #details .details__container, #more .more__text,
  #more .more__image, #workflow .workflow__text,
  #workflow .workflow__cards, #brands-logos .brands-logos__container,
  #clipboard .clipboard__text, #clipboard .buttons,
  #footer .footer__container
  `,
  { interval: 100 }
)
