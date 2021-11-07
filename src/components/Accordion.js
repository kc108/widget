import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    // console.log("Title clicked", index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      // Used <React.Fragment></React.Fragment> and NOT <div></div> with Semantic UI to remove the extra border
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          // we do the (index) bc we want to call it in the future so we wrap it in an Arrow Fnct.
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
