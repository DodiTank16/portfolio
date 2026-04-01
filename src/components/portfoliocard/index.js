import { useEffect, useState } from "react";

const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src);

const PortfolioCard = ({ data }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hasVideo = data.img.length > 0 && isVideo(data.img[0]);

  useEffect(() => {
    if (hasVideo) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % data.img.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.img, hasVideo]);

  return (
    <>
      <div className="po_item">
        <div className="slideshow">
          {hasVideo ? (
            <video className="slideshow__video" autoPlay loop muted playsInline>
              <source src={data.img[0]} type="video/mp4" />
            </video>
          ) : (
            data.img.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={data.name}
                className={index === currentImgIndex ? "active" : ""}
                loading="lazy"
              />
            ))
          )}
        </div>
        <div className="content">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Check It Out
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
