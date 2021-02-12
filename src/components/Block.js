import React from "react";

function Block({
  cls,
  size,
  margin,
  padding,
  background,
  color,
  textCenter,
  centerAbsolute,
  border,
  radius,
  flex,
  flexCenter,
  flexGap,
  direction,
  flow,
  wrap,
  overflow,
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

  const handleCenterAbsolute = () => {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
  };

  const handleBorder = () => {
    if (typeof border === "string") {
      return {
        border,
      };
    }

    if (typeof border === "object") {
      const borderSize = Object.keys(border).length;
      switch (borderSize) {
        case 1:
          return {
            borderTop: border[0],
            borderRight: border[0],
            borderBottom: border[0],
            borderLeft: border[0],
          };
        case 2:
          return {
            borderTop: border[0],
            borderRight: border[1],
            borderBottom: border[0],
            borderLeft: border[1],
          };
        case 3:
          return {
            borderTop: border[0],
            borderRight: border[1],
            borderBottom: border[2],
            borderLeft: border[1],
          };
        default:
          return {
            borderTop: border[0],
            borderRight: border[1],
            borderBottom: border[2],
            borderLeft: border[3],
          };
      }
    }
  };

  const handleRadius = () => {
    if (radius === "circle") return { borderRadius: "50%" };
    return { borderRadius: radius };
  };

  const handleFlexCenter = () => {
    return {
      justifyContent: "center",
      alignItems: "center",
    };
  };

  const handleFlexGap = () => {
    if (flexGap === "between") return { justifyContent: "space-between" };
    if (flexGap === "around") return { justifyContent: "space-around" };
    if (flexGap === "evenly") return { justifyContent: "space-evenly" };
  };

  let componentStyle = {};

  size && (componentStyle = { ...componentStyle, ...handleSize() });

  margin && (componentStyle = { ...componentStyle, ...handleMargin() });

  padding && (componentStyle = { ...componentStyle, ...handlePadding() });

  centerAbsolute &&
    (componentStyle = { ...componentStyle, ...handleCenterAbsolute() });

  border && (componentStyle = { ...componentStyle, ...handleBorder() });

  radius && (componentStyle = { ...componentStyle, ...handleRadius() });

  flexCenter && (componentStyle = { ...componentStyle, ...handleFlexCenter() });

  flexGap && (componentStyle = { ...componentStyle, ...handleFlexGap() });

  background && (componentStyle.background = background);

  color && (componentStyle.color = color);

  textCenter && (componentStyle.textAlign = "center");

  flex && (componentStyle.display = "flex");

  direction && (componentStyle.flexDirection = direction);

  flow && (componentStyle.flexFlow = flow);

  wrap && (componentStyle.flexWrap = "wrap");

  overflow && (componentStyle.overflow = overflow);

  return (
    <div className={cls} style={componentStyle}>
      {children}
    </div>
  );
}

export default Block;
