import { registerSW } from 'virtual:pwa-register'
import i18n from './i18n.json'
import styleCSS from './style.css?inline'

window.addEventListener('load', () => {
    const lang = i18n[window.EC_WWW_LANG || 'en']

    const toastStyleEl = document.createElement('style')
    toastStyleEl.innerText = styleCSS
    document.head.appendChild(toastStyleEl)

    const pwaToast = document.createElement('div')
    pwaToast.className = 'pwa-toast'
    pwaToast.setAttribute('role', 'alert')
    pwaToast.innerHTML = `<div class="pwa-msg"></div><button class="pwa-close">${lang['Close']}</button><button class="pwa-refresh">${lang['Reload']}</button>`
    document.body.appendChild(pwaToast)

    const pwaMsg = pwaToast.querySelector('.pwa-msg')
    const pwaCloseBtn = pwaToast.querySelector('.pwa-close')
    const pwaRefreshBtn = pwaToast.querySelector('.pwa-refresh')

    let refreshSW
    let needRefresh

    const refreshCallback = () => {
        refreshSW && refreshSW(true)
        needRefresh = false
    }

    const hideToast = () => {
        pwaToast.classList.remove('show')
    }

    const showToast = (msg, isRefresh) => {
        pwaMsg.innerText = msg
        pwaToast.classList[isRefresh ? 'add' : 'remove']('is-refresh')
        pwaToast.classList.add('show')
    }

    pwaRefreshBtn.addEventListener('click', refreshCallback)
    pwaCloseBtn.addEventListener('click', hideToast)

    const onOffline = () => needRefresh || showToast(lang['Offline'])
    navigator.onLine || onOffline()

    window.addEventListener('online', () => needRefresh || hideToast())
    window.addEventListener('offline', onOffline)

    refreshSW = registerSW({
        immediate: true,
        onOfflineReady() {
            console.log('Page is ready to work offline')
        },
        onNeedRefresh() {
            console.log('New content available')
            needRefresh = true
            showToast(lang['NewContent'], true)
        },
        onRegisterError(e) {
            console.error('failed to register service worker', e)
        }
    })
})