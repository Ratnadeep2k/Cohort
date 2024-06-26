import {atom , selector} from 'recoil'
 import axios from 'axios'

 //async data queries
 export const notifications  = atom ({
    key : "notification",
    default : selector ({
        key:"networkAtomSelector",
        get:async()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
 });

 export const totalNotificationSelector  = selector ({
    key : "totalNotification",
    get:({get})=>{
        const allNotifications = get(notifications);
        return allNotifications.network+allNotifications.jobs+allNotifications.notifications+allNotifications.messaging
    }
 })