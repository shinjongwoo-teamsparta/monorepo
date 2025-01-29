import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { range } from 'lodash'
import ky from 'ky'
import { User } from '@teamsparta-japan/shared1'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p>
      <button id="fetcher" type="button">Fetch</button>
    </p>
  </div>
`

document.querySelector<HTMLButtonElement>('#fetcher')!.addEventListener('click', () => {
  const payload: User = {
    name: 'John',
    age: 1010,
    timestamp: new Date(),
    email: 'zod@dot.com',
  }
  ky.post('http://localhost:3215', {
    json: payload,
  })
    .then(response => response.text())
    .then(text => console.log(text))
})
