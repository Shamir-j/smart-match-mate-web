module.exports = [
"[project]/src/components/common/WebVitals.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebVitals,
    "initPerformanceTracking",
    ()=>initPerformanceTracking,
    "optimizeImages",
    ()=>optimizeImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/web-vitals/dist/web-vitals.js [app-ssr] (ecmascript)");
'use client';
;
;
function WebVitals({ onMetric }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Track Core Web Vitals
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onCLS"])(onMetric || logMetric);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onINP"])(onMetric || logMetric); // Replaces FID in newer web-vitals
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onFCP"])(onMetric || logMetric);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onLCP"])(onMetric || logMetric);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$web$2d$vitals$2f$dist$2f$web$2d$vitals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onTTFB"])(onMetric || logMetric);
    }, [
        onMetric
    ]);
    return null;
}
function logMetric(metric) {
    // Log to console in development
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('Web Vital:', metric);
    }
    // Send to analytics in production
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function initPerformanceTracking() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Track navigation timing
    const navigation = undefined;
    // Track resource loading performance
    const observer = undefined;
}
function optimizeImages() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Add intersection observer for lazy loading fallback
    const imageObserver = undefined;
    // Preload critical images
    const criticalImages = undefined;
}
}),
"[project]/src/components/common/Analytics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics,
    "trackWaitlistSignup",
    ()=>trackWaitlistSignup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$third$2d$parties$2f$dist$2f$google$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@next/third-parties/dist/google/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$WebVitals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/WebVitals.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Analytics({ gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX' // Replace with actual GTM ID
 }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize performance tracking
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$WebVitals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initPerformanceTracking"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$WebVitals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimizeImages"])();
        // Track user engagement
        trackUserEngagement();
        // Set up custom event tracking
        setupCustomEventTracking();
        // Track app downloads
        trackAppDownloads();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$third$2d$parties$2f$dist$2f$google$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAnalytics"], {
                gaId: gaId
            }, void 0, false, {
                fileName: "[project]/src/components/common/Analytics.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$third$2d$parties$2f$dist$2f$google$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleTagManager"], {
                gtmId: gtmId
            }, void 0, false, {
                fileName: "[project]/src/components/common/Analytics.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$WebVitals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onMetric: sendToAnalytics
            }, void 0, false, {
                fileName: "[project]/src/components/common/Analytics.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                dangerouslySetInnerHTML: {
                    __html: `
            // Enhanced ecommerce tracking for app downloads
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Track custom events
            window.trackEvent = function(eventName, parameters) {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, parameters);
              }
            };

            // Track scroll depth
            window.trackScrollDepth = function() {
              const scrollPercentage = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
              );
              
              if (scrollPercentage > 0 && scrollPercentage % 25 === 0) {
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: scrollPercentage + '%',
                  value: scrollPercentage
                });
              }
            };
          `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/Analytics.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function sendToAnalytics(metric) {
    // Send Core Web Vitals to Google Analytics
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function trackUserEngagement() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Track time on site
    const startTime = undefined;
    // Track scroll depth
    let maxScroll;
}
function setupCustomEventTracking() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackAppDownloads() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackWaitlistSignup(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
// Hash email for privacy compliance
function hashEmail(email) {
    // Simple hash function for privacy (use crypto.subtle.digest in production)
    let hash = 0;
    for(let i = 0; i < email.length; i++){
        const char = email.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
}
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')","strategy":"worker","location":"head","action":"append"}]});}),
"[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatData = exports.createHtml = exports.formatUrl = void 0;
function filterArgs(args, selectedArgs, inverse = false) {
    if (!selectedArgs) return {};
    return Object.keys(args).filter((key)=>inverse ? !selectedArgs.includes(key) : selectedArgs.includes(key)).reduce((obj, key)=>{
        obj[key] = args[key];
        return obj;
    }, {});
}
// Add all required search params with user inputs as values
function formatUrl(url, params, args, slug) {
    const newUrl = slug && Object.keys(slug).length > 0 ? new URL(Object.values(slug)[0], url) // If there's a user inputted param for the URL slug, replace the default existing slug or include it
     : new URL(url);
    if (params && args) {
        params.forEach((param)=>{
            if (args[param]) newUrl.searchParams.set(param, args[param]);
        });
    }
    return newUrl.toString();
}
exports.formatUrl = formatUrl;
// Construct HTML element and include all default attributes and user-inputted attributes
function createHtml(element, attributes, htmlAttrArgs, urlQueryParamArgs, slugParamArg) {
    var _a;
    if (!attributes) return `<${element}></${element}>`;
    const formattedAttributes = ((_a = attributes.src) === null || _a === void 0 ? void 0 : _a.url) ? Object.assign(Object.assign({}, attributes), {
        src: formatUrl(attributes.src.url, attributes.src.params, urlQueryParamArgs, slugParamArg)
    }) : attributes;
    const htmlAttributes = Object.keys(Object.assign(Object.assign({}, formattedAttributes), htmlAttrArgs)).reduce((acc, name)=>{
        const userVal = htmlAttrArgs === null || htmlAttrArgs === void 0 ? void 0 : htmlAttrArgs[name];
        const defaultVal = formattedAttributes[name];
        const finalVal = userVal !== null && userVal !== void 0 ? userVal : defaultVal; // overwrite
        const attrString = finalVal === true ? name : `${name}="${finalVal}"`;
        return finalVal ? acc + ` ${attrString}` : acc;
    }, '');
    return `<${element}${htmlAttributes}></${element}>`;
}
exports.createHtml = createHtml;
// Format JSON by including all default and user-required parameters
function formatData(data, args) {
    var _a, _b, _c, _d, _e;
    const allScriptParams = (_a = data.scripts) === null || _a === void 0 ? void 0 : _a.reduce((acc, script)=>[
            ...acc,
            ...Array.isArray(script.params) ? script.params : []
        ], []);
    // First, find all input arguments that map to parameters passed to script URLs
    const scriptUrlParamInputs = filterArgs(args, allScriptParams);
    // Second, find all input arguments that map to parameters passed to the HTML src attribute
    const htmlUrlParamInputs = filterArgs(args, (_c = (_b = data.html) === null || _b === void 0 ? void 0 : _b.attributes.src) === null || _c === void 0 ? void 0 : _c.params);
    // Third, find the input argument that maps to the slug parameter passed to the HTML src attribute if present
    const htmlSlugParamInput = filterArgs(args, [
        (_e = (_d = data.html) === null || _d === void 0 ? void 0 : _d.attributes.src) === null || _e === void 0 ? void 0 : _e.slugParam
    ]);
    // Lastly, all remaining arguments are forwarded as separate HTML attributes
    const htmlAttrInputs = filterArgs(args, [
        ...Object.keys(scriptUrlParamInputs),
        ...Object.keys(htmlUrlParamInputs),
        ...Object.keys(htmlSlugParamInput)
    ], true);
    return Object.assign(Object.assign({}, data), {
        // Pass any custom attributes to HTML content
        html: data.html ? createHtml(data.html.element, data.html.attributes, htmlAttrInputs, htmlUrlParamInputs, htmlSlugParamInput) : null,
        // Pass any required query params with user values for relevant scripts
        scripts: data.scripts ? data.scripts.map((script)=>Object.assign(Object.assign({}, script), {
                url: formatUrl(script.url, script.params, scriptUrlParamInputs)
            })) : null
    });
}
exports.formatData = formatData;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleAnalytics = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleAnalytics = GoogleAnalytics;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}});}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleMapsEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleMapsEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleMapsEmbed = GoogleMapsEmbed;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]});}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const YouTubeEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.YouTubeEmbed = YouTubeEmbed;
}),
"[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = exports.GoogleMapsEmbed = exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var google_analytics_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return google_analytics_1.GoogleAnalytics;
    }
});
var google_maps_embed_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return google_maps_embed_1.GoogleMapsEmbed;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return youtube_embed_1.YouTubeEmbed;
    }
});
}),
"[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThirdPartyScriptEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function ThirdPartyScriptEmbed({ html, height = null, width = null, children, dataNtpc = '' }) {
    (0, react_1.useEffect)(()=>{
        if (dataNtpc) {
            // performance.mark is being used as a feature use signal. While it is traditionally used for performance
            // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
            // existing API.
            performance.mark('mark_feature_usage', {
                detail: {
                    feature: `next-third-parties-${dataNtpc}`
                }
            });
        }
    }, [
        dataNtpc
    ]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            children,
            html ? (0, jsx_runtime_1.jsx)("div", {
                style: {
                    height: height != null ? `${height}px` : 'auto',
                    width: width != null ? `${width}px` : 'auto'
                },
                "data-ntpc": dataNtpc,
                dangerouslySetInnerHTML: {
                    __html: html
                }
            }) : null
        ]
    });
}
}),
"[project]/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GoogleMapsEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const third_party_capital_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
function GoogleMapsEmbed(props) {
    const { apiKey, ...restProps } = props;
    const formattedProps = {
        ...restProps,
        key: apiKey
    };
    const { html } = (0, third_party_capital_1.GoogleMapsEmbed)(formattedProps);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: formattedProps.height || null,
        width: formattedProps.width || null,
        html: html,
        dataNtpc: "GoogleMapsEmbed"
    });
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/node_modules/next/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = YouTubeEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
const third_party_capital_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
const scriptStrategy = {
    server: 'beforeInteractive',
    client: 'afterInteractive',
    idle: 'lazyOnload',
    worker: 'worker'
};
function YouTubeEmbed(props) {
    const { html, scripts, stylesheets } = (0, third_party_capital_1.YouTubeEmbed)(props);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: props.height || null,
        width: props.width || null,
        html: html,
        dataNtpc: "YouTubeEmbed",
        children: scripts === null || scripts === void 0 ? void 0 : scripts.map((script)=>(0, jsx_runtime_1.jsx)(script_1.default, {
                src: script.url,
                strategy: scriptStrategy[script.strategy],
                stylesheets: stylesheets
            }, script.url))
    });
}
}),
"[project]/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGTMEvent = void 0;
exports.GoogleTagManager = GoogleTagManager;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = 'dataLayer';
function GoogleTagManager(props) {
    const { gtmId, gtmScriptUrl = 'https://www.googletagmanager.com/gtm.js', dataLayerName = 'dataLayer', auth, preview, dataLayer, nonce } = props;
    currDataLayerName = dataLayerName;
    const gtmLayer = dataLayerName !== 'dataLayer' ? `&l=${dataLayerName}` : '';
    const gtmAuth = auth ? `&gtm_auth=${auth}` : '';
    const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : '';
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-gtm'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: `${gtmScriptUrl}?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}`,
                nonce: nonce
            })
        ]
    });
}
const sendGTMEvent = (data, dataLayerName)=>{
    // special case if we are sending events before GTM init and we have custom dataLayerName
    const dataLayer = dataLayerName || currDataLayerName;
    // define dataLayer so we can still queue up events before GTM init
    window[dataLayer] = window[dataLayer] || [];
    window[dataLayer].push(data);
};
exports.sendGTMEvent = sendGTMEvent;
}),
"[project]/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = GoogleAnalytics;
exports.sendGAEvent = sendGAEvent;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = undefined;
function GoogleAnalytics(props) {
    const { gaId, debugMode, dataLayerName = 'dataLayer', nonce } = props;
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
    }
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-ga'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${debugMode ? ",{ 'debug_mode': true }" : ''});`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                nonce: nonce
            })
        ]
    });
}
function sendGAEvent(..._args) {
    if (currDataLayerName === undefined) {
        console.warn(`@next/third-parties: GA has not been initialized`);
        return;
    }
    if (window[currDataLayerName]) {
        window[currDataLayerName].push(arguments);
    } else {
        console.warn(`@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`);
    }
}
}),
"[project]/node_modules/@next/third-parties/dist/google/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGAEvent = exports.GoogleAnalytics = exports.sendGTMEvent = exports.GoogleTagManager = exports.YouTubeEmbed = exports.GoogleMapsEmbed = void 0;
var google_maps_embed_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(google_maps_embed_1).default;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(youtube_embed_1).default;
    }
});
var gtm_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleTagManager", {
    enumerable: true,
    get: function() {
        return gtm_1.GoogleTagManager;
    }
});
Object.defineProperty(exports, "sendGTMEvent", {
    enumerable: true,
    get: function() {
        return gtm_1.sendGTMEvent;
    }
});
var ga_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return ga_1.GoogleAnalytics;
    }
});
Object.defineProperty(exports, "sendGAEvent", {
    enumerable: true,
    get: function() {
        return ga_1.sendGAEvent;
    }
});
}),
"[project]/node_modules/web-vitals/dist/web-vitals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLSThresholds",
    ()=>b,
    "FCPThresholds",
    ()=>y,
    "INPThresholds",
    ()=>B,
    "LCPThresholds",
    ()=>q,
    "TTFBThresholds",
    ()=>H,
    "onCLS",
    ()=>L,
    "onFCP",
    ()=>E,
    "onINP",
    ()=>S,
    "onLCP",
    ()=>x,
    "onTTFB",
    ()=>$
]);
let e = -1;
const t = (t)=>{
    addEventListener("pageshow", (n)=>{
        n.persisted && (e = n.timeStamp, t(n));
    }, !0);
}, n = (e, t, n, i)=>{
    let s, o;
    return (r)=>{
        t.value >= 0 && (r || i) && (o = t.value - (s ?? 0), (o || void 0 === s) && (s = t.value, t.delta = o, t.rating = ((e, t)=>e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)));
    };
}, i = (e)=>{
    requestAnimationFrame(()=>requestAnimationFrame(()=>e()));
}, s = ()=>{
    const e = performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
}, o = ()=>{
    const e = s();
    return e?.activationStart ?? 0;
}, r = (t, n = -1)=>{
    const i = s();
    let r = "navigate";
    e >= 0 ? r = "back-forward-cache" : i && (document.prerendering || o() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-")));
    return {
        name: t,
        value: n,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
        navigationType: r
    };
}, c = new WeakMap;
function a(e, t) {
    return c.get(e) || c.set(e, new t), c.get(e);
}
class d {
    t;
    i = 0;
    o = [];
    h(e) {
        if (e.hadRecentInput) return;
        const t = this.o[0], n = this.o.at(-1);
        this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [
            e
        ]), this.t?.(e);
    }
}
const h = (e, t, n = {})=>{
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const i = new PerformanceObserver((e)=>{
                Promise.resolve().then(()=>{
                    t(e.getEntries());
                });
            });
            return i.observe({
                type: e,
                buffered: !0,
                ...n
            }), i;
        }
    } catch  {}
}, f = (e)=>{
    let t = !1;
    return ()=>{
        t || (e(), t = !0);
    };
};
let u = -1;
const l = new Set, m = ()=>"hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0, p = (e)=>{
    if ("hidden" === document.visibilityState) {
        if ("visibilitychange" === e.type) for (const e of l)e();
        isFinite(u) || (u = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", p, !0));
    }
}, v = ()=>{
    if (u < 0) {
        const e = o(), n = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((t)=>"hidden" === t.name && t.startTime > e)[0]?.startTime;
        u = n ?? m(), addEventListener("visibilitychange", p, !0), addEventListener("prerenderingchange", p, !0), t(()=>{
            setTimeout(()=>{
                u = m();
            });
        });
    }
    return {
        get firstHiddenTime () {
            return u;
        },
        onHidden (e) {
            l.add(e);
        }
    };
}, g = (e)=>{
    document.prerendering ? addEventListener("prerenderingchange", ()=>e(), !0) : e();
}, y = [
    1800,
    3e3
], E = (e, s = {})=>{
    g(()=>{
        const c = v();
        let a, d = r("FCP");
        const f = h("paint", (e)=>{
            for (const t of e)"first-contentful-paint" === t.name && (f.disconnect(), t.startTime < c.firstHiddenTime && (d.value = Math.max(t.startTime - o(), 0), d.entries.push(t), a(!0)));
        });
        f && (a = n(e, d, y, s.reportAllChanges), t((t)=>{
            d = r("FCP"), a = n(e, d, y, s.reportAllChanges), i(()=>{
                d.value = performance.now() - t.timeStamp, a(!0);
            });
        }));
    });
}, b = [
    .1,
    .25
], L = (e, s = {})=>{
    const o = v();
    E(f(()=>{
        let c, f = r("CLS", 0);
        const u = a(s, d), l = (e)=>{
            for (const t of e)u.h(t);
            u.i > f.value && (f.value = u.i, f.entries = u.o, c());
        }, m = h("layout-shift", l);
        m && (c = n(e, f, b, s.reportAllChanges), o.onHidden(()=>{
            l(m.takeRecords()), c(!0);
        }), t(()=>{
            u.i = 0, f = r("CLS", 0), c = n(e, f, b, s.reportAllChanges), i(()=>c());
        }), setTimeout(c));
    }));
};
let P = 0, T = 1 / 0, _ = 0;
const M = (e)=>{
    for (const t of e)t.interactionId && (T = Math.min(T, t.interactionId), _ = Math.max(_, t.interactionId), P = _ ? (_ - T) / 7 + 1 : 0);
};
let w;
const C = ()=>w ? P : performance.interactionCount ?? 0, I = ()=>{
    "interactionCount" in performance || w || (w = h("event", M, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }));
};
let F = 0;
class k {
    u = [];
    l = new Map;
    m;
    p;
    v() {
        F = C(), this.u.length = 0, this.l.clear();
    }
    L() {
        const e = Math.min(this.u.length - 1, Math.floor((C() - F) / 50));
        return this.u[e];
    }
    h(e) {
        if (this.m?.(e), !e.interactionId && "first-input" !== e.entryType) return;
        const t = this.u.at(-1);
        let n = this.l.get(e.interactionId);
        if (n || this.u.length < 10 || e.duration > t.P) {
            if (n ? e.duration > n.P ? (n.entries = [
                e
            ], n.P = e.duration) : e.duration === n.P && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                id: e.interactionId,
                entries: [
                    e
                ],
                P: e.duration
            }, this.l.set(n.id, n), this.u.push(n)), this.u.sort((e, t)=>t.P - e.P), this.u.length > 10) {
                const e = this.u.splice(10);
                for (const t of e)this.l.delete(t.id);
            }
            this.p?.(n);
        }
    }
}
const A = (e)=>{
    const t = globalThis.requestIdleCallback || setTimeout;
    "hidden" === document.visibilityState ? e() : (e = f(e), addEventListener("visibilitychange", e, {
        once: !0,
        capture: !0
    }), t(()=>{
        e(), removeEventListener("visibilitychange", e, {
            capture: !0
        });
    }));
}, B = [
    200,
    500
], S = (e, i = {})=>{
    if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
    const s = v();
    g(()=>{
        I();
        let o, c = r("INP");
        const d = a(i, k), f = (e)=>{
            A(()=>{
                for (const t of e)d.h(t);
                const t = d.L();
                t && t.P !== c.value && (c.value = t.P, c.entries = t.entries, o());
            });
        }, u = h("event", f, {
            durationThreshold: i.durationThreshold ?? 40
        });
        o = n(e, c, B, i.reportAllChanges), u && (u.observe({
            type: "first-input",
            buffered: !0
        }), s.onHidden(()=>{
            f(u.takeRecords()), o(!0);
        }), t(()=>{
            d.v(), c = r("INP"), o = n(e, c, B, i.reportAllChanges);
        }));
    });
};
class N {
    m;
    h(e) {
        this.m?.(e);
    }
}
const q = [
    2500,
    4e3
], x = (e, s = {})=>{
    g(()=>{
        const c = v();
        let d, u = r("LCP");
        const l = a(s, N), m = (e)=>{
            s.reportAllChanges || (e = e.slice(-1));
            for (const t of e)l.h(t), t.startTime < c.firstHiddenTime && (u.value = Math.max(t.startTime - o(), 0), u.entries = [
                t
            ], d());
        }, p = h("largest-contentful-paint", m);
        if (p) {
            d = n(e, u, q, s.reportAllChanges);
            const o = f(()=>{
                m(p.takeRecords()), p.disconnect(), d(!0);
            }), c = (e)=>{
                e.isTrusted && (A(o), removeEventListener(e.type, c, {
                    capture: !0
                }));
            };
            for (const e of [
                "keydown",
                "click",
                "visibilitychange"
            ])addEventListener(e, c, {
                capture: !0
            });
            t((t)=>{
                u = r("LCP"), d = n(e, u, q, s.reportAllChanges), i(()=>{
                    u.value = performance.now() - t.timeStamp, d(!0);
                });
            });
        }
    });
}, H = [
    800,
    1800
], O = (e)=>{
    document.prerendering ? g(()=>O(e)) : "complete" !== document.readyState ? addEventListener("load", ()=>O(e), !0) : setTimeout(e);
}, $ = (e, i = {})=>{
    let c = r("TTFB"), a = n(e, c, H, i.reportAllChanges);
    O(()=>{
        const d = s();
        d && (c.value = Math.max(d.responseStart - o(), 0), c.entries = [
            d
        ], a(!0), t(()=>{
            c = r("TTFB", 0), a = n(e, c, H, i.reportAllChanges), a(!0);
        }));
    });
};
;
}),
];

//# sourceMappingURL=_64e01d2f._.js.map