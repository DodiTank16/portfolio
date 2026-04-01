import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Socialicons } from "../components/socialicons";
import withRouter from "../hooks/withRouter";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Portfolio = lazy(() => import("../pages/portfolio"));
const ContactUs = lazy(() => import("../pages/contact"));

const AnimatedRoutes = withRouter(({ location }) => (
  <div className="page__transition__wrapper">
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 900,
          exit: 500,
        }}
        classNames="page"
        unmountOnExit
      >
        <Suspense fallback={<div className="page__loader" />}>
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  </div>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
