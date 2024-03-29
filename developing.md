# The developing stages flow
These were priorities when this project is being developed:
1. HTML structure (semantic and accessible as possible).
1. Functionality.
1. Style when needed. It should not interfere with the app's heart function.
1. make mds tab besides each other on github.


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

# Parse String to HTML: dangerouslySetInnerHTML
*Check this [documentation](https://legacy.reactjs.org/docs/dom-elements.html) for reference.*

The **dangerouslySetInnerHTML** is *React*'s replacement for using *innerHTML* in the browser DOM.

**REMINDER**: This can dangerously expose users to *cross-site scripting (XSS)* attacks.

Sample code below:

	function MyComponent {
		return <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />;
	}

# Using SASS

1. **Installed** SASS - reference [here](https://sass-lang.com/install/). Run this in the terminal:
	```
	# install as devDependency
	npm i --save-dev sass
	```
1. **Created** a sass file.
	```
	./src/styles/app.scss
	```
1. **Imported** the sass file to react.js. This will automatically compile to a *CSS* file.
	```
	import './styles/app.scss';
	```
1. **Partials**: Create *partials* with filenames beginning with *underscores* (_). The **@import** rule is used to share variables and styles among sass files. [Reference](https://www.freecodecamp.org/news/the-beginners-guide-to-sass/).
	```
	// import to './styles.scss' a partial file named '_partial.scss'

	@import './partial.scss';
	```

# Fixing "Filename too long" error on git

[Reference](https://katalon-inc.my.site.com/katalonhelpcenter/s/article/How-to-fix-Git-Clone-Filename-too-long-Error-in-Windows) for full read.

In the project-root-directory, run the command in the terminal:

	```
	git config --system core.longpaths true
	```