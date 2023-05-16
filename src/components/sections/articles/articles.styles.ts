import { styled } from "~stitches";

const ArticlesList = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$8",
  flexWrap: "wrap",
  marginBottom: "$8",

  "@bp2": {
    flexWrap: "nowrap",
  },
});

const ArticleCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  wordWrap: "break-word",
  backgroundColor: "$backgroundAccent",
  borderRadius: "$1",
  overflow: "hidden",

  boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)",

  "& img": {
    width: "100%",
    height: "auto",
  },

  "@bp2": {
    maxWidth: 360,
  },
});

const ArticleInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$5",
  gap: "$2",

  "& a": {
    width: "fit-content",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const ArticleMeta = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 250,

  "& a": {
    color: "$textSecondary",
  },
});

const ArticleImage = styled("img", {
  objectFit: "cover",
  minHeight: 210,
});

export { ArticlesList, ArticleCard, ArticleInfo, ArticleImage, ArticleMeta };
