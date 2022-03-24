var video = document.querySelector("#video")
var volumeContainer = document.querySelector(".volume-container")
var volumeBtn = document.querySelector("#volumeBtn")
var volumeBar = document.querySelector("#volumeBar")

onload = function () {
    video.addEventListener("dblclick", fullscreen)
    volumeContainer.addEventListener("mouseover", showVolumeBar)
    volumeBar.addEventListener("change", volumeController)
    volumeBtn.addEventListener("click", function () {

        if (video.volume != 0) {
            video.volume = 0
            volumeBar.value = 0
            volumeBtn.classList.remove("fa-volume-high")
            volumeBtn.classList.remove("fa-volume-low")
            volumeBtn.classList.add("fa-volume-xmark")

        } else if (video.volume == 0) {
            video.volume = 0.5
            volumeBar.value = 30
            volumeBtn.classList.remove("fa-volume-high")
            volumeBtn.classList.remove("fa-volume-xmark")
            volumeBtn.classList.add("fa-volume-low")
        }
    })
    document.querySelector(".container").addEventListener("mouseover", function () {
        document.querySelector(".controls").style.bottom = "0"
        document.querySelector(".container").addEventListener("mouseleave", function () {
            document.querySelector(".controls").style.bottom = "-3.125rem"
        })
    })
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

function showVolumeBar() {
    document.querySelector("#volumeBar").style.display = "inline-block"
    volumeContainer.addEventListener("mouseleave", function () {
        document.querySelector("#volumeBar").style.display = "none"
    })
}

function volumeController() {
    video.volume = document.querySelector("#volumeBar").value / 100

    if (video.volume == 0) {
        volumeBtn.classList.remove("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-low")
        volumeBtn.classList.add("fa-volume-xmark")

    } else if (video.volume > 0 && video.volume < 0.5) {
        volumeBtn.classList.remove("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-xmark")
        volumeBtn.classList.add("fa-volume-low")

    } else {
        volumeBtn.classList.add("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-xmark")
        volumeBtn.classList.remove("fa-volume-low")
    }

}

function fullscreen() {
    let fullscreenBtn = document.querySelector("#fullscreenBtn")
    video.requestFullscreen()
}