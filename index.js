const wrapper = document.querySelector('.wrapper')
const neck = document.querySelector('.neck')
const loveEl = document.querySelector('#loves')
const lengthEl = document.querySelector('#length')

let loves = 0

document.querySelector('.print').addEventListener('click', () => {
  window.print()
})

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
    }
  });
}, {});

function injectNeck(entry) {

    observer.unobserve(entry.target)
    const clonedNeck = neck.cloneNode(true)
    wrapper.appendChild(clonedNeck) 
    observer.observe(clonedNeck) 

    injectLove()
}

function injectLove() {
   loves++;
   loveEl.innerText = loves;

  const newLove = document.createElement('div')
  newLove.className = 'textlove'
  newLove.innerText = 'love ya gee'
  newLove.style.left = Math.random() * window.innerWidth - 200 + 'px'
  newLove.style.top = wrapper.offsetHeight - 200 + 'px'
  document.body.appendChild(newLove)
}

observer.observe(neck)

