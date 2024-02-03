# Reminders
- App structure and accessibility.
- Functionality first. Style when needed.
- Optimize:
	- component renders
	- state management

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Setup Vite + React + JavaScript in npm

 Official reference guide - [click here](https://v3.vitejs.dev/guide/).

### Run this command in the terminal,
 This is where the **root** folder / directory of the project will be set (Vite will create the project's root directory later):

	npm init vite

### Fill in the follow up prompts in the terminal.

 Enter the name of the project to create the root-directory:

	fcc-markdown-previewer-1.0

 In the terminal, choose:

	React

 and

	JavaScript


### After the initial setup...

 run the following in the terminal:

	# Go inside the created project root-directory.
	cd fcc-markdown-previewer-1.0

	# Install npm packages that comes with Vite
	npm install

	# Run vite development server. Start developing.
	npm run dev

### Start developing.

 The development files:
 - *Source codes* - like .js, .css, etc. go inside the **./src** sub-folder.
 - *External files* - like json go inside the **./public** sub-folder; static assets like images, icons, etc. go inside the **./assets** sub-folder.

# Git initial setup

 Create a new repository on the command line.

	#
	echo "# fcc-markdown-previewer-1.0" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main

	# The URL below is the created remote repository.
	git remote add origin https://github.com/{USER-NAME}/{REPO-NAME}.git
	
	git push -u origin main


 Or push an existing repository from the command line.

	git remote add origin https://github.con/{USER-NAME}/{REPO-NAME}.git
	git branch -M master
	git push -u origin master

# marked.js

[Full Reference](https://marked.js.org).

- Go to this [cdn](https://cdnjs.com/libraries/marked/).
- Copy one of the script tags.
- Add / paste it to your *html* file. An example:
	```
	<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/11.2.0/marked.min.js"
		integrity="sha512-BLTLvBrdIq0KLzJH2C9GpxL6KmCqX5cofqkYxUZPp8J2beb7ABAXPpL7aIbtSdtqLWLIgAyFFgePj1p/sq7lRw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	></script>
	```
- Use the **window.marked** in your react.js.