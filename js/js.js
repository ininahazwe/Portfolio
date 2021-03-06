TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 0,
    top: "-100%",
    ease: Expo.easeInOut
  })

  TweenMax.from(".filigrane", 0, {
    delay: 1,
    top: "100%",
    ease: Expo.easeInOut
  })