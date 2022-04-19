import { registerSW } from 'virtual:pwa-register'
import i18n from './i18n.json'
// TODO minify
import styleCSS from './style.css?raw'

window.addEventListener('load', () => {
    const lang = i18n[window.EC_WWW_LANG || 'en']

    const toastStyleEl = document.createElement('style')
    toastStyleEl.innerText = styleCSS
    document.head.appendChild(toastStyleEl)

    const pwaToast = document.createElement('div')
    pwaToast.className = 'pwa-toast'
    pwaToast.setAttribute('role', 'alert')
    pwaToast.innerHTML = `<div class="message"></div><button id="pwa-refresh">${lang['Reload']}</button><button id="pwa-close">${lang['Close']}</button>`
    document.body.appendChild(pwaToast)

    const pwaToastMessage = pwaToast.querySelector('.message')
    const pwaCloseBtn = pwaToast.querySelector('#pwa-close')
    const pwaRefreshBtn = pwaToast.querySelector('#pwa-refresh')

    let refreshSW

    const refreshCallback = () => refreshSW && refreshSW(true)

    const hidePwaToast = () => {
        if (pwaToast.classList.contains('refresh')) {
            pwaRefreshBtn.removeEventListener('click', refreshCallback)
        }

        pwaToast.classList.remove('show', 'refresh')
    }
    const showPwaToast = (offline) => {
        hidePwaToast()

        if (!offline) {
            pwaRefreshBtn.addEventListener('click', refreshCallback)
            pwaToast.classList.add('refresh')
        }

        pwaToast.classList.add('show')
    }

    pwaCloseBtn.addEventListener('click', hidePwaToast)
    refreshSW = registerSW({
        immediate: true,
        onOfflineReady() {
            pwaToastMessage.innerHTML = lang['ReadyOffline']
            showPwaToast(true)
        },
        onNeedRefresh() {
            pwaToastMessage.innerHTML = lang['NewContent']
            showPwaToast(false)
        }
    })
})