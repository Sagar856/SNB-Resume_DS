import React from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "shepherd.js/dist/js/shepherd.min.js";
import "../../assets/styles/shepardClasses.css";

const ExperienceTour = () => {
  const expTour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
        classes: "shepherd-cancel-icon",
      },
      classes: "shadow-md bg-purple-dark shepard-box",
      scrollTo: true,
    },
  });

  if (typeof window !== "undefined") {

  expTour.addStep({
    text: `Here is more info about my experience`,
    attachTo: {
      element: ".experience-page-walkthrough",
      on: "top",
    },
    buttons: [
      {
        action() {
          return this.cancel();
        },
        text: "Skip tour",
        classes: "shepherd-button-cancel",
      },
      {
        action() {
          return this.next();
        },
        classes: "shepherd-button-next",
        text: "&#10095;",
      },
    ],
    id: "creating",
  });

  expTour.addStep({
    text: `Click here to go through some of my piece of work`,
    attachTo: {
      element: ".my-work-walkthrough",
      on: "left",
    },
    buttons: [
      {
        action() {
          return this.cancel();
        },
        text: "Ok",
        classes: "shepherd-button-cancel",
      },
    ],
    id: "creating",
  });

  // localStorage.setItem("seen_expTour", "false");
  // console.log(localStorage.getItem("seen_expTour"));
  if (
    localStorage.getItem("seen_expTour") == null ||
    localStorage.getItem("seen_expTour") == "false"
    ) {
      expTour.start();
      localStorage.setItem("seen_expTour", "true");
    }
    // localStorage.setItem("seen_expTour", "false");
  // console.log(localStorage.getItem("seen_expTour"));
  }
};

<>
  <link rel="stylesheet" href="shepherd.js/dist/css/shepherd.css" />
  <script src="shepherd.js/dist/js/shepherd.min.js"></script>
</>;

export default ExperienceTour;
