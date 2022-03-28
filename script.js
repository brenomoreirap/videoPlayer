let video = document.querySelector("#video")
let volumeContainer = document.querySelector(".volume-container")
let volumeBtn = document.querySelector("#volumeBtn")
let volumeBar = document.querySelector("#volumeBar")
let container = document.querySelector(".container")
let controls = document.querySelector(".controls")
let volume

onload = function () {
    video.addEventListener("dblclick", fullscreen)
    volumeContainer.addEventListener("mouseover", showVolumeBar)
    volumeBar.addEventListener("input", (e) => volumeController(e.target.value))
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
    video.currentTime += -15
}

function forwards() {
    video.currentTime += 15
}

function slowDown() {
    video.playbackRate -= 0.5
}

function speedUp() {
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

function volumeController(value) {
    volumeBar.value = value
    let volumeBarBg = `linear-gradient(90deg, #fff ${volumeBar.value}%, #333 ${volumeBar.value}%)`

    video.volume = value / 100
    volumeBar.style.background = volumeBarBg

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
        volume = volumeBar.value
        volumeController(0)
    } else if (video.volume == 0) {
        volumeController(volume)
    }

}

function fullscreen() {
    container.requestFullscreen()
}