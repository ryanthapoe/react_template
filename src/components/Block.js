import React from "react";

function Block({
  cls,
  size,
  margin = 0,
  padding = 0,
  bgColor,
  tColor,
  center,
  flex,
  direction,
  flow,
  wrap,
  children,
}) {
  const handleMargin = () => {
    if (typeof margin === "number") {
      return {
        marginTop: margin,
        marginBottom: margin,
        marginLeft: margin,
        marginRight: margin,
      };
    }

    if (typeof margin === "object") {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };

  const handlePadding = () => {
    if (typeof padding === "number") {
      return {
        paddingTop: padding,
        paddingBottom: padding,
        paddingLeft: padding,
        paddingRight: padding,
      };
    }

    if (typeof padding === "object") {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };

  const handleSize = () => {
    if (typeof size === "object") {
      const sizeLen = Object.keys(size).length;
      switch (sizeLen) {
        case 1:
          return {
            height: size[0],
            width: size[0],
          };
        default:
          return {
            height: size[0],
            width: size[1],
          };
      }
    }
  };

  const componentStyle = {
    ...handleSize(),
    ...handleMargin(),
    ...handlePadding(),
    backgroundColor: bgColor,
    color: tColor,
  };

  center && (componentStyle.textAlign = "center");

  flex && (componentStyle.display = "flex");

  direction && (componentStyle.flexDirection = direction);

  flow && (componentStyle.flexFlow = flow);

  wrap && (componentStyle.flexWrap = "wrap");

  return (
    <div className={cls} style={componentStyle}>
      {children}
    </div>
  );
}

const style = {};

export default Block;
