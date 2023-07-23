import formidable from "formidable";
import path from "path";
/**
 * 
 * @param {req} request being handled, expects from FormData
 * @param {saveLocally} set to true if you want to upload locally to /public/images
 * @returns array of fields, and array of files
 */
export const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
//   options.maxFileSize = 40 * 1024 * 1024;
  options.maxFiles = 1;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      // console.log("FORMIDABLE", fields)
      resolve({ fields, files });
    });
  });
};

export default readFile;
    