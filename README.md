# Welcome to my website

## Developed by Ramiyan Gangatharan (100835223)

### Instructions:
After unzipping the project folder, please use the following commands in your terminal to install and update all dependencies:

```bash
npm install
```

To run this code locally, use one of the following command options:

```bash
npx @11ty/eleventy --serve
```
```bash
npm run dev
```

_Note: Both commands perform the same action; `npm run dev` is a shortcut for easier use._

# ADDITIONAL CONSIDERATIONS
Make sure that Node.js and npm are installed on your machine. If they’re not, you can download and install them from the official Node.js website. This project uses Embedded JavaScript (`EJS`) and Express.js. Please note that once the server is running, changes made to the source files will not automatically reload in the browser. Manually refresh the browser (press `F5`) to see any updates.

# Strapi API Setup
This project includes a Strapi API setup, located in the `API` folder at the root level of the project, next to the `src` folder. To launch the Strapi API, follow these steps:

1. Navigate to the API folder:
```bash
cd API
```

2. Install Strapi dependencies:
```bash
npm install
```

3. Start the Strapi development server:
```
npm run develop
```

This will launch the Strapi API on `http://localhost:1337`.
