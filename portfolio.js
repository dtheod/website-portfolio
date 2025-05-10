import emoji from "react-easy-emoji";

export const greetings = {
	name: "Danis Theodoulou",
	title: "Senior Data Scientist",
	description:
		"Senior Data Scientist with 9 years of experience in delivering data-driven solutions and leveraging advanced analytics to drive business growth. Skilled in end-to-end development, deployment of machine learning models.",
	resumeLink: "https://drive.google.com/file/d/1K4q7MtGhQC1eMtIid6cmOq1nGVNw06xp/view?usp=sharing",
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
		Stack: "Machine Learning", 
		progressPercentage: "90",
	},
	{
		Stack: "Data Analysis",
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
			"⚡ Develop Machine Learning solutions."
		),
		emoji(
			"⚡ SME in different industries such as Retail and Financial Services"
		),
		emoji(
			"⚡ Develop highly interactive Web Applications using R Shiny and Tableau."
		),
	],

	softwareSkills: [
		{
			skillName: "Tableau",
			fontAwesomeClassname: "logos:tableau-icon",
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
			fontAwesomeClassname: "logos:azure-icon",
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
			fontAwesomeClassname: "logos:github-icon",
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
		name: "Computer Vision - Dog Breeds Classification",
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
