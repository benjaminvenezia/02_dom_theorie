
export default class PersonCard extends HTMLElement {
  constructor(name, age, job) {
    super()
    this.setAttribute('class', 'card')

    const cardContent = document.createElement('div')
    cardContent.className = 'card-content'
    this.appendChild(cardContent)

    const media = document.createElement('div')
    media.className = 'media'
    cardContent.appendChild(media)
    const mediaContent = document.createElement('div')
    mediaContent.className = 'media-content'
    media.appendChild(mediaContent)

    this.nameCt = document.createElement('p')
    this.nameCt.className = 'title is-4'
    this.nameCt.textContent = name
    this.jobCt = document.createElement('p')
    this.jobCt.className = 'subtitle is-6'
    this.jobCt.textContent = job

    this.ageCt = document.createElement('p')
    this.ageCt.className = 'subtitle is-6'
    this.ageCt.textContent = age + ' Years old'

    mediaContent.appendChild(this.nameCt)
    mediaContent.appendChild(this.jobCt)
    mediaContent.appendChild(this.ageCt)

  }
}
customElements.define('person-card', PersonCard)
