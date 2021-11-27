import emoji from "react-easy-emoji";

export const greetings = {
	name: "Danis Theodoulou",
	title: "Data Scientist",
	description:
		"A highly motivated professional with more than 5 years of Data Science experience in developing a wide range of innovative data-driven applications. Ability to use statistics and machine learning to uncover complex relationships in data and communicate insights to non-technical audiences.",
	resumeLink: "https://drive.google.com/file/d/1G2ayQGRcSFXulqaiBf1zjrrIM69PxMxF/view?usp=sharing",
};

export const openSource = {
	githubUserName: "dtheod",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/danis.theodoulou/",
	github: "https://github.com/dtheod",
	linkedin: "https://www.linkedin.com/in/dtheodoulou/",
};

export const SkillBars = [
	{
		Stack: "Machine Learning", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Data Wrangling",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design",
		progressPercentage: "70",
	},
	{
		Stack: "Deep Learning",
		progressPercentage: "60",
	},
	{
		Stack: "Management Consulting",
		progressPercentage: "60",
	},

];


export const skillsSection = {
	title: "Technology Stack",
	subTitle:
		"Some of the technologies used in commercial and personal projects",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your Web Applications using R Shiny and Tableau."
		),
		emoji(
			"⚡ Develop Machine Learning solutions to answer your specific business questions."
		),
		emoji(
			"⚡ SME in different industries such as Retail and Financial Services"
		),
	],

	softwareSkills: [
		{
			skillName: "Tableau",
			fontAwesomeClassname: "logos:tableau",
		},
		{
			skillName: "PyTorch",
			fontAwesomeClassname: "logos:pytorch",
		},
		{
			skillName: "Jupyter",
			fontAwesomeClassname: "logos:jupyter",
		},
		{
			skillName: "VSCode",
			fontAwesomeClassname: "vscode-icons:file-type-vscode",
		},
		{
			skillName: "r",
			fontAwesomeClassname: "vscode-icons:file-type-r",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "Tensorflow",
			fontAwesomeClassname: "logos:tensorflow",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "azure",
			fontAwesomeClassname: "logos:azure",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Github",
			fontAwesomeClassname: "logos:github",
		},
		{
			skillName: "airflow",
			fontAwesomeClassname: "logos:airflow",
		},
	],
};

export const experience = [
	{
		role: "Senior Data Scientist",
		company: "KPMG Cyprus",
		companylogo: "/img/icons/common/kpmg-logo-vector1.png",
		image_extra: "/img/icons/common/kpmg-logo-vector1.png",
		date: "November 2018 – October 2021"
	},
	{
		role: "Data Science Contractor",
		company: "Innoids Consulting Ltd",
		companylogo:"/img/icons/common/innoids.png",
		image_extra: "/img/icons/common/innoids.png",
		date: "April 2018 – October 2018"
	},
	{
		role: "Data Science Consultant",
		company: "Sinopsis",
		companylogo: "/img/icons/common/sinopsis.jpeg",
		image_extra: "/img/icons/common/sinopsis_logo.png",
		date: "April 2017 – April 2018"
	},
	{
		role: "Data Scientist",
		company: "Sainsburys",
		companylogo: "/img/icons/common/sains.jpeg",
		image_extra:"/img/icons/common/sainsburys-logo.png",
		date: "November 2015 – April 2017"
	},
	{
		role: "Data Science Intern",
		company: "Profusion",
		companylogo: "/img/icons/common/profusion_pic.jpeg",
		image_extra:"/img/icons/common/profusion_pic.jpeg",
		date: "June 2015 – November 2015"
	}
];

export const projects = [
	{
		name: "Computer Vision - Dog Breeds Classfication",
		desc: "Using Transfer Learning and CNN(Keras and Tensorflow and ImageNet) we classify dog breeds using 120 known classes.",
		github: "https://github.com/dtheod/ComputerVision_Classification",
		softwareSkills: [
			{
				skillName: "Tableau",
				fontAwesomeClassname: "logos:tableau",
			}
		]
	},
	{
		name: "Natural Language Processing Sarcasm Detection",
		desc: "Using data from Reddit we apply state of the art NLP algorithms(transformers) to predict sarcasm comments.",
		github: "https://github.com/dtheod/Sarcasm-Text-Classification",
	},
	{
		name: "Campaign Optimisation App",
		desc: "",
		github: "https://github.com/dtheod/Campaign-Optimisation-App",
		link: "https://innoids.shinyapps.io/Campaign-Optimisation-App/",
	},
	{
		name: "Time series Forecasting - Stock Prediction",
		desc: "",
		github: "https://github.com/dtheod",
		link: "https://github.com/dtheod",
	}
];

/*
export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
*/