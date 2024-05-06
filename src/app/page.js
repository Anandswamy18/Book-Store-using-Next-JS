import Fotter from '../app/Component/Fotter'
import Dashboard from '../app/Dashoard/page'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flexGrow: 1 }}>
        <Dashboard/>
      </div>
      <Fotter/>
    </div>
  )
}
