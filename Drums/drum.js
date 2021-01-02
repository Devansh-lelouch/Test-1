const KeYs = ['a','s','d','f','g','h','j','k','l'];
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener("click", () => playKey(key));
});
document.addEventListener("keydown",keyPressed)
function keyPressed(event){
  const key = event.key;
  const keyIndex = KeYs.indexOf(key);
  if(keyIndex >-1){
    playKey(keys[keyIndex])

  }
}
function playKey(key){
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.play()
    keyAudio.currentTime =0
    key.classList.add("active")
    keyAudio.addEventListener("ended",()=>{
      key.classList.remove("active")
    })
}