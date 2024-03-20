const { PDFNet } = require('@pdftron/pdfnet-node');

((exports) => {
  'use strict';

  exports.runOfficeToPDF = () => {

    const inputPath = 'TestFiles/';
    const outputPath = 'Output/';

    const simpleDocxConvert = async (inputFilename, outputFilename) => {
      // perform the conversion with no optional parameters
      const pdfdoc = await PDFNet.Convert.officeToPdfWithPath(inputPath + inputFilename);

      // save the result
      await pdfdoc.save(outputPath + outputFilename, PDFNet.SDFDoc.SaveOptions.e_linearized);

      // And we're done!
      console.log('Saved ' + outputFilename);
    }


    const main = async () => {

      PDFNet.addResourceSearchPath('../Resources');

      try {
        // first the one-line conversion function
        await simpleDocxConvert('test-file.docx', 'test-file.pdf');
      } catch (err) {
        console.log(err);
      }

      console.log('Done.');
    };

    PDFNet.runWithCleanup(main, "demo:1710943281603:7f31478c03000000009a67e8c1c23e9d09392c5c83d632469faefc53a9").catch(function (error) {
      console.log('Error: ' + JSON.stringify(error));
    }).then(function () { return PDFNet.shutdown(); });

  };
  exports.runOfficeToPDF();
})(exports);
// eslint-disable-next-line spaced-comment
//# sourceURL=OfficeToPDFTest.js