var data = [
  {
    name: "Liam Hampton",
    pictureTitle: "Picture of Liam and his tech stack",
    tech: "Golang | Open Source",
    twitter: "https://twitter.com/LiamConroyH",
    github: "https://github.com/liamchampton",
    linkedin: "https://www.linkedin.com/in/liam-conroy-hampton/",
    bio:
      "Liam focuses on developer advocacy with a keen interest in Golang and open source",
  },

  {
    name: "Yamini Rao",
    pictureTitle: "Picture of Yamini and her tech stack",
    tech: "Data Science | Node-RED | Watson API's",
    twitter: "https://twitter.com/yaminigrao",
    github: "https://github.com/YaminiRao",
    linkedin: "https://www.linkedin.com/in/yamini-rao/",
    bio:
      "As a Developer Advocate, Yamini compiles developer scenarios, workshops and training material",
  },

  {
    name: "Ross Cruickshank",
    pictureTitle: "Picture of Ross and his tech stack",
    tech: "IOT | Node-RED | R",
    twitter: "https://twitter.com/rcruicks",
    github: "https://github.com/ibmrcruicks",
    linkedin: "https://www.linkedin.com/in/ross-cruickshank/",
    bio:
      "Ross is a Developer Advocate, helping developers (startups through enterprise)",
  },

  {
    name: "Ed Shee",
    pictureTitle: "Picture of Ed and his tech stack",
    tech: "Cloud and Containers",
    twitter: "https://twitter.com/ukcloudman",
    github: "https://github.com/edshee",
    linkedin: "https://www.linkedin.com/in/edshee/",
    bio:
      "As A Developer Advocate, Ed has a focus on cloud native computing and works extensively with Docker",
  },

  {
    name: "Sean Tracey",
    pictureTitle: "Picture of Sean and his tech stack",
    tech: "Artificial Intelligence | IOT | Node-RED | Python",
    twitter: "https://twitter.com/seanmtraceyH",
    github: "https://github.com/seanmtracey/",
    linkedin: "https://www.linkedin.com/in/seanmtracey/",
    bio:
      "Sean's career has been focused around rapid prototyping and MVP creation",
  },

  {
    name: "Margriet Groenendijk",
    pictureTitle: "Picture of Margriet and her team role",
    tech: "Data Science | Deep Learning |Python",
    twitter: "https://twitter.com/MargrietGr",
    github: "https://github.com/MargrietGroenendijk",
    linkedin: "https://www.linkedin.com/in/margrietgroenendijk/",
    bio:
      "Margriet is a Data & AI Developer Advocate. She develops and presents talks",
  },

  {
    name: "Matt Hamilton",
    pictureTitle: "Picture of Matt and his tech stack",
    tech: "Blockchain | Machine Learning | Data Science",
    twitter: "https://twitter.com/HammerToe",
    github: "https://github.com/hammertoe",
    linkedin: "https://www.linkedin.com/in/matthamilton77/",
    bio:
      "Matt is a developer advocate based in Bristol with an interest in machine learning",
  },

  {
    name: "Simon Baker",
    pictureTitle: "Picture of Simon and his team role",
    tech: "Integrated Accounts",
    twitter: "https://twitter.com/SimonARBaker",
    github: "https://github.com/SimonARBaker",
    linkedin: "https://www.linkedin.com/in/simonarbaker/",
    bio:
      "Simon is a Client Developer Advocate guiding Integrated Account teams in UKI",
  },

  {
    name: "Andrea Frittoli",
    pictureTitle: "Picture of Andre and his tech stack",
    tech: "Containers | Serverless",
    twitter: "https://twitter.com/blackchip76",
    github: "https://github.com/afrittoli",
    linkedin: "https://www.linkedin.com/in/andreafrittoli/",
    bio:
      "Andrea is a Developer Advocate at IBM, a hacker and open source enthusiast",
  },

  {
    name: "Angela Bates",
    pictureTitle: "Picture of Angela and her team role",
    tech: "Programme Manager",
    twitter: "https://twitter.com/angelajbates",
    github: "https://github.com/IBMDeveloperUK",
    linkedin: "https://www.linkedin.com/in/angelajbates/",
    bio:
      "Developer programmes, Influencer relations and marketing,Business Development",
  },

  {
    name: "Mo Haghighi",
    pictureTitle: "Picture of Mo and his team role",
    tech: "Head of Developer Advocacy (Europe)",
    twitter: "https://twitter.com/mohaghighi",
    github: "https://github.com/mohaghighi",
    linkedin: "https://www.linkedin.com/in/mohaghighi/",
    bio:
      "Dr Mo Haghighi leads IBM's Developer Ecosystems Group in Europe. His responsibilities include leading several teams of developer advocates, community managers and business development managers in UKI, Benelux, DACH, France, SPGi, Italy, CEE, and overseeing all advocacy operations and developer-related activities in Europe.",
  },
];

console.log("team profile data array: ", data);

let listData = data,
  // Set up the loop that goes through the array 1 index at a time
  numberOfListItems = listData.length,
  i;

for (i = 0; i < numberOfListItems; i++) {
  teamMemberCol = document.createElement("div");
  teamMemberCol.className = "team-member-col";
  document.getElementById("media").appendChild(teamMemberCol);

  teamMember = document.createElement("div");
  teamMember.className = "team-member-" + listData[i].name + " team-member ";
  teamMember.title = listData[i].pictureTitle;
  teamMemberCol.appendChild(teamMember);

  techStack = document.createElement("span");
  techStack.innerHTML = listData[i].tech;
  teamMember.appendChild(techStack);

  memberName = document.createElement("h2");
  memberName.innerHTML = listData[i].name;
  teamMemberCol.appendChild(memberName);

  socialLinks = document.createElement("h3");
  teamMemberCol.appendChild(socialLinks);

  twitterLink = document.createElement("a");
  twitterLink.className = "social-button";
  twitterLink.href = listData[i].twitter;
  twitterLink.target = "_blank";
  socialLinks.appendChild(twitterLink);

  twitterPic = document.createElement("img");
  twitterPic.src = "assets/img/twitter.png";
  twitterLink.appendChild(twitterPic);

  githubLink = document.createElement("a");
  githubLink.className = "social-button";
  githubLink.href = listData[i].github;
  githubLink.target = "_blank";
  socialLinks.appendChild(githubLink);

  githubPic = document.createElement("img");
  githubPic.src = "assets/img/github.png";
  githubLink.appendChild(githubPic);

  linkedinLink = document.createElement("a");
  linkedinLink.className = "social-button";
  linkedinLink.href = listData[i].linkedin;
  linkedinLink.target = "_blank";
  socialLinks.appendChild(linkedinLink);

  linkedinPic = document.createElement("img");
  linkedinPic.src = "assets/img/linkedin.png";
  linkedinLink.appendChild(linkedinPic);

  // lineBreak = document.createElement("br");
  // teamMemberCol.appendChild(lineBreak);

  // teamMemberBio = document.createElement("div");
  // teamMemberBio.className = "post";
  // teamMemberBio.innerHTML = listData[i].bio;
  // teamMemberCol.appendChild(teamMemberBio);

  // threeDots = document.createElement("span");
  // threeDots.className = "dots";
  // threeDots.innerHTML = "...";
  // teamMemberBio.appendChild(threeDots);

  // readMore = document.createElement("button");
  // readMore.className = "read";
  // readMore.innerHTML = "read more";
  // teamMemberBio.appendChild(readMore);
}
