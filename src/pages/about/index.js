import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  dataabout,
  meta,
  services,
  skills_frameworkDb,
  skills_languages,
  skills_tools,
  worktimeline,
} from "../../content_option";
import "./style.css";

import ExpressLogo from "../../assets/images/expressLogo.svg";
import ExpressLogoDark from "../../assets/images/expressLogoDark.svg";
import NextLogoDark from "../../assets/images/nextLogo-dark.svg";
import NextLogo from "../../assets/images/nextLogo.svg";
import VercelLogo from "../../assets/images/vercelLogo.svg";
import VercelLogoDark from "../../assets/images/vercelLogo-dark.svg";
import { ThemeContext } from "../../context/ThemeContext";

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme_pera1}</p>
              <p>{dataabout.aboutme_pera2}</p>
              <p>{dataabout.aboutme_pera3}</p>
            </div>
          </Col>
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title_second}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme_pera4}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="d-flex flex-row justify-content-between">
            <h3 className="color_sec py-4">Skills</h3>
            {/* <h3 className="color_sec py-4">Languages</h3> */}
          </Col>

          <Col lg="7" className="">
            <h3 className="color_sec py-4">Languages</h3>
            <div className="d-flex flex-row flex-wrap gap-2 gap-sm-4 gap-md-3 gap-lg-2">
              {skills_languages.map((skill, i) => {
                let logo = skill.value;
                return (
                  <div
                    key={i}
                    className="skill-item d-flex flex-column align-items-center text-center mb-3"
                  >
                    <h5 className="mb-2">{skill.name}</h5>
                    <img src={logo} alt={skill.name} width={80} height={80} />
                  </div>
                );
              })}
            </div>

            <h3 className="color_sec py-4">Frameworks and Databases</h3>
            <div className="d-flex flex-row flex-wrap gap-2 gap-sm-4 gap-md-3 gap-lg-2">
              {skills_frameworkDb.map((skill, i) => {
                let logo = skill.value;

                if (skill.isDynamic) {
                  if (skill.name === "NextJs") {
                    logo = theme === "dark" ? NextLogoDark : NextLogo;
                  } else if (skill.name === "ExpressJs") {
                    logo = theme === "dark" ? ExpressLogoDark : ExpressLogo;
                  }
                }
                return (
                  <div
                    key={i}
                    className="skill-item d-flex flex-column align-items-center text-center mb-3"
                  >
                    <h5 className="mb-2">{skill.name}</h5>
                    <img src={logo} alt={skill.name} width={skill.name === "MongoDB" ? 150 : 80} height={skill.name === "MongoDB" ? 120 : 80} />
                  </div>
                );
              })}
            </div>

            <h3 className="color_sec py-4">Tools</h3>
            <div className="d-flex flex-row flex-wrap gap-2 gap-sm-4 gap-md-3 gap-lg-2">
              {skills_tools.map((skill, i) => {
                let logo = skill.value;

                if (skill.isDynamic) {
                  if (skill.name === "Vercel") {
                    logo = theme === "dark" ? VercelLogoDark : VercelLogo;
                  } else if (skill.name === "ExpressJs") {
                    logo = theme === "dark" ? ExpressLogoDark : ExpressLogo;
                  }
                }
                return (
                  <div
                    key={i}
                    className="skill-item d-flex flex-column align-items-center text-center mb-3"
                  >
                    <h5 className="mb-2">{skill.name}</h5>
                    <img src={logo} alt={skill.name} width={skill.name === "MongoDB" ? 150 : 80} height={skill.name === "MongoDB" ? 120 : 80} />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
