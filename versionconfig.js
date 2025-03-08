
      const VUE_APP_VERSION = 'V 1.3.1 250308' + getAPKVersion();
      const VUE_APP_VTIME = '1741422747668';
      const VUE_APP_FONT_FAMILY_NAME = {"fontFilesList":[{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Black.900.6a22fe9b72bbc6ab.otf","display":"swap","style":"normal","weight":"900"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Bold.700.6c051b3c69a84211.otf","display":"swap","style":"normal","weight":"700"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Medium.500.6bcefc485576e059.otf","display":"swap","style":"normal","weight":"500"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Regular.400.705232bdeb996c5e.otf","display":"swap","style":"normal","weight":"400"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-SemiBold.600.833443548c9dc9dc.otf","display":"swap","style":"normal","weight":"600"}],"gameFontFilesList":[{"fontFamily":"fontGame","fontUrl":"/FontGame4.894b89c344313599.ttf","display":"swap","style":"normal"}]};
      function getAPKVersion(){
        if (!window.android) {
          return '';
        }
        let strJson = JSON.stringify({});
        return '-' + window.android.callJava('getApkVersion', strJson);
      }
        window.addEventListener('load', function () {
            document.getElementById('versionIds').innerHTML = "V 1.3.1 250308" + getAPKVersion();
            const stylesheets = ["./1741422703035dib6akwz70g/app.cf35a40e.css","./1741422703035dib6akwz70g/chunk-commons.7475c891.css","./1741422703035dib6akwz70g/chunk-dialog.998bfedf.css","./1741422703035dib6akwz70g/chunk-vuetify.28899023.css"];
            const scripts = ["./1741422703035dib6akwz70g/app.ef8993fb.js","./1741422703035dib6akwz70g/chunk-commons.ef8993fb.js","./1741422703035dib6akwz70g/chunk-dialog.ef8993fb.js","./1741422703035dib6akwz70g/chunk-libs.ef8993fb.js","./1741422703035dib6akwz70g/chunk-view.ef8993fb.js","./1741422703035dib6akwz70g/chunk-vuetify.ef8993fb.js","./1741422703035dib6akwz70g/manifest.ef8993fb.js"];
            const libs = ["./1741422703035dib6akwz70g/vue-i18n.min.js"];

			const loadlist = [...libs, ...scripts, ...stylesheets];
			loadlist.forEach(src => {
				if (src.includes('.css')) {
					const linkEl = document.createElement('link')
					linkEl.rel = 'stylesheet'
					linkEl.href = src
					document.head.appendChild(linkEl)
				};
				if (src.includes('.js')) {
					let scriptEl = document.createElement('script')
					scriptEl.defer = 'defer'
					scriptEl.src = src
					document.body.appendChild(scriptEl)
				};
			});
        });
        