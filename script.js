let video = document.querySelector("#video")
let volumeContainer = document.querySelector(".volume-container")
let volumeBtn = document.querySelector("#volumeBtn")
let volumeBar = document.querySelector("#volumeBar")
let container = document.querySelector(".container")
let controls = document.querySelector(".controls")

onload = function () {
    video.addEventListener("dblclick", fullscreen)
    volumeContainer.addEventListener("mouseover", showVolumeBar)
    volumeBar.addEventListener("input", volumeController)
    container.addEventListener("mouseover", showControls)
    volumeBtn.addEventListener("click", mute)
}

function playPause() {
    let playPauseBtn = document.querySelector("#playPauseBtn")

    if (playPauseBtn.classList.contains("fa-play")) {
        video.play()
        playPauseBtn.classList.remove("fa-play")
        playPauseBtn.classList.add("fa-pause")
    } else if (playPauseBtn.classList.contains("fa-pause")) {
        video.pause()
        playPauseBtn.classList.remove("fa-stop")
        playPauseBtn.classList.add("fa-play")
    }
}

function backwards() {
    let backwardsBtn = document.querySelector("#farwordBtn")

    video.currentTime += -15
}

function forwards() {
    let forwardsBtn = document.querySelector("#farwordBtn")

    video.currentTime += 15
}

function slowDown() {
    let slowDownBtn = document.querySelector("#slowDownBtn")
    video.playbackRate -= 0.5
}

function speedUp() {
    let speedUpBtn = document.querySelector("#speedUpBtn")
    video.playbackRate += 0.5
}

function showControls() {
    controls.style.bottom = "0"
    container.addEventListener("mouseleave", function () {
        controls.style.bottom = "-3.125rem"
    })
}

function showVolumeBar() {
    volumeBar.style.opacity = "100%"
    volumeBar.style.width = "6.25rem"
    volumeContainer.addEventListener("mouseleave", function () {
        volumeBar.style.width = "0rem"
        volumeBar.style.opacity = "0%"
    })
}

function volumeController() {
    let volumeBarValue = this.value
    let volumeBarBg = `linear-gradient(90deg, #fff ${volumeBarValue}%, #333 ${volumeBarValue}%)`

    video.volume = this.value / 100
    this.style.background = volumeBarBg

    if (volumeBar.value == 0) {
        volumeBtn.classList.add("fa-volume-xmark")
        volumeBtn.classList.remove("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-low")

    } else if (volumeBar.value > 0 && volumeBar.value < 50) {
        volumeBtn.classList.add("fa-volume-low")
        volumeBtn.classList.remove("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-xmark")

    } else {
        volumeBtn.classList.add("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-xmark")
        volumeBtn.classList.remove("fa-volume-low")
    }
}

function mute() {
    if (video.volume != 0) {
        video.volume = 0
        volumeBar.value = 0
    } else if (video.volume == 0) {
        video.volume = 0.3
        volumeBar.value = 30
    }

}

function fullscreen() {
    container.requestFullscreen()
}