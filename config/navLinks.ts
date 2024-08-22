type NavLink = {
	name: string;
	href: string;
};

const navLinks: NavLink[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Me",
		href: "/about",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Resume",
		href: "/resume",
	},
	{
		name: "Contact Me",
		href: "/contact",
	},
];

export default navLinks;
