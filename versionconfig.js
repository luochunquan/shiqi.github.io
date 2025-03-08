
      const VUE_APP_VERSION = 'V 1.3.1 250308' + getAPKVersion();
      const VUE_APP_VTIME = '1741419435357';
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
            const stylesheets = ["./1741419387910jgev50qkqlt/app.5801f8f9.css","./1741419387910jgev50qkqlt/chunk-commons.34c94365.css","./1741419387910jgev50qkqlt/chunk-dialog.a14964cc.css","./1741419387910jgev50qkqlt/chunk-vuetify.28899023.css"];
            const scripts = ["./1741419387910jgev50qkqlt/app.d3da2ffc.js","./1741419387910jgev50qkqlt/chunk-commons.d3da2ffc.js","./1741419387910jgev50qkqlt/chunk-dialog.d3da2ffc.js","./1741419387910jgev50qkqlt/chunk-libs.d3da2ffc.js","./1741419387910jgev50qkqlt/chunk-view.d3da2ffc.js","./1741419387910jgev50qkqlt/chunk-vuetify.d3da2ffc.js","./1741419387910jgev50qkqlt/manifest.d3da2ffc.js"];
            const libs = ["./1741419387910jgev50qkqlt/vue-i18n.min.js"];

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
        