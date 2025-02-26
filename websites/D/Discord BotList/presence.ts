const presence = new Presence({
    clientId: "819122551435296818"
  }),
  botBrowsing = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
      largeImageKey: "logo",
      startTimestamp: botBrowsing
    },
    botPage = document.location.pathname,
    botHost = document.location.hostname,
    buttons = await presence.getSetting<boolean>("buttons"),
    sSubmit = await presence.getSetting<boolean>("submitP");

  if (botHost === "discord-botlist.eu") {
    if (botPage === "/") presenceData.details = "Browsing";
    else if (botPage === "/search") {
      presenceData.details = "Searching Bot:";
      presenceData.state = document
        .querySelector("[name='search']")
        .getAttribute("value");
      presenceData.buttons = [
        {
          label: "View Search",
          url: document.URL
        }
      ];
    } else if (botPage === "/bots/tag") {
      presenceData.details = "Searching Tag:";
      presenceData.state = new URLSearchParams(window.location.search).get(
        "tag"
      );
      presenceData.buttons = [
        {
          label: "View Tag",
          url: document.URL
        }
      ];
    } else if (botPage === "/login_err/")
      presenceData.details = "Login In Page";
    else if (botPage.includes("/users/")) {
      presenceData.details = "Viewing Profile:";
      presenceData.state = document.querySelector("#Username").textContent;
      presenceData.buttons = [
        {
          label: "View Profile",
          url: document.URL
        }
      ];
    } else if (botPage.includes("/bots/")) {
      if (botPage.includes("/new")) presenceData.details = "Adding a Bot";
      else if (botPage.includes("/vote")) {
        const voteBotName: string = document
          .querySelector("#vote1 > h1")
          .textContent.replace("Vote for ", "");
        presenceData.details = "Voting for:";
        presenceData.state = voteBotName;
        presenceData.buttons = [
          {
            label: `Vote for ${voteBotName}`,
            url: document.URL
          }
        ];
      } else if (botPage.includes("/edit"))
        presenceData.details = "Editing a Bot";
      else if (botPage.includes("/all")) {
        presenceData.details = "Viewing all Bots";
        presenceData.buttons = [
          {
            label: "View Bots",
            url: document.URL
          }
        ];
      } else {
        presenceData.details = "Viewing Bot:";
        presenceData.state = document.getElementById("botname").textContent;
        presenceData.buttons = [
          {
            label: "View Bot",
            url: document.URL
          }
        ];
      }
    } else if (botPage === "/apply/certification/")
      presenceData.details = "Viewing Certification Page";
    else if (botPage === "/apply/certification/application")
      presenceData.details = "Applying for Certification";
    else if (botPage === "/tos/") presenceData.details = "Viewing ToS";
    else if (botPage === "/privacypolicy/")
      presenceData.details = "Viewing Privacy Policy";
    else if (botPage === "/Imprint/") presenceData.details = "Viewing Imprint";
  } else if (botHost === "docs.discord-botlist.eu") {
    presenceData.details = "Viewing Docs";
    presenceData.state = `Page: ${
      document.querySelector(
        "#__GITBOOK__ROOT__CLIENT__ > div.reset-3c756112--body-68cac36c > div.reset-3c756112--bodyContent-2f98451b > div > div.reset-3c756112--wholeContentBody-554be184 > div.reset-3c756112--wholeContentPage-6c3f1fc5 > div > div.reset-3c756112--pageContainer-544d6e9c > div.reset-3c756112 > div.reset-3c756112--pageHeader-15724735 > div > div > div.reset-3c756112--horizontalFlex-5a0077e0 > div.reset-3c756112--pageHeaderIntro-0c1463da > h1 > span"
      ).textContent
    }`;
  }

  if (!sSubmit && presenceData.details === "Adding a Bot")
    delete presenceData.details;

  if (!buttons) delete presenceData.buttons;

  if (!presenceData.details) presence.setActivity();
  else presence.setActivity(presenceData);
});
