# Openclassrooms_Projet_08

## Description

This project contains the react app used to create and serve my dev portfolio. It was built using create-react-app and sass.

For now only the front end works and the build is served on github pages using

```bash
gh-pages.
```

I plan to modify the project to have a backend and a database but by then the project may not be accessible publicly.

## Dependencies

Some of the dependencies I used in this project :

- Sass for CSS formatting
- react-i18-next for localization
- react router for internal routing (not yet useful as my project only has a homepage).
- react-router-hash-link to help me using custom scrolling to hash anchors within my project.
- react-hook-form to deal with form management for the contact section.
- react-modal to help set up an accessible modal easily.
- react-icons to simply access svg icons
- gh-pages to deploy the project onto github pages for showcasing purposes.

## Installation

To use the project you only need to update your node-modules.
Some links will be broken as they are stored within a .env file but it should not prevent the project to start.

To start the project :

```bash
cd porfolio-app
yarn install
```

after all dependencies have been installed just use

```bash
yarn start
```

## Contributing

This project is personal although feel free to use it if it could be of any help.
Any help is appreciated if you open an issue first.

## License

[MIT](https://choosealicense.com/licenses/mit/)
