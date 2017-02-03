import App from "./app";
import fs from 'fs';

fs.writeFileSync('./index.html', App());
