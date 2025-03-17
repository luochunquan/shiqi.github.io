
      const VUE_APP_VERSION = 'V 1.4.0 250317' + getAPKVersion();
      const VUE_APP_VTIME = '1742217615243';
      const VUE_APP_FONT_FAMILY_NAME = {"fontFilesList":[{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Black.900.6a22fe9b72bbc6ab.otf","display":"swap","style":"normal","weight":"900"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Bold.700.6c051b3c69a84211.otf","display":"swap","style":"normal","weight":"700"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Medium.500.6bcefc485576e059.otf","display":"swap","style":"normal","weight":"500"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-Regular.400.705232bdeb996c5e.otf","display":"swap","style":"normal","weight":"400"},{"fontFamily":"SofiaPro","fontUrl":"/SofiaPro-SemiBold.600.833443548c9dc9dc.otf","display":"swap","style":"normal","weight":"600"}],"gameFontFilesList":[{"fontFamily":"fontGame","fontUrl":"/FontGame4.894b89c344313599.ttf","display":"swap","style":"normal"}]};
      function getAPKVersion(){
        if (!window.android) {
          return '';
        }
        let strJson = JSON.stringify({});
        return '-' + window.android.callJava('getApkVersion', strJson);
      }
        window.addEventListener('load', function () {
            document.getElementById('versionIds').innerHTML = "V 1.4.0 250317" + getAPKVersion();
            const stylesheets = ["./1742217571321xb4ijf1eahf/app.f4a97e0b.css","./1742217571321xb4ijf1eahf/chunk-commons.99e3383f.css","./1742217571321xb4ijf1eahf/chunk-dialog.a44c35f6.css","./1742217571321xb4ijf1eahf/chunk-vuetify.5ae2192a.css"];
            const scripts = ["./1742217571321xb4ijf1eahf/app.b91fd1d6.js","./1742217571321xb4ijf1eahf/chunk-commons.b91fd1d6.js","./1742217571321xb4ijf1eahf/chunk-dialog.b91fd1d6.js","./1742217571321xb4ijf1eahf/chunk-libs.b91fd1d6.js","./1742217571321xb4ijf1eahf/chunk-view.b91fd1d6.js","./1742217571321xb4ijf1eahf/chunk-vuetify.b91fd1d6.js","./1742217571321xb4ijf1eahf/manifest.b91fd1d6.js"];
            const libs = ["./1742217571321xb4ijf1eahf/vue-i18n.min.js"];

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
        