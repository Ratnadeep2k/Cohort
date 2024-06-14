import {atom} from 'recoil'

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