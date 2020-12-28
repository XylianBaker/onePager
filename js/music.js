document.addEventListener('DOMContentLoaded', () => {

    // name 🤵, music 🎶 and albumcover 📼
    const src = [
        [
            "JFK", "French House", "assets/music/French_house.mp3", "assets/img/french_house_cover.jpg"
        ],
        [
            "JFK", "LoFi HipHop", "assets/music/LoFi_jkammellander.mp3",
            "assets/img/lofi_cover.jpg"
        ],
        [
            "JFK", "Popcorn", "assets/music/popcorn.mp3", "assets/img/popcorn_cover.jpg"
        ],
        [
            "Apashe", "Overture", "assets/music/overture.mp3", "assets/img/overture_cover.jpg"
        ],
        [
            "Aests ", "FIGHT!", "assets/music/fight.mp3", "assets/img/fight_cover.jpg"
        ]
    ];

    // displaying📟 the tracks 📼

    for (x = 0; x < src.length; x++) {
        var s = src[x];
        var number = parseInt(x) + 1;
        var artist = document.createTextNode(number + ": " + s[0]);
        var track_name = document.createTextNode(s[1]);

        var listItem = document.createElement('div');
        var artist_text = document.createElement('h3');
        var track_text = document.createElement('p');

        artist_text.appendChild(artist);
        track_text.appendChild(track_name);

        listItem.appendChild(artist_text);
        listItem.appendChild(track_text);

        listItem.classList.add('item');
        listItem.dataset.index = x;

        document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);

    // list 📑

    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
        el.onclick = () => {
            displayTrack(el.dataset.index);
        };
    });

    // display 📟
    function displayTrack(x) {
        var active = document.querySelector('.is-active');
        if (active) {
            active.classList.remove('is-active');
        }
        var el = document.getElementById('list').children[x];
        el.classList.add('is-active');
        var s = src[x],
            artist = s[0],
            track = s[1],
            audio = s[2],
            img = s[3],
            number = parseInt(x) + 1;
        document.getElementById('title').innerText = number + ": " + artist;
        document.getElementById('song_title').innerText = track;
        var albumArt = document.getElementById('art');
        albumArt.src = img;
        albumArt.alt = artist + " " + track;
        document.getElementById('audio').src = audio;
    }
})