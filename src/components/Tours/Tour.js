import React from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "shepherd.js/dist/js/shepherd.min.js";
import "../../assets/styles/shepardClasses.css";

const Tour = () => {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
        classes: "shepherd-cancel-icon",
      },
      classes: "shadow-md bg-purple-dark shepard-box",
      scrollTo: { behavior: "smooth", block: "center" },
    },
  });

  if (typeof window !== "undefined") {

    tour.addStep({
      text: `Click on <b>PROFILE</b> to know more about me`,
      classes: "shepherd-text-style",
      attachTo: {
        element: ".profile-heading",
        on: "right",
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

    tour.addStep({
      text: `Click on <b>EXPERIENCE</b> to know more about my working experience`,
      attachTo: {
        element: ".experience-heading",
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
            return this.back();
          },
          classes: "shepherd-button-back",
          text: "&#10094;",
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

    tour.addStep({
      text: `Click on <b>EDUCATION</b> to know more about my education`,
      attachTo: {
        element: ".education-heading",
        on: "bottom",
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
            return this.back();
          },
          classes: "shepherd-button-back",
          text: "&#10094;",
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

    tour.addStep({
      text: `Click on <b>SKILLS</b> to know more about my skill sets`,
      attachTo: {
        element: ".skills-heading",
        on: "bottom",
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
            return this.back();
          },
          classes: "shepherd-button-back",
          text: "&#10094;",
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

    tour.addStep({
      text: `Click on <b>IMAGE</b> for more images`,
      attachTo: {
        element: ".photo-walkthrough",
        on: "right",
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: "shepherd-button-back",
          text: "&#10094;",
        },
        {
          action() {
            return this.cancel();
          },
          text: "Okay",
          classes: "shepherd-button-cancel",
        },
      ],
      id: "creating",
    });

    // localStorage.setItem("seen_tour", "false");
    if (localStorage.getItem("seen_tour") == null || localStorage.getItem("seen_tour")== "false") {
      tour.start();
      localStorage.setItem("seen_tour", "true");
    }
    // localStorage.setItem("seen_tour", "false");
    
  }
  // tour.start();
};

<>
  <link rel="stylesheet" href="shepherd.js/dist/css/shepherd.css" />
  <script src="shepherd.js/dist/js/shepherd.min.js"></script>
</>;

export default Tour;
