const globule = require('globule');
const inquirer = require('inquirer');
const path = require('path');
const chalk = require('chalk');
const cpx = require("cpx");
const fs = require('fs');
const { spawn } = require('child_process');

let folders = globule.find(path.resolve('../project-spa-*'));

if(!folders.length) {
    console.log('Necesita tener las carpetas de sus proyectos SPA a la misma altura que ' + chalk.cyan(process.env.npm_package_name), '\n');
    process.exit();
}

const onlyNameProjects = (folders) => {
    return folders.map(folder => {
        const chunks = folder.split('/');
        return chunks[chunks.length - 1];
    })
};

const onlyObjectProjects = (folders) => {
    let foldersOnlyObjects = {}
    onlyNameProjects(folders).forEach((folder, i) => {
        foldersOnlyObjects[folder] = {
            name: folder,
            path: folders[i]
        }
    })
    return foldersOnlyObjects;
};


inquirer
    .prompt([
        {
            type: 'list',
            name: 'project',
            message: 'Escoja el proyecto donde desea compilar project-library-components de manera local',
            choices: Object.keys(onlyObjectProjects(folders))
        }
    ])
    .then(answers => {
        const name = answers.project;
        console.log(name);
        let dist = "";
        const assets = dist + '/assets';
        if (fs.existsSync(onlyObjectProjects(folders)[name].path + '/app/node_modules' )) {
            dist = onlyObjectProjects(folders)[name].path + '/app/node_modules/' + process.env.npm_package_config_library;
        } else {
            dist = onlyObjectProjects(folders)[name].path + '/app/client/node_modules/' + process.env.npm_package_config_library;
        }
        if(!fs.existsSync(dist)) {
            console.log('No existe la carpeta', chalk.cyan(dist));
            process.exit();
        }
        // watching typescript
        const bin = require.resolve('typescript/bin/tsc');
        const tscProcess = spawn(bin, ['-w', '-p', 'tsconfig.prod.json', '--OutDir', dist]);
        tscProcess.stdout.on('data', (data) => {
            console.log(chalk.cyan(data) + chalk.cyan(name));
        });
        // watching assets
        cpx.watch(process.env.npm_package_config_assets, assets)
            .on("watch-ready", () => {
                console.log(chalk.green("Starting assets compilation" + name));
            })
            .on("watch-error", (err) => {
                console.log(chalk.bgRed(err));
            })
    });
