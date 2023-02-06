import { styled } from "~stitches";

const StyledProjects = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$8",
});

const StyledRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",
  marginBottom: "$4",

  "@bp1": {
    flexWrap: "nowrap",
    gap: "$4",
  },
});

const StyledColumn = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  "@bp1": {
    flex: 1,
    gap: "$4",
  },
});

const StyledOverlay = styled("div", {
  background: "$backgroundAccent",
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: "9",
  visibility: "hidden",
  opacity: "0",
  transition: "$default",
  display: "flex",
  flexDirection: "column",

  padding: "$4",
  gap: "$4",

  color: "$textPrimary",

  "& a": {
    textDecoration: "none",

    "& svg": {
      fill: "$textPrimary",
    },

    "&:hover > svg": {
      fill: "$textSecondary",
    },
  },
});

const StyledCard = styled("div", {
  position: "relative",
  borderRadius: "$1",
  overflow: "hidden",
  display: "block",
  padding: "$4",
  backgroundColor: "$backgroundTertiary",

  "& > :first-child": {
    marginBottom: "$2",
  },

  "&:hover": {
    [`& ${StyledOverlay}`]: {
      bottom: 0,
      visibility: "visible",
      opacity: 1,
    },
  },
});

const TechnologiesList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",
  flexGrow: 1,

  "@bp2": {
    gap: "$4",
  },
});

const TitleWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  gap: "$2",
});

export {
  StyledProjects,
  StyledRow,
  StyledColumn,
  StyledCard,
  StyledOverlay,
  TechnologiesList,
  TitleWrapper,
};
