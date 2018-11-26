var playlist = new Object({artist: 'song'});

function updatePlaylist(obj, artist, name) {
  return Object.assign({}, obj, { [artist]: name});
}

