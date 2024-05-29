
const SOUNDS = {
  DANCE: new Audio("https://microcosm.pro/content/files/sounds/dance.mp3"),
  SARASATE: new Audio(
    "https://microcosm.pro/content/files/sounds/sarasate.mp3"
  ),
};

SOUNDS.DANCE.muted = true;
SOUNDS.SARASATE.muted = true;

const toggleAudio = () => {
  SOUNDS.DANCE.muted = !SOUNDS.DANCE.muted;
  console.log(SOUNDS.DANCE.muted);
};
const toggleAudio1 = () => {
  SOUNDS.SARASATE.muted = !SOUNDS.SARASATE.muted;
  console.log(SOUNDS.SARASATE.muted);
};

const playSarasa = () => {
  if (!SOUNDS.SARASATE.muted) {
    SOUNDS.SARASATE.play();
    SOUNDS.SARASATE.volume = 0.99;
  }
};

const playDanse = () => {
  if (!SOUNDS.DANCE.muted) {
    SOUNDS.DANCE.play();
    SOUNDS.DANCE.volume = 0.99;
  }
};

const toggleWPlayAudio1 = () => {
  toggleAudio1();
  if (!SOUNDS.SARASATE.muted) {
    SOUNDS.SARASATE.play();
    SOUNDS.SARASATE.volume = 0.99;
  }
};

const toggleWPlayAudio = () => {
  toggleAudio();
  if (!SOUNDS.DANCE.muted) {
    SOUNDS.DANCE.play();
    SOUNDS.DANCE.volume = 0.99;
  }
};

let config = { strength: 0 };