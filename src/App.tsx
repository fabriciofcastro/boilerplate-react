import { Button } from './components/ui/button'

export function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Button>Enviar</Button>
        <Button variant={'destructive'}>Enviar</Button>
      </div>
    </>
  )
}
