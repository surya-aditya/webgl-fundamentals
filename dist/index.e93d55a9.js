// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5htpb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "77e4cbc7e93d55a9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kYW0I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webglUtilsJs = require("./utils/webgl-utils.js");
var _webglUtilsJsDefault = parcelHelpers.interopDefault(_webglUtilsJs);
class App {
    constructor(){
        this.canvas = document.getElementById("c");
        this.canvas.getContext("webgl");
        console.log((0, _webglUtilsJsDefault.default));
        if (!this.canvas) throw "Canvas not found";
        this.program = (0, _webglUtilsJsDefault.default).createProgram(this.canvas, [
            "vertex-shader-2d",
            "fragment-shader-2d"
        ]);
        this.canvas.useProgram(this.program);
    }
}
new App() // function main() {
 //   // Get A WebGL context
 //   /** @type {HTMLCanvasElement} */
 //   var canvas = document.querySelector("#canvas");
 //   var gl = canvas.getContext("webgl");
 //   if (!gl) {
 //     return;
 //   }
 //   // setup GLSL program
 //   var program = webglUtils.createProgramFromScripts(gl, ["vertex-shader-2d", "fragment-shader-2d"]);
 //   gl.useProgram(program);
 //   // look up where the vertex data needs to go.
 //   var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
 //   // lookup uniforms
 //   var colorLocation = gl.getUniformLocation(program, "u_color");
 //   var matrixLocation = gl.getUniformLocation(program, "u_matrix");
 //   // Create a buffer to put three 2d clip space points in
 //   var positionBuffer = gl.createBuffer();
 //   // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
 //   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 //   requestAnimationFrame(drawScene);
 //   // Draw the scene.
 //   function drawScene(now) {
 //     now *= 0.001;  // convert to seconds
 //     // Tell WebGL how to convert from clip space to pixels
 //     gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
 //     // Clear the canvas.
 //     gl.clear(gl.COLOR_BUFFER_BIT);
 //     // Tell it to use our program (pair of shaders)
 //     gl.useProgram(program);
 //     // Turn on the attribute
 //     gl.enableVertexAttribArray(positionAttributeLocation);
 //     // Bind the position buffer.
 //     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 //     // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
 //     var size = 2;          // 2 components per iteration
 //     var type = gl.FLOAT;   // the data is 32bit floats
 //     var normalize = false; // don't normalize the data
 //     var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
 //     var offset = 0;        // start at the beginning of the buffer
 //     gl.vertexAttribPointer(
 //         positionAttributeLocation, size, type, normalize, stride, offset);
 //     // Set Geometry.
 //     var radius = Math.sqrt(gl.canvas.width * gl.canvas.width + gl.canvas.height * gl.canvas.height) * 0.5;
 //     var angle = now;
 //     var x = Math.cos(angle) * radius;
 //     var y = Math.sin(angle) * radius;
 //     var centerX = gl.canvas.width  / 2;
 //     var centerY = gl.canvas.height / 2;
 //     setGeometry(gl, centerX + x, centerY + y, centerX - x, centerY - y);
 //     // Compute the matrices
 //     var projectionMatrix = m3.projection(gl.canvas.width, gl.canvas.height);
 //     // Set the matrix.
 //     gl.uniformMatrix3fv(matrixLocation, false, projectionMatrix);
 //     // Draw in red
 //     gl.uniform4fv(colorLocation, [1, 0, 0, 1]);
 //     // Draw the geometry.
 //     var primitiveType = gl.LINES;
 //     var offset = 0;
 //     var count = 2;
 //     gl.drawArrays(primitiveType, offset, count);
 //     requestAnimationFrame(drawScene);
 //   }
 // }
 // // Fill the buffer with a line
 // function setGeometry(gl, x1, y1, x2, y2) {
 //   gl.bufferData(
 //       gl.ARRAY_BUFFER,
 //       new Float32Array([
 //           x1, y1,
 //           x2, y2]),
 //       gl.STATIC_DRAW);
 // }
 // main();
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ioCqQ","./utils/webgl-utils.js":"31wjW"}],"ioCqQ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"31wjW":[function(require,module,exports) {
/*
 * Copyright 2021 GFXFundamentals.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of GFXFundamentals. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ (function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], function() {
        return factory.call(root);
    });
    else // Browser globals
    root.webglUtils = factory.call(root);
})(this, function() {
    "use strict";
    const topWindow = this;
    /** @module webgl-utils */ function isInIFrame(w) {
        w = w || topWindow;
        return w !== w.top;
    }
    if (!isInIFrame()) {
        console.log("%c%s", "color:blue;font-weight:bold;", "for more about webgl-utils.js see:"); // eslint-disable-line
        console.log("%c%s", "color:blue;font-weight:bold;", "https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html"); // eslint-disable-line
    }
    /**
   * Wrapped logging function.
   * @param {string} msg The message to log.
   */ function error(msg) {
        if (topWindow.console) {
            if (topWindow.console.error) topWindow.console.error(msg);
            else if (topWindow.console.log) topWindow.console.log(msg);
        }
    }
    /**
   * Error Callback
   * @callback ErrorCallback
   * @param {string} msg error message.
   * @memberOf module:webgl-utils
   */ /**
   * Loads a shader.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} shaderSource The shader source.
   * @param {number} shaderType The type of shader.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   */ function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
        const errFn = opt_errorCallback || error;
        // Create the shader object
        const shader = gl.createShader(shaderType);
        // Load the shader source
        gl.shaderSource(shader, shaderSource);
        // Compile the shader
        gl.compileShader(shader);
        // Check the compile status
        const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            // Something went wrong during compilation; get the error
            const lastError = gl.getShaderInfoLog(shader);
            errFn("*** Error compiling shader '" + shader + "':" + lastError + `\n` + shaderSource.split("\n").map((l, i)=>`${i + 1}: ${l}`).join("\n"));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    /**
   * Creates a program, attaches shaders, binds attrib locations, links the
   * program and calls useProgram.
   * @param {WebGLShader[]} shaders The shaders to attach
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @memberOf module:webgl-utils
   */ function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
        const errFn = opt_errorCallback || error;
        const program = gl.createProgram();
        shaders.forEach(function(shader) {
            gl.attachShader(program, shader);
        });
        if (opt_attribs) opt_attribs.forEach(function(attrib, ndx) {
            gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);
        });
        gl.linkProgram(program);
        // Check the link status
        const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
            // something went wrong with the link
            const lastError = gl.getProgramInfoLog(program);
            errFn("Error in program linking:" + lastError);
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }
    /**
   * Loads a shader from a script tag.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} scriptId The id of the script tag.
   * @param {number} opt_shaderType The type of shader. If not passed in it will
   *     be derived from the type of the script tag.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   */ function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
        let shaderSource = "";
        let shaderType;
        const shaderScript = document.getElementById(scriptId);
        if (!shaderScript) throw "*** Error: unknown script element" + scriptId;
        shaderSource = shaderScript.text;
        if (!opt_shaderType) {
            if (shaderScript.type === "x-shader/x-vertex") shaderType = gl.VERTEX_SHADER;
            else if (shaderScript.type === "x-shader/x-fragment") shaderType = gl.FRAGMENT_SHADER;
            else if (shaderType !== gl.VERTEX_SHADER && shaderType !== gl.FRAGMENT_SHADER) throw "*** Error: unknown shader type";
        }
        return loadShader(gl, shaderSource, opt_shaderType ? opt_shaderType : shaderType, opt_errorCallback);
    }
    const defaultShaderType = [
        "VERTEX_SHADER",
        "FRAGMENT_SHADER"
    ];
    /**
   * Creates a program from 2 script tags.
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderScriptIds Array of ids of the script
   *        tags for the shaders. The first is assumed to be the
   *        vertex shader, the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram} The created program.
   * @memberOf module:webgl-utils
   */ function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
        const shaders = [];
        for(let ii = 0; ii < shaderScriptIds.length; ++ii)shaders.push(createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], opt_errorCallback));
        return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    }
    /**
   * Creates a program from 2 sources.
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSourcess Array of sources for the
   *        shaders. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram} The created program.
   * @memberOf module:webgl-utils
   */ function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
        const shaders = [];
        for(let ii = 0; ii < shaderSources.length; ++ii)shaders.push(loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));
        return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    }
    /**
   * Returns the corresponding bind point for a given sampler type
   */ function getBindPointForSamplerType(gl, type) {
        if (type === gl.SAMPLER_2D) return gl.TEXTURE_2D; // eslint-disable-line
        if (type === gl.SAMPLER_CUBE) return gl.TEXTURE_CUBE_MAP; // eslint-disable-line
        return undefined;
    }
    /**
   * @typedef {Object.<string, function>} Setters
   */ /**
   * Creates setter functions for all uniforms of a shader
   * program.
   *
   * @see {@link module:webgl-utils.setUniforms}
   *
   * @param {WebGLProgram} program the program to create setters for.
   * @returns {Object.<string, function>} an object with a setter by name for each uniform
   * @memberOf module:webgl-utils
   */ function createUniformSetters(gl, program) {
        let textureUnit = 0;
        /**
     * Creates a setter for a uniform of the given program with it's
     * location embedded in the setter.
     * @param {WebGLProgram} program
     * @param {WebGLUniformInfo} uniformInfo
     * @returns {function} the created setter.
     */ function createUniformSetter(program, uniformInfo) {
            const location = gl.getUniformLocation(program, uniformInfo.name);
            const type = uniformInfo.type;
            // Check if this uniform is an array
            const isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
            if (type === gl.FLOAT && isArray) return function(v) {
                gl.uniform1fv(location, v);
            };
            if (type === gl.FLOAT) return function(v) {
                gl.uniform1f(location, v);
            };
            if (type === gl.FLOAT_VEC2) return function(v) {
                gl.uniform2fv(location, v);
            };
            if (type === gl.FLOAT_VEC3) return function(v) {
                gl.uniform3fv(location, v);
            };
            if (type === gl.FLOAT_VEC4) return function(v) {
                gl.uniform4fv(location, v);
            };
            if (type === gl.INT && isArray) return function(v) {
                gl.uniform1iv(location, v);
            };
            if (type === gl.INT) return function(v) {
                gl.uniform1i(location, v);
            };
            if (type === gl.INT_VEC2) return function(v) {
                gl.uniform2iv(location, v);
            };
            if (type === gl.INT_VEC3) return function(v) {
                gl.uniform3iv(location, v);
            };
            if (type === gl.INT_VEC4) return function(v) {
                gl.uniform4iv(location, v);
            };
            if (type === gl.BOOL) return function(v) {
                gl.uniform1iv(location, v);
            };
            if (type === gl.BOOL_VEC2) return function(v) {
                gl.uniform2iv(location, v);
            };
            if (type === gl.BOOL_VEC3) return function(v) {
                gl.uniform3iv(location, v);
            };
            if (type === gl.BOOL_VEC4) return function(v) {
                gl.uniform4iv(location, v);
            };
            if (type === gl.FLOAT_MAT2) return function(v) {
                gl.uniformMatrix2fv(location, false, v);
            };
            if (type === gl.FLOAT_MAT3) return function(v) {
                gl.uniformMatrix3fv(location, false, v);
            };
            if (type === gl.FLOAT_MAT4) return function(v) {
                gl.uniformMatrix4fv(location, false, v);
            };
            if ((type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) && isArray) {
                const units = [];
                for(let ii = 0; ii < info.size; ++ii)units.push(textureUnit++);
                return function(bindPoint, units) {
                    return function(textures) {
                        gl.uniform1iv(location, units);
                        textures.forEach(function(texture, index) {
                            gl.activeTexture(gl.TEXTURE0 + units[index]);
                            gl.bindTexture(bindPoint, texture);
                        });
                    };
                }(getBindPointForSamplerType(gl, type), units);
            }
            if (type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) return function(bindPoint, unit) {
                return function(texture) {
                    gl.uniform1i(location, unit);
                    gl.activeTexture(gl.TEXTURE0 + unit);
                    gl.bindTexture(bindPoint, texture);
                };
            }(getBindPointForSamplerType(gl, type), textureUnit++);
            throw "unknown type: 0x" + type.toString(16); // we should never get here.
        }
        const uniformSetters = {};
        const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for(let ii = 0; ii < numUniforms; ++ii){
            const uniformInfo = gl.getActiveUniform(program, ii);
            if (!uniformInfo) break;
            let name1 = uniformInfo.name;
            // remove the array suffix.
            if (name1.substr(-3) === "[0]") name1 = name1.substr(0, name1.length - 3);
            const setter = createUniformSetter(program, uniformInfo);
            uniformSetters[name1] = setter;
        }
        return uniformSetters;
    }
    /**
   * Set uniforms and binds related textures.
   *
   * Example:
   *
   *     let programInfo = createProgramInfo(
   *         gl, ["some-vs", "some-fs"]);
   *
   *     let tex1 = gl.createTexture();
   *     let tex2 = gl.createTexture();
   *
   *     ... assume we setup the textures with data ...
   *
   *     let uniforms = {
   *       u_someSampler: tex1,
   *       u_someOtherSampler: tex2,
   *       u_someColor: [1,0,0,1],
   *       u_somePosition: [0,1,1],
   *       u_someMatrix: [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ],
   *     };
   *
   *     gl.useProgram(program);
   *
   * This will automatically bind the textures AND set the
   * uniforms.
   *
   *     setUniforms(programInfo.uniformSetters, uniforms);
   *
   * For the example above it is equivalent to
   *
   *     let texUnit = 0;
   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
   *     gl.bindTexture(gl.TEXTURE_2D, tex1);
   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
   *     gl.bindTexture(gl.TEXTURE_2D, tex2);
   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
   *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
   *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
   *     gl.uniformMatrix4fv(u_someMatrix, false, [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ]);
   *
   * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
   *
   *     let uniforms = {
   *       u_someSampler: tex1,
   *       u_someOtherSampler: tex2,
   *     };
   *
   *     let moreUniforms {
   *       u_someColor: [1,0,0,1],
   *       u_somePosition: [0,1,1],
   *       u_someMatrix: [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ],
   *     };
   *
   *     setUniforms(programInfo.uniformSetters, uniforms);
   *     setUniforms(programInfo.uniformSetters, moreUniforms);
   *
   * @param {Object.<string, function>|module:webgl-utils.ProgramInfo} setters the setters returned from
   *        `createUniformSetters` or a ProgramInfo from {@link module:webgl-utils.createProgramInfo}.
   * @param {Object.<string, value>} an object with values for the
   *        uniforms.
   * @memberOf module:webgl-utils
   */ function setUniforms(setters, ...values) {
        setters = setters.uniformSetters || setters;
        for (const uniforms of values)Object.keys(uniforms).forEach(function(name1) {
            const setter = setters[name1];
            if (setter) setter(uniforms[name1]);
        });
    }
    /**
   * Creates setter functions for all attributes of a shader
   * program. You can pass this to {@link module:webgl-utils.setBuffersAndAttributes} to set all your buffers and attributes.
   *
   * @see {@link module:webgl-utils.setAttributes} for example
   * @param {WebGLProgram} program the program to create setters for.
   * @return {Object.<string, function>} an object with a setter for each attribute by name.
   * @memberOf module:webgl-utils
   */ function createAttributeSetters(gl, program) {
        const attribSetters = {};
        function createAttribSetter(index) {
            return function(b) {
                if (b.value) {
                    gl.disableVertexAttribArray(index);
                    switch(b.value.length){
                        case 4:
                            gl.vertexAttrib4fv(index, b.value);
                            break;
                        case 3:
                            gl.vertexAttrib3fv(index, b.value);
                            break;
                        case 2:
                            gl.vertexAttrib2fv(index, b.value);
                            break;
                        case 1:
                            gl.vertexAttrib1fv(index, b.value);
                            break;
                        default:
                            throw new Error("the length of a float constant value must be between 1 and 4!");
                    }
                } else {
                    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
                    gl.enableVertexAttribArray(index);
                    gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
                }
            };
        }
        const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for(let ii = 0; ii < numAttribs; ++ii){
            const attribInfo = gl.getActiveAttrib(program, ii);
            if (!attribInfo) break;
            const index = gl.getAttribLocation(program, attribInfo.name);
            attribSetters[attribInfo.name] = createAttribSetter(index);
        }
        return attribSetters;
    }
    /**
   * Sets attributes and binds buffers (deprecated... use {@link module:webgl-utils.setBuffersAndAttributes})
   *
   * Example:
   *
   *     let program = createProgramFromScripts(
   *         gl, ["some-vs", "some-fs"]);
   *
   *     let attribSetters = createAttributeSetters(program);
   *
   *     let positionBuffer = gl.createBuffer();
   *     let texcoordBuffer = gl.createBuffer();
   *
   *     let attribs = {
   *       a_position: {buffer: positionBuffer, numComponents: 3},
   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
   *     };
   *
   *     gl.useProgram(program);
   *
   * This will automatically bind the buffers AND set the
   * attributes.
   *
   *     setAttributes(attribSetters, attribs);
   *
   * Properties of attribs. For each attrib you can add
   * properties:
   *
   * *   type: the type of data in the buffer. Default = gl.FLOAT
   * *   normalize: whether or not to normalize the data. Default = false
   * *   stride: the stride. Default = 0
   * *   offset: offset into the buffer. Default = 0
   *
   * For example if you had 3 value float positions, 2 value
   * float texcoord and 4 value uint8 colors you'd setup your
   * attribs like this
   *
   *     let attribs = {
   *       a_position: {buffer: positionBuffer, numComponents: 3},
   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
   *       a_color: {
   *         buffer: colorBuffer,
   *         numComponents: 4,
   *         type: gl.UNSIGNED_BYTE,
   *         normalize: true,
   *       },
   *     };
   *
   * @param {Object.<string, function>|model:webgl-utils.ProgramInfo} setters Attribute setters as returned from createAttributeSetters or a ProgramInfo as returned {@link module:webgl-utils.createProgramInfo}
   * @param {Object.<string, module:webgl-utils.AttribInfo>} attribs AttribInfos mapped by attribute name.
   * @memberOf module:webgl-utils
   * @deprecated use {@link module:webgl-utils.setBuffersAndAttributes}
   */ function setAttributes(setters, attribs) {
        setters = setters.attribSetters || setters;
        Object.keys(attribs).forEach(function(name1) {
            const setter = setters[name1];
            if (setter) setter(attribs[name1]);
        });
    }
    /**
   * Creates a vertex array object and then sets the attributes
   * on it
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
   * @param {Object.<string, module:webgl-utils.AttribInfo>} attribs AttribInfos mapped by attribute name.
   * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
   */ function createVAOAndSetAttributes(gl, setters, attribs, indices) {
        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        setAttributes(setters, attribs);
        if (indices) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
        // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
        // like when creating buffers for other stuff will mess up this VAO's binding
        gl.bindVertexArray(null);
        return vao;
    }
    /**
   * Creates a vertex array object and then sets the attributes
   * on it
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {Object.<string, function>| module:webgl-utils.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
   * @param {module:webgl-utils:BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
   * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
   */ function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
        return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
    }
    /**
   * @typedef {Object} ProgramInfo
   * @property {WebGLProgram} program A shader program
   * @property {Object<string, function>} uniformSetters: object of setters as returned from createUniformSetters,
   * @property {Object<string, function>} attribSetters: object of setters as returned from createAttribSetters,
   * @memberOf module:webgl-utils
   */ /**
   * Creates a ProgramInfo from 2 sources.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSourcess Array of sources for the
   *        shaders or ids. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:webgl-utils.ProgramInfo} The created program.
   * @memberOf module:webgl-utils
   */ function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
        shaderSources = shaderSources.map(function(source) {
            const script = document.getElementById(source);
            return script ? script.text : source;
        });
        const program = webglUtils.createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
        if (!program) return null;
        const uniformSetters = createUniformSetters(gl, program);
        const attribSetters = createAttributeSetters(gl, program);
        return {
            program: program,
            uniformSetters: uniformSetters,
            attribSetters: attribSetters
        };
    }
    /**
   * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
   *
   * Example:
   *
   *     let programInfo = createProgramInfo(
   *         gl, ["some-vs", "some-fs"]);
   *
   *     let arrays = {
   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *     };
   *
   *     let bufferInfo = createBufferInfoFromArrays(gl, arrays);
   *
   *     gl.useProgram(programInfo.program);
   *
   * This will automatically bind the buffers AND set the
   * attributes.
   *
   *     setBuffersAndAttributes(programInfo.attribSetters, bufferInfo);
   *
   * For the example above it is equivilent to
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
   *     gl.enableVertexAttribArray(a_positionLocation);
   *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
   *     gl.enableVertexAttribArray(a_texcoordLocation);
   *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
   * @param {Object.<string, function>} setters Attribute setters as returned from `createAttributeSetters`
   * @param {module:webgl-utils.BufferInfo} buffers a BufferInfo as returned from `createBufferInfoFromArrays`.
   * @memberOf module:webgl-utils
   */ function setBuffersAndAttributes(gl, setters, buffers) {
        setAttributes(setters, buffers.attribs);
        if (buffers.indices) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
    // Add your prefix here.
    const browserPrefixes = [
        "",
        "MOZ_",
        "OP_",
        "WEBKIT_"
    ];
    /**
   * Given an extension name like WEBGL_compressed_texture_s3tc
   * returns the supported version extension, like
   * WEBKIT_WEBGL_compressed_teture_s3tc
   * @param {string} name Name of extension to look for
   * @return {WebGLExtension} The extension or undefined if not
   *     found.
   * @memberOf module:webgl-utils
   */ function getExtensionWithKnownPrefixes(gl, name1) {
        for(let ii = 0; ii < browserPrefixes.length; ++ii){
            const prefixedName = browserPrefixes[ii] + name1;
            const ext = gl.getExtension(prefixedName);
            if (ext) return ext;
        }
        return undefined;
    }
    /**
   * Resize a canvas to match the size its displayed.
   * @param {HTMLCanvasElement} canvas The canvas to resize.
   * @param {number} [multiplier] amount to multiply by.
   *    Pass in window.devicePixelRatio for native pixels.
   * @return {boolean} true if the canvas was resized.
   * @memberOf module:webgl-utils
   */ function resizeCanvasToDisplaySize(canvas, multiplier) {
        multiplier = multiplier || 1;
        const width = canvas.clientWidth * multiplier | 0;
        const height = canvas.clientHeight * multiplier | 0;
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    }
    // Add `push` to a typed array. It just keeps a 'cursor'
    // and allows use to `push` values into the array so we
    // don't have to manually compute offsets
    function augmentTypedArray(typedArray, numComponents) {
        let cursor = 0;
        typedArray.push = function() {
            for(let ii = 0; ii < arguments.length; ++ii){
                const value = arguments[ii];
                if (value instanceof Array || value.buffer && value.buffer instanceof ArrayBuffer) for(let jj = 0; jj < value.length; ++jj)typedArray[cursor++] = value[jj];
                else typedArray[cursor++] = value;
            }
        };
        typedArray.reset = function(opt_index) {
            cursor = opt_index || 0;
        };
        typedArray.numComponents = numComponents;
        Object.defineProperty(typedArray, "numElements", {
            get: function() {
                return this.length / this.numComponents | 0;
            }
        });
        return typedArray;
    }
    /**
   * creates a typed array with a `push` function attached
   * so that you can easily *push* values.
   *
   * `push` can take multiple arguments. If an argument is an array each element
   * of the array will be added to the typed array.
   *
   * Example:
   *
   *     let array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
   *     array.push(1, 2, 3);
   *     array.push([4, 5, 6]);
   *     // array now contains [1, 2, 3, 4, 5, 6]
   *
   * Also has `numComponents` and `numElements` properties.
   *
   * @param {number} numComponents number of components
   * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
   * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
   * @return {ArrayBuffer} A typed array.
   * @memberOf module:webgl-utils
   */ function createAugmentedTypedArray(numComponents, numElements, opt_type) {
        const Type = opt_type || Float32Array;
        return augmentTypedArray(new Type(numComponents * numElements), numComponents);
    }
    function createBufferFromTypedArray(gl, array, type, drawType) {
        type = type || gl.ARRAY_BUFFER;
        const buffer = gl.createBuffer();
        gl.bindBuffer(type, buffer);
        gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
        return buffer;
    }
    function allButIndices(name1) {
        return name1 !== "indices";
    }
    function createMapping(obj) {
        const mapping = {};
        Object.keys(obj).filter(allButIndices).forEach(function(key) {
            mapping["a_" + key] = key;
        });
        return mapping;
    }
    function getGLTypeForTypedArray(gl, typedArray) {
        if (typedArray instanceof Int8Array) return gl.BYTE;
         // eslint-disable-line
        if (typedArray instanceof Uint8Array) return gl.UNSIGNED_BYTE;
         // eslint-disable-line
        if (typedArray instanceof Int16Array) return gl.SHORT;
         // eslint-disable-line
        if (typedArray instanceof Uint16Array) return gl.UNSIGNED_SHORT;
         // eslint-disable-line
        if (typedArray instanceof Int32Array) return gl.INT;
         // eslint-disable-line
        if (typedArray instanceof Uint32Array) return gl.UNSIGNED_INT;
         // eslint-disable-line
        if (typedArray instanceof Float32Array) return gl.FLOAT;
         // eslint-disable-line
        throw "unsupported typed array type";
    }
    // This is really just a guess. Though I can't really imagine using
    // anything else? Maybe for some compression?
    function getNormalizationForTypedArray(typedArray) {
        if (typedArray instanceof Int8Array) return true;
         // eslint-disable-line
        if (typedArray instanceof Uint8Array) return true;
         // eslint-disable-line
        return false;
    }
    function isArrayBuffer(a) {
        return a.buffer && a.buffer instanceof ArrayBuffer;
    }
    function guessNumComponentsFromName(name1, length) {
        let numComponents;
        if (name1.indexOf("coord") >= 0) numComponents = 2;
        else if (name1.indexOf("color") >= 0) numComponents = 4;
        else numComponents = 3; // position, normals, indices ...
        if (length % numComponents > 0) throw "can not guess numComponents. You should specify it.";
        return numComponents;
    }
    function makeTypedArray(array, name1) {
        if (isArrayBuffer(array)) return array;
        if (array.data && isArrayBuffer(array.data)) return array.data;
        if (Array.isArray(array)) array = {
            data: array
        };
        if (!array.numComponents) array.numComponents = guessNumComponentsFromName(name1, array.length);
        let type = array.type;
        if (!type) {
            if (name1 === "indices") type = Uint16Array;
        }
        const typedArray = createAugmentedTypedArray(array.numComponents, array.data.length / array.numComponents | 0, type);
        typedArray.push(array.data);
        return typedArray;
    }
    /**
   * @typedef {Object} AttribInfo
   * @property {number} [numComponents] the number of components for this attribute.
   * @property {number} [size] the number of components for this attribute.
   * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
   * @property {boolean} [normalized] whether or not to normalize the data. Default = false
   * @property {number} [offset] offset into buffer in bytes. Default = 0
   * @property {number} [stride] the stride in bytes per element. Default = 0
   * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
   * @memberOf module:webgl-utils
   */ /**
   * Creates a set of attribute data and WebGLBuffers from set of arrays
   *
   * Given
   *
   *      let arrays = {
   *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
   *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
   *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
   *      };
   *
   * returns something like
   *
   *      let attribs = {
   *        a_position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
   *      };
   *
   * @param {WebGLRenderingContext} gl The webgl rendering context.
   * @param {Object.<string, array|typedarray>} arrays The arrays
   * @param {Object.<string, string>} [opt_mapping] mapping from attribute name to array name.
   *     if not specified defaults to "a_name" -> "name".
   * @return {Object.<string, module:webgl-utils.AttribInfo>} the attribs
   * @memberOf module:webgl-utils
   */ function createAttribsFromArrays(gl, arrays, opt_mapping) {
        const mapping = opt_mapping || createMapping(arrays);
        const attribs = {};
        Object.keys(mapping).forEach(function(attribName) {
            const bufferName = mapping[attribName];
            const origArray = arrays[bufferName];
            if (origArray.value) attribs[attribName] = {
                value: origArray.value
            };
            else {
                const array = makeTypedArray(origArray, bufferName);
                attribs[attribName] = {
                    buffer: createBufferFromTypedArray(gl, array),
                    numComponents: origArray.numComponents || array.numComponents || guessNumComponentsFromName(bufferName),
                    type: getGLTypeForTypedArray(gl, array),
                    normalize: getNormalizationForTypedArray(array)
                };
            }
        });
        return attribs;
    }
    function getArray(array) {
        return array.length ? array : array.data;
    }
    const texcoordRE = /coord|texture/i;
    const colorRE = /color|colour/i;
    function guessNumComponentsFromName(name1, length) {
        let numComponents;
        if (texcoordRE.test(name1)) numComponents = 2;
        else if (colorRE.test(name1)) numComponents = 4;
        else numComponents = 3; // position, normals, indices ...
        if (length % numComponents > 0) throw new Error(`Can not guess numComponents for attribute '${name1}'. Tried ${numComponents} but ${length} values is not evenly divisible by ${numComponents}. You should specify it.`);
        return numComponents;
    }
    function getNumComponents(array, arrayName) {
        return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
    }
    /**
   * tries to get the number of elements from a set of arrays.
   */ const positionKeys = [
        "position",
        "positions",
        "a_position"
    ];
    function getNumElementsFromNonIndexedArrays(arrays) {
        let key;
        for (const k of positionKeys)if (k in arrays) {
            key = k;
            break;
        }
        key = key || Object.keys(arrays)[0];
        const array = arrays[key];
        const length = getArray(array).length;
        const numComponents = getNumComponents(array, key);
        const numElements = length / numComponents;
        if (length % numComponents > 0) throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
        return numElements;
    }
    /**
   * @typedef {Object} BufferInfo
   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
   * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
   * @property {Object.<string, module:webgl-utils.AttribInfo>} attribs The attribs approriate to call `setAttributes`
   * @memberOf module:webgl-utils
   */ /**
   * Creates a BufferInfo from an object of arrays.
   *
   * This can be passed to {@link module:webgl-utils.setBuffersAndAttributes} and to
   * {@link module:webgl-utils:drawBufferInfo}.
   *
   * Given an object like
   *
   *     let arrays = {
   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
   *     };
   *
   *  Creates an BufferInfo like this
   *
   *     bufferInfo = {
   *       numElements: 4,        // or whatever the number of elements is
   *       indices: WebGLBuffer,  // this property will not exist if there are no indices
   *       attribs: {
   *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
   *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
   *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
   *       },
   *     };
   *
   *  The properties of arrays can be JavaScript arrays in which case the number of components
   *  will be guessed.
   *
   *     let arrays = {
   *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
   *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
   *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
   *        indices:  [0, 1, 2, 1, 2, 3],
   *     };
   *
   *  They can also by TypedArrays
   *
   *     let arrays = {
   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
   *     };
   *
   *  Or augmentedTypedArrays
   *
   *     let positions = createAugmentedTypedArray(3, 4);
   *     let texcoords = createAugmentedTypedArray(2, 4);
   *     let normals   = createAugmentedTypedArray(3, 4);
   *     let indices   = createAugmentedTypedArray(3, 2, Uint16Array);
   *
   *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
   *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
   *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
   *     indices.push([0, 1, 2, 1, 2, 3]);
   *
   *     let arrays = {
   *        position: positions,
   *        texcoord: texcoords,
   *        normal:   normals,
   *        indices:  indices,
   *     };
   *
   * For the last example it is equivalent to
   *
   *     let bufferInfo = {
   *       attribs: {
   *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
   *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
   *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
   *       },
   *       indices: gl.createBuffer(),
   *       numElements: 6,
   *     };
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
   *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {Object.<string, array|object|typedarray>} arrays Your data
   * @param {Object.<string, string>} [opt_mapping] an optional mapping of attribute to array name.
   *    If not passed in it's assumed the array names will be mapped to an attribute
   *    of the same name with "a_" prefixed to it. An other words.
   *
   *        let arrays = {
   *           position: ...,
   *           texcoord: ...,
   *           normal:   ...,
   *           indices:  ...,
   *        };
   *
   *        bufferInfo = createBufferInfoFromArrays(gl, arrays);
   *
   *    Is the same as
   *
   *        let arrays = {
   *           position: ...,
   *           texcoord: ...,
   *           normal:   ...,
   *           indices:  ...,
   *        };
   *
   *        let mapping = {
   *          a_position: "position",
   *          a_texcoord: "texcoord",
   *          a_normal:   "normal",
   *        };
   *
   *        bufferInfo = createBufferInfoFromArrays(gl, arrays, mapping);
   *
   * @return {module:webgl-utils.BufferInfo} A BufferInfo
   * @memberOf module:webgl-utils
   */ function createBufferInfoFromArrays(gl, arrays, opt_mapping) {
        const bufferInfo = {
            attribs: createAttribsFromArrays(gl, arrays, opt_mapping)
        };
        let indices = arrays.indices;
        if (indices) {
            indices = makeTypedArray(indices, "indices");
            bufferInfo.indices = createBufferFromTypedArray(gl, indices, gl.ELEMENT_ARRAY_BUFFER);
            bufferInfo.numElements = indices.length;
        } else bufferInfo.numElements = getNumElementsFromNonIndexedArrays(arrays);
        return bufferInfo;
    }
    /**
   * Creates buffers from typed arrays
   *
   * Given something like this
   *
   *     let arrays = {
   *        positions: [1, 2, 3],
   *        normals: [0, 0, 1],
   *     }
   *
   * returns something like
   *
   *     buffers = {
   *       positions: WebGLBuffer,
   *       normals: WebGLBuffer,
   *     }
   *
   * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
   * @param {Object<string, array|typedarray>} arrays
   * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
   * @memberOf module:webgl-utils
   */ function createBuffersFromArrays(gl, arrays) {
        const buffers = {};
        Object.keys(arrays).forEach(function(key) {
            const type = key === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
            const array = makeTypedArray(arrays[key], name);
            buffers[key] = createBufferFromTypedArray(gl, array, type);
        });
        // hrm
        if (arrays.indices) buffers.numElements = arrays.indices.length;
        else if (arrays.position) buffers.numElements = arrays.position.length / 3;
        return buffers;
    }
    /**
   * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
   *
   * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
   * but calling this means if you switch from indexed data to non-indexed
   * data you don't have to remember to update your draw call.
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {module:webgl-utils.BufferInfo} bufferInfo as returned from createBufferInfoFromArrays
   * @param {enum} [primitiveType] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...)
   * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
   * @param {number} [offset] An optional offset. Defaults to 0.
   * @memberOf module:webgl-utils
   */ function drawBufferInfo(gl, bufferInfo, primitiveType, count, offset) {
        const indices = bufferInfo.indices;
        primitiveType = primitiveType === undefined ? gl.TRIANGLES : primitiveType;
        const numElements = count === undefined ? bufferInfo.numElements : count;
        offset = offset === undefined ? 0 : offset;
        if (indices) gl.drawElements(primitiveType, numElements, gl.UNSIGNED_SHORT, offset);
        else gl.drawArrays(primitiveType, offset, numElements);
    }
    /**
   * @typedef {Object} DrawObject
   * @property {module:webgl-utils.ProgramInfo} programInfo A ProgramInfo as returned from createProgramInfo
   * @property {module:webgl-utils.BufferInfo} bufferInfo A BufferInfo as returned from createBufferInfoFromArrays
   * @property {Object<string, ?>} uniforms The values for the uniforms
   * @memberOf module:webgl-utils
   */ /**
   * Draws a list of objects
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {DrawObject[]} objectsToDraw an array of objects to draw.
   * @memberOf module:webgl-utils
   */ function drawObjectList(gl, objectsToDraw) {
        let lastUsedProgramInfo = null;
        let lastUsedBufferInfo = null;
        objectsToDraw.forEach(function(object) {
            const programInfo = object.programInfo;
            const bufferInfo = object.bufferInfo;
            let bindBuffers = false;
            if (programInfo !== lastUsedProgramInfo) {
                lastUsedProgramInfo = programInfo;
                gl.useProgram(programInfo.program);
                bindBuffers = true;
            }
            // Setup all the needed attributes.
            if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                lastUsedBufferInfo = bufferInfo;
                setBuffersAndAttributes(gl, programInfo.attribSetters, bufferInfo);
            }
            // Set the uniforms.
            setUniforms(programInfo.uniformSetters, object.uniforms);
            // Draw
            drawBufferInfo(gl, bufferInfo);
        });
    }
    function glEnumToString(gl, v) {
        const results = [];
        for(const key in gl)if (gl[key] === v) results.push(key);
        return results.length ? results.join(" | ") : `0x${v.toString(16)}`;
    }
    const isIE = !!document.documentMode;
    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) // Hack for Edge. Edge's WebGL implmentation is crap still and so they
    // only respond to "experimental-webgl". I don't want to clutter the
    // examples with that so his hack works around it
    HTMLCanvasElement.prototype.getContext = function(origFn) {
        return function() {
            let args = arguments;
            const type = args[0];
            if (type === "webgl") {
                args = [].slice.call(arguments);
                args[0] = "experimental-webgl";
            }
            return origFn.apply(this, args);
        };
    }(HTMLCanvasElement.prototype.getContext);
    return {
        createAugmentedTypedArray: createAugmentedTypedArray,
        createAttribsFromArrays: createAttribsFromArrays,
        createBuffersFromArrays: createBuffersFromArrays,
        createBufferInfoFromArrays: createBufferInfoFromArrays,
        createAttributeSetters: createAttributeSetters,
        createProgram: createProgram,
        createProgramFromScripts: createProgramFromScripts,
        createProgramFromSources: createProgramFromSources,
        createProgramInfo: createProgramInfo,
        createUniformSetters: createUniformSetters,
        createVAOAndSetAttributes: createVAOAndSetAttributes,
        createVAOFromBufferInfo: createVAOFromBufferInfo,
        drawBufferInfo: drawBufferInfo,
        drawObjectList: drawObjectList,
        glEnumToString: glEnumToString,
        getExtensionWithKnownPrefixes: getExtensionWithKnownPrefixes,
        resizeCanvasToDisplaySize: resizeCanvasToDisplaySize,
        setAttributes: setAttributes,
        setBuffersAndAttributes: setBuffersAndAttributes,
        setUniforms: setUniforms
    };
});

},{}]},["5htpb","kYW0I"], "kYW0I", "parcelRequire94c2")

//# sourceMappingURL=index.e93d55a9.js.map
