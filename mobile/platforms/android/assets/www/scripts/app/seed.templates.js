angular.module('templates-app', ['app/scripts/core/components/blade/blade.directive.view.html', 'app/scripts/core/components/explore/explore.directive.view.html', 'app/scripts/core/components/menu/menu.directive.view.html', 'app/scripts/core/components/words/definition/definition.directive.view.html', 'app/scripts/core/components/words/list/list.directive.view.html', 'app/scripts/core/header/header.view.html', 'app/scripts/core/menu/main/menu.view.html', 'app/scripts/pages/explore/explore.view.html', 'app/scripts/pages/list/list.view.html', 'app/scripts/pages/mobile/mobile.view.html', 'app/scripts/pages/promo/promo.view.html', 'app/scripts/pages/viewport/viewport.view.html']);

angular.module("app/scripts/core/components/blade/blade.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/blade/blade.directive.view.html",
    "<div class=\"content {{position}}\" ng-class=\"{expanded: expanded, collapsed: !expanded}\"></div>\n" +
    "<div class=\"overlay\" ng-if=\"expanded\" ng-click=\"overlayHandler()\"></div>");
}]);

angular.module("app/scripts/core/components/explore/explore.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/explore/explore.directive.view.html",
    "<button ng-click=\"rememberWord()\" class=\"btn btn-link btn-round btn-color-action btn-action-position-main\"\n" +
    "        ng-if=\"word.definitions.length && (!word.status || word.status == 'new')\">\n" +
    "    <svg class=\"svg-icon\">\n" +
    "        <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-add186\"></use>\n" +
    "    </svg>\n" +
    "</button>\n" +
    "\n" +
    "<button ng-click=\"forgetWord()\" class=\"btn btn-success btn-round btn-action-position-main btn-color-success\"\n" +
    "        ng-if=\"word.definitions.length && word.status == 'remembered'\">\n" +
    "    <svg class=\"svg-icon\">\n" +
    "        <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-check52\"></use>\n" +
    "    </svg>\n" +
    "</button>\n" +
    "\n" +
    "<div class=\"card transparent narrow exploreWordContainer\">\n" +
    "    <form ng-submit=\"onGetDefinition()\">\n" +
    "        <input type=\"text\" ng-model=\"form.word\" class=\"wide exploreWord\" placeholder=\"Explore word\">\n" +
    "    </form>\n" +
    "    <button ng-click=\"clearWord()\" class=\"btn btn-round btn-color-default clearWord\" ng-if=\"form.word\">\n" +
    "        <svg class=\"svg-icon\">\n" +
    "            <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-close47\"></use>\n" +
    "        </svg>\n" +
    "    </button>\n" +
    "</div>\n" +
    "\n" +
    "<seed-word-definition definition=\"definition\" ng-repeat=\"definition in word.definitions\"></seed-word-definition>\n" +
    "\n" +
    "<div ng-if=\"!word.definitions.length\">\n" +
    "    <div class=\"card\">\n" +
    "        No definitions\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/scripts/core/components/menu/menu.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/menu/menu.directive.view.html",
    "<ul>\n" +
    "    <li ng-repeat=\"item in items\">\n" +
    "        <a ng-class=\"{active: selected == item}\" ui-sref=\"{{item.sref}}\" ng-click=\"onClickHandler(item)\">\n" +
    "            <svg class=\"svg-icon\">\n" +
    "                <use xlink:href=\"{{item.icon}}\"></use>\n" +
    "            </svg>\n" +
    "            {{item.text}}\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("app/scripts/core/components/words/definition/definition.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/words/definition/definition.directive.view.html",
    "<div class=\"card word-definition\">\n" +
    "    <div class=\"text\">{{definition.text}}</div>\n" +
    "    <div class=\"meta\">\n" +
    "        <div class=\"attribution\">{{definition.attribution}}</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/scripts/core/components/words/list/list.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/words/list/list.directive.view.html",
    "<div class=\"card word-list-item\" ng-click=\"toggleDefinition()\" >\n" +
    "    <div class=\"content\">\n" +
    "        <span class=\"letter\">{{firstLetter}}</span>\n" +
    "        <span class=\"word\">{{word.word}}</span>\n" +
    "\n" +
    "        <svg class=\"svg-icon arrow \" ng-if=\"!showDefinition\">\n" +
    "            <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-expand38\"></use>\n" +
    "        </svg>\n" +
    "\n" +
    "        <svg class=\"svg-icon arrow \" ng-if=\"showDefinition\">\n" +
    "            <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-expand39\"></use>\n" +
    "        </svg>\n" +
    "\n" +
    "        <!--<button class=\"btn btn-link toCard\">\n" +
    "            <svg class=\"svg-icon \">\n" +
    "                <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-google126\"></use>\n" +
    "            </svg>\n" +
    "        </button>-->\n" +
    "    </div>\n" +
    "    <div class=\"definitions\" ng-if=\"showDefinition\">\n" +
    "        <ul>\n" +
    "            <li class=\"definition\" ng-repeat=\"definition in word.definitions\">\n" +
    "                {{definition.text}}\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/scripts/core/header/header.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/header/header.view.html",
    "<header class=\"mainHeader\">\n" +
    "    <button class=\"btn btn-link switchBlade\" ng-click=\"switchLeftBlade()\">\n" +
    "        <svg class=\"svg-icon\">\n" +
    "            <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-menu55\"></use>\n" +
    "        </svg>\n" +
    "    </button>\n" +
    "    <div class=\"title\">\n" +
    "        {{title}}\n" +
    "    </div>\n" +
    "</header>");
}]);

