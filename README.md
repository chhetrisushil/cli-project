# cli-project

This project is just to understand how a cli command I built using nodejs

### Essential:
The main file ("main" in package.json) has to be mapped and the first line in that file must be "#!/usr/bin/env node" this line is responsible for running it like a cli command.

"bin" attribute is also very essential in package.json file and must be mapped to the file which contains the aforementioned first line. This attribute make the command available as bin command.

To link it as a command globally available run "npm link".
