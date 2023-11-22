//

import ServiceCard from "./serviceCard";
import uiux from "/src/assets/services/uiux.png";
import webdevelopment from "/src/assets/services/website.png";
import webapplication from "/src/assets/services/webapplication.png";
import outsource from "/src/assets/services/outsource.png";

export default function Services() {
  return (
    <div className=" w-[90%] h-[100vh]   grid grid-cols-4 place-content-center gap-8  max-md:grid-cols-2">
      <ServiceCard
        logo={uiux}
        title={"UI/UX DESIGN"}
        info={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        }
        className=" "
      />
      <ServiceCard
        logo={webdevelopment}
        title={"WEB DEVELOPMENT"}
        info={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        }
      />
      <ServiceCard
        logo={webapplication}
        title={"WEB APPLICATION"}
        info={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        }
      />
      <ServiceCard
        logo={outsource}
        title={"OUT SOURCE"}
        info={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        }
      />
    </div>
  );
}
