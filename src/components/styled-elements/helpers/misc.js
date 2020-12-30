const getThemeColor = (name, { theme, variant }) =>
    theme.color[variant]?.[name] ?? theme.color.primary[name];

export {
    getThemeColor,
};
