const presence = new Presence({
    clientId: "713563682722021436"
  }),
  browsingTimestamp = Math.floor(Date.now() / 1000);
let login,
  register,
  target: string,
  bullsEye: string,
  playing,
  action,
  textArray;
const path = document.location.pathname,
  check = window.addEventListener("click", function (event) {
    target = (event.target as HTMLTextAreaElement).textContent;
    if (target) {
      if (target.includes("Home")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("Explore")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("My Stuff")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("Premium")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("Contribute")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("Settings")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("About")) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes("New Updates")) {
        bullsEye = target;
        return bullsEye;
      } else if (
        target.includes("NEW SINGLEPLAYER GAME") ||
        target.includes("CONTINUE GAME") ||
        target.includes("NEW MULTIPLAYER GAME")
      ) {
        bullsEye = target;
        return bullsEye;
      } else if (target.includes(""))
        return (bullsEye = "NEW SINGLEPLAYER GAME");
      else return bullsEye;
    } else return (bullsEye = "Home");
  });
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "ailogo",
    startTimestamp: browsingTimestamp
  };
  if (window.location.hostname === "aidungeon.io") {
    presence.info("Online");
    if (path === "/" || path === "") {
      presenceData.details = "Home";
      textArray = document.getElementsByClassName(
        "elementor-headline-dynamic-letter elementor-headline-animation-in"
      );
      if (textArray) {
        if (textArray[0].textContent === "s")
          presenceData.state = "Create your own Story";
        else if (textArray[0].textContent === "a")
          presenceData.state = "Create your own Adventure";
        else if (textArray[0].textContent === "f")
          presenceData.state = "Create your own Fantasy";
        else if (textArray[0].textContent === "m")
          presenceData.state = "Create your own Mystery";
        else if (textArray[0].textContent === "r")
          presenceData.state = "Create your own Romance";
        else if (textArray[0].textContent === "d")
          presenceData.state = "Create your own Dream";
        else if (textArray[0].textContent === "w")
          presenceData.state = "Create your own World";
      }
    } else if (path === "/play-ai-dungeon/")
      presenceData.details = "Selecting Platform to play on";
    else if (path === "/terms-of-service/")
      presenceData.details = "Reading Terms of Service";
    else if (path === "/privacy-policy/")
      presenceData.details = "Reading Privacy Policy";
  }
  if (window.location.hostname === "play.aidungeon.io") {
    login = document.querySelector(
      "#root > div > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-13awgt0 > div > div > div > div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-15d164r.r-156q2ks.r-13qz1uu > div:nth-child(1)"
    );
    register = document.querySelector(
      "#root > div > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-13awgt0 > div > div > div > div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-15d164r.r-156q2ks.r-13qz1uu > div:nth-child(2)"
    );
    playing = document.querySelector(
      "#root > div > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-13awgt0 > div > div:nth-child(2) > div.css-1dbjc4n.r-18u37iz.r-13qz1uu > div.css-1dbjc4n.r-13awgt0.r-18u37iz > textarea"
    );
    action = document.querySelector(
      "#root > div > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-13awgt0 > div > div:nth-child(2) > div.css-1dbjc4n.r-18u37iz.r-13qz1uu > div.css-1dbjc4n.r-13awgt0.r-18u37iz > div > div"
    );

    if (login) {
      if (login.getAttribute("aria-label") === "Login (selected)")
        presenceData.details = "Logging in";
      else if (register.getAttribute("aria-label") === "Register (selected)")
        presenceData.details = "Registering";
      else presenceData.details = "Loading ...";
    } else {
      check;
      presence.info(bullsEye);
      if (bullsEye === "Home" || bullsEye === "home")
        presenceData.details = "Viewing Home";
      else if (bullsEye === "Explore" || bullsEye === "explore")
        presenceData.details = "Exploring Scenarios and Adventures";
      else if (bullsEye === "My Stuff" || bullsEye === "my stuff")
        presenceData.details = "Browsing my stuff";
      else if (bullsEye === "Premium" || bullsEye === "premium")
        presenceData.details = "Considering Premium";
      else if (bullsEye === "Contribute" || bullsEye === "contribute")
        presenceData.details = "Reading the Contribute Message";
      else if (bullsEye === "Settings" || bullsEye === "settings")
        presenceData.details = "Changing Settings";
      else if (bullsEye === "About" || bullsEye === "about")
        presenceData.details = "Looking at the about";
      else if (bullsEye === "Profile") presenceData.details = "Viewing Profile";
      else if (bullsEye === "") presenceData.details = "Viewing Menu";
      else if (
        bullsEye === "NEW SINGLEPLAYER GAME" ||
        bullsEye === "CONTINUE GAME" ||
        bullsEye === "NEW MULTIPLAYER GAME"
      ) {
        if (playing) {
          if (playing.textContent === "" || playing.textContent === null) {
            presenceData.details = "Playing";
            presenceData.state = "Reading";
            presenceData.smallImageKey = "read";
            presenceData.smallImageText = "Reading Current Message";
          } else {
            presenceData.details = "Playing";
            presenceData.smallImageKey = "play";
            presenceData.smallImageText = "Playing a Game";
            if (action.getAttribute("aria-label") === "Do") {
              presenceData.state = `Doing: ${playing.textContent}`;
              delete presenceData.startTimestamp;
            } else if (action.getAttribute("aria-label") === "Say") {
              presenceData.state = `Saying: ${playing.textContent}`;
              delete presenceData.startTimestamp;
            } else if (action.getAttribute("aria-label") === "Story") {
              presenceData.state = `Story is: ${playing.textContent}`;
              delete presenceData.startTimestamp;
            }
          }
        } else if (!playing) {
          playing = document.querySelector(
            "#root > div > div > div > div > div:nth-child(4) > div > div.css-1dbjc4n.r-13awgt0 > div > div:nth-child(2) > div.css-1dbjc4n.r-18u37iz.r-13qz1uu > div.css-1dbjc4n.r-13awgt0.r-18u37iz > textarea"
          );
          if (playing) {
            if (playing.textContent === "" || playing.textContent === null) {
              presenceData.details = "Playing";
              presenceData.state = "Reading";
              presenceData.smallImageKey = "read";
              presenceData.smallImageText = "Reading Current Message";
            } else {
              presenceData.details = "Playing";
              presenceData.smallImageKey = "play";
              presenceData.smallImageText = "Playing a Game";
              action = document.querySelector(
                "#root > div > div > div > div > div:nth-child(4) > div > div.css-1dbjc4n.r-13awgt0 > div > div:nth-child(2) > div.css-1dbjc4n.r-18u37iz.r-13qz1uu > div.css-1dbjc4n.r-13awgt0.r-18u37iz > div > div"
              );
              if (action.getAttribute("aria-label") === "Do") {
                presenceData.state = `Doing: ${playing.textContent}`;
                delete presenceData.startTimestamp;
              } else if (action.getAttribute("aria-label") === "Say") {
                presenceData.state = `Saying: ${playing.textContent}`;
                delete presenceData.startTimestamp;
              } else if (action.getAttribute("aria-label") === "Story") {
                presenceData.state = `Story is: ${playing.textContent}`;
                delete presenceData.startTimestamp;
              }
            }
          } else presenceData.details = "Viewing Home";
        }
      } else presenceData.details = "Viewing Home";
    }
  }
  if (presenceData.details) presence.setActivity(presenceData);
  else presence.setActivity();
});
