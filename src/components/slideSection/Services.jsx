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
"UI stands for User Interface while UX stands for User Experience. UI is the look and feel of a product, while UX is how a product feels to use. Both UI and UX are important for creating a successful product. A good UI should be visually appealing and easy to use. A good UX should be intuitive and make it easy for users to complete their tasks. Both UI and UX should be designed with the user in mind. "        }
        className=" "
      />
      <ServiceCard
        logo={webdevelopment}
        title={"WEB DEVELOPMENT"}
        info={
"Web development is involved in developing a website for the Internet or an intranet .It can range from developing a simple single static page  to complex web applications . A more comprehensive tasks to which Web development commonly refers,  include Web engineering, Web design, Web content development, client liaison,  Web server and network security configuration, and e-commerce development."        }
      />
      <ServiceCard
        logo={webapplication}
        title={"WEB APPLICATION"}
        info={
"A web application is a web-based software application that runs on a web server.  Web applications can be used to build a wide variety of applications, from simple one-page websites to complex enterprise applications. Web applications are commonly used for a variety of purposes, including e-commerce, social networking, and online gaming.  "        }
      />
      <ServiceCard
        logo={outsource}
        title={"OUT SOURCE"}
        info={
"Outsourcing is a business practice in which a company contracts with a third-party provider to perform services or create goods that were traditionally performed in-house by the company's own employees and staff.  This shift often occurs in an attempt to lower costs, access specialized expertise, enhance efficiency, and improve flexibility."        }
      />
    </div>
  );
}
