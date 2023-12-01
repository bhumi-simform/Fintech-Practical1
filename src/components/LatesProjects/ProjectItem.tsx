import React from "react";

interface ProjectItemProps {
  imagePath: string;
  productType: string;
  productName: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imagePath,
  productType,
  productName,
}) => {
  return (
      <div className="lates-project-slide">
        <div className="img-wrapper">
          <img src={imagePath} alt={productName} />
        </div>
        <h3>{productType}</h3>
        <p>{productName}</p>
      </div>
  );
};

export default ProjectItem;
