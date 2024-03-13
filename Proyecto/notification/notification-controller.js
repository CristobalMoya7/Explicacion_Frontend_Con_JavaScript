import { buildNotification } from "./notification-view.js";


export function notificationController(notificationContainer) {

}

function showNotification(message, notificationContainer) {
    const notification = document.createElement('div');
    notification.innerHTML = buildNotification(message);
    notificationContainer.appendChild(notification)
}