
import { useMemo } from 'react'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotification } from './atoms'
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
 const messagingAtomCount = useRecoilValue(messagingAtom);

 const totalCount = useRecoilValue(totalNotification);
 
//  const totalCount  = useMemo(()=>{
//   return (networkNotificationcount+jobsAtomCout+notificationAtomCount+messagingAtomCount)
//  },[networkNotificationcount,jobsAtomCout,notificationAtomCount,messagingAtomCount]);


  return (
    <>
    <button>Home</button>
    <button>My Network({networkNotificationcount>100?"99+": networkNotificationcount })</button>
    <button>Jobs ({jobsAtomCout})</button> 
    <button>Messaging ({messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>
    <button>Me {totalCount}</button>
    </>
  )
}

export default App
