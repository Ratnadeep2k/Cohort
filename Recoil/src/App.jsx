
import { useMemo } from 'react'
import './App.css'
import {  notifications,  totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'


function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
  const [networkCount,setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
 
//  const totalCount  = useMemo(()=>{
//   return (networkNotificationcount+jobsAtomCout+notificationAtomCount+messagingAtomCount)
//  },[networkNotificationcount,jobsAtomCout,notificationAtomCount,messagingAtomCount]);


  return (
    <>
    <button>Home</button>
    <button>My Network({networkCount.networks>100?"99+": networkCount.network })</button>
    <button>Jobs ({networkCount.jobs})</button> 
    <button>Messaging ({networkCount.messaging})</button>
    <button>Notifications ({networkCount.notifications})</button>
    <button>Me {totalNotificationCount}</button>
    </>
  )
}

export default App
