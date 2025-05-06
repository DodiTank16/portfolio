import React, { useEffect, useState } from "react";

const PortfolioCard = ({ data }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % data.img.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.img]);

  return (
    <>
    <div className="po_item">
    <p>{data.name}</p>
      <div className="slideshow">
        {data.name === "Handshake Parallax Effect" ? (
          <video autoPlay loop muted>
            <source src={data.img[0]} type="video/mp4"  />
          </video>
        ) : (
          data.img.map((src, index) => (
            <img key={index} src={src} alt={data.name} className={index === currentImgIndex ? "active" : ""} />
          ))
        )}
      </div>
      <div className="content">
        <p>{data.description}</p>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          view project
        </a>
      </div>
    </div>
    </>
  );
};

export default PortfolioCard;
