import React from "react";
import photo from "../../assets/projects/allergy-free.jpg";

function Projects(props) {
  const currentProject= {
    name: "Allergy Free Kitchen",
    description:
      "Website that filters out allergies by ingredient",
  };
  return (
    <section>
      <h1>{currentProject.name}</h1>
      <div>
      <img
            src={photo} alt="allergy"
            className="img-thumbnail mx-1"
          />
      </div>
      <p>{currentProject.name}</p>
    </section>
  );
}
export default Projects;