
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'
import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'


function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
 const networkNotificationcount = useRecoilValue(networkAtom)
 const jobsAtomCout  = useRecoilValue(jobsAtom)
 const notificationAtomCount = useRecoilValue(notificationAtom)
 const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);


  return (
    <>
    <button>Home</button>
    <button>My Network({networkNotificationcount>100?"99+": networkNotificationcount })</button>
    <button>Jobs ({jobsAtomCout})</button> 
    <button>Messaging ({messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>
    <button onClick={()=>{
      setMessagingAtomCount (messagingAtomCount+1);
    }} >Me</button>
    </>
  )
}

export default App
