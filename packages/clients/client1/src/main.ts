import './style.css'
import { User, userSchema } from '@teamsparta-japan/shared1'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Client 1</h1>
  <hr>
  <form id="form">
    <input name="name" type="text" id="name" placeholder="Name">
    <input name="age" type="number" id="age" placeholder="Age">
    <input name="email" type="email" id="email" placeholder="Email">
    <button type="submit">Submit</button>
  </form>
  </div>
`

document.querySelector<HTMLButtonElement>('#form')!.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target as HTMLFormElement)
  const raw: User = {
    name: formData.get('name') as string,
    age: Number(formData.get('age')),
    email: formData.get('email') as string,
    timestamp: new Date(),
  }
  const result = userSchema.safeParse(raw)

  if (!result.success) {
    console.log('Form data is invalid')
    console.log(result.error.format())
    return
  }
  console.log('Form data is valid')
  console.log(result.data)
})
