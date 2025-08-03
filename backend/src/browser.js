const browseAsync = (browseInstance, options) =>
  new Promise((resolve, reject) => {
    browseInstance.browse(options, (browseError, browsePayload) => {
      if (browseError) {
        reject(browseError);
      } else {
        resolve(browsePayload);
      }
    });
  });

const loadAsync = (browseInstance, options) =>
  new Promise((resolve, reject) => {
    browseInstance.load(options, (loadError, loadPayload) => {
      if (loadError) {
        reject(loadError);
      } else {
        resolve(loadPayload);
      }
    });
  });

export { browseAsync, loadAsync };
