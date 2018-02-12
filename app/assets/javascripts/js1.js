// Favicon singleton, handles setting the favicons dynamically.
// http://realfavicongenerator.net/
var favIcon = (function () {

    var _domain = "";

    return {
        init: function (domain) {
            _domain = domain;

            if (_domain.length === 0)
                return;

            favIcon.setFaviconIcons();
        },
        setFaviconIcons: function () {

            var appleTouchIcon = $("<link>", { rel: "apple-touch-icon", sizes: "180x180", href: "/Images/Icons/Favicon/" + _domain + "/apple-touch-icon.png" });
            var icon32x32 = $("<link>", { rel: "icon", type: "image/png", sizes: "32x32", href: "/Images/Icons/Favicon/" + _domain + "/favicon-32x32.png" });
            var icon16x16 = $("<link>", { rel: "icon", type: "image/png", sizes: "16x16", href: "/Images/Icons/Favicon/" + _domain + "/favicon-16x16.png" });
            var manifest = $("<link>", { rel: "manifest", href: "/Images/Icons/Favicon/" + _domain + "/manifest.json" });
            var maskIcon = $("<link>", { rel: "mask-icon", href: "/Images/Icons/Favicon/" + _domain + "/safari-pinned-tab.svg", color: "#5bbad5" });
            var shortcutIcon = $("<link>", { rel: "shortcut icon", href: "/Images/Icons/Favicon/" + _domain + "/favicon.ico" });
            var msapplicationConfig = $("<meta>", { name: "msapplication-config", content: "/Images/Icons/Favicon/" + _domain + "/browserconfig.xml" });
            var themeColour = $("<meta>", { name: "theme-color", content: "#FFFFFF" });

            $("head").append(appleTouchIcon);
            $("head").append(icon32x32);
            $("head").append(icon16x16);
            $("head").append(manifest);
            $("head").append(maskIcon);
            $("head").append(shortcutIcon);
            $("head").append(msapplicationConfig);
            $("head").append(themeColour);
        }
    };
})();