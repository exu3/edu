const glitchcdn = require('glitch-cdn')

//Structure upload2glitch.upload(authorization, projectId, file, url)
glitchcdn.upload(
  '1c0612ac-e403-4a0b-95e9-3a75d1f650f9',
  'e3de541d-95d7-4ed6-a3ee-89abefa4211b',
  `./frog.png`,
  `img/cutepictures/frog.png`,
  returndata => {
    console.log(returndata)
  },
)
