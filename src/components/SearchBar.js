import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Post from "../components/Post";

const search = {
  color: "#E26447",
  cursor: "pointer",
};

const _inputStyle = {
  borderRadius: "8px",
  borderWidth: "1px",
  boxShadow: "0px",
  maxWidth: "170px",
  fontFamily: "'P22', sans-serif",
  color: "#293F4C",
};

const _dropdownStyle = {
  position: "fixed",
  display: "flex",
  flexFlow: "column",
  marginLeft: "45%",
  marginTop: "220px",
  backgroundColor: "white",
  width: "625px",
};

export default function SearchBar({ posts }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const [inputStyle, setInputStyle] = useState(_inputStyle);
  const [dropdownStyle, setDropdownStyle] = useState(_dropdownStyle);

  const isMobile = useMediaQuery({
    query: "(max-width: 890px)",
  });

  useEffect(() => {
    if (isMobile) {
      setInputStyle({
        borderRadius: "8px",
        borderWidth: "1px",
        boxShadow: "0px",
        maxWidth: "80px",
        fontFamily: "'P22', sans-serif",
      });
      setDropdownStyle({
        position: "fixed",
        display: "flex",
        flexFlow: "column",
        marginTop: "220px",
        backgroundColor: "white",
        width: "94%",
      });
    } else {
      setInputStyle(_inputStyle);
      setDropdownStyle(_dropdownStyle);
    }
  }, [isMobile]);

  const searchPost = (event) => {
    setInput(event.target.value);
    if (event.target.value !== "") {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      {show ? (
        <input
          value={input}
          className="order-md-2 order-2"
          style={inputStyle}
          onChange={searchPost}
          type="text"
          placeholder="Search..."
        />
      ) : null}
      <button
        className="order-md-2 order-2"
        style={{ border: "0", backgroundColor: "transparent" }}
        onClick={() => {
          setShow(!show);
          setDropdown(false);
        }}
      >
        <span style={search}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </span>
      </button>
      {dropdown ? (
        <div style={dropdownStyle}>
          {posts?.map((p) =>
            p.node.title.toLowerCase().startsWith(input.toLowerCase()) ? (
              <Post
                date={p.node.publishDate}
                title={p.node.title}
                img={p.node.heroImage.fluid.src}
                slug={p.node.slug}
              />
            ) : null
          )}
        </div>
      ) : null}
    </>
  );
}
