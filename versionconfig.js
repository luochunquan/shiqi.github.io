
      const VUE_APP_VERSION = 'V 1.7.0 250509' + getAPKVersion();
      const VUE_APP_VTIME = '1746771202072';
      const VUE_APP_FONT_FAMILY_NAME = {"fontFilesList":[{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Black.900.6a22fe9b72bbc6ab.otf","display":"swap","style":"normal","weight":"900"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Bold.700.6c051b3c69a84211.otf","display":"swap","style":"normal","weight":"700"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Medium.500.6bcefc485576e059.otf","display":"swap","style":"normal","weight":"500"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Regular.400.705232bdeb996c5e.otf","display":"swap","style":"normal","weight":"400"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-SemiBold.600.833443548c9dc9dc.otf","display":"swap","style":"normal","weight":"600"}],"gameFontFilesList":[{"fontFamily":"FontGame","fontUrl":"/FontGame.anton.9bc9a869f6f9d789.ttf","display":"swap","style":"normal"},{"fontFamily":"FontGame","fontUrl":"/FontGame.park.f22e0ef1b3410829.otf","display":"swap","style":"normal"},{"fontFamily":"FontGame","fontUrl":"/FontGame.zqf.a37cf2bcecc3420a.ttf","display":"swap","style":"normal"}]};
      function getAPKVersion(){
        if (!(window.android && window.android.callJava)) {
          return '';
        }
        let strJson = JSON.stringify({});
        return '-' + window.android.callJava('getApkVersion', strJson);
      }
        window.addEventListener('load', function () {
            document.getElementById('versionIds').innerHTML = "V 1.7.0 250509" + getAPKVersion();
            const stylesheets = ["./1746771158289tg17b2zg05s/app.81e9e11a.css","./1746771158289tg17b2zg05s/chunk-commons.230c763e.css","./1746771158289tg17b2zg05s/chunk-dialog.1209a460.css","./1746771158289tg17b2zg05s/chunk-vuetify.d130358a.css"];
            const scripts = ["./1746771158289tg17b2zg05s/app.bdf264d1.js","./1746771158289tg17b2zg05s/chunk-commons.bdf264d1.js","./1746771158289tg17b2zg05s/chunk-dialog.bdf264d1.js","./1746771158289tg17b2zg05s/chunk-libs.bdf264d1.js","./1746771158289tg17b2zg05s/chunk-view.bdf264d1.js","./1746771158289tg17b2zg05s/chunk-vuetify.bdf264d1.js","./1746771158289tg17b2zg05s/manifest.bdf264d1.js"];
            const libs = ["./1746771158289tg17b2zg05s/vue-i18n.min.js"];

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
        