const fSpeakers = [
  {
    image: 'img/linusTorvalds.png',
    name: 'Linus Torvalds',
    occupation: 'Developer of Linux OS',
  },
  {
    image: 'img/edwardSnowden.png',
    name: 'Edward Snowden',
    occupation: 'Former NSA Analyst',
  },
  {
    image: 'img/larryPage.png',
    name: 'Larry Page',
    occupation: 'Cofounder of Google',
  },
  {
    image: 'img/sergeiBrin.png',
    name: 'Sergei Brin',
    occupation: 'Cofounder of Google',
  },
  {
    image: 'img/elonMusk.png',
    name: 'Elon Musk',
    occupation: 'CEO of Tesla Motors',
  },
  {
    image: 'img/billGates.png',
    name: 'Bill Gates',
    occupation: 'Cofounder of Microsoft',
  },
];

const speakerContainer = document.querySelector('.deskSpeakersGrid');

fSpeakers.forEach((speaker) => {
  const speakerTemplate = `<div class="gridItem speakerContainer">
      <img src="${speaker.image}" alt="speaker place holder image">
      <div>
          <h1>${speaker.name}</h1>
          <h2>${speaker.occupation}</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex libero, commodo ac massa non, mollis dictum ante. Morbi eu purus tellus. Maecenas nec turpis.</p>                            
      </div>
  </div>`;
  speakerContainer.innerHTML += speakerTemplate;
});

const mobileSpeakers = fSpeakers.slice(0, 2);
const mobileSpeakerContainer = document.querySelector('.mobileSpeakerContainer');
mobileSpeakers.forEach((speaker) => {
  const mobileSpeakerTemplate = `<div class="mobile">
      <div class="speakerContainer ">
          <img src="${speaker.image}" alt="speaker place holder image">
          <div>
              <h1>${speaker.name}</h1>
              <h2>${speaker.occupation}</h2>
              <hr>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex libero, commodo ac massa non, mollis dictum ante. Morbi eu purus tellus. Maecenas nec turpis.</p>
          </div>
      </div>
  </div>`;
  mobileSpeakerContainer.innerHTML += mobileSpeakerTemplate;
});
