// request.onload = function () {
//     let data = JSON.parse(this.response);
//     console.debug("project data array", data);

function makeTeamProfiles() {
  var data = require("./team-members.json");
  // Establish the array which acts as a data source for the list
  let listData = data,
    // Set up the loop that goes through the array 1 index at a time
    numberOfListItems = listData.length;
  console.log("list items " + numberOfListItems);
  // i;

  //   for (i = 0; i < numberOfListItems; ++i) {
  //     listData[i].name = listData[i].name.replace(/-/g, " ");
  //     // create a project tile for each repository
  //     projectContainer = document.createElement("div");
  //     projectContainer.className = "project-container";
  //     document
  //       .getElementById("project-container-list")
  //       .appendChild(projectContainer);

  //     project = document.createElement("div");
  //     project.className = "project";
  //     projectContainer.appendChild(project);

  //     projectContents = document.createElement("div");
  //     project.appendChild(projectContents);

  //     title = document.createElement("h3");
  //     title.innerHTML = listData[i].name;
  //     projectContents.appendChild(title);

  //     description = document.createElement("p");
  //     description.className = "project-description";
  //     if (listData[i].description) {
  //       description.innerHTML = listData[i].description;
  //     } else {
  //       description.innerHTML = "No description to show!";
  //     }
  //     projectContents.appendChild(description);

  //     var container = document.createElement("div");
  //     container.className = "language";

  //     var dot = document.createElement("div");
  //     var dotClass = "";

  //     switch (listData[i].language) {
  //       case "Go":
  //         dotClass = "go";
  //         break;

  //       case "Jupyter Notebook":
  //         dotClass = "jupyter-notebook";
  //         break;

  //       case "JavaScript":
  //         dotClass = "javascript";
  //         break;

  //       case "HTML":
  //         dotClass = "html";
  //         break;

  //       case "Python":
  //         dotClass = "python";
  //         break;

  //       case "Java":
  //         dotClass = "java";
  //         break;

  //       case "Shell":
  //         dotClass = "shell";
  //         break;

  //       case "CSS":
  //         dotClass = "css";
  //         break;

  //       case "TSQL":
  //         dotClass = "tsql";
  //         break;

  //       default:
  //         dotClass = "";
  //     }
  //     dot.className = "dot " + dotClass;

  //     language = document.createElement("p");
  //     language.innerHTML = listData[i].language;

  //     if (listData[i].language) {
  //       container.appendChild(dot);
  //       container.appendChild(language);
  //       projectContents.appendChild(container);
  //     }

  //     link = document.createElement("a");
  //     link.className = "primary-button";
  //     link.innerHTML = "View Project on GitHub";
  //     link.href = listData[i].html_url;
  //     link.target = "_blank";
  //     projectContents.appendChild(link);
  //   }
}

makeTeamProfiles();
//   };
// request.send();
