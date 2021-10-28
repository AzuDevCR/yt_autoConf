// ==UserScript==
// @name         Youtube 'Video paused. Continue watching?' Auto confirmer
// @namespace    Youtube 'Video paused. Continue watching?' Auto confirmer
// @version      1
// @description  Automatically clicks 'Ok' when the 'Video paused. Continue watching?' dialog pops up and pauses your videos.
// @author       AngusWR ESPFix Azudev
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

setInterval(function() {
    'use strict';
    if (document.getElementsByClassName('line-text style-scope yt-confirm-dialog-renderer').length >= 1) {
        for (let i = 0; i < document.getElementsByClassName('line-text style-scope yt-confirm-dialog-renderer').length; i++) {
            if (document.getElementsByClassName('line-text style-scope yt-confirm-dialog-renderer')[i].innerText == "Se ha pausado el vídeo. ¿Quieres seguir viéndolo?") {
                document.getElementsByClassName('line-text style-scope yt-confirm-dialog-renderer')[i].parentNode.parentNode.parentNode.querySelector('#confirm-button').click()
            }
        }
    }
}, 10)();