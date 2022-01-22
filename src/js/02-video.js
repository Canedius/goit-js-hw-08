import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

const saveData = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(saveData);
const time = parsedData.seconds;

if (time === 571.52) {
  localStorage.removeItem('videoplayer-current-time');
} else {
  player
    .setCurrentTime(time)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
