
      const VUE_APP_VERSION = 'V 1.3.1 250307' + getAPKVersion();
      const VUE_APP_VTIME = '1741334538322';
      const VUE_APP_FONT_FAMILY_NAME = {"fontFilesList":[{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Black.900.6a22fe9b72bbc6ab.otf","display":"swap","style":"normal","weight":"900"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Bold.700.6c051b3c69a84211.otf","display":"swap","style":"normal","weight":"700"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Medium.500.6bcefc485576e059.otf","display":"swap","style":"normal","weight":"500"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Regular.400.705232bdeb996c5e.otf","display":"swap","style":"normal","weight":"400"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-SemiBold.600.833443548c9dc9dc.otf","display":"swap","style":"normal","weight":"600"}],"gameFontFilesList":[{"fontFamily":"fontGame","fontUrl":"/FontGame4.894b89c344313599.ttf","display":"swap","style":"normal"}]};
      function getAPKVersion(){
        if (!window.android) {
          return '';
        }
        let strJson = JSON.stringify({});
        return '-' + window.android.callJava('getApkVersion', strJson);
      }
        window.addEventListener('load', function () {
            document.getElementById('versionIds').innerHTML = "V 1.3.1 250307" + getAPKVersion();
            const stylesheets = ["./1741334495885eu1j9epgnyj/app.852e9c4b.css","./1741334495885eu1j9epgnyj/chunk-commons.b4288b81.css","./1741334495885eu1j9epgnyj/chunk-dialog.108d9acf.css","./1741334495885eu1j9epgnyj/chunk-vuetify.28899023.css"];
            const scripts = ["./1741334495885eu1j9epgnyj/app.7d1f4baf.js","./1741334495885eu1j9epgnyj/chunk-commons.7d1f4baf.js","./1741334495885eu1j9epgnyj/chunk-dialog.7d1f4baf.js","./1741334495885eu1j9epgnyj/chunk-libs.7d1f4baf.js","./1741334495885eu1j9epgnyj/chunk-view.7d1f4baf.js","./1741334495885eu1j9epgnyj/chunk-vuetify.7d1f4baf.js","./1741334495885eu1j9epgnyj/manifest.7d1f4baf.js"];
            const libs = ["./1741334495885eu1j9epgnyj/vue-i18n.min.js"];

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
        