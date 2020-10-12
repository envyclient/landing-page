export function sizeNavbar () {
  const 
    navbar = <HTMLElement>document.querySelector('.nav'),
    landing = <HTMLElement>document.querySelector('.landing')

  landing.style.paddingTop = navbar.clientHeight + 15 + 'px'
}

export function scrollNavbar () {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30)
      document.querySelector('.nav')?.classList.add('scrolled')
    else
      document.querySelector('.nav')?.classList.remove('scrolled')
  })
}