export function sizeNavbar () {
  const 
    navbar = <HTMLElement>document.querySelector('.nav'),
    landing = <HTMLElement>document.querySelector('.landing .content')

  if(landing !== null)
    landing.style.top = `calc(30% + ${ navbar?.clientHeight }px)`
}

export function scrollNavbar () {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30)
      document.querySelector('.nav')?.classList.add('scrolled')
    else
      document.querySelector('.nav')?.classList.remove('scrolled')
  })
}