import {atom , selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkState',
    default: 104
});

export const jobsAtom = atom({
    key: 'jobsState',
    default: 0
});
export const notificationAtom = atom({
    key: 'notificationState',
    default: 12
});
export const messagingAtom = atom({
    key:"msgAtom",
    default: 0
})

export const totalNotification = selector({
    key :"selector",
    get:({get})=>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);
        const messagingCount = get(messagingAtom);
        return networkCount+jobsCount+notificationCount+messagingCount;
    }
})