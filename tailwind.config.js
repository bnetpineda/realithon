module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./views/**/*.ejs",
    // Add more paths where HTML or EJS files are located
  ],
  theme: {
    extend: {
      boxShadow: {
        'outside-3': `
          inset -2px -2px 0px 0px rgba(129, 129, 129, 1),
          inset 1px 1px 0px 0px rgba(255, 255, 255, 1),
          inset -1px -1px 0px 0px rgba(0, 0, 0, 1)
        `,
       'outside-full': `
          inset -1px -1px 0px #000000,
          inset 1px 1px 0px #C1C1C1,
          inset -2px -2px 0px #818181,
          inset 2px 2px 0px #FFFFFF
        `,
      },
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
