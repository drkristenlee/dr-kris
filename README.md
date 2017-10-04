# Dr Kris

This is a [CraftCMS](https://craftcms.com/) theme.

### Introduction

The project setup and gulp configuration is based on [craft-webpack-project-boilerplate by MilesHerndon agency](https://github.com/MilesHerndon/craft-webpack-project-boilerplate) which has solid documentation and you should check it out if you have questions about the project structure.

## Getting Started

### 1) Install MAMP

1. [Download](https://www.mamp.info/en/) and install MAMP
2. Open MAMP and click Start Servers
3. The MAMP start page should open in your browser
4. Click on the link to `phpMyAdmin`
5. Create a new database and name it `dr_kris`

### 2) Install Project Dependencies

- [npm](https://www.npmjs.com/) - Node Package Manager is what we'll use to install dependencies and automate stuff.

### 3) Project Setup

1. Open the command line and navigate to `/Applications/MAMP/htdocs`: `cd /Applications/MAMP/htdocs`
2. Clone the repo here: `git clone git@github.com:Scout-NU/dr-kris.git`
3. Open the file `/craft/config/db.php` in the cloned repo
4. Look for the section labeled `Environment: Local`
5. Under this section, change the line: `'database' => 'craft_webpack_project_boilerplate'` to be `'database' => 'dr_kris'`. You can leave the other settings as their default values.
6. Save this file

### 4) Install Craft CMS

1. In your browser, navigate to `http://localhost:8888/dr-kris/public/admin/dashboard` (or if your MAMP is running on another port use that one)
2. Click on Begin
3. We will be using a `scout-admin` account for development. If you need the credentials, contact Nick
4. Fill in the credentials and press Next
5. For site name enter `dr-kris`. The other fields can remain their default values.
6. Click Finish Up

### 5) Development

To install project dependencies, navigate to the repo and run `npm install`

#### Workflow

Use Node.js scripts to run build tools.

* `$ npm run watch` - Recompiles files whenever they change.
* `$ npm run build` - Creates production ready code.

After running `` $ npm run watch `` or `` $ npm run build ``, your deploy-ready code will be taken from the ``./src/`` directory and placed within the ``./public/build/`` directory of your project. However, the webpack generated templates will be placed within the ``./public/static/templates/_webpack.templates`` directory of your project so Craft CMS has access to them.
