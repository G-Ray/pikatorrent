var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@tamagui/font-inter/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/font-inter/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createInterFont: () => createInterFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core54 = require("@tamagui/core-node");
    var createInterFont2 = /* @__PURE__ */ __name((font = {}, {
      sizeLineHeight = /* @__PURE__ */ __name((size3) => size3 + 10, "sizeLineHeight"),
      sizeSize = /* @__PURE__ */ __name((size3) => size3 * 1, "sizeSize")
    } = {}) => {
      const size3 = Object.fromEntries(
        Object.entries({
          ...defaultSizes,
          ...font.size
        }).map(([k, v]) => [k, sizeSize(+v)])
      );
      return (0, import_core54.createFont)({
        family: import_core54.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
        lineHeight: Object.fromEntries(
          Object.entries(size3).map(([k, v]) => [k, sizeLineHeight((0, import_core54.getVariableValue)(v))])
        ),
        weight: {
          4: "300"
        },
        letterSpacing: {
          4: 0
        },
        ...font,
        size: size3
      });
    }, "createInterFont");
    var defaultSizes = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      true: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 23,
      9: 30,
      10: 46,
      11: 55,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 134
    };
  }
});

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js
var require_matchMedia = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var matchMedia_exports = {};
    __export2(matchMedia_exports, {
      matchMedia: () => matchMedia2
    });
    module2.exports = __toCommonJS2(matchMedia_exports);
    var matchMedia2 = globalThis["matchMedia"];
  }
});

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js
var require_createMedia = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createMedia_exports = {};
    __export2(createMedia_exports, {
      createMedia: () => createMedia2
    });
    module2.exports = __toCommonJS2(createMedia_exports);
    var import_web16 = require("@tamagui/core-node");
    var import_matchMedia = require_matchMedia();
    function createMedia2(media) {
      (0, import_web16.setupMatchMedia)(import_matchMedia.matchMedia);
      return media;
    }
    __name(createMedia2, "createMedia");
  }
});

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_createMedia(), module2.exports);
    __reExport2(src_exports, require_matchMedia(), module2.exports);
  }
});

// ../../node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "../../node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = /* @__PURE__ */ __name(function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    }, "unwrapHost");
    var correctTargets = /* @__PURE__ */ __name(function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x) {
        return Boolean(x);
      });
    }, "correctTargets");
    var applyAttributeToOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    }, "applyAttributeToOthers");
    var hideOthers5 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    }, "hideOthers");
    exports.hideOthers = hideOthers5;
    var inertOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-inert-ed";
      }
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
    }, "inertOthers");
    exports.inertOthers = inertOthers;
    var supportsInert = /* @__PURE__ */ __name(function() {
      return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
    }, "supportsInert");
    exports.supportsInert = supportsInert;
    var suppressOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-suppressed";
      }
      return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
    }, "suppressOthers");
    exports.suppressOthers = suppressOthers;
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export2(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden4.hideOthers
    });
    module2.exports = __toCommonJS2(AriaHidden_exports);
    var import_aria_hidden4 = require_es5();
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AriaHidden(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dismissable/node_modules/@radix-ui/react-use-escape-keydown/node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@tamagui/dismissable/node_modules/@radix-ui/react-use-escape-keydown/node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e;
    var r;
    var t = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      "default" !== t2 && "__esModule" !== t2 && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    exports.useCallbackRef = function(e2) {
      const r2 = t.useRef(e2);
      return t.useEffect(() => {
        r2.current = e2;
      }), t.useMemo(() => (...e3) => {
        var t2;
        return null === (t2 = r2.current) || void 0 === t2 ? void 0 : t2.call(r2, ...e3);
      }, []);
    };
  }
});

// ../../node_modules/@tamagui/dismissable/node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@tamagui/dismissable/node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e;
    var t;
    var n = require_dist().useCallbackRef;
    var r = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      "default" !== n2 && "__esModule" !== n2 && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    exports.useEscapeKeydown = function(e2) {
      const t2 = n(e2);
      r.useEffect(() => {
        const e3 = /* @__PURE__ */ __name((e4) => {
          "Escape" === e4.key && t2(e4);
        }, "e");
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [t2]);
    };
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export2(compose_refs_exports, {
      composeRefs: () => composeRefs4,
      useComposedRefs: () => useComposedRefs4
    });
    module2.exports = __toCommonJS2(compose_refs_exports);
    var React39 = __toESM2(require("react"));
    function setRef2(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ;
        ref.current = value;
      }
    }
    __name(setRef2, "setRef");
    function composeRefs4(...refs) {
      return (node) => refs.forEach((ref) => setRef2(ref, node));
    }
    __name(composeRefs4, "composeRefs");
    function useComposedRefs4(...refs) {
      return React39.useCallback(composeRefs4(...refs), refs);
    }
    __name(useComposedRefs4, "useComposedRefs");
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_compose_refs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export2(useGet_exports, {
      useGet: () => useGet6
    });
    module2.exports = __toCommonJS2(useGet_exports);
    var import_react44 = require("react");
    var isWeb28 = process.env.TAMAGUI_TARGET === "web";
    var isClient7 = typeof window !== "undefined";
    var useIsomorphicLayoutEffect14 = !isWeb28 || isClient7 ? import_react44.useLayoutEffect : import_react44.useEffect;
    function useGet6(currentValue, initialValue2, forwardToFunction) {
      const curRef = (0, import_react44.useRef)(initialValue2 ?? currentValue);
      useIsomorphicLayoutEffect14(() => {
        curRef.current = currentValue;
      });
      return (0, import_react44.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet6, "useGet");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export2(useEvent_exports, {
      useEvent: () => useEvent11
    });
    module2.exports = __toCommonJS2(useEvent_exports);
    var import_useGet2 = require_useGet();
    function useEvent11(callback) {
      return (0, import_useGet2.useGet)(callback, defaultValue2, true);
    }
    __name(useEvent11, "useEvent");
    var defaultValue2 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useEvent(), module2.exports);
    __reExport2(src_exports, require_useGet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export2(FocusScope_exports, {
      FocusScope: () => FocusScope4
    });
    module2.exports = __toCommonJS2(FocusScope_exports);
    var import_compose_refs15 = require_cjs4();
    var import_use_event3 = require_cjs5();
    var React39 = __toESM2(require("react"));
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
    var FOCUS_SCOPE_NAME = "FocusScope";
    var FocusScope4 = React39.forwardRef(
      (props, forwardedRef) => {
        const {
          loop = false,
          trapped = false,
          onMountAutoFocus: onMountAutoFocusProp,
          onUnmountAutoFocus: onUnmountAutoFocusProp,
          children,
          forceUnmount,
          ...scopeProps
        } = props;
        const [container, setContainer] = React39.useState(null);
        const onMountAutoFocus = (0, import_use_event3.useEvent)(onMountAutoFocusProp);
        const onUnmountAutoFocus = (0, import_use_event3.useEvent)(onUnmountAutoFocusProp);
        const lastFocusedElementRef = React39.useRef(null);
        const composedRefs = (0, import_compose_refs15.useComposedRefs)(forwardedRef, (node) => setContainer(node));
        const focusScope = React39.useRef({
          paused: false,
          pause() {
            this.paused = true;
          },
          resume() {
            this.paused = false;
          }
        }).current;
        React39.useEffect(() => {
          if (!trapped)
            return;
          function handleFocusIn(event) {
            if (focusScope.paused || !container)
              return;
            const target = event.target;
            if (container.contains(target)) {
              lastFocusedElementRef.current = target;
            } else {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusIn, "handleFocusIn");
          function handleFocusOut(event) {
            if (focusScope.paused || !container)
              return;
            if (!container.contains(event.relatedTarget)) {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusOut, "handleFocusOut");
          document.addEventListener("focusin", handleFocusIn);
          document.addEventListener("focusout", handleFocusOut);
          return () => {
            document.removeEventListener("focusin", handleFocusIn);
            document.removeEventListener("focusout", handleFocusOut);
          };
        }, [trapped, forceUnmount, container, focusScope.paused]);
        React39.useEffect(() => {
          if (!container)
            return;
          if (forceUnmount)
            return;
          focusScopesStack.add(focusScope);
          const previouslyFocusedElement = document.activeElement;
          const hasFocusedCandidate = container.contains(previouslyFocusedElement);
          if (!hasFocusedCandidate) {
            const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS2);
            container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            container.dispatchEvent(mountEvent);
            if (!mountEvent.defaultPrevented) {
              focusFirst2(removeLinks(getTabbableCandidates(container)), { select: true });
              if (document.activeElement === previouslyFocusedElement) {
                focus(container);
              }
            }
          }
          return () => {
            container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS2);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          };
        }, [container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
        const handleKeyDown = React39.useCallback(
          (event) => {
            if (!(loop || trapped))
              return;
            if (focusScope.paused)
              return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
              const container2 = event.currentTarget;
              const [first, last] = getTabbableEdges(container2);
              const hasTabbableElementsInside = first && last;
              if (!hasTabbableElementsInside) {
                if (focusedElement === container2)
                  event.preventDefault();
              } else {
                if (!event.shiftKey && focusedElement === last) {
                  event.preventDefault();
                  if (loop)
                    focus(first, { select: true });
                } else if (event.shiftKey && focusedElement === first) {
                  event.preventDefault();
                  if (loop)
                    focus(last, { select: true });
                }
              }
            }
          },
          [loop, trapped, focusScope.paused]
        );
        const child = React39.Children.only(children);
        return React39.cloneElement(child, {
          tabIndex: -1,
          ...scopeProps,
          ref: composedRefs,
          onKeyDown: handleKeyDown
        });
      }
    );
    FocusScope4.displayName = FOCUS_SCOPE_NAME;
    function focusFirst2(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        focus(candidate, { select });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    __name(focusFirst2, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container);
      const first = findVisible(candidates, container);
      const last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements) {
        if (!isHidden(element, { upTo: container }))
          return element;
      }
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      if (element == null ? void 0 : element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
          element.select();
      }
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope) {
            activeFocusScope == null ? void 0 : activeFocusScope.pause();
          }
          stack = arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope);
          (_a = stack[0]) == null ? void 0 : _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array];
      const index3 = updatedArray.indexOf(item);
      if (index3 !== -1) {
        updatedArray.splice(index3, 1);
      }
      return updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_FocusScope(), module2.exports);
  }
});

// ../../node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "../../node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getSize: () => getSize7,
      stepTokenUpOrDown: () => stepTokenUpOrDown6
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core54 = require("@tamagui/core-node");
    var getSize7 = /* @__PURE__ */ __name((size3, shift2 = 0, bounds = [0]) => {
      return stepTokenUpOrDown6("size", size3, shift2, bounds);
    }, "getSize");
    var stepTokenUpOrDown6 = /* @__PURE__ */ __name((type, name = "$true", shift2 = 0, bounds = [0]) => {
      const tokens2 = (0, import_core54.getTokens)({ prefixed: true })[type];
      const maybeTokenizedKeysOrdered = import_core54.tokensKeysOrdered.get(tokens2) || Object.keys(tokens2);
      const keysOrdered = maybeTokenizedKeysOrdered.map((maybeTokenizedKey) => maybeTokenizedKey.charAt(0) === "$" ? maybeTokenizedKey : `$${maybeTokenizedKey}`);
      const min3 = bounds[0] ?? 0;
      const max3 = bounds[1] ?? keysOrdered.length - 1;
      const currentIndex = keysOrdered.indexOf(name);
      if (name === "$true") {
        shift2 += shift2 === 0 ? 0 : shift2 > 0 ? 1 : -1;
      }
      const index3 = Math.min(max3, Math.max(min3, currentIndex + shift2));
      const key = keysOrdered[index3];
      return tokens2[key] || tokens2["$true"];
    }, "stepTokenUpOrDown");
  }
});

// ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getButtonSized: () => getButtonSized6
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_get_size11 = require_cjs7();
    var getButtonSized6 = /* @__PURE__ */ __name((val, { tokens: tokens2 }) => {
      if (typeof val === "number") {
        return {
          paddingHorizontal: val * 0.25,
          height: val,
          borderRadius: val * 0.2
        };
      }
      const ySize = (0, import_get_size11.getSize)(val, 0);
      const xSize = (0, import_get_size11.stepTokenUpOrDown)("space", val);
      const radiusToken = tokens2.radius[val] ?? tokens2.radius["$true"];
      return {
        paddingHorizontal: xSize,
        height: ySize,
        borderRadius: radiusToken
      };
    }, "getButtonSized");
  }
});

// ../../node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  __name(__, "__");
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.push(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.push(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
  __name(verb, "verb");
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "../../node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__esDecorate, "__esDecorate");
    __name(__runInitializers, "__runInitializers");
    __name(__propKey, "__propKey");
    __name(__setFunctionName, "__setFunctionName");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__spreadArray, "__spreadArray");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    __name(__classPrivateFieldIn, "__classPrivateFieldIn");
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// ../../node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue2, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          // value
          value: initialValue2,
          // last callback
          callback,
          // "memoized" public interface
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue2) {
      return (0, useRef_1.useCallbackRef)(defaultValue2 || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// ../../node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "../../node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// ../../node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// ../../node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// ../../node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React39.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// ../../node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// ../../node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React39.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children5 = React39.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React39.useRef(defaults(props));
        var ref = React39.useRef(function(state) {
          return defaultState.current = state;
        });
        return React39.createElement(
          React39.Fragment,
          null,
          React39.createElement(State, { stateRef: ref, props }),
          React39.createElement(Children5, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React39.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll2 = React39.forwardRef(function(props, parentRef) {
      var ref = React39.useRef(null);
      var _a = React39.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React39.createElement(
        React39.Fragment,
        null,
        enabled && React39.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
        forwardProps ? React39.cloneElement(React39.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React39.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll2;
    RemoveScroll2.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll2.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// ../../node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "../../node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// ../../node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React39.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle2 = (0, hook_1.styleHookSingleton)();
      var Sheet2 = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle2(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet2;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React39.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React39.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return (
        // not-not-scrollable
        styles[overflow] !== "hidden" && // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
      );
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var ownerDocument = node.ownerDocument;
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== ownerDocument.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (
        // portaled content
        !targetInLock && target !== document.body || // self content
        targetInLock && (endTarget.contains(target) || endTarget === target)
      );
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React39.useRef([]);
      var touchStartRef = React39.useRef([0, 0]);
      var activeAxis = React39.useRef();
      var id = React39.useState(idCounter++)[0];
      var Style = React39.useState(react_style_singleton_1.styleSingleton)[0];
      var lastProps = React39.useRef(props);
      React39.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React39.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React39.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React39.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React39.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React39.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React39.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React39.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React39.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React39.createElement(
        React39.Fragment,
        null,
        inert ? React39.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React39.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: props.gapMode }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React39.forwardRef(function(props, ref) {
      return React39.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// ../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getFontSized: () => getFontSized4
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core54 = require("@tamagui/core-node");
    var getFontSized4 = /* @__PURE__ */ __name((sizeTokenIn = "$true", { fonts, props }) => {
      var _a, _b, _c, _d, _e, _f;
      const family = (0, import_core54.getVariableValue)(props.fontFamily) || "$body";
      const font = fonts[family] || fonts["$body"];
      if (!font) {
        if (process.env.NODE_ENV === "development") {
          console.warn("\u26A0\uFE0F no font found", {
            family,
            fontTokens: Object.keys(fonts),
            sizeTokenIn
          });
        }
        return {};
      }
      const fontFamily = font.family;
      const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn;
      const fontSize = props.fontSize || font.size[sizeToken];
      const lineHeight = props.lineHeight || ((_a = font.lineHeight) == null ? void 0 : _a[sizeToken]);
      const fontWeight = props.fontWeight || ((_b = font.weight) == null ? void 0 : _b[sizeToken]);
      const letterSpacing = props.letterSpacing || ((_c = font.letterSpacing) == null ? void 0 : _c[sizeToken]);
      const fontStyle = props.fontStyle || ((_d = font.style) == null ? void 0 : _d[sizeToken]);
      const textTransform = props.textTransform || ((_e = font.transform) == null ? void 0 : _e[sizeToken]);
      const color2 = props.color || ((_f = font.color) == null ? void 0 : _f[sizeToken]);
      const style = {
        color: color2,
        fontStyle,
        textTransform,
        fontFamily,
        fontWeight,
        letterSpacing,
        fontSize,
        lineHeight
      };
      if (process.env.NODE_ENV === "development") {
        if (props["debug"]) {
          console.groupCollapsed("  \u{1F539} getFontSized", sizeTokenIn, sizeToken);
          console.log({ style, props, font });
          console.groupEnd();
        }
      }
      return style;
    }, "getFontSized");
    var cache = /* @__PURE__ */ new WeakMap();
    function getDefaultSizeToken(font) {
      if (typeof font === "object" && cache.has(font)) {
        return cache.get(font);
      }
      const sizeTokens = "$true" in font.size ? font.size : (0, import_core54.getTokens)().size;
      const sizeDefault = sizeTokens["$true"];
      const sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find(
        (x) => x !== "$true" && sizeTokens[x]["val"] === sizeDefault["val"]
      ) : null;
      if (!sizeDefault || !sizeDefaultSpecific) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`);
        }
        return Object.keys(font.size)[3];
      }
      cache.set(font, sizeDefaultSpecific);
      return sizeDefaultSpecific;
    }
    __name(getDefaultSizeToken, "getDefaultSizeToken");
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export2(Image_exports, {
      Image: () => Image2
    });
    module2.exports = __toCommonJS2(Image_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var import_core54 = require("@tamagui/core-node");
    var import_react44 = require("react");
    var import_react_native13 = require("react-native-web-lite");
    (0, import_core54.setupReactNative)({
      Image: import_react_native13.Image
    });
    var StyledImage = (0, import_core54.styled)(import_react_native13.Image, {
      name: "Image",
      position: "relative",
      source: { uri: "" },
      zIndex: 1
    });
    var hasWarned = false;
    var Image2 = StyledImage.extractable(
      (0, import_react44.forwardRef)((inProps, ref) => {
        const props = (0, import_core54.useProps)(inProps);
        const { src, source, ...rest } = props;
        if (process.env.NODE_ENV === "development") {
          if (typeof src === "string") {
            if (typeof props.width === "string" && props.width[0] !== "$" || typeof props.height === "string" && props.height[0] !== "$") {
              if (!hasWarned) {
                hasWarned = true;
                console.warn(
                  `React Native expects a numerical width/height. If you want to use a percent you must define the "source" prop with width, height, and uri.`
                );
              }
            }
          }
        }
        const finalSource = typeof src === "string" ? { uri: src, ...import_core54.isWeb && { width: props.width, height: props.height } } : source ?? src;
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(StyledImage, { ref, source: finalSource, ...rest });
      })
    );
    Image2.getSize = import_react_native13.Image.getSize;
    Image2.getSizeWithHeaders = import_react_native13.Image.getSizeWithHeaders;
    Image2.prefetch = import_react_native13.Image.prefetch;
    Image2.prefetchWithMetadata = import_react_native13.Image.prefetchWithMetadata;
    Image2.abortPrefetch = import_react_native13.Image.abortPrefetch;
    Image2.queryCache = import_react_native13.Image.queryCache;
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Image(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export2(getFontSize_exports, {
      getFontSize: () => getFontSize4,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS2(getFontSize_exports);
    var import_core54 = require("@tamagui/core-node");
    var getFontSize4 = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      if ((0, import_core54.isVariable)(res)) {
        return +res.val;
      }
      return res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      if (!token) {
        return inSize;
      }
      const conf = (0, import_core54.getConfig)();
      return conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token];
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize === "number") {
        return null;
      }
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0;
      const conf = (0, import_core54.getConfig)();
      const fontSize = conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size;
      const size3 = inSize || ("$true" in fontSize ? "$true" : "$4");
      const sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size3);
      if (foundIndex === -1) {
        if (size3.endsWith(".5")) {
          foundIndex = sizeTokens.indexOf(size3.replace(".5", ""));
        }
      }
      if (process.env.NODE_ENV === "development") {
        if (foundIndex === -1) {
          console.warn("No font size found", size3, opts, "in size tokens", sizeTokens);
        }
      }
      const tokenIndex = Math.min(
        Math.max(0, foundIndex + relativeSize),
        sizeTokens.length - 1
      );
      return sizeTokens[tokenIndex] ?? size3;
    }, "getFontSizeToken");
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_getFontSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export2(clamp_exports, {
      clamp: () => clamp2
    });
    module2.exports = __toCommonJS2(clamp_exports);
    function clamp2(value, [min3, max3]) {
      return Math.min(max3, Math.max(min3, value));
    }
    __name(clamp2, "clamp");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export2(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers13
    });
    module2.exports = __toCommonJS2(composeEventHandlers_exports);
    function composeEventHandlers13(og, next, { checkDefaultPrevented = true } = {}) {
      if (!og || !next) {
        return next || og;
      }
      return /* @__PURE__ */ __name(function composedEventHandler(event) {
        og == null ? void 0 : og(event);
        if (!event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
        "defaultPrevented" in event && !event.defaultPrevented) {
          return next == null ? void 0 : next(event);
        }
      }, "composedEventHandler");
    }
    __name(composeEventHandlers13, "composeEventHandlers");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export2(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS2(concatClassName_exports);
    function concatClassName(_cn) {
      const args = arguments;
      const usedPrefixes = [];
      let final = "";
      const len = args.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = args[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns !== "string") {
          propObjects = propObjects || [];
          propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" ");
        const numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const nextChar = name[splitIndex + 1];
          const isMediaQuery = nextChar === "_";
          const styleKey = name.slice(1, name.lastIndexOf("-"));
          const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
          const uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1) {
            continue;
          }
          usedPrefixes.push(uid);
          const propName = styleKey;
          if (propName && propObjects) {
            if (propObjects.some((po) => {
              if (mediaKey) {
                const propKey = pseudoInvert[mediaKey];
                return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
              }
              const res = po && propName in po && po[propName] !== null;
              return res;
            })) {
              continue;
            }
          }
          final = name + " " + final;
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// ../../node_modules/@tamagui/constants/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "../../node_modules/@tamagui/constants/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isAndroid: () => isAndroid3,
      isChrome: () => isChrome3,
      isClient: () => isClient7,
      isIos: () => isIos,
      isRSC: () => isRSC4,
      isServer: () => isServer3,
      isTouchable: () => isTouchable4,
      isWeb: () => isWeb28,
      isWebTouchable: () => isWebTouchable3,
      isWindowDefined: () => isWindowDefined2,
      useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect14
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react44 = require("react");
    var isWeb28 = process.env.TAMAGUI_TARGET === "web";
    var isWindowDefined2 = typeof window !== "undefined";
    var isServer3 = isWeb28 && !isWindowDefined2;
    var isClient7 = isWeb28 && isWindowDefined2;
    var isRSC4 = process.env.ENABLE_RSC;
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
    var useIsomorphicLayoutEffect14 = isRSC4 ? idFn4 : isServer3 ? import_react44.useEffect : import_react44.useLayoutEffect;
    var isChrome3 = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
    var isWebTouchable3 = isClient7 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    var isTouchable4 = !isWeb28 || isWebTouchable3;
    if (!process.env.TAMAGUI_TARGET) {
      console.warn(`\u26A0\uFE0F Must set TAMAGUI_TARGET`);
    }
    if (process.env.NODE_ENV === "development") {
      if (isClient7 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1") {
        console.warn(
          `Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this`
        );
      }
    }
    var isAndroid3 = false;
    var isIos = false;
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export2(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsFont: () => stylePropsFont2,
      stylePropsText: () => stylePropsText2,
      stylePropsTextOnly: () => stylePropsTextOnly2,
      stylePropsTransform: () => stylePropsTransform2,
      stylePropsView: () => stylePropsView2,
      validPseudoKeys: () => validPseudoKeys2,
      validStyles: () => validStyles2,
      validStylesOnBaseProps: () => validStylesOnBaseProps2
    });
    module2.exports = __toCommonJS2(validStyleProps_exports);
    var import_constants13 = require_cjs12();
    var stylePropsTransform2 = Object.freeze({
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    });
    var validStylesOnBaseProps2 = Object.freeze({
      placeholderTextColor: true
    });
    var stylePropsView2 = Object.freeze({
      backfaceVisibility: true,
      backgroundColor: true,
      borderBottomColor: true,
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: true,
      borderEndColor: true,
      borderLeftColor: true,
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: true,
      borderRightWidth: true,
      borderStartColor: true,
      borderStyle: true,
      borderTopColor: true,
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      opacity: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      gap: true,
      columnGap: true,
      rowGap: true,
      height: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      width: true,
      zIndex: true,
      direction: true,
      shadowColor: true,
      shadowOffset: true,
      shadowOpacity: true,
      shadowRadius: true,
      ...validStylesOnBaseProps2,
      ...stylePropsTransform2,
      // allow a few web only ones
      ...process.env.TAMAGUI_TARGET === "web" && {
        // RN doesn't support specific border styles per-edge
        borderBottomStyle: true,
        borderTopStyle: true,
        borderLeftStyle: true,
        borderRightStyle: true,
        overflowX: true,
        overflowY: true,
        userSelect: true,
        cursor: true,
        contain: true,
        pointerEvents: true,
        boxSizing: true,
        boxShadow: true,
        outlineColor: true,
        outlineStyle: true,
        outlineOffset: true,
        outlineWidth: true
      },
      ...import_constants13.isAndroid ? { elevationAndroid: true } : {}
    });
    var stylePropsFont2 = Object.freeze({
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textTransform: true
    });
    var stylePropsTextOnly2 = Object.freeze({
      color: true,
      ...stylePropsFont2,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      textDecorationColor: true,
      textShadowColor: true,
      textShadowOffset: true,
      textShadowRadius: true,
      // allow some web only ones
      ...process.env.TAMAGUI_TARGET === "web" && {
        whiteSpace: true,
        wordWrap: true,
        textOverflow: true,
        textDecorationDistance: true,
        userSelect: true,
        selectable: true,
        cursor: true,
        WebkitLineClamp: true,
        WebkitBoxOrient: true
      }
    });
    var stylePropsText2 = Object.freeze({
      ...stylePropsView2,
      ...stylePropsTextOnly2
    });
    var stylePropsAll = stylePropsText2;
    var validPseudoKeys2 = Object.freeze({
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    });
    var validStyles2 = Object.freeze({
      ...validPseudoKeys2,
      ...stylePropsView2
    });
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "../../node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS2(src_exports);
    var cache = /* @__PURE__ */ new Map();
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      if (cache.has(str)) {
        return cache.get(str);
      }
      let hash = 0;
      let valids = "";
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (char === 46)
          valids += "d0t";
        if (isValidCSSCharCode(char) && len <= hashMin) {
          valids += str[i];
        } else {
          hash = hashChar(hash, str[i]);
        }
      }
      const res = valids + (hash ? Math.abs(hash) : "");
      if (cache.size > 1e4) {
        cache.clear();
      }
      cache.set(str, res);
      return res;
    }, "simpleHash");
    var hashChar = /* @__PURE__ */ __name((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, "hashChar");
    function isValidCSSCharCode(code) {
      return (
        // A-Z
        code >= 65 && code <= 90 || // a-z
        code >= 97 && code <= 122 || // _
        code === 95 || // -
        code === 45 || // 0-9
        code >= 48 && code <= 57
      );
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_clamp(), module2.exports);
    __reExport2(src_exports, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports, require_concatClassName(), module2.exports);
    __reExport2(src_exports, require_validStyleProps(), module2.exports);
    __reExport2(src_exports, require_types(), module2.exports);
    __reExport2(src_exports, require_cjs13(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export2(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS2(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getSpace_exports = {};
    __export2(getSpace_exports, {
      getSpace: () => getSpace2
    });
    module2.exports = __toCommonJS2(getSpace_exports);
    var import_core54 = require("@tamagui/core-node");
    var getSpace2 = /* @__PURE__ */ __name((token, sizeUpOrDownBy = 0) => {
      const spaces2 = (0, import_core54.getTokens)().space;
      const spaceNames = Object.keys(spaces2);
      const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$true")) + sizeUpOrDownBy)];
      return spaces2[key] || spaces2["$true"];
    }, "getSpace");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export2(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS2(useCurrentColor_exports);
    var import_core54 = require("@tamagui/core-node");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_core54.useTheme)();
      return (0, import_core54.variableToString)(colorProp || theme[colorProp] || theme.color);
    }, "useCurrentColor");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export2(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon4
    });
    module2.exports = __toCommonJS2(useGetThemedIcon_exports);
    var import_react44 = require("react");
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon4 = /* @__PURE__ */ __name((props) => {
      const color2 = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => {
        if (!el)
          return el;
        if ((0, import_react44.isValidElement)(el)) {
          return (0, import_react44.cloneElement)(el, {
            ...props,
            color: color2,
            // @ts-expect-error
            ...el.props
          });
        }
        return (0, import_react44.createElement)(el, props);
      };
    }, "useGetThemedIcon");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs14(), module2.exports);
    __reExport2(src_exports, require_prevent(), module2.exports);
    __reExport2(src_exports, require_getSpace(), module2.exports);
    __reExport2(src_exports, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports, require_useGetThemedIcon(), module2.exports);
  }
});

// ../../node_modules/@tamagui/checkbox/node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/@tamagui/checkbox/node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export2(registerFocusable_exports, {
      focusFocusable: () => focusFocusable2,
      registerFocusable: () => registerFocusable5,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS2(registerFocusable_exports);
    var registerFocusable5 = /* @__PURE__ */ __name((id, input) => () => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable2 = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export2(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC3
    });
    module2.exports = __toCommonJS2(focusableInputHOC_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var import_compose_refs15 = require_cjs4();
    var import_web16 = require("@tamagui/core-node");
    var import_react44 = require("react");
    var import_registerFocusable = require_registerFocusable();
    function focusableInputHOC3(Component) {
      const component = Component.styleable(
        (props, ref) => {
          const isInput = (0, import_web16.isTamaguiComponent)(Component) && Component.staticConfig.isInput;
          const inputValue = (0, import_react44.useRef)(props.value || props.defaultValue || "");
          const unregisterFocusable = (0, import_react44.useRef)();
          const inputRef = (0, import_react44.useCallback)(
            (input) => {
              var _a;
              if (!props.id)
                return;
              if (!input)
                return;
              (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
              unregisterFocusable.current = (0, import_registerFocusable.registerFocusable)(props.id, {
                focus: input.focus,
                ...isInput && {
                  // react-native doesn't support programmatic .select()
                  focusAndSelect() {
                    input.focus();
                    if (input.setSelection && typeof inputValue.current === "string") {
                      input.setSelection(0, inputValue.current.length);
                    }
                  }
                }
              });
            },
            [isInput, props.id]
          );
          const combinedRefs = (0, import_compose_refs15.composeRefs)(ref, inputRef);
          (0, import_react44.useEffect)(() => {
            return () => {
              var _a;
              (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
            };
          }, []);
          const onChangeText = (0, import_web16.useEvent)((value) => {
            var _a;
            inputValue.current = value;
            (_a = props.onChangeText) == null ? void 0 : _a.call(props, value);
          });
          const finalProps = isInput ? {
            ...props,
            onChangeText
          } : props;
          return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Component, { ref: combinedRefs, ...finalProps });
        }
      );
      return component;
    }
    __name(focusableInputHOC3, "focusableInputHOC");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS2(focusable_exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_registerFocusable(), module2.exports);
    __reExport2(src_exports, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports, require_focusable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export2(create_context_exports, {
      createContext: () => createContext13,
      createContextScope: () => createContextScope2
    });
    module2.exports = __toCommonJS2(create_context_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var React39 = __toESM2(require("react"));
    function createContext13(rootComponentName, defaultContext) {
      const Context = React39.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = React39.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Context.Provider, { value, children });
      }
      __name(Provider, "Provider");
      function useContext13(consumerName) {
        const context = React39.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      __name(useContext13, "useContext");
      Provider.displayName = `${rootComponentName}Provider`;
      return [Provider, useContext13];
    }
    __name(createContext13, "createContext");
    function createContextScope2(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext22(rootComponentName, defaultContext) {
        const BaseContext = React39.createContext(defaultContext);
        const index3 = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
          const value = React39.useMemo(
            () => context,
            Object.values(context)
          );
          return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Context.Provider, { value, children });
        }
        __name(Provider, "Provider");
        function useContext13(consumerName, scope, options) {
          const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
          const context = React39.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
          if (options == null ? void 0 : options.fallback) {
            if ((options == null ? void 0 : options.warn) !== false) {
              console.warn(missingContextMessage);
            }
            return options.fallback;
          } else {
            throw new Error(missingContextMessage);
          }
        }
        __name(useContext13, "useContext");
        Provider.displayName = `${rootComponentName}Provider`;
        return [Provider, useContext13];
      }
      __name(createContext22, "createContext2");
      const createScope2 = /* @__PURE__ */ __name(() => {
        const scopeContexts2 = defaultContexts.map((defaultContext) => {
          return React39.createContext(defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts2;
          return React39.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        }, "useScope");
      }, "createScope");
      createScope2.scopeName = scopeName;
      return [
        createContext22,
        composeContextScopes2(createScope2, ...createContextScopeDeps)
      ];
    }
    __name(createContextScope2, "createContextScope");
    function composeContextScopes2(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope2 = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope22) => ({
          useScope: createScope22(),
          scopeName: createScope22.scopeName
        }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React39.useMemo(
            () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
            [nextScopes]
          );
        }, "useComposedScopes");
      }, "createScope");
      createScope2.scopeName = baseScope.scopeName;
      return createScope2;
    }
    __name(composeContextScopes2, "composeContextScopes");
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_create_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getElevation_exports = {};
    __export2(getElevation_exports, {
      getElevation: () => getElevation2,
      getSizedElevation: () => getSizedElevation2
    });
    module2.exports = __toCommonJS2(getElevation_exports);
    var import_core54 = require("@tamagui/core-node");
    var getElevation2 = /* @__PURE__ */ __name((size3, extras) => {
      if (!size3)
        return;
      const { tokens: tokens2 } = extras;
      const token = tokens2.size[size3];
      const sizeNum = (0, import_core54.isVariable)(token) ? +token.val : size3;
      return getSizedElevation2(sizeNum, extras);
    }, "getElevation");
    var getSizedElevation2 = /* @__PURE__ */ __name((val, { theme, tokens: tokens2 }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core54.getVariableValue)(tokens2.size["true"]);
        if (typeof val2 === "number") {
          num = val2;
        } else {
          num = 10;
        }
      } else {
        num = +val;
      }
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      const shadow = {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 },
        ...import_core54.isAndroid ? {
          elevationAndroid: 2 * height
        } : {}
      };
      return shadow;
    }, "getSizedElevation");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export2(Stacks_exports, {
      XStack: () => XStack2,
      YStack: () => YStack2,
      ZStack: () => ZStack2,
      fullscreenStyle: () => fullscreenStyle2
    });
    module2.exports = __toCommonJS2(Stacks_exports);
    var import_core54 = require("@tamagui/core-node");
    var import_getElevation3 = require_getElevation();
    var fullscreenStyle2 = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants2 = {
      fullscreen: {
        true: fullscreenStyle2
      },
      elevation: {
        "...size": import_getElevation3.getElevation
      }
    };
    var YStack2 = (0, import_core54.styled)(import_core54.Stack, {
      flexDirection: "column",
      variants: variants2
    });
    var XStack2 = (0, import_core54.styled)(import_core54.Stack, {
      flexDirection: "row",
      variants: variants2
    });
    var ZStack2 = (0, import_core54.styled)(
      YStack2,
      {
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export2(variants_exports, {
      bordered: () => bordered2,
      circular: () => circular2,
      elevate: () => elevate2,
      focusTheme: () => focusTheme2,
      hoverTheme: () => hoverTheme2,
      padded: () => padded2,
      pressTheme: () => pressTheme2,
      radiused: () => radiused2
    });
    module2.exports = __toCommonJS2(variants_exports);
    var import_getElevation3 = require_getElevation();
    var elevate2 = {
      true: (_, extras) => {
        return (0, import_getElevation3.getElevation)(extras.props["size"], extras);
      }
    };
    var bordered2 = /* @__PURE__ */ __name((val, { props }) => {
      return {
        // TODO size it with size in '...size'
        borderWidth: typeof val === "number" ? val : 1,
        borderColor: "$borderColor",
        ...props.hoverTheme && {
          hoverStyle: {
            borderColor: "$borderColorHover"
          }
        },
        ...props.pressTheme && {
          pressStyle: {
            borderColor: "$borderColorPress"
          }
        },
        ...props.focusTheme && {
          focusStyle: {
            borderColor: "$borderColorFocus"
          }
        }
      };
    }, "bordered");
    var padded2 = {
      true: (_, extras) => {
        const { tokens: tokens2, props } = extras;
        return {
          padding: tokens2.space[props.size] || tokens2.space["$true"]
        };
      }
    };
    var radiused2 = {
      true: (_, extras) => {
        const { tokens: tokens2, props } = extras;
        return {
          borderRadius: tokens2.radius[props.size] || tokens2.radius["$true"]
        };
      }
    };
    var circular2 = {
      true: (_, { props, tokens: tokens2 }) => {
        const size3 = tokens2.size[props.size || "$true"];
        return {
          width: size3,
          height: size3,
          maxWidth: size3,
          maxHeight: size3,
          minWidth: size3,
          minHeight: size3,
          borderRadius: 1e5,
          padding: 0
        };
      }
    };
    var hoverTheme2 = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme2 = {
      true: {
        cursor: "pointer",
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme2 = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export2(SizableStack_exports, {
      SizableStack: () => SizableStack2
    });
    module2.exports = __toCommonJS2(SizableStack_exports);
    var import_core54 = require("@tamagui/core-node");
    var import_get_button_sized6 = require_cjs8();
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var SizableStack2 = (0, import_core54.styled)(import_Stacks3.XStack, {
      name: "SizableStack",
      variants: {
        unstyled: {
          true: {
            hoverTheme: false,
            pressTheme: false,
            focusTheme: false,
            elevate: false,
            bordered: false
          },
          false: {
            backgroundColor: "$background",
            flexShrink: 1
          }
        },
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        size: {
          "...size": import_get_button_sized6.getButtonSized
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export2(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack2,
      themeableVariants: () => themeableVariants2
    });
    module2.exports = __toCommonJS2(ThemeableStack_exports);
    var import_core54 = require("@tamagui/core-node");
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var chromelessStyle2 = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent"
    };
    var themeableVariants2 = {
      backgrounded: {
        true: {
          backgroundColor: "$background"
        }
      },
      radiused: import_variants3.radiused,
      hoverTheme: import_variants3.hoverTheme,
      pressTheme: import_variants3.pressTheme,
      focusTheme: import_variants3.focusTheme,
      circular: import_variants3.circular,
      padded: import_variants3.padded,
      elevate: import_variants3.elevate,
      bordered: import_variants3.bordered,
      transparent: {
        true: {
          backgroundColor: "transparent"
        }
      },
      chromeless: {
        true: chromelessStyle2,
        all: {
          ...chromelessStyle2,
          hoverStyle: chromelessStyle2,
          pressStyle: chromelessStyle2,
          focusStyle: chromelessStyle2
        }
      }
    };
    var ThemeableStack2 = (0, import_core54.styled)(import_Stacks3.YStack, {
      variants: themeableVariants2
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Stacks(), module2.exports);
    __reExport2(src_exports, require_SizableStack(), module2.exports);
    __reExport2(src_exports, require_ThemeableStack(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export2(useControllableState_exports, {
      useControllableState: () => useControllableState2
    });
    module2.exports = __toCommonJS2(useControllableState_exports);
    var import_use_event3 = require_cjs5();
    var import_react44 = require("react");
    var emptyCallbackFn2 = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
    function useControllableState2({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate,
      transition
    }) {
      const [state, setState] = (0, import_react44.useState)(prop ?? defaultProp);
      const previous = (0, import_react44.useRef)(state);
      const propWins = strategy === "prop-wins" && prop !== void 0;
      const value = propWins ? prop : state;
      const onChangeCb = (0, import_use_event3.useEvent)(onChange || idFn4);
      const transitionFn = transition ? import_react44.startTransition : emptyCallbackFn2;
      (0, import_react44.useEffect)(() => {
        if (prop === void 0)
          return;
        previous.current = prop;
        transitionFn(() => {
          setState(prop);
        });
      }, [prop]);
      (0, import_react44.useEffect)(() => {
        if (propWins)
          return;
        if (state !== previous.current) {
          previous.current = state;
          onChangeCb(state);
        }
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event3.useEvent)((next) => {
        if (preventUpdate)
          return;
        if (propWins) {
          const nextValue = typeof next === "function" ? next(previous.current) : next;
          onChangeCb(nextValue);
        } else {
          transitionFn(() => {
            setState(next);
          });
        }
      });
      return [value, setter];
    }
    __name(useControllableState2, "useControllableState");
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useControllableState(), module2.exports);
  }
});

// ../../node_modules/performant-array-to-tree/build/arrayToTree.min.js
var require_arrayToTree_min = __commonJS({
  "../../node_modules/performant-array-to-tree/build/arrayToTree.min.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      return (__assign2 = Object.assign || function(e) {
        for (var r, t = 1, n = arguments.length; t < n; t++)
          for (var o in r = arguments[t])
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e;
      }).apply(this, arguments);
    };
    var defaultConfig = (Object.defineProperty(exports, "__esModule", { value: true }), { id: "id", parentId: "parentId", dataField: "data", childrenField: "children", throwIfOrphans: false, rootParentIds: { "": !(exports.countNodes = exports.arrayToTree = void 0) }, nestedIds: true, assign: false });
    function arrayToTree(c, e) {
      void 0 === e && (e = {});
      for (var r, t = __assign2(__assign2({}, defaultConfig), e), n = [], o = {}, a = t.throwIfOrphans ? /* @__PURE__ */ new Set() : null, s = 0, h = c; s < h.length; s++) {
        var i = h[s], d = t.nestedIds ? getNestedProperty(i, t.id) : i[t.id], l = t.nestedIds ? getNestedProperty(i, t.parentId) : i[t.parentId];
        if (t.rootParentIds[d])
          throw new Error("The item array contains a node whose parentId both exists in another node and is in " + '`rootParentIds` (`itemId`: "'.concat(d, '", `rootParentIds`: ').concat(Object.keys(t.rootParentIds).map(function(e2) {
            return '"'.concat(e2, '"');
          }).join(", "), ")."));
        Object.prototype.hasOwnProperty.call(o, d) || (o[d] = ((r = {})[t.childrenField] = [], r)), a && a.delete(d), t.dataField ? o[d][t.dataField] = i : t.assign ? o[d] = Object.assign(i, ((r = {})[t.childrenField] = o[d][t.childrenField], r)) : o[d] = __assign2(__assign2({}, i), ((i = {})[t.childrenField] = o[d][t.childrenField], i));
        i = o[d];
        null == l || t.rootParentIds[l] ? n.push(i) : (Object.prototype.hasOwnProperty.call(o, l) || (o[l] = ((d = {})[t.childrenField] = [], d), a && a.add(l)), o[l][t.childrenField].push(i));
      }
      if (null != a && a.size)
        throw new Error("The items array contains orphans that point to the following parentIds: " + "[".concat(Array.from(a), "]. These parentIds do not exist in the items array. Hint: prevent orphans to result ") + "in an error by passing the following option: { throwIfOrphans: false }");
      if (t.throwIfOrphans && countNodes(n, t.childrenField) < Object.keys(o).length)
        throw new Error("The items array contains nodes with a circular parent/child relationship.");
      return n;
    }
    __name(arrayToTree, "arrayToTree");
    function countNodes(e, t) {
      return e.reduce(function(e2, r) {
        return e2 + 1 + (r[t] && countNodes(r[t], t));
      }, 0);
    }
    __name(countNodes, "countNodes");
    function getNestedProperty(e, r) {
      return r.split(".").reduce(function(e2, r2) {
        return e2 && e2[r2];
      }, e);
    }
    __name(getNestedProperty, "getNestedProperty");
    exports.arrayToTree = arrayToTree, exports.countNodes = countNodes;
  }
});

// ../../node_modules/zustand/esm/vanilla.mjs
var import_meta, createStoreImpl, createStore;
var init_vanilla = __esm({
  "../../node_modules/zustand/esm/vanilla.mjs"() {
    import_meta = {};
    createStoreImpl = /* @__PURE__ */ __name((createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = /* @__PURE__ */ __name((partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      }, "setState");
      const getState6 = /* @__PURE__ */ __name(() => state, "getState");
      const subscribe = /* @__PURE__ */ __name((listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      }, "subscribe");
      const destroy = /* @__PURE__ */ __name(() => {
        if ((import_meta.env && import_meta.env.MODE) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      }, "destroy");
      const api = { setState, getState: getState6, subscribe, destroy };
      state = createState(setState, getState6, api);
      return api;
    }, "createStoreImpl");
    createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
var require_use_sync_external_store_shim_production_min = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
    "use strict";
    var e = require("react");
    function h(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    __name(h, "h");
    var k = "function" === typeof Object.is ? Object.is : h;
    var l = e.useState;
    var m = e.useEffect;
    var n = e.useLayoutEffect;
    var p = e.useDebugValue;
    function q(a, b) {
      var d = b(), f = l({ inst: { value: d, getSnapshot: b } }), c = f[0].inst, g = f[1];
      n(function() {
        c.value = d;
        c.getSnapshot = b;
        r(c) && g({ inst: c });
      }, [a, d, b]);
      m(function() {
        r(c) && g({ inst: c });
        return a(function() {
          r(c) && g({ inst: c });
        });
      }, [a]);
      p(d);
      return d;
    }
    __name(q, "q");
    function r(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var d = b();
        return !k(a, d);
      } catch (f) {
        return true;
      }
    }
    __name(r, "r");
    function t(a, b) {
      return b();
    }
    __name(t, "t");
    var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
    exports.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React39 = require("react");
        var ReactSharedInternals = React39.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        __name(error, "error");
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        __name(printWarning, "printWarning");
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState29 = React39.useState, useEffect30 = React39.useEffect, useLayoutEffect6 = React39.useLayoutEffect, useDebugValue2 = React39.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React39.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState29({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect6(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect30(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = /* @__PURE__ */ __name(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, "handleStoreChange");
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStore, "useSyncExternalStore");
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        __name(useSyncExternalStore$1, "useSyncExternalStore$1");
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React39.useSyncExternalStore !== void 0 ? React39.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../../node_modules/use-sync-external-store/shim/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_use_sync_external_store_shim_production_min();
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js
var require_with_selector_production_min = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js"(exports) {
    "use strict";
    var h = require("react");
    var n = require_shim();
    function p(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    __name(p, "p");
    var q = "function" === typeof Object.is ? Object.is : p;
    var r = n.useSyncExternalStore;
    var t = h.useRef;
    var u = h.useEffect;
    var v = h.useMemo;
    var w = h.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
      var c = t(null);
      if (null === c.current) {
        var f = { hasValue: false, value: null };
        c.current = f;
      } else
        f = c.current;
      c = v(function() {
        function a2(a3) {
          if (!c2) {
            c2 = true;
            d2 = a3;
            a3 = l(a3);
            if (void 0 !== g && f.hasValue) {
              var b2 = f.value;
              if (g(b2, a3))
                return k = b2;
            }
            return k = a3;
          }
          b2 = k;
          if (q(d2, a3))
            return b2;
          var e2 = l(a3);
          if (void 0 !== g && g(b2, e2))
            return b2;
          d2 = a3;
          return k = e2;
        }
        __name(a2, "a");
        var c2 = false, d2, k, m = void 0 === e ? null : e;
        return [function() {
          return a2(b());
        }, null === m ? void 0 : function() {
          return a2(m());
        }];
      }, [b, e, l, g]);
      var d = r(a, c[0], c[1]);
      u(function() {
        f.hasValue = true;
        f.value = d;
      }, [d]);
      w(d);
      return d;
    };
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React39 = require("react");
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef28 = React39.useRef, useEffect30 = React39.useEffect, useMemo18 = React39.useMemo, useDebugValue2 = React39.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef28(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo18(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = /* @__PURE__ */ __name(function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            }, "memoizedSelector");
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = /* @__PURE__ */ __name(function() {
              return memoizedSelector(getSnapshot());
            }, "getSnapshotWithSelector");
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect30(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStoreWithSelector2, "useSyncExternalStoreWithSelector");
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../../node_modules/use-sync-external-store/shim/with-selector.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_with_selector_production_min();
    } else {
      module2.exports = require_with_selector_development();
    }
  }
});

// ../../node_modules/zustand/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  create: () => create,
  createStore: () => createStore,
  default: () => react,
  useStore: () => useStore
});
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react24.useDebugValue)(slice);
  return slice;
}
var import_react24, import_with_selector, useSyncExternalStoreWithSelector, createImpl, create, react;
var init_esm = __esm({
  "../../node_modules/zustand/esm/index.js"() {
    init_vanilla();
    init_vanilla();
    import_react24 = require("react");
    import_with_selector = __toESM(require_with_selector());
    ({ useSyncExternalStoreWithSelector } = import_with_selector.default);
    __name(useStore, "useStore");
    createImpl = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = /* @__PURE__ */ __name((selector, equalityFn) => useStore(api, selector, equalityFn), "useBoundStore");
      Object.assign(useBoundStore, api);
      return useBoundStore;
    }, "createImpl");
    create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");
    react = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
        );
      }
      return create(createState);
    }, "react");
  }
});

// ../../node_modules/reforest/dist/index.js
var require_dist4 = __commonJS({
  "../../node_modules/reforest/dist/index.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      cleanAndSortTree: () => cleanAndSortTree,
      compareIndexPaths: () => compareIndexPaths,
      flattenChildren: () => flattenChildren,
      mapToChildren: () => mapToChildren,
      parseIndexPath: () => parseIndexPath,
      sortMapByIndexPath: () => sortMapByIndexPath,
      useIndex: () => useIndex,
      useIndexedChildren: () => useIndexedChildren,
      useRovingIndex: () => useRovingIndex,
      useTree: () => useTree,
      useTreeNode: () => useTreeNode,
      useTreeState: () => useTreeState
    });
    module2.exports = __toCommonJS2(src_exports);
    var React39 = __toESM2(require("react"));
    var React40 = __toESM2(require("react"));
    var PrerenderContext = React40.createContext(false);
    PrerenderContext.displayName = "PrerenderContext";
    var MaxIndexContext = React40.createContext([]);
    MaxIndexContext.displayName = "MaxIndexContext";
    var IndexContext = React40.createContext(null);
    IndexContext.displayName = "IndexContext";
    var TreeStateContext = React40.createContext(null);
    TreeStateContext.displayName = "TreeStateContext";
    var React210 = __toESM2(require("react"));
    var import_performant_array_to_tree = require_arrayToTree_min();
    var isServer3 = typeof window === "undefined";
    var useIsomorphicLayoutEffect14 = isServer3 ? React210.useEffect : React210.useLayoutEffect;
    function parseIndexPath(indexPathString) {
      return indexPathString.split(".").map((index3) => parseInt(index3, 10));
    }
    __name(parseIndexPath, "parseIndexPath");
    function compareIndexPaths(a = "", b = "") {
      var _a, _b;
      let aArray = a.split(".").map(Number);
      let bArray = b.split(".").map(Number);
      if (aArray.includes(NaN) || bArray.includes(NaN)) {
        throw new Error("Version contains parts that are not numbers");
      }
      const maxLength = Math.max(a.length, b.length);
      for (let index3 = 0; index3 < maxLength; index3++) {
        const difference = ((_a = aArray[index3]) != null ? _a : 0) - ((_b = bArray[index3]) != null ? _b : 0);
        if (difference === 0) {
          continue;
        }
        return difference > 0 ? 1 : -1;
      }
      return 0;
    }
    __name(compareIndexPaths, "compareIndexPaths");
    function cleanAndSortTree(tree) {
      var _a;
      if (((_a = tree.children) == null ? void 0 : _a.length) > 0) {
        tree.children.sort((a, b) => compareIndexPaths(a.indexPathString, b.indexPathString));
        return {
          ...tree.data,
          children: tree.children.map(cleanAndSortTree)
        };
      }
      return tree.data;
    }
    __name(cleanAndSortTree, "cleanAndSortTree");
    function mapToChildren(dataMap) {
      const parsedValues = Array.from(dataMap.entries()).map(([indexPathString, data]) => {
        const parentIndexPathString = parseIndexPath(indexPathString).slice(0, -1).join(".");
        return {
          data,
          parentId: parentIndexPathString,
          id: indexPathString
        };
      });
      const tree = (0, import_performant_array_to_tree.arrayToTree)(parsedValues, { dataField: null });
      const cleanedTree = cleanAndSortTree({ children: tree });
      return cleanedTree ? cleanedTree.children : [];
    }
    __name(mapToChildren, "mapToChildren");
    function sortMapByIndexPath(treeMap) {
      const sortedEntries = Array.from(treeMap.entries()).sort((a, b) => compareIndexPaths(a[0], b[0]));
      return new Map(sortedEntries);
    }
    __name(sortMapByIndexPath, "sortMapByIndexPath");
    function flattenChildren(children) {
      const flatChildren = children.flatMap(
        (child) => child.children ? flattenChildren(child.children) : [child]
      );
      return flatChildren;
    }
    __name(flattenChildren, "flattenChildren");
    function useIndex() {
      const maxIndexPath = React39.useContext(MaxIndexContext);
      const indexPathString = React39.useContext(IndexContext);
      return React39.useMemo(() => {
        if (indexPathString === null) {
          return null;
        }
        const indexPath = parseIndexPath(indexPathString);
        const maxIndex = maxIndexPath[maxIndexPath.length - 1];
        const index3 = indexPath[indexPath.length - 1];
        return {
          maxIndex,
          maxIndexPath,
          index: index3,
          indexPath,
          indexPathString,
          isFirst: index3 === 0,
          isLast: index3 === maxIndex,
          isEven: index3 % 2 === 0,
          isOdd: Math.abs(index3 % 2) === 1
        };
      }, [maxIndexPath, indexPathString]);
    }
    __name(useIndex, "useIndex");
    function useIndexedChildren(children) {
      const parentMaxIndexPath = React39.useContext(MaxIndexContext);
      const indexPathString = React39.useContext(IndexContext);
      const childrenCount = React39.Children.count(children);
      const maxIndexPath = React39.useMemo(
        () => parentMaxIndexPath.concat(childrenCount - 1),
        [childrenCount]
      );
      return /* @__PURE__ */ React39.createElement(MaxIndexContext.Provider, { value: maxIndexPath }, React39.Children.map(
        children,
        (child, index3) => React39.isValidElement(child) ? /* @__PURE__ */ React39.createElement(
          IndexContext.Provider,
          {
            key: child.key,
            value: indexPathString ? `${indexPathString}.${index3.toString()}` : index3.toString()
          },
          child
        ) : child
      ));
    }
    __name(useIndexedChildren, "useIndexedChildren");
    var React42 = __toESM2(require("react"));
    function useRovingIndex({
      contain = true,
      defaultIndex = 0,
      maxIndex = Infinity,
      wrap = false
    }) {
      const [activeIndex, setLocalActiveIndex] = React42.useState(defaultIndex);
      const getNextIndex = React42.useCallback(
        (nextIndex) => {
          if (wrap) {
            return (nextIndex % maxIndex + maxIndex) % maxIndex;
          }
          if (contain) {
            return nextIndex > maxIndex ? maxIndex : nextIndex < 0 ? 0 : nextIndex;
          }
          return nextIndex;
        },
        [maxIndex, wrap]
      );
      const moveActiveIndex = React42.useCallback(
        (amountToMove) => {
          setLocalActiveIndex((currentIndex) => getNextIndex(currentIndex + amountToMove));
        },
        [getNextIndex]
      );
      const setActiveIndex = React42.useCallback(
        (nextIndex) => {
          setLocalActiveIndex(getNextIndex(nextIndex));
        },
        [getNextIndex]
      );
      const moveBackward = React42.useCallback(() => moveActiveIndex(-1), [moveActiveIndex]);
      const moveForward = React42.useCallback(() => moveActiveIndex(1), [moveActiveIndex]);
      return {
        activeIndex,
        moveActiveIndex,
        setActiveIndex,
        moveBackward,
        moveForward,
        moveBackwardDisabled: activeIndex <= 0,
        moveForwardDisabled: activeIndex >= maxIndex
      };
    }
    __name(useRovingIndex, "useRovingIndex");
    var React52 = __toESM2(require("react"));
    var import_zustand = (init_esm(), __toCommonJS(esm_exports));
    function useTreeState(selector) {
      const treeStateContext = React52.useContext(TreeStateContext);
      const [treeState] = React52.useState(
        () => treeStateContext || (0, import_zustand.create)((set, get) => ({
          treeMap: /* @__PURE__ */ new Map(),
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: true,
          setTreeData: (id, data) => {
            const { treeMap } = get();
            treeMap.set(id, data);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          },
          deleteTreeData: (id) => {
            const { treeMap } = get();
            treeMap.delete(id);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          }
        }))
      );
      return selector ? treeState(selector) : treeState;
    }
    __name(useTreeState, "useTreeState");
    function PrerenderTree({ children }) {
      const treeState = useTreeState();
      const shouldPrerender = treeState((state) => state.shouldPrerender);
      useIsomorphicLayoutEffect14(() => {
        treeState.setState({
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: false
        });
      }, []);
      return shouldPrerender ? /* @__PURE__ */ React52.createElement(PrerenderContext.Provider, { value: true }, children) : null;
    }
    __name(PrerenderTree, "PrerenderTree");
    function useTree(children, treeState) {
      const treeStateContext = React52.useContext(TreeStateContext);
      const treeStateLocal = useTreeState();
      const parsedTreeState = treeStateContext || treeState || treeStateLocal;
      const isPrerender = React52.useContext(PrerenderContext);
      const isRoot = treeStateContext === null;
      const indexedChildren = useIndexedChildren(children);
      const childrenToRender = isRoot ? /* @__PURE__ */ React52.createElement(TreeStateContext.Provider, { value: parsedTreeState }, /* @__PURE__ */ React52.createElement(PrerenderTree, null, indexedChildren), indexedChildren) : indexedChildren;
      return {
        children: childrenToRender,
        useStore: parsedTreeState,
        isPrerender,
        isRoot
      };
    }
    __name(useTree, "useTree");
    function useTreeNode(getData, dependencies = []) {
      const isPrerender = React52.useContext(PrerenderContext);
      const treeStateContext = React52.useContext(TreeStateContext);
      if (treeStateContext === null) {
        throw new Error("useTreeNode must be used in a descendant component of useTree.");
      }
      const { deleteTreeData, prerenderedTreeIds, setTreeData, treeMap } = treeStateContext.getState();
      const { indexPathString } = useIndex();
      const generatedId = React52.useId().slice(1, -1);
      const treeId = prerenderedTreeIds.get(indexPathString) || generatedId;
      const treeData = React52.useMemo(
        () => Object.assign({ treeId }, getData()),
        dependencies.concat(treeId)
      );
      if (isPrerender) {
        treeMap.set(indexPathString, treeData);
        prerenderedTreeIds.set(indexPathString, treeId);
      } else {
        React52.useEffect(() => {
          setTreeData(indexPathString, treeData);
          return () => {
            deleteTreeData(indexPathString);
          };
        }, [indexPathString, treeData]);
      }
      return {
        id: treeId,
        data: treeData,
        indexPathString,
        isPrerender
      };
    }
    __name(useTreeNode, "useTreeNode");
  }
});

// ../../node_modules/@tamagui/group/dist/cjs/Group.js
var require_Group = __commonJS({
  "../../node_modules/@tamagui/group/dist/cjs/Group.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Group_exports = {};
    __export2(Group_exports, {
      Group: () => Group3,
      GroupFrame: () => GroupFrame,
      XGroup: () => XGroup,
      YGroup: () => YGroup,
      useGroupItem: () => useGroupItem3
    });
    module2.exports = __toCommonJS2(Group_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var import_core54 = require("@tamagui/core-node");
    var import_create_context20 = require_cjs17();
    var import_stacks27 = require_cjs18();
    var import_use_controllable_state15 = require_cjs19();
    var import_react44 = __toESM2(require("react"));
    var import_react_native13 = require("react-native-web-lite");
    var import_reforest = require_dist4();
    var GROUP_NAME3 = "Group";
    var [createGroupContext, createGroupScope] = (0, import_create_context20.createContextScope)(GROUP_NAME3);
    var [GroupProvider, useGroupContext] = createGroupContext(GROUP_NAME3);
    var GroupFrame = (0, import_core54.styled)(import_stacks27.ThemeableStack, {
      name: "GroupFrame",
      variants: {
        unstyled: {
          false: {
            size: "$true",
            y: 0,
            backgroundColor: "$background"
          }
        },
        size: (val, { tokens: tokens2 }) => {
          const borderRadius = tokens2.radius[val] ?? val ?? tokens2.radius["$true"];
          return {
            borderRadius
          };
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    function createGroup(verticalDefault) {
      return (0, import_core54.withStaticProperties)(
        (0, import_react44.forwardRef)((props, ref) => {
          const activeProps = (0, import_core54.useProps)(props);
          const {
            __scopeGroup,
            children: childrenProp,
            space: space2,
            size: size3 = "$true",
            spaceDirection,
            separator,
            scrollable,
            axis = verticalDefault ? "vertical" : "horizontal",
            orientation = axis,
            disabled: disabledProp,
            disablePassBorderRadius: disablePassBorderRadiusProp,
            borderRadius,
            forceUseItem,
            ...restProps
          } = (0, import_core54.getExpandedShorthands)(activeProps);
          const vertical = orientation === "vertical";
          const [itemChildrenCount, setItemChildrenCount] = (0, import_use_controllable_state15.useControllableState)({
            defaultProp: forceUseItem ? 1 : 0
          });
          const isUsingItems = itemChildrenCount > 0;
          const radius2 = borderRadius ?? (size3 ? (0, import_core54.getVariableValue)((0, import_core54.getTokens)().radius[size3]) - 1 : void 0);
          const hasRadius = radius2 !== void 0;
          const disablePassBorderRadius = disablePassBorderRadiusProp ?? !hasRadius;
          const childrenArray = import_react44.Children.toArray(childrenProp);
          const children = isUsingItems ? childrenProp : childrenArray.map((child, i) => {
            if (!(0, import_react44.isValidElement)(child)) {
              return child;
            }
            const disabled = child.props.disabled ?? disabledProp;
            const isFirst = i === 0;
            const isLast = i === childrenArray.length - 1;
            const radiusStyles = disablePassBorderRadius === true ? null : getBorderRadius({
              isFirst,
              isLast,
              radius: radius2,
              vertical,
              disable: disablePassBorderRadius
            });
            const props2 = {
              disabled,
              ...(0, import_core54.isTamaguiElement)(child) ? radiusStyles : { style: radiusStyles }
            };
            return cloneElementWithPropOrder(child, props2);
          });
          const indexedChildren = (0, import_reforest.useIndexedChildren)(
            (0, import_core54.spacedChildren)({
              direction: spaceDirection,
              separator,
              space: space2,
              children
            })
          );
          const onItemMount = import_react44.default.useCallback(
            () => setItemChildrenCount((prev) => prev + 1),
            []
          );
          const onItemUnmount = import_react44.default.useCallback(
            () => setItemChildrenCount((prev) => prev - 1),
            []
          );
          return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
            GroupProvider,
            {
              disablePassBorderRadius,
              vertical: orientation === "vertical",
              radius: radius2,
              disabled: disabledProp,
              onItemMount,
              onItemUnmount,
              scope: __scopeGroup,
              children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                GroupFrame,
                {
                  ref,
                  size: size3,
                  flexDirection: orientation === "horizontal" ? "row" : "column",
                  borderRadius,
                  ...restProps,
                  children: wrapScroll({ ...activeProps, orientation }, indexedChildren)
                }
              )
            }
          );
        }),
        {
          Item: GroupItem
        }
      );
    }
    __name(createGroup, "createGroup");
    var GroupItem = /* @__PURE__ */ __name((props) => {
      var _a;
      const { __scopeGroup, children } = props;
      const groupItemProps = useGroupItem3(
        { disabled: (0, import_react44.isValidElement)(children) ? children.props.disabled : void 0 },
        __scopeGroup
      );
      if (!(0, import_react44.isValidElement)(children)) {
        return children;
      }
      if ((0, import_core54.isTamaguiElement)(children)) {
        return import_react44.default.cloneElement(children, groupItemProps);
      }
      return import_react44.default.cloneElement(children, {
        style: {
          ...(_a = children.props) == null ? void 0 : _a["style"],
          ...groupItemProps
        }
      });
    }, "GroupItem");
    var useGroupItem3 = /* @__PURE__ */ __name((childrenProps, __scopeGroup) => {
      const treeIndex = (0, import_reforest.useIndex)();
      const context = useGroupContext("GroupItem", __scopeGroup);
      import_react44.default.useEffect(() => {
        context.onItemMount();
        return () => {
          context.onItemUnmount();
        };
      }, []);
      if (!treeIndex) {
        throw Error("<Group.Item/> should only be used within a <Group/>");
      }
      const isFirst = treeIndex.index === 0;
      const isLast = treeIndex.index === treeIndex.maxIndex;
      const disabled = childrenProps.disabled ?? context.disabled;
      let propsToPass = {
        disabled
      };
      if (context.disablePassBorderRadius !== true) {
        const borderRadius = getBorderRadius({
          radius: context.radius,
          isFirst,
          isLast,
          vertical: context.vertical,
          disable: context.disablePassBorderRadius
        });
        return { ...propsToPass, ...borderRadius };
      }
      return propsToPass;
    }, "useGroupItem");
    var Group3 = createGroup(true);
    var YGroup = Group3;
    var XGroup = createGroup(false);
    var wrapScroll = /* @__PURE__ */ __name(({ scrollable, orientation, showScrollIndicator = false }, children) => {
      if (scrollable)
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          import_react_native13.ScrollView,
          {
            ...orientation === "vertical" && {
              showsVerticalScrollIndicator: showScrollIndicator
            },
            ...orientation === "horizontal" && {
              horizontal: true,
              showsHorizontalScrollIndicator: showScrollIndicator
            },
            children
          }
        );
      return children;
    }, "wrapScroll");
    var getBorderRadius = /* @__PURE__ */ __name(({
      isFirst,
      isLast,
      radius: radius2,
      vertical,
      disable
    }) => {
      return {
        borderTopLeftRadius: isFirst && disable !== "top" && disable !== "start" ? radius2 : 0,
        borderTopRightRadius: disable !== "top" && disable !== "end" && (vertical && isFirst || !vertical && isLast) ? radius2 : 0,
        borderBottomLeftRadius: disable !== "bottom" && disable !== "start" && (vertical && isLast || !vertical && isFirst) ? radius2 : 0,
        borderBottomRightRadius: isLast && disable !== "bottom" && disable !== "end" ? radius2 : 0
      };
    }, "getBorderRadius");
    var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
      const next = (0, import_core54.mergeProps)(child.props, props, false, (0, import_core54.getConfig)().shorthands)[0];
      return import_react44.default.cloneElement({ ...child, props: null }, next);
    }, "cloneElementWithPropOrder");
  }
});

// ../../node_modules/@tamagui/group/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "../../node_modules/@tamagui/group/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Group(), module2.exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export2(SizableText_exports, {
      SizableText: () => SizableText2
    });
    module2.exports = __toCommonJS2(SizableText_exports);
    var import_get_font_sized4 = require_cjs9();
    var import_web16 = require("@tamagui/core-node");
    var SizableText2 = (0, import_web16.styled)(import_web16.Text, {
      name: "SizableText",
      fontFamily: "$body",
      variants: {
        size: import_get_font_sized4.getFontSized
      },
      defaultVariants: {
        size: "$true"
      }
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export2(Paragraph_exports, {
      Paragraph: () => Paragraph2
    });
    module2.exports = __toCommonJS2(Paragraph_exports);
    var import_web16 = require("@tamagui/core-node");
    var import_SizableText2 = require_SizableText();
    var Paragraph2 = (0, import_web16.styled)(import_SizableText2.SizableText, {
      name: "Paragraph",
      tag: "p",
      userSelect: "auto",
      color: "$color",
      size: "$true"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export2(Headings_exports, {
      H1: () => H12,
      H2: () => H22,
      H3: () => H32,
      H4: () => H42,
      H5: () => H52,
      H6: () => H62,
      Heading: () => Heading2
    });
    module2.exports = __toCommonJS2(Headings_exports);
    var import_web16 = require("@tamagui/core-node");
    var import_Paragraph2 = require_Paragraph();
    var Heading2 = (0, import_web16.styled)(import_Paragraph2.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H12 = (0, import_web16.styled)(Heading2, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H22 = (0, import_web16.styled)(Heading2, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H32 = (0, import_web16.styled)(Heading2, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H42 = (0, import_web16.styled)(Heading2, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H52 = (0, import_web16.styled)(Heading2, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H62 = (0, import_web16.styled)(Heading2, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export2(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText2
    });
    module2.exports = __toCommonJS2(wrapChildrenInText_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var import_react44 = __toESM2(require("react"));
    function wrapChildrenInText2(TextComponent, propsIn, extraProps) {
      const {
        children,
        textProps,
        size: size3,
        noTextWrap,
        color: color2,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign,
        fontStyle
      } = propsIn;
      if (noTextWrap || !children) {
        return [children];
      }
      const allChildren = import_react44.default.Children.toArray(children);
      const nextChildren = [];
      let lastIsString = false;
      const props = {
        ...extraProps
      };
      if (color2)
        props.color = color2;
      if (fontFamily)
        props.fontFamily = fontFamily;
      if (fontSize)
        props.fontSize = fontSize;
      if (fontWeight)
        props.fontWeight = fontWeight;
      if (letterSpacing)
        props.letterSpacing = letterSpacing;
      if (textAlign)
        props.textAlign = textAlign;
      if (size3)
        props.size = size3;
      if (fontStyle)
        props.fontStyle = fontStyle;
      function concatStringChildren() {
        if (!lastIsString)
          return;
        const index3 = nextChildren.length - 1;
        const childrenStrings = nextChildren[index3];
        nextChildren[index3] = /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(TextComponent, { ...props, ...textProps, children: childrenStrings }, index3);
      }
      __name(concatStringChildren, "concatStringChildren");
      for (const child of allChildren) {
        const last = nextChildren[nextChildren.length - 1];
        const isString = typeof child === "string";
        if (isString) {
          if (lastIsString) {
            last.push(child);
          } else {
            nextChildren.push([child]);
          }
        } else {
          concatStringChildren();
          nextChildren.push(child);
        }
        lastIsString = isString;
      }
      concatStringChildren();
      return nextChildren;
    }
    __name(wrapChildrenInText2, "wrapChildrenInText");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/types.js
var require_types2 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_SizableText(), module2.exports);
    __reExport2(src_exports, require_Paragraph(), module2.exports);
    __reExport2(src_exports, require_Headings(), module2.exports);
    __reExport2(src_exports, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports, require_types2(), module2.exports);
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export2(ListItem_exports, {
      ListItem: () => ListItem22,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      listItemVariants: () => listItemVariants,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS2(ListItem_exports);
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var import_core54 = require("@tamagui/core-node");
    var import_font_size4 = require_cjs11();
    var import_helpers_tamagui5 = require_cjs15();
    var import_stacks27 = require_cjs18();
    var import_text7 = require_cjs21();
    var NAME3 = "ListItem";
    var listItemVariants = {
      unstyled: {
        false: {
          size: "$true",
          alignItems: "center",
          flexWrap: "nowrap",
          width: "100%",
          borderColor: "$borderColor",
          maxWidth: "100%",
          overflow: "hidden",
          flexDirection: "row",
          backgroundColor: "$background"
        }
      },
      size: {
        "...size": (val, { tokens: tokens2 }) => {
          return {
            minHeight: tokens2.size[val],
            paddingHorizontal: tokens2.space[val],
            paddingVertical: (0, import_helpers_tamagui5.getSpace)(val, -2)
          };
        }
      },
      active: {
        true: {
          hoverStyle: {
            backgroundColor: "$background"
          }
        }
      },
      disabled: {
        true: {
          opacity: 0.5,
          // TODO breaking types
          pointerEvents: "none"
        }
      }
    };
    var ListItemFrame = (0, import_core54.styled)(import_stacks27.ThemeableStack, {
      name: NAME3,
      tag: "li",
      variants: listItemVariants,
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemText = (0, import_core54.styled)(import_text7.SizableText, {
      name: "ListItemText",
      variants: {
        unstyled: {
          false: {
            color: "$color",
            flexGrow: 1,
            flexShrink: 1,
            ellipse: true,
            cursor: "default"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemSubtitle = (0, import_core54.styled)(ListItemText, {
      name: "ListItemSubtitle",
      variants: {
        unstyled: {
          false: {
            opacity: 0.6,
            maxWidth: "100%",
            size: "$3",
            color: "$color"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemTitle = (0, import_core54.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((props, {
      Text: Text5 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space: space2,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        subTitle,
        // text props
        color: color2,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        title,
        ...rest
      } = props;
      const mediaActiveProps = (0, import_core54.useProps)(props);
      const size3 = mediaActiveProps.size || "$true";
      const subtitleSize = `$${+String(size3).replace("$", "") - 1}`;
      const iconSize = (0, import_font_size4.getFontSize)(size3) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui5.useGetThemedIcon)({ size: iconSize, color: color2 });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core54.getVariableValue)((0, import_core54.getTokens)().space[mediaActiveProps.space] ?? iconSize) * scaleSpace;
      const contents = (0, import_text7.wrapChildrenInText)(Text5, mediaActiveProps);
      return {
        props: {
          fontFamily,
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
            themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
              themedIcon,
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_core54.Spacer, { size: spaceSize })
            ] }) : null,
            title || subTitle ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_stacks27.YStack, { flex: 1, children: [
              noTextWrap === "all" ? title : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Title, { size: size3, children: title }),
              subTitle ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: typeof subTitle === "string" && noTextWrap !== "all" ? (
                // TODO can use theme but we need to standardize to alt themes
                // or standardize on subtle colors in themes
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Subtitle, { size: subtitleSize, children: subTitle })
              ) : subTitle }) : null,
              contents
            ] }) : contents,
            themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_core54.Spacer, { size: spaceSize }),
              themedIconAfter
            ] }) : null
          ] })
        }
      };
    }, "useListItem");
    var ListItemComponent = ListItemFrame.styleable(/* @__PURE__ */ __name(function ListItem3(props, ref) {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(ListItemFrame, { ref, justifyContent: "space-between", ...listItemProps });
    }, "ListItem"));
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        // text props go here (can't really optimize them, but we never fully extract listItem anyway)
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var ListItem22 = (0, import_core54.withStaticProperties)(ListItemComponent, {
      Text: ListItemText,
      Subtitle: ListItemSubtitle
    });
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ListItem(), module2.exports);
  }
});

// ../../node_modules/tabbable/dist/index.js
var require_dist5 = __commonJS({
  "../../node_modules/tabbable/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var isInert = /* @__PURE__ */ __name(function isInert2(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && isInert2(node.parentNode);
      return result;
    }, "isInert");
    var isContentEditable = /* @__PURE__ */ __name(function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    }, "isContentEditable");
    var getCandidates = /* @__PURE__ */ __name(function getCandidates2(el, includeContainer, filter) {
      if (isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    }, "getCandidates");
    var getCandidatesIteratively = /* @__PURE__ */ __name(function getCandidatesIteratively2(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = getCandidatesIteratively2(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    }, "getCandidatesIteratively");
    var getTabindex = /* @__PURE__ */ __name(function getTabindex2(node, isScope) {
      if (node.tabIndex < 0) {
        if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
          return 0;
        }
      }
      return node.tabIndex;
    }, "getTabindex");
    var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    }, "sortOrderedTabbables");
    var isInput = /* @__PURE__ */ __name(function isInput2(node) {
      return node.tagName === "INPUT";
    }, "isInput");
    var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    }, "isHiddenInput");
    var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
      var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r;
    }, "isDetailsWithSummary");
    var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    }, "getCheckedRadio");
    var isTabbableRadio = /* @__PURE__ */ __name(function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = /* @__PURE__ */ __name(function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      }, "queryRadios");
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    }, "isTabbableRadio");
    var isRadio = /* @__PURE__ */ __name(function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    }, "isRadio");
    var isNonTabbableRadio = /* @__PURE__ */ __name(function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }, "isNonTabbableRadio");
    var isNodeAttached = /* @__PURE__ */ __name(function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    }, "isNodeAttached");
    var isZeroArea = /* @__PURE__ */ __name(function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }, "isZeroArea");
    var isHidden = /* @__PURE__ */ __name(function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (getComputedStyle(node).visibility === "hidden") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    }, "isHidden");
    var isDisabledFromFieldset = /* @__PURE__ */ __name(function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    }, "isDisabledFromFieldset");
    var isNodeMatchingSelectorFocusable = /* @__PURE__ */ __name(function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
      //  because we're limited in the type of selectors we can use in JSDom (see related
      //  note related to `candidateSelectors`)
      isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorFocusable");
    var isNodeMatchingSelectorTabbable = /* @__PURE__ */ __name(function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorTabbable");
    var isValidShadowRootTabbable = /* @__PURE__ */ __name(function isValidShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    }, "isValidShadowRootTabbable");
    var sortByOrder = /* @__PURE__ */ __name(function sortByOrder2(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    }, "sortByOrder");
    var tabbable2 = /* @__PURE__ */ __name(function tabbable3(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isValidShadowRootTabbable
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return sortByOrder(candidates);
    }, "tabbable");
    var focusable = /* @__PURE__ */ __name(function focusable2(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    }, "focusable");
    var isTabbable = /* @__PURE__ */ __name(function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    }, "isTabbable");
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    var isFocusable = /* @__PURE__ */ __name(function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    }, "isFocusable");
    exports.focusable = focusable;
    exports.isFocusable = isFocusable;
    exports.isTabbable = isTabbable;
    exports.tabbable = tabbable2;
  }
});

// ../../node_modules/@tamagui/radio-group/node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist6 = __commonJS({
  "../../node_modules/@tamagui/radio-group/node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/switch/node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist7 = __commonJS({
  "../../node_modules/@tamagui/switch/node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/_mutateTheme.js
var require_mutateTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/_mutateTheme.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mutateTheme_exports = {};
    __export2(mutateTheme_exports, {
      _mutateTheme: () => _mutateTheme
    });
    module2.exports = __toCommonJS2(mutateTheme_exports);
    var import_constants13 = require_cjs12();
    var import_web16 = require("@tamagui/core-node");
    function _mutateTheme(props) {
      var _a;
      if (import_constants13.isServer) {
        if (process.env.NODE_ENV === "development") {
          console.warn("Theme mutation is not supported on server side");
        }
        return;
      }
      const config2 = (0, import_web16.getConfig)();
      const { name: themeName, theme: themeIn, insertCSS, mutationType } = props;
      if (process.env.NODE_ENV === "development") {
        if (!config2) {
          throw new Error("No config");
        }
        const theme2 = config2.themes[props.name];
        if (mutationType && !theme2) {
          throw new Error(
            `${mutationType === "replace" ? "Replace" : "Update"} theme failed! Theme ${props.name} does not exist`
          );
        }
        if (!props.mutationType && theme2) {
          return { theme: theme2 };
        }
      }
      const theme = {
        ...mutationType === "update" ? config2.themes[themeName] ?? {} : {},
        ...themeIn
      };
      for (const key in theme) {
        (0, import_web16.ensureThemeVariable)(theme, key);
      }
      const themeProxied = (0, import_web16.proxyThemeToParents)(themeName, theme, config2.themes);
      config2.themes[themeName] = themeProxied;
      let cssRules = [];
      (0, import_web16.updateConfig)("themes", { ...config2.themes, [themeName]: themeProxied });
      if (process.env.TAMAGUI_TARGET === "web") {
        if (insertCSS) {
          cssRules = (0, import_web16.getThemeCSSRules)({
            // @ts-ignore this works but should be fixed types
            config: config2,
            themeName,
            names: [themeName],
            theme
          });
          const id = `t_theme_style_${themeName}`;
          const existing = document.querySelector(`#${id}`);
          const style = document.createElement("style");
          style.id = id;
          style.appendChild(document.createTextNode(cssRules.join("\n")));
          document.head.appendChild(style);
          if (existing) {
            (_a = existing.parentElement) == null ? void 0 : _a.removeChild(existing);
          }
        }
      }
      import_web16.activeThemeManagers.forEach((manager) => {
        if (manager.state.name === props.name) {
          manager.updateState(
            {
              name: props.name,
              forceTheme: themeProxied
            },
            true
          );
        }
      });
      return {
        theme: themeProxied,
        cssRules
      };
    }
    __name(_mutateTheme, "_mutateTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/addTheme.js
var require_addTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/addTheme.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var addTheme_exports = {};
    __export2(addTheme_exports, {
      addTheme: () => addTheme
    });
    module2.exports = __toCommonJS2(addTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function addTheme(props) {
      return (0, import_mutateTheme._mutateTheme)({ ...props });
    }
    __name(addTheme, "addTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/updateTheme.js
var require_updateTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/updateTheme.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var updateTheme_exports = {};
    __export2(updateTheme_exports, {
      updateTheme: () => updateTheme
    });
    module2.exports = __toCommonJS2(updateTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function updateTheme({
      name,
      theme
    }) {
      return (0, import_mutateTheme._mutateTheme)({ name, theme, insertCSS: true, mutationType: "update" });
    }
    __name(updateTheme, "updateTheme");
    globalThis["updateTheme"] = updateTheme;
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/replaceTheme.js
var require_replaceTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/replaceTheme.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var replaceTheme_exports = {};
    __export2(replaceTheme_exports, {
      replaceTheme: () => replaceTheme
    });
    module2.exports = __toCommonJS2(replaceTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function replaceTheme({
      name,
      theme
    }) {
      const next = (0, import_mutateTheme._mutateTheme)({ name, theme, insertCSS: true, mutationType: "replace" });
      return next;
    }
    __name(replaceTheme, "replaceTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_addTheme(), module2.exports);
    __reExport2(src_exports, require_updateTheme(), module2.exports);
    __reExport2(src_exports, require_replaceTheme(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js
var require_polyfill = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js"() {
    "use strict";
    if (typeof requestAnimationFrame === "undefined") {
      globalThis["requestAnimationFrame"] = setImmediate;
    }
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext2
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react44 = require("react");
    var PresenceContext2 = (0, import_react44.createContext)(null);
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent2,
      useIsPresent: () => useIsPresent2,
      usePresence: () => usePresence2
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react44 = require("react");
    var import_PresenceContext2 = require_PresenceContext();
    function usePresence2() {
      const context = (0, import_react44.useContext)(import_PresenceContext2.PresenceContext);
      if (!context) {
        return [true, null, context];
      }
      const { isPresent: isPresent22, onExitComplete, register } = context;
      const id = (0, import_react44.useId)() || "";
      (0, import_react44.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent22 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
    }
    __name(usePresence2, "usePresence");
    function useIsPresent2() {
      return isPresent2((0, import_react44.useContext)(import_PresenceContext2.PresenceContext));
    }
    __name(useIsPresent2, "useIsPresent");
    function isPresent2(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent2, "isPresent");
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_PresenceContext(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createAnimations_exports = {};
    __export2(createAnimations_exports, {
      AnimatedText: () => AnimatedText,
      AnimatedView: () => AnimatedView,
      createAnimations: () => createAnimations2,
      useAnimatedNumber: () => useAnimatedNumber,
      useAnimatedNumberReaction: () => useAnimatedNumberReaction,
      useAnimatedNumberStyle: () => useAnimatedNumberStyle
    });
    module2.exports = __toCommonJS2(createAnimations_exports);
    var import_use_presence2 = require_cjs24();
    var import_web16 = require("@tamagui/core-node");
    var import_react44 = require("react");
    var import_react_native13 = require("react-native-web-lite");
    var animatedStyleKey = {
      transform: true,
      opacity: true
    };
    var colorStyleKey = {
      backgroundColor: true,
      color: true,
      borderColor: true,
      borderLeftColor: true,
      borderRightColor: true,
      borderTopColor: true,
      borderBottomColor: true
    };
    var costlyToAnimateStyleKey = {
      borderRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderWidth: true,
      borderLeftWidth: true,
      borderRightWidth: true,
      borderTopWidth: true,
      borderBottomWidth: true,
      ...colorStyleKey
      // TODO for other keys like height or width, it's better to not add them here till layout animations are ready
    };
    var AnimatedView = import_react_native13.Animated.View;
    var AnimatedText = import_react_native13.Animated.Text;
    function useAnimatedNumber(initial) {
      const state = (0, import_web16.useSafeRef)(
        null
      );
      if (!state.current) {
        state.current = {
          composite: null,
          val: new import_react_native13.Animated.Value(initial),
          strategy: { type: "spring" }
        };
      }
      return {
        getInstance() {
          return state.current.val;
        },
        getValue() {
          return state.current.val["_value"];
        },
        stop() {
          var _a;
          (_a = state.current.composite) == null ? void 0 : _a.stop();
          state.current.composite = null;
        },
        setValue(next, { type, ...config2 } = { type: "spring" }) {
          var _a, _b;
          const val = state.current.val;
          if (type === "direct") {
            val.setValue(next);
          } else if (type === "spring") {
            (_a = state.current.composite) == null ? void 0 : _a.stop();
            const composite = import_react_native13.Animated.spring(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_web16.isWeb
            });
            composite.start();
            state.current.composite = composite;
          } else {
            (_b = state.current.composite) == null ? void 0 : _b.stop();
            const composite = import_react_native13.Animated.timing(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_web16.isWeb
            });
            composite.start();
            state.current.composite = composite;
          }
        }
      };
    }
    __name(useAnimatedNumber, "useAnimatedNumber");
    function useAnimatedNumberReaction({
      value
    }, onValue) {
      const onChange = (0, import_web16.useEvent)((current) => {
        onValue(current.value);
      });
      (0, import_react44.useEffect)(() => {
        const id = value.getInstance().addListener(onChange);
        return () => {
          value.getInstance().removeListener(id);
        };
      }, [value, onChange]);
    }
    __name(useAnimatedNumberReaction, "useAnimatedNumberReaction");
    function useAnimatedNumberStyle(value, getStyle) {
      return getStyle(value.getInstance());
    }
    __name(useAnimatedNumberStyle, "useAnimatedNumberStyle");
    function createAnimations2(animations2) {
      AnimatedView["displayName"] = "AnimatedView";
      AnimatedText["displayName"] = "AnimatedText";
      return {
        isReactNative: true,
        animations: animations2,
        View: AnimatedView,
        Text: AnimatedText,
        useAnimatedNumber,
        useAnimatedNumberReaction,
        useAnimatedNumberStyle,
        usePresence: import_use_presence2.usePresence,
        useAnimations: ({ props, onDidAnimate, style, state, presence }) => {
          const isExiting = (presence == null ? void 0 : presence[0]) === false;
          const sendExitComplete = presence == null ? void 0 : presence[1];
          const animateStyles = (0, import_web16.useSafeRef)({});
          const animatedTranforms = (0, import_web16.useSafeRef)([]);
          const animationsState = (0, import_web16.useSafeRef)(
            /* @__PURE__ */ new WeakMap()
          );
          const animateOnly = props.animateOnly || [];
          const args = [style, state, isExiting, !!onDidAnimate];
          const isThereNoNativeStyleKeys = (0, import_react44.useMemo)(() => {
            if (import_web16.isWeb)
              return true;
            return Object.keys(style).some((key) => {
              if (animateOnly.length) {
                return !animatedStyleKey[key] && animateOnly.indexOf(key) === -1;
              } else {
                return !animatedStyleKey[key];
              }
            });
          }, args);
          const res = (0, import_react44.useMemo)(() => {
            var _a;
            const runners = [];
            const completions = [];
            const nonAnimatedStyle = {};
            for (const key in style) {
              const val = style[key];
              if (!animatedStyleKey[key] && !costlyToAnimateStyleKey[key]) {
                nonAnimatedStyle[key] = val;
                continue;
              }
              if (animateOnly.length && animateOnly.indexOf(key) === -1) {
                nonAnimatedStyle[key] = val;
                continue;
              }
              if (key !== "transform") {
                animateStyles.current[key] = update(key, animateStyles.current[key], val);
                continue;
              }
              if (!val)
                continue;
              for (const [index3, transform] of val.entries()) {
                if (!transform)
                  continue;
                const tkey = Object.keys(transform)[0];
                const currentTransform = (_a = animatedTranforms.current[index3]) == null ? void 0 : _a[tkey];
                animatedTranforms.current[index3] = {
                  [tkey]: update(tkey, currentTransform, transform[tkey])
                };
                animatedTranforms.current = [...animatedTranforms.current];
              }
            }
            const animatedStyle = {
              ...Object.fromEntries(
                Object.entries(animateStyles.current).map(([k, v]) => {
                  var _a2;
                  return [
                    k,
                    ((_a2 = animationsState.current.get(v)) == null ? void 0 : _a2.interpolation) || v
                  ];
                })
              ),
              transform: animatedTranforms.current.map((r) => {
                var _a2;
                const key = Object.keys(r)[0];
                const val = ((_a2 = animationsState.current.get(r[key])) == null ? void 0 : _a2.interpolation) || r[key];
                return { [key]: val };
              })
            };
            return {
              runners,
              completions,
              style: [nonAnimatedStyle, animatedStyle]
            };
            function update(key, animated, valIn) {
              const isColorStyleKey = colorStyleKey[key];
              const [val, type] = isColorStyleKey ? [0, void 0] : getValue2(valIn);
              let animateToValue = val;
              const value = animated || new import_react_native13.Animated.Value(val);
              const curInterpolation = animationsState.current.get(value);
              let interpolateArgs;
              if (type) {
                interpolateArgs = getInterpolated(
                  (curInterpolation == null ? void 0 : curInterpolation.current) ?? value["_value"],
                  val,
                  type
                );
                animationsState.current.set(value, {
                  interpolation: value.interpolate(interpolateArgs),
                  current: val
                });
              }
              if (isColorStyleKey) {
                animateToValue = (curInterpolation == null ? void 0 : curInterpolation.animateToValue) ? 0 : 1;
                interpolateArgs = getColorInterpolated(
                  curInterpolation == null ? void 0 : curInterpolation.current,
                  // valIn is the next color
                  valIn,
                  animateToValue
                );
                animationsState.current.set(value, {
                  current: valIn,
                  interpolation: value.interpolate(interpolateArgs),
                  animateToValue: (curInterpolation == null ? void 0 : curInterpolation.animateToValue) ? 0 : 1
                });
              }
              if (value) {
                const animationConfig = getAnimationConfig(key, animations2, props.animation);
                let resolve;
                const promise = new Promise((res2) => {
                  resolve = res2;
                });
                completions.push(promise);
                runners.push(() => {
                  value.stopAnimation();
                  function getAnimation() {
                    return import_react_native13.Animated[animationConfig.type || "spring"](value, {
                      toValue: animateToValue,
                      useNativeDriver: !import_web16.isWeb && !isThereNoNativeStyleKeys,
                      ...animationConfig
                    });
                  }
                  __name(getAnimation, "getAnimation");
                  const animation = animationConfig.delay ? import_react_native13.Animated.sequence([
                    import_react_native13.Animated.delay(animationConfig.delay),
                    getAnimation()
                  ]) : getAnimation();
                  animation.start(({ finished }) => {
                    if (finished) {
                      resolve();
                    }
                  });
                });
              }
              if (process.env.NODE_ENV === "development") {
                if (props["debug"] === "verbose") {
                  console.log(" \u{1F4A0} animate", key, `from ${value["_value"]} to`, valIn, `(${val})`, "type", type, "interpolate", interpolateArgs);
                }
              }
              return value;
            }
            __name(update, "update");
          }, args);
          (0, import_web16.useIsomorphicLayoutEffect)(() => {
            res.runners.forEach((r) => r());
            let cancel = false;
            Promise.all(res.completions).then(() => {
              if (cancel)
                return;
              onDidAnimate == null ? void 0 : onDidAnimate();
              if (isExiting) {
                sendExitComplete == null ? void 0 : sendExitComplete();
              }
            });
            return () => {
              cancel = true;
            };
          }, args);
          if (process.env.NODE_ENV === "development") {
            if (props["debug"] === "verbose") {
              console.log(`Returning animated`, res);
            }
          }
          return res;
        }
      };
    }
    __name(createAnimations2, "createAnimations");
    function getColorInterpolated(currentColor, nextColor, animateToValue) {
      const inputRange = [0, 1];
      const outputRange = [currentColor ? currentColor : nextColor, nextColor];
      if (animateToValue === 0) {
        outputRange.reverse();
      }
      return {
        inputRange,
        outputRange
      };
    }
    __name(getColorInterpolated, "getColorInterpolated");
    function getInterpolated(current, next, postfix = "deg") {
      if (next === current) {
        current = next - 1e-9;
      }
      const inputRange = [current, next];
      const outputRange = [`${current}${postfix}`, `${next}${postfix}`];
      if (next < current) {
        inputRange.reverse();
        outputRange.reverse();
      }
      return {
        inputRange,
        outputRange
      };
    }
    __name(getInterpolated, "getInterpolated");
    function getAnimationConfig(key, animations2, animation) {
      var _a, _b;
      if (typeof animation === "string") {
        return animations2[animation];
      }
      let type = "";
      let extraConf;
      const shortKey = transformShorthands[key];
      if (Array.isArray(animation)) {
        type = animation[0];
        const conf = ((_a = animation[1]) == null ? void 0 : _a[key]) ?? ((_b = animation[1]) == null ? void 0 : _b[shortKey]);
        if (conf) {
          if (typeof conf === "string") {
            type = conf;
          } else {
            type = conf.type || type;
            extraConf = conf;
          }
        }
      } else {
        const val = (animation == null ? void 0 : animation[key]) ?? (animation == null ? void 0 : animation[shortKey]);
        type = val == null ? void 0 : val.type;
        extraConf = val;
      }
      const found = animations2[type];
      if (!found) {
        throw new Error(`No animation of type "${type}" for key "${key}"`);
      }
      return {
        ...found,
        ...extraConf
      };
    }
    __name(getAnimationConfig, "getAnimationConfig");
    var transformShorthands = {
      x: "translateX",
      y: "translateY",
      translateX: "x",
      translateY: "y"
    };
    function getValue2(input, isColor = false) {
      if (typeof input !== "string") {
        return [input];
      }
      const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
      return [+number, after];
    }
    __name(getValue2, "getValue");
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    var import_polyfill = require_polyfill();
    __reExport2(src_exports, require_createAnimations(), module2.exports);
  }
});

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_font_inter = __toESM(require_cjs());
var import_react_native_media_driver = __toESM(require_cjs2());

// ../../node_modules/@tamagui/shorthands/dist/esm/index.js
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bc: "backgroundColor",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  boc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands["bls"] = "borderLeftStyle";
shorthands["brs"] = "borderRightStyle";
shorthands["bts"] = "borderTopStyle";
shorthands["bbs"] = "borderBottomStyle";
shorthands["bxs"] = "boxSizing";
shorthands["bxsh"] = "boxShadow";
shorthands["ox"] = "overflowX";
shorthands["oy"] = "overflowY";

// ../../node_modules/@tamagui/create-theme/dist/esm/index.js
var THEME_INFO = /* @__PURE__ */ new WeakMap();
function createTheme(palette, definition, options) {
  const theme = {
    ...Object.fromEntries(
      Object.entries(definition).map(([key, offset2]) => {
        return [key, getValue(palette, offset2)];
      })
    ),
    ...options == null ? void 0 : options.nonInheritedValues
  };
  THEME_INFO.set(theme, { palette, definition, cache: /* @__PURE__ */ new Map() });
  return theme;
}
__name(createTheme, "createTheme");
var getValue = /* @__PURE__ */ __name((palette, value) => {
  if (typeof value === "string")
    return value;
  const max3 = palette.length - 1;
  const isPositive = value === 0 ? !isMinusZero(value) : value >= 0;
  const next = isPositive ? value : max3 + value;
  const index3 = Math.min(Math.max(0, next), max3);
  return palette[index3];
}, "getValue");
function addChildren(themes2, getChildren2) {
  const out = { ...themes2 };
  for (const key in themes2) {
    const subThemes = getChildren2(key, themes2[key]);
    for (const sKey in subThemes) {
      out[`${key}_${sKey}`] = subThemes[sKey];
    }
  }
  return out;
}
__name(addChildren, "addChildren");
var skipMask = /* @__PURE__ */ __name((template2, { skip }) => {
  if (!skip)
    return template2;
  return Object.fromEntries(
    Object.entries(template2).filter(([k]) => !(k in skip))
  );
}, "skipMask");
var createShiftMask = /* @__PURE__ */ __name(({ inverse } = {}) => {
  return (template2, opts) => {
    const { override: override2, max: maxIn, palette, min: min3 = 0, strength = 1 } = opts;
    const values = Object.entries(template2);
    const max3 = maxIn ?? (palette ? Object.values(palette).length - 1 : Infinity);
    const out = {};
    for (const [key, value] of values) {
      if (typeof value === "string")
        continue;
      if (typeof (override2 == null ? void 0 : override2[key]) === "number") {
        const overrideShift = override2[key];
        out[key] = value + overrideShift;
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0;
      const direction = isPositive ? 1 : -1;
      const invert = inverse ? -1 : 1;
      const next = value + strength * direction * invert;
      const clamped = isPositive ? Math.max(min3, Math.min(max3, next)) : Math.min(-min3, Math.max(-max3, next));
      out[key] = clamped;
    }
    return skipMask(out, opts);
  };
}, "createShiftMask");
var createWeakenMask = /* @__PURE__ */ __name(() => createShiftMask(), "createWeakenMask");
var createStrengthenMask = /* @__PURE__ */ __name(() => createShiftMask({ inverse: true }), "createStrengthenMask");
function isMinusZero(value) {
  return 1 / value === -Infinity;
}
__name(isMinusZero, "isMinusZero");
function applyMask(theme, mask, options = {}) {
  const info = THEME_INFO.get(theme);
  if (!info) {
    throw new Error(
      process.env.NODE_ENV !== "production" ? `No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme` : `\u274C Err2`
    );
  }
  const template2 = mask(info.definition, {
    palette: info.palette,
    ...options
  });
  const next = createTheme(info.palette, template2);
  return next;
}
__name(applyMask, "applyMask");
if (process.env.NODE_ENV === "development") {
  const palette = ["0", "1", "2", "3", "-3", "-2", "-1", "-0"];
  const template2 = { bg: 1, fg: -1 };
  const stongerMask = createStrengthenMask();
  const weakerMask = createWeakenMask();
  const theme = createTheme(palette, template2);
  if (theme.bg !== "1")
    throw `\u274C`;
  if (theme.fg !== "-1")
    throw `\u274C`;
  const str = applyMask(theme, stongerMask);
  if (str.bg !== "0")
    throw `\u274C`;
  if (str.fg !== "-0")
    throw `\u274C`;
  const weak = applyMask(theme, weakerMask);
  if (weak.bg !== "2")
    throw `\u274C`;
  if (weak.fg !== "-2")
    throw `\u274C`;
  const weak2 = applyMask(theme, weakerMask, { strength: 2 });
  if (weak2.bg !== "3")
    throw `\u274C`;
  if (weak2.fg !== "-3")
    throw `\u274C`;
}

// ../../node_modules/@tamagui/colors/dist/esm/dark/blue.js
var blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/gray.js
var gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/green.js
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/orange.js
var orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/pink.js
var pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/purple.js
var purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/red.js
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/yellow.js
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/blue.js
var blue2 = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/gray.js
var gray2 = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/green.js
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/orange.js
var orange2 = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/pink.js
var pink2 = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/purple.js
var purple2 = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/red.js
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/yellow.js
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// ../../node_modules/@tamagui/themes/dist/esm/tokens.js
var import_web = require("@tamagui/core-node");
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)];
});
function sizeToSpace(v) {
  if (v === 0)
    return 0;
  if (v === 2)
    return 0.5;
  if (v === 4)
    return 1;
  if (v === 8)
    return 1.5;
  if (v <= 16)
    return Math.round(v * 0.333);
  return Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var colorTokens = {
  light: {
    blue: blue2,
    gray: gray2,
    green: green2,
    orange: orange2,
    pink: pink2,
    purple: purple2,
    red: red2,
    yellow: yellow2
  },
  dark: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow
  }
};
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])
  );
}
__name(postfixObjKeys, "postfixObjKeys");
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = (0, import_web.createTokens)({
  color,
  radius,
  zIndex,
  space,
  size
});

// ../../node_modules/@tamagui/themes/dist/esm/themes.js
var lightTransparent = "rgba(255,255,255,0)";
var darkTransparent = "rgba(10,10,10,0)";
var palettes = {
  dark: [
    darkTransparent,
    "#050505",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#a5a5a5",
    "#fff",
    lightTransparent
  ],
  light: [
    lightTransparent,
    "#fff",
    "#f9f9f9",
    "hsl(0, 0%, 97.3%)",
    "hsl(0, 0%, 95.1%)",
    "hsl(0, 0%, 94.0%)",
    "hsl(0, 0%, 92.0%)",
    "hsl(0, 0%, 89.5%)",
    "hsl(0, 0%, 81.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 50.3%)",
    "hsl(0, 0%, 42.5%)",
    "hsl(0, 0%, 9.0%)",
    darkTransparent
  ]
};
var templateColors = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12
};
var templateShadows = {
  shadowColor: 1,
  shadowColorHover: 1,
  shadowColorPress: 2,
  shadowColorFocus: 2
};
var toSkip = {
  ...templateShadows
};
var override = Object.fromEntries(Object.entries(toSkip).map(([k]) => [k, 0]));
var overrideShadows = Object.fromEntries(
  Object.entries(templateShadows).map(([k]) => [k, 0])
);
var overrideWithColors = {
  ...override,
  color: 0,
  colorHover: 0,
  colorFocus: 0,
  colorPress: 0
};
var template = {
  ...templateColors,
  ...toSkip,
  // the background, color, etc keys here work like generics - they make it so you
  // can publish components for others to use without mandating a specific color scale
  // the @tamagui/button Button component looks for `$background`, so you set the
  // dark_red_Button theme to have a stronger background than the dark_red theme.
  background: 2,
  backgroundHover: 3,
  backgroundPress: 4,
  backgroundFocus: 2,
  backgroundStrong: 1,
  backgroundTransparent: 0,
  color: -1,
  colorHover: -2,
  colorPress: -1,
  colorFocus: -2,
  colorTransparent: -0,
  borderColor: 4,
  borderColorHover: 5,
  borderColorPress: 3,
  borderColorFocus: 4,
  placeholderColor: -4
};
var lightShadowColor = "rgba(0,0,0,0.02)";
var lightShadowColorStrong = "rgba(0,0,0,0.066)";
var darkShadowColor = "rgba(0,0,0,0.2)";
var darkShadowColorStrong = "rgba(0,0,0,0.3)";
var lightShadows = {
  shadowColor: lightShadowColorStrong,
  shadowColorHover: lightShadowColorStrong,
  shadowColorPress: lightShadowColor,
  shadowColorFocus: lightShadowColor
};
var darkShadows = {
  shadowColor: darkShadowColorStrong,
  shadowColorHover: darkShadowColorStrong,
  shadowColorPress: darkShadowColor,
  shadowColorFocus: darkShadowColor
};
var lightTemplate = {
  ...template,
  background: 2,
  backgroundHover: 3,
  backgroundPress: 4,
  // our light color palette is... a bit unique
  borderColor: 6,
  borderColorHover: 7,
  borderColorFocus: 5,
  borderColorPress: 6,
  ...lightShadows
};
var darkTemplate = { ...template, ...darkShadows };
var light = createTheme(palettes.light, lightTemplate);
var dark = createTheme(palettes.dark, darkTemplate);
var baseThemes = {
  light,
  dark
};
var masks = {
  skip: skipMask,
  weaker: createWeakenMask(),
  stronger: createStrengthenMask()
};
var maskOptions = {
  override,
  skip: toSkip,
  // avoids the transparent ends
  max: palettes.light.length - 2,
  min: 1
};
var transparent = /* @__PURE__ */ __name((hsl, opacity = 0) => hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`), "transparent");
var [lightColorThemes, darkColorThemes] = [colorTokens.light, colorTokens.dark].map(
  (colorSet, i) => {
    const isLight = i === 0;
    const theme = baseThemes[isLight ? "light" : "dark"];
    return Object.fromEntries(
      Object.keys(colorSet).map((color2) => {
        const colorPalette = Object.values(colorSet[color2]);
        const [head, tail] = [
          colorPalette.slice(0, 6),
          colorPalette.slice(colorPalette.length - 5)
        ];
        const palette = [
          transparent(colorPalette[0]),
          ...head,
          ...tail,
          theme.color,
          transparent(colorPalette[colorPalette.length - 1])
        ];
        const colorTheme = createTheme(
          palette,
          isLight ? {
            ...lightTemplate,
            // light color themes are a bit less sensitive
            borderColor: 4,
            borderColorHover: 5,
            borderColorFocus: 4,
            borderColorPress: 4
          } : darkTemplate
        );
        return [color2, colorTheme];
      })
    );
  }
);
var allThemes = addChildren(baseThemes, (name, theme) => {
  const isLight = name === "light";
  const inverseName = isLight ? "dark" : "light";
  const inverseTheme = baseThemes[inverseName];
  const colorThemes = isLight ? lightColorThemes : darkColorThemes;
  const inverseColorThemes = isLight ? darkColorThemes : lightColorThemes;
  const allColorThemes = addChildren(colorThemes, (colorName, colorTheme) => {
    const inverse = inverseColorThemes[colorName];
    return {
      ...getAltThemes({
        theme: colorTheme,
        inverse,
        isLight
      }),
      ...getComponentThemes(colorTheme, inverse, isLight)
    };
  });
  const baseSubThemes = {
    ...getAltThemes({ theme, inverse: inverseTheme, isLight }),
    ...getComponentThemes(theme, inverseTheme, isLight)
  };
  return {
    ...baseSubThemes,
    ...allColorThemes
  };
});
function getAltThemes({
  theme,
  inverse,
  isLight,
  activeTheme
}) {
  const maskOptionsAlt = {
    ...maskOptions,
    override: overrideShadows
  };
  const alt1 = applyMask(theme, masks.weaker, maskOptionsAlt);
  const alt2 = applyMask(alt1, masks.weaker, maskOptionsAlt);
  const active = activeTheme ?? (process.env.ACTIVE_THEME_INVERSE ? inverse : (() => {
    return applyMask(theme, masks.weaker, {
      ...maskOptions,
      strength: 3,
      skip: {
        ...maskOptions.skip,
        color: 1
      }
    });
  })());
  return addChildren({ alt1, alt2, active }, (_, subTheme) => {
    return getComponentThemes(subTheme, subTheme === inverse ? theme : inverse, isLight);
  });
}
__name(getAltThemes, "getAltThemes");
function getComponentThemes(theme, inverse, isLight) {
  const componentMaskOptions = {
    ...maskOptions,
    override: overrideWithColors,
    skip: {
      ...maskOptions.skip,
      // skip colors too just for component sub themes
      ...templateColors
    }
  };
  const weaker1 = applyMask(theme, masks.weaker, componentMaskOptions);
  const base = applyMask(weaker1, masks.stronger, componentMaskOptions);
  const weaker2 = applyMask(weaker1, masks.weaker, {
    ...componentMaskOptions,
    override: overrideWithColors
  });
  const stronger1 = applyMask(theme, masks.stronger, componentMaskOptions);
  const inverse1 = applyMask(inverse, masks.weaker, componentMaskOptions);
  const inverse2 = applyMask(inverse1, masks.weaker, componentMaskOptions);
  const strongerBorderLighterBackground = isLight ? {
    ...stronger1,
    borderColor: weaker1.borderColor,
    borderColorHover: weaker1.borderColorHover,
    borderColorPress: weaker1.borderColorPress,
    borderColorFocus: weaker1.borderColorFocus
  } : {
    ...applyMask(theme, masks.skip, componentMaskOptions),
    borderColor: weaker1.borderColor,
    borderColorHover: weaker1.borderColorHover,
    borderColorPress: weaker1.borderColorPress,
    borderColorFocus: weaker1.borderColorFocus
  };
  const overlayTheme = {
    background: isLight ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.9)"
  };
  const weaker2WithoutBorder = {
    ...weaker2,
    borderColor: "transparent",
    borderColorHover: "transparent"
  };
  return {
    ListItem: isLight ? stronger1 : base,
    Card: weaker1,
    Button: weaker2WithoutBorder,
    Checkbox: weaker2,
    DrawerFrame: weaker1,
    SliderTrack: stronger1,
    SliderTrackActive: weaker2,
    SliderThumb: inverse1,
    Progress: weaker1,
    ProgressIndicator: inverse,
    Switch: weaker2,
    SwitchThumb: inverse2,
    TooltipArrow: weaker1,
    TooltipContent: weaker2,
    Input: strongerBorderLighterBackground,
    TextArea: strongerBorderLighterBackground,
    Tooltip: inverse1,
    // make overlays always dark
    SheetOverlay: overlayTheme,
    DialogOverlay: overlayTheme,
    ModalOverlay: overlayTheme
  };
}
__name(getComponentThemes, "getComponentThemes");
var themes = {
  ...allThemes,
  // bring back the full type, the rest use a subset to avoid clogging up ts,
  // tamagui will be smart and use the top level themes as the type for useTheme() etc
  light: createTheme(palettes.light, lightTemplate, { nonInheritedValues: lightColors }),
  dark: createTheme(palettes.dark, darkTemplate, { nonInheritedValues: darkColors })
};

// ../../node_modules/tamagui/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  ACTIONS: () => ACTIONS,
  Adapt: () => Adapt,
  AdaptContents: () => AdaptContents,
  AdaptParentContext: () => AdaptParentContext,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Anchor: () => Anchor,
  AnimatePresence: () => AnimatePresence,
  AnimationDriverProvider: () => import_core53.AnimationDriverProvider,
  Article: () => Article,
  Aside: () => Aside,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarFallbackFrame: () => AvatarFallbackFrame,
  AvatarFrame: () => AvatarFrame,
  AvatarImage: () => AvatarImage,
  BubbleInput: () => BubbleInput,
  Button: () => Button2,
  ButtonFrame: () => ButtonFrame,
  ButtonText: () => ButtonTextFrame,
  Card: () => Card,
  CardBackground: () => CardBackground,
  CardFooter: () => CardFooter,
  CardFrame: () => CardFrame,
  CardHeader: () => CardHeader,
  Checkbox: () => Checkbox,
  CheckboxFrame: () => CheckboxFrame,
  Circle: () => Circle,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogOverlayFrame: () => DialogOverlayFrame,
  DialogPortal: () => DialogPortal,
  DialogPortalFrame: () => DialogPortalFrame,
  DialogSheetContents: () => DialogSheetContents,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DialogWarningProvider: () => DialogWarningProvider,
  DirectionalYStack: () => DirectionalYStack,
  EnsureFlexed: () => EnsureFlexed,
  Fieldset: () => Fieldset,
  FontLanguage: () => import_core53.FontLanguage,
  Footer: () => Footer,
  Form: () => Form,
  FormFrame: () => FormFrame,
  FormProvider: () => FormProvider,
  FormTrigger: () => FormTrigger,
  ForwardSelectContext: () => ForwardSelectContext,
  Frame: () => Frame,
  Grid: () => Grid,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Handle: () => Handle,
  Header: () => Header,
  Heading: () => Heading,
  INITIAL_STATE: () => INITIAL_STATE,
  Input: () => Input,
  InputFrame: () => InputFrame,
  Label: () => Label,
  LabelFrame: () => LabelFrame,
  LinearGradient: () => LinearGradient,
  Main: () => Main,
  Nav: () => Nav,
  Overlay: () => Overlay,
  Paragraph: () => Paragraph,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverArrow: () => PopoverArrow,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Popper: () => Popper,
  PopperAnchor: () => PopperAnchor,
  PopperArrow: () => PopperArrow,
  PopperContent: () => PopperContent,
  PopperContentFrame: () => PopperContentFrame,
  PopperProvider: () => PopperProvider,
  Portal: () => Portal,
  PortalHost: () => PortalHost,
  PortalItem: () => PortalItem,
  PortalProvider: () => PortalProvider,
  PresenceContext: () => PresenceContext,
  Progress: () => Progress,
  ProgressFrame: () => ProgressFrame,
  ProgressIndicator: () => ProgressIndicator,
  ProgressIndicatorFrame: () => ProgressIndicatorFrame,
  RadioGroup: () => RadioGroup,
  Range: () => Range,
  ScrollView: () => ScrollView,
  Section: () => Section,
  Select: () => Select,
  SelectGroupFrame: () => SelectGroupFrame,
  SelectIcon: () => SelectIcon,
  SelectItem: () => SelectItem,
  SelectItemTextFrame: () => SelectItemTextFrame,
  SelectProvider: () => SelectProvider,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetController: () => SheetController,
  SheetControllerContext: () => SheetControllerContext,
  SheetHandleFrame: () => SheetHandleFrame,
  SheetOverlayFrame: () => SheetOverlayFrame,
  SizableStack: () => SizableStack,
  SizableText: () => SizableText,
  Slider: () => Slider,
  SliderFrame: () => SliderFrame,
  SliderThumb: () => SliderThumb,
  SliderThumbFrame: () => SliderThumbFrame,
  SliderTrack: () => SliderTrack,
  SliderTrackActive: () => SliderTrackActive,
  SliderTrackActiveFrame: () => SliderTrackActiveFrame,
  SliderTrackFrame: () => SliderTrackFrame,
  Spacer: () => import_core53.Spacer,
  Spinner: () => Spinner,
  Square: () => Square,
  Stack: () => import_core53.Stack,
  Switch: () => Switch,
  SwitchFrame: () => SwitchFrame,
  SwitchThumb: () => SwitchThumb,
  SwitchThumbFrame: () => SwitchThumbFrame,
  Tabs: () => Tabs,
  TamaguiProvider: () => TamaguiProvider,
  Text: () => import_core53.Text,
  TextAncestorContext: () => import_core53.TextAncestorContext,
  TextArea: () => TextArea,
  TextAreaFrame: () => TextAreaFrame,
  Theme: () => import_core53.Theme,
  ThemeableStack: () => ThemeableStack,
  Thumb: () => Thumb,
  ToggleGroup: () => ToggleGroup,
  Tooltip: () => Tooltip2,
  TooltipGroup: () => TooltipGroup,
  TooltipSimple: () => TooltipSimple,
  Track: () => Track,
  Unspaced: () => import_core53.Unspaced,
  VisuallyHidden: () => VisuallyHidden,
  XStack: () => XStack,
  YStack: () => YStack,
  ZStack: () => ZStack,
  __PopoverProviderInternal: () => __PopoverProviderInternal,
  buttonStaticConfig: () => buttonStaticConfig,
  composeRefs: () => composeRefs,
  configureInitialWindowDimensions: () => configureInitialWindowDimensions,
  createAlertDialogScope: () => createAlertDialogScope,
  createAvatarScope: () => createAvatarScope,
  createButtonScope: () => createButtonScope,
  createCheckboxScope: () => createCheckboxScope,
  createComponent: () => import_core53.createComponent,
  createContext: () => createContext3,
  createContextScope: () => createContextScope,
  createDialogScope: () => createDialogScope,
  createFont: () => import_core53.createFont,
  createPopoverScope: () => createPopoverScope,
  createPopperScope: () => createPopperScope,
  createProgressScope: () => createProgressScope,
  createRadioGroupScope: () => createRadioGroupScope,
  createSelectContext: () => createSelectContext,
  createSelectScope: () => createSelectScope,
  createSheet: () => createSheet,
  createSheetScope: () => createSheetScope,
  createShorthands: () => import_core53.createShorthands,
  createSwitchScope: () => createSwitchScope,
  createTamagui: () => createTamagui,
  createTheme: () => import_core53.createTheme,
  createToggleGroupScope: () => createToggleGroupScope,
  createTokens: () => import_core53.createTokens,
  createVariable: () => import_core53.createVariable,
  debounce: () => debounce,
  defaultStyles: () => defaultStyles,
  fullscreenStyle: () => fullscreenStyle,
  getAnimationDriver: () => import_core53.getAnimationDriver,
  getConfig: () => import_core53.getConfig,
  getMedia: () => import_core53.getMedia,
  getShapeSize: () => getShapeSize,
  getState: () => getState2,
  getStylesAtomic: () => import_core53.getStylesAtomic,
  getThemes: () => import_core53.getThemes,
  getTokens: () => import_core53.getTokens,
  getVariable: () => import_core53.getVariable,
  getVariableName: () => import_core53.getVariableName,
  getVariableValue: () => import_core53.getVariableValue,
  insertFont: () => import_core53.insertFont,
  isChrome: () => import_core53.isChrome,
  isClient: () => import_core53.isClient,
  isIndeterminate: () => isIndeterminate,
  isPresent: () => isPresent,
  isServer: () => import_core53.isServer,
  isServerSide: () => isServerSide,
  isTamaguiComponent: () => import_core53.isTamaguiComponent,
  isTamaguiElement: () => import_core53.isTamaguiElement,
  isTouchable: () => import_core53.isTouchable,
  isVariable: () => import_core53.isVariable,
  isWeb: () => import_core53.isWeb,
  isWebTouchable: () => import_core53.isWebTouchable,
  matchMedia: () => import_core53.matchMedia,
  mediaObjectToString: () => import_core53.mediaObjectToString,
  mediaQueryConfig: () => import_core53.mediaQueryConfig,
  mediaState: () => import_core53.mediaState,
  setupNativeSheet: () => setupNativeSheet,
  spacedChildren: () => import_core53.spacedChildren,
  styled: () => import_core53.styled,
  themeable: () => import_core53.themeable,
  themeableVariants: () => themeableVariants,
  useAdaptParent: () => useAdaptParent,
  useButton: () => useButton,
  useComposedRefs: () => useComposedRefs,
  useControllableState: () => useControllableState,
  useDebounce: () => useDebounce,
  useDebounceValue: () => useDebounceValue,
  useDidFinishSSR: () => import_core53.useDidFinishSSR,
  useEvent: () => import_core53.useEvent,
  useFloatingContext: () => useFloatingContext,
  useForceUpdate: () => useForceUpdate2,
  useFormContext: () => useFormContext,
  useGet: () => import_core53.useGet,
  useIsPresent: () => useIsPresent,
  useIsTouchDevice: () => import_core53.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core53.useIsomorphicLayoutEffect,
  useLabelContext: () => useLabelContext,
  useMedia: () => import_core53.useMedia,
  useMediaPropsActive: () => import_core53.useMediaPropsActive,
  usePopoverScope: () => usePopoverScope,
  usePopperContext: () => usePopperContext,
  usePortal: () => usePortal,
  usePresence: () => usePresence,
  useProps: () => import_core53.useProps,
  useSafeRef: () => import_core53.useSafeRef,
  useSelectContext: () => useSelectContext,
  useSheet: () => useSheet,
  useSheetController: () => useSheetController,
  useStyle: () => import_core53.useStyle,
  useTheme: () => import_core53.useTheme,
  useThemeName: () => import_core53.useThemeName,
  useWindowDimensions: () => useWindowDimensions2,
  variableToString: () => import_core53.variableToString,
  withStaticProperties: () => import_core53.withStaticProperties,
  wrapChildrenInText: () => wrapChildrenInText
});

// ../../node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var React = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = React;
(0, import_core.setupReactNative)({
  View: import_react_native.View,
  Text: import_react_native.Text
});
if (typeof requestAnimationFrame === "undefined") {
  globalThis["requestAnimationFrame"] = setImmediate;
}
var cancelAnimationFrame2 = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (x) => {
  try {
    cancelAnimationFrame2(x);
  } catch {
  }
};

// ../../node_modules/@tamagui/adapt/dist/esm/Adapt.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core2 = require("@tamagui/core-node");
var import_react = require("react");
var AdaptParentContext = (0, import_react.createContext)(null);
var AdaptContents = /* @__PURE__ */ __name((props) => {
  const context = (0, import_react.useContext)(AdaptParentContext);
  if (!(context == null ? void 0 : context.Contents)) {
    throw new Error("Adapt not supported by this component");
  }
  return (0, import_react.createElement)(context.Contents, props);
}, "AdaptContents");
AdaptContents.shouldForwardSpace = true;
var useAdaptParent = /* @__PURE__ */ __name(({
  Contents
}) => {
  const [when, setWhen] = (0, import_react.useState)(null);
  const AdaptProvider = (0, import_react.useMemo)(() => {
    const context = {
      Contents,
      setWhen
    };
    function AdaptProviderView(props) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptParentContext.Provider, { value: context, children: props.children });
    }
    __name(AdaptProviderView, "AdaptProviderView");
    return AdaptProviderView;
  }, [Contents]);
  return {
    AdaptProvider,
    when
  };
}, "useAdaptParent");
var Adapt = (0, import_core2.withStaticProperties)(
  /* @__PURE__ */ __name(function Adapt2({ platform: platform2, when, children }) {
    const context = (0, import_react.useContext)(AdaptParentContext);
    const media = (0, import_core2.useMedia)();
    let enabled = !platform2;
    if (platform2 === "touch")
      enabled = import_core2.isTouchable;
    if (platform2 === "native")
      enabled = !import_core2.isWeb;
    if (platform2 === "web")
      enabled = import_core2.isWeb;
    if (when && !media[when]) {
      enabled = false;
    }
    (0, import_core2.useIsomorphicLayoutEffect)(() => {
      if (!enabled)
        return;
      context == null ? void 0 : context.setWhen(when || enabled);
    }, [when, context, enabled]);
    if (!enabled) {
      return null;
    }
    return children;
  }, "Adapt2"),
  {
    Contents: AdaptContents
  }
);

// ../../node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_jsx_runtime16 = require("react/jsx-runtime");

// ../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var React2 = __toESM(require("react"));
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ;
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React2.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// ../../node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_core18 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/create-context/dist/esm/create-context.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var React3 = __toESM(require("react"));
function createContext3(rootComponentName, defaultContext) {
  const Context = React3.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = React3.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
  }
  __name(Provider, "Provider");
  function useContext13(consumerName) {
    const context = React3.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name(useContext13, "useContext");
  Provider.displayName = `${rootComponentName}Provider`;
  return [Provider, useContext13];
}
__name(createContext3, "createContext");
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext22(rootComponentName, defaultContext) {
    const BaseContext = React3.createContext(defaultContext);
    const index3 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
      const value = React3.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
    }
    __name(Provider, "Provider");
    function useContext13(consumerName, scope, options) {
      const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
      const context = React3.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options == null ? void 0 : options.fallback) {
        if ((options == null ? void 0 : options.warn) !== false) {
          console.warn(missingContextMessage);
        }
        return options.fallback;
      } else {
        throw new Error(missingContextMessage);
      }
    }
    __name(useContext13, "useContext");
    Provider.displayName = `${rootComponentName}Provider`;
    return [Provider, useContext13];
  }
  __name(createContext22, "createContext2");
  const createScope2 = /* @__PURE__ */ __name(() => {
    const scopeContexts2 = defaultContexts.map((defaultContext) => {
      return React3.createContext(defaultContext);
    });
    return /* @__PURE__ */ __name(function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts2;
      return React3.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    }, "useScope");
  }, "createScope");
  createScope2.scopeName = scopeName;
  return [
    createContext22,
    composeContextScopes(createScope2, ...createContextScopeDeps)
  ];
}
__name(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope2 = /* @__PURE__ */ __name(() => {
    const scopeHooks = scopes.map((createScope22) => ({
      useScope: createScope22(),
      scopeName: createScope22.scopeName
    }));
    return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React3.useMemo(
        () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
        [nextScopes]
      );
    }, "useComposedScopes");
  }, "createScope");
  createScope2.scopeName = baseScope.scopeName;
  return createScope2;
}
__name(composeContextScopes, "composeContextScopes");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime15 = require("react/jsx-runtime");

// ../../node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_web2 = require("@tamagui/core-node");
var import_react6 = __toESM(require("react"));

// ../../node_modules/@tamagui/animate-presence/dist/esm/LayoutGroupContext.js
var import_react2 = require("react");
var LayoutGroupContext = (0, import_react2.createContext)({});

// ../../node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var import_jsx_runtime3 = require("react/jsx-runtime");

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.js
var import_react3 = require("react");
var PresenceContext = (0, import_react3.createContext)(null);

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.js
var import_react4 = require("react");
function usePresence() {
  const context = (0, import_react4.useContext)(PresenceContext);
  if (!context) {
    return [true, null, context];
  }
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id = (0, import_react4.useId)() || "";
  (0, import_react4.useEffect)(() => register(id), [id, register]);
  const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
  return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
}
__name(usePresence, "usePresence");
function useIsPresent() {
  return isPresent((0, import_react4.useContext)(PresenceContext));
}
__name(useIsPresent, "useIsPresent");
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
__name(isPresent, "isPresent");

// ../../node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var React4 = __toESM(require("react"));
var import_react5 = require("react");
var PresenceChild = /* @__PURE__ */ __name(({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  exitVariant,
  enterVariant,
  presenceAffectsLayout
}) => {
  const presenceChildren = React4.useMemo(newChildrenMap, []);
  const id = (0, import_react5.useId)() || "";
  const context = React4.useMemo(
    () => {
      return {
        id,
        initial,
        isPresent: isPresent2,
        exitVariant,
        enterVariant,
        onExitComplete: (id2) => {
          presenceChildren.set(id2, true);
          for (const isComplete of presenceChildren.values()) {
            if (!isComplete) {
              return;
            }
          }
          onExitComplete == null ? void 0 : onExitComplete();
        },
        register: (id2) => {
          presenceChildren.set(id2, false);
          return () => presenceChildren.delete(id2);
        }
      };
    },
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    presenceAffectsLayout ? void 0 : [isPresent2, exitVariant, enterVariant]
  );
  React4.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React4.useEffect(() => {
    !(isPresent2 || presenceChildren.size) && (onExitComplete == null ? void 0 : onExitComplete());
  }, [isPresent2]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PresenceContext.Provider, { value: context, children });
}, "PresenceChild");
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
__name(newChildrenMap, "newChildrenMap");

// ../../node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
var isDev = process.env.NODE_ENV !== "production";
function updateChildLookup(children, allChildren) {
  const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
  children.forEach((child) => {
    const key = getChildKey(child);
    if (isDev && seenChildren && seenChildren.has(key)) {
      console.warn(
        `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`
      );
      seenChildren.add(key);
    }
    allChildren.set(key, child);
  });
}
__name(updateChildLookup, "updateChildLookup");
function onlyElements(children) {
  const filtered = [];
  import_react6.Children.forEach(children, (child, index3) => {
    if ((0, import_react6.isValidElement)(child)) {
      if (!child.key) {
        if (process.env.NODE_ENV === "development") {
          console.warn("No key given to AnimatePresence child, assigning index as key");
        }
        filtered.push(
          import_react6.default.cloneElement(child, {
            key: index3
          })
        );
      } else {
        filtered.push(child);
      }
    }
  });
  return filtered;
}
__name(onlyElements, "onlyElements");
var AnimatePresence = /* @__PURE__ */ __name(({
  children,
  enterVariant,
  exitVariant,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true
}) => {
  let forceRender = (0, import_web2.useForceUpdate)();
  const isClientMounted = (0, import_web2.useDidFinishSSR)();
  const forceRenderLayoutGroup = (0, import_react6.useContext)(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  const isMounted = (0, import_react6.useRef)(false);
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exiting = /* @__PURE__ */ new Set();
  const presentChildren = (0, import_react6.useRef)(childrenToRender);
  const allChildren = (0, import_react6.useRef)(/* @__PURE__ */ new Map()).current;
  const isInitialRender = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      isInitialRender.current = true;
      allChildren.clear();
      exiting.clear();
    };
  }, []);
  (0, import_web2.useIsomorphicLayoutEffect)(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  const hasWarned = process.env.NODE_ENV === "development" ? (0, import_react6.useRef)(false) : null;
  if (isInitialRender.current) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PresenceChild,
      {
        isPresent: Boolean(isClientMounted ? true : isMounted.current),
        exitVariant,
        enterVariant,
        initial: initial ? void 0 : false,
        presenceAffectsLayout,
        children: child
      },
      getChildKey(child)
    )) });
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach((key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    childrenToRender.splice(
      insertionIndex,
      0,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        PresenceChild,
        {
          isPresent: false,
          onExitComplete: () => {
            allChildren.delete(key);
            exiting.delete(key);
            const removeIndex = presentChildren.current.findIndex(
              (presentChild) => presentChild.key === key
            );
            presentChildren.current.splice(removeIndex, 1);
            if (!exiting.size) {
              presentChildren.current = filteredChildren;
              if (isMounted.current === false)
                return;
              forceRender();
              onExitComplete == null ? void 0 : onExitComplete();
            }
          },
          exitVariant,
          enterVariant,
          presenceAffectsLayout,
          children: child
        },
        getChildKey(child)
      )
    );
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PresenceChild,
      {
        isPresent: true,
        exitVariant,
        enterVariant,
        presenceAffectsLayout,
        children: child
      },
      getChildKey(child)
    );
  });
  if (process.env.NODE_ENV === "development") {
    const shouldWarn = exitBeforeEnter && childrenToRender.length > 1;
    if (shouldWarn && hasWarned && !hasWarned.current) {
      hasWarned.current = true;
      console.log(
        `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.`
      );
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react6.cloneElement)(child)) });
}, "AnimatePresence");
AnimatePresence.displayName = "AnimatePresence";

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_aria_hidden = __toESM(require_cjs3());
var import_core17 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_react_use_escape_keydown = __toESM(require_dist2());
var import_core3 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react7 = require("react");
var isWeb2 = process.env.TAMAGUI_TARGET === "web";
var isClient = typeof window !== "undefined";
var useIsomorphicLayoutEffect3 = !isWeb2 || isClient ? import_react7.useLayoutEffect : import_react7.useEffect;
function useGet(currentValue, initialValue2, forwardToFunction) {
  const curRef = (0, import_react7.useRef)(initialValue2 ?? currentValue);
  useIsomorphicLayoutEffect3(() => {
    curRef.current = currentValue;
  });
  return (0, import_react7.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}
__name(useGet, "useGet");

// ../../node_modules/@tamagui/use-event/dist/esm/useEvent.js
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
__name(useEvent, "useEvent");
var defaultValue = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "defaultValue");

// ../../node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var React6 = __toESM(require("react"));
var ReactDOM = __toESM(require("react-dom"));
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var DISMISSABLE_LAYER_NAME = "Dismissable";
var CONTEXT_UPDATE = "dismissable.update";
var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissable.focusOutside";
var originalBodyPointerEvents;
var DismissableContext = React6.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Dismissable = React6.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      forceUnmount,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React6.useContext(DismissableContext);
    const [node, setNode] = React6.useState(null);
    const [, force] = React6.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
      highestLayerWithOutsidePointerEventsDisabled
    );
    const index3 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index3 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some(
        (branch) => branch.contains(target)
      );
      if (!isPointerEventsEnabled || isPointerDownOnBranch)
        return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss == null ? void 0 : onDismiss();
    });
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some(
        (branch) => branch.contains(target)
      );
      if (isFocusInBranch)
        return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss == null ? void 0 : onDismiss();
    });
    (0, import_react_use_escape_keydown.useEscapeKeydown)((event) => {
      const isHighestLayer = index3 === context.layers.size - 1;
      if (!isHighestLayer)
        return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    });
    React6.useEffect(() => {
      if (!node)
        return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = document.body.style.pointerEvents;
          document.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          document.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, disableOutsidePointerEvents, context]);
    React6.useEffect(() => {
      if (forceUnmount)
        return;
      return () => {
        if (!node)
          return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context, forceUnmount]);
    React6.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name(() => {
        force({});
      }, "handleUpdate");
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          display: "contents",
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          // @ts-ignore
          ...props.style
        },
        onFocusCapture: (0, import_core3.composeEventHandlers)(
          // @ts-ignore
          props.onFocusCapture,
          focusOutside.onFocusCapture
        ),
        onBlurCapture: (0, import_core3.composeEventHandlers)(
          // @ts-ignore
          props.onBlurCapture,
          focusOutside.onBlurCapture
        ),
        onPointerDownCapture: (0, import_core3.composeEventHandlers)(
          // @ts-ignore
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
Dismissable.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableBranch";
var DismissableBranch = React6.forwardRef(
  (props, forwardedRef) => {
    const context = React6.useContext(DismissableContext);
    const ref = React6.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React6.useEffect(() => {
      const node = ref.current;
      if (node) {
        context.branches.add(node);
        return () => {
          context.branches.delete(node);
        };
      }
    }, [context.branches]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { display: "contents" }, ...props, ref: composedRefs });
  }
);
DismissableBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = useEvent(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React6.useRef(false);
  const handleClickRef = React6.useRef(() => {
  });
  React6.useEffect(() => {
    const handlePointerDown = /* @__PURE__ */ __name((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = /* @__PURE__ */ __name(function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        }, "handleAndDispatchPointerDownOutsideEvent2");
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          document.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown");
    const timerId = setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => {
      isPointerInsideReactTreeRef.current = true;
    }
  };
}
__name(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside) {
  const handleFocusOutside = useEvent(onFocusOutside);
  const isFocusInsideReactTreeRef = React6.useRef(false);
  React6.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name((event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    }, "handleFocus");
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [handleFocusOutside]);
  return {
    onFocusCapture: () => {
      isFocusInsideReactTreeRef.current = true;
    },
    onBlurCapture: () => {
      isFocusInsideReactTreeRef.current = false;
    }
  };
}
__name(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler)
    target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
__name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_focus_scope = __toESM(require_cjs6());

// ../../node_modules/@tamagui/portal/dist/esm/Portal.js
var import_jsx_runtime6 = require("react/jsx-runtime");

// ../../node_modules/@tamagui/polyfill-dev/index.js
if (typeof globalThis["__DEV__"] === "undefined") {
  globalThis["__DEV__"] = process.env.NODE_ENV === "development";
}

// ../../node_modules/@tamagui/portal/dist/esm/Portal.js
var import_core8 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var import_core5 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/stacks/dist/esm/getElevation.js
var import_core4 = require("@tamagui/core-node");
var getElevation = /* @__PURE__ */ __name((size3, extras) => {
  if (!size3)
    return;
  const { tokens: tokens2 } = extras;
  const token = tokens2.size[size3];
  const sizeNum = (0, import_core4.isVariable)(token) ? +token.val : size3;
  return getSizedElevation(sizeNum, extras);
}, "getElevation");
var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens: tokens2 }) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core4.getVariableValue)(tokens2.size["true"]);
    if (typeof val2 === "number") {
      num = val2;
    } else {
      num = 10;
    }
  } else {
    num = +val;
  }
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  const shadow = {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 },
    ...import_core4.isAndroid ? {
      elevationAndroid: 2 * height
    } : {}
  };
  return shadow;
}, "getSizedElevation");

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation
  }
};
var YStack = (0, import_core5.styled)(import_core5.Stack, {
  flexDirection: "column",
  variants
});
var XStack = (0, import_core5.styled)(import_core5.Stack, {
  flexDirection: "row",
  variants
});
var ZStack = (0, import_core5.styled)(
  YStack,
  {
    position: "relative"
  },
  {
    neverFlatten: true,
    isZStack: true
  }
);

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core6 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs8());

// ../../node_modules/@tamagui/stacks/dist/esm/variants.js
var elevate = {
  true: (_, extras) => {
    return getElevation(extras.props["size"], extras);
  }
};
var bordered = /* @__PURE__ */ __name((val, { props }) => {
  return {
    // TODO size it with size in '...size'
    borderWidth: typeof val === "number" ? val : 1,
    borderColor: "$borderColor",
    ...props.hoverTheme && {
      hoverStyle: {
        borderColor: "$borderColorHover"
      }
    },
    ...props.pressTheme && {
      pressStyle: {
        borderColor: "$borderColorPress"
      }
    },
    ...props.focusTheme && {
      focusStyle: {
        borderColor: "$borderColorFocus"
      }
    }
  };
}, "bordered");
var padded = {
  true: (_, extras) => {
    const { tokens: tokens2, props } = extras;
    return {
      padding: tokens2.space[props.size] || tokens2.space["$true"]
    };
  }
};
var radiused = {
  true: (_, extras) => {
    const { tokens: tokens2, props } = extras;
    return {
      borderRadius: tokens2.radius[props.size] || tokens2.radius["$true"]
    };
  }
};
var circular = {
  true: (_, { props, tokens: tokens2 }) => {
    const size3 = tokens2.size[props.size || "$true"];
    return {
      width: size3,
      height: size3,
      maxWidth: size3,
      maxHeight: size3,
      minWidth: size3,
      minHeight: size3,
      borderRadius: 1e5,
      padding: 0
    };
  }
};
var hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
var pressTheme = {
  true: {
    cursor: "pointer",
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
var focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var SizableStack = (0, import_core6.styled)(XStack, {
  name: "SizableStack",
  variants: {
    unstyled: {
      true: {
        hoverTheme: false,
        pressTheme: false,
        focusTheme: false,
        elevate: false,
        bordered: false
      },
      false: {
        backgroundColor: "$background",
        flexShrink: 1
      }
    },
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,
    size: {
      "...size": import_get_button_sized.getButtonSized
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core7 = require("@tamagui/core-node");
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent"
};
var themeableVariants = {
  backgrounded: {
    true: {
      backgroundColor: "$background"
    }
  },
  radiused,
  hoverTheme,
  pressTheme,
  focusTheme,
  circular,
  padded,
  elevate,
  bordered,
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
var ThemeableStack = (0, import_core7.styled)(YStack, {
  variants: themeableVariants
});

// ../../node_modules/@tamagui/portal/dist/esm/Portal.js
var React7 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var Portal = /* @__PURE__ */ __name(({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
  const contents = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    YStack,
    {
      contain: "strict",
      fullscreen: true,
      position: import_core8.isWeb ? "fixed" : "absolute",
      maxWidth: import_core8.isWeb ? "100vw" : "100%",
      maxHeight: import_core8.isWeb ? "100vh" : "100%",
      pointerEvents: "none",
      ...props
    }
  );
  const [hostElement, setHostElement] = React7.useState(null);
  (0, import_core8.useIsomorphicLayoutEffect)(() => {
    setHostElement(host);
  }, [host]);
  if (hostElement) {
    return (0, import_react_dom.createPortal)(contents, hostElement);
  }
  return null;
}, "Portal");

// ../../node_modules/@tamagui/portal/dist/esm/GorhomPortal.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core9 = require("@tamagui/core-node");
var import_react8 = __toESM(require("react"));
var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
  ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
  ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
  ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
  ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
  return ACTIONS2;
})(ACTIONS || {});
var INITIAL_STATE = {};
var registerHost = /* @__PURE__ */ __name((state, hostName) => {
  if (!(hostName in state)) {
    state[hostName] = [];
  }
  return state;
}, "registerHost");
var deregisterHost = /* @__PURE__ */ __name((state, hostName) => {
  delete state[hostName];
  return state;
}, "deregisterHost");
var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
  if (!(hostName in state)) {
    state = registerHost(state, hostName);
  }
  const index3 = state[hostName].findIndex((item) => item.name === portalName);
  if (index3 !== -1) {
    state[hostName][index3].node = node;
  } else {
    state[hostName].push({
      name: portalName,
      node
    });
  }
  return state;
}, "addUpdatePortal");
var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
  if (!(hostName in state)) {
    console.log(
      `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
    );
    return state;
  }
  const index3 = state[hostName].findIndex((item) => item.name === portalName);
  if (index3 !== -1)
    state[hostName].splice(index3, 1);
  return state;
}, "removePortal");
var reducer = /* @__PURE__ */ __name((state, action) => {
  const { type } = action;
  switch (type) {
    case 0:
      return registerHost({ ...state }, action.hostName);
    case 1:
      return deregisterHost({ ...state }, action.hostName);
    case 2:
      return addUpdatePortal(
        { ...state },
        action.hostName,
        action.portalName,
        action.node
      );
    case 3:
      return removePortal(
        { ...state },
        action.hostName,
        action.portalName
      );
    default:
      return state;
  }
}, "reducer");
var PortalStateContext = (0, import_react8.createContext)(null);
var PortalDispatchContext = (0, import_react8.createContext)(null);
var usePortalState = /* @__PURE__ */ __name((hostName) => {
  const state = (0, import_react8.useContext)(PortalStateContext);
  if (state === null) {
    throw new Error(
      "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }
  return state[hostName] || [];
}, "usePortalState");
var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
  const dispatch = (0, import_react8.useContext)(PortalDispatchContext);
  if (dispatch === null) {
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }
  const registerHost2 = (0, import_react8.useCallback)(() => {
    dispatch({
      type: 0,
      hostName
    });
  }, []);
  const deregisterHost2 = (0, import_react8.useCallback)(() => {
    dispatch({
      type: 1,
      hostName
    });
  }, []);
  const addUpdatePortal2 = (0, import_react8.useCallback)((name, node) => {
    dispatch({
      type: 2,
      hostName,
      portalName: name,
      node
    });
  }, []);
  const removePortal2 = (0, import_react8.useCallback)((name) => {
    dispatch({
      type: 3,
      hostName,
      portalName: name
    });
  }, []);
  return {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2,
    addPortal: addUpdatePortal2,
    updatePortal: addUpdatePortal2,
    removePortal: removePortal2
  };
}, "usePortal");
var PortalProviderComponent = /* @__PURE__ */ __name(({
  rootHostName = "root",
  shouldAddRootHost = true,
  children
}) => {
  const [state, dispatch] = (0, import_react8.useReducer)(reducer, INITIAL_STATE);
  const transitionDispatch = (0, import_react8.useMemo)(() => {
    const next = /* @__PURE__ */ __name((value) => {
      (0, import_react8.startTransition)(() => {
        dispatch(value);
      });
    }, "next");
    return next;
  }, [dispatch]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PortalDispatchContext.Provider, { value: transitionDispatch, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(PortalStateContext.Provider, { value: state, children: [
    children,
    shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PortalHost, { name: rootHostName })
  ] }) });
}, "PortalProviderComponent");
var PortalProvider = (0, import_react8.memo)(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var defaultRenderer = /* @__PURE__ */ __name((children) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children }), "defaultRenderer");
var PortalHostComponent = /* @__PURE__ */ __name((props) => {
  const { name, forwardProps, render = defaultRenderer } = props;
  const isServer3 = !(0, import_core9.useDidFinishSSR)();
  const state = usePortalState(name);
  const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(props.name);
  (0, import_react8.useEffect)(() => {
    if (isServer3)
      return;
    registerHost2();
    return () => {
      deregisterHost2();
    };
  }, [isServer3]);
  if (forwardProps) {
    return render(
      state.map((item) => {
        let next = item.node;
        if (forwardProps) {
          return import_react8.default.Children.map(next, (child) => {
            return import_react8.default.isValidElement(child) ? import_react8.default.cloneElement(child, { key: child.key, ...forwardProps }) : child;
          });
        }
        return next;
      })
    );
  }
  return render(state.map((item) => item.node));
}, "PortalHostComponent");
var PortalHost = (0, import_react8.memo)(PortalHostComponent);
PortalHost.displayName = "PortalHost";
var PortalComponent = /* @__PURE__ */ __name((props) => {
  const {
    name: _providedName,
    hostName,
    handleOnMount: _providedHandleOnMount,
    handleOnUnmount: _providedHandleOnUnmount,
    handleOnUpdate: _providedHandleOnUpdate,
    children
  } = props;
  const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
  const id = (0, import_react8.useId)();
  const name = _providedName || id;
  const handleOnMount = (0, import_core9.useEvent)(() => {
    if (_providedHandleOnMount) {
      _providedHandleOnMount(() => addUpdatePortal2(name, children));
    } else {
      addUpdatePortal2(name, children);
    }
  });
  const handleOnUnmount = (0, import_core9.useEvent)(() => {
    if (_providedHandleOnUnmount) {
      _providedHandleOnUnmount(() => removePortal2(name));
    } else {
      removePortal2(name);
    }
  });
  const handleOnUpdate = (0, import_core9.useEvent)(() => {
    if (_providedHandleOnUpdate) {
      _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
    } else {
      addUpdatePortal2(name, children);
    }
  });
  (0, import_core9.useIsomorphicLayoutEffect)(() => {
    handleOnMount();
    return () => {
      handleOnUnmount();
    };
  }, []);
  (0, import_react8.useEffect)(() => {
    handleOnUpdate();
  }, [children]);
  return null;
}, "PortalComponent");
var PortalItem = (0, import_react8.memo)(PortalComponent);
PortalItem.displayName = "Portal";

// ../../node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_react_remove_scroll = __toESM(require_es57());
var RemoveScroll = /* @__PURE__ */ __name((props) => {
  if (!props.children)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_remove_scroll.RemoveScroll, { ...props });
}, "RemoveScroll");
RemoveScroll.classNames = import_react_remove_scroll.RemoveScroll.classNames;

// ../../node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_core15 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/sheet/dist/esm/constants.js
var import_core10 = require("@tamagui/core-node");
var SHEET_NAME = "Sheet";
var SHEET_HANDLE_NAME = "SheetHandle";
var SHEET_OVERLAY_NAME = "SheetOverlay";
var HIDDEN_SIZE = 1e4;
var SHEET_HIDDEN_STYLESHEET = import_core10.isClient ? document.createElement("style") : null;
if (SHEET_HIDDEN_STYLESHEET) {
  document.head.appendChild(SHEET_HIDDEN_STYLESHEET);
}

// ../../node_modules/@tamagui/sheet/dist/esm/createSheet.js
var import_jsx_runtime12 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_react18 = require("react");
var import_react_native5 = require("react-native-web-lite");

// ../../node_modules/@tamagui/sheet/dist/esm/nativeSheet.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_react13 = require("react");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetContext.js
var [createSheetContext, createSheetScope] = createContextScope(SHEET_NAME);
var [SheetProvider, useSheetContext] = createSheetContext(
  SHEET_NAME,
  {}
);

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react9 = require("react");
var emptyCallbackFn = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = (0, import_react9.useState)(prop ?? defaultProp);
  const previous = (0, import_react9.useRef)(state);
  const propWins = strategy === "prop-wins" && prop !== void 0;
  const value = propWins ? prop : state;
  const onChangeCb = useEvent(onChange || idFn);
  const transitionFn = transition ? import_react9.startTransition : emptyCallbackFn;
  (0, import_react9.useEffect)(() => {
    if (prop === void 0)
      return;
    previous.current = prop;
    transitionFn(() => {
      setState(prop);
    });
  }, [prop]);
  (0, import_react9.useEffect)(() => {
    if (propWins)
      return;
    if (state !== previous.current) {
      previous.current = state;
      onChangeCb(state);
    }
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (preventUpdate)
      return;
    if (propWins) {
      const nextValue = typeof next === "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else {
      transitionFn(() => {
        setState(next);
      });
    }
  });
  return [value, setter];
}
__name(useControllableState, "useControllableState");
var idFn = /* @__PURE__ */ __name(() => {
}, "idFn");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetController.js
var import_react10 = require("react");
var useSheetController = /* @__PURE__ */ __name(() => {
  const controller = (0, import_react10.useContext)(SheetControllerContext);
  const isHidden = controller == null ? void 0 : controller.hidden;
  const isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
  return {
    controller,
    isHidden,
    isShowingNonSheet,
    disableDrag: controller == null ? void 0 : controller.disableDrag
  };
}, "useSheetController");
var SheetControllerContext = (0, import_react10.createContext)(
  null
);

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetOpenState.js
var useSheetOpenState = /* @__PURE__ */ __name((props) => {
  const { isHidden, controller } = useSheetController();
  const onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
    var _a, _b;
    (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
    (_b = props.onOpenChange) == null ? void 0 : _b.call(props, val);
  }, "onOpenChangeInternal");
  const [open, setOpen] = useControllableState({
    prop: (controller == null ? void 0 : controller.open) ?? props.open,
    defaultProp: props.defaultOpen ?? false,
    onChange: onOpenChangeInternal,
    strategy: "most-recent-wins",
    transition: true
  });
  return {
    open,
    setOpen,
    isHidden,
    controller
  };
}, "useSheetOpenState");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.js
var import_core11 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/use-constant/dist/esm/index.js
var import_react11 = require("react");
function useConstant(fn) {
  if (typeof document === "undefined") {
    return (0, import_react11.useMemo)(() => fn(), []);
  }
  const ref = (0, import_react11.useRef)();
  if (!ref.current) {
    ref.current = { v: fn() };
  }
  return ref.current.v;
}
__name(useConstant, "useConstant");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.js
var import_react12 = __toESM(require("react"));
function useSheetProviderProps(props, state, options = {}) {
  const contentRef = import_react12.default.useRef(null);
  const [frameSize, setFrameSize] = (0, import_react12.useState)(0);
  const snapPointsProp = props.snapPoints || [80];
  const snapPoints = (0, import_react12.useMemo)(
    () => props.dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(snapPointsProp), props.dismissOnSnapToBottom]
  );
  const [position_, setPositionImmediate] = useControllableState({
    prop: props.position,
    defaultProp: props.defaultPosition || (state.open ? 0 : -1),
    onChange: props.onPositionChange,
    strategy: "most-recent-wins",
    transition: true
  });
  const position = state.open === false ? -1 : position_;
  const { open } = state;
  const setPosition = (0, import_react12.useCallback)(
    (next) => {
      if (props.dismissOnSnapToBottom && next === snapPoints.length - 1) {
        state.setOpen(false);
      } else {
        setPositionImmediate(next);
      }
    },
    [props.dismissOnSnapToBottom, snapPoints.length, setPositionImmediate, state.setOpen]
  );
  if (process.env.NODE_ENV === "development") {
    if (snapPoints.some((p) => p < 0 || p > 100)) {
      console.warn(
        "\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame"
      );
    }
  }
  if (open && props.dismissOnSnapToBottom && position === snapPoints.length - 1) {
    setPositionImmediate(0);
  }
  const shouldSetPositionOpen = open && position < 0;
  (0, import_react12.useEffect)(() => {
    if (shouldSetPositionOpen) {
      setPosition(0);
    }
  }, [setPosition, shouldSetPositionOpen]);
  const driver = (0, import_core11.useAnimationDriver)();
  if (!driver) {
    throw new Error("Must set animations in tamagui.config.ts");
  }
  const scrollBridge = useConstant(() => ({
    enabled: false,
    y: 0,
    paneY: 0,
    paneMinY: 0,
    scrollStartY: -1,
    drag: () => {
    },
    release: () => {
    },
    scrollLock: false
  }));
  const removeScrollEnabled = props.forceRemoveScrollEnabled ?? (open && props.modal);
  const providerProps = {
    removeScrollEnabled,
    scrollBridge,
    modal: !!props.modal,
    open: state.open,
    setOpen: state.setOpen,
    hidden: !!state.isHidden,
    contentRef,
    frameSize,
    setFrameSize,
    dismissOnOverlayPress: props.dismissOnOverlayPress ?? true,
    dismissOnSnapToBottom: props.dismissOnSnapToBottom ?? false,
    onOverlayComponent: options.onOverlayComponent,
    scope: props.__scopeSheet,
    position,
    snapPoints,
    setPosition,
    setPositionImmediate,
    onlyShowFrame: false
  };
  return providerProps;
}
__name(useSheetProviderProps, "useSheetProviderProps");

// ../../node_modules/@tamagui/sheet/dist/esm/nativeSheet.js
var nativeSheets = {
  ios: null
};
function getNativeSheet(platform2) {
  return nativeSheets[platform2];
}
__name(getNativeSheet, "getNativeSheet");
function setupNativeSheet(platform2, Implementation) {
  if (platform2 === "ios") {
    nativeSheets[platform2] = (props) => {
      const state = useSheetOpenState(props);
      const providerProps = useSheetProviderProps(props, state);
      const { open, setOpen } = state;
      const ref = (0, import_react13.useRef)();
      (0, import_react13.useEffect)(() => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.setVisibility(open);
      }, [open]);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SheetProvider, { ...providerProps, onlyShowFrame: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Implementation, { ref, onModalDismiss: () => setOpen(false), children: props.children }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          YStack,
          {
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            width: 0,
            height: 0,
            children: props.children
          }
        )
      ] }) });
    };
  }
}
__name(setupNativeSheet, "setupNativeSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_core12 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/use-keyboard-visible/dist/esm/useKeyboardVisible.js
var import_react14 = require("react");
var import_react_native2 = require("react-native-web-lite");
var useKeyboardVisible = /* @__PURE__ */ __name(() => {
  const [isKeyboardVisible, setKeyboardVisible] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    const keyboardDidShowListener = import_react_native2.Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = import_react_native2.Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return isKeyboardVisible;
}, "useKeyboardVisible");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var import_react16 = require("react");
var import_react_native3 = require("react-native-web-lite");

// ../../node_modules/@tamagui/sheet/dist/esm/contexts.js
var import_react15 = require("react");
var ParentSheetContext = (0, import_react15.createContext)({
  zIndex: 1e5
});
var SheetInsideSheetContext = (0, import_react15.createContext)(null);

// ../../node_modules/@tamagui/sheet/dist/esm/helpers.js
function resisted(y, minY, maxOverflow = 25) {
  if (y < minY) {
    const past = minY - y;
    const pctPast = Math.min(maxOverflow, past) / maxOverflow;
    const diminishBy = 1.1 - Math.pow(0.1, pctPast);
    const extra = -diminishBy * maxOverflow;
    return minY + extra;
  }
  return y;
}
__name(resisted, "resisted");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var SheetImplementationCustom = (0, import_core12.themeable)(
  (0, import_react16.forwardRef)(/* @__PURE__ */ __name(function SheetImplementationCustom2(props, forwardedRef) {
    const parentSheet = (0, import_react16.useContext)(ParentSheetContext);
    const {
      animationConfig,
      modal = false,
      zIndex: zIndex2 = parentSheet.zIndex + 1,
      moveOnKeyboardChange = false,
      portalProps
    } = props;
    const keyboardIsVisible = useKeyboardVisible();
    const state = useSheetOpenState(props);
    const [overlayComponent, setOverlayComponent] = (0, import_react16.useState)(null);
    const providerProps = useSheetProviderProps(props, state, {
      onOverlayComponent: setOverlayComponent
    });
    const { frameSize, setFrameSize, snapPoints, position, setPosition, scrollBridge } = providerProps;
    const { open, controller, isHidden } = state;
    const sheetRef = (0, import_react16.useRef)(null);
    const ref = useComposedRefs(forwardedRef, sheetRef);
    const [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react16.useState)(false);
    const shouldHideParentSheet = !import_core12.isWeb && modal && isShowingInnerSheet;
    const parentSheetContext = (0, import_react16.useContext)(SheetInsideSheetContext);
    const onInnerSheet = (0, import_react16.useCallback)((hasChild) => {
      setIsShowingInnerSheet(hasChild);
    }, []);
    const maxSnapPoint = snapPoints.reduce((prev, cur) => Math.max(prev, cur));
    const screenSize = frameSize / (maxSnapPoint / 100);
    const positions = (0, import_react16.useMemo)(
      () => snapPoints.map((point) => getPercentSize(point, screenSize)),
      [frameSize, snapPoints]
    );
    const driver = (0, import_core12.useAnimationDriver)();
    const { useAnimatedNumber, useAnimatedNumberStyle, useAnimatedNumberReaction } = driver;
    const AnimatedView = driver["NumberView"] ?? driver.View;
    (0, import_core12.useIsomorphicLayoutEffect)(() => {
      if (!(parentSheetContext && open))
        return;
      parentSheetContext(true);
      return () => {
        parentSheetContext(false);
      };
    }, [parentSheetContext, open]);
    const nextParentContext = (0, import_react16.useMemo)(
      () => ({
        zIndex: zIndex2
      }),
      [zIndex2]
    );
    const animatedNumber = useAnimatedNumber(HIDDEN_SIZE);
    const at = (0, import_react16.useRef)(0);
    useAnimatedNumberReaction(
      {
        value: animatedNumber,
        hostRef: sheetRef
      },
      (value) => {
        if (!driver.isReactNative)
          return;
        at.current = value;
        scrollBridge.paneY = value;
      }
    );
    function stopSpring() {
      animatedNumber.stop();
      if (scrollBridge.onFinishAnimate) {
        scrollBridge.onFinishAnimate();
        scrollBridge.onFinishAnimate = void 0;
      }
    }
    __name(stopSpring, "stopSpring");
    const animateTo = (0, import_core12.useEvent)((position2) => {
      const current = animatedNumber.getValue();
      if (isHidden && open)
        return;
      if (!current)
        return;
      if (frameSize === 0)
        return;
      const hiddenValue = frameSize === 0 ? HIDDEN_SIZE : screenSize;
      const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
      if (at.current === toValue)
        return;
      stopSpring();
      if (isHidden) {
        animatedNumber.setValue(toValue, {
          type: "timing",
          duration: 0
        });
        at.current = toValue;
        return;
      }
      const overshootClamping = at.current === HIDDEN_SIZE;
      animatedNumber.setValue(toValue, {
        ...animationConfig,
        type: "spring",
        overshootClamping
      });
    });
    (0, import_core12.useIsomorphicLayoutEffect)(() => {
      animateTo(position);
    }, [isHidden, frameSize, position, animateTo]);
    const disableDrag = props.disableDrag ?? (controller == null ? void 0 : controller.disableDrag);
    const themeName = (0, import_core12.useThemeName)();
    const panResponder = (0, import_react16.useMemo)(
      () => {
        if (disableDrag)
          return;
        if (!frameSize)
          return;
        if (isShowingInnerSheet)
          return;
        const minY = positions[0];
        scrollBridge.paneMinY = minY;
        let startY = at.current;
        function makeUnselectable(val) {
          if (!SHEET_HIDDEN_STYLESHEET)
            return;
          if (!val) {
            SHEET_HIDDEN_STYLESHEET.innerText = "";
          } else {
            SHEET_HIDDEN_STYLESHEET.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }";
          }
        }
        __name(makeUnselectable, "makeUnselectable");
        const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
          isExternalDrag = false;
          previouslyScrolling = false;
          makeUnselectable(false);
          const at2 = dragAt + startY;
          const end = at2 + frameSize * vy * 0.2;
          let closestPoint = 0;
          let dist = Infinity;
          for (let i = 0; i < positions.length; i++) {
            const position2 = positions[i];
            const curDist = end > position2 ? end - position2 : position2 - end;
            if (curDist < dist) {
              dist = curDist;
              closestPoint = i;
            }
          }
          setPosition(closestPoint);
          animateTo(closestPoint);
        }, "release");
        const finish = /* @__PURE__ */ __name((_e, state2) => {
          release({
            vy: state2.vy,
            dragAt: state2.dy
          });
        }, "finish");
        let previouslyScrolling = false;
        const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
          const isScrolled = scrollBridge.y !== 0;
          const isDraggingUp = dy < 0;
          const isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
          if (isScrolled) {
            previouslyScrolling = true;
            return false;
          }
          if (isNearTop) {
            if (!isScrolled && isDraggingUp) {
              return false;
            }
          }
          return Math.abs(dy) > 5;
        }, "onMoveShouldSet");
        const grant = /* @__PURE__ */ __name(() => {
          makeUnselectable(true);
          stopSpring();
          startY = at.current;
        }, "grant");
        let isExternalDrag = false;
        scrollBridge.drag = (dy) => {
          if (!isExternalDrag) {
            isExternalDrag = true;
            grant();
          }
          const to = dy + startY;
          animatedNumber.setValue(resisted(to, minY), { type: "direct" });
        };
        scrollBridge.release = release;
        return import_react_native3.PanResponder.create({
          onMoveShouldSetPanResponder: onMoveShouldSet,
          onPanResponderGrant: grant,
          onPanResponderMove: (_e, { dy }) => {
            const toFull = dy + startY;
            const to = resisted(toFull, minY);
            animatedNumber.setValue(to, { type: "direct" });
          },
          onPanResponderEnd: finish,
          onPanResponderTerminate: finish,
          onPanResponderRelease: finish
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]
    );
    const handleAnimationViewLayout = (0, import_react16.useCallback)(
      (e) => {
        var _a;
        let next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
        if (import_core12.isWeb && import_core12.isTouchable && !open) {
          next += 100;
        }
        if (!next)
          return;
        setFrameSize(next);
      },
      [keyboardIsVisible]
    );
    const animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
      "worklet";
      const translateY = frameSize === 0 ? HIDDEN_SIZE : val;
      return {
        transform: [{ translateY }]
      };
    });
    const sizeBeforeKeyboard = (0, import_react16.useRef)(null);
    (0, import_react16.useEffect)(() => {
      if (import_core12.isWeb || !moveOnKeyboardChange)
        return;
      const keyboardDidShowListener = import_react_native3.Keyboard.addListener("keyboardDidShow", (e) => {
        if (sizeBeforeKeyboard.current !== null)
          return;
        sizeBeforeKeyboard.current = animatedNumber.getValue();
        animatedNumber.setValue(
          Math.max(animatedNumber.getValue() - e.endCoordinates.height, 0)
        );
      });
      const keyboardDidHideListener = import_react_native3.Keyboard.addListener("keyboardDidHide", () => {
        if (sizeBeforeKeyboard.current === null)
          return;
        animatedNumber.setValue(sizeBeforeKeyboard.current);
        sizeBeforeKeyboard.current = null;
      });
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [moveOnKeyboardChange]);
    const [opacity, setOpacity] = (0, import_react16.useState)(open ? 1 : 0);
    if (open && opacity === 0) {
      setOpacity(1);
    }
    (0, import_react16.useEffect)(() => {
      if (!open) {
        const tm = setTimeout(() => {
          setOpacity(0);
        }, 400);
        return () => {
          clearTimeout(tm);
        };
      }
    }, [open]);
    const contents = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ParentSheetContext.Provider, { value: nextParentContext, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(SheetProvider, { ...providerProps, children: [
      shouldHideParentSheet ? null : overlayComponent,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        AnimatedView,
        {
          ref,
          ...panResponder == null ? void 0 : panResponder.panHandlers,
          onLayout: handleAnimationViewLayout,
          pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
          animation: props.animation,
          style: [
            {
              position: "absolute",
              zIndex: zIndex2,
              width: "100%",
              height: `${maxSnapPoint}%`,
              opacity
            },
            animatedStyle
          ],
          children: props.children
        }
      )
    ] }) });
    const adaptContext = (0, import_react16.useContext)(AdaptParentContext);
    if (modal) {
      const modalContents = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Portal, { zIndex: zIndex2, ...portalProps, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_core12.Theme, { forceClassName: true, name: themeName, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AdaptParentContext.Provider, { value: adaptContext, children: contents }) }) });
      if (import_core12.isWeb) {
        return modalContents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SheetInsideSheetContext.Provider, { value: onInnerSheet, children: modalContents });
    }
    return contents;
  }, "SheetImplementationCustom2"))
);
function getPercentSize(point, screenSize) {
  if (!screenSize)
    return 0;
  if (point === void 0) {
    console.warn("No snapPoint");
    return 0;
  }
  const pct = point / 100;
  const next = Math.round(screenSize - pct * screenSize);
  return next;
}
__name(getPercentSize, "getPercentSize");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_core13 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js
var import_web3 = require("@tamagui/core-node");
var import_react_native4 = require("react-native-web-lite");
(0, import_web3.setupReactNative)({
  ScrollView: import_react_native4.ScrollView
});
var ScrollView = (0, import_web3.styled)(import_react_native4.ScrollView, {
  name: "ScrollView",
  scrollEnabled: true,
  variants: {
    fullscreen: {
      true: fullscreenStyle
    }
  }
});

// ../../node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_react17 = require("react");
var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
var SheetScrollView = (0, import_react17.forwardRef)(
  ({ __scopeSheet, children, ...props }, ref) => {
    const { scrollBridge, position, snapPoints, frameSize, open } = useSheetContext(
      SHEET_SCROLL_VIEW_NAME,
      __scopeSheet
    );
    const scrollRef = (0, import_react17.useRef)(null);
    const percentOpened = snapPoints[position] ?? 0;
    const [percentToPadBottom, setPercentToPadBottom] = (0, import_react17.useState)(0);
    const next = 100 - percentOpened;
    if (open && next !== percentToPadBottom) {
      setPercentToPadBottom(next);
    }
    const state = (0, import_react17.useRef)({
      lastPageY: 0,
      dragAt: 0,
      dys: [],
      // store a few recent dys to get velocity on release
      isScrolling: false,
      isDragging: false
    });
    const release = /* @__PURE__ */ __name(() => {
      if (!state.current.isDragging) {
        return;
      }
      state.current.isDragging = false;
      scrollBridge.scrollStartY = -1;
      state.current.isScrolling = false;
      let vy = 0;
      if (state.current.dys.length) {
        const recentDys = state.current.dys.slice(-10);
        const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
        const avgDy = dist / recentDys.length;
        vy = avgDy * 0.04;
      }
      state.current.dys = [];
      scrollBridge.release({
        dragAt: state.current.dragAt,
        vy
      });
    }, "release");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      ScrollView,
      {
        ref: (0, import_core13.composeRefs)(scrollRef, ref),
        flex: 1,
        scrollEventThrottle: 8,
        onScroll: (e) => {
          const { y } = e.nativeEvent.contentOffset;
          scrollBridge.y = y;
          if (y > 0) {
            scrollBridge.scrollStartY = -1;
          }
        },
        onStartShouldSetResponder: () => {
          scrollBridge.scrollStartY = -1;
          state.current.isDragging = true;
          return true;
        },
        onMoveShouldSetResponder: () => false,
        onResponderRelease: release,
        className: "_ovs-contain",
        ...props,
        children: [
          (0, import_react17.useMemo)(() => children, [children]),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_core13.Stack, { height: percentToPadBottom / 100 * frameSize, width: 0 })
        ]
      }
    );
  }
);

// ../../node_modules/@tamagui/sheet/dist/esm/createSheet.js
function createSheet({ Handle: Handle2, Frame: Frame2, Overlay: Overlay2 }) {
  const SheetHandle = Handle2.extractable(
    ({ __scopeSheet, ...props }) => {
      const context = useSheetContext(SHEET_HANDLE_NAME, __scopeSheet);
      if (context.onlyShowFrame) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        Handle2,
        {
          onPress: () => {
            const max3 = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
            const nextPos = (context.position + 1) % max3;
            context.setPosition(nextPos);
          },
          open: context.open,
          ...props
        }
      );
    }
  );
  const SheetOverlay = Overlay2.extractable(
    (propsIn) => {
      const { __scopeSheet, ...props } = propsIn;
      const context = useSheetContext(SHEET_OVERLAY_NAME, __scopeSheet);
      const element = (0, import_react18.useMemo)(
        () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Overlay2,
          {
            open: context.open && !context.hidden,
            ...props,
            onPress: (0, import_core14.mergeEvent)(
              props.onPress,
              context.dismissOnOverlayPress ? () => {
                context.setOpen(false);
              } : void 0
            )
          }
        ),
        [
          context.open,
          props,
          context.hidden,
          props.onPress,
          context.dismissOnOverlayPress
        ]
      );
      (0, import_react18.useLayoutEffect)(() => {
        var _a;
        (_a = context.onOverlayComponent) == null ? void 0 : _a.call(context, element);
      }, [element]);
      if (context.onlyShowFrame) {
        return null;
      }
      return null;
    }
  );
  const SheetFrame = Frame2.extractable(
    (0, import_react18.forwardRef)(
      ({
        __scopeSheet,
        children,
        ...props
      }, forwardedRef) => {
        const context = useSheetContext(SHEET_NAME, __scopeSheet);
        const composedContentRef = useComposedRefs(forwardedRef, context.contentRef);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            RemoveScroll,
            {
              forwardProps: true,
              enabled: context.removeScrollEnabled,
              allowPinchZoom: true,
              shards: [context.contentRef],
              removeScrollBar: false,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Frame2, { ref: composedContentRef, ...props, children })
            }
          ),
          !props.disableHideBottomOverflow && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Frame2,
            {
              ...props,
              children: null,
              position: "absolute",
              bottom: 0,
              maxHeight: 300,
              left: 0,
              right: 0,
              borderRadius: 0,
              shadowOpacity: 0
            }
          )
        ] });
      }
    )
  );
  const Sheet2 = (0, import_react18.forwardRef)(/* @__PURE__ */ __name(function Sheet22(props, ref) {
    const hydrated = (0, import_core14.useDidFinishSSR)();
    const { isShowingNonSheet } = useSheetController();
    let SheetImplementation = SheetImplementationCustom;
    if (props.native && import_react_native5.Platform.OS === "ios") {
      if (process.env.TAMAGUI_TARGET === "native") {
        const impl = getNativeSheet("ios");
        if (impl) {
          SheetImplementation = impl;
        }
      }
    }
    if (isShowingNonSheet || !hydrated) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetImplementation, { ref, ...props });
  }, "Sheet2"));
  const components = {
    Frame: SheetFrame,
    Overlay: SheetOverlay,
    Handle: SheetHandle,
    ScrollView: SheetScrollView
  };
  const Controlled = (0, import_core14.withStaticProperties)(Sheet2, components);
  return (0, import_core14.withStaticProperties)(Sheet2, {
    ...components,
    Controlled
  });
}
__name(createSheet, "createSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/Sheet.js
var Handle = (0, import_core15.styled)(XStack, {
  name: SHEET_HANDLE_NAME,
  variants: {
    open: {
      true: {
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        height: 10,
        borderRadius: 100,
        backgroundColor: "$background",
        zIndex: 10,
        marginHorizontal: "35%",
        marginBottom: "$2",
        opacity: 0.5,
        hoverStyle: {
          opacity: 0.7
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Overlay = (0, import_core15.styled)(ThemeableStack, {
  name: SHEET_OVERLAY_NAME,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        backgrounded: true,
        zIndex: 1e5
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Frame = (0, import_core15.styled)(YStack, {
  name: SHEET_NAME,
  variants: {
    unstyled: {
      false: {
        flex: 1,
        backgroundColor: "$background",
        borderTopLeftRadius: "$true",
        borderTopRightRadius: "$true",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Sheet = createSheet({
  Frame,
  Handle,
  Overlay
});
var SheetOverlayFrame = Overlay;
var SheetHandleFrame = Handle;

// ../../node_modules/@tamagui/sheet/dist/esm/useSheet.js
var useSheet = /* @__PURE__ */ __name(() => useSheetContext("", void 0), "useSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetController.js
var import_jsx_runtime13 = require("react/jsx-runtime");
var import_core16 = require("@tamagui/core-node");
var import_react19 = require("react");
var SheetController = /* @__PURE__ */ __name(({
  children,
  onOpenChange: onOpenChangeProp,
  ...value
}) => {
  const onOpenChange = (0, import_core16.useEvent)(onOpenChangeProp);
  const memoValue = (0, import_react19.useMemo)(
    () => ({
      open: value.open,
      hidden: value.hidden,
      disableDrag: value.disableDrag,
      onOpenChange
    }),
    [onOpenChange, value.open, value.hidden, value.disableDrag]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetControllerContext.Provider, { value: memoValue, children });
}, "SheetController");

// ../../node_modules/@tamagui/text/dist/esm/SizableText.js
var import_get_font_sized = __toESM(require_cjs9());
var import_web4 = require("@tamagui/core-node");
var SizableText = (0, import_web4.styled)(import_web4.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: import_get_font_sized.getFontSized
  },
  defaultVariants: {
    size: "$true"
  }
});

// ../../node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_web5 = require("@tamagui/core-node");
var Paragraph = (0, import_web5.styled)(SizableText, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true"
});

// ../../node_modules/@tamagui/text/dist/esm/Headings.js
var import_web6 = require("@tamagui/core-node");
var Heading = (0, import_web6.styled)(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
var H1 = (0, import_web6.styled)(Heading, {
  name: "H1",
  tag: "h1",
  size: "$10"
});
var H2 = (0, import_web6.styled)(Heading, {
  name: "H2",
  tag: "h2",
  size: "$9"
});
var H3 = (0, import_web6.styled)(Heading, {
  name: "H3",
  tag: "h3",
  size: "$8"
});
var H4 = (0, import_web6.styled)(Heading, {
  name: "H4",
  tag: "h4",
  size: "$7"
});
var H5 = (0, import_web6.styled)(Heading, {
  name: "H5",
  tag: "h5",
  size: "$6"
});
var H6 = (0, import_web6.styled)(Heading, {
  name: "H6",
  tag: "h6",
  size: "$5"
});

// ../../node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime14 = require("react/jsx-runtime");
var import_react20 = __toESM(require("react"));
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size: size3,
    noTextWrap,
    color: color2,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle
  } = propsIn;
  if (noTextWrap || !children) {
    return [children];
  }
  const allChildren = import_react20.default.Children.toArray(children);
  const nextChildren = [];
  let lastIsString = false;
  const props = {
    ...extraProps
  };
  if (color2)
    props.color = color2;
  if (fontFamily)
    props.fontFamily = fontFamily;
  if (fontSize)
    props.fontSize = fontSize;
  if (fontWeight)
    props.fontWeight = fontWeight;
  if (letterSpacing)
    props.letterSpacing = letterSpacing;
  if (textAlign)
    props.textAlign = textAlign;
  if (size3)
    props.size = size3;
  if (fontStyle)
    props.fontStyle = fontStyle;
  function concatStringChildren() {
    if (!lastIsString)
      return;
    const index3 = nextChildren.length - 1;
    const childrenStrings = nextChildren[index3];
    nextChildren[index3] = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TextComponent, { ...props, ...textProps, children: childrenStrings }, index3);
  }
  __name(concatStringChildren, "concatStringChildren");
  for (const child of allChildren) {
    const last = nextChildren[nextChildren.length - 1];
    const isString = typeof child === "string";
    if (isString) {
      if (lastIsString) {
        last.push(child);
      } else {
        nextChildren.push([child]);
      }
    } else {
      concatStringChildren();
      nextChildren.push(child);
    }
    lastIsString = isString;
  }
  concatStringChildren();
  return nextChildren;
}
__name(wrapChildrenInText, "wrapChildrenInText");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var React11 = __toESM(require("react"));
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var TRIGGER_NAME = "DialogTrigger";
var DialogTriggerFrame = (0, import_core17.styled)(YStack, {
  name: TRIGGER_NAME
});
var DialogTrigger = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogTriggerFrame,
      {
        tag: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: (0, import_core17.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider2, usePortalContext] = createDialogContext(
  PORTAL_NAME,
  {
    forceMount: void 0
  }
);
var DialogPortalFrame = (0, import_core17.styled)(YStack, {
  variants: {
    unstyled: {
      false: {
        alignItems: "center",
        justifyContent: "center",
        fullscreen: true,
        zIndex: 1e5,
        ...import_core17.isWeb && {
          maxHeight: "100vh",
          position: "fixed"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var DialogPortalItem = /* @__PURE__ */ __name((props) => {
  const themeName = (0, import_core17.useThemeName)();
  const context = useDialogContext(PORTAL_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalItem, { hostName: props.hostName, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItemContent, { ...props, themeName, context }) });
}, "DialogPortalItem");
function DialogPortalItemContent(props) {
  const {
    __scopeDialog,
    children,
    context,
    themeName,
    space: space2,
    spaceDirection,
    separator
  } = props;
  let childrenSpaced = children;
  if (space2 || separator) {
    childrenSpaced = (0, import_core17.spacedChildren)({
      children,
      separator,
      space: space2,
      direction: spaceDirection
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogProvider, { scope: __scopeDialog, ...context, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_core17.Theme, { name: themeName, children: childrenSpaced }) });
}
__name(DialogPortalItemContent, "DialogPortalItemContent");
var DialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeDialog, forceMount, children, ...frameProps } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  const isShowing = forceMount || context.open;
  const [isFullyHidden, setIsFullyHidden] = React11.useState(!isShowing);
  if (isShowing && isFullyHidden) {
    setIsFullyHidden(false);
  }
  const contents = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    AnimatePresence,
    {
      onExitComplete: () => {
        setIsFullyHidden(true);
      },
      children: isShowing ? children : null
    }
  );
  const isSheet = useShowDialogSheet(context);
  if (isSheet) {
    return children;
  }
  if (context.modal) {
    if (isFullyHidden) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItem, { __scopeDialog, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalProvider2, { scope: __scopeDialog, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalFrame, { pointerEvents: isShowing ? "auto" : "none", ...frameProps, children: contents }) }) });
  }
  return contents;
}, "DialogPortal");
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlayFrame = (0, import_core17.styled)(Overlay, {
  name: OVERLAY_NAME
});
var DialogOverlay = DialogOverlayFrame.extractable(
  React11.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...overlayProps } = props;
      const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
      const showSheet = useShowDialogSheet(context);
      if (!forceMount) {
        if (!context.modal || showSheet) {
          return null;
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogOverlayImpl, { context, ...overlayProps, ref: forwardedRef });
    }
  )
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React11.forwardRef(
  (props, forwardedRef) => {
    const { context, ...overlayProps } = props;
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        DialogOverlayFrame,
        {
          "data-state": getState(context.open),
          pointerEvents: context.open ? "auto" : "none",
          ...overlayProps,
          ref: forwardedRef
        }
      )
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContentFrame = (0, import_core17.styled)(ThemeableStack, {
  name: CONTENT_NAME,
  tag: "dialog",
  variants: {
    size: {
      "...size": (val, extras) => {
        return {};
      }
    },
    unstyled: {
      false: {
        position: "relative",
        backgrounded: true,
        padded: true,
        radiused: true,
        elevate: true,
        zIndex: 1e5
      }
    }
  },
  defaultVariants: {
    size: "$true",
    unstyled: false
  }
});
var DialogContent = DialogContentFrame.extractable(
  React11.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = useDialogContext(CONTENT_NAME, __scopeDialog);
      const contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogContentModal, { context, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogContentNonModal, { context, ...contentProps, ref: forwardedRef });
      if (!import_core17.isWeb || context.disableRemoveScroll) {
        return contents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        RemoveScroll,
        {
          forwardProps: true,
          enabled: context.open,
          allowPinchZoom: context.allowPinchZoom,
          shards: [context.contentRef],
          removeScrollBar: false,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "_dsp_contents", children: contents })
        }
      );
    }
  )
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React11.forwardRef(
  ({ children, context, ...props }, forwardedRef) => {
    const contentRef = React11.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    if (import_core17.isWeb) {
      React11.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden.hideOthers)(content);
      }, [context.open]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentImpl,
      {
        ...props,
        context,
        ref: composedRefs,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, import_core17.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: (0, import_core17.composeEventHandlers)(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event["detail"].originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick)
              event.preventDefault();
          }
        ),
        onFocusOutside: (0, import_core17.composeEventHandlers)(
          props.onFocusOutside,
          (event) => event.preventDefault()
        ),
        children
      }
    );
  }
);
var DialogContentNonModal = React11.forwardRef(
  (props, forwardedRef) => {
    const hasInteractedOutsideRef = React11.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) {
              (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
            }
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented)
            hasInteractedOutsideRef.current = true;
          const target = event.target;
          const trigger = props.context.triggerRef.current;
          if (!(trigger instanceof HTMLElement))
            return;
          const targetIsTrigger = trigger.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
        }
      }
    );
  }
);
var DialogContentImpl = React11.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      context,
      ...contentProps
    } = props;
    const contentRef = React11.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const showSheet = useShowDialogSheet(context);
    const contents = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentFrame,
      {
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": getState(context.open),
        ...contentProps
      }
    );
    if (showSheet) {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItem, { hostName: getSheetContentsName(context), children: contentProps.children });
    }
    if (!import_core17.isWeb) {
      return contents;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_focus_scope.FocusScope,
        {
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Dismissable,
            {
              disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
              forceUnmount: !context.open,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside,
              onInteractOutside,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false),
              children: contents
            }
          )
        }
      ),
      process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          DescriptionWarning,
          {
            contentRef,
            descriptionId: context.descriptionId
          }
        )
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitleFrame = (0, import_core17.styled)(H2, {
  name: TITLE_NAME
});
var DialogTitle = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogTitleFrame, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DialogDescriptionFrame = (0, import_core17.styled)(Paragraph, {
  name: "DialogDescription"
});
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogDescriptionFrame,
      {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
      }
    );
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogCloseFrame = (0, import_core17.styled)(YStack, {
  name: CLOSE_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        zIndex: 100
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var DialogClose = DialogCloseFrame.styleable(
  (props, forwardedRef) => {
    const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog, {
      warn: false,
      fallback: {}
    });
    const isSheet = useShowDialogSheet(context);
    if (isSheet && !displayWhenAdapted) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogCloseFrame,
      {
        accessibilityLabel: "Dialog Close",
        ...closeProps,
        ref: forwardedRef,
        onPress: (0, import_core17.composeEventHandlers)(
          props.onPress,
          () => context.onOpenChange(false)
        )
      }
    );
  }
);
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [DialogWarningProvider, useWarningContext] = createContext3(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
  if (process.env.NODE_ENV === "development") {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.`;
    React11.useEffect(() => {
      if (!import_core17.isWeb)
        return;
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, titleId]);
  }
  return null;
}, "TitleWarning");
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = /* @__PURE__ */ __name(({
  contentRef,
  descriptionId
}) => {
  if (process.env.NODE_ENV === "development") {
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    React11.useEffect(() => {
      if (!import_core17.isWeb)
        return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement)) {
        return;
      }
      const describedById = contentNode.getAttribute("aria-describedby");
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, contentRef, descriptionId]);
  }
  return null;
}, "DescriptionWarning");
var Dialog = (0, import_core17.withStaticProperties)(
  React11.forwardRef(/* @__PURE__ */ __name(function Dialog2(props, ref) {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      modal = true,
      allowPinchZoom = false,
      disableRemoveScroll = false
    } = props;
    const baseId = React11.useId();
    const scopeId = `scope-${baseId}`;
    const contentId = `content-${baseId}`;
    const titleId = `title-${baseId}`;
    const descriptionId = `description-${baseId}`;
    const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
    const sheetContentsName = getSheetContentsName({ scopeKey, contentId });
    const triggerRef = React11.useRef(null);
    const contentRef = React11.useRef(null);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    const onOpenToggle = React11.useCallback(() => {
      setOpen((prevOpen) => !prevOpen);
    }, [setOpen]);
    const context = {
      scope: __scopeDialog,
      scopeKey,
      triggerRef,
      contentRef,
      contentId,
      titleId,
      descriptionId,
      open,
      onOpenChange: setOpen,
      onOpenToggle,
      modal,
      allowPinchZoom
    };
    const { when, AdaptProvider } = useAdaptParent({
      Contents: React11.useCallback(
        (props2) => {
          return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalHost, { forwardProps: props2, name: sheetContentsName });
        },
        [sheetContentsName]
      )
    });
    React11.useImperativeHandle(
      ref,
      () => ({
        open: setOpen
      }),
      [setOpen]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogProvider,
      {
        ...context,
        sheetBreakpoint: when,
        disableRemoveScroll,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogSheetController, { onOpenChange: setOpen, __scopeDialog, children })
      }
    ) });
  }, "Dialog2")),
  {
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    Sheet: Sheet.Controlled,
    Adapt
  }
);
var SHEET_CONTENTS_NAME = "DialogSheetContents";
var DialogSheetContents = /* @__PURE__ */ __name(({
  name,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalHost, { forwardProps: props, name });
}, "DialogSheetContents");
DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
var getSheetContentsName = /* @__PURE__ */ __name(({
  scopeKey,
  contentId
}) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
var DialogSheetController = /* @__PURE__ */ __name((props) => {
  const context = useDialogContext("DialogSheetController", props.__scopeDialog);
  const showSheet = useShowDialogSheet(context);
  const breakpointActive = useSheetBreakpointActive(context);
  const getShowSheet = (0, import_core17.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        if (getShowSheet()) {
          props.onOpenChange(val);
        }
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "DialogSheetController");
var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
  const media = (0, import_core17.useMedia)();
  if (!context.sheetBreakpoint)
    return false;
  if (context.sheetBreakpoint === true)
    return true;
  return media[context.sheetBreakpoint];
}, "useSheetBreakpointActive");
var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive(context);
  return context.open === false ? false : breakpointActive;
}, "useShowDialogSheet");

// ../../node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var React12 = __toESM(require("react"));
var import_react_native6 = require("react-native-web-lite");
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var TRIGGER_NAME2 = "AlertDialogTrigger";
var NativeAlertDialogTriggerFrame = (0, import_core18.styled)(YStack, {
  name: "DialogTrigger"
});
var AlertDialogTrigger = React12.forwardRef(
  (props, forwardedRef) => {
    if (props["__native"]) {
      const { __native, onPress, __onPress, ...rest } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        NativeAlertDialogTriggerFrame,
        {
          ...rest,
          onPress: (0, import_core18.composeEventHandlers)(onPress, __onPress)
        }
      );
    }
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTrigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME2 = "AlertDialogPortal";
var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogPortal, { ...dialogScope, ...portalProps });
}, "AlertDialogPortal");
AlertDialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlayFrame = (0, import_core18.styled)(DialogOverlayFrame, {
  name: OVERLAY_NAME2
});
var AlertDialogOverlay = AlertDialogOverlayFrame.extractable(
  React12.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAlertDialog, ...overlayProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogOverlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
    }
  )
);
AlertDialogOverlay.displayName = OVERLAY_NAME2;
var CONTENT_NAME2 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME2);
var AlertDialogContent = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = React12.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React12.useRef(null);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      DialogWarningProvider,
      {
        contentName: CONTENT_NAME2,
        titleName: TITLE_NAME2,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          DialogContent,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: (0, import_core18.composeEventHandlers)(
              contentProps.onOpenAutoFocus,
              (event) => {
                var _a;
                event.preventDefault();
                if (import_core18.isWeb) {
                  (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
                }
              }
            ),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_core18.Slottable, { children }),
              process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DescriptionWarning2, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME2;
var TITLE_NAME2 = "AlertDialogTitle";
var AlertDialogTitle = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME2;
var DESCRIPTION_NAME2 = "AlertDialogDescription";
var AlertDialogDescription = React12.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogDescription, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME2;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogClose, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogClose, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning2 = /* @__PURE__ */ __name(({ contentRef }) => {
  if (process.env.NODE_ENV === "development") {
    React12.useEffect(() => {
      var _a;
      if (!import_core18.isWeb)
        return;
      const hasDescription = document.getElementById(
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
      );
      if (!hasDescription) {
        console.warn(`\`${CONTENT_NAME2}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME2}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME2}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
      }
    }, [contentRef]);
  }
  return null;
}, "DescriptionWarning");
var AlertDialogInner = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, native, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  if (process.env.TAMAGUI_TARGET === "native") {
    const [open, setOpen] = useControllableState({
      prop: props.open,
      defaultProp: props.defaultOpen || false,
      onChange: props.onOpenChange,
      transition: true
    });
    let triggerElement = null;
    let title = "";
    let description = "";
    const buttons = [];
    forEachChildDeep(React12.Children.toArray(props.children), (child) => {
      if (!React12.isValidElement(child))
        return false;
      const name = (0, import_core18.isTamaguiElement)(child) ? child.type.staticConfig.componentName : child.type["displayName"];
      switch (name) {
        case TRIGGER_NAME2: {
          triggerElement = React12.cloneElement(child, {
            __native: true
          });
          return false;
        }
        case TITLE_NAME2: {
          title = getStringChildren(child);
          return false;
        }
        case DESCRIPTION_NAME2: {
          description = getStringChildren(child);
          return false;
        }
        case ACTION_NAME:
        case CANCEL_NAME: {
          const style = name === ACTION_NAME ? "default" : "cancel";
          const text = getStringChildren(child);
          const onPress = /* @__PURE__ */ __name(() => {
            var _a;
            const childProps = child.props;
            (_a = childProps == null ? void 0 : childProps.onPress) == null ? void 0 : _a.call(childProps, { native: true });
            setOpen(false);
          }, "onPress");
          buttons.push({
            style,
            text,
            // @ts-ignore
            onPress
          });
          return false;
        }
        default: {
          return true;
        }
      }
    });
    (0, import_core18.useIsomorphicLayoutEffect)(() => {
      if (!open || !native)
        return;
      if (title || description) {
        import_react_native6.Alert.alert(title, description, buttons);
      }
    }, [native, open]);
    if (native) {
      return React12.cloneElement(triggerElement, {
        __onPress: () => {
          setOpen(true);
        }
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Dialog, { ...dialogScope, ...alertDialogProps, modal: true });
}, "AlertDialogInner");
function forEachChildDeep(children, onChild) {
  for (const child of children) {
    if (!React12.isValidElement(child))
      continue;
    if (!onChild(child))
      continue;
    if (child.props.children) {
      forEachChildDeep(React12.Children.toArray(child.props.children), onChild);
    }
  }
}
__name(forEachChildDeep, "forEachChildDeep");
function getStringChildren(child) {
  let string = "";
  forEachChildDeep(React12.Children.toArray(child), (child2) => {
    if (typeof child2.props.children === "string") {
      string = child2.props.children;
      return false;
    }
    return true;
  });
  return string;
}
__name(getStringChildren, "getStringChildren");
var AlertDialog = (0, import_core18.withStaticProperties)(AlertDialogInner, {
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription
});
AlertDialog.displayName = ROOT_NAME;

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_core19 = require("@tamagui/core-node");
var import_image = __toESM(require_cjs10());

// ../../node_modules/@tamagui/shapes/dist/esm/Square.js
var import_web7 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/shapes/dist/esm/getShapeSize.js
var getShapeSize = /* @__PURE__ */ __name((size3, { tokens: tokens2 }) => {
  const width = tokens2.size[size3] ?? size3;
  const height = tokens2.size[size3] ?? size3;
  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height
  };
}, "getShapeSize");

// ../../node_modules/@tamagui/shapes/dist/esm/Square.js
var Square = (0, import_web7.styled)(ThemeableStack, {
  name: "Square",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    circular: {
      true: {
        borderRadius: 1e5
      }
    },
    size: {
      "...size": getShapeSize
    }
  }
});

// ../../node_modules/@tamagui/shapes/dist/esm/Circle.js
var import_web8 = require("@tamagui/core-node");
var Circle = (0, import_web8.styled)(Square, {
  name: "Circle",
  circular: true
});

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var React13 = __toESM(require("react"));
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React13.forwardRef(
  (props, forwardedRef) => {
    var _a;
    const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
    }, "onLoadingStatusChange"), ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const [status, setStatus] = React13.useState("idle");
    const extras = (0, import_core19.getVariantExtras)(props);
    const shapeSize = (0, import_core19.getVariableValue)(
      (_a = getShapeSize(context.size, extras)) == null ? void 0 : _a.width
    );
    React13.useEffect(() => {
      setStatus("idle");
    }, [JSON.stringify(src)]);
    React13.useEffect(() => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    }, [status]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(YStack, { fullscreen: true, zIndex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      import_image.Image,
      {
        fullscreen: true,
        ...typeof shapeSize === "number" && !isNaN(shapeSize) && {
          width: shapeSize,
          height: shapeSize
        },
        ...imageProps,
        ref: forwardedRef,
        src,
        onError: () => {
          setStatus("error");
        },
        onLoad: () => {
          setStatus("loaded");
        }
      }
    ) });
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallbackFrame = (0, import_core19.styled)(YStack, {
  name: FALLBACK_NAME,
  position: "absolute",
  fullscreen: true,
  zIndex: 0
});
var AvatarFallback = AvatarFallbackFrame.extractable(
  React13.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, delayMs, ...fallbackProps } = props;
      const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
      const [canRender, setCanRender] = React13.useState(delayMs === void 0);
      React13.useEffect(() => {
        if (delayMs !== void 0) {
          const timerId = setTimeout(() => setCanRender(true), delayMs);
          return () => clearTimeout(timerId);
        }
      }, [delayMs]);
      return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarFallbackFrame, { ...fallbackProps, ref: forwardedRef }) : null;
    }
  )
);
AvatarFallback.displayName = FALLBACK_NAME;
var AvatarFrame = (0, import_core19.styled)(Square, {
  name: AVATAR_NAME,
  position: "relative",
  overflow: "hidden"
});
var Avatar = (0, import_core19.withStaticProperties)(
  React13.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, size: size3 = "$true", ...avatarProps } = props;
      const [imageLoadingStatus, setImageLoadingStatus] = React13.useState("idle");
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        AvatarProvider,
        {
          size: size3,
          scope: __scopeAvatar,
          imageLoadingStatus,
          onImageLoadingStatusChange: setImageLoadingStatus,
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarFrame, { size: size3, ...avatarProps, ref: forwardedRef })
        }
      );
    }
  ),
  {
    Image: AvatarImage,
    Fallback: AvatarFallback
  }
);
Avatar.displayName = AVATAR_NAME;

// ../../node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime18 = require("react/jsx-runtime");
var import_font_size = __toESM(require_cjs11());
var import_get_button_sized2 = __toESM(require_cjs8());
var import_helpers_tamagui = __toESM(require_cjs15());
var import_web9 = require("@tamagui/core-node");
var import_react21 = require("react");
var BUTTON_NAME = "Button";
var ButtonFrame = (0, import_web9.styled)(ThemeableStack, {
  name: BUTTON_NAME,
  tag: "button",
  focusable: true,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        hoverTheme: true,
        pressTheme: true,
        backgrounded: true,
        borderWidth: 1,
        borderColor: "$borderColor",
        pressStyle: {
          borderColor: "$borderColorPress"
        },
        focusStyle: {
          outlineColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    size: {
      "...size": import_get_button_sized2.getButtonSized
    },
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$background"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var BUTTON_TEXT_NAME = "ButtonText";
var ButtonTextFrame = (0, import_web9.styled)(SizableText, {
  name: BUTTON_TEXT_NAME,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var [createButtonContext, createButtonScope] = createContextScope("Button");
var [ButtonProvider, useButtonContext] = createButtonContext("Button");
var ButtonTextComponent = ButtonTextFrame.extractable(
  (0, import_react21.forwardRef)(
    (props, ref) => {
      const context = useButtonContext(BUTTON_TEXT_NAME, props.__scopeButton);
      (0, import_react21.useEffect)(() => {
        const unregister = context.registerButtonText();
        return () => unregister();
      }, [context.registerButtonText]);
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ButtonTextFrame, { size: props.size ?? context.size, ...props, ref });
    }
  )
);
var BUTTON_ICON_NAME = "ButtonIcon";
var ButtonIcon = /* @__PURE__ */ __name((props) => {
  const { children, scaleIcon = 1 } = props;
  const context = useButtonContext(BUTTON_ICON_NAME, props.__scopeButton);
  const size3 = context.size;
  const color2 = context.color;
  const iconSize = (typeof size3 === "number" ? size3 * 0.5 : (0, import_font_size.getFontSize)(size3)) * scaleIcon;
  const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color: color2 });
  return getThemedIcon(children);
}, "ButtonIcon");
var ButtonComponent = ButtonFrame.styleable(/* @__PURE__ */ __name(function Button(props, ref) {
  const { props: buttonProps } = useButton(props);
  const [buttonTextCount, setButtonTextCount] = (0, import_react21.useState)(0);
  const registerButtonText = (0, import_react21.useCallback)(() => {
    setButtonTextCount((prev) => prev + 1);
    return () => setButtonTextCount((prev) => prev - 1);
  }, [setButtonTextCount]);
  const hasTextComponent = buttonTextCount > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    ButtonProvider,
    {
      scope: props.__scopeButton,
      color: props.color,
      hasTextComponent,
      size: props.size ?? "$true",
      registerButtonText,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ButtonFrame, { ...hasTextComponent ? props : buttonProps, ref })
    }
  );
}, "Button"));
var buttonStaticConfig = {
  inlineProps: /* @__PURE__ */ new Set([
    // text props go here (can't really optimize them, but we never fully extract button anyway)
    // may be able to remove this entirely, as the compiler / runtime have gotten better
    "color",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "fontStyle",
    "letterSpacing",
    "textAlign",
    "unstyled"
  ])
};
var Button2 = (0, import_web9.withStaticProperties)(ButtonComponent, {
  Text: ButtonTextComponent,
  Icon: ButtonIcon
});
function useButton(propsIn, { Text: Text5 = ButtonTextFrame } = { Text: ButtonTextFrame }) {
  const {
    children,
    icon,
    iconAfter,
    noTextWrap,
    theme: themeName,
    space: space2,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    // text props
    color: color2,
    fontWeight,
    letterSpacing,
    fontSize,
    fontFamily,
    fontStyle,
    textAlign,
    textProps,
    ...rest
  } = propsIn;
  const hasUnstyled = typeof propsIn.unstyled !== "undefined";
  const isNested = import_web9.isRSC ? false : (0, import_react21.useContext)(import_web9.ButtonNestingContext);
  const propsActive = (0, import_web9.useProps)(propsIn);
  const size3 = propsActive.size || "$true";
  const iconSize = (typeof size3 === "number" ? size3 * 0.5 : (0, import_font_size.getFontSize)(size3)) * scaleIcon;
  const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color: color2 });
  const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
  const spaceSize = propsActive.space ?? (0, import_web9.getVariableValue)(iconSize) * scaleSpace;
  const contents = wrapChildrenInText(
    Text5,
    propsActive,
    Text5 === ButtonTextFrame && hasUnstyled ? {
      unstyled: propsIn.unstyled
    } : void 0
  );
  const inner2 = (0, import_web9.spacedChildren)({
    // a bit arbitrary but scaling to font size is necessary so long as button does
    space: spaceSize,
    spaceFlex,
    separator,
    direction: propsActive.flexDirection === "column" || propsActive.flexDirection === "column-reverse" ? "vertical" : "horizontal",
    children: [themedIcon, ...contents, themedIconAfter]
  });
  const tag = isNested ? "span" : (
    // defaults to <a /> when accessibilityRole = link
    // see https://github.com/tamagui/tamagui/issues/505
    propsIn.accessibilityRole === "link" ? "a" : void 0
  );
  const props = {
    ...propsActive.disabled && {
      // in rnw - false still has keyboard tabIndex, undefined = not actually focusable
      focusable: void 0,
      // even with tabIndex unset, it will keep focusStyle on web so disable it here
      focusStyle: {
        borderColor: "$background"
      }
    },
    tag,
    ...rest,
    children: import_web9.isRSC ? inner2 : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_web9.ButtonNestingContext.Provider, { value: true, children: inner2 })
  };
  return {
    spaceSize,
    isNested,
    props
  };
}
__name(useButton, "useButton");

// ../../node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime19 = require("react/jsx-runtime");
var import_web10 = require("@tamagui/core-node");
var import_react22 = __toESM(require("react"));
var CardFrame = (0, import_web10.styled)(ThemeableStack, {
  name: "Card",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        position: "relative",
        overflow: "hidden"
      }
    },
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          borderRadius: tokens2.radius[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardHeader = (0, import_web10.styled)(ThemeableStack, {
  name: "CardHeader",
  variants: {
    unstyled: {
      false: {
        zIndex: 10,
        backgroundColor: "transparent",
        marginBottom: "auto"
      }
    },
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          padding: tokens2.space[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardFooter = (0, import_web10.styled)(CardHeader, {
  name: "CardFooter",
  variants: {
    unstyled: {
      false: {
        zIndex: 5,
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: 0
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardBackground = (0, import_web10.styled)(ThemeableStack, {
  name: "CardBackground",
  variants: {
    unstyled: {
      false: {
        zIndex: 0,
        fullscreen: true,
        overflow: "hidden",
        pointerEvents: "none",
        padding: 0
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Card = (0, import_web10.withStaticProperties)(
  CardFrame.styleable(
    (0, import_react22.forwardRef)(
      ({ __scopeCard, children, ...props }, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CardFrame, { ref, ...props, children: import_react22.default.Children.map(children, (child) => {
          if ((0, import_web10.isTamaguiElement)(child) && !child.props.size) {
            return (0, import_react22.cloneElement)(child, {
              size: props.size
            });
          }
          return child;
        }) });
      }
    )
  ),
  {
    Header: CardHeader,
    Footer: CardFooter,
    Background: CardBackground
  }
);

// ../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var import_jsx_runtime21 = require("react/jsx-runtime");
var import_react_use_previous = __toESM(require_dist3());
var import_core20 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs16());
var import_font_size2 = __toESM(require_cjs11());
var import_get_size = __toESM(require_cjs7());
var import_helpers_tamagui2 = __toESM(require_cjs15());

// ../../node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime20 = require("react/jsx-runtime");
var import_focusable = __toESM(require_cjs16());
var import_get_button_sized3 = __toESM(require_cjs8());
var import_get_font_sized2 = __toESM(require_cjs9());
var import_web11 = require("@tamagui/core-node");
var React15 = __toESM(require("react"));
var NAME = "Label";
var [LabelProvider, useLabelContextImpl] = createContext3(NAME, {
  id: void 0,
  controlRef: { current: null }
});
var LabelFrame = (0, import_web11.styled)(SizableText, {
  name: "Label",
  tag: "label",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        color: "$color",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        cursor: "default",
        pressStyle: {
          color: "$colorPress"
        }
      }
    },
    size: {
      "...size": (val, extras) => {
        const buttonStyle = (0, import_get_button_sized3.getButtonSized)(val, extras);
        return {
          ...(0, import_get_font_sized2.getFontSized)(val, extras),
          height: buttonStyle.height,
          lineHeight: buttonStyle.height
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var LabelComponent = React15.forwardRef(
  (props, forwardedRef) => {
    const { htmlFor, id: idProp, ...labelProps } = props;
    const controlRef = React15.useRef(null);
    const ref = React15.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const backupId = React15.useId();
    const id = idProp ?? backupId;
    if (import_web11.isWeb) {
      React15.useEffect(() => {
        if (htmlFor) {
          const element = document.getElementById(htmlFor);
          const label = ref.current;
          if (label && element) {
            const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
            const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
            element.setAttribute("aria-labelledby", ariaLabelledBy);
            controlRef.current = element;
            return () => {
              var _a;
              if (!id)
                return;
              const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
              if (ariaLabelledBy2 === "") {
                element.removeAttribute("aria-labelledby");
              } else if (ariaLabelledBy2) {
                element.setAttribute("aria-labelledby", ariaLabelledBy2);
              }
            };
          }
        }
      }, [id, htmlFor]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(LabelProvider, { id, controlRef, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      LabelFrame,
      {
        role: "heading",
        id,
        htmlFor,
        ...labelProps,
        ref: composedRefs,
        onMouseDown: (event) => {
          var _a;
          (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
          }
        },
        onPress: (event) => {
          var _a;
          (_a = props.onPress) == null ? void 0 : _a.call(props, event);
          if (import_web11.isWeb) {
            if (htmlFor || !controlRef.current || event.defaultPrevented)
              return;
            const isClickingControl = controlRef.current.contains(
              event.target
            );
            const isUserClick = event.isTrusted === true;
            if (!isClickingControl && isUserClick) {
              controlRef.current.click();
              controlRef.current.focus();
            }
          } else {
            if (props.htmlFor) {
              (0, import_focusable.focusFocusable)(props.htmlFor);
            }
          }
        }
      }
    ) });
  }
);
LabelComponent.displayName = NAME;
var Label = LabelFrame.extractable((0, import_web11.themeable)(LabelComponent), {
  neverFlatten: true
});
var useLabelContext = /* @__PURE__ */ __name((element) => {
  const context = useLabelContextImpl("LabelConsumer");
  const { controlRef } = context;
  React15.useEffect(() => {
    if (element)
      controlRef.current = element;
  }, [element, controlRef]);
  return context.id;
}, "useLabelContext");

// ../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var React16 = __toESM(require("react"));
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState2(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState2, "getState");
var BubbleInput = /* @__PURE__ */ __name((props) => {
  const { checked, bubbles = true, control, isHidden, ...inputProps } = props;
  const ref = React16.useRef(null);
  const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
  React16.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(
      inputProto,
      "checked"
    );
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate(checked);
      setChecked.call(input, isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "input",
    {
      type: "checkbox",
      defaultChecked: isIndeterminate(checked) ? false : checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      "aria-hidden": isHidden,
      style: {
        ...isHidden ? {
          // ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        } : {
          appearance: "auto",
          accentColor: "var(--color6)"
        },
        ...props.style
      }
    }
  );
}, "BubbleInput");
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicatorFrame = (0, import_core20.styled)(ThemeableStack, {
  // use Checkbox for easier themes
  name: INDICATOR_NAME
});
var CheckboxIndicator = CheckboxIndicatorFrame.extractable(
  React16.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeCheckbox,
        children: childrenProp,
        forceMount,
        disablePassStyles,
        ...indicatorProps
      } = props;
      const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
      const iconSize = (typeof context.size === "number" ? context.size * 0.65 : (0, import_font_size2.getFontSize)(context.size)) * context.scaleIcon;
      const theme = (0, import_core20.useTheme)();
      const getThemedIcon = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: iconSize, color: theme.color });
      const childrens = React16.Children.toArray(childrenProp);
      const children = childrens.map((child) => {
        if (disablePassStyles || !React16.isValidElement(child)) {
          return child;
        }
        return getThemedIcon(child);
      });
      if (forceMount || isIndeterminate(context.state) || context.state === true)
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          CheckboxIndicatorFrame,
          {
            "data-state": getState2(context.state),
            "data-disabled": context.disabled ? "" : void 0,
            pointerEvents: "none",
            ...indicatorProps,
            ref: forwardedRef,
            children
          }
        );
      return null;
    }
  )
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var CHECKBOX_NAME = "Checkbox";
var CheckboxFrame = (0, import_core20.styled)(ThemeableStack, {
  name: CHECKBOX_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        pressTheme: true,
        focusable: true,
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          borderColor: "$borderColorHover"
        },
        focusStyle: {
          borderColor: "$borderColorFocus"
        }
      }
    },
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        const radiusToken = (0, import_core20.getVariableValue)((0, import_get_size.getSize)(val)) / 8;
        return {
          borderRadius: radiusToken
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
var Checkbox = (0, import_core20.withStaticProperties)(
  CheckboxFrame.extractable(
    React16.forwardRef(/* @__PURE__ */ __name(function Checkbox2(props, forwardedRef) {
      const {
        __scopeCheckbox,
        labelledBy: ariaLabelledby,
        name,
        checked: checkedProp,
        defaultChecked,
        required,
        scaleIcon = 1,
        scaleSize = 0.45,
        sizeAdjust = 0,
        disabled,
        value = "on",
        onCheckedChange,
        native,
        ...checkboxProps
      } = props;
      const [button, setButton] = React16.useState(null);
      const composedRefs = (0, import_core20.useComposedRefs)(forwardedRef, (node) => setButton(node));
      const hasConsumerStoppedPropagationRef = React16.useRef(false);
      const propsActive = (0, import_core20.useProps)(props);
      const isFormControl = import_core20.isWeb ? button ? Boolean(button.closest("form")) : true : false;
      const [checked = false, setChecked] = useControllableState({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
      });
      const adjustedSize = (0, import_core20.getVariableValue)(
        (0, import_get_size.stepTokenUpOrDown)("size", propsActive.size, sizeAdjust)
      );
      const size3 = scaleSize ? Math.round(adjustedSize * scaleSize) : adjustedSize;
      const labelId = useLabelContext(button);
      const labelledBy = ariaLabelledby || labelId;
      if (process.env.TAMAGUI_TARGET === "native") {
        React16.useEffect(() => {
          if (!props.id)
            return;
          return (0, import_focusable2.registerFocusable)(props.id, {
            focusAndSelect: () => {
              setChecked((x) => !x);
            },
            focus: () => {
            }
          });
        }, [props.id, setChecked]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        CheckboxProvider,
        {
          scope: __scopeCheckbox,
          state: checked,
          disabled,
          size: size3,
          scaleIcon,
          children: import_core20.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            BubbleInput,
            {
              control: button,
              bubbles: !hasConsumerStoppedPropagationRef.current,
              name,
              value,
              checked,
              required,
              disabled,
              id: props.id
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              CheckboxFrame,
              {
                width: size3,
                height: size3,
                tag: "button",
                role: "checkbox",
                "aria-labelledby": labelledBy,
                "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
                "aria-required": required,
                "data-state": getState2(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                ...checkboxProps,
                ref: composedRefs,
                ...import_core20.isWeb && {
                  type: "button",
                  value,
                  onKeyDown: (0, import_core20.composeEventHandlers)(
                    props.onKeyDown,
                    (event) => {
                      if (event.key === "Enter")
                        event.preventDefault();
                    }
                  )
                },
                onPress: (0, import_core20.composeEventHandlers)(props.onPress, (event) => {
                  setChecked(
                    (prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked
                  );
                  if (isFormControl) {
                    hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                    if (!hasConsumerStoppedPropagationRef.current)
                      event.stopPropagation();
                  }
                })
              }
            ),
            import_core20.isWeb && isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              BubbleInput,
              {
                isHidden: true,
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled
              }
            ) : null
          ] })
        }
      );
    }, "Checkbox2"))
  ),
  {
    Indicator: CheckboxIndicator
  }
);

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs11()));

// ../../node_modules/@tamagui/form/dist/esm/Form.js
var import_jsx_runtime22 = require("react/jsx-runtime");
var import_core21 = require("@tamagui/core-node");
var import_react23 = require("react");
var FORM_NAME = "Form";
var FormFrame = (0, import_core21.styled)(import_core21.Stack, {
  name: FORM_NAME,
  tag: "form"
});
var [createFormContext] = createContextScope(FORM_NAME);
var [FormProvider, useFormContext] = createFormContext(FORM_NAME);
var TRIGGER_NAME3 = "FormTrigger";
var FormTriggerFrame = (0, import_core21.styled)(import_core21.Stack, {
  name: TRIGGER_NAME3
});
var FormTrigger = FormTriggerFrame.styleable(
  (props, forwardedRef) => {
    const { __scopeForm, children, ...triggerProps } = props;
    const context = useFormContext(TRIGGER_NAME3, __scopeForm);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      FormTriggerFrame,
      {
        tag: "button",
        ...triggerProps,
        children: triggerProps.asChild ? (0, import_react23.cloneElement)(children, { disabled: triggerProps.disabled }) : children,
        ref: forwardedRef,
        onPress: (0, import_core21.composeEventHandlers)(props.onPress, context.onSubmit)
      }
    );
  }
);
function FormComponent({
  onSubmit,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FormProvider, { scope: props.__scopeForm, onSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FormFrame, { ...props, onSubmit: (e) => e.preventDefault() }) });
}
__name(FormComponent, "FormComponent");
var Form = (0, import_core21.withStaticProperties)(FormFrame.extractable(FormComponent), {
  Trigger: FormTrigger
});

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs20()));
__reExport(esm_exports2, __toESM(require_cjs15()));
__reExport(esm_exports2, __toESM(require_cjs10()));
__reExport(esm_exports2, __toESM(require_cjs22()));

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var import_aria_hidden3 = __toESM(require_cjs3());
var import_core25 = require("@tamagui/core-node");

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
__name(getAlignment, "getAlignment");
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
__name(getLengthFromAxis, "getLengthFromAxis");
function getSide(placement) {
  return placement.split("-")[0];
}
__name(getSide, "getSide");
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
__name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
__name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
var computePosition = /* @__PURE__ */ __name(async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
}, "computePosition");
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
__name(expandPaddingObject, "expandPaddingObject");
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
__name(getSideObjectFromPadding, "getSideObjectFromPadding");
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
__name(rectToClientRect, "rectToClientRect");
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
__name(detectOverflow, "detectOverflow");
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
__name(within, "within");
var arrow = /* @__PURE__ */ __name((options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min3 ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
}), "arrow");
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
__name(getOppositePlacement, "getOppositePlacement");
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
__name(getAlignmentSides, "getAlignmentSides");
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
__name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
__name(getExpandedPlacements, "getExpandedPlacements");
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
__name(getSideList, "getSideList");
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
__name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
var flip = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
}, "flip");
async function convertValueToCoords(state, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(state) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
__name(convertValueToCoords, "convertValueToCoords");
var offset = /* @__PURE__ */ __name(function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
}, "offset");
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getCrossAxis, "getCrossAxis");
var shift = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
}, "shift");
var size2 = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = /* @__PURE__ */ __name(() => {
        }, "apply"),
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === "x";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
}, "size");

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
__name(getWindow, "getWindow");
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle$1, "getComputedStyle$1");
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
__name(isNode, "isNode");
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
__name(getNodeName, "getNodeName");
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
__name(getUAString, "getUAString");
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
__name(isElement, "isElement");
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
__name(isOverflowElement, "isOverflowElement");
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
__name(isTableElement, "isTableElement");
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
__name(isContainingBlock, "isContainingBlock");
function isClientRectVisualViewportBased() {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
__name(isClientRectVisualViewportBased, "isClientRectVisualViewportBased");
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
__name(isLastTraversableNode, "isLastTraversableNode");
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}
__name(getCssDimensions, "getCssDimensions");
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
__name(unwrapElement, "unwrapElement");
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
__name(getScale, "getScale");
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
__name(getBoundingClientRect, "getBoundingClientRect");
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
__name(getNodeScroll, "getNodeScroll");
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
__name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getDocumentRect, "getDocumentRect");
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
__name(getParentNode, "getParentNode");
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
__name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
__name(getOverflowAncestors, "getOverflowAncestors");
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getViewportRect, "getViewportRect");
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
__name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
__name(hasFixedPositionAncestor, "hasFixedPositionAncestor");
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
__name(getClippingElementAncestors, "getClippingElementAncestors");
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
__name(getClippingRect, "getClippingRect");
function getDimensions(element) {
  return getCssDimensions(element);
}
__name(getDimensions, "getDimensions");
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
__name(getOffsetParent, "getOffsetParent");
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
__name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes("V");
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener("scroll", update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  __name(frameLoop, "frameLoop");
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
__name(autoUpdate, "autoUpdate");
var computePosition2 = /* @__PURE__ */ __name((reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
}, "computePosition");

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React17 = __toESM(require("react"));
var import_react25 = require("react");
var ReactDOM2 = __toESM(require("react-dom"));
var arrow2 = /* @__PURE__ */ __name((options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  __name(isRef, "isRef");
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
}, "arrow");
var index = typeof document !== "undefined" ? import_react25.useLayoutEffect : import_react25.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
__name(deepEqual, "deepEqual");
function useLatestRef(value) {
  const ref = React17.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef, "useLatestRef");
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React17.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React17.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React17.useRef(null);
  const floatingRef = React17.useRef(null);
  const dataRef = React17.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React17.useState(null);
  const [floating, _setFloating] = React17.useState(null);
  const setReference = React17.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React17.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React17.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config2 = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config2.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config2).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React17.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React17.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React17.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React17.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}
__name(useFloating, "useFloating");

// ../../node_modules/@tamagui/floating/dist/esm/useFloating.js
var import_react26 = require("react");
var FloatingOverrideContext = (0, import_react26.createContext)(null);
var useFloating2 = /* @__PURE__ */ __name((props) => {
  var _a;
  const context = (0, import_react26.useContext)(FloatingOverrideContext);
  return (_a = context || useFloating) == null ? void 0 : _a(props);
}, "useFloating");

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var import_focus_scope2 = __toESM(require_cjs6());

// ../../node_modules/@tamagui/popper/dist/esm/Popper.js
var import_jsx_runtime23 = require("react/jsx-runtime");
var import_core24 = require("@tamagui/core-node");
var import_get_size2 = __toESM(require_cjs7());
var React18 = __toESM(require("react"));
var import_react_native7 = require("react-native-web-lite");
var POPPER_NAME = "Popper";
var [createPopperContext, createScope] = createContextScope(POPPER_NAME);
var createPopperScope = createScope;
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
function Popper(props) {
  const {
    __scopePopper,
    children,
    size: size3,
    strategy = "absolute",
    placement = "bottom",
    stayInFrame,
    allowFlip
  } = props;
  const [isMounted, setIsMounted] = React18.useState(false);
  (0, import_core24.useIsomorphicLayoutEffect)(() => {
    setIsMounted(true);
  }, []);
  const anchorRef = React18.useRef();
  const [arrowEl, setArrow] = React18.useState(null);
  const [arrowSize, setArrowSize] = React18.useState(0);
  const arrowRef = React18.useRef();
  const floating = useFloating2({
    strategy,
    placement,
    sameScrollView: false,
    // this only takes effect on native
    middleware: [
      stayInFrame ? shift(typeof stayInFrame === "boolean" ? {} : stayInFrame) : null,
      allowFlip ? flip(typeof allowFlip === "boolean" ? {} : allowFlip) : null,
      arrowEl ? arrow2({ element: arrowEl }) : null,
      arrowSize ? offset(arrowSize) : null
    ].filter(Boolean)
  });
  const { refs, middlewareData } = floating;
  const composedArrowRefs = useComposedRefs(arrowRef, setArrow);
  (0, import_core24.useIsomorphicLayoutEffect)(() => {
    floating.reference(anchorRef.current);
  }, [anchorRef]);
  if (import_core24.isWeb) {
    React18.useEffect(() => {
      if (!(refs.reference.current && refs.floating.current)) {
        return;
      }
      return autoUpdate(refs.reference.current, refs.floating.current, floating.update);
    }, [floating.update, refs.floating, refs.reference]);
  } else {
    const dimensions = (0, import_react_native7.useWindowDimensions)();
    const [keyboardOpen, setKeyboardOpen] = React18.useState(false);
    React18.useEffect(() => {
      const showSubscription = import_react_native7.Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardOpen(true);
      });
      const hideSubscription = import_react_native7.Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardOpen(false);
      });
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
    (0, import_core24.useIsomorphicLayoutEffect)(() => {
      floating.update();
    }, [dimensions, keyboardOpen]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    PopperProvider,
    {
      scope: __scopePopper,
      anchorRef,
      size: size3,
      arrowRef: composedArrowRefs,
      arrowStyle: middlewareData.arrow,
      onArrowSize: setArrowSize,
      isMounted,
      ...floating,
      children
    }
  );
}
__name(Popper, "Popper");
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = YStack.extractable(
  React18.forwardRef(/* @__PURE__ */ __name(function PopperAnchor2(props, forwardedRef) {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const { anchorRef, getReferenceProps } = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React18.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, anchorRef);
    if (virtualRef) {
      return null;
    }
    const stackProps = {
      ref: composedRefs,
      ...anchorProps
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(YStack, { ...getReferenceProps ? getReferenceProps(stackProps) : stackProps });
  }, "PopperAnchor2"))
);
var CONTENT_NAME3 = "PopperContent";
var PopperContentFrame = (0, import_core24.styled)(ThemeableStack, {
  name: "PopperContent",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center",
        radiused: true
      }
    },
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          padding: tokens2.space[val],
          borderRadius: tokens2.radius[val]
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var PopperContent = React18.forwardRef(
  /* @__PURE__ */ __name(function PopperContent2(props, forwardedRef) {
    const { __scopePopper, ...contentProps } = props;
    const { strategy, placement, floating, x, y, getFloatingProps, size: size3, isMounted } = usePopperContext(CONTENT_NAME3, __scopePopper);
    const contentRefs = useComposedRefs(floating, forwardedRef);
    const contents = React18.useMemo(() => {
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        PopperContentFrame,
        {
          "data-placement": placement,
          "data-strategy": strategy,
          size: contentProps.size || size3,
          ...contentProps
        },
        "popper-content-frame"
      );
    }, [placement, strategy, props]);
    if (!isMounted) {
      return null;
    }
    const frameProps = {
      ref: contentRefs,
      x: x || 0,
      y: y || 0,
      position: strategy
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      YStack,
      {
        animateOnly: ["transform"],
        ...getFloatingProps ? getFloatingProps(frameProps) : frameProps,
        children: contents
      }
    );
  }, "PopperContent2")
);
var ARROW_NAME = "PopperArrow";
var PopperArrowFrame = (0, import_core24.styled)(YStack, {
  name: "PopperArrow",
  variants: {
    unstyled: {
      false: {
        borderColor: "$borderColor",
        backgroundColor: "$background",
        position: "relative"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var PopperArrowOuterFrame = (0, import_core24.styled)(YStack, {
  name: "PopperArrowOuter",
  variants: {
    unstyled: {
      false: {
        position: "absolute",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var opposites = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = PopperArrowFrame.styleable(
  /* @__PURE__ */ __name(function PopperArrow2(propsIn, forwardedRef) {
    var _a, _b;
    const props = (0, import_core24.useProps)(propsIn);
    const {
      __scopePopper,
      offset: offset2,
      size: sizeProp,
      borderWidth = 0,
      ...arrowProps
    } = props;
    const context = usePopperContext(ARROW_NAME, __scopePopper);
    const sizeVal = sizeProp ?? context.size;
    const sizeValResolved = (0, import_core24.getVariableValue)((0, import_get_size2.stepTokenUpOrDown)("space", sizeVal, -2, [2]));
    const size3 = +sizeValResolved;
    const { placement } = context;
    const refs = useComposedRefs(context.arrowRef, forwardedRef);
    const x = ((_a = context.arrowStyle) == null ? void 0 : _a.x) || 0;
    const y = ((_b = context.arrowStyle) == null ? void 0 : _b.y) || 0;
    const primaryPlacement = placement ? placement.split("-")[0] : "top";
    const arrowStyle = { x, y, width: size3, height: size3 };
    const innerArrowStyle = {};
    const isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
    if (primaryPlacement) {
      arrowStyle[isVertical ? "width" : "height"] = size3 * 2;
      const oppSide = opposites[primaryPlacement];
      if (oppSide) {
        arrowStyle[oppSide] = -size3;
        innerArrowStyle[oppSide] = size3 / 2;
      }
      if (oppSide === "top" || oppSide === "bottom") {
        arrowStyle.left = 0;
      }
      if (oppSide === "left" || oppSide === "right") {
        arrowStyle.top = 0;
      }
    }
    (0, import_core24.useIsomorphicLayoutEffect)(() => {
      var _a2;
      (_a2 = context.onArrowSize) == null ? void 0 : _a2.call(context, size3);
    }, [size3, context.onArrowSize]);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PopperArrowOuterFrame, { ref: refs, ...arrowStyle, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      PopperArrowFrame,
      {
        width: size3,
        height: size3,
        ...arrowProps,
        ...innerArrowStyle,
        rotate: "45deg",
        ...primaryPlacement === "bottom" && {
          borderLeftWidth: borderWidth,
          borderTopWidth: borderWidth
        },
        ...primaryPlacement === "top" && {
          borderBottomWidth: borderWidth,
          borderRightWidth: borderWidth
        },
        ...primaryPlacement === "right" && {
          borderLeftWidth: borderWidth,
          borderBottomWidth: borderWidth
        },
        ...primaryPlacement === "left" && {
          borderTopWidth: borderWidth,
          borderRightWidth: borderWidth
        }
      }
    ) });
  }, "PopperArrow2")
);

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var React20 = __toESM(require("react"));
var import_react_native8 = require("react-native-web-lite");

// ../../node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React19 = __toESM(require("react"));
var import_react27 = require("react");
var import_aria_hidden2 = __toESM(require_es5());
var import_tabbable = __toESM(require_dist5());
var import_react_dom2 = require("react-dom");
var index2 = typeof document !== "undefined" ? import_react27.useLayoutEffect : import_react27.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
function useFloatingId() {
  const [id, setId] = React19.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React19.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
__name(useFloatingId, "useFloatingId");
var useReactId = React19[/* @__PURE__ */ "useId".toString()];
var useId6 = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      map.set(event, (map.get(event) || []).filter((l) => l !== listener));
    }
  };
}
__name(createPubSub, "createPubSub");
var FloatingNodeContext = /* @__PURE__ */ React19.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React19.createContext(null);
var useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
  var _React$useContext;
  return ((_React$useContext = React19.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
}, "useFloatingParentNodeId");
var useFloatingTree = /* @__PURE__ */ __name(() => React19.useContext(FloatingTreeContext), "useFloatingTree");
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
__name(getDocument, "getDocument");
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
__name(getPlatform, "getPlatform");
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
__name(getUserAgent, "getUserAgent");
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
__name(getWindow2, "getWindow");
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
__name(isElement2, "isElement");
function isHTMLElement2(value) {
  return value ? value instanceof getWindow2(value).HTMLElement : false;
}
__name(isHTMLElement2, "isHTMLElement");
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot2, "isShadowRoot");
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
__name(isVirtualClick, "isVirtualClick");
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
__name(isVirtualPointerEvent, "isVirtualPointerEvent");
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
__name(isSafari, "isSafari");
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
__name(isMac, "isMac");
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
__name(isMouseLikePointerType, "isMouseLikePointerType");
function useLatestRef2(value) {
  const ref = (0, import_react27.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef2, "useLatestRef");
var safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
__name(getDelay, "getDelay");
var useHover = /* @__PURE__ */ __name(function(context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React19.useRef();
  const timeoutRef = React19.useRef();
  const handlerRef = React19.useRef();
  const restTimeoutRef = React19.useRef();
  const blockMouseMoveRef = React19.useRef(true);
  const performedPointerEventsMutationRef = React19.useRef(false);
  const unbindMouseMoveRef = React19.useRef(() => {
  });
  const isHoverOpen = React19.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events]);
  React19.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    __name(onLeave, "onLeave");
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = React19.useCallback(function(runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React19.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React19.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    __name(onMouseEnter, "onMouseEnter");
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      closeWithDelay();
    }
    __name(onMouseLeave, "onMouseLeave");
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay();
        }
      })(event);
    }
    __name(onScrollMouseLeave, "onScrollMouseLeave");
    if (isElement2(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement2(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React19.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    __name(setPointerRef, "setPointerRef");
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave() {
          events.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
}, "useHover");
var FloatingDelayGroupContext = /* @__PURE__ */ React19.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
var useDelayGroupContext = /* @__PURE__ */ __name(() => React19.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
var FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = React19.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React19.useRef(null);
  const setCurrentId = React19.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index2(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /* @__PURE__ */ React19.createElement(FloatingDelayGroupContext.Provider, {
    value: React19.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
}, "FloatingDelayGroup");
var useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  React19.useEffect(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, "close")
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  React19.useEffect(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    __name(unset, "unset");
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  React19.useEffect(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
}, "useDelayGroup");
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__name(_extends, "_extends");
function activeElement$1(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
__name(activeElement$1, "activeElement$1");
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
__name(contains, "contains");
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = /* @__PURE__ */ __name(() => el == null ? void 0 : el.focus({
    preventScroll
  }), "exec");
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
__name(enqueueFocus, "enqueueFocus");
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
__name(getAncestors, "getAncestors");
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  }) || [];
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    }) || [];
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
__name(getChildren, "getChildren");
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
__name(getTarget, "getTarget");
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
__name(isTypeableElement, "isTypeableElement");
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
__name(stopEvent, "stopEvent");
var getTabbableOptions = /* @__PURE__ */ __name(() => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
}), "getTabbableOptions");
function getTabbableIn(container, direction) {
  const allTabbable = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement$1(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
__name(getTabbableIn, "getTabbableIn");
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
__name(getNextTabbable, "getNextTabbable");
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
__name(getPreviousTabbable, "getPreviousTabbable");
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
__name(isOutsideEvent, "isOutsideEvent");
function disableFocusInside(container) {
  const tabbableElements = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
__name(disableFocusInside, "disableFocusInside");
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
__name(enableFocusInside, "enableFocusInside");
var useInsertionEffect = React19[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent5(callback) {
  const ref = React19.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React19.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
__name(useEvent5, "useEvent");
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var activeElement;
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    activeElement = event.target;
    clearTimeout(timeoutId);
  }
}
__name(setActiveElementOnTab, "setActiveElementOnTab");
function isTabFocus(event) {
  const result = activeElement === event.relatedTarget;
  activeElement = event.relatedTarget;
  clearTimeout(timeoutId);
  return result;
}
__name(isTabFocus, "isTabFocus");
var FocusGuard = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
  const onFocus = useEvent5(props.onFocus);
  const [role, setRole] = React19.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  return /* @__PURE__ */ React19.createElement("span", _extends({}, props, {
    ref,
    tabIndex: 0,
    role,
    "aria-hidden": role ? void 0 : true,
    "data-floating-ui-focus-guard": "",
    style: HIDDEN_STYLES,
    onFocus: (event) => {
      if (isSafari() && isMac() && !isTabFocus(event)) {
        event.persist();
        timeoutId = window.setTimeout(() => {
          onFocus(event);
        }, 50);
      } else {
        onFocus(event);
      }
    }
  }));
}, "FocusGuard"));
var PortalContext = /* @__PURE__ */ React19.createContext(null);
var useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
  let {
    id,
    enabled = true
  } = _temp === void 0 ? {} : _temp;
  const [portalEl, setPortalEl] = React19.useState(null);
  const uniqueId = useId6();
  const portalContext = usePortalContext2();
  index2(() => {
    if (!enabled) {
      return;
    }
    const rootNode = id ? document.getElementById(id) : null;
    if (rootNode) {
      rootNode.setAttribute("data-floating-ui-portal", "");
      setPortalEl(rootNode);
    } else {
      const newPortalEl = document.createElement("div");
      if (id !== "") {
        newPortalEl.id = id || uniqueId;
      }
      newPortalEl.setAttribute("data-floating-ui-portal", "");
      setPortalEl(newPortalEl);
      const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
      container.appendChild(newPortalEl);
      return () => {
        container.removeChild(newPortalEl);
      };
    }
  }, [id, portalContext, uniqueId, enabled]);
  return portalEl;
}, "useFloatingPortalNode");
var FloatingPortal = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    enabled: !root
  });
  const [focusManagerState, setFocusManagerState] = React19.useState(null);
  const beforeOutsideRef = React19.useRef(null);
  const afterOutsideRef = React19.useRef(null);
  const beforeInsideRef = React19.useRef(null);
  const afterInsideRef = React19.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && !!(root || portalNode) && preserveTabOrder
  );
  React19.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    __name(onFocus, "onFocus");
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /* @__PURE__ */ React19.createElement(PortalContext.Provider, {
    value: React19.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null ? void 0 : prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), root ? /* @__PURE__ */ (0, import_react_dom2.createPortal)(children, root) : portalNode ? /* @__PURE__ */ (0, import_react_dom2.createPortal)(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null ? void 0 : nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
      }
    }
  }));
}, "FloatingPortal");
var usePortalContext2 = /* @__PURE__ */ __name(() => React19.useContext(PortalContext), "usePortalContext");
var VisuallyHiddenDismiss = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function VisuallyHiddenDismiss2(props, ref) {
  return /* @__PURE__ */ React19.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
}, "VisuallyHiddenDismiss"));
function FloatingFocusManager(_ref) {
  let {
    context,
    children,
    order = ["content"],
    guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = _ref;
  const {
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const orderRef = useLatestRef2(order);
  const tree = useFloatingTree();
  const portalContext = usePortalContext2();
  const [tabbableContentLength, setTabbableContentLength] = React19.useState(null);
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const startDismissButtonRef = React19.useRef(null);
  const endDismissButtonRef = React19.useRef(null);
  const preventReturnFocusRef = React19.useRef(false);
  const previouslyFocusedElementRef = React19.useRef(null);
  const isPointerDownRef = React19.useRef(false);
  const isInsidePortal = portalContext != null;
  const isTypeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
  const getTabbableContent = React19.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? (0, import_tabbable.tabbable)(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React19.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React19.useEffect(() => {
    if (!modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  React19.useEffect(() => {
    if (!closeOnFocusOut) {
      return;
    }
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    __name(handlePointerDown, "handlePointerDown");
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute("data-floating-ui-focus-guard") || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context, _node$context2;
        return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
      }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context3, _node$context4;
        return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
      })));
      if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
      relatedTarget !== previouslyFocusedElementRef.current) {
        preventReturnFocusRef.current = true;
        setTimeout(() => onOpenChange(false));
      }
    }
    __name(handleFocusOutside, "handleFocusOutside");
    if (floating && isHTMLElement2(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React19.useEffect(() => {
    var _portalContext$portal;
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[data-floating-ui-portal]")) || []);
    function getDismissButtons() {
      return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
    }
    __name(getDismissButtons, "getDismissButtons");
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
      const cleanup = (0, import_aria_hidden2.hideOthers)(orderRef.current.includes("reference") || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes);
      return () => {
        cleanup();
      };
    }
  }, [domReference, floating, modal, orderRef, portalContext, isTypeableCombobox]);
  React19.useEffect(() => {
    if (modal && !guards && floating) {
      const tabIndexValues = [];
      const options = getTabbableOptions();
      const allTabbable = (0, import_tabbable.tabbable)(getDocument(floating).body, options);
      const floatingTabbable = getTabbableElements();
      const elements = allTabbable.filter((el) => !floatingTabbable.includes(el));
      elements.forEach((el, i) => {
        tabIndexValues[i] = el.getAttribute("tabindex");
        el.setAttribute("tabindex", "-1");
      });
      return () => {
        elements.forEach((el, i) => {
          const value = tabIndexValues[i];
          if (value == null) {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", value);
          }
        });
      };
    }
  }, [floating, modal, guards, getTabbableElements]);
  index2(() => {
    if (!floating)
      return;
    const doc = getDocument(floating);
    let returnFocusValue = returnFocus;
    let preventReturnFocusScroll = false;
    const previouslyFocusedElement = activeElement$1(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;
    const focusableElements = getTabbableElements(floating);
    const elToFocus = (typeof initialFocus === "number" ? focusableElements[initialFocus] : initialFocus.current) || floating;
    !ignoreInitialFocus && enqueueFocus(elToFocus, {
      preventScroll: elToFocus === floating
    });
    function onDismiss(payload) {
      if (payload.type === "escapeKey" && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (["referencePress", "escapeKey"].includes(payload.type)) {
        return;
      }
      const returnFocus2 = payload.data.returnFocus;
      if (typeof returnFocus2 === "object") {
        returnFocusValue = true;
        preventReturnFocusScroll = returnFocus2.preventScroll;
      } else {
        returnFocusValue = returnFocus2;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
      if (contains(floating, activeElement$1(doc)) && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (returnFocusValue && isHTMLElement2(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
        if (!refs.domReference.current || isPointerDownRef.current) {
          enqueueFocus(previouslyFocusedElementRef.current, {
            // When dismissing nested floating elements, by the time the rAF has
            // executed, the menus will all have been unmounted. When they try
            // to get focused, the calls get ignored — leaving the root
            // reference focused as desired.
            cancelPrevious: false,
            preventScroll: preventReturnFocusScroll
          });
        } else {
          var _previouslyFocusedEle;
          contextData.__syncReturnFocus = true;
          (_previouslyFocusedEle = previouslyFocusedElementRef.current) == null ? void 0 : _previouslyFocusedEle.focus({
            preventScroll: preventReturnFocusScroll
          });
          setTimeout(() => {
            delete contextData.__syncReturnFocus;
          });
        }
      }
    };
  }, [floating, getTabbableElements, initialFocus, returnFocus, dataRef, refs, events, ignoreInitialFocus]);
  index2(() => {
    if (!portalContext)
      return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut
      // Not concerned about the <RT> generic type.
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [portalContext, modal, closeOnFocusOut, context]);
  index2(() => {
    if (ignoreInitialFocus || !floating)
      return;
    function setState() {
      setTabbableContentLength(getTabbableContent().length);
    }
    __name(setState, "setState");
    setState();
    if (typeof MutationObserver === "function") {
      const observer = new MutationObserver(setState);
      observer.observe(floating, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [floating, getTabbableContent, ignoreInitialFocus, refs]);
  const shouldRenderGuards = guards && (isInsidePortal || modal) && !isTypeableCombobox;
  function renderDismissButton(location) {
    return visuallyHiddenDismiss && modal ? /* @__PURE__ */ React19.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: () => onOpenChange(false)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss") : null;
  }
  __name(renderDismissButton, "renderDismissButton");
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, shouldRenderGuards && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), isTypeableCombobox ? null : renderDismissButton("start"), /* @__PURE__ */ React19.cloneElement(children, tabbableContentLength === 0 || order.includes("floating") ? {
    tabIndex: 0
  } : {}), renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = true;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}
__name(FloatingFocusManager, "FloatingFocusManager");
var identifier = "data-floating-ui-scroll-lock";
var FloatingOverlay = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  index2(() => {
    var _window$visualViewpor, _window$visualViewpor2;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, "");
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: "hidden",
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: "",
          [paddingProp]: ""
        });
      };
    }
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: "fixed",
      overflow: "hidden",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0",
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        overflow: "",
        top: "",
        left: "",
        right: "",
        [paddingProp]: ""
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /* @__PURE__ */ React19.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
}, "FloatingOverlay"));
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
__name(isButtonTarget, "isButtonTarget");
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
__name(isSpaceIgnored, "isSpaceIgnored");
var useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React19.useRef();
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
              onOpenChange(false);
            }
          } else {
            event.preventDefault();
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onClick(event) {
          if (dataRef.current.__syncReturnFocus) {
            return;
          }
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
          }
          if (event.key === "Enter") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        },
        onKeyUp(event) {
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " ") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}, "useClick");
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
__name(isEventTargetWithin, "isEventTargetWithin");
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeBubblesProp = /* @__PURE__ */ __name(function(bubbles) {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  if (bubbles === void 0) {
    bubbles = true;
  }
  return {
    escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles.escapeKey) != null ? _bubbles$escapeKey : true,
    outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
}, "normalizeBubblesProp");
var useDismiss = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = _ref;
  let {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles = true
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEvent5(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React19.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  React19.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
        if (children.length > 0) {
          let shouldDismiss = true;
          children.forEach((child) => {
            var _child$context;
            if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
              shouldDismiss = false;
              return;
            }
          });
          if (!shouldDismiss) {
            return;
          }
        }
        events.emit("dismiss", {
          type: "escapeKey",
          data: {
            returnFocus: {
              preventScroll: false
            }
          }
        });
        onOpenChange(false);
      }
    }
    __name(onKeyDown, "onKeyDown");
    function onOutsidePress(event) {
      const insideReactTree = insideReactTreeRef.current;
      insideReactTreeRef.current = false;
      if (insideReactTree) {
        return;
      }
      if (typeof outsidePress === "function" && !outsidePress(event)) {
        return;
      }
      const target = getTarget(event);
      if (isHTMLElement2(target) && floating) {
        const win = floating.ownerDocument.defaultView || window;
        const canScrollX = target.scrollWidth > target.clientWidth;
        const canScrollY = target.scrollHeight > target.clientHeight;
        let xCond = canScrollY && event.offsetX > target.clientWidth;
        if (canScrollY) {
          const isRTL = win.getComputedStyle(target).direction === "rtl";
          if (isRTL) {
            xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
          }
        }
        if (xCond || canScrollX && event.offsetY > target.clientHeight) {
          return;
        }
      }
      const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context;
        return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
      });
      if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
        return;
      }
      const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context2;
          if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
      events.emit("dismiss", {
        type: "outsidePress",
        data: {
          returnFocus: nested ? {
            preventScroll: true
          } : isVirtualClick(event) || isVirtualPointerEvent(event)
        }
      });
      onOpenChange(false);
    }
    __name(onOutsidePress, "onOutsidePress");
    function onScroll() {
      onOpenChange(false);
    }
    __name(onScroll, "onScroll");
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", onKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, onOutsidePress);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement2(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement2(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement2(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", onKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, onOutsidePress);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, nested]);
  React19.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false);
          }
        }
      },
      floating: {
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
}, "useDismiss");
var useFocus = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    keyboardOnly = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React19.useRef("");
  const blockFocusRef = React19.useRef(false);
  const timeoutRef = React19.useRef();
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;
    function onBlur() {
      if (!open && isHTMLElement2(domReference) && domReference === activeElement$1(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    __name(onBlur, "onBlur");
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [floating, domReference, open, enabled]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === "referencePress" || payload.type === "escapeKey") {
        blockFocusRef.current = true;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  React19.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref2) {
          let {
            pointerType
          } = _ref2;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }
          if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard") && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = setTimeout(() => {
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
}, "useFocus");
var isPreventScrollSupported = false;
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
__name(isDifferentRow, "isDifferentRow");
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
__name(isIndexOutOfBounds, "isIndexOutOfBounds");
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    var _list$index, _list$index2;
    index3 = index3 + (decrement ? -amount : amount);
  } while (index3 >= 0 && index3 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index3) : list[index3] == null || ((_list$index = list[index3]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index3]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
  return index3;
}
__name(findNonDisabledIndex, "findNonDisabledIndex");
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
__name(doSwitch, "doSwitch");
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isMainOrientationKey, "isMainOrientationKey");
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
}
__name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
__name(getMinIndex, "getMinIndex");
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
__name(getMaxIndex, "getMaxIndex");
var useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
  let {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference
    }
  } = _ref;
  let {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
    }, "unstable_onNavigate"),
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true
  } = _temp2 === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null,
    onNavigate: () => {
    }
  } : _temp2;
  if (process.env.NODE_ENV !== "production") {
    if (allowEscape) {
      if (!loop) {
        console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
      }
      if (!virtual) {
        console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
      }
    }
    if (orientation === "vertical" && cols > 1) {
      console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEvent5(unstable_onNavigate);
  const focusItemOnOpenRef = React19.useRef(focusItemOnOpen);
  const indexRef = React19.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React19.useRef(null);
  const isPointerModalityRef = React19.useRef(true);
  const previousOnNavigateRef = React19.useRef(onNavigate);
  const previousOpenRef = React19.useRef(open);
  const forceSyncFocus = React19.useRef(false);
  const forceScrollIntoViewRef = React19.useRef(false);
  const disabledIndicesRef = useLatestRef2(disabledIndices);
  const latestOpenRef = useLatestRef2(open);
  const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
  const [activeId, setActiveId] = React19.useState();
  const focusItem = React19.useCallback(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (virtual) {
      setActiveId(item2 == null ? void 0 : item2.id);
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null ? void 0 : item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  }, [virtual, scrollItemIntoViewRef]);
  index2(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate(selectedIndex);
      }
    } else if (previousOpenRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, selectedIndex, onNavigate]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousOpenRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousOpenRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
          onNavigate(indexRef.current);
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (previousOpenRef.current && !open) {
      var _tree$nodesRef$curren, _tree$nodesRef$curren2;
      const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
      if (parentFloating && !contains(parentFloating, activeElement$1(getDocument(parentFloating)))) {
        parentFloating.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, open, tree, parentId]);
  index2(() => {
    keyRef.current = null;
    previousOnNavigateRef.current = onNavigate;
    previousOpenRef.current = open;
  });
  const hasActiveIndex = activeIndex != null;
  const item = React19.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open)
        return;
      const index3 = listRef.current.indexOf(currentTarget);
      if (index3 !== -1) {
        onNavigate(index3);
      }
    }
    __name(syncCurrentTarget, "syncCurrentTarget");
    const props = {
      onFocus(_ref2) {
        let {
          currentTarget
        } = _ref2;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref3) => {
        let {
          currentTarget
        } = _ref3;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref4) {
          let {
            currentTarget
          } = _ref4;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave() {
          if (!isPointerModalityRef.current) {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          (0, import_react_dom2.flushSync)(() => onNavigate(null));
          if (!virtual) {
            var _refs$floating$curren;
            (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return props;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false);
        if (isHTMLElement2(domReference)) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const prevIndex = indexRef.current;
        if (event.key === ARROW_UP) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices: disabledIndices2
            });
            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset2 = maxIndex - (maxCol - col);
              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset2 : offset2 - cols;
              }
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (event.key === ARROW_DOWN) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices: disabledIndices2
            });
            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices: disabledIndices2
              });
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (orientation === "both") {
          const prevRow = Math.floor(prevIndex / cols);
          if (event.key === ARROW_RIGHT) {
            stopEvent(event);
            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          if (event.key === ARROW_LEFT) {
            stopEvent(event);
            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2,
                decrement: true
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          const lastRow = Math.floor(maxIndex / cols) === prevRow;
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            } else {
              indexRef.current = prevIndex;
            }
          }
          onNavigate(indexRef.current);
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement$1(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualMouse, "checkVirtualMouse");
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualPointer, "checkVirtualPointer");
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": activeId
    };
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          if (virtual && open) {
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          const isNavigationKey = isArrowKey || event.key === "Enter" || event.key === " " || event.key === "";
          if (isNavigationKey) {
            keyRef.current = event.key;
          }
          if (nested) {
            if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true);
              }
            }
            return;
          }
          if (isMainOrientationKey(event.key, orientation)) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true);
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
}, "useListNavigation");
var useRole = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = "dialog"
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId6();
  const referenceId = useId6();
  return React19.useMemo(() => {
    const floatingProps = {
      id: rootId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === "tooltip") {
      return {
        reference: {
          "aria-describedby": open ? rootId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": role === "alertdialog" ? "dialog" : role,
        "aria-controls": open ? rootId : void 0,
        ...role === "listbox" && {
          role: "combobox"
        },
        ...role === "menu" && {
          id: referenceId
        }
      },
      floating: {
        ...floatingProps,
        ...role === "menu" && {
          "aria-labelledby": referenceId
        }
      }
    };
  }, [enabled, role, open, rootId, referenceId]);
}, "useRole");
var useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
  var _ref2;
  let {
    open,
    dataRef,
    refs
  } = _ref;
  let {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch = /* @__PURE__ */ __name(() => {
    }, "unstable_onMatch"),
    enabled = true,
    findMatch = null,
    resetMs = 1e3,
    ignoreKeys = [],
    selectedIndex = null
  } = _temp === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null
  } : _temp;
  const timeoutIdRef = React19.useRef();
  const stringRef = React19.useRef("");
  const prevIndexRef = React19.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
  const matchIndexRef = React19.useRef(null);
  const onMatch = useEvent5(unstable_onMatch);
  const findMatchRef = useLatestRef2(findMatch);
  const ignoreKeysRef = useLatestRef2(ignoreKeys);
  index2(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index2(() => {
    if (open && stringRef.current === "") {
      var _ref3;
      prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function onKeyDown(event) {
      var _refs$floating$curren;
      const target = getTarget(event.nativeEvent);
      if (isElement2(target) && (activeElement$1(getDocument(target)) !== event.currentTarget ? (_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false : !event.currentTarget.contains(target))) {
        return;
      }
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        dataRef.current.typing = true;
        if (event.key === " ") {
          stopEvent(event);
        }
      }
      const listContent = listRef.current;
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        dataRef.current.typing = false;
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const orderedList = [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)];
      const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
      const index3 = str ? listContent.indexOf(str) : -1;
      if (index3 !== -1) {
        onMatch(index3);
        matchIndexRef.current = index3;
      }
    }
    __name(onKeyDown, "onKeyDown");
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown
      }
    };
  }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, refs]);
}, "useTypeahead");
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
__name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
var inner = /* @__PURE__ */ __name((props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (process.env.NODE_ENV !== "production") {
      if (!state.placement.startsWith("bottom")) {
        console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        (0, import_react_dom2.flushSync)(() => onFallbackChange(true));
      } else {
        (0, import_react_dom2.flushSync)(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
}), "inner");
var useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
  let {
    open,
    elements
  } = _ref;
  let {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = _ref2;
  const onChange = useEvent5(unstable_onChange);
  const controlledScrollingRef = React19.useRef(false);
  const prevScrollTopRef = React19.useRef(null);
  const initialOverflowRef = React19.useRef(null);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        (0, import_react_dom2.flushSync)(() => {
          onChange((d) => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    __name(onWheel, "onWheel");
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              (0, import_react_dom2.flushSync)(() => onChange((d) => d + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}, "useInnerOffset");
function useFloating3(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const domReferenceRef = React19.useRef(null);
  const dataRef = React19.useRef({});
  const events = React19.useState(() => createPubSub())[0];
  const [domReference, setDomReference] = React19.useState(null);
  const setPositionReference = React19.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React19.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React19.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React19.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent5(unstable_onOpenChange);
  const context = React19.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React19.useMemo(() => ({
    ...position,
    context,
    refs,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, context, setReference, setPositionReference]);
}
__name(useFloating3, "useFloating");
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
__name(mergeProps, "mergeProps");
var useInteractions = /* @__PURE__ */ __name(function(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React19.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}, "useInteractions");

// ../../node_modules/@tamagui/popover/dist/esm/useFloatingContext.js
var import_react29 = require("react");
var useFloatingContext = /* @__PURE__ */ __name(({ open, setOpen, breakpointActive }) => (0, import_react29.useCallback)(
  (props) => {
    const floating = useFloating3({
      ...props,
      open,
      onOpenChange: setOpen
    });
    const { getReferenceProps, getFloatingProps } = useInteractions([
      // useFocus(floating.context, {
      //   enabled: !breakpointActive,
      //   keyboardOnly: true,
      // }),
      useRole(floating.context, { role: "dialog" }),
      useDismiss(floating.context, {
        enabled: !breakpointActive
      })
    ]);
    return {
      ...floating,
      getReferenceProps,
      getFloatingProps
    };
  },
  [open, setOpen, breakpointActive]
), "useFloatingContext");

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScopeInternal] = createContextScope(
  POPOVER_NAME,
  [createPopperScope]
);
var usePopoverScope = createPopperScope();
var createPopoverScope = createPopoverScopeInternal;
var [PopoverProviderInternal, usePopoverInternalContext] = createPopoverContext(POPOVER_NAME);
var __PopoverProviderInternal = PopoverProviderInternal;
var ANCHOR_NAME2 = "PopoverAnchor";
var PopoverAnchor = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverInternalContext(ANCHOR_NAME2, __scopePopover);
    const popperScope = usePopoverScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React20.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperAnchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME2;
var TRIGGER_NAME4 = "PopoverTrigger";
var PopoverTrigger = React20.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = usePopoverInternalContext(TRIGGER_NAME4, __scopePopover);
  const popperScope = usePopoverScope(__scopePopover);
  const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
  const trigger = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    YStack,
    {
      "aria-haspopup": "dialog",
      "aria-expanded": context.open,
      "data-state": getState3(context.open),
      ...triggerProps,
      ref: composedTriggerRef,
      onPress: (0, import_core25.composeEventHandlers)(props.onPress, context.onOpenToggle)
    }
  );
  return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperAnchor, { asChild: true, ...popperScope, children: trigger });
});
PopoverTrigger.displayName = TRIGGER_NAME4;
var CONTENT_NAME4 = "PopoverContent";
var PopoverContent = PopperContentFrame.extractable(
  React20.forwardRef(
    /* @__PURE__ */ __name(function PopoverContent2(props, forwardedRef) {
      const {
        allowPinchZoom,
        trapFocus,
        disableRemoveScroll = true,
        zIndex: zIndex2,
        ...contentImplProps
      } = props;
      const context = usePopoverInternalContext(CONTENT_NAME4, props.__scopePopover);
      const contentRef = React20.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, contentRef);
      const isRightClickOutsideRef = React20.useRef(false);
      React20.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden3.hideOthers)(content);
      }, [context.open]);
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverContentPortal, { zIndex: zIndex2, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        PopoverContentImpl,
        {
          ...contentImplProps,
          disableRemoveScroll,
          ref: composedRefs,
          trapFocus: trapFocus ?? context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core25.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            if (!isRightClickOutsideRef.current)
              (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core25.composeEventHandlers)(
            props.onPointerDownOutside,
            (event) => {
              const originalEvent = event.detail.originalEvent;
              const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
              const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
              isRightClickOutsideRef.current = isRightClick;
            },
            { checkDefaultPrevented: false }
          ),
          onFocusOutside: (0, import_core25.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault(),
            { checkDefaultPrevented: false }
          )
        }
      ) });
    }, "PopoverContent2")
  )
);
function PopoverContentPortal(props) {
  const themeName = (0, import_core25.useThemeName)();
  const context = usePopoverInternalContext(CONTENT_NAME4, props.__scopePopover);
  let contents = props.children;
  if (import_react_native8.Platform.OS === "android") {
    const popperContext = usePopperContext(CONTENT_NAME4, context.popperScope);
    contents = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperProvider, { ...popperContext, scope: context.popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverProviderInternal, { scope: props.__scopePopover, ...context, children: props.children }) });
  }
  const zIndex2 = props.zIndex ?? 15e4;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Portal, { zIndex: zIndex2, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_core25.Theme, { forceClassName: true, name: themeName, children: [
    !!context.open && !context.breakpointActive && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      YStack,
      {
        fullscreen: true,
        onPress: (0, import_core25.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_core25.Stack, { zIndex: zIndex2 + 1, children: contents })
  ] }) });
}
__name(PopoverContentPortal, "PopoverContentPortal");
var PopoverContentImpl = React20.forwardRef((props, forwardedRef) => {
  const {
    __scopePopover,
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    children,
    disableRemoveScroll,
    ...contentProps
  } = props;
  const popperScope = usePopoverScope(__scopePopover);
  const context = usePopoverInternalContext(CONTENT_NAME4, popperScope.__scopePopover);
  const [isFullyHidden, setIsFullyHidden] = React20.useState(!context.open);
  if (context.breakpointActive) {
    const childrenWithoutScrollView = React20.Children.toArray(children).map((child) => {
      if (React20.isValidElement(child)) {
        if (child.type === PopoverScrollView) {
          return child.props.children;
        }
      }
      return child;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PortalItem, { hostName: `${context.scopeKey}PopoverContents`, children: childrenWithoutScrollView });
  }
  if (context.open && isFullyHidden) {
    setIsFullyHidden(false);
  }
  if (isFullyHidden) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    AnimatePresence,
    {
      onExitComplete: () => {
        setIsFullyHidden(true);
      },
      children: !!context.open && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        PopperContent,
        {
          "data-state": getState3(context.open),
          id: context.contentId,
          pointerEvents: "auto",
          ref: forwardedRef,
          ...popperScope,
          ...contentProps,
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            RemoveScroll,
            {
              enabled: disableRemoveScroll ? false : context.open,
              allowPinchZoom: true,
              removeScrollBar: false,
              style: {
                display: "contents"
              },
              children: trapFocus === false ? children : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                import_focus_scope2.FocusScope,
                {
                  loop: true,
                  trapped: trapFocus ?? context.open,
                  onMountAutoFocus: onOpenAutoFocus,
                  onUnmountAutoFocus: onCloseAutoFocus,
                  children: import_core25.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { style: { display: "contents" }, children }) : children
                }
              )
            }
          )
        },
        context.contentId
      )
    }
  );
});
var CLOSE_NAME2 = "PopoverClose";
var PopoverClose = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverInternalContext(CLOSE_NAME2, __scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      YStack,
      {
        ...closeProps,
        ref: forwardedRef,
        onPress: (0, import_core25.composeEventHandlers)(
          props.onPress,
          () => context.onOpenChange(false)
        )
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME2;
var ARROW_NAME2 = "PopoverArrow";
var PopoverArrow = PopperArrow.styleable(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopoverScope(__scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperArrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME2;
var PopoverScrollView = React20.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_native8.ScrollView, { ref, ...props });
});
var Popover = (0, import_core25.withStaticProperties)(
  /* @__PURE__ */ __name(function Popover2(props) {
    const {
      __scopePopover,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      ...restProps
    } = props;
    const internalId = React20.useId();
    const id = __scopePopover ? Object.keys(__scopePopover)[0] : internalId;
    const { when, AdaptProvider } = useAdaptParent({
      Contents: React20.useCallback(() => {
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PortalHost, { name: `${id}PopoverContents` });
      }, [])
    });
    const sheetBreakpoint = when;
    const popperScope = usePopoverScope(__scopePopover);
    const triggerRef = React20.useRef(null);
    const [hasCustomAnchor, setHasCustomAnchor] = React20.useState(false);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange,
      transition: true
    });
    const breakpointActive = useSheetBreakpointActive2(sheetBreakpoint);
    const floatingContext = useFloatingContext({ open, setOpen, breakpointActive });
    const popoverContext = {
      scope: __scopePopover,
      scopeKey: id,
      popperScope: popperScope.__scopePopper,
      sheetBreakpoint,
      contentId: React20.useId(),
      triggerRef,
      open,
      breakpointActive,
      onOpenChange: setOpen,
      onOpenToggle: (0, import_core25.useEvent)(() => {
        if (open && breakpointActive) {
          return;
        }
        setOpen(!open);
      }),
      hasCustomAnchor,
      onCustomAnchorAdd: React20.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React20.useCallback(() => setHasCustomAnchor(false), [])
    };
    const contents = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Popper, { ...popperScope, stayInFrame: true, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverProviderInternal, { ...popoverContext, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverSheetController, { onOpenChange: setOpen, __scopePopover, children }) }) });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AdaptProvider, { children: import_core25.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FloatingOverrideContext.Provider, { value: floatingContext, children: contents }) : contents });
  }, "Popover2"),
  {
    Anchor: PopoverAnchor,
    Arrow: PopoverArrow,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Close: PopoverClose,
    Adapt,
    ScrollView: PopoverScrollView,
    Sheet: Sheet.Controlled
  }
);
function getState3(open) {
  return open ? "open" : "closed";
}
__name(getState3, "getState");
var PopoverSheetController = /* @__PURE__ */ __name((props) => {
  const context = usePopoverInternalContext(
    "PopoverSheetController",
    props.__scopePopover
  );
  const showSheet = useShowPopoverSheet(context);
  const breakpointActive = context.breakpointActive;
  const getShowSheet = (0, import_core25.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        if (getShowSheet()) {
          props.onOpenChange(val);
        }
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "PopoverSheetController");
var useSheetBreakpointActive2 = /* @__PURE__ */ __name((breakpoint) => {
  const media = (0, import_core25.useMedia)();
  if (typeof breakpoint === "boolean" || !breakpoint) {
    return !!breakpoint;
  }
  return media[breakpoint];
}, "useSheetBreakpointActive");
var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive2(context.sheetBreakpoint);
  return context.open === false ? false : breakpointActive;
}, "useShowPopoverSheet");

// ../../node_modules/@tamagui/progress/dist/esm/Progress.js
var import_jsx_runtime25 = require("react/jsx-runtime");
var import_core26 = require("@tamagui/core-node");
var import_get_size3 = __toESM(require_cjs7());
var React21 = __toESM(require("react"));
var PROGRESS_NAME = "Progress";
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var INDICATOR_NAME2 = "ProgressIndicator";
var ProgressIndicatorFrame = (0, import_core26.styled)(ThemeableStack, {
  name: INDICATOR_NAME2,
  height: "100%",
  width: "100%",
  backgrounded: true
});
var ProgressIndicator = ProgressIndicatorFrame.extractable(
  React21.forwardRef(
    (props, forwardedRef) => {
      const { __scopeProgress, ...indicatorProps } = props;
      const context = useProgressContext(INDICATOR_NAME2, __scopeProgress);
      const pct = context.max - (context.value ?? 0);
      const x = -context.width * (pct / 100);
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        ProgressIndicatorFrame,
        {
          "data-state": getProgressState(context.value, context.max),
          "data-value": context.value ?? void 0,
          "data-max": context.max,
          x,
          width: context.width,
          ...indicatorProps,
          ref: forwardedRef
        }
      );
    }
  )
);
ProgressIndicator.displayName = INDICATOR_NAME2;
function defaultGetValueLabel(value, max3) {
  return `${Math.round(value / max3 * 100)}%`;
}
__name(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name(getProgressState, "getProgressState");
function isNumber(value) {
  return typeof value === "number";
}
__name(isNumber, "isNumber");
function isValidMaxNumber(max3) {
  return isNumber(max3) && !isNaN(max3) && max3 > 0;
}
__name(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max3) {
  return isNumber(value) && !isNaN(value) && value <= max3 && value >= 0;
}
__name(isValidValueNumber, "isValidValueNumber");
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
__name(getInvalidMaxError, "getInvalidMaxError");
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name(getInvalidValueError, "getInvalidValueError");
var DEFAULT_MAX = 100;
var ProgressFrame = (0, import_core26.styled)(ThemeableStack, {
  name: PROGRESS_NAME,
  borderRadius: 1e5,
  overflow: "hidden",
  backgrounded: true,
  variants: {
    size: {
      "...size": (val) => {
        const size3 = Math.round((0, import_core26.getVariableValue)((0, import_get_size3.getSize)(val)) * 0.25);
        return {
          height: size3,
          minWidth: (0, import_core26.getVariableValue)(size3) * 20,
          width: "100%"
        };
      }
    }
  }
});
var Progress = (0, import_core26.withStaticProperties)(
  ProgressFrame.extractable(
    React21.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeProgress,
          value: valueProp,
          max: maxProp,
          getValueLabel = defaultGetValueLabel,
          size: size3 = "$true",
          ...progressProps
        } = props;
        const max3 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
        const value = isValidValueNumber(valueProp, max3) ? valueProp : null;
        const valueLabel = isNumber(value) ? getValueLabel(value, max3) : void 0;
        const [width, setWidth] = React21.useState(0);
        return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ProgressProvider, { scope: __scopeProgress, value, max: max3, width, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ProgressFrame,
          {
            size: size3,
            "aria-valuemax": max3,
            "aria-valuemin": 0,
            "aria-valuenow": isNumber(value) ? value : void 0,
            "aria-valuetext": valueLabel,
            role: "progressbar",
            "data-state": getProgressState(value, max3),
            "data-value": value ?? void 0,
            "data-max": max3,
            ...progressProps,
            onLayout: (e) => {
              var _a;
              setWidth(e.nativeEvent.layout.width);
              (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
            },
            ref: forwardedRef
          }
        ) });
      }
    )
  ),
  {
    Indicator: ProgressIndicator
  }
);
Progress.displayName = PROGRESS_NAME;
Progress.propTypes = {
  max(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !isValidMaxNumber(propValue)) {
      return new Error(getInvalidMaxError(strVal, componentName));
    }
    return null;
  },
  value(props, propName, componentName) {
    const valueProp = props[propName];
    const strVal = String(valueProp);
    const max3 = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
    if (valueProp != null && !isValidValueNumber(valueProp, max3)) {
      return new Error(getInvalidValueError(strVal, componentName));
    }
    return null;
  }
};

// ../../node_modules/@tamagui/radio-group/dist/esm/RadioGroup.js
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_react_use_previous2 = __toESM(require_dist6());
var import_core27 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs16());
var import_get_size4 = __toESM(require_cjs7());
var React22 = __toESM(require("react"));
var RADIO_GROUP_NAME = "RadioGroup";
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME);
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var getState4 = /* @__PURE__ */ __name((checked) => {
  return checked ? "checked" : "unchecked";
}, "getState");
var RADIO_GROUP_INDICATOR_NAME = "RadioGroupIndicator";
var RadioIndicatorFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_INDICATOR_NAME,
  variants: {
    unstyled: {
      false: {
        width: "33%",
        height: "33%",
        borderRadius: 1e3,
        backgroundColor: "$color",
        pressTheme: true
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var RadioIndicator = RadioIndicatorFrame.extractable(
  React22.forwardRef(
    (props, forwardedRef) => {
      const { __scopeRadioGroupItem, forceMount, disabled, ...indicatorProps } = props;
      const { checked } = useRadioGroupItemContext(
        RADIO_GROUP_INDICATOR_NAME,
        __scopeRadioGroupItem
      );
      if (forceMount || checked) {
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          RadioIndicatorFrame,
          {
            "data-state": getState4(checked),
            "data-disabled": disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef
          }
        );
      }
      return null;
    }
  )
);
RadioIndicator.displayName = RADIO_GROUP_INDICATOR_NAME;
var RADIO_GROUP_ITEM_NAME = "RadioGroupItem";
var [RadioGroupItemProvider, useRadioGroupItemContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroupItemFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_ITEM_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        borderRadius: 1e3,
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "$borderColor",
        padding: 0,
        hoverStyle: {
          borderColor: "$borderColorHover",
          background: "$backgroundHover"
        },
        focusStyle: {
          borderColor: "$borderColorHover",
          background: "$backgroundHover"
        },
        pressStyle: {
          borderColor: "$borderColorFocus",
          background: "$backgroundFocus"
        }
      }
    },
    size: {
      "...size": (value, { props }) => {
        const size3 = Math.floor(
          (0, import_core27.getVariableValue)((0, import_get_size4.getSize)(value)) * (props["scaleSize"] ?? 0.5)
        );
        return {
          width: size3,
          height: size3
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var RadioGroupItem = RadioGroupItemFrame.extractable(
  React22.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeRadioGroup,
        value,
        labelledBy: ariaLabelledby,
        disabled: itemDisabled,
        ...itemProps
      } = props;
      const {
        value: groupValue,
        disabled,
        required,
        onChange,
        name,
        native,
        accentColor
      } = useRadioGroupContext(RADIO_GROUP_ITEM_NAME, __scopeRadioGroup);
      const [button, setButton] = React22.useState(null);
      const hasConsumerStoppedPropagationRef = React22.useRef(false);
      const ref = React22.useRef(null);
      const composedRefs = (0, import_core27.useComposedRefs)(forwardedRef, (node) => setButton(node), ref);
      const isArrowKeyPressedRef = React22.useRef(false);
      const isFormControl = import_core27.isWeb ? button ? Boolean(button.closest("form")) : true : false;
      const checked = groupValue === value;
      const labelId = useLabelContext(button);
      const labelledBy = ariaLabelledby || labelId;
      React22.useEffect(() => {
        if (import_core27.isWeb) {
          const handleKeyDown = /* @__PURE__ */ __name((event) => {
            if (ARROW_KEYS.includes(event.key)) {
              isArrowKeyPressedRef.current = true;
            }
          }, "handleKeyDown");
          const handleKeyUp = /* @__PURE__ */ __name(() => {
            isArrowKeyPressedRef.current = false;
          }, "handleKeyUp");
          document.addEventListener("keydown", handleKeyDown);
          document.addEventListener("keyup", handleKeyUp);
          return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
          };
        }
      }, []);
      if (process.env.TAMAGUI_TARGET === "native") {
        React22.useEffect(() => {
          if (!props.id)
            return;
          return (0, import_focusable3.registerFocusable)(props.id, {
            focusAndSelect: () => {
              onChange == null ? void 0 : onChange(value);
            },
            focus: () => {
            }
          });
        }, [props.id, value]);
      }
      const isDisabled = disabled || itemDisabled;
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RadioGroupItemProvider, { checked, scope: __scopeRadioGroup, children: import_core27.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        BubbleInput2,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled: isDisabled,
          id: props.id,
          accentColor
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          RadioGroupItemFrame,
          {
            "data-state": getState4(checked),
            "data-disabled": isDisabled ? "" : void 0,
            role: "radio",
            "aria-labelledby": labelledBy,
            "aria-checked": checked,
            "aria-required": required,
            disabled: isDisabled,
            ref: composedRefs,
            ...import_core27.isWeb && {
              type: "button",
              value
            },
            ...itemProps,
            onPress: (0, import_core27.composeEventHandlers)(props.onPress, (event) => {
              if (!checked) {
                onChange == null ? void 0 : onChange(value);
              }
              if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                if (!hasConsumerStoppedPropagationRef.current)
                  event.stopPropagation();
              }
            }),
            ...import_core27.isWeb && {
              onKeyDown: (0, import_core27.composeEventHandlers)(
                props.onKeyDown,
                (event) => {
                  if (event.key === "Enter")
                    event.preventDefault();
                }
              ),
              onFocus: (0, import_core27.composeEventHandlers)(itemProps.onFocus, () => {
                var _a;
                if (isArrowKeyPressedRef.current)
                  (_a = ref.current) == null ? void 0 : _a.click();
              })
            }
          }
        ),
        isFormControl && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          BubbleInput2,
          {
            isHidden: true,
            control: button,
            bubbles: !hasConsumerStoppedPropagationRef.current,
            name,
            value,
            checked,
            required,
            disabled: isDisabled
          }
        )
      ] }) });
    }
  )
);
var BubbleInput2 = /* @__PURE__ */ __name((props) => {
  const { checked, bubbles = true, control, isHidden, accentColor, ...inputProps } = props;
  const ref = React22.useRef(null);
  const prevChecked = (0, import_react_use_previous2.usePrevious)(checked);
  React22.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(
      inputProto,
      "checked"
    );
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "input",
    {
      type: "radio",
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      "aria-hidden": isHidden,
      style: {
        ...isHidden ? {
          // ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        } : {
          appearance: "auto",
          accentColor
        },
        ...props.style
      }
    }
  );
}, "BubbleInput");
var RadioGroupFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_NAME,
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      }
    }
  }
});
var RadioGroup = (0, import_core27.withStaticProperties)(
  RadioGroupFrame.extractable(
    React22.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeRadioGroup,
          value: valueProp,
          defaultValue: defaultValue2,
          onValueChange,
          disabled = false,
          required = false,
          name,
          orientation,
          native,
          accentColor,
          ...radioGroupProps
        } = props;
        const [value, setValue] = useControllableState({
          prop: valueProp,
          defaultProp: defaultValue2,
          onChange: onValueChange
        });
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          RadioGroupProvider,
          {
            scope: __scopeRadioGroup,
            value,
            required,
            onChange: setValue,
            disabled,
            name,
            native,
            accentColor,
            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
              RadioGroupFrame,
              {
                "aria-valuetext": value,
                role: "radiogroup",
                "aria-orientation": orientation,
                ref: forwardedRef,
                orientation,
                "data-disabled": disabled ? "" : void 0,
                ...radioGroupProps
              }
            )
          }
        );
      }
    )
  ),
  {
    Indicator: RadioIndicator,
    Item: RadioGroupItem
  }
);
RadioGroup.displayName = RADIO_GROUP_NAME;

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_core35 = require("@tamagui/core-node");
var import_helpers_tamagui3 = __toESM(require_cjs15());
var import_list_item = __toESM(require_cjs22());

// ../../node_modules/@tamagui/separator/dist/esm/Separator.js
var import_core28 = require("@tamagui/core-node");
var Separator = (0, import_core28.styled)(import_core28.Stack, {
  name: "Separator",
  borderColor: "$borderColor",
  flexShrink: 0,
  borderWidth: 0,
  flex: 1,
  height: 0,
  maxHeight: 0,
  borderBottomWidth: 1,
  y: -0.5,
  variants: {
    vertical: {
      true: {
        y: 0,
        x: -0.5,
        height: import_core28.isWeb ? "initial" : "auto",
        // maxHeight auto WILL BE passed to style attribute, but for some reason not used?
        // almost seems like a react or browser bug, but for now `initial` works
        // also, it doesn't happen for `height`, but for consistency using the same values
        maxHeight: import_core28.isWeb ? "initial" : "auto",
        width: 0,
        maxWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 1
      }
    }
  }
});

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var React26 = __toESM(require("react"));

// ../../node_modules/@tamagui/select/dist/esm/constants.js
var SELECT_NAME = "Select";
var WINDOW_PADDING = 8;
var SCROLL_ARROW_THRESHOLD = 8;
var VIEWPORT_NAME = "SelectViewport";

// ../../node_modules/@tamagui/select/dist/esm/context.js
var import_jsx_runtime27 = require("react/jsx-runtime");
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME);
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var ForwardSelectContext = /* @__PURE__ */ __name((props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(SelectProvider, { isInSheet: true, scope: props.__scopeSelect, ...props.context, children: props.children });
}, "ForwardSelectContext");

// ../../node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_jsx_runtime28 = require("react/jsx-runtime");
var import_core30 = require("@tamagui/core-node");
var import_focus_scope3 = __toESM(require_cjs6());

// ../../node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.js
var import_core29 = require("@tamagui/core-node");
var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
  const media = (0, import_core29.useMedia)();
  if (!sheetBreakpoint)
    return false;
  if (sheetBreakpoint === true)
    return true;
  return sheetBreakpoint ? media[sheetBreakpoint] : false;
}, "useSelectBreakpointActive");
var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
  return context.open === false ? false : breakpointActive;
}, "useShowSelectSheet");

// ../../node_modules/@tamagui/select/dist/esm/SelectContent.js
var CONTENT_NAME5 = "SelectContent";
var SelectContent = /* @__PURE__ */ __name(({
  children,
  __scopeSelect,
  zIndex: zIndex2 = 1e3,
  ...focusScopeProps
}) => {
  const context = useSelectContext(CONTENT_NAME5, __scopeSelect);
  const themeName = (0, import_core30.useThemeName)();
  const showSheet = useShowSelectSheet(context);
  const contents = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_core30.Theme, { forceClassName: true, name: themeName, children });
  const touch = (0, import_core30.useIsTouchDevice)();
  if (context.shouldRenderWebNative) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children });
  }
  if (showSheet) {
    if (!context.open) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: contents });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FloatingPortal, { children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FloatingOverlay, { style: { zIndex: zIndex2 }, lockScroll: !touch, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_focus_scope3.FocusScope, { loop: true, trapped: true, ...focusScopeProps, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Dismissable, { children: contents }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { style: { display: "none" }, children: contents }) });
}, "SelectContent");

// ../../node_modules/@tamagui/select/dist/esm/SelectImpl.js
var import_jsx_runtime29 = require("react/jsx-runtime");
var import_core31 = require("@tamagui/core-node");
var React23 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
  const {
    __scopeSelect,
    children,
    open = false,
    selectedIndexRef,
    listContentRef
  } = props;
  const selectContext = useSelectContext("SelectSheetImpl", __scopeSelect);
  const {
    setActiveIndex,
    setOpen,
    setSelectedIndex,
    selectedIndex,
    activeIndex,
    forceUpdate
  } = selectContext;
  const [scrollTop, setScrollTop] = React23.useState(0);
  const touch = (0, import_core31.useIsTouchDevice)();
  const listItemsRef = React23.useRef([]);
  const overflowRef = React23.useRef(null);
  const upArrowRef = React23.useRef(null);
  const downArrowRef = React23.useRef(null);
  const allowSelectRef = React23.useRef(false);
  const allowMouseUpRef = React23.useRef(true);
  const selectTimeoutRef = React23.useRef();
  const state = React23.useRef({
    isMouseOutside: false
  });
  const [controlledScrolling, setControlledScrolling] = React23.useState(false);
  const [fallback, setFallback] = React23.useState(false);
  const [innerOffset, setInnerOffset] = React23.useState(0);
  const [blockSelection, setBlockSelection] = React23.useState(false);
  const floatingStyle = React23.useRef({});
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    queueMicrotask(() => {
      if (!open) {
        setScrollTop(0);
        setFallback(false);
        setActiveIndex(null);
        setControlledScrolling(false);
      }
    });
  }, [open, setActiveIndex]);
  if (import_core31.isWeb && import_core31.isClient) {
    (0, import_core31.useIsomorphicLayoutEffect)(() => {
      if (!open)
        return;
      const mouseUp = /* @__PURE__ */ __name((e) => {
        if (state.current.isMouseOutside) {
          setOpen(false);
        }
      }, "mouseUp");
      document.addEventListener("mouseup", mouseUp);
      return () => {
        document.removeEventListener("mouseup", mouseUp);
      };
    }, [open]);
  }
  const updateFloatingSize = size2({
    apply({
      availableHeight,
      rects: {
        reference: { width }
      }
    }) {
      floatingStyle.current = {
        width,
        maxHeight: availableHeight
      };
    },
    padding: WINDOW_PADDING
  });
  const { x, y, reference, floating, strategy, context, refs } = useFloating3({
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    placement: "bottom-start",
    middleware: fallback ? [
      offset(5),
      ...[
        touch ? shift({ crossAxis: true, padding: WINDOW_PADDING }) : flip({ padding: WINDOW_PADDING })
      ],
      updateFloatingSize
    ] : [
      inner({
        listRef: listItemsRef,
        overflowRef,
        index: selectedIndex,
        offset: innerOffset,
        onFallbackChange: setFallback,
        padding: 10,
        minItemsVisible: touch ? 10 : 4,
        referenceOverflowThreshold: 20
      }),
      updateFloatingSize
    ]
  });
  const floatingRef = refs.floating;
  const showUpArrow = open && scrollTop > SCROLL_ARROW_THRESHOLD;
  const showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - SCROLL_ARROW_THRESHOLD;
  const interactions = useInteractions([
    useClick(context, { event: "mousedown" }),
    useDismiss(context, { outsidePress: true }),
    useRole(context, { role: "listbox" }),
    useInnerOffset(context, {
      enabled: !fallback,
      onChange: setInnerOffset,
      overflowRef
    }),
    useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex
    }),
    useTypeahead(context, {
      listRef: listContentRef,
      onMatch: open ? setActiveIndex : setSelectedIndex,
      selectedIndex,
      activeIndex
    })
  ]);
  const interactionsContext = React23.useMemo(() => {
    return {
      ...interactions,
      getReferenceProps() {
        return interactions.getReferenceProps({
          ref: reference,
          className: "SelectTrigger",
          onKeyDown(event) {
            if (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) {
              event.preventDefault();
              setOpen(true);
            }
          }
        });
      },
      getFloatingProps(props2) {
        return interactions.getFloatingProps({
          ref: floating,
          className: "Select",
          ...props2,
          style: {
            position: strategy,
            top: y ?? "",
            left: x ?? "",
            outline: 0,
            scrollbarWidth: "none",
            ...floatingStyle.current,
            ...props2 == null ? void 0 : props2.style
          },
          onPointerEnter() {
            setControlledScrolling(false);
            state.current.isMouseOutside = false;
          },
          onPointerLeave() {
            state.current.isMouseOutside = true;
          },
          onPointerMove() {
            state.current.isMouseOutside = false;
            setControlledScrolling(false);
          },
          onKeyDown() {
            setControlledScrolling(true);
          },
          onContextMenu(e) {
            e.preventDefault();
          },
          onScroll(event) {
            (0, import_react_dom5.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
          }
        });
      }
    };
  }, [floating, y, x, interactions]);
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    if (open) {
      selectTimeoutRef.current = setTimeout(() => {
        allowSelectRef.current = true;
      }, 300);
      return () => {
        clearTimeout(selectTimeoutRef.current);
      };
    } else {
      allowSelectRef.current = false;
      allowMouseUpRef.current = true;
      setInnerOffset(0);
      setFallback(false);
      setBlockSelection(false);
    }
  }, [open]);
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    function onPointerDown(e) {
      var _a, _b, _c;
      const target = e.target;
      if (!(((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) || ((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) || ((_c = downArrowRef.current) == null ? void 0 : _c.contains(target)))) {
        setOpen(false);
        setControlledScrolling(false);
      }
    }
    __name(onPointerDown, "onPointerDown");
    if (open) {
      document.addEventListener("pointerdown", onPointerDown);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown);
      };
    }
  }, [open, refs, setOpen]);
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    var _a, _b;
    if (open && controlledScrolling) {
      if (activeIndex != null) {
        (_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
      }
    }
    setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
  }, [open, refs, controlledScrolling, activeIndex]);
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    var _a;
    if (open && fallback) {
      if (selectedIndex != null) {
        (_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
      }
    }
  }, [open, fallback, selectedIndex]);
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    if (refs.floating.current && fallback) {
      refs.floating.current.style.maxHeight = "";
    }
  }, [refs, fallback]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    SelectProvider,
    {
      scope: __scopeSelect,
      ...selectContext,
      setScrollTop,
      setInnerOffset,
      floatingRef,
      setValueAtIndex: (index3, value) => {
        listContentRef.current[index3] = value;
      },
      fallback,
      interactions: interactionsContext,
      floatingContext: context,
      activeIndex,
      canScrollDown: !!showDownArrow,
      canScrollUp: !!showUpArrow,
      controlledScrolling,
      dataRef: context.dataRef,
      listRef: listItemsRef,
      blockSelection,
      allowMouseUpRef,
      upArrowRef,
      downArrowRef,
      selectTimeoutRef,
      allowSelectRef,
      children
    }
  );
}, "SelectInlineImpl");
var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";

// ../../node_modules/@tamagui/select/dist/esm/SelectScrollButton.js
var import_jsx_runtime30 = require("react/jsx-runtime");
var import_core32 = require("@tamagui/core-node");
var React24 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React24.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    SelectScrollButtonImpl,
    {
      componentName: SCROLL_UP_BUTTON_NAME,
      ...props,
      dir: "up",
      ref: forwardedRef
    }
  );
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React24.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    SelectScrollButtonImpl,
    {
      componentName: SCROLL_DOWN_BUTTON_NAME,
      ...props,
      dir: "down",
      ref: forwardedRef
    }
  );
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React24.memo(
  React24.forwardRef(
    (props, forwardedRef) => {
      var _a;
      const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props;
      const {
        floatingRef,
        forceUpdate,
        open,
        fallback,
        setScrollTop,
        setInnerOffset,
        ...context
      } = useSelectContext(componentName, __scopeSelect);
      const [element, setElement] = React24.useState(null);
      const statusRef = React24.useRef("idle");
      const isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"];
      const frameRef = React24.useRef();
      const { x, y, reference, floating, strategy, update, refs } = useFloating3({
        open: open && isVisible,
        strategy: "fixed",
        placement: dir === "up" ? "top" : "bottom",
        middleware: [offset(({ rects }) => -rects.floating.height)],
        whileElementsMounted: (...args) => autoUpdate(...args, { animationFrame: true })
      });
      const composedRef = useComposedRefs(forwardedRef, floating);
      if (floatingRef) {
        if (open) {
          if (element !== floatingRef.current) {
            setElement(floatingRef.current);
            reference(floatingRef.current);
            requestAnimationFrame(update);
          }
        } else {
          cancelAnimationFrame(frameRef.current);
        }
      }
      (0, import_core32.useIsomorphicLayoutEffect)(() => {
        return () => {
          cancelAnimationFrame(frameRef.current);
        };
      }, []);
      if (!(isVisible && floatingRef)) {
        return null;
      }
      const onScroll = /* @__PURE__ */ __name((amount) => {
        if (fallback) {
          if (refs.floating.current) {
            refs.floating.current.scrollTop -= amount;
            (0, import_react_dom6.flushSync)(() => {
              var _a2;
              return setScrollTop(((_a2 = refs.floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
            });
          }
        } else {
          (0, import_react_dom6.flushSync)(() => setInnerOffset((value) => value - amount));
        }
      }, "onScroll");
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        YStack,
        {
          ref: composedRef,
          componentName,
          "aria-hidden": true,
          ...scrollIndicatorProps,
          zIndex: 1e3,
          position: strategy,
          left: x || 0,
          top: y || 0,
          width: `calc(${(((_a = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _a.offsetWidth) ?? 0) - 2}px)`,
          onPointerEnter: () => {
            statusRef.current = "active";
            let prevNow = Date.now();
            function frame() {
              if (element) {
                const currentNow = Date.now();
                const msElapsed = currentNow - prevNow;
                prevNow = currentNow;
                const pixelsToScroll = msElapsed / 2;
                const remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop;
                const scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                onScroll(
                  dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                );
                if (scrollRemaining) {
                  frameRef.current = requestAnimationFrame(frame);
                }
              }
            }
            __name(frame, "frame");
            cancelAnimationFrame(frameRef.current);
            frameRef.current = requestAnimationFrame(frame);
          },
          onPointerLeave: () => {
            statusRef.current = "idle";
            cancelAnimationFrame(frameRef.current);
          }
        }
      );
    }
  )
);

// ../../node_modules/@tamagui/select/dist/esm/SelectViewport.js
var import_jsx_runtime31 = require("react/jsx-runtime");
var import_core33 = require("@tamagui/core-node");
var import_core34 = require("@tamagui/core-node");
var React25 = __toESM(require("react"));
var SelectViewportFrame = (0, import_core34.styled)(ThemeableStack, {
  name: VIEWPORT_NAME,
  backgroundColor: "$background",
  elevate: true,
  bordered: true,
  userSelect: "none",
  outlineWidth: 0,
  variants: {
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          borderRadius: tokens2.radius[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    size: "$2"
  }
});
var SelectViewport = React25.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, disableScroll, ...viewportProps } = props;
    const context = useSelectContext(VIEWPORT_NAME, __scopeSelect);
    const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
    if (context.shouldRenderWebNative) {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children });
    }
    if (breakpointActive || !import_core33.isWeb) {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(PortalItem, { hostName: `${context.scopeKey}SheetContents`, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ForwardSelectContext, { context, children }) });
    }
    if (!context.floatingContext) {
      return null;
    }
    if (!context.open) {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children });
    }
    const {
      style: { scrollbarWidth, listStyleType, overflow, ...restStyle },
      ...floatingProps
    } = context.interactions.getFloatingProps();
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      !disableScroll && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: selectViewportCSS
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FloatingFocusManager, { context: context.floatingContext, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        SelectViewportFrame,
        {
          size: context.size,
          role: "presentation",
          ...viewportProps,
          ref: forwardedRef,
          ...floatingProps,
          ...restStyle,
          overflow: disableScroll ? void 0 : overflow ?? "scroll",
          children
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME;
var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var TRIGGER_NAME5 = "SelectTrigger";
var SelectTrigger = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const context = useSelectContext(TRIGGER_NAME5, __scopeSelect);
    if (context.shouldRenderWebNative) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_list_item.ListItem,
      {
        componentName: TRIGGER_NAME5,
        backgrounded: true,
        radiused: true,
        hoverTheme: true,
        pressTheme: true,
        focusTheme: true,
        focusable: true,
        borderWidth: 1,
        size: context.size,
        "aria-expanded": context.open,
        "aria-autocomplete": "none",
        dir: context.dir,
        disabled,
        "data-disabled": disabled ? "" : void 0,
        ...triggerProps,
        ref: forwardedRef,
        ...process.env.TAMAGUI_TARGET === "web" && context.interactions ? context.interactions.getReferenceProps() : {
          onPress() {
            context.setOpen(!context.open);
          }
        }
      }
    );
  }
);
SelectTrigger.displayName = TRIGGER_NAME5;
var VALUE_NAME = "SelectValue";
var SelectValueFrame = (0, import_core35.styled)(Paragraph, {
  name: VALUE_NAME,
  userSelect: "none"
});
var SelectValue = SelectValueFrame.extractable(
  React26.forwardRef(
    ({
      __scopeSelect,
      children: childrenProp,
      placeholder
    }, forwardedRef) => {
      const context = useSelectContext(VALUE_NAME, __scopeSelect);
      const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
      const children = childrenProp ?? context.selectedItem;
      const isEmptyValue = context.value == null || context.value === "";
      const selectValueChildren = isEmptyValue ? placeholder ?? children : children;
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        SelectValueFrame,
        {
          size: context.size,
          ref: composedRefs,
          pointerEvents: "none",
          children: selectValueChildren
        }
      );
    }
  )
);
SelectValue.displayName = VALUE_NAME;
var SelectIcon = (0, import_core35.styled)(XStack, {
  name: "SelectIcon",
  // @ts-ignore
  "aria-hidden": true,
  children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Paragraph, { children: "\u25BC" })
});
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React26.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      index: index3,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const textId = React26.useId();
    const {
      selectedIndex,
      setSelectedIndex,
      listRef,
      open,
      setOpen,
      onChange,
      setActiveIndex,
      allowMouseUpRef,
      allowSelectRef,
      setValueAtIndex,
      selectTimeoutRef,
      dataRef
    } = context;
    const composedRefs = useComposedRefs(forwardedRef, (node) => {
      if (!import_core35.isWeb)
        return;
      if (node instanceof HTMLElement) {
        if (listRef) {
          listRef.current[index3] = node;
        }
      }
    });
    (0, import_core35.useIsomorphicLayoutEffect)(() => {
      setValueAtIndex(index3, value);
    }, [index3, setValueAtIndex, value]);
    function handleSelect() {
      setSelectedIndex(index3);
      onChange(value);
      setOpen(false);
    }
    __name(handleSelect, "handleSelect");
    const selectItemProps = context.interactions ? context.interactions.getItemProps({
      onTouchStart() {
        allowSelectRef.current = true;
        allowMouseUpRef.current = false;
      },
      onKeyDown(event) {
        if (event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing)) {
          event.preventDefault();
          handleSelect();
        } else {
          allowSelectRef.current = true;
        }
      },
      onClick() {
        if (allowSelectRef.current) {
          setSelectedIndex(index3);
          setOpen(false);
        }
      },
      onMouseUp() {
        if (!allowMouseUpRef.current) {
          return;
        }
        if (allowSelectRef.current) {
          handleSelect();
        }
        clearTimeout(selectTimeoutRef.current);
        selectTimeoutRef.current = setTimeout(() => {
          allowSelectRef.current = true;
        });
      }
    }) : {
      onPress: handleSelect
    };
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        textId: textId || "",
        isSelected,
        children: context.shouldRenderWebNative ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value, children: props.children }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          import_list_item.ListItem,
          {
            tag: "div",
            backgrounded: true,
            pressTheme: true,
            hoverTheme: true,
            cursor: "default",
            outlineWidth: 0,
            componentName: ITEM_NAME,
            ref: composedRefs,
            "aria-labelledby": textId,
            "aria-selected": isSelected,
            "data-state": isSelected ? "active" : "inactive",
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : -1,
            size: context.size,
            focusStyle: {
              backgroundColor: "$backgroundHover"
            },
            ...itemProps,
            ...selectItemProps
          }
        )
      }
    );
  }
);
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemTextFrame = (0, import_core35.styled)(SizableText, {
  name: ITEM_TEXT_NAME,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SelectItemText = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const ref = React26.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const isSelected = Boolean(itemContext.isSelected && context.valueNode);
    const contents = React26.useMemo(
      () => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        SelectItemTextFrame,
        {
          className,
          size: context.size,
          id: itemContext.textId,
          ...itemTextProps,
          ref: composedRefs
        }
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props, context.size, className, itemContext.textId]
    );
    (0, import_core35.useIsomorphicLayoutEffect)(() => {
      if (isSelected) {
        context.setSelectedItem(contents);
      }
    }, [isSelected, contents]);
    if (context.shouldRenderWebNative)
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: props.children });
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: contents });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicatorFrame = (0, import_core35.styled)(XStack, {
  name: ITEM_TEXT_NAME
});
var SelectItemIndicator = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const context = useSelectContext(ITEM_INDICATOR_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    if (context.shouldRenderWebNative)
      return null;
    return itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SelectItemIndicatorFrame, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroupFrame = (0, import_core35.styled)(YStack, {
  name: GROUP_NAME,
  width: "100%"
});
var NativeSelectTextFrame = (0, import_core35.styled)(SizableText, {
  tag: "select",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  }
});
var NativeSelectFrame = (0, import_core35.styled)(ThemeableStack, {
  name: "NativeSelect",
  bordered: true,
  userSelect: "none",
  outlineWidth: 0,
  paddingRight: 10,
  variants: {
    size: {
      "...size": (val, extras) => {
        const { tokens: tokens2 } = extras;
        const paddingHorizontal = (0, import_core35.getVariableValue)(tokens2.space[val]);
        return {
          borderRadius: tokens2.radius[val] ?? val,
          minHeight: tokens2.size[val],
          paddingRight: paddingHorizontal + 20,
          paddingLeft: paddingHorizontal,
          paddingVertical: (0, import_helpers_tamagui3.getSpace)(val, -2)
        };
      }
    }
  },
  defaultVariants: {
    size: "$2"
  }
});
var SelectGroup = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = React26.useId();
    const context = useSelectContext(GROUP_NAME, __scopeSelect);
    const size3 = context.size ?? "$true";
    const nativeSelectRef = React26.useRef(null);
    const content = function() {
      if (context.shouldRenderWebNative) {
        return (
          // @ts-expect-error until we support typing based on tag
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(NativeSelectFrame, { asChild: true, size: size3, value: context.value, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            NativeSelectTextFrame,
            {
              onChange: (event) => {
                context.onChange(event.currentTarget.value);
              },
              size: size3,
              ref: nativeSelectRef,
              style: {
                color: "var(--color)",
                // @ts-ignore
                appearance: "none"
              },
              children: props.children
            }
          ) })
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        SelectGroupFrame,
        {
          role: "group",
          "aria-labelledby": groupId,
          ...groupProps,
          ref: forwardedRef
        }
      );
    }();
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId || "", children: content });
  }
);
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const context = useSelectContext(LABEL_NAME, __scopeSelect);
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    if (context.shouldRenderWebNative) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_list_item.ListItem,
      {
        tag: "div",
        componentName: LABEL_NAME,
        fontWeight: "800",
        id: groupContext.id,
        size: context.size,
        ...labelProps,
        ref: forwardedRef
      }
    );
  }
);
SelectLabel.displayName = LABEL_NAME;
var SelectSeparator = (0, import_core35.styled)(Separator, {
  name: "SelectSeparator"
});
var SelectSheetController = /* @__PURE__ */ __name((props) => {
  const context = useSelectContext("SelectSheetController", props.__scopeSelect);
  const showSheet = useShowSelectSheet(context);
  const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
  const getShowSheet = (0, import_core35.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        if (getShowSheet()) {
          props.onOpenChange(val);
        }
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "SelectSheetController");
var SelectSheetImpl = /* @__PURE__ */ __name((props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: props.children });
}, "SelectSheetImpl");
var Select = (0, import_core35.withStaticProperties)(
  (props) => {
    const {
      __scopeSelect,
      native,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      value: valueProp,
      defaultValue: defaultValue2,
      onValueChange,
      size: sizeProp = "$true",
      dir
    } = props;
    const id = React26.useId();
    const scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id;
    const { when, AdaptProvider } = useAdaptParent({
      Contents: React26.useCallback(
        () => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(PortalHost, { name: `${scopeKey}SheetContents` }),
        [scopeKey]
      )
    });
    const sheetBreakpoint = when;
    const isSheet = useSelectBreakpointActive(sheetBreakpoint);
    const SelectImpl = isSheet || !import_core35.isWeb ? SelectSheetImpl : SelectInlineImpl;
    const forceUpdate = React26.useReducer(() => ({}), {})[1];
    const [selectedItem, setSelectedItem] = React26.useState(null);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange
    });
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue2 || "",
      onChange: onValueChange,
      transition: true
    });
    const [activeIndex, setActiveIndex] = React26.useState(0);
    const selectedIndexRef = React26.useRef(null);
    const activeIndexRef = React26.useRef(null);
    const listContentRef = React26.useRef([]);
    const [selectedIndex, setSelectedIndex] = React26.useState(0);
    const [valueNode, setValueNode] = React26.useState(null);
    (0, import_core35.useIsomorphicLayoutEffect)(() => {
      selectedIndexRef.current = selectedIndex;
      activeIndexRef.current = activeIndex;
    });
    const shouldRenderWebNative = import_core35.isWeb && (native === true || native === "web" || Array.isArray(native) && native.includes("web"));
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      SelectProvider,
      {
        dir,
        blockSelection: false,
        size: sizeProp,
        fallback: false,
        selectedItem,
        setSelectedItem,
        forceUpdate,
        valueNode,
        onValueNodeChange: setValueNode,
        scopeKey,
        sheetBreakpoint,
        scope: __scopeSelect,
        setValueAtIndex: (index3, value2) => {
          listContentRef.current[index3] = value2;
        },
        activeIndex,
        onChange: setValue,
        selectedIndex,
        setActiveIndex,
        setOpen,
        setSelectedIndex,
        value,
        open,
        native,
        shouldRenderWebNative,
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SelectSheetController, { onOpenChange: setOpen, __scopeSelect, children: shouldRenderWebNative ? children : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          SelectImpl,
          {
            activeIndexRef,
            listContentRef,
            selectedIndexRef,
            ...props,
            open,
            value,
            children
          }
        ) })
      }
    ) });
  },
  {
    Adapt,
    Content: SelectContent,
    Group: SelectGroup,
    Icon: SelectIcon,
    Item: SelectItem,
    ItemIndicator: SelectItemIndicator,
    ItemText: SelectItemText,
    Label: SelectLabel,
    ScrollDownButton: SelectScrollDownButton,
    ScrollUpButton: SelectScrollUpButton,
    Trigger: SelectTrigger,
    Value: SelectValue,
    Viewport: SelectViewport,
    Sheet: Sheet.Controlled
  }
);
Select.displayName = SELECT_NAME;

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_core37 = require("@tamagui/core-node");
var import_get_size6 = __toESM(require_cjs7());

// ../../node_modules/@tamagui/helpers/dist/esm/clamp.js
function clamp(value, [min3, max3]) {
  return Math.min(max3, Math.max(min3, value));
}
__name(clamp, "clamp");

// ../../node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.js
function composeEventHandlers8(og, next, { checkDefaultPrevented = true } = {}) {
  if (!og || !next) {
    return next || og;
  }
  return /* @__PURE__ */ __name(function composedEventHandler(event) {
    og == null ? void 0 : og(event);
    if (!event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
    "defaultPrevented" in event && !event.defaultPrevented) {
      return next == null ? void 0 : next(event);
    }
  }, "composedEventHandler");
}
__name(composeEventHandlers8, "composeEventHandlers");

// ../../node_modules/@tamagui/constants/dist/esm/index.js
var import_react34 = require("react");
var isWeb16 = process.env.TAMAGUI_TARGET === "web";
var isWindowDefined = typeof window !== "undefined";
var isServer = isWeb16 && !isWindowDefined;
var isClient4 = isWeb16 && isWindowDefined;
var isRSC2 = process.env.ENABLE_RSC;
var idFn2 = /* @__PURE__ */ __name(() => {
}, "idFn");
var useIsomorphicLayoutEffect12 = isRSC2 ? idFn2 : isServer ? import_react34.useEffect : import_react34.useLayoutEffect;
var isChrome = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient4 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
if (!process.env.TAMAGUI_TARGET) {
  console.warn(`\u26A0\uFE0F Must set TAMAGUI_TARGET`);
}
if (process.env.NODE_ENV === "development") {
  if (isClient4 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1") {
    console.warn(
      `Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this`
    );
  }
}
var isAndroid2 = false;

// ../../node_modules/@tamagui/helpers/dist/esm/validStyleProps.js
var stylePropsTransform = Object.freeze({
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
});
var validStylesOnBaseProps = Object.freeze({
  placeholderTextColor: true
});
var stylePropsView = Object.freeze({
  backfaceVisibility: true,
  backgroundColor: true,
  borderBottomColor: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRightColor: true,
  borderRightWidth: true,
  borderStartColor: true,
  borderStyle: true,
  borderTopColor: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  opacity: true,
  transform: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  aspectRatio: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  height: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  width: true,
  zIndex: true,
  direction: true,
  shadowColor: true,
  shadowOffset: true,
  shadowOpacity: true,
  shadowRadius: true,
  ...validStylesOnBaseProps,
  ...stylePropsTransform,
  // allow a few web only ones
  ...process.env.TAMAGUI_TARGET === "web" && {
    // RN doesn't support specific border styles per-edge
    borderBottomStyle: true,
    borderTopStyle: true,
    borderLeftStyle: true,
    borderRightStyle: true,
    overflowX: true,
    overflowY: true,
    userSelect: true,
    cursor: true,
    contain: true,
    pointerEvents: true,
    boxSizing: true,
    boxShadow: true,
    outlineColor: true,
    outlineStyle: true,
    outlineOffset: true,
    outlineWidth: true
  },
  ...isAndroid2 ? { elevationAndroid: true } : {}
});
var stylePropsFont = Object.freeze({
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  letterSpacing: true,
  lineHeight: true,
  textTransform: true
});
var stylePropsTextOnly = Object.freeze({
  color: true,
  ...stylePropsFont,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: true,
  textShadowColor: true,
  textShadowOffset: true,
  textShadowRadius: true,
  // allow some web only ones
  ...process.env.TAMAGUI_TARGET === "web" && {
    whiteSpace: true,
    wordWrap: true,
    textOverflow: true,
    textDecorationDistance: true,
    userSelect: true,
    selectable: true,
    cursor: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true
  }
});
var stylePropsText = Object.freeze({
  ...stylePropsView,
  ...stylePropsTextOnly
});
var validPseudoKeys = Object.freeze({
  enterStyle: true,
  exitStyle: true,
  hoverStyle: true,
  pressStyle: true,
  focusStyle: true
});
var validStyles = Object.freeze({
  ...validPseudoKeys,
  ...stylePropsView
});

// ../../node_modules/@tamagui/use-direction/dist/esm/useDirection.js
var import_jsx_runtime33 = require("react/jsx-runtime");
var React27 = __toESM(require("react"));
var DirectionContext = React27.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React27.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
__name(useDirection, "useDirection");

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var React29 = __toESM(require("react"));

// ../../node_modules/@tamagui/slider/dist/esm/constants.js
var SLIDER_NAME = "Slider";
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  sizeProp: "width",
  size: 0,
  direction: 1
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
  rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
};

// ../../node_modules/@tamagui/slider/dist/esm/helpers.js
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
__name(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min3, max3) {
  const maxSteps = max3 - min3;
  const percentPerStep = 100 / maxSteps;
  return percentPerStep * (value - min3);
}
__name(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index3, totalValues) {
  if (totalValues > 2) {
    return `Value ${index3 + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index3];
  } else {
    return void 0;
  }
}
__name(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
__name(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset2 = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset2(left) * direction) * direction;
}
__name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index3) => values[index3 + 1] - value);
}
__name(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
__name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
__name(linearScale, "linearScale");
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
__name(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
__name(roundValue, "roundValue");

// ../../node_modules/@tamagui/slider/dist/esm/SliderImpl.js
var import_jsx_runtime34 = require("react/jsx-runtime");
var import_core36 = require("@tamagui/core-node");
var import_get_size5 = __toESM(require_cjs7());
var React28 = __toESM(require("react"));
var DirectionalYStack = (0, import_core36.styled)(YStack, {
  variants: {
    orientation: {
      horizontal: {},
      vertical: {}
    }
  }
});
var SliderFrame = (0, import_core36.styled)(DirectionalYStack, {
  position: "relative",
  variants: {
    size: (val, extras) => {
      const orientation = extras.props.orientation;
      const size3 = Math.round((0, import_core36.getVariableValue)((0, import_get_size5.getSize)(val)) / 6);
      if (orientation === "horizontal") {
        return {
          height: size3,
          borderRadius: size3,
          justifyContent: "center"
        };
      }
      return {
        width: size3,
        borderRadius: size3,
        alignItems: "center"
      };
    }
  }
});
var SliderImpl = React28.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      SliderFrame,
      {
        size: "$4",
        ...sliderProps,
        "data-orientation": sliderProps.orientation,
        ref: forwardedRef,
        ...import_core36.isWeb && {
          onKeyDown: (event) => {
            if (event.key === "Home") {
              onHomeKeyDown(event);
              event.preventDefault();
            } else if (event.key === "End") {
              onEndKeyDown(event);
              event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS2).includes(event.key)) {
              onStepKeyDown(event);
              event.preventDefault();
            }
          }
        },
        onMoveShouldSetResponderCapture: () => true,
        onScrollShouldSetResponder: () => true,
        onScrollShouldSetResponderCapture: () => true,
        onMoveShouldSetResponder: () => true,
        onStartShouldSetResponder: () => true,
        onResponderTerminationRequest: () => {
          return false;
        },
        onResponderGrant: (0, import_core36.composeEventHandlers)(props.onResponderGrant, (event) => {
          const target = event.target;
          const isStartingOnThumb = context.thumbs.has(target);
          if (import_core36.isWeb && target instanceof HTMLElement) {
            if (context.thumbs.has(target)) {
              target.focus();
            }
          }
          onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
        }),
        onResponderMove: (0, import_core36.composeEventHandlers)(props.onResponderMove, (event) => {
          event.stopPropagation();
          onSlideMove(event);
        }),
        onResponderRelease: (0, import_core36.composeEventHandlers)(props.onResponderRelease, (event) => {
          onSlideEnd(event);
        })
      }
    );
  }
);

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var SliderHorizontal = React29.forwardRef(
  (props, forwardedRef) => {
    const { min: min3, max: max3, dir, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const sliderRef = React29.useRef(null);
    const [state, setState] = React29.useState(() => ({ size: 0, offset: 0 }));
    function getValueFromPointer(pointerPosition) {
      const input = [0, state.size];
      const output = isDirectionLTR ? [min3, max3] : [max3, min3];
      const value = linearScale(input, output);
      return value(pointerPosition);
    }
    __name(getValueFromPointer, "getValueFromPointer");
    const measure = /* @__PURE__ */ __name(() => {
      var _a;
      (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
        setState({
          size: width,
          offset: pageX
        });
      });
    }, "measure");
    if (import_core37.isClient) {
      useOnDebouncedWindowResize(measure);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isDirectionLTR ? "left" : "right",
        endEdge: isDirectionLTR ? "right" : "left",
        direction: isDirectionLTR ? 1 : -1,
        sizeProp: "width",
        size: state.size,
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          SliderImpl,
          {
            ref: composeRefs(forwardedRef, sliderRef),
            dir: direction,
            ...sliderProps,
            orientation: "horizontal",
            onLayout: measure,
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationX);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = BACK_KEYS[direction].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
function useOnDebouncedWindowResize(callback, amt = 200) {
  React29.useEffect(() => {
    let last;
    const onResize = /* @__PURE__ */ __name(() => {
      clearTimeout(last);
      last = setTimeout(callback, amt);
    }, "onResize");
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(last);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}
__name(useOnDebouncedWindowResize, "useOnDebouncedWindowResize");
var SliderVertical = React29.forwardRef(
  (props, forwardedRef) => {
    const { min: min3, max: max3, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
    const [state, setState] = React29.useState(() => ({ size: 0, offset: 0 }));
    const sliderRef = React29.useRef(null);
    function getValueFromPointer(pointerPosition) {
      const input = [0, state.size];
      const output = [max3, min3];
      const value = linearScale(input, output);
      return value(pointerPosition);
    }
    __name(getValueFromPointer, "getValueFromPointer");
    const measure = /* @__PURE__ */ __name(() => {
      var _a;
      (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
        setState({
          size: height,
          offset: pageY
        });
      });
    }, "measure");
    if (import_core37.isClient) {
      useOnDebouncedWindowResize(measure);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: "bottom",
        endEdge: "top",
        sizeProp: "height",
        size: state.size,
        direction: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          SliderImpl,
          {
            ref: composeRefs(forwardedRef, sliderRef),
            ...sliderProps,
            orientation: "vertical",
            onLayout: measure,
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationY);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = BACK_KEYS.ltr.includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrackFrame = (0, import_core37.styled)(SliderFrame, {
  name: "SliderTrack",
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgroundColor: "$background",
        position: "relative",
        borderRadius: 1e5,
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SliderTrack = React29.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderTrackFrame,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        orientation: context.orientation,
        size: context.size,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderTrackActive";
var SliderTrackActiveFrame = (0, import_core37.styled)(SliderFrame, {
  name: "SliderTrackActive",
  backgroundColor: "$background",
  position: "absolute"
});
var SliderTrackActive = React29.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = React29.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderTrackActiveFrame,
      {
        orientation: context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        size: context.size,
        ...rangeProps,
        ref: composedRefs,
        ...{
          [orientation.startEdge]: `${offsetStart}%`,
          [orientation.endEdge]: `${offsetEnd}%`
        },
        ...orientation.sizeProp === "width" ? {
          height: "100%"
        } : {
          left: 0,
          right: 0
        }
      }
    );
  }
);
SliderTrackActive.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var getThumbSize = /* @__PURE__ */ __name((val) => {
  const size3 = typeof val === "number" ? val : (0, import_get_size6.getSize)(val, -1);
  return {
    width: size3,
    height: size3,
    minWidth: size3,
    minHeight: size3
  };
}, "getThumbSize");
var SliderThumbFrame = (0, import_core37.styled)(ThemeableStack, {
  name: "SliderThumb",
  variants: {
    size: {
      "...size": getThumbSize
    },
    unstyled: {
      false: {
        position: "absolute",
        bordered: 2,
        borderWidth: 2,
        backgrounded: true,
        pressTheme: import_core37.isWeb,
        focusTheme: import_core37.isWeb,
        hoverTheme: import_core37.isWeb
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SliderThumb = React29.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index: index3, size: sizeProp, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = React29.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const value = context.values[index3];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index3, context.values.length);
    const sizeIn = sizeProp ?? context.size ?? "$true";
    const [size3, setSize] = React29.useState(() => {
      const estimatedSize = (0, import_core37.getVariableValue)(getThumbSize(sizeIn).width);
      return estimatedSize;
    });
    const thumbInBoundsOffset = size3 ? getThumbInBoundsOffset(size3, percent, orientation.direction) : 0;
    React29.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderThumbFrame,
      {
        ref: composedRefs,
        role: "slider",
        "aria-label": props["aria-label"] || label,
        "aria-valuemin": context.min,
        "aria-valuenow": value,
        "aria-valuemax": context.max,
        "aria-orientation": context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        tabIndex: context.disabled ? void 0 : 0,
        animateOnly: ["transform", "left", "right", "top", "bottom"],
        ...thumbProps,
        ...context.orientation === "horizontal" ? {
          x: thumbInBoundsOffset - size3 / 2,
          y: -size3 / 2,
          top: "50%",
          ...size3 === 0 && {
            top: "auto",
            bottom: "auto"
          }
        } : {
          x: -size3 / 2,
          y: size3 / 2,
          left: "50%",
          ...size3 === 0 && {
            left: "auto",
            right: "auto"
          }
        },
        ...{
          [orientation.startEdge]: `${percent}%`
        },
        size: sizeIn,
        onLayout: (e) => {
          setSize(e.nativeEvent.layout[orientation.sizeProp]);
        },
        onFocus: composeEventHandlers8(props.onFocus, () => {
          context.valueIndexToChangeRef.current = index3;
        })
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME;
var Slider = (0, import_core37.withStaticProperties)(
  React29.forwardRef((props, forwardedRef) => {
    const {
      name,
      min: min3 = 0,
      max: max3 = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue: defaultValue2 = [min3],
      value,
      onValueChange = /* @__PURE__ */ __name(() => {
      }, "onValueChange"),
      size: sizeProp,
      ...sliderProps
    } = props;
    const sliderRef = React29.useRef(null);
    const composedRefs = useComposedRefs(sliderRef, forwardedRef);
    const thumbRefs = React29.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = React29.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue2,
      transition: true,
      onChange: (value2) => {
        var _a;
        if (import_core37.isWeb) {
          const thumbs = [...thumbRefs.current];
          (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
        }
        onValueChange(value2);
      }
    });
    if (import_core37.isWeb) {
      React29.useEffect(() => {
        const node = sliderRef.current;
        if (!node)
          return;
        const preventDefault = /* @__PURE__ */ __name((e) => {
          e.preventDefault();
        }, "preventDefault");
        node.addEventListener("touchstart", preventDefault);
        return () => {
          node.removeEventListener("touchstart", preventDefault);
        };
      }, []);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    __name(handleSlideMove, "handleSlideMove");
    function updateValues(value2, atIndex) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(
        Math.round((value2 - min3) / step) * step + min3,
        decimalCount
      );
      const nextValue = clamp(snapToStep, [min3, max3]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          return String(nextValues) === String(prevValues) ? prevValues : nextValues;
        } else {
          return prevValues;
        }
      });
    }
    __name(updateValues, "updateValues");
    const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        disabled,
        min: min3,
        max: max3,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        size: sizeProp,
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          SliderOriented,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: composedRefs,
            min: min3,
            max: max3,
            onSlideStart: disabled ? void 0 : (value2, target) => {
              if (target !== "thumb") {
                const closestIndex = getClosestValueIndex(values, value2);
                updateValues(value2, closestIndex);
              }
            },
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onHomeKeyDown: () => !disabled && updateValues(min3, 0),
            onEndKeyDown: () => !disabled && updateValues(max3, values.length - 1),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS2.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex);
              }
            }
          }
        )
      }
    );
  }),
  {
    Track: SliderTrack,
    TrackActive: SliderTrackActive,
    Thumb: SliderThumb
  }
);
Slider.displayName = SLIDER_NAME;
var Track = SliderTrack;
var Range = SliderTrackActive;
var Thumb = SliderThumb;

// ../../node_modules/@tamagui/switch/dist/esm/Switch.js
var import_jsx_runtime36 = require("react/jsx-runtime");
var import_react_use_previous3 = __toESM(require_dist7());
var import_core38 = require("@tamagui/core-node");
var import_focusable4 = __toESM(require_cjs16());
var import_get_size7 = __toESM(require_cjs7());
var React30 = __toESM(require("react"));
var SWITCH_NAME = "Switch";
var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core38.getVariableValue)((0, import_get_size7.getSize)(val)) * 0.65), "getSwitchHeight");
var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
var scopeContexts = createContextScope(SWITCH_NAME);
var [createSwitchContext] = scopeContexts;
var createSwitchScope = scopeContexts[1];
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var THUMB_NAME2 = "SwitchThumb";
var SwitchThumbFrame = (0, import_core38.styled)(ThemeableStack, {
  name: "SwitchThumb",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        borderRadius: 1e3
      }
    },
    size: {
      "...size": (val) => {
        const size3 = getSwitchHeight(val);
        return {
          height: size3,
          width: size3
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SwitchThumb = SwitchThumbFrame.extractable(
  React30.forwardRef(
    (props, forwardedRef) => {
      const { __scopeSwitch, size: sizeProp, ...thumbProps } = props;
      const {
        size: sizeContext,
        disabled,
        checked,
        unstyled
      } = useSwitchContext(THUMB_NAME2, __scopeSwitch);
      const size3 = sizeProp ?? sizeContext;
      return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        SwitchThumbFrame,
        {
          unstyled,
          theme: checked ? "active" : null,
          size: size3,
          "data-state": getState5(checked),
          "data-disabled": disabled ? "" : void 0,
          ...thumbProps,
          x: checked ? (0, import_core38.getVariableValue)(getSwitchWidth(size3)) - (0, import_core38.getVariableValue)(getSwitchHeight(size3)) : 0,
          ref: forwardedRef
        }
      );
    }
  )
);
SwitchThumb.displayName = THUMB_NAME2;
var SwitchFrame = (0, import_core38.styled)(XStack, {
  name: SWITCH_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        borderRadius: 1e3,
        borderWidth: 2,
        borderColor: "transparent",
        backgroundColor: "$background",
        focusStyle: {
          borderColor: "$borderColorFocus",
          outlineColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 1
        }
      }
    },
    size: {
      "...size": (val) => {
        const height = getSwitchHeight(val) + 4;
        const width = getSwitchWidth(val) + 4;
        return {
          height,
          minHeight: height,
          width
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Switch = (0, import_core38.withStaticProperties)(
  SwitchFrame.extractable(
    React30.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSwitch,
          labeledBy: ariaLabelledby,
          name,
          checked: checkedProp,
          defaultChecked,
          required,
          disabled,
          value = "on",
          onCheckedChange,
          size: size3 = "$true",
          unstyled = false,
          ...switchProps
        } = props;
        const [button, setButton] = React30.useState(null);
        const composedRefs = useComposedRefs(
          forwardedRef,
          (node) => setButton(node)
        );
        const labelId = useLabelContext(button);
        const labelledBy = ariaLabelledby || labelId;
        const hasConsumerStoppedPropagationRef = React30.useRef(false);
        const isFormControl = import_core38.isWeb ? button ? Boolean(button.closest("form")) : true : false;
        const [checked = false, setChecked] = useControllableState({
          prop: checkedProp,
          defaultProp: defaultChecked || false,
          onChange: onCheckedChange,
          transition: true
        });
        if (!import_core38.isWeb) {
          React30.useEffect(() => {
            if (!props.id)
              return;
            return (0, import_focusable4.registerFocusable)(props.id, {
              focus: () => {
                setChecked((x) => !x);
              }
            });
          }, [props.id, setChecked]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
          SwitchProvider,
          {
            scope: __scopeSwitch,
            checked,
            disabled,
            size: size3,
            unstyled,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                SwitchFrame,
                {
                  unstyled,
                  size: size3,
                  theme: checked ? "active" : null,
                  role: "switch",
                  "aria-checked": checked,
                  "aria-labelledby": labelledBy,
                  "aria-required": required,
                  "data-state": getState5(checked),
                  "data-disabled": disabled ? "" : void 0,
                  disabled,
                  tabIndex: disabled ? void 0 : 0,
                  value,
                  ...switchProps,
                  ref: composedRefs,
                  onPress: (event) => {
                    var _a;
                    (_a = props.onPress) == null ? void 0 : _a.call(props, event);
                    setChecked((prevChecked) => !prevChecked);
                    if (import_core38.isWeb && isFormControl) {
                      hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                      if (!hasConsumerStoppedPropagationRef.current)
                        event.stopPropagation();
                    }
                  }
                }
              ),
              import_core38.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                BubbleInput3,
                {
                  control: button,
                  bubbles: !hasConsumerStoppedPropagationRef.current,
                  name,
                  value,
                  checked,
                  required,
                  disabled,
                  style: { transform: "translateX(-100%)" }
                }
              )
            ]
          }
        );
      }
    )
  ),
  {
    Thumb: SwitchThumb
  }
);
var BubbleInput3 = /* @__PURE__ */ __name((props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React30.useRef(null);
  const prevChecked = (0, import_react_use_previous3.usePrevious)(checked);
  React30.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(
      inputProto,
      "checked"
    );
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        // ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
}, "BubbleInput");
function getState5(checked) {
  return checked ? "checked" : "unchecked";
}
__name(getState5, "getState");

// ../../node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_jsx_runtime39 = require("react/jsx-runtime");
var import_get_button_sized4 = __toESM(require_cjs8());
var import_group = __toESM(require_cjs20());

// ../../node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_jsx_runtime38 = require("react/jsx-runtime");

// ../../node_modules/@tamagui/collection/dist/esm/Collection.js
var import_jsx_runtime37 = require("react/jsx-runtime");
var import_core39 = require("@tamagui/core-node");
var import_react35 = __toESM(require("react"));
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: { current: null },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = /* @__PURE__ */ __name((props) => {
    const { scope, children } = props;
    const ref = import_react35.default.useRef(null);
    const itemMap = import_react35.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react35.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_core39.Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-collection-item";
  const CollectionItemSlot = import_react35.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = import_react35.default.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      import_react35.default.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_core39.Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react35.default.useCallback(() => {
      if (!import_core39.isWeb) {
        return [];
      }
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(
        collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`)
      );
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  __name(useCollection2, "useCollection");
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
__name(createCollection, "createCollection");

// ../../node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_core40 = require("@tamagui/core-node");
var React32 = __toESM(require("react"));
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var RovingFocusGroupImpl = React32.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    ...groupProps
  } = props;
  const ref = React32.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React32.useState(false);
  const handleEntryFocus = (0, import_core40.useEvent)(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React32.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React32.useState(0);
  React32.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React32.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React32.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React32.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React32.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_core40.Stack,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: [{ outline: "none" }, props.style],
          onMouseDown: (0, import_core40.composeEventHandlers)(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: (0, import_core40.composeEventHandlers)(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: (0, import_core40.composeEventHandlers)(
            props.onBlur,
            () => setIsTabbingBackOut(false)
          )
        }
      )
    }
  );
});
var ITEM_NAME2 = "RovingFocusGroupItem";
var RovingFocusGroupItem = React32.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    focusable = true,
    active = false,
    tabStopId,
    ...itemProps
  } = props;
  const autoId = React32.useId();
  const id = tabStopId || autoId;
  const context = useRovingFocusContext(ITEM_NAME2, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  React32.useEffect(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    Collection.ItemSlot,
    {
      scope: __scopeRovingFocusGroup,
      id,
      focusable,
      active,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_core40.Stack,
        {
          tabIndex: isCurrentTabStop ? 0 : -1,
          "data-orientation": context.orientation,
          ...itemProps,
          ref: forwardedRef,
          onMouseDown: (0, import_core40.composeEventHandlers)(props.onMouseDown, (event) => {
            if (!focusable)
              event.preventDefault();
            else
              context.onItemFocus(id);
          }),
          onFocus: (0, import_core40.composeEventHandlers)(props.onFocus, () => context.onItemFocus(id)),
          ...import_core40.isWeb && {
            onKeyDown: (0, import_core40.composeEventHandlers)(
              props.onKeyDown,
              (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget)
                  return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  event.preventDefault();
                  const items = getItems().filter((item) => item.focusable);
                  let candidateNodes = items.map((item) => item.ref.current);
                  if (focusIntent === "last")
                    candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    if (focusIntent === "prev")
                      candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst(candidateNodes));
                }
              }
            )
          }
        }
      )
    }
  );
});
RovingFocusGroupItem.displayName = ITEM_NAME2;
var GROUP_NAME2 = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME2);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME2,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME2);
var RovingFocusGroup = (0, import_core40.withStaticProperties)(
  React32.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
    }
  ),
  {
    Item: RovingFocusGroupItem
  }
);
RovingFocusGroup.displayName = GROUP_NAME2;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name(getFocusIntent, "getFocusIntent");
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
__name(focusFirst, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index3) => array[(startIndex + index3) % array.length]);
}
__name(wrapArray, "wrapArray");

// ../../node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_web12 = require("@tamagui/core-node");
var React33 = __toESM(require("react"));
var TAB_LIST_NAME = "TabsList";
var TabsListFrame = (0, import_web12.styled)(import_group.Group, {
  name: TAB_LIST_NAME,
  focusable: true
});
var TabsList = TabsListFrame.extractable(
  React33.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, loop = true, children, ...listProps } = props;
      const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        RovingFocusGroup,
        {
          asChild: true,
          orientation: context.orientation,
          dir: context.dir,
          loop,
          ...rovingFocusGroupScope,
          children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            TabsListFrame,
            {
              role: "tablist",
              "aria-orientation": context.orientation,
              ref: forwardedRef,
              axis: context.orientation,
              ...listProps,
              children
            }
          )
        }
      );
    }
  )
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME6 = "TabsTrigger";
var TabsTriggerFrame = (0, import_web12.styled)(ThemeableStack, {
  name: TRIGGER_NAME6,
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  cursor: "pointer",
  focusable: true,
  variants: {
    size: {
      "...size": import_get_button_sized4.getButtonSized
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        backgroundColor: "$background",
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        focusStyle: {
          backgroundColor: "$backgroundFocus"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var TabsTrigger = TabsTriggerFrame.extractable(
  React33.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeTabs,
        value,
        disabled = false,
        onInteraction,
        ...triggerProps
      } = props;
      const context = useTabsContext(TRIGGER_NAME6, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      const [layout, setLayout] = React33.useState(null);
      const triggerRef = React33.useRef(null);
      const groupItemProps = (0, import_group.useGroupItem)({ disabled });
      React33.useEffect(() => {
        context.registerTrigger();
        return () => context.unregisterTrigger();
      }, []);
      React33.useEffect(() => {
        if (!triggerRef.current || !import_web12.isWeb)
          return;
        function getTriggerSize() {
          if (!triggerRef.current)
            return;
          setLayout({
            width: triggerRef.current.offsetWidth,
            height: triggerRef.current.offsetHeight,
            x: triggerRef.current.offsetLeft,
            y: triggerRef.current.offsetTop
          });
        }
        __name(getTriggerSize, "getTriggerSize");
        getTriggerSize();
        const observer = new ResizeObserver(getTriggerSize);
        observer.observe(triggerRef.current);
        return () => {
          if (!triggerRef.current)
            return;
          observer.unobserve(triggerRef.current);
        };
      }, [context.triggersCount]);
      React33.useEffect(() => {
        if (isSelected && layout) {
          onInteraction == null ? void 0 : onInteraction("select", layout);
        }
      }, [isSelected, value, layout]);
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_web12.Theme, { name: isSelected ? "active" : null, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        RovingFocusGroup.Item,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            TabsTriggerFrame,
            {
              onLayout: (event) => {
                if (!import_web12.isWeb) {
                  setLayout(event.nativeEvent.layout);
                }
              },
              onHoverIn: (0, import_web12.composeEventHandlers)(props.onHoverIn, () => {
                if (layout) {
                  onInteraction == null ? void 0 : onInteraction("hover", layout);
                }
              }),
              onHoverOut: (0, import_web12.composeEventHandlers)(props.onHoverOut, () => {
                onInteraction == null ? void 0 : onInteraction("hover", null);
              }),
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId,
              size: context.size,
              ...triggerProps,
              ref: (0, import_web12.composeRefs)(forwardedRef, triggerRef),
              onPress: (0, import_web12.composeEventHandlers)(props.onPress ?? void 0, (event) => {
                const webChecks = !import_web12.isWeb || event.button === 0 && event.ctrlKey === false;
                if (!disabled && !isSelected && webChecks) {
                  context.onChange(value);
                } else {
                  event.preventDefault();
                }
              }),
              ...import_web12.isWeb && {
                type: "button",
                onKeyDown: (0, import_web12.composeEventHandlers)(
                  props.onKeyDown,
                  (event) => {
                    if ([" ", "Enter"].includes(event.key)) {
                      context.onChange(value);
                      event.preventDefault();
                    }
                  }
                ),
                onFocus: (0, import_web12.composeEventHandlers)(props.onFocus, (event) => {
                  if (layout) {
                    onInteraction == null ? void 0 : onInteraction("focus", layout);
                  }
                  const isAutomaticActivation = context.activationMode !== "manual";
                  if (!isSelected && !disabled && isAutomaticActivation) {
                    context.onChange(value);
                  }
                }),
                onBlur: (0, import_web12.composeEventHandlers)(props.onFocus, () => {
                  onInteraction == null ? void 0 : onInteraction("focus", null);
                })
              },
              ...groupItemProps
            }
          )
        }
      ) });
    }
  )
);
TabsTrigger.displayName = TRIGGER_NAME6;
var CONTENT_NAME6 = "TabsContent";
var TabsContentFrame = (0, import_web12.styled)(ThemeableStack, {
  name: CONTENT_NAME6
});
var TabsContent = TabsContentFrame.extractable(
  React33.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
      const context = useTabsContext(CONTENT_NAME6, __scopeTabs);
      const isSelected = value === context.value;
      const show = forceMount || isSelected;
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      if (!show)
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        TabsContentFrame,
        {
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !show,
          id: contentId,
          tabIndex: 0,
          ...contentProps,
          ref: forwardedRef,
          children
        },
        value
      );
    }
  )
);
TabsContent.displayName = CONTENT_NAME6;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var TabsFrame = (0, import_web12.styled)(SizableStack, {
  name: TABS_NAME
});
var Tabs = (0, import_web12.withStaticProperties)(
  TabsFrame.extractable(
    React33.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeTabs,
          value: valueProp,
          onValueChange,
          defaultValue: defaultValue2,
          orientation = "horizontal",
          dir,
          activationMode = "automatic",
          size: size3 = "$true",
          ...tabsProps
        } = props;
        const direction = useDirection(dir);
        const [value, setValue] = useControllableState({
          prop: valueProp,
          onChange: onValueChange,
          defaultProp: defaultValue2 ?? ""
        });
        const [triggersCount, setTriggersCount] = React33.useState(0);
        const registerTrigger = (0, import_web12.useEvent)(() => setTriggersCount((v) => v + 1));
        const unregisterTrigger = (0, import_web12.useEvent)(() => setTriggersCount((v) => v - 1));
        return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          TabsProvider,
          {
            scope: __scopeTabs,
            baseId: React33.useId(),
            value,
            onChange: setValue,
            orientation,
            dir: direction,
            activationMode,
            size: size3,
            registerTrigger,
            triggersCount,
            unregisterTrigger,
            children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              TabsFrame,
              {
                direction,
                "data-orientation": orientation,
                ...tabsProps,
                ref: forwardedRef
              }
            )
          }
        );
      }
    )
  ),
  {
    List: TabsList,
    /**
     * @deprecated Use Tabs.Tab instead
     */
    Trigger: TabsTrigger,
    Tab: TabsTrigger,
    Content: TabsContent
  }
);
Tabs.displayName = TABS_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs23()));

// ../../node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_jsx_runtime41 = require("react/jsx-runtime");
var import_focusable5 = __toESM(require_cjs16());
var import_font_size3 = __toESM(require_cjs11());
var import_get_size8 = __toESM(require_cjs7());
var import_group2 = __toESM(require_cjs20());
var import_helpers_tamagui4 = __toESM(require_cjs15());
var import_web14 = require("@tamagui/core-node");
var import_react36 = __toESM(require("react"));

// ../../node_modules/@tamagui/toggle-group/dist/esm/Toggle.js
var import_jsx_runtime40 = require("react/jsx-runtime");
var import_web13 = require("@tamagui/core-node");
var React34 = __toESM(require("react"));
var NAME2 = "Toggle";
var ToggleFrame = (0, import_web13.styled)(ThemeableStack, {
  name: NAME2,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        pressTheme: true,
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderColor: "$borderColor",
        borderWidth: 1,
        margin: -1,
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        focusStyle: {
          borderColor: "$borderColorFocus",
          outlineColor: "$borderColorFocus",
          outlineWidth: 2,
          outlineStyle: "solid"
        }
      }
    },
    active: {
      true: {
        zIndex: 1,
        hoverStyle: {
          backgroundColor: "$background"
        },
        focusStyle: {
          borderColor: "$borderColorPress",
          backgroundColor: "$backgroundPress"
        }
      }
    },
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Toggle = ToggleFrame.extractable(
  React34.forwardRef((props, forwardedRef) => {
    const {
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      ...buttonProps
    } = props;
    const [pressed = false, setPressed] = useControllableState({
      prop: pressedProp,
      onChange: onPressedChange,
      defaultProp: defaultPressed
    });
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_web13.Theme, { name: pressed ? "active" : null, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      ToggleFrame,
      {
        active: !props.unstyled ? pressed : void 0,
        "aria-pressed": pressed,
        "data-state": pressed ? "on" : "off",
        "data-disabled": props.disabled ? "" : void 0,
        ...buttonProps,
        ref: forwardedRef,
        onPress: (0, import_web13.composeEventHandlers)(props.onPress ?? void 0, (event) => {
          if (!props.disabled) {
            setPressed(!pressed);
          }
        })
      }
    ) });
  })
);
Toggle.displayName = NAME2;

// ../../node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(
  TOGGLE_GROUP_NAME,
  [createRovingFocusGroupScope]
);
var TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem";
var [createToggleGroupItemContext, createToggleGroupItemScope] = createContextScope(TOGGLE_GROUP_ITEM_NAME);
var [ToggleGroupItemProvider, useToggleGroupItemContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var useToggleGroupItemScope = createToggleGroupItemScope();
var ToggleGroupItem = ToggleFrame.extractable(
  import_react36.default.forwardRef(
    (props, forwardedRef) => {
      const valueContext = useToggleGroupValueContext(
        TOGGLE_GROUP_ITEM_NAME,
        props.__scopeToggleGroup
      );
      const context = useToggleGroupContext(
        TOGGLE_GROUP_ITEM_NAME,
        props.__scopeToggleGroup
      );
      const __scopeToggleGroup = props.__scopeToggleGroup;
      const rovingFocusGroupScope = useRovingFocusGroupScope2(props.__scopeToggleGroup);
      const pressed = valueContext.value.includes(props.value);
      const disabled = context.disabled || props.disabled || false;
      const ref = import_react36.default.useRef(null);
      const groupItemProps = (0, import_group2.useGroupItem)({ disabled });
      const size3 = props.size ?? context.size;
      const sizeProps = {
        width: void 0,
        height: void 0,
        padding: (0, import_web14.getVariableValue)(size3) * 0.6
      };
      if (props.orientation === "horizontal") {
        sizeProps.height = (0, import_web14.getVariableValue)(size3) * 2.4;
      } else {
        sizeProps.width = (0, import_web14.getVariableValue)(size3) * 2.4;
      }
      const iconSize = (typeof size3 === "number" ? size3 * 0.7 : (0, import_font_size3.getFontSize)(size3)) * 1.2;
      const theme = (0, import_web14.useTheme)();
      const getThemedIcon = (0, import_helpers_tamagui4.useGetThemedIcon)({ size: iconSize, color: theme.color });
      const childrens = import_react36.default.Children.toArray(props.children);
      const children = childrens.map((child) => {
        if (props.disablePassStyles || !import_react36.default.isValidElement(child)) {
          return child;
        }
        return getThemedIcon(child);
      });
      const commonProps = { ...props, pressed, disabled, ...sizeProps, children };
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupItemProvider, { scope: __scopeToggleGroup, children: context.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        RovingFocusGroup.Item,
        {
          asChild: true,
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: pressed,
          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            ToggleFrame,
            {
              asChild: true,
              focusable: !disabled,
              disabled,
              ref,
              ...groupItemProps,
              children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
            }
          )
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleFrame, { asChild: true, focusable: !disabled, disabled, ref, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef }) }) });
    }
  )
);
ToggleGroupItem.displayName = TOGGLE_GROUP_ITEM_NAME;
var ToggleGroupItemImpl = ToggleFrame.extractable(
  import_react36.default.forwardRef(
    (props, forwardedRef) => {
      const { __scopeToggleGroup, value, ...itemProps } = props;
      const valueContext = useToggleGroupValueContext(
        TOGGLE_GROUP_ITEM_NAME,
        __scopeToggleGroup
      );
      const singleProps = {
        "aria-pressed": void 0
      };
      const typeProps = valueContext.type === "single" ? singleProps : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        Toggle,
        {
          ...typeProps,
          ...itemProps,
          ref: forwardedRef,
          onPressedChange: (pressed) => {
            if (pressed) {
              valueContext.onItemActivate(value);
            } else {
              valueContext.onItemDeactivate(value);
            }
          }
        }
      );
    }
  )
);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var ToggleGroup = (0, import_web14.withStaticProperties)(
  import_react36.default.forwardRef((props, forwardedRef) => {
    const { type, ...toggleGroupProps } = props;
    if (!import_web14.isWeb) {
      import_react36.default.useEffect(() => {
        if (!props.id)
          return;
        return (0, import_focusable5.registerFocusable)(props.id, {
          // TODO: would be nice to focus on the first child later - could be done with reforest
          // for now leaving it empty
          focus: () => {
          }
        });
      }, [props.id]);
    }
    if (type === "single") {
      const singleProps = toggleGroupProps;
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
    }
    if (type === "multiple") {
      const multipleProps = toggleGroupProps;
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
    }
    throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
  }),
  {
    Item: ToggleGroupItem
  }
);
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react36.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    disableDeactivation = false,
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      defaultValue: value,
      onItemActivate: setValue,
      onItemDeactivate: import_react36.default.useCallback(
        () => disableDeactivation ? null : setValue(""),
        [setValue, disableDeactivation]
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = import_react36.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  });
  const handleButtonActivate = import_react36.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = import_react36.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      defaultValue: value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplElementFrame = (0, import_web14.styled)(import_group2.Group, {
  name: TOGGLE_GROUP_NAME,
  variants: {
    unstyled: {
      false: {
        backgroundColor: "$background"
      }
    },
    orientation: {
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      },
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var ToggleGroupImpl = ToggleGroupImplElementFrame.extractable(
  import_react36.default.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeToggleGroup,
        disabled = false,
        orientation = "horizontal",
        dir,
        rovingFocus = true,
        loop = true,
        unstyled = false,
        size: sizeProp = "$true",
        sizeAdjust = 0,
        ...toggleGroupProps
      } = props;
      const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeToggleGroup);
      const direction = useDirection(dir);
      const commonProps = {
        role: "group",
        dir: direction,
        ...toggleGroupProps
      };
      const adjustedSize = (0, import_web14.getVariableValue)(
        (0, import_get_size8.stepTokenUpOrDown)("size", props.size, sizeAdjust)
      );
      const size3 = Math.round(adjustedSize * 0.45);
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        ToggleGroupContext,
        {
          scope: __scopeToggleGroup,
          rovingFocus,
          disabled,
          size: size3,
          children: rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            RovingFocusGroup,
            {
              asChild: true,
              ...rovingFocusGroupScope,
              orientation,
              dir: direction,
              loop,
              children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                ToggleGroupImplElementFrame,
                {
                  "aria-orientation": orientation,
                  orientation,
                  axis: orientation,
                  ref: forwardedRef,
                  "data-disabled": disabled ? "" : void 0,
                  unstyled,
                  ...commonProps
                }
              )
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            ToggleGroupImplElementFrame,
            {
              "aria-orientation": orientation,
              ref: forwardedRef,
              orientation,
              "data-disabled": disabled ? "" : void 0,
              unstyled,
              ...commonProps
            }
          )
        }
      );
    }
  )
);

// ../../node_modules/@tamagui/tooltip/dist/esm/Tooltip.js
var import_jsx_runtime42 = require("react/jsx-runtime");
var import_core41 = require("@tamagui/core-node");
var import_get_size9 = __toESM(require_cjs7());
var React36 = __toESM(require("react"));
var TooltipContent = PopperContentFrame.extractable(
  React36.forwardRef(
    ({ __scopePopover, ...props }, ref) => {
      const popperScope = usePopoverScope(__scopePopover);
      const popper = usePopperContext("PopperContent", popperScope["__scopePopper"]);
      const padding = props.size || popper.size || (0, import_get_size9.stepTokenUpOrDown)("size", "$true", -2);
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        PopoverContent,
        {
          componentName: "Tooltip",
          disableRemoveScroll: true,
          trapFocus: false,
          padding,
          pointerEvents: "none",
          ref,
          ...props
        }
      );
    }
  )
);
var TooltipArrow = React36.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(PopoverArrow, { componentName: "Tooltip", ref, ...props });
});
var TooltipGroup = /* @__PURE__ */ __name(({ children, delay }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(FloatingDelayGroup, { delay: React36.useMemo(() => delay, [JSON.stringify(delay)]), children });
}, "TooltipGroup");
var TooltipComponent = React36.forwardRef(/* @__PURE__ */ __name(function Tooltip(props, ref) {
  const {
    __scopePopover,
    children,
    delay: delayProp,
    restMs = typeof delayProp === "undefined" ? 500 : typeof delayProp === "number" ? delayProp : 0,
    onOpenChange: onOpenChangeProp,
    focus,
    ...restProps
  } = props;
  const popperScope = usePopoverScope(__scopePopover);
  const triggerRef = React36.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React36.useState(false);
  const { delay: delayGroup, setCurrentId } = useDelayGroupContext();
  const delay = delayProp ?? delayGroup;
  const [open, setOpen] = React36.useState(false);
  const id = props.groupId;
  const onOpenChange = (0, import_core41.useEvent)((open2) => {
    setOpen(open2);
    if (open2) {
      setCurrentId(id);
    }
    onOpenChangeProp == null ? void 0 : onOpenChangeProp(open2);
  });
  const useFloatingFn = /* @__PURE__ */ __name((props2) => {
    const floating = useFloating3({
      ...props2,
      open,
      onOpenChange
    });
    const { getReferenceProps, getFloatingProps } = useInteractions([
      useHover(floating.context, { delay, restMs }),
      useFocus(floating.context, focus),
      useRole(floating.context, { role: "tooltip" }),
      useDismiss(floating.context),
      useDelayGroup(floating.context, { id })
    ]);
    return {
      ...floating,
      getReferenceProps,
      getFloatingProps
    };
  }, "useFloatingFn");
  const useFloatingContext2 = React36.useCallback(useFloatingFn, [id, delay, open]);
  const onCustomAnchorAdd = React36.useCallback(() => setHasCustomAnchor(true), []);
  const onCustomAnchorRemove = React36.useCallback(() => setHasCustomAnchor(false), []);
  const contentId = React36.useId();
  const twoSmallerKey = (0, import_get_size9.stepTokenUpOrDown)("size", "$true", -2).key;
  const size3 = `$${twoSmallerKey}`;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(FloatingOverrideContext.Provider, { value: useFloatingContext2, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Popper, { size: size3, allowFlip: true, ...popperScope, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    __PopoverProviderInternal,
    {
      scope: __scopePopover,
      popperScope: popperScope.__scopePopper,
      contentId,
      triggerRef,
      sheetBreakpoint: false,
      scopeKey: "",
      open,
      onOpenChange: setOpen,
      onOpenToggle: voidFn,
      hasCustomAnchor,
      onCustomAnchorAdd,
      onCustomAnchorRemove,
      children
    }
  ) }) });
}, "Tooltip"));
var Tooltip2 = (0, import_core41.withStaticProperties)(TooltipComponent, {
  Anchor: PopoverAnchor,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Trigger: PopoverTrigger
});
var voidFn = /* @__PURE__ */ __name(() => {
}, "voidFn");

// ../../node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.js
var import_jsx_runtime43 = require("react/jsx-runtime");
var TooltipSimple = /* @__PURE__ */ __name(({
  label,
  children,
  contentProps,
  ...tooltipProps
}) => {
  let context;
  try {
    context = useDelayGroupContext();
  } catch {
  }
  const contents = /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Tooltip2, { ...tooltipProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Tooltip2.Trigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      Tooltip2.Content,
      {
        zIndex: 1e9,
        enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
        exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
        x: 0,
        scale: 1,
        y: 0,
        elevation: "$1",
        opacity: 1,
        animation: [
          "quick",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ],
        ...contentProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Tooltip2.Arrow, {}),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Paragraph, { size: "$2", lineHeight: "$0", children: label })
        ]
      }
    )
  ] });
  if (!context) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(TooltipGroup, { delay: defaultTooltipDelay, children: contents });
  }
  return contents;
}, "TooltipSimple");
var defaultTooltipDelay = { open: 3e3, close: 100 };

// ../../node_modules/@tamagui/use-debounce/dist/esm/index.js
var import_react39 = require("react");
function debounce(func, wait, leading) {
  let timeout;
  let isCancelled = false;
  function debounced() {
    isCancelled = false;
    const context = this;
    const args = arguments;
    if (leading && !timeout) {
      func.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!(leading || isCancelled)) {
        func.apply(context, args);
      }
      isCancelled = false;
    }, wait);
  }
  __name(debounced, "debounced");
  debounced.cancel = () => {
    isCancelled = true;
  };
  return debounced;
}
__name(debounce, "debounce");
var defaultOpts = { leading: false };
function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
  const dbEffect = (0, import_react39.useRef)(null);
  (0, import_react39.useEffect)(() => {
    return () => {
      var _a;
      (_a = dbEffect.current) == null ? void 0 : _a.cancel();
    };
  }, []);
  return (0, import_react39.useMemo)(() => {
    dbEffect.current = debounce(fn, wait, options.leading);
    return dbEffect.current;
  }, [options.leading, ...mountArgs]);
}
__name(useDebounce, "useDebounce");
function useDebounceValue(val, amt = 0) {
  const [state, setState] = (0, import_react39.useState)(val);
  (0, import_react39.useEffect)(() => {
    const tm = setTimeout(() => {
      setState((prev) => {
        if (prev === val)
          return prev;
        return val;
      });
    }, amt);
    return () => {
      clearTimeout(tm);
    };
  }, [val]);
  return state;
}
__name(useDebounceValue, "useDebounceValue");

// ../../node_modules/@tamagui/use-force-update/dist/esm/index.js
var import_react40 = require("react");
var isServerSide = process.env.TAMAGUI_TARGET === "web" && typeof window === "undefined";
var idFn3 = /* @__PURE__ */ __name(() => {
}, "idFn");
function useForceUpdate2() {
  return isServerSide ? idFn3 : (0, import_react40.useReducer)((x) => x + 1, 0)[1];
}
__name(useForceUpdate2, "useForceUpdate");

// ../../node_modules/@tamagui/use-window-dimensions/dist/esm/index.js
var import_react41 = require("react");
var import_react_native9 = require("react-native-web-lite");
var initialValue = {
  fontScale: 1,
  height: 800,
  width: 600,
  scale: 1
};
function configureInitialWindowDimensions(next) {
  Object.assign(initialValue, next);
}
__name(configureInitialWindowDimensions, "configureInitialWindowDimensions");
function useWindowDimensions2({ initial } = {}) {
  const current = (0, import_react_native9.useWindowDimensions)();
  if (process.env.TAMAGUI_TARGET != "web") {
    return current;
  }
  const [state, setState] = (0, import_react41.useState)(
    initial ? { ...initialValue, ...initial } : initialValue
  );
  useIsomorphicLayoutEffect12(() => {
    setState(current);
  }, Object.values(current));
  return state;
}
__name(useWindowDimensions2, "useWindowDimensions");

// ../../node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js
var import_web15 = require("@tamagui/core-node");
var VisuallyHidden = (0, import_web15.styled)(import_web15.Stack, {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -1e4,
  overflow: "hidden",
  opacity: 1e-8,
  pointerEvents: "none",
  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    },
    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 1,
        overflow: "visible",
        opacity: 1,
        pointerEvents: "auto"
      }
    }
  }
});
VisuallyHidden["isVisuallyHidden"] = true;

// ../../node_modules/tamagui/dist/esm/createTamagui.js
var import_core42 = require("@tamagui/core-node");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core42.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"];
  const hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => {
    return expectedKeys.every((k) => typeof obj[k] !== "undefined");
  }, "hasKeys");
  const tamaguiConfig = (0, import_core42.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) {
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    }
    if (!hasKeys(sizeTokenKeys, tokenSet)) {
      throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
    }
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    const received = Object.keys(tokenSet);
    const hasSomeOverlap = received.some((rk) => expected.includes(rk));
    if (!hasSomeOverlap) {
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
    }
  }
  return tamaguiConfig;
};

// ../../node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime44 = require("react/jsx-runtime");
var import_core43 = require("@tamagui/core-node");
var TamaguiProvider = import_core43.isRSC ? import_core43.TamaguiProvider : ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_core43.TamaguiProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PortalProvider, { shouldAddRootHost: true, children }) });
};

// ../../node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime45 = require("react/jsx-runtime");
var import_core44 = require("@tamagui/core-node");
var import_react42 = require("react");
var import_react_native10 = require("react-native-web-lite");
var AnchorFrame = (0, import_core44.styled)(SizableText, {
  name: "Anchor",
  tag: "a",
  accessibilityRole: "link"
});
var Anchor = AnchorFrame.extractable(
  (0, import_react42.forwardRef)(({ href, target, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      AnchorFrame,
      {
        ...props,
        ...import_core44.isWeb ? {
          href,
          target
        } : {
          onPress: (event) => {
            var _a;
            (_a = props.onPress) == null ? void 0 : _a.call(props, event);
            if (href !== void 0) {
              import_react_native10.Linking.openURL(href);
            }
          }
        },
        ref
      }
    );
  })
);

// ../../node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core45 = require("@tamagui/core-node");
var EnsureFlexed = (0, import_core45.styled)(import_core45.Text, {
  opacity: 0,
  lineHeight: 0,
  height: 0,
  display: "flex",
  fontSize: 200,
  children: "wwwwwwwwwwwwwwwwwww",
  hoverStyle: {
    backgroundColor: "red"
  },
  pointerEvents: "none"
});
EnsureFlexed["isVisuallyHidden"] = true;

// ../../node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core46 = require("@tamagui/core-node");
var Fieldset = (0, import_core46.styled)(YStack, {
  name: "Fieldset",
  tag: "fieldset",
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  }
});

// ../../node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime46 = require("react/jsx-runtime");
var import_core47 = require("@tamagui/core-node");
var import_react43 = __toESM(require("react"));
function Grid({ children, columns, itemMinWidth = 200, gap }) {
  if (import_core47.isWeb) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        style: {
          gap,
          display: "grid",
          justifyContent: "stretch",
          // gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
          // gridTemplateColumns: '1fr 1fr',
        },
        children
      }
    );
  }
  const childrenList = import_react43.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(XStack, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: childrenList.map((child, i) => {
    if (!child) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      XStack,
      {
        flex: 1,
        minWidth: itemMinWidth,
        marginRight: gap,
        marginBottom: gap,
        children: child
      },
      i
    );
  }) });
}
__name(Grid, "Grid");

// ../../node_modules/tamagui/dist/esm/views/Input.js
var import_core49 = require("@tamagui/core-node");
var import_focusable6 = __toESM(require_cjs16());
var import_react_native11 = require("react-native-web-lite");

// ../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core48 = require("@tamagui/core-node");
var import_get_button_sized5 = __toESM(require_cjs8());
var import_get_font_sized3 = __toESM(require_cjs9());
var import_get_size10 = __toESM(require_cjs7());
var inputSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1) {
    return textAreaSizeVariant(val, extras);
  }
  const buttonStyles = (0, import_get_button_sized5.getButtonSized)(val, extras);
  const paddingHorizontal = (0, import_get_size10.stepTokenUpOrDown)("space", val, -1, [2]);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  if (!import_core48.isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }
  return {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, "inputSizeVariant");
var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  const { props } = extras;
  const buttonStyles = (0, import_get_button_sized5.getButtonSized)(val, extras);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  const height = props.numberOfLines ? (props.numberOfLines || 1) * (0, import_core48.getVariableValue)(fontStyle.lineHeight) : "auto";
  const paddingVertical = (0, import_get_size10.stepTokenUpOrDown)("space", val, -2, [2]);
  const paddingHorizontal = (0, import_get_size10.stepTokenUpOrDown)("space", val, -1, [2]);
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
}, "textAreaSizeVariant");

// ../../node_modules/tamagui/dist/esm/views/Input.js
(0, import_core49.setupReactNative)({
  TextInput: import_react_native11.TextInput
});
var defaultStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",
  focusable: true,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  placeholderTextColor: "$placeholderColor",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  hoverStyle: {
    borderColor: "$borderColorHover"
  },
  focusStyle: {
    outlineColor: "$borderColorFocus",
    outlineWidth: 2,
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
};
var InputFramePreTyped = (0, import_core49.styled)(
  import_react_native11.TextInput,
  {
    name: "Input",
    variants: {
      unstyled: {
        false: defaultStyles
      },
      size: {
        "...size": inputSizeVariant
      }
    },
    defaultVariants: {
      unstyled: false
    }
  },
  {
    isInput: true
  }
);
var InputFrame = InputFramePreTyped;
var Input = (0, import_focusable6.focusableInputHOC)(InputFrame);

// ../../node_modules/tamagui/dist/esm/views/Layouts.js
var import_core50 = require("@tamagui/core-node");
var Section = (0, import_core50.styled)(import_core50.Stack, {
  name: "Section",
  tag: "section",
  flexDirection: "column",
  accessibilityRole: "summary"
});
var Article = (0, import_core50.styled)(import_core50.Stack, {
  name: "Article",
  tag: "article",
  flexDirection: "column"
});
var Main = (0, import_core50.styled)(import_core50.Stack, {
  name: "Main",
  tag: "main",
  flexDirection: "column"
});
var Header = (0, import_core50.styled)(import_core50.Stack, {
  name: "Header",
  tag: "header",
  accessibilityRole: "header",
  flexDirection: "column"
});
var Aside = (0, import_core50.styled)(import_core50.Stack, {
  name: "Aside",
  tag: "aside",
  flexDirection: "column"
  // accessibilityRole: 'complementary',
});
var Footer = (0, import_core50.styled)(import_core50.Stack, {
  name: "Footer",
  tag: "footer",
  flexDirection: "column"
  // accessibilityRole: 'contentinfo',
});
var Nav = (0, import_core50.styled)(import_core50.Stack, {
  name: "Nav",
  tag: "nav",
  flexDirection: "column"
  // accessibilityRole: 'navigation',
});

// ../../node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime47 = require("react/jsx-runtime");
var import_core51 = require("@tamagui/core-node");
var React38 = __toESM(require("react"));
var import_react_native12 = require("react-native-web-lite");
var Spinner = YStack.extractable(
  (0, import_core51.themeable)(
    React38.forwardRef((props, ref) => {
      const { size: size3, color: colorProp, ...stackProps } = props;
      const theme = (0, import_core51.useTheme)();
      let color2 = colorProp;
      if (color2 && color2[0] === "$") {
        color2 = (0, import_core51.variableToString)(theme[color2]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(YStack, { ref, ...stackProps, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_native12.ActivityIndicator, { size: size3, color: color2 }) });
    }),
    {
      componentName: "Spinner"
    }
  )
);

// ../../node_modules/tamagui/dist/esm/views/TextArea.js
var import_core52 = require("@tamagui/core-node");
var import_focusable7 = __toESM(require_cjs16());
var TextAreaFrame = (0, import_core52.styled)(InputFrame, {
  name: "TextArea",
  multiline: true,
  variants: {
    unstyled: {
      false: {
        ...defaultStyles,
        height: "auto",
        numberOfLines: 4
      }
    },
    size: {
      "...size": textAreaSizeVariant
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var TextArea = (0, import_focusable7.focusableInputHOC)(TextAreaFrame);

// ../../node_modules/tamagui/dist/esm/index.js
var import_core53 = require("@tamagui/core-node");
function LinearGradient(props) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`LinearGradient has been moved to tamagui/linear-gradient as of 1.1`);
  }
  return null;
}
__name(LinearGradient, "LinearGradient");

// tamagui.config.ts
var import_animations_react_native = __toESM(require_cjs25());
var animations = (0, import_animations_react_native.createAnimations)({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  }
});
var headingFont = (0, import_font_inter.createInterFont)();
var bodyFont = (0, import_font_inter.createInterFont)();
var config = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont
  },
  themes,
  tokens,
  media: (0, import_react_native_media_driver.createMedia)({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  })
});
var tamagui_config_default = config;
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.js:
  (*!
  * tabbable 6.1.2
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
