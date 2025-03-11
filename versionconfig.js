
      const VUE_APP_VERSION = 'V 1.4.0 250311' + getAPKVersion();
      const VUE_APP_VTIME = '1741665068566';
      const VUE_APP_FONT_FAMILY_NAME = {"fontFilesList":[{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Black.900.6a22fe9b72bbc6ab.otf","display":"swap","style":"normal","weight":"900"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Bold.700.6c051b3c69a84211.otf","display":"swap","style":"normal","weight":"700"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Medium.500.6bcefc485576e059.otf","display":"swap","style":"normal","weight":"500"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Regular.400.705232bdeb996c5e.otf","display":"swap","style":"normal","weight":"400"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-SemiBold.600.833443548c9dc9dc.otf","display":"swap","style":"normal","weight":"600"}],"gameFontFilesList":[{"fontFamily":"fontGame","fontUrl":"/FontGame4.894b89c344313599.ttf","display":"swap","style":"normal"}]};
      function getAPKVersion(){
        if (!window.android) {
          return '';
        }
        let strJson = JSON.stringify({});
        return '-' + window.android.callJava('getApkVersion', strJson);
      }
        window.addEventListener('load', function () {
            document.getElementById('versionIds').innerHTML = "V 1.4.0 250311" + getAPKVersion();
            const stylesheets = ["./1741665020168nl8w0coe0f/app.8150db09.css","./1741665020168nl8w0coe0f/chunk-commons.ab2056be.css","./1741665020168nl8w0coe0f/chunk-dialog.0cd75ef4.css","./1741665020168nl8w0coe0f/chunk-vuetify.28899023.css"];
            const scripts = ["./1741665020168nl8w0coe0f/app.f405988e.js","./1741665020168nl8w0coe0f/chunk-commons.f405988e.js","./1741665020168nl8w0coe0f/chunk-dialog.f405988e.js","./1741665020168nl8w0coe0f/chunk-libs.f405988e.js","./1741665020168nl8w0coe0f/chunk-view.f405988e.js","./1741665020168nl8w0coe0f/chunk-vuetify.f405988e.js","./1741665020168nl8w0coe0f/manifest.f405988e.js"];
            const libs = ["./1741665020168nl8w0coe0f/vue-i18n.min.js"];

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
        