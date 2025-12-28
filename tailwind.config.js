module.exports = {
    theme: {
        extend: {
            colors: {
                primaryBg: "var(--primary-bg)",
                surface: "var(--surface)",
                border: "var(--border)",

              

                accent: "var(--accent)",

                text: {
                    primaryText: "var(--primary-text)",
                    secondaryText: "var(--secondary-text)",
                },
            },
        },
    },
     plugins: [require("daisyui")],
};
