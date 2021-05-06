import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const cardWrapper = {
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 20px rgb(0 0 0 / 20%)",
  textTransform: "uppercase",
  color: "#293F4C",
  padding: "8px 20px 10px",
};

const card = {
  fontSize: "20px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textDecoration: "none",
  backgroundColor: "transparent",
};

const imageWrapper = {
  width: "100%",
  height: "auto",
  margin: "auto",
  maxWidth: "214px",
};

const image = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
};

const titleStyle = {
  fontFamily: "'P22', sans-serif",
};

export default function CategoryCard({ title, img }) {
  const [cardStyle, setCardStyle] = useState(card);
  const [cardWrapperStyle, setCardWrapperStyle] = useState(cardWrapper);
  const [imageWrapperStyle, setImageWrapperStyle] = useState(imageWrapper);

  const isMobile = useMediaQuery({
    query: "(max-width: 1070px)",
  });

  const isSmall = useMediaQuery({
    query: "(max-width: 450px)",
  });

  useEffect(() => {
    if (isMobile && !isSmall) {
      setCardStyle({
        fontSize: "18px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        textDecoration: "none",
        backgroundColor: "transparent",
      });
      setCardWrapperStyle({
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 20px rgb(0 0 0 / 20%)",
        textTransform: "uppercase",
        color: "#293F4C",
        padding: "8px 10px 10px",
      });
      setImageWrapperStyle({
        width: "100%",
        height: "auto",
        margin: "auto",
        maxWidth: "127px",
      });
    } else if (isSmall) {
      setCardWrapperStyle({
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 20px rgb(0 0 0 / 20%)",
        textTransform: "uppercase",
        color: "#293F4C",
        padding: "8px 10px 10px",
        margin: "auto",
        width: "80%",
        marginBottom: "15px",
      });
    } else {
      setCardStyle(card);
      setCardWrapperStyle(cardWrapper);
      setImageWrapperStyle(imageWrapper);
    }
  }, [isMobile, isSmall]);

  return (
    <div style={cardWrapperStyle}>
      <Link to="/" style={cardStyle}>
        <div style={imageWrapperStyle}>
          <img
            style={image}
            src={img || "https://via.placeholder.com/300/FFFFFF/FFFFFF"}
            alt="category"
          />
        </div>
        <div style={titleStyle}>{title}</div>
      </Link>
    </div>
  );
}