angular.module("app/scripts/core/menu/main/menu.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/menu/main/menu.view.html",
    "<div ng-controller=\"MenuBladeController\">\n" +
    "    <seed-menu seed-config=\"seedMenuConfiguration\"></seed-menu>\n" +
    "</div>");
}]);

angular.module("app/scripts/pages/explore/explore.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/explore/explore.view.html",
    "<seed-explore></seed-explore>");
}]);

angular.module("app/scripts/pages/list/list.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/list/list.view.html",
    "<ul ng-if=\"words.length\">\n" +
    "    <li ng-repeat=\"word in words\">\n" +
    "        <seed-swipe-card on-card-swipe=\"deleteWord(word, $index)\">\n" +
    "            <seed-word-list-item word=\"word\"></seed-word-list-item>\n" +
    "        </seed-swipe-card>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "\n" +
    "<div ng-if=\"!words || !words.length\">\n" +
    "    <div class=\"card\">\n" +
    "        No remembered words\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/scripts/pages/mobile/mobile.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/mobile/mobile.view.html",
    "<seed-blade seed-config=\"_leftBladeConfig\"></seed-blade>\n" +
    "<div ui-view=\"header\" ></div>\n" +
    "<div ui-view=\"content\" ></div>\n" +
    "<div class=\"overlay\" ng-if=\"overlay.show\"></div>");
}]);

angular.module("app/scripts/pages/promo/promo.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/promo/promo.view.html",
    "<div>\n" +
    "    <p>SVG external use</p>\n" +
    "    <svg class=\"svg-icon-address-book\">\n" +
    "        <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-address-book\"></use>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "\n" +
    "<br/>\n" +
    "\n" +
    "<div>\n" +
    "    <p>SVG into IMG</p>\n" +
    "    <img src=\"assets/svg/items/svg-icon-accessibility.svg\" alt=\"\"/>\n" +
    "</div>\n" +
    "\n" +
    "<br/>\n" +
    "\n" +
    "<div>\n" +
    "    <p>PNG icon</p>\n" +
    "    <i class=\"icon-test\"></i>\n" +
    "</div>");
}]);

angular.module("app/scripts/pages/viewport/viewport.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/viewport/viewport.view.html",
    "<ui-view></ui-view>");
}]);
