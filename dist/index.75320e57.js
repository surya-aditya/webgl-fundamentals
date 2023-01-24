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
})({"dKxsn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dfc838fc75320e57";
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

},{}],"jyKRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webgl = require("./utils/webgl");
var _m3 = require("./utils/webgl/m3");
var _vertexGlsl = require("./shaders/vertex.glsl");
var _vertexGlslDefault = parcelHelpers.interopDefault(_vertexGlsl);
var _fragmentGlsl = require("./shaders/fragment.glsl");
var _fragmentGlslDefault = parcelHelpers.interopDefault(_fragmentGlsl);
class App {
    constructor(){
        // Get A WebGL context
        this.canvas = document.querySelector("#c");
        this.gl = this.canvas.getContext("webgl");
        // Get the strings for our GLSL shaders
        this.vertex = (0, _webgl.createShader)(this.gl, (0, _vertexGlslDefault.default), "VERTEX");
        this.fragment = (0, _webgl.createShader)(this.gl, (0, _fragmentGlslDefault.default), "FRAGMENT");
        // create GLSL shaders, upload the GLSL source, compile the shaders
        this.program = (0, _webgl.createProgram)(this.gl, this.vertex, this.fragment);
        if (!this.gl) throw "Canvas not found";
        this.setup();
    }
    setup() {
        // Link the two shaders into a program
        this.gl.useProgram(this.program);
        // look up where the vertex data needs to go.
        this.positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");
        this.colorLocation = this.gl.getAttribLocation(this.program, "a_color");
        // uniforms
        this.resolutionUniformLocation = this.gl.getUniformLocation(this.program, "u_resolution");
        this.colorUniformLocation = this.gl.getUniformLocation(this.program, "u_color");
        this.matrixLocation = this.gl.getUniformLocation(this.program, "u_matrix");
        // Create a buffer and put three 2d clip space points in it
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        // Create a buffer for the colors.
        this.colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        var positions = [
            10,
            20,
            80,
            20,
            10,
            50,
            10,
            50,
            80,
            20,
            80,
            50
        ];
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
        this.translation = [
            200,
            150
        ];
        this.angleInRadians = 0;
        this.scale = [
            1,
            1
        ];
        this.drawScene();
    }
    drawScene() {
        (0, _webgl.resizeCanvasToDisplaySize)(this.gl.canvas);
        // Tell WebGL how to convert from clip space to pixels
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        // Clear the canvas.
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // Tell it to use our program (pair of shaders)
        this.gl.useProgram(this.program);
        // Turn on the position attribute
        this.gl.enableVertexAttribArray(this.positionAttributeLocation);
        // Bind the position buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        let size = 2;
        let type = this.gl.FLOAT;
        let normalize = false;
        let stride = 0;
        let offset = 0;
        this.gl.vertexAttribPointer(this.positionAttributeLocation, size, type, normalize, stride, offset);
        // Turn on the color attribute
        this.gl.enableVertexAttribArray(this.colorLocation);
        // Bind the color buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        size = 4;
        type = this.gl.FLOAT;
        normalize = false;
        stride = 0;
        offset = 0;
        this.gl.vertexAttribPointer(this.colorLocation, size, type, normalize, stride, offset);
        // set the resolution
        this.gl.uniform2f(this.resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);
        // Compute the matrix
        let matrix = (0, _m3.Projection)(this.canvas.clientWidth, this.canvas.clientHeight);
        matrix = (0, _m3.Translate)(matrix, this.translation[0], this.translation[1]);
        matrix = (0, _m3.Rotate)(matrix, this.angleInRadians);
        matrix = (0, _m3.Scale)(matrix, this.scale[0], this.scale[1]);
        // Set the matrix.
        this.gl.uniformMatrix3fv(this.matrixLocation, false, matrix);
        // Draw the geometry.
        this.primitiveType = this.gl.TRIANGLES;
        this.offset = 0;
        this.count = 6;
        // Set the geometry.
        this.setGeometry(this.gl);
        // Set the colors.
        this.setColors(this.gl);
    }
    setGeometry(gl) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -150,
            -100,
            150,
            -100,
            -150,
            100,
            150,
            -100,
            -150,
            100,
            150,
            100
        ]), gl.STATIC_DRAW);
        gl.uniform4f(this.colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);
        gl.drawArrays(this.primitiveType, this.offset, this.count);
    }
    setColors(gl) {
        // Pick 2 random colors.
        var r1 = Math.random();
        var b1 = Math.random();
        var g1 = Math.random();
        var r2 = Math.random();
        var b2 = Math.random();
        var g2 = Math.random();
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            r1,
            b1,
            g1,
            1,
            r1,
            b1,
            g1,
            1,
            r1,
            b1,
            g1,
            1,
            r2,
            b2,
            g2,
            1,
            r2,
            b2,
            g2,
            1,
            r2,
            b2,
            g2,
            1
        ]), gl.STATIC_DRAW);
    }
}
new App();

},{"./utils/webgl":"fXrAk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./shaders/vertex.glsl":"lsJIW","./shaders/fragment.glsl":"6zaRz","./utils/webgl/m3":"5hu0d"}],"fXrAk":[function(require,module,exports) {
/**
 * Create
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProgram", ()=>createProgram);
parcelHelpers.export(exports, "createShader", ()=>createShader);
parcelHelpers.export(exports, "compileShader", ()=>compileShader);
parcelHelpers.export(exports, "resizeCanvasToDisplaySize", ()=>resizeCanvasToDisplaySize);
parcelHelpers.export(exports, "setRectangle", ()=>setRectangle);
function createShader(gl, shaderSource, shaderType) {
    if (!shaderSource) throw "*** Error: Unable to load source: " + shaderSource;
    // If we didn't pass in a type, use the 'type' from the script tag.
    if (shaderType === "VERTEX") shaderType = gl.VERTEX_SHADER;
    else if (shaderType === "FRAGMENT") shaderType = gl.FRAGMENT_SHADER;
    else throw "*** Error: unknown shader type: " + shaderSource;
    return compileShader(gl, shaderSource, shaderType);
}
function createProgram(gl, vertexShader, fragmentShader) {
    // Create the shader object
    const program = gl.createProgram();
    // attach the shaders.
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // link the program.
    gl.linkProgram(program);
    // something went wrong with the link
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw "program failed to link:" + gl.getProgramInfoLog(program);
    return program;
}
/**
 * Compile
 */ function compileShader(gl, shaderSource, shaderType) {
    let shader = gl.createShader(shaderType);
    // Set the shader source code.
    gl.shaderSource(shader, shaderSource);
    // Compile the shader
    gl.compileShader(shader);
    // Check if it compiled
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw "could not compile shader:" + gl.getShaderInfoLog(shader);
    return shader;
}
/**
 * Resize a canvas to match the size its displayed.
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
// Fills the buffer with the values that define a rectangle.
function setRectangle(gl, x, y, width, height) {
    let x1 = x;
    let x2 = x + width;
    let y1 = y;
    let y2 = y + height;
    // NOTE: gl.bufferData(gl.ARRAY_BUFFER, ...) will affect
    // whatever buffer is bound to the `ARRAY_BUFFER` bind point
    // but so far we only have one buffer. If we had more than one
    // buffer we'd want to bind that buffer to `ARRAY_BUFFER` first.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1,
        y1,
        x2,
        y1,
        x1,
        y2,
        x1,
        y2,
        x2,
        y1,
        x2,
        y2
    ]), gl.STATIC_DRAW);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"lsJIW":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec2 a_position;\nattribute vec4 a_color;\n\n//  uniform vec2 u_resolution;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\n\n// all shaders have a main function\nvoid main() {\n\n  // Multiply the position by the matrix.\n  gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);\n\n  // Copy the color from the attribute to the varying.\n  v_color = a_color;\n}\n";

},{}],"6zaRz":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec4 v_color;\n\nvoid main() {\n  // gl_FragColor is a special variable a fragment shader\n  // is responsible for setting\n\n  gl_FragColor = v_color; \n}";

},{}],"5hu0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DegreeToRadius", ()=>degToRad);
parcelHelpers.export(exports, "RadiusToDegree", ()=>radToDeg);
parcelHelpers.export(exports, "Distance", ()=>distance);
parcelHelpers.export(exports, "Dot", ()=>dot);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "Inverse", ()=>inverse);
parcelHelpers.export(exports, "Multiply", ()=>multiply);
parcelHelpers.export(exports, "Normalize", ()=>normalize);
parcelHelpers.export(exports, "Projection", ()=>projection);
parcelHelpers.export(exports, "reflect", ()=>reflect);
parcelHelpers.export(exports, "Rotation", ()=>rotation);
parcelHelpers.export(exports, "Rotate", ()=>rotate);
parcelHelpers.export(exports, "Scaling", ()=>scaling);
parcelHelpers.export(exports, "Scale", ()=>scale);
parcelHelpers.export(exports, "TransformPoint", ()=>transformPoint);
parcelHelpers.export(exports, "Translation", ()=>translation);
parcelHelpers.export(exports, "Translate", ()=>translate);
parcelHelpers.export(exports, "Project", ()=>project);
let MatType = Float32Array;
/**
 * Sets the type this library creates for a Mat3
 * @param Ctor 
 * @returns 
 */ function setDefaultType(Ctor) {
    const OldType = MatType;
    MatType = Ctor;
    return OldType;
}
/**
  * Takes two Matrix3s, a and b, and computes the product in the order
  * that pre-composes b with a.  In other words, the matrix returned will
  * @param a 
  * @param b 
  * @param dst 
  * @returns 
*/ function multiply(a, b, dst) {
    dst = dst || new MatType(9);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b10 = b[3];
    var b11 = b[4];
    var b12 = b[5];
    var b20 = b[6];
    var b21 = b[7];
    var b22 = b[8];
    dst[0] = b00 * a00 + b01 * a10 + b02 * a20;
    dst[1] = b00 * a01 + b01 * a11 + b02 * a21;
    dst[2] = b00 * a02 + b01 * a12 + b02 * a22;
    dst[3] = b10 * a00 + b11 * a10 + b12 * a20;
    dst[4] = b10 * a01 + b11 * a11 + b12 * a21;
    dst[5] = b10 * a02 + b11 * a12 + b12 * a22;
    dst[6] = b20 * a00 + b21 * a10 + b22 * a20;
    dst[7] = b20 * a01 + b21 * a11 + b22 * a21;
    dst[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return dst;
}
/**
 * Creates a 3x3 identity matrix
 * @param dst 
 * @returns 
 */ function identity(dst) {
    dst = dst || new MatType(9);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 1;
    dst[5] = 0;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 1;
    return dst;
}
/**
 * Creates a 2D projection matrix
 * @param width 
 * @param height 
 * @param dst 
 * @returns 
 */ function projection(width, height, dst) {
    dst = dst || new MatType(9);
    // Note: This matrix flips the Y axis so 0 is at the top.
    dst[0] = 2 / width;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = -2 / height;
    dst[5] = 0;
    dst[6] = -1;
    dst[7] = 1;
    dst[8] = 1;
    return dst;
}
/**
 * Multiplies by a 2D projection matrix
 * @param m 
 * @param width 
 * @param height 
 * @param dst 
 * @returns 
 */ function project(m, width, height, dst) {
    return multiply(m, projection(width, height), dst);
}
/**
 * Creates a 2D translation matrix
 * @param {number} tx amount to translate in x
 * @param {number} ty amount to translate in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a translation matrix that translates by tx and ty.
 * @memberOf module:webgl-2d-math
*/ function translation(tx, ty, dst) {
    dst = dst || new MatType(9);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 1;
    dst[5] = 0;
    dst[6] = tx;
    dst[7] = ty;
    dst[8] = 1;
    return dst;
}
/**
 * Multiplies by a 2D translation matrix
 * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
 * @param {number} tx amount to translate in x
 * @param {number} ty amount to translate in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} the result
 * @memberOf module:webgl-2d-math
*/ function translate(m, tx, ty, dst) {
    return multiply(m, translation(tx, ty), dst);
}
/**
 * Creates a 2D rotation matrix
 * @param {number} angleInRadians amount to rotate in radians
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a rotation matrix that rotates by angleInRadians
 * @memberOf module:webgl-2d-math
*/ function rotation(angleInRadians, dst) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    dst = dst || new MatType(9);
    dst[0] = c;
    dst[1] = -s;
    dst[2] = 0;
    dst[3] = s;
    dst[4] = c;
    dst[5] = 0;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 1;
    return dst;
}
/**
   * Multiplies by a 2D rotation matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} angleInRadians amount to rotate in radians
   * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */ function rotate(m, angleInRadians, dst) {
    return multiply(m, rotation(angleInRadians), dst);
}
/**
 * Creates a 2D scaling matrix
 * @param {number} sx amount to scale in x
 * @param {number} sy amount to scale in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a scale matrix that scales by sx and sy.
 * @memberOf module:webgl-2d-math
 */ function scaling(sx, sy, dst) {
    dst = dst || new MatType(9);
    dst[0] = sx;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = sy;
    dst[5] = 0;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 1;
    return dst;
}
/**
 * Multiplies by a 2D scaling matrix
 * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
 * @param {number} sx amount to scale in x
 * @param {number} sy amount to scale in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} the result
 * @memberOf module:webgl-2d-math
 */ function scale(m, sx, sy, dst) {
    return multiply(m, scaling(sx, sy), dst);
}
function dot(x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
}
function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
function normalize(x, y) {
    var l = distance(0, 0, x, y);
    if (l > 0.00001) return [
        x / l,
        y / l
    ];
    else return [
        0,
        0
    ];
}
// i = incident
// n = normal
function reflect(ix, iy, nx, ny) {
    // I - 2.0 * dot(N, I) * N.
    var d = dot(nx, ny, ix, iy);
    return [
        ix - 2 * d * nx,
        iy - 2 * d * ny
    ];
}
function radToDeg(r) {
    return r * 180 / Math.PI;
}
function degToRad(d) {
    return d * Math.PI / 180;
}
function transformPoint(m, v) {
    var v0 = v[0];
    var v1 = v[1];
    var d = v0 * m[2] + v1 * m[5] + m[8];
    return [
        (v0 * m[0] + v1 * m[3] + m[6]) / d,
        (v0 * m[1] + v1 * m[4] + m[7]) / d
    ];
}
function inverse(m, dst) {
    dst = dst || new MatType(9);
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m10 = m[3];
    const m11 = m[4];
    const m12 = m[5];
    const m20 = m[6];
    const m21 = m[7];
    const m22 = m[8];
    const b01 = m22 * m11 - m12 * m21;
    const b11 = -m22 * m10 + m12 * m20;
    const b21 = m21 * m10 - m11 * m20;
    const det = m00 * b01 + m01 * b11 + m02 * b21;
    const invDet = 1.0 / det;
    dst[0] = b01 * invDet;
    dst[1] = (-m22 * m01 + m02 * m21) * invDet;
    dst[2] = (m12 * m01 - m02 * m11) * invDet;
    dst[3] = b11 * invDet;
    dst[4] = (m22 * m00 - m02 * m20) * invDet;
    dst[5] = (-m12 * m00 + m02 * m10) * invDet;
    dst[6] = b21 * invDet;
    dst[7] = (-m21 * m00 + m01 * m20) * invDet;
    dst[8] = (m11 * m00 - m01 * m10) * invDet;
    return dst;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dKxsn","jyKRr"], "jyKRr", "parcelRequire94c2")

//# sourceMappingURL=index.75320e57.js.map
