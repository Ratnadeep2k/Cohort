
import './App.css'
import { networkAtom } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'


function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
 const networkNotificationcount = useRecoilValue(networkAtom)

  return (
    <>
    <button>Home</button>
    <button>My Network({networkNotificationcount>100?"99+": networkNotificationcount })</button>
    <button>Jobs ()</button>
    <button>Messaging ()</button>
    <button>Notifications ()</button>
    </>
  )
}

export default App
