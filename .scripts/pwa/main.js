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
    pwaToast.innerHTML = `<div class="pwa-msg">${lang['NewContent']}</div><button id="pwa-close">${lang['Close']}</button><button id="pwa-refresh">${lang['Reload']}</button>`
    document.body.appendChild(pwaToast)

    const pwaCloseBtn = pwaToast.querySelector('#pwa-close')
    const pwaRefreshBtn = pwaToast.querySelector('#pwa-refresh')

    let refreshSW

    const refreshCallback = () => refreshSW && refreshSW(true)

    const hideToast = () => {
        pwaToast.classList.remove('show')
    }

    const showToast = () => {
        pwaToast.classList.add('show')
    }

    pwaRefreshBtn.addEventListener('click', refreshCallback)
    pwaCloseBtn.addEventListener('click', hideToast)

    refreshSW = registerSW({
        immediate: true,
        onOfflineReady() {
            console.log('Page is ready to work offline')
        },
        onNeedRefresh() {
            console.log('New content available')
            showToast()
        }
    })
})