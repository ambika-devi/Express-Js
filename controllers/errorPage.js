import path from 'path';
import rootDir from '../util/path';
exports.errorPage=(req,res)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
}