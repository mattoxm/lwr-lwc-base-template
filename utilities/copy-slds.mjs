// Script to copy SLDS resources into the assets directory
import fs from 'fs-extra'

const sourceDir = 'node_modules\\@salesforce-ux\\design-system\\assets';
const destDir = 'src\\assets\\SLDS';

// Ensure the destination directory exists
fs.ensureDir(destDir, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(destDir);
    }

})

try {
    fs.copySync(sourceDir, destDir)
    console.log('success!')
} catch (err) {
    console.error(err)
}