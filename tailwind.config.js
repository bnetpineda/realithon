module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./views/**/*.ejs",
    // Add more paths where HTML or EJS files are located
  ],
  theme: {
    extend: {
      fontFamily: {
        "title-font-family": "W95Fa-Regular, sans-serif",
        "font-title": "W95Fa-Regular, sans-serif",
      },
      fontSize: {
        "title-font-size": "12px",
        "size-title": "12px",
      },
      fontWeight: {
        "title-font-weight": "400",
      },
      lineHeight: {
        "title-line-height": "13px",
        "line-height-title": "13px",
      },
      letterSpacing: {
        "letter-spacing-title": "0.22px",
      },
      borderRadius: {},
      colors: {
        "semantic-backgroud-navy": "#000080",
        "semantic-text-inverse": "#ffffff",
        "basic-neutral-silver": "#c0c0c0",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};
