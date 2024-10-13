import LandingPage from "./LandingPage";
import About from "./About.jsx";
import Masterpieces from "./Masterpieces.jsx";
import Collections from "./Collections.jsx";
import Materials from "./Materials.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function Site({ isSignedIn })
{
    return (
        <>
          <LandingPage isLogged={isSignedIn} />
          <About />
          <Masterpieces />
          <Collections />
          <Materials />
          <Contact />
          <Footer />
        </>
      )
}

export default Site;