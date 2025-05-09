import { r as reactExports, j as jsxRuntimeExports, d as reactDomExports, R as React } from "./client-DnTwIhck.js";
import { d as CCard, a2 as CCardHeader, e as CCardBody, D as CNavLink } from "./index.es-HjcCfGYB.js";
import { $ as ProBadge } from "./ProBadge-BBELDliX.js";
import "./index-BIpVExQM.js";
import "./cil-user-q2NU2AQZ.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest$1(s, e) {
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
function __awaiter$1(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
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
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
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
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() {
          return args[argIndex++];
        })
      );
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var invariant_1 = invariant;
var invariant$1 = /* @__PURE__ */ getDefaultExportFromCjs(invariant_1);
var MapContext = reactExports.createContext(null);
function useGoogleMap() {
  invariant$1(!!reactExports.useContext, "useGoogleMap is React hook and requires React version 16.8+");
  var map = reactExports.useContext(MapContext);
  invariant$1(!!map, "useGoogleMap needs a GoogleMap available up in the tree");
  return map;
}
function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
}
function forEach(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    return fn(obj[key], key);
  });
}
function applyUpdaterToNextProps(updaterMap2, prevProps, nextProps, instance) {
  var map = {};
  var iter = function(fn, key) {
    var nextValue = nextProps[key];
    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };
  forEach(updaterMap2, iter);
  return map;
}
function registerEvents(props, instance, eventMap2) {
  var registeredList = reduce(eventMap2, function reducer(acc, googleEventName, onEventName) {
    if (typeof props[onEventName] === "function") {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }
    return acc;
  }, []);
  return registeredList;
}
function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}
function unregisterEvents(events) {
  if (events === void 0) {
    events = [];
  }
  events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_a) {
  var updaterMap2 = _a.updaterMap, eventMap2 = _a.eventMap, prevProps = _a.prevProps, nextProps = _a.nextProps, instance = _a.instance;
  var registeredEvents = registerEvents(nextProps, instance, eventMap2);
  applyUpdaterToNextProps(updaterMap2, prevProps, nextProps, instance);
  return registeredEvents;
}
var eventMap$i = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$i = {
  extraMapTypes: function(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center: function(map, center) {
    map.setCenter(center);
  },
  clickableIcons: function(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading: function(map, heading) {
    map.setHeading(heading);
  },
  mapTypeId: function(map, mapTypeId) {
    map.setMapTypeId(mapTypeId);
  },
  options: function(map, options) {
    map.setOptions(options);
  },
  streetView: function(map, streetView) {
    map.setStreetView(streetView);
  },
  tilt: function(map, tilt) {
    map.setTilt(tilt);
  },
  zoom: function(map, zoom) {
    map.setZoom(zoom);
  }
};
function GoogleMapFunctional(_a) {
  var children = _a.children, options = _a.options, id = _a.id, mapContainerStyle = _a.mapContainerStyle, mapContainerClassName = _a.mapContainerClassName, center = _a.center, onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onCenterChanged = _a.onCenterChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var _b = reactExports.useState(null), map = _b[0], setMap = _b[1];
  var ref = reactExports.useRef(null);
  var _c = reactExports.useState(null), centerChangedListener = _c[0], setCenterChangedListener = _c[1];
  var _d = reactExports.useState(null), dblclickListener = _d[0], setDblclickListener = _d[1];
  var _e = reactExports.useState(null), dragendListener = _e[0], setDragendListener = _e[1];
  var _f = reactExports.useState(null), dragstartListener = _f[0], setDragstartListener = _f[1];
  var _g = reactExports.useState(null), mousedownListener = _g[0], setMousedownListener = _g[1];
  var _h = reactExports.useState(null), mousemoveListener = _h[0], setMousemoveListener = _h[1];
  var _j = reactExports.useState(null), mouseoutListener = _j[0], setMouseoutListener = _j[1];
  var _k = reactExports.useState(null), mouseoverListener = _k[0], setMouseoverListener = _k[1];
  var _l = reactExports.useState(null), mouseupListener = _l[0], setMouseupListener = _l[1];
  var _m = reactExports.useState(null), rightclickListener = _m[0], setRightclickListener = _m[1];
  var _o = reactExports.useState(null), clickListener = _o[0], setClickListener = _o[1];
  var _p = reactExports.useState(null), dragListener = _p[0], setDragListener = _p[1];
  reactExports.useEffect(function() {
    if (options && map !== null) {
      map.setOptions(options);
    }
  }, [map, options]);
  reactExports.useEffect(function() {
    if (map !== null && typeof center !== "undefined") {
      map.setCenter(center);
    }
  }, [map, center]);
  reactExports.useEffect(function() {
    if (map && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(map, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (map && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(map, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (map && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(map, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (map && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(map, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (map && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(map, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (map && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(map, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (map && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(map, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (map && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(map, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (map && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(map, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (map && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(map, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (map && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(map, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    if (map && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(map, "center_changed", onCenterChanged));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    var map2 = ref.current === null ? null : new google.maps.Map(ref.current, options);
    setMap(map2);
    if (map2 !== null && onLoad) {
      onLoad(map2);
    }
    return function() {
      if (map2 !== null) {
        if (onUnmount) {
          onUnmount(map2);
        }
      }
    };
  }, []);
  return jsxRuntimeExports.jsx("div", { id, ref, style: mapContainerStyle, className: mapContainerClassName, children: jsxRuntimeExports.jsx(MapContext.Provider, { value: map, children: map !== null ? children : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) }) });
}
reactExports.memo(GoogleMapFunctional);
var GoogleMap = (
  /** @class */
  function(_super) {
    __extends(GoogleMap2, _super);
    function GoogleMap2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        map: null
      };
      _this.registeredEvents = [];
      _this.mapRef = null;
      _this.getInstance = function() {
        if (_this.mapRef === null) {
          return null;
        }
        return new google.maps.Map(_this.mapRef, _this.props.options);
      };
      _this.panTo = function(latLng) {
        var map = _this.getInstance();
        if (map) {
          map.panTo(latLng);
        }
      };
      _this.setMapCallback = function() {
        if (_this.state.map !== null) {
          if (_this.props.onLoad) {
            _this.props.onLoad(_this.state.map);
          }
        }
      };
      _this.getRef = function(ref) {
        _this.mapRef = ref;
      };
      return _this;
    }
    GoogleMap2.prototype.componentDidMount = function() {
      var map = this.getInstance();
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps: {},
        nextProps: this.props,
        instance: map
      });
      this.setState(function setMap() {
        return {
          map
        };
      }, this.setMapCallback);
    };
    GoogleMap2.prototype.componentDidUpdate = function(prevProps) {
      if (this.state.map !== null) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$i,
          eventMap: eventMap$i,
          prevProps,
          nextProps: this.props,
          instance: this.state.map
        });
      }
    };
    GoogleMap2.prototype.componentWillUnmount = function() {
      if (this.state.map !== null) {
        if (this.props.onUnmount) {
          this.props.onUnmount(this.state.map);
        }
        unregisterEvents(this.registeredEvents);
      }
    };
    GoogleMap2.prototype.render = function() {
      return jsxRuntimeExports.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: jsxRuntimeExports.jsx(MapContext.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) }) });
    };
    return GoogleMap2;
  }(reactExports.PureComponent)
);
var isBrowser = typeof document !== "undefined";
function injectScript(_a) {
  var url = _a.url, id = _a.id, nonce = _a.nonce;
  if (!isBrowser) {
    return Promise.reject(new Error("document is undefined"));
  }
  return new Promise(function injectScriptCallback(resolve, reject) {
    var existingScript = document.getElementById(id);
    var windowWithGoogleMap = window;
    if (existingScript) {
      var dataStateAttribute = existingScript.getAttribute("data-state");
      if (existingScript.src === url && dataStateAttribute !== "error") {
        if (dataStateAttribute === "ready") {
          return resolve(id);
        } else {
          var originalInitMap_1 = windowWithGoogleMap.initMap;
          var originalErrorCallback_1 = existingScript.onerror;
          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap_1) {
              originalInitMap_1();
            }
            resolve(id);
          };
          existingScript.onerror = function(err) {
            if (originalErrorCallback_1) {
              originalErrorCallback_1(err);
            }
            reject(err);
          };
          return;
        }
      } else {
        existingScript.remove();
      }
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = id;
    script.async = true;
    script.nonce = nonce || "";
    script.onerror = function onerror(err) {
      script.setAttribute("data-state", "error");
      reject(err);
    };
    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute("data-state", "ready");
      resolve(id);
    };
    document.head.appendChild(script);
  }).catch(function(err) {
    console.error("injectScript error: ", err);
    throw err;
  });
}
function isGoogleFontStyle(element) {
  var href = element.href;
  if (href && (href.indexOf("https://fonts.googleapis.com/css?family=Roboto") === 0 || href.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text") === 0)) {
    return true;
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.styleSheet.cssText && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.styleSheet.cssText.replace("\r\n", "").indexOf(".gm-style") === 0
  ) {
    element.styleSheet.cssText = "";
    return true;
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.innerHTML && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.innerHTML.replace("\r\n", "").indexOf(".gm-style") === 0
  ) {
    element.innerHTML = "";
    return true;
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    !element.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    !element.innerHTML
  ) {
    return true;
  }
  return false;
}
function preventGoogleFonts() {
  var head = document.getElementsByTagName("head")[0];
  if (head) {
    var trueInsertBefore_1 = head.insertBefore.bind(head);
    head.insertBefore = function insertBefore(newElement, referenceElement) {
      if (!isGoogleFontStyle(newElement)) {
        Reflect.apply(trueInsertBefore_1, head, [newElement, referenceElement]);
      }
      return newElement;
    };
    var trueAppend_1 = head.appendChild.bind(head);
    head.appendChild = function appendChild(textNode) {
      if (!isGoogleFontStyle(textNode)) {
        Reflect.apply(trueAppend_1, head, [textNode]);
      }
      return textNode;
    };
  }
}
function makeLoadScriptUrl(_a) {
  var googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, _b = _a.version, version = _b === void 0 ? "weekly" : _b, language = _a.language, region = _a.region, libraries = _a.libraries, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
  var params = [];
  invariant$1(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.");
  if (googleMapsApiKey) {
    params.push("key=".concat(googleMapsApiKey));
  } else if (googleMapsClientId) {
    params.push("client=".concat(googleMapsClientId));
  }
  if (version) {
    params.push("v=".concat(version));
  }
  if (language) {
    params.push("language=".concat(language));
  }
  if (region) {
    params.push("region=".concat(region));
  }
  if (libraries && libraries.length) {
    params.push("libraries=".concat(libraries.sort().join(",")));
  }
  if (channel) {
    params.push("channel=".concat(channel));
  }
  if (mapIds && mapIds.length) {
    params.push("map_ids=".concat(mapIds.join(",")));
  }
  if (authReferrerPolicy) {
    params.push("auth_referrer_policy=".concat(authReferrerPolicy));
  }
  params.push("callback=initMap");
  return "https://maps.googleapis.com/maps/api/js?".concat(params.join("&"));
}
var cleaningUp = false;
function DefaultLoadingElement() {
  return jsxRuntimeExports.jsx("div", { children: "Loading..." });
}
var defaultLoadScriptProps = {
  id: "script-loader",
  version: "weekly"
};
/** @class */
(function(_super) {
  __extends(LoadScript2, _super);
  function LoadScript2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.check = reactExports.createRef();
    _this.state = {
      loaded: false
    };
    _this.cleanupCallback = function() {
      delete window.google.maps;
      _this.injectScript();
    };
    _this.isCleaningUp = function() {
      return __awaiter$1(_this, void 0, void 0, function() {
        function promiseCallback(resolve) {
          if (!cleaningUp) {
            resolve();
          } else {
            if (isBrowser) {
              var timer_1 = window.setInterval(function interval() {
                if (!cleaningUp) {
                  window.clearInterval(timer_1);
                  resolve();
                }
              }, 1);
            }
          }
          return;
        }
        return __generator(this, function(_a) {
          return [2, new Promise(promiseCallback)];
        });
      });
    };
    _this.cleanup = function() {
      cleaningUp = true;
      var script = document.getElementById(_this.props.id);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function filter(script2) {
        return typeof script2.src === "string" && script2.src.includes("maps.googleapis");
      }).forEach(function forEach2(script2) {
        if (script2.parentNode) {
          script2.parentNode.removeChild(script2);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function filter(link) {
        return link.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
      }).forEach(function forEach2(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function filter(style) {
        return style.innerText !== void 0 && style.innerText.length > 0 && style.innerText.includes(".gm-");
      }).forEach(function forEach2(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    };
    _this.injectScript = function() {
      if (_this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }
      invariant$1(!!_this.props.id, 'LoadScript requires "id" prop to be a string: %s', _this.props.id);
      var injectScriptOptions = {
        id: _this.props.id,
        nonce: _this.props.nonce,
        url: makeLoadScriptUrl(_this.props)
      };
      injectScript(injectScriptOptions).then(function() {
        if (_this.props.onLoad) {
          _this.props.onLoad();
        }
        _this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });
        return;
      }).catch(function(err) {
        if (_this.props.onError) {
          _this.props.onError(err);
        }
        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(_this.props.googleMapsApiKey || "-", ") or Client ID (").concat(_this.props.googleMapsClientId || "-", ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
      });
    };
    return _this;
  }
  LoadScript2.prototype.componentDidMount = function() {
    if (isBrowser) {
      if (window.google && window.google.maps && !cleaningUp) {
        console.error("google api is already presented");
        return;
      }
      this.isCleaningUp().then(this.injectScript).catch(function error(err) {
        console.error("Error at injecting script after cleaning up: ", err);
      });
    }
  };
  LoadScript2.prototype.componentDidUpdate = function(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup();
      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  };
  LoadScript2.prototype.componentWillUnmount = function() {
    var _this = this;
    if (isBrowser) {
      this.cleanup();
      var timeoutCallback = function() {
        if (!_this.check.current) {
          delete window.google;
          cleaningUp = false;
        }
      };
      window.setTimeout(timeoutCallback, 1);
      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  };
  LoadScript2.prototype.render = function() {
    return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", { ref: this.check }), this.state.loaded ? this.props.children : this.props.loadingElement || jsxRuntimeExports.jsx(DefaultLoadingElement, {})] });
  };
  LoadScript2.defaultProps = defaultLoadScriptProps;
  return LoadScript2;
})(reactExports.PureComponent);
var previouslyLoadedUrl;
function useLoadScript(_a) {
  var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, language = _a.language, region = _a.region, libraries = _a.libraries, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
  var isMounted = reactExports.useRef(false);
  var _d = reactExports.useState(false), isLoaded = _d[0], setLoaded = _d[1];
  var _e = reactExports.useState(void 0), loadError = _e[0], setLoadError = _e[1];
  reactExports.useEffect(function trackMountedState() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  reactExports.useEffect(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  reactExports.useEffect(function validateLoadedState() {
    if (isLoaded) {
      invariant$1(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
    }
  }, [isLoaded]);
  var url = makeLoadScriptUrl({
    version,
    googleMapsApiKey,
    googleMapsClientId,
    language,
    region,
    libraries,
    channel,
    mapIds,
    authReferrerPolicy
  });
  reactExports.useEffect(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }
    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }
    if (window.google && window.google.maps && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }
    injectScript({ id, url, nonce }).then(setLoadedIfMounted).catch(function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }
      console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(googleMapsApiKey || "-", ") or Client ID (").concat(googleMapsClientId || "-", ")\n        Otherwise it is a Network issue.\n      "));
      console.error(err);
    });
  }, [id, url, nonce]);
  var prevLibraries = reactExports.useRef();
  reactExports.useEffect(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return { isLoaded, loadError, url };
}
var defaultLoadingElement = jsxRuntimeExports.jsx(DefaultLoadingElement, {});
function LoadScriptNext(_a) {
  var loadingElement = _a.loadingElement, onLoad = _a.onLoad, onError = _a.onError, onUnmount = _a.onUnmount, children = _a.children, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
  var _b = useLoadScript(hookOptions), isLoaded = _b.isLoaded, loadError = _b.loadError;
  reactExports.useEffect(function handleOnLoad() {
    if (isLoaded && typeof onLoad === "function") {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  reactExports.useEffect(function handleOnError() {
    if (loadError && typeof onError === "function") {
      onError(loadError);
    }
  }, [loadError, onError]);
  reactExports.useEffect(function handleOnUnmount() {
    return function() {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}
reactExports.memo(LoadScriptNext);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var fastDeepEqual$1 = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const DEFAULT_ID = "__googleMapsScriptId";
var LoaderStatus;
(function(LoaderStatus2) {
  LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
  LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
class Loader {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey: apiKey2, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey2;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID;
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!fastDeepEqual$1(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let url = this.url;
    url += `?callback=__googleMapsCallback`;
    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }
    if (this.channel) {
      url += `&channel=${this.channel}`;
    }
    if (this.client) {
      url += `&client=${this.client}`;
    }
    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    if (this.language) {
      url += `&language=${this.language}`;
    }
    if (this.region) {
      url += `&region=${this.region}`;
    }
    if (this.version) {
      url += `&v=${this.version}`;
    }
    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }
    if (this.authReferrerPolicy) {
      url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
    }
    return url;
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err) => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  importLibrary(name) {
    this.execute();
    return google.maps.importLibrary(name);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var _a, _b;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const params = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(params).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (key) => !params[key] && delete params[key]
    );
    if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
      ((g) => {
        let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
        b = b[c] || (b[c] = {});
        const d = b.maps || (b.maps = {}), r = /* @__PURE__ */ new Set(), e = new URLSearchParams(), u = () => (
          // @ts-ignore
          h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
            var _a2;
            yield a = m.createElement("script");
            a.id = this.id;
            e.set("libraries", [...r] + "");
            for (k in g)
              e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = this.url + `?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = this.nonce || ((_a2 = m.querySelector("script[nonce]")) === null || _a2 === void 0 ? void 0 : _a2.nonce) || "";
            m.head.append(a);
          })))
        );
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
      })(params);
    }
    const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
    if (!libraryPromises.length) {
      libraryPromises.push(this.importLibrary("core"));
    }
    Promise.all(libraryPromises).then(() => this.callback(), (error) => {
      const event = new ErrorEvent("error", { error });
      this.loadErrorCallback(event);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e) {
    this.errors.push(e);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach((cb) => {
      cb(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.done) {
      this.callback();
    } else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      if (this.loading)
        ;
      else {
        this.loading = true;
        this.setScript();
      }
    }
  }
}
var defaultLibraries = ["maps"];
function useJsApiLoader(_a) {
  var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, language = _a.language, region = _a.region, _d = _a.libraries, libraries = _d === void 0 ? defaultLibraries : _d, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
  var isMounted = reactExports.useRef(false);
  var _e = reactExports.useState(false), isLoaded = _e[0], setLoaded = _e[1];
  var _f = reactExports.useState(void 0), loadError = _f[0], setLoadError = _f[1];
  reactExports.useEffect(function trackMountedState() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var loader = reactExports.useMemo(function() {
    return new Loader({
      id,
      apiKey: googleMapsApiKey,
      version,
      libraries,
      language: language || "en",
      region: region || "US",
      mapIds: mapIds || [],
      nonce: nonce || "",
      authReferrerPolicy: authReferrerPolicy || "origin"
    });
  }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
  reactExports.useEffect(function effect() {
    if (isLoaded) {
      return;
    } else {
      loader.load().then(function() {
        if (isMounted.current) {
          setLoaded(true);
        }
        return;
      }).catch(function(error) {
        setLoadError(error);
      });
    }
  }, []);
  reactExports.useEffect(function() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  var prevLibraries = reactExports.useRef();
  reactExports.useEffect(function() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return { isLoaded, loadError };
}
var eventMap$h = {};
var updaterMap$h = {
  options: function(instance, options) {
    instance.setOptions(options);
  }
};
function TrafficLayerFunctional(_a) {
  var options = _a.options, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, options || {}), { map }));
    setInstance(trafficLayer);
    if (onLoad) {
      onLoad(trafficLayer);
    }
    return function() {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(TrafficLayerFunctional);
/** @class */
(function(_super) {
  __extends(TrafficLayer2, _super);
  function TrafficLayer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      trafficLayer: null
    };
    _this.setTrafficLayerCallback = function() {
      if (_this.state.trafficLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.trafficLayer);
      }
    };
    _this.registeredEvents = [];
    return _this;
  }
  TrafficLayer2.prototype.componentDidMount = function() {
    var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$h,
      eventMap: eventMap$h,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });
    this.setState(function setTrafficLayer() {
      return {
        trafficLayer
      };
    }, this.setTrafficLayerCallback);
  };
  TrafficLayer2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  };
  TrafficLayer2.prototype.componentWillUnmount = function() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.trafficLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.trafficLayer.setMap(null);
    }
  };
  TrafficLayer2.prototype.render = function() {
    return null;
  };
  TrafficLayer2.contextType = MapContext;
  return TrafficLayer2;
})(reactExports.PureComponent);
function BicyclingLayerFunctional(_a) {
  var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    var bicyclingLayer = new google.maps.BicyclingLayer();
    setInstance(bicyclingLayer);
    bicyclingLayer.setMap(map);
    if (onLoad) {
      onLoad(bicyclingLayer);
    }
    return function() {
      if (bicyclingLayer !== null) {
        if (onUnmount) {
          onUnmount(bicyclingLayer);
        }
        bicyclingLayer.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(BicyclingLayerFunctional);
/** @class */
(function(_super) {
  __extends(BicyclingLayer2, _super);
  function BicyclingLayer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      bicyclingLayer: null
    };
    _this.setBicyclingLayerCallback = function() {
      if (_this.state.bicyclingLayer !== null) {
        _this.state.bicyclingLayer.setMap(_this.context);
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.bicyclingLayer);
        }
      }
    };
    return _this;
  }
  BicyclingLayer2.prototype.componentDidMount = function() {
    var bicyclingLayer = new google.maps.BicyclingLayer();
    this.setState(function() {
      return {
        bicyclingLayer
      };
    }, this.setBicyclingLayerCallback);
  };
  BicyclingLayer2.prototype.componentWillUnmount = function() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.bicyclingLayer);
      }
      this.state.bicyclingLayer.setMap(null);
    }
  };
  BicyclingLayer2.prototype.render = function() {
    return null;
  };
  BicyclingLayer2.contextType = MapContext;
  return BicyclingLayer2;
})(reactExports.PureComponent);
function TransitLayerFunctional(_a) {
  var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    var transitLayer = new google.maps.TransitLayer();
    setInstance(transitLayer);
    transitLayer.setMap(map);
    if (onLoad) {
      onLoad(transitLayer);
    }
    return function() {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(TransitLayerFunctional);
/** @class */
(function(_super) {
  __extends(TransitLayer2, _super);
  function TransitLayer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      transitLayer: null
    };
    _this.setTransitLayerCallback = function() {
      if (_this.state.transitLayer !== null) {
        _this.state.transitLayer.setMap(_this.context);
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.transitLayer);
        }
      }
    };
    return _this;
  }
  TransitLayer2.prototype.componentDidMount = function() {
    var transitLayer = new google.maps.TransitLayer();
    this.setState(function setTransitLayer() {
      return {
        transitLayer
      };
    }, this.setTransitLayerCallback);
  };
  TransitLayer2.prototype.componentWillUnmount = function() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.transitLayer);
      }
      this.state.transitLayer.setMap(null);
    }
  };
  TransitLayer2.prototype.render = function() {
    return null;
  };
  TransitLayer2.contextType = MapContext;
  return TransitLayer2;
})(reactExports.PureComponent);
var eventMap$g = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
};
var updaterMap$g = {
  drawingMode: function(instance, drawingMode) {
    instance.setDrawingMode(drawingMode);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  }
};
function DrawingManagerFunctional(_a) {
  var options = _a.options, drawingMode = _a.drawingMode, onCircleComplete = _a.onCircleComplete, onMarkerComplete = _a.onMarkerComplete, onOverlayComplete = _a.onOverlayComplete, onPolygonComplete = _a.onPolygonComplete, onPolylineComplete = _a.onPolylineComplete, onRectangleComplete = _a.onRectangleComplete, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), circlecompleteListener = _c[0], setCircleCompleteListener = _c[1];
  var _d = reactExports.useState(null), markercompleteListener = _d[0], setMarkerCompleteListener = _d[1];
  var _e = reactExports.useState(null), overlaycompleteListener = _e[0], setOverlayCompleteListener = _e[1];
  var _f = reactExports.useState(null), polygoncompleteListener = _f[0], setPolygonCompleteListener = _f[1];
  var _g = reactExports.useState(null), polylinecompleteListener = _g[0], setPolylineCompleteListener = _g[1];
  var _h = reactExports.useState(null), rectanglecompleteListener = _h[0], setRectangleCompleteListener = _h[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (drawingMode && instance !== null) {
      instance.setDrawingMode(drawingMode);
    }
  }, [instance, drawingMode]);
  reactExports.useEffect(function() {
    if (instance && onCircleComplete) {
      if (circlecompleteListener !== null) {
        google.maps.event.removeListener(circlecompleteListener);
      }
      setCircleCompleteListener(google.maps.event.addListener(instance, "circlecomplete", onCircleComplete));
    }
  }, [instance, onCircleComplete]);
  reactExports.useEffect(function() {
    if (instance && onMarkerComplete) {
      if (markercompleteListener !== null) {
        google.maps.event.removeListener(markercompleteListener);
      }
      setMarkerCompleteListener(google.maps.event.addListener(instance, "markercomplete", onMarkerComplete));
    }
  }, [instance, onMarkerComplete]);
  reactExports.useEffect(function() {
    if (instance && onOverlayComplete) {
      if (overlaycompleteListener !== null) {
        google.maps.event.removeListener(overlaycompleteListener);
      }
      setOverlayCompleteListener(google.maps.event.addListener(instance, "overlaycomplete", onOverlayComplete));
    }
  }, [instance, onOverlayComplete]);
  reactExports.useEffect(function() {
    if (instance && onPolygonComplete) {
      if (polygoncompleteListener !== null) {
        google.maps.event.removeListener(polygoncompleteListener);
      }
      setPolygonCompleteListener(google.maps.event.addListener(instance, "polygoncomplete", onPolygonComplete));
    }
  }, [instance, onPolygonComplete]);
  reactExports.useEffect(function() {
    if (instance && onPolylineComplete) {
      if (polylinecompleteListener !== null) {
        google.maps.event.removeListener(polylinecompleteListener);
      }
      setPolylineCompleteListener(google.maps.event.addListener(instance, "polylinecomplete", onPolylineComplete));
    }
  }, [instance, onPolylineComplete]);
  reactExports.useEffect(function() {
    if (instance && onRectangleComplete) {
      if (rectanglecompleteListener !== null) {
        google.maps.event.removeListener(rectanglecompleteListener);
      }
      setRectangleCompleteListener(google.maps.event.addListener(instance, "rectanglecomplete", onRectangleComplete));
    }
  }, [instance, onRectangleComplete]);
  reactExports.useEffect(function() {
    invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, options || {}), { map }));
    if (drawingMode) {
      drawingManager.setDrawingMode(drawingMode);
    }
    if (onCircleComplete) {
      setCircleCompleteListener(google.maps.event.addListener(drawingManager, "circlecomplete", onCircleComplete));
    }
    if (onMarkerComplete) {
      setMarkerCompleteListener(google.maps.event.addListener(drawingManager, "markercomplete", onMarkerComplete));
    }
    if (onOverlayComplete) {
      setOverlayCompleteListener(google.maps.event.addListener(drawingManager, "overlaycomplete", onOverlayComplete));
    }
    if (onPolygonComplete) {
      setPolygonCompleteListener(google.maps.event.addListener(drawingManager, "polygoncomplete", onPolygonComplete));
    }
    if (onPolylineComplete) {
      setPolylineCompleteListener(google.maps.event.addListener(drawingManager, "polylinecomplete", onPolylineComplete));
    }
    if (onRectangleComplete) {
      setRectangleCompleteListener(google.maps.event.addListener(drawingManager, "rectanglecomplete", onRectangleComplete));
    }
    setInstance(drawingManager);
    if (onLoad) {
      onLoad(drawingManager);
    }
    return function() {
      if (instance !== null) {
        if (circlecompleteListener) {
          google.maps.event.removeListener(circlecompleteListener);
        }
        if (markercompleteListener) {
          google.maps.event.removeListener(markercompleteListener);
        }
        if (overlaycompleteListener) {
          google.maps.event.removeListener(overlaycompleteListener);
        }
        if (polygoncompleteListener) {
          google.maps.event.removeListener(polygoncompleteListener);
        }
        if (polylinecompleteListener) {
          google.maps.event.removeListener(polylinecompleteListener);
        }
        if (rectanglecompleteListener) {
          google.maps.event.removeListener(rectanglecompleteListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(DrawingManagerFunctional);
/** @class */
(function(_super) {
  __extends(DrawingManager2, _super);
  function DrawingManager2(props) {
    var _this = _super.call(this, props) || this;
    _this.registeredEvents = [];
    _this.state = {
      drawingManager: null
    };
    _this.setDrawingManagerCallback = function() {
      if (_this.state.drawingManager !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.drawingManager);
      }
    };
    invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    return _this;
  }
  DrawingManager2.prototype.componentDidMount = function() {
    var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });
    this.setState(function setDrawingManager() {
      return {
        drawingManager
      };
    }, this.setDrawingManagerCallback);
  };
  DrawingManager2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  };
  DrawingManager2.prototype.componentWillUnmount = function() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }
      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  };
  DrawingManager2.prototype.render = function() {
    return null;
  };
  DrawingManager2.contextType = MapContext;
  return DrawingManager2;
})(reactExports.PureComponent);
var eventMap$f = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$f = {
  animation: function(instance, animation) {
    instance.setAnimation(animation);
  },
  clickable: function(instance, clickable) {
    instance.setClickable(clickable);
  },
  cursor: function(instance, cursor) {
    instance.setCursor(cursor);
  },
  draggable: function(instance, draggable) {
    instance.setDraggable(draggable);
  },
  icon: function(instance, icon) {
    instance.setIcon(icon);
  },
  label: function(instance, label) {
    instance.setLabel(label);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  opacity: function(instance, opacity) {
    instance.setOpacity(opacity);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  position: function(instance, position) {
    instance.setPosition(position);
  },
  shape: function(instance, shape) {
    instance.setShape(shape);
  },
  title: function(instance, title) {
    instance.setTitle(title);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex: function(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$5 = {};
function MarkerFunctional(_a) {
  var position = _a.position, options = _a.options, clusterer = _a.clusterer, noClustererRedraw = _a.noClustererRedraw, children = _a.children, draggable = _a.draggable, visible = _a.visible, animation = _a.animation, clickable = _a.clickable, cursor = _a.cursor, icon = _a.icon, label = _a.label, opacity = _a.opacity, shape = _a.shape, title = _a.title, zIndex = _a.zIndex, onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onRightClick = _a.onRightClick, onClickableChanged = _a.onClickableChanged, onCursorChanged = _a.onCursorChanged, onAnimationChanged = _a.onAnimationChanged, onDraggableChanged = _a.onDraggableChanged, onFlatChanged = _a.onFlatChanged, onIconChanged = _a.onIconChanged, onPositionChanged = _a.onPositionChanged, onShapeChanged = _a.onShapeChanged, onTitleChanged = _a.onTitleChanged, onVisibleChanged = _a.onVisibleChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
  var _e = reactExports.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
  var _f = reactExports.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
  var _g = reactExports.useState(null), mouseoutListener = _g[0], setMouseoutListener = _g[1];
  var _h = reactExports.useState(null), mouseoverListener = _h[0], setMouseoverListener = _h[1];
  var _j = reactExports.useState(null), mouseupListener = _j[0], setMouseupListener = _j[1];
  var _k = reactExports.useState(null), rightclickListener = _k[0], setRightclickListener = _k[1];
  var _l = reactExports.useState(null), clickListener = _l[0], setClickListener = _l[1];
  var _m = reactExports.useState(null), dragListener = _m[0], setDragListener = _m[1];
  var _o = reactExports.useState(null), clickableChangedListener = _o[0], setClickableChangedListener = _o[1];
  var _p = reactExports.useState(null), cursorChangedListener = _p[0], setCursorChangedListener = _p[1];
  var _q = reactExports.useState(null), animationChangedListener = _q[0], setAnimationChangedListener = _q[1];
  var _r = reactExports.useState(null), draggableChangedListener = _r[0], setDraggableChangedListener = _r[1];
  var _s = reactExports.useState(null), flatChangedListener = _s[0], setFlatChangedListener = _s[1];
  var _t = reactExports.useState(null), iconChangedListener = _t[0], setIconChangedListener = _t[1];
  var _u = reactExports.useState(null), positionChangedListener = _u[0], setPositionChangedListener = _u[1];
  var _v = reactExports.useState(null), shapeChangedListener = _v[0], setShapeChangedListener = _v[1];
  var _w = reactExports.useState(null), titleChangedListener = _w[0], setTitleChangedListener = _w[1];
  var _x = reactExports.useState(null), visibleChangedListener = _x[0], setVisibleChangedListener = _x[1];
  var _y = reactExports.useState(null), zIndexChangedListener = _y[0], setZindexChangedListener = _y[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  reactExports.useEffect(function() {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [instance, position]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  reactExports.useEffect(function() {
    instance === null || instance === void 0 ? void 0 : instance.setAnimation(animation);
  }, [instance, animation]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    if (instance && onClickableChanged) {
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      setClickableChangedListener(google.maps.event.addListener(instance, "clickable_changed", onClickableChanged));
    }
  }, [onClickableChanged]);
  reactExports.useEffect(function() {
    if (instance && onCursorChanged) {
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      setCursorChangedListener(google.maps.event.addListener(instance, "cursor_changed", onCursorChanged));
    }
  }, [onCursorChanged]);
  reactExports.useEffect(function() {
    if (instance && onAnimationChanged) {
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      setAnimationChangedListener(google.maps.event.addListener(instance, "animation_changed", onAnimationChanged));
    }
  }, [onAnimationChanged]);
  reactExports.useEffect(function() {
    if (instance && onDraggableChanged) {
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      setDraggableChangedListener(google.maps.event.addListener(instance, "draggable_changed", onDraggableChanged));
    }
  }, [onDraggableChanged]);
  reactExports.useEffect(function() {
    if (instance && onFlatChanged) {
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      setFlatChangedListener(google.maps.event.addListener(instance, "flat_changed", onFlatChanged));
    }
  }, [onFlatChanged]);
  reactExports.useEffect(function() {
    if (instance && onIconChanged) {
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      setIconChangedListener(google.maps.event.addListener(instance, "icon_changed", onIconChanged));
    }
  }, [onIconChanged]);
  reactExports.useEffect(function() {
    if (instance && onPositionChanged) {
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      setPositionChangedListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  reactExports.useEffect(function() {
    if (instance && onShapeChanged) {
      if (shapeChangedListener !== null) {
        google.maps.event.removeListener(shapeChangedListener);
      }
      setShapeChangedListener(google.maps.event.addListener(instance, "shape_changed", onShapeChanged));
    }
  }, [onShapeChanged]);
  reactExports.useEffect(function() {
    if (instance && onTitleChanged) {
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      setTitleChangedListener(google.maps.event.addListener(instance, "title_changed", onTitleChanged));
    }
  }, [onTitleChanged]);
  reactExports.useEffect(function() {
    if (instance && onVisibleChanged) {
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      setVisibleChangedListener(google.maps.event.addListener(instance, "visible_changed", onVisibleChanged));
    }
  }, [onVisibleChanged]);
  reactExports.useEffect(function() {
    if (instance && onZindexChanged) {
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      setZindexChangedListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  reactExports.useEffect(function() {
    var markerOptions = __assign(__assign(__assign({}, options || defaultOptions$5), clusterer ? defaultOptions$5 : { map }), { position });
    var marker = new google.maps.Marker(markerOptions);
    if (clusterer) {
      clusterer.addMarker(marker, !!noClustererRedraw);
    } else {
      marker.setMap(map);
    }
    if (position) {
      marker.setPosition(position);
    }
    if (typeof visible !== "undefined") {
      marker.setVisible(visible);
    }
    if (typeof draggable !== "undefined") {
      marker.setDraggable(draggable);
    }
    if (typeof clickable !== "undefined") {
      marker.setClickable(clickable);
    }
    if (typeof cursor === "string") {
      marker.setCursor(cursor);
    }
    if (icon) {
      marker.setIcon(icon);
    }
    if (typeof label !== "undefined") {
      marker.setLabel(label);
    }
    if (typeof opacity !== "undefined") {
      marker.setOpacity(opacity);
    }
    if (shape) {
      marker.setShape(shape);
    }
    if (typeof title === "string") {
      marker.setTitle(title);
    }
    if (typeof zIndex === "number") {
      marker.setZIndex(zIndex);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(marker, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(marker, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(marker, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(marker, "mousedown", onMouseDown));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(marker, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(marker, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(marker, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(marker, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(marker, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(marker, "drag", onDrag));
    }
    if (onClickableChanged) {
      setClickableChangedListener(google.maps.event.addListener(marker, "clickable_changed", onClickableChanged));
    }
    if (onCursorChanged) {
      setCursorChangedListener(google.maps.event.addListener(marker, "cursor_changed", onCursorChanged));
    }
    if (onAnimationChanged) {
      setAnimationChangedListener(google.maps.event.addListener(marker, "animation_changed", onAnimationChanged));
    }
    if (onDraggableChanged) {
      setDraggableChangedListener(google.maps.event.addListener(marker, "draggable_changed", onDraggableChanged));
    }
    if (onFlatChanged) {
      setFlatChangedListener(google.maps.event.addListener(marker, "flat_changed", onFlatChanged));
    }
    if (onIconChanged) {
      setIconChangedListener(google.maps.event.addListener(marker, "icon_changed", onIconChanged));
    }
    if (onPositionChanged) {
      setPositionChangedListener(google.maps.event.addListener(marker, "position_changed", onPositionChanged));
    }
    if (onShapeChanged) {
      setShapeChangedListener(google.maps.event.addListener(marker, "shape_changed", onShapeChanged));
    }
    if (onTitleChanged) {
      setTitleChangedListener(google.maps.event.addListener(marker, "title_changed", onTitleChanged));
    }
    if (onVisibleChanged) {
      setVisibleChangedListener(google.maps.event.addListener(marker, "visible_changed", onVisibleChanged));
    }
    if (onZindexChanged) {
      setZindexChangedListener(google.maps.event.addListener(marker, "zindex_changed", onZindexChanged));
    }
    setInstance(marker);
    if (onLoad) {
      onLoad(marker);
    }
    return function() {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      if (onUnmount) {
        onUnmount(marker);
      }
      if (clusterer) {
        clusterer.removeMarker(marker, !!noClustererRedraw);
      } else if (marker) {
        marker.setMap(null);
      }
    };
  }, []);
  var chx = reactExports.useMemo(function() {
    return children ? reactExports.Children.map(children, function(child) {
      if (!reactExports.isValidElement(child)) {
        return child;
      }
      var elementChild = child;
      return reactExports.cloneElement(elementChild, { anchor: instance });
    }) : null;
  }, [children, instance]);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: chx }) || null;
}
reactExports.memo(MarkerFunctional);
var Marker = (
  /** @class */
  function(_super) {
    __extends(Marker2, _super);
    function Marker2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.registeredEvents = [];
      return _this;
    }
    Marker2.prototype.componentDidMount = function() {
      var markerOptions = __assign(__assign(__assign({}, this.props.options || defaultOptions$5), this.props.clusterer ? defaultOptions$5 : { map: this.context }), { position: this.props.position });
      this.marker = new google.maps.Marker(markerOptions);
      if (this.props.clusterer) {
        this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
      } else {
        this.marker.setMap(this.context);
      }
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps: {},
        nextProps: this.props,
        instance: this.marker
      });
      if (this.props.onLoad) {
        this.props.onLoad(this.marker);
      }
    };
    Marker2.prototype.componentDidUpdate = function(prevProps) {
      if (this.marker) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$f,
          eventMap: eventMap$f,
          prevProps,
          nextProps: this.props,
          instance: this.marker
        });
      }
    };
    Marker2.prototype.componentWillUnmount = function() {
      if (this.marker) {
        if (this.props.onUnmount) {
          this.props.onUnmount(this.marker);
        }
        unregisterEvents(this.registeredEvents);
        if (this.props.clusterer) {
          this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
        } else {
          this.marker && this.marker.setMap(null);
        }
      }
    };
    Marker2.prototype.render = function() {
      var _this = this;
      var children = null;
      if (this.props.children) {
        children = reactExports.Children.map(this.props.children, function(child) {
          if (!reactExports.isValidElement(child)) {
            return child;
          }
          var elementChild = child;
          return reactExports.cloneElement(elementChild, { anchor: _this.marker });
        });
      }
      return children || null;
    };
    Marker2.contextType = MapContext;
    return Marker2;
  }(reactExports.PureComponent)
);
var ClusterIcon = (
  /** @class */
  function() {
    function ClusterIcon2(cluster, styles) {
      cluster.getClusterer().extend(ClusterIcon2, google.maps.OverlayView);
      this.cluster = cluster;
      this.clusterClassName = this.cluster.getClusterer().getClusterClass();
      this.className = this.clusterClassName;
      this.styles = styles;
      this.center = void 0;
      this.div = null;
      this.sums = null;
      this.visible = false;
      this.boundsChangedListener = null;
      this.url = "";
      this.height = 0;
      this.width = 0;
      this.anchorText = [0, 0];
      this.anchorIcon = [0, 0];
      this.textColor = "black";
      this.textSize = 11;
      this.textDecoration = "none";
      this.fontWeight = "bold";
      this.fontStyle = "normal";
      this.fontFamily = "Arial,sans-serif";
      this.backgroundPosition = "0 0";
      this.cMouseDownInCluster = null;
      this.cDraggingMapByCluster = null;
      this.timeOut = null;
      this.setMap(cluster.getMap());
      this.onBoundsChanged = this.onBoundsChanged.bind(this);
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.draw = this.draw.bind(this);
      this.hide = this.hide.bind(this);
      this.show = this.show.bind(this);
      this.useStyle = this.useStyle.bind(this);
      this.setCenter = this.setCenter.bind(this);
      this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    ClusterIcon2.prototype.onBoundsChanged = function() {
      this.cDraggingMapByCluster = this.cMouseDownInCluster;
    };
    ClusterIcon2.prototype.onMouseDown = function() {
      this.cMouseDownInCluster = true;
      this.cDraggingMapByCluster = false;
    };
    ClusterIcon2.prototype.onClick = function(event) {
      this.cMouseDownInCluster = false;
      if (!this.cDraggingMapByCluster) {
        var markerClusterer_1 = this.cluster.getClusterer();
        google.maps.event.trigger(markerClusterer_1, "click", this.cluster);
        google.maps.event.trigger(markerClusterer_1, "clusterclick", this.cluster);
        if (markerClusterer_1.getZoomOnClick()) {
          var maxZoom_1 = markerClusterer_1.getMaxZoom();
          var bounds_1 = this.cluster.getBounds();
          var map = markerClusterer_1.getMap();
          if (map !== null && "fitBounds" in map) {
            map.fitBounds(bounds_1);
          }
          this.timeOut = window.setTimeout(function() {
            var map2 = markerClusterer_1.getMap();
            if (map2 !== null) {
              if ("fitBounds" in map2) {
                map2.fitBounds(bounds_1);
              }
              var zoom = map2.getZoom() || 0;
              if (maxZoom_1 !== null && zoom > maxZoom_1) {
                map2.setZoom(maxZoom_1 + 1);
              }
            }
          }, 100);
        }
        event.cancelBubble = true;
        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    };
    ClusterIcon2.prototype.onMouseOver = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster);
    };
    ClusterIcon2.prototype.onMouseOut = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster);
    };
    ClusterIcon2.prototype.onAdd = function() {
      var _a;
      this.div = document.createElement("div");
      this.div.className = this.className;
      if (this.visible) {
        this.show();
      }
      (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
      var map = this.getMap();
      if (map !== null) {
        this.boundsChangedListener = google.maps.event.addListener(map, "bounds_changed", this.onBoundsChanged);
        this.div.addEventListener("mousedown", this.onMouseDown);
        this.div.addEventListener("click", this.onClick);
        this.div.addEventListener("mouseover", this.onMouseOver);
        this.div.addEventListener("mouseout", this.onMouseOut);
      }
    };
    ClusterIcon2.prototype.onRemove = function() {
      if (this.div && this.div.parentNode) {
        this.hide();
        if (this.boundsChangedListener !== null) {
          google.maps.event.removeListener(this.boundsChangedListener);
        }
        this.div.removeEventListener("mousedown", this.onMouseDown);
        this.div.removeEventListener("click", this.onClick);
        this.div.removeEventListener("mouseover", this.onMouseOver);
        this.div.removeEventListener("mouseout", this.onMouseOut);
        this.div.parentNode.removeChild(this.div);
        if (this.timeOut !== null) {
          window.clearTimeout(this.timeOut);
          this.timeOut = null;
        }
        this.div = null;
      }
    };
    ClusterIcon2.prototype.draw = function() {
      if (this.visible && this.div !== null && this.center) {
        var pos = this.getPosFromLatLng(this.center);
        this.div.style.top = pos !== null ? "".concat(pos.y, "px") : "0";
        this.div.style.left = pos !== null ? "".concat(pos.x, "px") : "0";
      }
    };
    ClusterIcon2.prototype.hide = function() {
      if (this.div) {
        this.div.style.display = "none";
      }
      this.visible = false;
    };
    ClusterIcon2.prototype.show = function() {
      var _a, _b, _c, _d, _e, _f;
      if (this.div && this.center) {
        var divTitle = this.sums === null || typeof this.sums.title === "undefined" || this.sums.title === "" ? this.cluster.getClusterer().getTitle() : this.sums.title;
        var bp = this.backgroundPosition.split(" ");
        var spriteH = parseInt(((_a = bp[0]) === null || _a === void 0 ? void 0 : _a.replace(/^\s+|\s+$/g, "")) || "0", 10);
        var spriteV = parseInt(((_b = bp[1]) === null || _b === void 0 ? void 0 : _b.replace(/^\s+|\s+$/g, "")) || "0", 10);
        var pos = this.getPosFromLatLng(this.center);
        this.div.className = this.className;
        this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : "0", "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
        var img = document.createElement("img");
        img.alt = divTitle;
        img.src = this.url;
        img.width = this.width;
        img.height = this.height;
        img.setAttribute("style", "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
        if (!this.cluster.getClusterer().enableRetinaIcons) {
          img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
        }
        var textElm = document.createElement("div");
        textElm.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
        if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.text)
          textElm.innerText = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.text);
        if ((_e = this.sums) === null || _e === void 0 ? void 0 : _e.html)
          textElm.innerHTML = "".concat((_f = this.sums) === null || _f === void 0 ? void 0 : _f.html);
        this.div.innerHTML = "";
        this.div.appendChild(img);
        this.div.appendChild(textElm);
        this.div.title = divTitle;
        this.div.style.display = "";
      }
      this.visible = true;
    };
    ClusterIcon2.prototype.useStyle = function(sums) {
      this.sums = sums;
      var styles = this.cluster.getClusterer().getStyles();
      var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
      if (style) {
        this.url = style.url;
        this.height = style.height;
        this.width = style.width;
        if (style.className) {
          this.className = "".concat(this.clusterClassName, " ").concat(style.className);
        }
        this.anchorText = style.anchorText || [0, 0];
        this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
        this.textColor = style.textColor || "black";
        this.textSize = style.textSize || 11;
        this.textDecoration = style.textDecoration || "none";
        this.fontWeight = style.fontWeight || "bold";
        this.fontStyle = style.fontStyle || "normal";
        this.fontFamily = style.fontFamily || "Arial,sans-serif";
        this.backgroundPosition = style.backgroundPosition || "0 0";
      }
    };
    ClusterIcon2.prototype.setCenter = function(center) {
      this.center = center;
    };
    ClusterIcon2.prototype.getPosFromLatLng = function(latlng) {
      var pos = this.getProjection().fromLatLngToDivPixel(latlng);
      if (pos !== null) {
        pos.x -= this.anchorIcon[1];
        pos.y -= this.anchorIcon[0];
      }
      return pos;
    };
    return ClusterIcon2;
  }()
);
var Cluster$1 = (
  /** @class */
  function() {
    function Cluster2(markerClusterer) {
      this.markerClusterer = markerClusterer;
      this.map = this.markerClusterer.getMap();
      this.gridSize = this.markerClusterer.getGridSize();
      this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
      this.averageCenter = this.markerClusterer.getAverageCenter();
      this.markers = [];
      this.center = void 0;
      this.bounds = null;
      this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
      this.getSize = this.getSize.bind(this);
      this.getMarkers = this.getMarkers.bind(this);
      this.getCenter = this.getCenter.bind(this);
      this.getMap = this.getMap.bind(this);
      this.getClusterer = this.getClusterer.bind(this);
      this.getBounds = this.getBounds.bind(this);
      this.remove = this.remove.bind(this);
      this.addMarker = this.addMarker.bind(this);
      this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
      this.calculateBounds = this.calculateBounds.bind(this);
      this.updateIcon = this.updateIcon.bind(this);
      this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    Cluster2.prototype.getSize = function() {
      return this.markers.length;
    };
    Cluster2.prototype.getMarkers = function() {
      return this.markers;
    };
    Cluster2.prototype.getCenter = function() {
      return this.center;
    };
    Cluster2.prototype.getMap = function() {
      return this.map;
    };
    Cluster2.prototype.getClusterer = function() {
      return this.markerClusterer;
    };
    Cluster2.prototype.getBounds = function() {
      var bounds = new google.maps.LatLngBounds(this.center, this.center);
      var markers = this.getMarkers();
      for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
        var marker = markers_1[_i];
        var position = marker.getPosition();
        if (position) {
          bounds.extend(position);
        }
      }
      return bounds;
    };
    Cluster2.prototype.remove = function() {
      this.clusterIcon.setMap(null);
      this.markers = [];
      delete this.markers;
    };
    Cluster2.prototype.addMarker = function(marker) {
      var _a;
      if (this.isMarkerAlreadyAdded(marker)) {
        return false;
      }
      if (!this.center) {
        var position = marker.getPosition();
        if (position) {
          this.center = position;
          this.calculateBounds();
        }
      } else {
        if (this.averageCenter) {
          var position = marker.getPosition();
          if (position) {
            var length_1 = this.markers.length + 1;
            this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
            this.calculateBounds();
          }
        }
      }
      marker.isAdded = true;
      this.markers.push(marker);
      var mCount = this.markers.length;
      var maxZoom = this.markerClusterer.getMaxZoom();
      var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
      if (maxZoom !== null && typeof zoom !== "undefined" && zoom > maxZoom) {
        if (marker.getMap() !== this.map) {
          marker.setMap(this.map);
        }
      } else if (mCount < this.minClusterSize) {
        if (marker.getMap() !== this.map) {
          marker.setMap(this.map);
        }
      } else if (mCount === this.minClusterSize) {
        for (var _i = 0, _b = this.markers; _i < _b.length; _i++) {
          var markerElement = _b[_i];
          markerElement.setMap(null);
        }
      } else {
        marker.setMap(null);
      }
      return true;
    };
    Cluster2.prototype.isMarkerInClusterBounds = function(marker) {
      if (this.bounds !== null) {
        var position = marker.getPosition();
        if (position) {
          return this.bounds.contains(position);
        }
      }
      return false;
    };
    Cluster2.prototype.calculateBounds = function() {
      this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    };
    Cluster2.prototype.updateIcon = function() {
      var _a;
      var mCount = this.markers.length;
      var maxZoom = this.markerClusterer.getMaxZoom();
      var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
      if (maxZoom !== null && typeof zoom !== "undefined" && zoom > maxZoom) {
        this.clusterIcon.hide();
        return;
      }
      if (mCount < this.minClusterSize) {
        this.clusterIcon.hide();
        return;
      }
      if (this.center) {
        this.clusterIcon.setCenter(this.center);
      }
      this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
      this.clusterIcon.show();
    };
    Cluster2.prototype.isMarkerAlreadyAdded = function(marker) {
      if (this.markers.includes) {
        return this.markers.includes(marker);
      }
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          return true;
        }
      }
      return false;
    };
    return Cluster2;
  }()
);
function CALCULATOR(markers, numStyles) {
  var count = markers.length;
  var numberOfDigits = count.toString().length;
  var index = Math.min(numberOfDigits, numStyles);
  return {
    text: count.toString(),
    index,
    title: ""
  };
}
var BATCH_SIZE = 2e3;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
var IMAGE_EXTENSION = "png";
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = "cluster";
var Clusterer = (
  /** @class */
  function() {
    function Clusterer2(map, optMarkers, optOptions) {
      if (optMarkers === void 0) {
        optMarkers = [];
      }
      if (optOptions === void 0) {
        optOptions = {};
      }
      this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
      this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
      this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
      this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
      this.addToClosestCluster = this.addToClosestCluster.bind(this);
      this.getImageExtension = this.getImageExtension.bind(this);
      this.setImageExtension = this.setImageExtension.bind(this);
      this.getExtendedBounds = this.getExtendedBounds.bind(this);
      this.getAverageCenter = this.getAverageCenter.bind(this);
      this.setAverageCenter = this.setAverageCenter.bind(this);
      this.getTotalClusters = this.getTotalClusters.bind(this);
      this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
      this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
      this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
      this.getClusterClass = this.getClusterClass.bind(this);
      this.setClusterClass = this.setClusterClass.bind(this);
      this.getTotalMarkers = this.getTotalMarkers.bind(this);
      this.getZoomOnClick = this.getZoomOnClick.bind(this);
      this.setZoomOnClick = this.setZoomOnClick.bind(this);
      this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
      this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
      this.createClusters = this.createClusters.bind(this);
      this.onZoomChanged = this.onZoomChanged.bind(this);
      this.getImageSizes = this.getImageSizes.bind(this);
      this.setImageSizes = this.setImageSizes.bind(this);
      this.getCalculator = this.getCalculator.bind(this);
      this.setCalculator = this.setCalculator.bind(this);
      this.removeMarkers = this.removeMarkers.bind(this);
      this.resetViewport = this.resetViewport.bind(this);
      this.getImagePath = this.getImagePath.bind(this);
      this.setImagePath = this.setImagePath.bind(this);
      this.pushMarkerTo = this.pushMarkerTo.bind(this);
      this.removeMarker = this.removeMarker.bind(this);
      this.clearMarkers = this.clearMarkers.bind(this);
      this.setupStyles = this.setupStyles.bind(this);
      this.getGridSize = this.getGridSize.bind(this);
      this.setGridSize = this.setGridSize.bind(this);
      this.getClusters = this.getClusters.bind(this);
      this.getMaxZoom = this.getMaxZoom.bind(this);
      this.setMaxZoom = this.setMaxZoom.bind(this);
      this.getMarkers = this.getMarkers.bind(this);
      this.addMarkers = this.addMarkers.bind(this);
      this.getStyles = this.getStyles.bind(this);
      this.setStyles = this.setStyles.bind(this);
      this.addMarker = this.addMarker.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.getTitle = this.getTitle.bind(this);
      this.setTitle = this.setTitle.bind(this);
      this.repaint = this.repaint.bind(this);
      this.onIdle = this.onIdle.bind(this);
      this.redraw = this.redraw.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.draw = this.draw.bind(this);
      this.extend = this.extend.bind(this);
      this.extend(Clusterer2, google.maps.OverlayView);
      this.markers = [];
      this.clusters = [];
      this.listeners = [];
      this.activeMap = null;
      this.ready = false;
      this.gridSize = optOptions.gridSize || 60;
      this.minClusterSize = optOptions.minimumClusterSize || 2;
      this.maxZoom = optOptions.maxZoom || null;
      this.styles = optOptions.styles || [];
      this.title = optOptions.title || "";
      this.zoomOnClick = true;
      if (optOptions.zoomOnClick !== void 0) {
        this.zoomOnClick = optOptions.zoomOnClick;
      }
      this.averageCenter = false;
      if (optOptions.averageCenter !== void 0) {
        this.averageCenter = optOptions.averageCenter;
      }
      this.ignoreHidden = false;
      if (optOptions.ignoreHidden !== void 0) {
        this.ignoreHidden = optOptions.ignoreHidden;
      }
      this.enableRetinaIcons = false;
      if (optOptions.enableRetinaIcons !== void 0) {
        this.enableRetinaIcons = optOptions.enableRetinaIcons;
      }
      this.imagePath = optOptions.imagePath || IMAGE_PATH;
      this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
      this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
      this.calculator = optOptions.calculator || CALCULATOR;
      this.batchSize = optOptions.batchSize || BATCH_SIZE;
      this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
      this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
      if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
        this.batchSize = this.batchSizeIE;
      }
      this.timerRefStatic = null;
      this.setupStyles();
      this.addMarkers(optMarkers, true);
      this.setMap(map);
    }
    Clusterer2.prototype.onZoomChanged = function() {
      var _a, _b;
      this.resetViewport(false);
      if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get("minZoom") || 0) || ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get("maxZoom")) {
        google.maps.event.trigger(this, "idle");
      }
    };
    Clusterer2.prototype.onIdle = function() {
      this.redraw();
    };
    Clusterer2.prototype.onAdd = function() {
      var map = this.getMap();
      this.activeMap = map;
      this.ready = true;
      this.repaint();
      if (map !== null) {
        this.listeners = [
          google.maps.event.addListener(map, "zoom_changed", this.onZoomChanged),
          google.maps.event.addListener(map, "idle", this.onIdle)
        ];
      }
    };
    Clusterer2.prototype.onRemove = function() {
      for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
        var marker = _a[_i];
        if (marker.getMap() !== this.activeMap) {
          marker.setMap(this.activeMap);
        }
      }
      for (var _b = 0, _c = this.clusters; _b < _c.length; _b++) {
        var cluster = _c[_b];
        cluster.remove();
      }
      this.clusters = [];
      for (var _d = 0, _e = this.listeners; _d < _e.length; _d++) {
        var listener = _e[_d];
        google.maps.event.removeListener(listener);
      }
      this.listeners = [];
      this.activeMap = null;
      this.ready = false;
    };
    Clusterer2.prototype.draw = function() {
      return;
    };
    Clusterer2.prototype.getMap = function() {
      return null;
    };
    Clusterer2.prototype.getPanes = function() {
      return null;
    };
    Clusterer2.prototype.getProjection = function() {
      return {
        fromContainerPixelToLatLng: function() {
          return null;
        },
        fromDivPixelToLatLng: function() {
          return null;
        },
        fromLatLngToContainerPixel: function() {
          return null;
        },
        fromLatLngToDivPixel: function() {
          return null;
        },
        getVisibleRegion: function() {
          return null;
        },
        getWorldWidth: function() {
          return 0;
        }
      };
    };
    Clusterer2.prototype.setMap = function() {
      return;
    };
    Clusterer2.prototype.addListener = function() {
      return {
        remove: function() {
          return;
        }
      };
    };
    Clusterer2.prototype.bindTo = function() {
      return;
    };
    Clusterer2.prototype.get = function() {
      return;
    };
    Clusterer2.prototype.notify = function() {
      return;
    };
    Clusterer2.prototype.set = function() {
      return;
    };
    Clusterer2.prototype.setValues = function() {
      return;
    };
    Clusterer2.prototype.unbind = function() {
      return;
    };
    Clusterer2.prototype.unbindAll = function() {
      return;
    };
    Clusterer2.prototype.setupStyles = function() {
      if (this.styles.length > 0) {
        return;
      }
      for (var i = 0; i < this.imageSizes.length; i++) {
        this.styles.push({
          url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
          height: this.imageSizes[i] || 0,
          width: this.imageSizes[i] || 0
        });
      }
    };
    Clusterer2.prototype.fitMapToMarkers = function() {
      var markers = this.getMarkers();
      var bounds = new google.maps.LatLngBounds();
      for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
        var marker = markers_1[_i];
        var position = marker.getPosition();
        if (position) {
          bounds.extend(position);
        }
      }
      var map = this.getMap();
      if (map !== null && "fitBounds" in map) {
        map.fitBounds(bounds);
      }
    };
    Clusterer2.prototype.getGridSize = function() {
      return this.gridSize;
    };
    Clusterer2.prototype.setGridSize = function(gridSize) {
      this.gridSize = gridSize;
    };
    Clusterer2.prototype.getMinimumClusterSize = function() {
      return this.minClusterSize;
    };
    Clusterer2.prototype.setMinimumClusterSize = function(minimumClusterSize) {
      this.minClusterSize = minimumClusterSize;
    };
    Clusterer2.prototype.getMaxZoom = function() {
      return this.maxZoom;
    };
    Clusterer2.prototype.setMaxZoom = function(maxZoom) {
      this.maxZoom = maxZoom;
    };
    Clusterer2.prototype.getStyles = function() {
      return this.styles;
    };
    Clusterer2.prototype.setStyles = function(styles) {
      this.styles = styles;
    };
    Clusterer2.prototype.getTitle = function() {
      return this.title;
    };
    Clusterer2.prototype.setTitle = function(title) {
      this.title = title;
    };
    Clusterer2.prototype.getZoomOnClick = function() {
      return this.zoomOnClick;
    };
    Clusterer2.prototype.setZoomOnClick = function(zoomOnClick) {
      this.zoomOnClick = zoomOnClick;
    };
    Clusterer2.prototype.getAverageCenter = function() {
      return this.averageCenter;
    };
    Clusterer2.prototype.setAverageCenter = function(averageCenter) {
      this.averageCenter = averageCenter;
    };
    Clusterer2.prototype.getIgnoreHidden = function() {
      return this.ignoreHidden;
    };
    Clusterer2.prototype.setIgnoreHidden = function(ignoreHidden) {
      this.ignoreHidden = ignoreHidden;
    };
    Clusterer2.prototype.getEnableRetinaIcons = function() {
      return this.enableRetinaIcons;
    };
    Clusterer2.prototype.setEnableRetinaIcons = function(enableRetinaIcons) {
      this.enableRetinaIcons = enableRetinaIcons;
    };
    Clusterer2.prototype.getImageExtension = function() {
      return this.imageExtension;
    };
    Clusterer2.prototype.setImageExtension = function(imageExtension) {
      this.imageExtension = imageExtension;
    };
    Clusterer2.prototype.getImagePath = function() {
      return this.imagePath;
    };
    Clusterer2.prototype.setImagePath = function(imagePath) {
      this.imagePath = imagePath;
    };
    Clusterer2.prototype.getImageSizes = function() {
      return this.imageSizes;
    };
    Clusterer2.prototype.setImageSizes = function(imageSizes) {
      this.imageSizes = imageSizes;
    };
    Clusterer2.prototype.getCalculator = function() {
      return this.calculator;
    };
    Clusterer2.prototype.setCalculator = function(calculator) {
      this.calculator = calculator;
    };
    Clusterer2.prototype.getBatchSizeIE = function() {
      return this.batchSizeIE;
    };
    Clusterer2.prototype.setBatchSizeIE = function(batchSizeIE) {
      this.batchSizeIE = batchSizeIE;
    };
    Clusterer2.prototype.getClusterClass = function() {
      return this.clusterClass;
    };
    Clusterer2.prototype.setClusterClass = function(clusterClass) {
      this.clusterClass = clusterClass;
    };
    Clusterer2.prototype.getMarkers = function() {
      return this.markers;
    };
    Clusterer2.prototype.getTotalMarkers = function() {
      return this.markers.length;
    };
    Clusterer2.prototype.getClusters = function() {
      return this.clusters;
    };
    Clusterer2.prototype.getTotalClusters = function() {
      return this.clusters.length;
    };
    Clusterer2.prototype.addMarker = function(marker, optNoDraw) {
      this.pushMarkerTo(marker);
      if (!optNoDraw) {
        this.redraw();
      }
    };
    Clusterer2.prototype.addMarkers = function(markers, optNoDraw) {
      for (var key in markers) {
        if (Object.prototype.hasOwnProperty.call(markers, key)) {
          var marker = markers[key];
          if (marker) {
            this.pushMarkerTo(marker);
          }
        }
      }
      if (!optNoDraw) {
        this.redraw();
      }
    };
    Clusterer2.prototype.pushMarkerTo = function(marker) {
      var _this = this;
      if (marker.getDraggable()) {
        google.maps.event.addListener(marker, "dragend", function() {
          if (_this.ready) {
            marker.isAdded = false;
            _this.repaint();
          }
        });
      }
      marker.isAdded = false;
      this.markers.push(marker);
    };
    Clusterer2.prototype.removeMarker_ = function(marker) {
      var index = -1;
      if (this.markers.indexOf) {
        index = this.markers.indexOf(marker);
      } else {
        for (var i = 0; i < this.markers.length; i++) {
          if (marker === this.markers[i]) {
            index = i;
            break;
          }
        }
      }
      if (index === -1) {
        return false;
      }
      marker.setMap(null);
      this.markers.splice(index, 1);
      return true;
    };
    Clusterer2.prototype.removeMarker = function(marker, optNoDraw) {
      var removed = this.removeMarker_(marker);
      if (!optNoDraw && removed) {
        this.repaint();
      }
      return removed;
    };
    Clusterer2.prototype.removeMarkers = function(markers, optNoDraw) {
      var removed = false;
      for (var _i = 0, markers_2 = markers; _i < markers_2.length; _i++) {
        var marker = markers_2[_i];
        removed = removed || this.removeMarker_(marker);
      }
      if (!optNoDraw && removed) {
        this.repaint();
      }
      return removed;
    };
    Clusterer2.prototype.clearMarkers = function() {
      this.resetViewport(true);
      this.markers = [];
    };
    Clusterer2.prototype.repaint = function() {
      var oldClusters = this.clusters.slice();
      this.clusters = [];
      this.resetViewport(false);
      this.redraw();
      setTimeout(function timeout() {
        for (var _i = 0, oldClusters_1 = oldClusters; _i < oldClusters_1.length; _i++) {
          var oldCluster = oldClusters_1[_i];
          oldCluster.remove();
        }
      }, 0);
    };
    Clusterer2.prototype.getExtendedBounds = function(bounds) {
      var projection = this.getProjection();
      var trPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng())
      );
      if (trPix !== null) {
        trPix.x += this.gridSize;
        trPix.y -= this.gridSize;
      }
      var blPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng())
      );
      if (blPix !== null) {
        blPix.x -= this.gridSize;
        blPix.y += this.gridSize;
      }
      if (trPix !== null) {
        var point1 = projection.fromDivPixelToLatLng(trPix);
        if (point1 !== null) {
          bounds.extend(point1);
        }
      }
      if (blPix !== null) {
        var point2 = projection.fromDivPixelToLatLng(blPix);
        if (point2 !== null) {
          bounds.extend(point2);
        }
      }
      return bounds;
    };
    Clusterer2.prototype.redraw = function() {
      this.createClusters(0);
    };
    Clusterer2.prototype.resetViewport = function(optHide) {
      for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
        var cluster = _a[_i];
        cluster.remove();
      }
      this.clusters = [];
      for (var _b = 0, _c = this.markers; _b < _c.length; _b++) {
        var marker = _c[_b];
        marker.isAdded = false;
        if (optHide) {
          marker.setMap(null);
        }
      }
    };
    Clusterer2.prototype.distanceBetweenPoints = function(p1, p2) {
      var R = 6371;
      var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
      var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };
    Clusterer2.prototype.isMarkerInBounds = function(marker, bounds) {
      var position = marker.getPosition();
      if (position) {
        return bounds.contains(position);
      }
      return false;
    };
    Clusterer2.prototype.addToClosestCluster = function(marker) {
      var cluster;
      var distance = 4e4;
      var clusterToAddTo = null;
      for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
        var clusterElement = _a[_i];
        cluster = clusterElement;
        var center = cluster.getCenter();
        var position = marker.getPosition();
        if (center && position) {
          var d = this.distanceBetweenPoints(center, position);
          if (d < distance) {
            distance = d;
            clusterToAddTo = cluster;
          }
        }
      }
      if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
      } else {
        cluster = new Cluster$1(this);
        cluster.addMarker(marker);
        this.clusters.push(cluster);
      }
    };
    Clusterer2.prototype.createClusters = function(iFirst) {
      var _this = this;
      if (!this.ready) {
        return;
      }
      if (iFirst === 0) {
        google.maps.event.trigger(this, "clusteringbegin", this);
        if (this.timerRefStatic !== null) {
          window.clearTimeout(this.timerRefStatic);
          delete this.timerRefStatic;
        }
      }
      var map = this.getMap();
      var bounds = map !== null && "getBounds" in map ? map.getBounds() : null;
      var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
      var mapBounds = zoom > 3 ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
      var extendedMapBounds = this.getExtendedBounds(mapBounds);
      var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
      for (var i = iFirst; i < iLast; i++) {
        var marker = this.markers[i];
        if (marker && !marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || this.ignoreHidden && marker.getVisible())) {
          this.addToClosestCluster(marker);
        }
      }
      if (iLast < this.markers.length) {
        this.timerRefStatic = window.setTimeout(function() {
          _this.createClusters(iLast);
        }, 0);
      } else {
        this.timerRefStatic = null;
        google.maps.event.trigger(this, "clusteringend", this);
        for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
          var cluster = _a[_i];
          cluster.updateIcon();
        }
      }
    };
    Clusterer2.prototype.extend = function(obj1, obj2) {
      return (function applyExtend(object) {
        for (var property in object.prototype) {
          var prop = property;
          this.prototype[prop] = object.prototype[prop];
        }
        return this;
      }).apply(obj1, [obj2]);
    };
    return Clusterer2;
  }()
);
var eventMap$e = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap$e = {
  averageCenter: function(instance, averageCenter) {
    instance.setAverageCenter(averageCenter);
  },
  batchSizeIE: function(instance, batchSizeIE) {
    instance.setBatchSizeIE(batchSizeIE);
  },
  calculator: function(instance, calculator) {
    instance.setCalculator(calculator);
  },
  clusterClass: function(instance, clusterClass) {
    instance.setClusterClass(clusterClass);
  },
  enableRetinaIcons: function(instance, enableRetinaIcons) {
    instance.setEnableRetinaIcons(enableRetinaIcons);
  },
  gridSize: function(instance, gridSize) {
    instance.setGridSize(gridSize);
  },
  ignoreHidden: function(instance, ignoreHidden) {
    instance.setIgnoreHidden(ignoreHidden);
  },
  imageExtension: function(instance, imageExtension) {
    instance.setImageExtension(imageExtension);
  },
  imagePath: function(instance, imagePath) {
    instance.setImagePath(imagePath);
  },
  imageSizes: function(instance, imageSizes) {
    instance.setImageSizes(imageSizes);
  },
  maxZoom: function(instance, maxZoom) {
    instance.setMaxZoom(maxZoom);
  },
  minimumClusterSize: function(instance, minimumClusterSize) {
    instance.setMinimumClusterSize(minimumClusterSize);
  },
  styles: function(instance, styles) {
    instance.setStyles(styles);
  },
  title: function(instance, title) {
    instance.setTitle(title);
  },
  zoomOnClick: function(instance, zoomOnClick) {
    instance.setZoomOnClick(zoomOnClick);
  }
};
var defaultOptions$4 = {};
function MarkerClustererFunctional(props) {
  var children = props.children, options = props.options, averageCenter = props.averageCenter, batchSizeIE = props.batchSizeIE, calculator = props.calculator, clusterClass = props.clusterClass, enableRetinaIcons = props.enableRetinaIcons, gridSize = props.gridSize, ignoreHidden = props.ignoreHidden, imageExtension = props.imageExtension, imagePath = props.imagePath, imageSizes = props.imageSizes, maxZoom = props.maxZoom, minimumClusterSize = props.minimumClusterSize, styles = props.styles, title = props.title, zoomOnClick = props.zoomOnClick, onClick = props.onClick, onClusteringBegin = props.onClusteringBegin, onClusteringEnd = props.onClusteringEnd, onMouseOver = props.onMouseOver, onMouseOut = props.onMouseOut, onLoad = props.onLoad, onUnmount = props.onUnmount;
  var _a = reactExports.useState(null), instance = _a[0], setInstance = _a[1];
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), clickListener = _b[0], setClickListener = _b[1];
  var _c = reactExports.useState(null), clusteringBeginListener = _c[0], setClusteringBeginListener = _c[1];
  var _d = reactExports.useState(null), clusteringEndListener = _d[0], setClusteringEndListener = _d[1];
  var _e = reactExports.useState(null), mouseoutListener = _e[0], setMouseoutListener = _e[1];
  var _f = reactExports.useState(null), mouseoverListener = _f[0], setMouseoverListener = _f[1];
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onClusteringBegin) {
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
  }, [onClusteringBegin]);
  reactExports.useEffect(function() {
    if (instance && onClusteringEnd) {
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
  }, [onClusteringEnd]);
  reactExports.useEffect(function() {
    if (typeof averageCenter !== "undefined" && instance !== null) {
      updaterMap$e.averageCenter(instance, averageCenter);
    }
  }, [instance, averageCenter]);
  reactExports.useEffect(function() {
    if (typeof batchSizeIE !== "undefined" && instance !== null) {
      updaterMap$e.batchSizeIE(instance, batchSizeIE);
    }
  }, [instance, batchSizeIE]);
  reactExports.useEffect(function() {
    if (typeof calculator !== "undefined" && instance !== null) {
      updaterMap$e.calculator(instance, calculator);
    }
  }, [instance, calculator]);
  reactExports.useEffect(function() {
    if (typeof clusterClass !== "undefined" && instance !== null) {
      updaterMap$e.clusterClass(instance, clusterClass);
    }
  }, [instance, clusterClass]);
  reactExports.useEffect(function() {
    if (typeof enableRetinaIcons !== "undefined" && instance !== null) {
      updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
    }
  }, [instance, enableRetinaIcons]);
  reactExports.useEffect(function() {
    if (typeof gridSize !== "undefined" && instance !== null) {
      updaterMap$e.gridSize(instance, gridSize);
    }
  }, [instance, gridSize]);
  reactExports.useEffect(function() {
    if (typeof ignoreHidden !== "undefined" && instance !== null) {
      updaterMap$e.ignoreHidden(instance, ignoreHidden);
    }
  }, [instance, ignoreHidden]);
  reactExports.useEffect(function() {
    if (typeof imageExtension !== "undefined" && instance !== null) {
      updaterMap$e.imageExtension(instance, imageExtension);
    }
  }, [instance, imageExtension]);
  reactExports.useEffect(function() {
    if (typeof imagePath !== "undefined" && instance !== null) {
      updaterMap$e.imagePath(instance, imagePath);
    }
  }, [instance, imagePath]);
  reactExports.useEffect(function() {
    if (typeof imageSizes !== "undefined" && instance !== null) {
      updaterMap$e.imageSizes(instance, imageSizes);
    }
  }, [instance, imageSizes]);
  reactExports.useEffect(function() {
    if (typeof maxZoom !== "undefined" && instance !== null) {
      updaterMap$e.maxZoom(instance, maxZoom);
    }
  }, [instance, maxZoom]);
  reactExports.useEffect(function() {
    if (typeof minimumClusterSize !== "undefined" && instance !== null) {
      updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
    }
  }, [instance, minimumClusterSize]);
  reactExports.useEffect(function() {
    if (typeof styles !== "undefined" && instance !== null) {
      updaterMap$e.styles(instance, styles);
    }
  }, [instance, styles]);
  reactExports.useEffect(function() {
    if (typeof title !== "undefined" && instance !== null) {
      updaterMap$e.title(instance, title);
    }
  }, [instance, title]);
  reactExports.useEffect(function() {
    if (typeof zoomOnClick !== "undefined" && instance !== null) {
      updaterMap$e.zoomOnClick(instance, zoomOnClick);
    }
  }, [instance, zoomOnClick]);
  reactExports.useEffect(function() {
    if (!map)
      return;
    var clustererOptions = __assign({}, options || defaultOptions$4);
    var clusterer = new Clusterer(map, [], clustererOptions);
    if (averageCenter) {
      updaterMap$e.averageCenter(clusterer, averageCenter);
    }
    if (batchSizeIE) {
      updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
    }
    if (calculator) {
      updaterMap$e.calculator(clusterer, calculator);
    }
    if (clusterClass) {
      updaterMap$e.clusterClass(clusterer, clusterClass);
    }
    if (enableRetinaIcons) {
      updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
    }
    if (gridSize) {
      updaterMap$e.gridSize(clusterer, gridSize);
    }
    if (ignoreHidden) {
      updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
    }
    if (imageExtension) {
      updaterMap$e.imageExtension(clusterer, imageExtension);
    }
    if (imagePath) {
      updaterMap$e.imagePath(clusterer, imagePath);
    }
    if (imageSizes) {
      updaterMap$e.imageSizes(clusterer, imageSizes);
    }
    if (maxZoom) {
      updaterMap$e.maxZoom(clusterer, maxZoom);
    }
    if (minimumClusterSize) {
      updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
    }
    if (styles) {
      updaterMap$e.styles(clusterer, styles);
    }
    if (title) {
      updaterMap$e.title(clusterer, title);
    }
    if (zoomOnClick) {
      updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
    }
    if (onClusteringBegin) {
      setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
    if (onClusteringEnd) {
      setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
    setInstance(clusterer);
    if (onLoad) {
      onLoad(clusterer);
    }
    return function() {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      if (onUnmount) {
        onUnmount(clusterer);
      }
    };
  }, []);
  return instance !== null ? children(instance) || null : null;
}
reactExports.memo(MarkerClustererFunctional);
/** @class */
(function(_super) {
  __extends(ClustererComponent2, _super);
  function ClustererComponent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      markerClusterer: null
    };
    _this.setClustererCallback = function() {
      if (_this.state.markerClusterer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.markerClusterer);
      }
    };
    return _this;
  }
  ClustererComponent2.prototype.componentDidMount = function() {
    if (this.context) {
      var markerClusterer_1 = new Clusterer(this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer_1
      });
      this.setState(function() {
        return {
          markerClusterer: markerClusterer_1
        };
      }, this.setClustererCallback);
    }
  };
  ClustererComponent2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  };
  ClustererComponent2.prototype.componentWillUnmount = function() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.markerClusterer.setMap(null);
    }
  };
  ClustererComponent2.prototype.render = function() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  };
  ClustererComponent2.contextType = MapContext;
  return ClustererComponent2;
})(reactExports.PureComponent);
function cancelHandler(event) {
  event.cancelBubble = true;
  if (event.stopPropagation) {
    event.stopPropagation();
  }
}
var InfoBox = (
  /** @class */
  function() {
    function InfoBox2(options) {
      if (options === void 0) {
        options = {};
      }
      this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
      this.closeClickHandler = this.closeClickHandler.bind(this);
      this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
      this.addClickHandler = this.addClickHandler.bind(this);
      this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
      this.getBoxWidths = this.getBoxWidths.bind(this);
      this.setBoxStyle = this.setBoxStyle.bind(this);
      this.setPosition = this.setPosition.bind(this);
      this.getPosition = this.getPosition.bind(this);
      this.setOptions = this.setOptions.bind(this);
      this.setContent = this.setContent.bind(this);
      this.setVisible = this.setVisible.bind(this);
      this.getContent = this.getContent.bind(this);
      this.getVisible = this.getVisible.bind(this);
      this.setZIndex = this.setZIndex.bind(this);
      this.getZIndex = this.getZIndex.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.panBox = this.panBox.bind(this);
      this.extend = this.extend.bind(this);
      this.close = this.close.bind(this);
      this.draw = this.draw.bind(this);
      this.show = this.show.bind(this);
      this.hide = this.hide.bind(this);
      this.open = this.open.bind(this);
      this.extend(InfoBox2, google.maps.OverlayView);
      this.content = options.content || "";
      this.disableAutoPan = options.disableAutoPan || false;
      this.maxWidth = options.maxWidth || 0;
      this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
      this.position = options.position || new google.maps.LatLng(0, 0);
      this.zIndex = options.zIndex || null;
      this.boxClass = options.boxClass || "infoBox";
      this.boxStyle = options.boxStyle || {};
      this.closeBoxMargin = options.closeBoxMargin || "2px";
      this.closeBoxURL = options.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
      if (options.closeBoxURL === "") {
        this.closeBoxURL = "";
      }
      this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
      if (typeof options.visible === "undefined") {
        if (typeof options.isHidden === "undefined") {
          options.visible = true;
        } else {
          options.visible = !options.isHidden;
        }
      }
      this.isHidden = !options.visible;
      this.alignBottom = options.alignBottom || false;
      this.pane = options.pane || "floatPane";
      this.enableEventPropagation = options.enableEventPropagation || false;
      this.div = null;
      this.closeListener = null;
      this.moveListener = null;
      this.mapListener = null;
      this.contextListener = null;
      this.eventListeners = null;
      this.fixedWidthSet = null;
    }
    InfoBox2.prototype.createInfoBoxDiv = function() {
      var _this = this;
      var ignoreHandler = function(event) {
        event.returnValue = false;
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (!_this.enableEventPropagation) {
          cancelHandler(event);
        }
      };
      if (!this.div) {
        this.div = document.createElement("div");
        this.setBoxStyle();
        if (typeof this.content === "string") {
          this.div.innerHTML = this.getCloseBoxImg() + this.content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(this.content);
        }
        var panes = this.getPanes();
        if (panes !== null) {
          panes[this.pane].appendChild(this.div);
        }
        this.addClickHandler();
        if (this.div.style.width) {
          this.fixedWidthSet = true;
        } else {
          if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
            this.div.style.width = this.maxWidth + "px";
            this.fixedWidthSet = true;
          } else {
            var bw = this.getBoxWidths();
            this.div.style.width = this.div.offsetWidth - bw.left - bw.right + "px";
            this.fixedWidthSet = false;
          }
        }
        this.panBox(this.disableAutoPan);
        if (!this.enableEventPropagation) {
          this.eventListeners = [];
          var events = [
            "mousedown",
            "mouseover",
            "mouseout",
            "mouseup",
            "click",
            "dblclick",
            "touchstart",
            "touchend",
            "touchmove"
          ];
          for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            this.eventListeners.push(google.maps.event.addListener(this.div, event_1, cancelHandler));
          }
          this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function() {
            if (_this.div) {
              _this.div.style.cursor = "default";
            }
          }));
        }
        this.contextListener = google.maps.event.addListener(this.div, "contextmenu", ignoreHandler);
        google.maps.event.trigger(this, "domready");
      }
    };
    InfoBox2.prototype.getCloseBoxImg = function() {
      var img = "";
      if (this.closeBoxURL !== "") {
        img = '<img alt=""';
        img += ' aria-hidden="true"';
        img += " src='" + this.closeBoxURL + "'";
        img += " align=right";
        img += " style='";
        img += " position: relative;";
        img += " cursor: pointer;";
        img += " margin: " + this.closeBoxMargin + ";";
        img += "'>";
      }
      return img;
    };
    InfoBox2.prototype.addClickHandler = function() {
      this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== "" ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null;
    };
    InfoBox2.prototype.closeClickHandler = function(event) {
      event.cancelBubble = true;
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      google.maps.event.trigger(this, "closeclick");
      this.close();
    };
    InfoBox2.prototype.getCloseClickHandler = function() {
      return this.closeClickHandler;
    };
    InfoBox2.prototype.panBox = function(disablePan) {
      if (this.div && !disablePan) {
        var map = this.getMap();
        if (map instanceof google.maps.Map) {
          var xOffset = 0;
          var yOffset = 0;
          var bounds = map.getBounds();
          if (bounds && !bounds.contains(this.position)) {
            map.setCenter(this.position);
          }
          var mapDiv = map.getDiv();
          var mapWidth = mapDiv.offsetWidth;
          var mapHeight = mapDiv.offsetHeight;
          var iwOffsetX = this.pixelOffset.width;
          var iwOffsetY = this.pixelOffset.height;
          var iwWidth = this.div.offsetWidth;
          var iwHeight = this.div.offsetHeight;
          var padX = this.infoBoxClearance.width;
          var padY = this.infoBoxClearance.height;
          var projection = this.getProjection();
          var pixPosition = projection.fromLatLngToContainerPixel(this.position);
          if (pixPosition !== null) {
            if (pixPosition.x < -iwOffsetX + padX) {
              xOffset = pixPosition.x + iwOffsetX - padX;
            } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
              xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
            }
            if (this.alignBottom) {
              if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
              } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
              }
            } else {
              if (pixPosition.y < -iwOffsetY + padY) {
                yOffset = pixPosition.y + iwOffsetY - padY;
              } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
              }
            }
          }
          if (!(xOffset === 0 && yOffset === 0)) {
            map.panBy(xOffset, yOffset);
          }
        }
      }
    };
    InfoBox2.prototype.setBoxStyle = function() {
      if (this.div) {
        this.div.className = this.boxClass;
        this.div.style.cssText = "";
        var boxStyle = this.boxStyle;
        for (var i in boxStyle) {
          if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
            this.div.style[i] = boxStyle[i];
          }
        }
        this.div.style.webkitTransform = "translateZ(0)";
        if (typeof this.div.style.opacity !== "undefined" && this.div.style.opacity !== "") {
          var opacity = parseFloat(this.div.style.opacity || "");
          this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
          this.div.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }
        this.div.style.position = "absolute";
        this.div.style.visibility = "hidden";
        if (this.zIndex !== null) {
          this.div.style.zIndex = this.zIndex + "";
        }
        if (!this.div.style.overflow) {
          this.div.style.overflow = "auto";
        }
      }
    };
    InfoBox2.prototype.getBoxWidths = function() {
      var bw = { top: 0, bottom: 0, left: 0, right: 0 };
      if (!this.div) {
        return bw;
      }
      if (document.defaultView) {
        var ownerDocument = this.div.ownerDocument;
        var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, "") : null;
        if (computedStyle) {
          bw.top = parseInt(computedStyle.borderTopWidth || "", 10) || 0;
          bw.bottom = parseInt(computedStyle.borderBottomWidth || "", 10) || 0;
          bw.left = parseInt(computedStyle.borderLeftWidth || "", 10) || 0;
          bw.right = parseInt(computedStyle.borderRightWidth || "", 10) || 0;
        }
      } else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle
      ) {
        var currentStyle = this.div.currentStyle;
        if (currentStyle) {
          bw.top = parseInt(currentStyle.borderTopWidth || "", 10) || 0;
          bw.bottom = parseInt(currentStyle.borderBottomWidth || "", 10) || 0;
          bw.left = parseInt(currentStyle.borderLeftWidth || "", 10) || 0;
          bw.right = parseInt(currentStyle.borderRightWidth || "", 10) || 0;
        }
      }
      return bw;
    };
    InfoBox2.prototype.onRemove = function() {
      if (this.div && this.div.parentNode) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
      }
    };
    InfoBox2.prototype.draw = function() {
      this.createInfoBoxDiv();
      if (this.div) {
        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToDivPixel(this.position);
        if (pixPosition !== null) {
          this.div.style.left = pixPosition.x + this.pixelOffset.width + "px";
          if (this.alignBottom) {
            this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + "px";
          } else {
            this.div.style.top = pixPosition.y + this.pixelOffset.height + "px";
          }
        }
        if (this.isHidden) {
          this.div.style.visibility = "hidden";
        } else {
          this.div.style.visibility = "visible";
        }
      }
    };
    InfoBox2.prototype.setOptions = function(options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof options.boxClass !== "undefined") {
        this.boxClass = options.boxClass;
        this.setBoxStyle();
      }
      if (typeof options.boxStyle !== "undefined") {
        this.boxStyle = options.boxStyle;
        this.setBoxStyle();
      }
      if (typeof options.content !== "undefined") {
        this.setContent(options.content);
      }
      if (typeof options.disableAutoPan !== "undefined") {
        this.disableAutoPan = options.disableAutoPan;
      }
      if (typeof options.maxWidth !== "undefined") {
        this.maxWidth = options.maxWidth;
      }
      if (typeof options.pixelOffset !== "undefined") {
        this.pixelOffset = options.pixelOffset;
      }
      if (typeof options.alignBottom !== "undefined") {
        this.alignBottom = options.alignBottom;
      }
      if (typeof options.position !== "undefined") {
        this.setPosition(options.position);
      }
      if (typeof options.zIndex !== "undefined") {
        this.setZIndex(options.zIndex);
      }
      if (typeof options.closeBoxMargin !== "undefined") {
        this.closeBoxMargin = options.closeBoxMargin;
      }
      if (typeof options.closeBoxURL !== "undefined") {
        this.closeBoxURL = options.closeBoxURL;
      }
      if (typeof options.infoBoxClearance !== "undefined") {
        this.infoBoxClearance = options.infoBoxClearance;
      }
      if (typeof options.isHidden !== "undefined") {
        this.isHidden = options.isHidden;
      }
      if (typeof options.visible !== "undefined") {
        this.isHidden = !options.visible;
      }
      if (typeof options.enableEventPropagation !== "undefined") {
        this.enableEventPropagation = options.enableEventPropagation;
      }
      if (this.div) {
        this.draw();
      }
    };
    InfoBox2.prototype.setContent = function(content) {
      this.content = content;
      if (this.div) {
        if (this.closeListener) {
          google.maps.event.removeListener(this.closeListener);
          this.closeListener = null;
        }
        if (!this.fixedWidthSet) {
          this.div.style.width = "";
        }
        if (typeof content === "string") {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
        if (!this.fixedWidthSet) {
          this.div.style.width = this.div.offsetWidth + "px";
          if (typeof content === "string") {
            this.div.innerHTML = this.getCloseBoxImg() + content;
          } else {
            this.div.innerHTML = this.getCloseBoxImg();
            this.div.appendChild(content);
          }
        }
        this.addClickHandler();
      }
      google.maps.event.trigger(this, "content_changed");
    };
    InfoBox2.prototype.setPosition = function(latLng) {
      this.position = latLng;
      if (this.div) {
        this.draw();
      }
      google.maps.event.trigger(this, "position_changed");
    };
    InfoBox2.prototype.setVisible = function(isVisible) {
      this.isHidden = !isVisible;
      if (this.div) {
        this.div.style.visibility = this.isHidden ? "hidden" : "visible";
      }
    };
    InfoBox2.prototype.setZIndex = function(index) {
      this.zIndex = index;
      if (this.div) {
        this.div.style.zIndex = index + "";
      }
      google.maps.event.trigger(this, "zindex_changed");
    };
    InfoBox2.prototype.getContent = function() {
      return this.content;
    };
    InfoBox2.prototype.getPosition = function() {
      return this.position;
    };
    InfoBox2.prototype.getZIndex = function() {
      return this.zIndex;
    };
    InfoBox2.prototype.getVisible = function() {
      var map = this.getMap();
      return typeof map === "undefined" || map === null ? false : !this.isHidden;
    };
    InfoBox2.prototype.show = function() {
      this.isHidden = false;
      if (this.div) {
        this.div.style.visibility = "visible";
      }
    };
    InfoBox2.prototype.hide = function() {
      this.isHidden = true;
      if (this.div) {
        this.div.style.visibility = "hidden";
      }
    };
    InfoBox2.prototype.open = function(map, anchor) {
      var _this = this;
      if (anchor) {
        this.position = anchor.getPosition();
        this.moveListener = google.maps.event.addListener(anchor, "position_changed", function() {
          var position = anchor.getPosition();
          _this.setPosition(position);
        });
        this.mapListener = google.maps.event.addListener(anchor, "map_changed", function() {
          _this.setMap(anchor.map);
        });
      }
      this.setMap(map);
      if (this.div) {
        this.panBox();
      }
    };
    InfoBox2.prototype.close = function() {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      }
      if (this.eventListeners) {
        for (var _i = 0, _a = this.eventListeners; _i < _a.length; _i++) {
          var eventListener = _a[_i];
          google.maps.event.removeListener(eventListener);
        }
        this.eventListeners = null;
      }
      if (this.moveListener) {
        google.maps.event.removeListener(this.moveListener);
        this.moveListener = null;
      }
      if (this.mapListener) {
        google.maps.event.removeListener(this.mapListener);
        this.mapListener = null;
      }
      if (this.contextListener) {
        google.maps.event.removeListener(this.contextListener);
        this.contextListener = null;
      }
      this.setMap(null);
    };
    InfoBox2.prototype.extend = function(obj1, obj2) {
      return (function applyExtend(object) {
        for (var property in object.prototype) {
          if (!Object.prototype.hasOwnProperty.call(this, property)) {
            this.prototype[property] = object.prototype[property];
          }
        }
        return this;
      }).apply(obj1, [obj2]);
    };
    return InfoBox2;
  }()
);
var eventMap$d = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$d = {
  options: function(instance, options) {
    instance.setOptions(options);
  },
  position: function(instance, position) {
    if (position instanceof google.maps.LatLng) {
      instance.setPosition(position);
    } else {
      instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
    }
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex: function(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$3 = {};
function InfoBoxFunctional(_a) {
  var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), closeClickListener = _c[0], setCloseClickListener = _c[1];
  var _d = reactExports.useState(null), domReadyClickListener = _d[0], setDomReadyClickListener = _d[1];
  var _e = reactExports.useState(null), contentChangedClickListener = _e[0], setContentChangedClickListener = _e[1];
  var _f = reactExports.useState(null), positionChangedClickListener = _f[0], setPositionChangedClickListener = _f[1];
  var _g = reactExports.useState(null), zIndexChangedClickListener = _g[0], setZindexChangedClickListener = _g[1];
  var containerElementRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    if (map && instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  reactExports.useEffect(function() {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (position && instance !== null) {
      var positionLatLng = position instanceof google.maps.LatLng ? position : new google.maps.LatLng(position.lat, position.lng);
      instance.setPosition(positionLatLng);
    }
  }, [position]);
  reactExports.useEffect(function() {
    if (typeof zIndex === "number" && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  reactExports.useEffect(function() {
    if (instance && onCloseClick) {
      if (closeClickListener !== null) {
        google.maps.event.removeListener(closeClickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, "closeclick", onCloseClick));
    }
  }, [onCloseClick]);
  reactExports.useEffect(function() {
    if (instance && onDomReady) {
      if (domReadyClickListener !== null) {
        google.maps.event.removeListener(domReadyClickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, "domready", onDomReady));
    }
  }, [onDomReady]);
  reactExports.useEffect(function() {
    if (instance && onContentChanged) {
      if (contentChangedClickListener !== null) {
        google.maps.event.removeListener(contentChangedClickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, "content_changed", onContentChanged));
    }
  }, [onContentChanged]);
  reactExports.useEffect(function() {
    if (instance && onPositionChanged) {
      if (positionChangedClickListener !== null) {
        google.maps.event.removeListener(positionChangedClickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  reactExports.useEffect(function() {
    if (instance && onZindexChanged) {
      if (zIndexChangedClickListener !== null) {
        google.maps.event.removeListener(zIndexChangedClickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  reactExports.useEffect(function() {
    if (map) {
      var _a2 = options || defaultOptions$3, position_1 = _a2.position, infoBoxOptions = __rest$1(_a2, ["position"]);
      var positionLatLng = void 0;
      if (position_1 && !(position_1 instanceof google.maps.LatLng)) {
        positionLatLng = new google.maps.LatLng(position_1.lat, position_1.lng);
      }
      var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), positionLatLng ? { position: positionLatLng } : {}));
      containerElementRef.current = document.createElement("div");
      setInstance(infoBox);
      if (onCloseClick) {
        setCloseClickListener(google.maps.event.addListener(infoBox, "closeclick", onCloseClick));
      }
      if (onDomReady) {
        setDomReadyClickListener(google.maps.event.addListener(infoBox, "domready", onDomReady));
      }
      if (onContentChanged) {
        setContentChangedClickListener(google.maps.event.addListener(infoBox, "content_changed", onContentChanged));
      }
      if (onPositionChanged) {
        setPositionChangedClickListener(google.maps.event.addListener(infoBox, "position_changed", onPositionChanged));
      }
      if (onZindexChanged) {
        setZindexChangedClickListener(google.maps.event.addListener(infoBox, "zindex_changed", onZindexChanged));
      }
      infoBox.setContent(containerElementRef.current);
      if (anchor) {
        infoBox.open(map, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(map);
      } else {
        invariant$1(false, "You must provide either an anchor or a position prop for <InfoBox>.");
      }
      if (onLoad) {
        onLoad(infoBox);
      }
    }
    return function() {
      if (instance !== null) {
        if (closeClickListener) {
          google.maps.event.removeListener(closeClickListener);
        }
        if (contentChangedClickListener) {
          google.maps.event.removeListener(contentChangedClickListener);
        }
        if (domReadyClickListener) {
          google.maps.event.removeListener(domReadyClickListener);
        }
        if (positionChangedClickListener) {
          google.maps.event.removeListener(positionChangedClickListener);
        }
        if (zIndexChangedClickListener) {
          google.maps.event.removeListener(zIndexChangedClickListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.close();
      }
    };
  }, []);
  return containerElementRef.current ? reactDomExports.createPortal(reactExports.Children.only(children), containerElementRef.current) : null;
}
reactExports.memo(InfoBoxFunctional);
/** @class */
(function(_super) {
  __extends(InfoBoxComponent2, _super);
  function InfoBoxComponent2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoBox: null
    };
    _this.open = function(infoBox, anchor) {
      if (anchor) {
        if (_this.context !== null) {
          infoBox.open(_this.context, anchor);
        }
      } else if (infoBox.getPosition()) {
        if (_this.context !== null) {
          infoBox.open(_this.context);
        }
      } else {
        invariant$1(false, "You must provide either an anchor or a position prop for <InfoBox>.");
      }
    };
    _this.setInfoBoxCallback = function() {
      if (_this.state.infoBox !== null && _this.containerElement !== null) {
        _this.state.infoBox.setContent(_this.containerElement);
        _this.open(_this.state.infoBox, _this.props.anchor);
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.infoBox);
        }
      }
    };
    return _this;
  }
  InfoBoxComponent2.prototype.componentDidMount = function() {
    var _a = this.props.options || {}, position = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
    var positionLatLng;
    if (position && !(position instanceof google.maps.LatLng)) {
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }
    var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), positionLatLng ? { position: positionLatLng } : {}));
    this.containerElement = document.createElement("div");
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({ infoBox }, this.setInfoBoxCallback);
  };
  InfoBoxComponent2.prototype.componentDidUpdate = function(prevProps) {
    var infoBox = this.state.infoBox;
    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  };
  InfoBoxComponent2.prototype.componentWillUnmount = function() {
    var onUnmount = this.props.onUnmount;
    var infoBox = this.state.infoBox;
    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }
      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  };
  InfoBoxComponent2.prototype.render = function() {
    return this.containerElement ? reactDomExports.createPortal(reactExports.Children.only(this.props.children), this.containerElement) : null;
  };
  InfoBoxComponent2.contextType = MapContext;
  return InfoBoxComponent2;
})(reactExports.PureComponent);
var fastDeepEqual = function equal2(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal2(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal2(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var equal3 = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
const ARRAY_TYPES = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
];
const VERSION = 1;
const HEADER_SIZE = 8;
class KDBush {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(data) {
    if (!(data instanceof ArrayBuffer)) {
      throw new Error("Data must be an instance of ArrayBuffer.");
    }
    const [magic, versionAndType] = new Uint8Array(data, 0, 2);
    if (magic !== 219) {
      throw new Error("Data does not appear to be in a KDBush format.");
    }
    const version = versionAndType >> 4;
    if (version !== VERSION) {
      throw new Error(`Got v${version} data when expected v${VERSION}.`);
    }
    const ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType) {
      throw new Error("Unrecognized array type.");
    }
    const [nodeSize] = new Uint16Array(data, 2, 1);
    const [numItems] = new Uint32Array(data, 4, 1);
    return new KDBush(numItems, nodeSize, ArrayType, data);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
    if (isNaN(numItems) || numItems < 0)
      throw new Error(`Unpexpected numItems value: ${numItems}.`);
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
    const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
    const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
    const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
    const padCoords = (8 - idsByteSize % 8) % 8;
    if (arrayTypeIndex < 0) {
      throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    }
    if (data && data instanceof ArrayBuffer) {
      this.data = data;
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = numItems * 2;
      this._finished = true;
    } else {
      this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = 0;
      this._finished = false;
      new Uint8Array(this.data, 0, 2).set([219, (VERSION << 4) + arrayTypeIndex]);
      new Uint16Array(this.data, 2, 1)[0] = nodeSize;
      new Uint32Array(this.data, 4, 1)[0] = numItems;
    }
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(x, y) {
    const index = this._pos >> 1;
    this.ids[index] = index;
    this.coords[this._pos++] = x;
    this.coords[this._pos++] = y;
    return index;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const numAdded = this._pos >> 1;
    if (numAdded !== this.numItems) {
      throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
    }
    sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
    this._finished = true;
    return this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(minX, minY, maxX, maxY) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids, coords, nodeSize } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++) {
          const x2 = coords[2 * i];
          const y2 = coords[2 * i + 1];
          if (x2 >= minX && x2 <= maxX && y2 >= minY && y2 <= maxY)
            result.push(ids[i]);
        }
        continue;
      }
      const m = left + right >> 1;
      const x = coords[2 * m];
      const y = coords[2 * m + 1];
      if (x >= minX && x <= maxX && y >= minY && y <= maxY)
        result.push(ids[m]);
      if (axis === 0 ? minX <= x : minY <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? maxX >= x : maxY >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(qx, qy, r) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids, coords, nodeSize } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r2 = r * r;
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++) {
          if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2)
            result.push(ids[i]);
        }
        continue;
      }
      const m = left + right >> 1;
      const x = coords[2 * m];
      const y = coords[2 * m + 1];
      if (sqDist(x, y, qx, qy) <= r2)
        result.push(ids[m]);
      if (axis === 0 ? qx - r <= x : qy - r <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? qx + r >= x : qy + r >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
}
function sort(ids, coords, nodeSize, left, right, axis) {
  if (right - left <= nodeSize)
    return;
  const m = left + right >> 1;
  select(ids, coords, m, left, right, axis);
  sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
  sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}
function select(ids, coords, k, left, right, axis) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, axis);
    }
    const t = coords[2 * k + axis];
    let i = left;
    let j = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + axis] > t)
      swapItem(ids, coords, left, right);
    while (i < j) {
      swapItem(ids, coords, i, j);
      i++;
      j--;
      while (coords[2 * i + axis] < t)
        i++;
      while (coords[2 * j + axis] > t)
        j--;
    }
    if (coords[2 * left + axis] === t)
      swapItem(ids, coords, left, j);
    else {
      j++;
      swapItem(ids, coords, j, right);
    }
    if (j <= k)
      left = j + 1;
    if (k <= j)
      right = j - 1;
  }
}
function swapItem(ids, coords, i, j) {
  swap(ids, i, j);
  swap(coords, 2 * i, 2 * j);
  swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function sqDist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
const defaultOptions$2 = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: false,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: false,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (props) => props
  // props => ({sum: props.my_value})
};
const fround = Math.fround || /* @__PURE__ */ ((tmp) => (x) => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
const OFFSET_ZOOM = 2;
const OFFSET_ID = 3;
const OFFSET_PARENT = 4;
const OFFSET_NUM = 5;
const OFFSET_PROP = 6;
class Supercluster {
  constructor(options) {
    this.options = Object.assign(Object.create(defaultOptions$2), options);
    this.trees = new Array(this.options.maxZoom + 1);
    this.stride = this.options.reduce ? 7 : 6;
    this.clusterProps = [];
  }
  load(points) {
    const { log, minZoom, maxZoom } = this.options;
    if (log)
      console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log)
      console.time(timerId);
    this.points = points;
    const data = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (!p.geometry)
        continue;
      const [lng, lat] = p.geometry.coordinates;
      const x = fround(lngX(lng));
      const y = fround(latY(lat));
      data.push(
        x,
        y,
        // projected point coordinates
        Infinity,
        // the last zoom the point was processed at
        i,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      );
      if (this.options.reduce)
        data.push(0);
    }
    let tree = this.trees[maxZoom + 1] = this._createTree(data);
    if (log)
      console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      const now = +Date.now();
      tree = this.trees[z] = this._createTree(this._cluster(tree, z));
      if (log)
        console.log("z%d: %d clusters in %dms", z, tree.numItems, +Date.now() - now);
    }
    if (log)
      console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const data = tree.data;
    const clusters = [];
    for (const id of ids) {
      const k = this.stride * id;
      clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const tree = this.trees[originZoom];
    if (!tree)
      throw new Error(errorMsg);
    const data = tree.data;
    if (originId * this.stride >= data.length)
      throw new Error(errorMsg);
    const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const x = data[originId * this.stride];
    const y = data[originId * this.stride + 1];
    const ids = tree.within(x, y, r);
    const children = [];
    for (const id of ids) {
      const k = id * this.stride;
      if (data[k + OFFSET_PARENT] === clusterId) {
        children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
      }
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    const tree = this.trees[this._limitZoom(z)];
    const z2 = Math.pow(2, z);
    const { extent, radius } = this.options;
    const p = radius / extent;
    const top = (y - p) / z2;
    const bottom = (y + 1 + p) / z2;
    const tile = {
      features: []
    };
    this._addTileFeatures(
      tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
      tree.data,
      x,
      y,
      z2,
      tile
    );
    if (x === 0) {
      this._addTileFeatures(
        tree.range(1 - p / z2, top, 1, bottom),
        tree.data,
        z2,
        y,
        z2,
        tile
      );
    }
    if (x === z2 - 1) {
      this._addTileFeatures(
        tree.range(0, top, p / z2, bottom),
        tree.data,
        -1,
        y,
        z2,
        tile
      );
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          skipped += props.point_count;
        } else {
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit)
        break;
    }
    return skipped;
  }
  _createTree(data) {
    const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let i = 0; i < data.length; i += this.stride)
      tree.add(data[i], data[i + 1]);
    tree.finish();
    tree.data = data;
    return tree;
  }
  _addTileFeatures(ids, data, x, y, z2, tile) {
    for (const i of ids) {
      const k = i * this.stride;
      const isCluster = data[k + OFFSET_NUM] > 1;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(data, k, this.clusterProps);
        px = data[k];
        py = data[k + 1];
      } else {
        const p = this.points[data[k + OFFSET_ID]];
        tags = p.properties;
        const [lng, lat] = p.geometry.coordinates;
        px = lngX(lng);
        py = latY(lat);
      }
      const f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z2 - x)),
          Math.round(this.options.extent * (py * z2 - y))
        ]],
        tags
      };
      let id;
      if (isCluster || this.options.generateId) {
        id = data[k + OFFSET_ID];
      } else {
        id = this.points[data[k + OFFSET_ID]].id;
      }
      if (id !== void 0)
        f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(tree, zoom) {
    const { radius, extent, reduce: reduce2, minPoints } = this.options;
    const r = radius / (extent * Math.pow(2, zoom));
    const data = tree.data;
    const nextData = [];
    const stride = this.stride;
    for (let i = 0; i < data.length; i += stride) {
      if (data[i + OFFSET_ZOOM] <= zoom)
        continue;
      data[i + OFFSET_ZOOM] = zoom;
      const x = data[i];
      const y = data[i + 1];
      const neighborIds = tree.within(data[i], data[i + 1], r);
      const numPointsOrigin = data[i + OFFSET_NUM];
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const k = neighborId * stride;
        if (data[k + OFFSET_ZOOM] > zoom)
          numPoints += data[k + OFFSET_NUM];
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = x * numPointsOrigin;
        let wy = y * numPointsOrigin;
        let clusterProperties;
        let clusterPropIndex = -1;
        const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const k = neighborId * stride;
          if (data[k + OFFSET_ZOOM] <= zoom)
            continue;
          data[k + OFFSET_ZOOM] = zoom;
          const numPoints2 = data[k + OFFSET_NUM];
          wx += data[k] * numPoints2;
          wy += data[k + 1] * numPoints2;
          data[k + OFFSET_PARENT] = id;
          if (reduce2) {
            if (!clusterProperties) {
              clusterProperties = this._map(data, i, true);
              clusterPropIndex = this.clusterProps.length;
              this.clusterProps.push(clusterProperties);
            }
            reduce2(clusterProperties, this._map(data, k));
          }
        }
        data[i + OFFSET_PARENT] = id;
        nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
        if (reduce2)
          nextData.push(clusterPropIndex);
      } else {
        for (let j = 0; j < stride; j++)
          nextData.push(data[i + j]);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const k = neighborId * stride;
            if (data[k + OFFSET_ZOOM] <= zoom)
              continue;
            data[k + OFFSET_ZOOM] = zoom;
            for (let j = 0; j < stride; j++)
              nextData.push(data[k + j]);
          }
        }
      }
    }
    return nextData;
  }
  // get index of the point from which the cluster originated
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(data, i, clone) {
    if (data[i + OFFSET_NUM] > 1) {
      const props = this.clusterProps[data[i + OFFSET_PROP]];
      return clone ? Object.assign({}, props) : props;
    }
    const original = this.points[data[i + OFFSET_ID]].properties;
    const result = this.options.map(original);
    return clone && result === original ? Object.assign({}, result) : result;
  }
}
function getClusterJSON(data, i, clusterProps) {
  return {
    type: "Feature",
    id: data[i + OFFSET_ID],
    properties: getClusterProperties(data, i, clusterProps),
    geometry: {
      type: "Point",
      coordinates: [xLng(data[i]), yLat(data[i + 1])]
    }
  };
}
function getClusterProperties(data, i, clusterProps) {
  const count = data[i + OFFSET_NUM];
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  const propIndex = data[i + OFFSET_PROP];
  const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
  return Object.assign(properties, {
    cluster: true,
    cluster_id: data[i + OFFSET_ID],
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  const y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
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
class MarkerUtils {
  static isAdvancedMarkerAvailable(map) {
    return google.maps.marker && map.getMapCapabilities().isAdvancedMarkersAvailable === true;
  }
  static isAdvancedMarker(marker) {
    return google.maps.marker && marker instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(marker, map) {
    if (this.isAdvancedMarker(marker)) {
      marker.map = map;
    } else {
      marker.setMap(map);
    }
  }
  static getPosition(marker) {
    if (this.isAdvancedMarker(marker)) {
      if (marker.position) {
        if (marker.position instanceof google.maps.LatLng) {
          return marker.position;
        }
        if (marker.position.lat && marker.position.lng) {
          return new google.maps.LatLng(marker.position.lat, marker.position.lng);
        }
      }
      return new google.maps.LatLng(null);
    }
    return marker.getPosition();
  }
  static getVisible(marker) {
    if (this.isAdvancedMarker(marker)) {
      return true;
    }
    return marker.getVisible();
  }
}
class Cluster {
  constructor({ markers, position }) {
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return;
    }
    const bounds = new google.maps.LatLngBounds(this._position, this._position);
    for (const marker of this.markers) {
      bounds.extend(MarkerUtils.getPosition(marker));
    }
    return bounds;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(marker) {
    this.markers.push(marker);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    if (this.marker) {
      MarkerUtils.setMap(this.marker, null);
      this.marker = void 0;
    }
    this.markers.length = 0;
  }
}
class AbstractAlgorithm {
  constructor({ maxZoom = 16 }) {
    this.maxZoom = maxZoom;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers }) {
    return noop$1(markers);
  }
}
const noop$1 = (markers) => {
  const clusters = markers.map((marker) => new Cluster({
    position: MarkerUtils.getPosition(marker),
    markers: [marker]
  }));
  return clusters;
};
class SuperClusterAlgorithm extends AbstractAlgorithm {
  constructor(_a) {
    var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
    super({ maxZoom });
    this.state = { zoom: -1 };
    this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
  }
  calculate(input) {
    let changed = false;
    const state = { zoom: input.map.getZoom() };
    if (!equal3(input.markers, this.markers)) {
      changed = true;
      this.markers = [...input.markers];
      const points = this.markers.map((marker) => {
        const position = MarkerUtils.getPosition(marker);
        const coordinates = [position.lng(), position.lat()];
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates
          },
          properties: { marker }
        };
      });
      this.superCluster.load(points);
    }
    if (!changed) {
      if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
        changed = !equal3(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return { clusters: this.clusters, changed };
  }
  cluster({ map }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map((feature) => this.transformCluster(feature));
  }
  transformCluster({ geometry: { coordinates: [lng, lat] }, properties }) {
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
        position: { lat, lng }
      });
    }
    const marker = properties.marker;
    return new Cluster({
      markers: [marker],
      position: MarkerUtils.getPosition(marker)
    });
  }
}
class ClusterStats {
  constructor(markers, clusters) {
    this.markers = { sum: markers.length };
    const clusterMarkerCounts = clusters.map((a) => a.count);
    const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
}
class DefaultRenderer {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count, position }, stats, map) {
    const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
    const title = `Cluster of ${count} markers`, zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
    if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
      const div = document.createElement("div");
      div.innerHTML = svg;
      const svgEl = div.firstElementChild;
      svgEl.setAttribute("transform", "translate(0 25)");
      const clusterOptions2 = {
        map,
        position,
        zIndex,
        title,
        content: svgEl
      };
      return new google.maps.marker.AdvancedMarkerElement(clusterOptions2);
    }
    const clusterOptions = {
      position,
      zIndex,
      title,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(svg)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(clusterOptions);
  }
}
function extend(type1, type2) {
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
class OverlayViewSafe {
  constructor() {
    extend(OverlayViewSafe, google.maps.OverlayView);
  }
}
var MarkerClustererEvents;
(function(MarkerClustererEvents2) {
  MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
class MarkerClusterer extends OverlayViewSafe {
  constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler }) {
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach((marker) => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    const index = this.markers.indexOf(marker);
    if (index === -1) {
      return false;
    }
    MarkerUtils.setMap(marker, null);
    this.markers.splice(index, 1);
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    let removed = false;
    markers.forEach((marker) => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const map = this.getMap();
    if (map instanceof google.maps.Map && map.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      const { clusters, changed } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      if (changed || changed == void 0) {
        const singleMarker = /* @__PURE__ */ new Set();
        for (const cluster of clusters) {
          if (cluster.markers.length == 1) {
            singleMarker.add(cluster.markers[0]);
          }
        }
        const groupMarkers = [];
        for (const cluster of this.clusters) {
          if (cluster.marker == null) {
            continue;
          }
          if (cluster.markers.length == 1) {
            if (!singleMarker.has(cluster.marker)) {
              MarkerUtils.setMap(cluster.marker, null);
            }
          } else {
            groupMarkers.push(cluster.marker);
          }
        }
        this.clusters = clusters;
        this.renderClusters();
        requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
    this.clusters.forEach((cluster) => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    const stats = new ClusterStats(this.markers, this.clusters);
    const map = this.getMap();
    this.clusters.forEach((cluster) => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        cluster.marker = this.renderer.render(cluster, stats, map);
        cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
        if (this.onClusterClick) {
          cluster.marker.addListener(
            "click",
            /* istanbul ignore next */
            (event) => {
              google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
              this.onClusterClick(event, cluster, map);
            }
          );
        }
      }
      MarkerUtils.setMap(cluster.marker, map);
    });
  }
}
function useGoogleMarkerClusterer(options) {
  var map = useGoogleMap();
  var _a = reactExports.useState(null), markerClusterer = _a[0], setMarkerClusterer = _a[1];
  reactExports.useEffect(function() {
    if (map && markerClusterer === null) {
      var markerCluster = new MarkerClusterer(__assign(__assign({}, options), { map }));
      setMarkerClusterer(markerCluster);
    }
  }, [map]);
  return markerClusterer;
}
function GoogleMarkerClusterer(_a) {
  var children = _a.children, options = _a.options;
  var markerClusterer = useGoogleMarkerClusterer(options);
  return markerClusterer !== null ? children(markerClusterer) : null;
}
reactExports.memo(GoogleMarkerClusterer);
var eventMap$c = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$c = {
  options: function(instance, options) {
    instance.setOptions(options);
  },
  position: function(instance, position) {
    instance.setPosition(position);
  },
  zIndex: function(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
function InfoWindowFunctional(_a) {
  var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), closeclickListener = _c[0], setCloseClickListener = _c[1];
  var _d = reactExports.useState(null), domreadyclickListener = _d[0], setDomReadyClickListener = _d[1];
  var _e = reactExports.useState(null), contentchangedclickListener = _e[0], setContentChangedClickListener = _e[1];
  var _f = reactExports.useState(null), positionchangedclickListener = _f[0], setPositionChangedClickListener = _f[1];
  var _g = reactExports.useState(null), zindexchangedclickListener = _g[0], setZindexChangedClickListener = _g[1];
  var containerElementRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  reactExports.useEffect(function() {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [position]);
  reactExports.useEffect(function() {
    if (typeof zIndex === "number" && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  reactExports.useEffect(function() {
    if (instance && onCloseClick) {
      if (closeclickListener !== null) {
        google.maps.event.removeListener(closeclickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, "closeclick", onCloseClick));
    }
  }, [onCloseClick]);
  reactExports.useEffect(function() {
    if (instance && onDomReady) {
      if (domreadyclickListener !== null) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, "domready", onDomReady));
    }
  }, [onDomReady]);
  reactExports.useEffect(function() {
    if (instance && onContentChanged) {
      if (contentchangedclickListener !== null) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, "content_changed", onContentChanged));
    }
  }, [onContentChanged]);
  reactExports.useEffect(function() {
    if (instance && onPositionChanged) {
      if (positionchangedclickListener !== null) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  reactExports.useEffect(function() {
    if (instance && onZindexChanged) {
      if (zindexchangedclickListener !== null) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  reactExports.useEffect(function() {
    var infoWindow = new google.maps.InfoWindow(__assign({}, options || {}));
    setInstance(infoWindow);
    containerElementRef.current = document.createElement("div");
    if (onCloseClick) {
      setCloseClickListener(google.maps.event.addListener(infoWindow, "closeclick", onCloseClick));
    }
    if (onDomReady) {
      setDomReadyClickListener(google.maps.event.addListener(infoWindow, "domready", onDomReady));
    }
    if (onContentChanged) {
      setContentChangedClickListener(google.maps.event.addListener(infoWindow, "content_changed", onContentChanged));
    }
    if (onPositionChanged) {
      setPositionChangedClickListener(google.maps.event.addListener(infoWindow, "position_changed", onPositionChanged));
    }
    if (onZindexChanged) {
      setZindexChangedClickListener(google.maps.event.addListener(infoWindow, "zindex_changed", onZindexChanged));
    }
    infoWindow.setContent(containerElementRef.current);
    if (position) {
      infoWindow.setPosition(position);
    }
    if (zIndex) {
      infoWindow.setZIndex(zIndex);
    }
    if (anchor) {
      infoWindow.open(map, anchor);
    } else if (infoWindow.getPosition()) {
      infoWindow.open(map);
    } else {
      invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
    }
    if (onLoad) {
      onLoad(infoWindow);
    }
    return function() {
      if (closeclickListener) {
        google.maps.event.removeListener(closeclickListener);
      }
      if (contentchangedclickListener) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      if (domreadyclickListener) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      if (positionchangedclickListener) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      if (zindexchangedclickListener) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      if (onUnmount) {
        onUnmount(infoWindow);
      }
      infoWindow.close();
    };
  }, []);
  return containerElementRef.current ? reactDomExports.createPortal(reactExports.Children.only(children), containerElementRef.current) : null;
}
reactExports.memo(InfoWindowFunctional);
var InfoWindow = (
  /** @class */
  function(_super) {
    __extends(InfoWindow2, _super);
    function InfoWindow2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.registeredEvents = [];
      _this.containerElement = null;
      _this.state = {
        infoWindow: null
      };
      _this.open = function(infoWindow, anchor) {
        if (anchor) {
          infoWindow.open(_this.context, anchor);
        } else if (infoWindow.getPosition()) {
          infoWindow.open(_this.context);
        } else {
          invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
        }
      };
      _this.setInfoWindowCallback = function() {
        if (_this.state.infoWindow !== null && _this.containerElement !== null) {
          _this.state.infoWindow.setContent(_this.containerElement);
          _this.open(_this.state.infoWindow, _this.props.anchor);
          if (_this.props.onLoad) {
            _this.props.onLoad(_this.state.infoWindow);
          }
        }
      };
      return _this;
    }
    InfoWindow2.prototype.componentDidMount = function() {
      var infoWindow = new google.maps.InfoWindow(__assign({}, this.props.options || {}));
      this.containerElement = document.createElement("div");
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps: {},
        nextProps: this.props,
        instance: infoWindow
      });
      this.setState(function() {
        return {
          infoWindow
        };
      }, this.setInfoWindowCallback);
    };
    InfoWindow2.prototype.componentDidUpdate = function(prevProps) {
      if (this.state.infoWindow !== null) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$c,
          eventMap: eventMap$c,
          prevProps,
          nextProps: this.props,
          instance: this.state.infoWindow
        });
      }
    };
    InfoWindow2.prototype.componentWillUnmount = function() {
      if (this.state.infoWindow !== null) {
        unregisterEvents(this.registeredEvents);
        if (this.props.onUnmount) {
          this.props.onUnmount(this.state.infoWindow);
        }
        this.state.infoWindow.close();
      }
    };
    InfoWindow2.prototype.render = function() {
      return this.containerElement ? reactDomExports.createPortal(reactExports.Children.only(this.props.children), this.containerElement) : null;
    };
    InfoWindow2.contextType = MapContext;
    return InfoWindow2;
  }(reactExports.PureComponent)
);
var eventMap$b = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$b = {
  draggable: function(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable: function(instance, editable) {
    instance.setEditable(editable);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  path: function(instance, path) {
    instance.setPath(path);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions$1 = {};
function PolylineFunctional(_a) {
  var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
  var _e = reactExports.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
  var _f = reactExports.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
  var _g = reactExports.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
  var _h = reactExports.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
  var _j = reactExports.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
  var _k = reactExports.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
  var _l = reactExports.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
  var _m = reactExports.useState(null), clickListener = _m[0], setClickListener = _m[1];
  var _o = reactExports.useState(null), dragListener = _o[0], setDragListener = _o[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  reactExports.useEffect(function() {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  reactExports.useEffect(function() {
    if (typeof path !== "undefined" && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    var polyline = new google.maps.Polyline(__assign(__assign({}, options || defaultOptions$1), { map }));
    if (path) {
      polyline.setPath(path);
    }
    if (typeof visible !== "undefined") {
      polyline.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      polyline.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      polyline.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polyline, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polyline, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polyline, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polyline, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polyline, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polyline, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polyline, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polyline, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polyline, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polyline, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polyline, "drag", onDrag));
    }
    setInstance(polyline);
    if (onLoad) {
      onLoad(polyline);
    }
    return function() {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polyline);
      }
      polyline.setMap(null);
    };
  }, []);
  return null;
}
reactExports.memo(PolylineFunctional);
/** @class */
(function(_super) {
  __extends(Polyline2, _super);
  function Polyline2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polyline: null
    };
    _this.setPolylineCallback = function() {
      if (_this.state.polyline !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polyline);
      }
    };
    return _this;
  }
  Polyline2.prototype.componentDidMount = function() {
    var polyline = new google.maps.Polyline(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });
    this.setState(function setPolyline() {
      return {
        polyline
      };
    }, this.setPolylineCallback);
  };
  Polyline2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  };
  Polyline2.prototype.componentWillUnmount = function() {
    if (this.state.polyline !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polyline);
      }
      unregisterEvents(this.registeredEvents);
      this.state.polyline.setMap(null);
    }
  };
  Polyline2.prototype.render = function() {
    return null;
  };
  Polyline2.contextType = MapContext;
  return Polyline2;
})(reactExports.PureComponent);
var eventMap$a = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$a = {
  draggable: function(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable: function(instance, editable) {
    instance.setEditable(editable);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  path: function(instance, path) {
    instance.setPath(path);
  },
  paths: function(instance, paths) {
    instance.setPaths(paths);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  }
};
function PolygonFunctional(_a) {
  var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, paths = _a.paths, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
  var _e = reactExports.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
  var _f = reactExports.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
  var _g = reactExports.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
  var _h = reactExports.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
  var _j = reactExports.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
  var _k = reactExports.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
  var _l = reactExports.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
  var _m = reactExports.useState(null), clickListener = _m[0], setClickListener = _m[1];
  var _o = reactExports.useState(null), dragListener = _o[0], setDragListener = _o[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  reactExports.useEffect(function() {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  reactExports.useEffect(function() {
    if (typeof path !== "undefined" && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  reactExports.useEffect(function() {
    if (typeof paths !== "undefined" && instance !== null) {
      instance.setPaths(paths);
    }
  }, [instance, paths]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    var polygon = new google.maps.Polygon(__assign(__assign({}, options || {}), { map }));
    if (path) {
      polygon.setPath(path);
    }
    if (paths) {
      polygon.setPaths(paths);
    }
    if (typeof visible !== "undefined") {
      polygon.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      polygon.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      polygon.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polygon, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polygon, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polygon, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polygon, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polygon, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polygon, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polygon, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polygon, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polygon, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polygon, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polygon, "drag", onDrag));
    }
    setInstance(polygon);
    if (onLoad) {
      onLoad(polygon);
    }
    return function() {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polygon);
      }
      polygon.setMap(null);
    };
  }, []);
  return null;
}
reactExports.memo(PolygonFunctional);
/** @class */
(function(_super) {
  __extends(Polygon2, _super);
  function Polygon2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polygon: null
    };
    _this.setPolygonCallback = function() {
      if (_this.state.polygon !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polygon);
      }
    };
    return _this;
  }
  Polygon2.prototype.componentDidMount = function() {
    var polygon = new google.maps.Polygon(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: polygon
    });
    this.setState(function setPolygon() {
      return {
        polygon
      };
    }, this.setPolygonCallback);
  };
  Polygon2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.polygon !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps,
        nextProps: this.props,
        instance: this.state.polygon
      });
    }
  };
  Polygon2.prototype.componentWillUnmount = function() {
    if (this.state.polygon !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polygon);
      }
      unregisterEvents(this.registeredEvents);
      this.state.polygon && this.state.polygon.setMap(null);
    }
  };
  Polygon2.prototype.render = function() {
    return null;
  };
  Polygon2.contextType = MapContext;
  return Polygon2;
})(reactExports.PureComponent);
var eventMap$9 = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$9 = {
  bounds: function(instance, bounds) {
    instance.setBounds(bounds);
  },
  draggable: function(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable: function(instance, editable) {
    instance.setEditable(editable);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  }
};
function RectangleFunctional(_a) {
  var options = _a.options, bounds = _a.bounds, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onBoundsChanged = _a.onBoundsChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
  var _e = reactExports.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
  var _f = reactExports.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
  var _g = reactExports.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
  var _h = reactExports.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
  var _j = reactExports.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
  var _k = reactExports.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
  var _l = reactExports.useState(null), rightClickListener = _l[0], setRightClickListener = _l[1];
  var _m = reactExports.useState(null), clickListener = _m[0], setClickListener = _m[1];
  var _o = reactExports.useState(null), dragListener = _o[0], setDragListener = _o[1];
  var _p = reactExports.useState(null), boundsChangedListener = _p[0], setBoundsChangedListener = _p[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  reactExports.useEffect(function() {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  reactExports.useEffect(function() {
    if (typeof bounds !== "undefined" && instance !== null) {
      instance.setBounds(bounds);
    }
  }, [instance, bounds]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightClickListener !== null) {
        google.maps.event.removeListener(rightClickListener);
      }
      setRightClickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    if (instance && onBoundsChanged) {
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      setBoundsChangedListener(google.maps.event.addListener(instance, "bounds_changed", onBoundsChanged));
    }
  }, [onBoundsChanged]);
  reactExports.useEffect(function() {
    var rectangle = new google.maps.Rectangle(__assign(__assign({}, options || {}), { map }));
    if (typeof visible !== "undefined") {
      rectangle.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      rectangle.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      rectangle.setDraggable(draggable);
    }
    if (typeof bounds !== "undefined") {
      rectangle.setBounds(bounds);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(rectangle, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(rectangle, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(rectangle, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(rectangle, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(rectangle, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(rectangle, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(rectangle, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(rectangle, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightClickListener(google.maps.event.addListener(rectangle, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(rectangle, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(rectangle, "drag", onDrag));
    }
    if (onBoundsChanged) {
      setBoundsChangedListener(google.maps.event.addListener(rectangle, "bounds_changed", onBoundsChanged));
    }
    setInstance(rectangle);
    if (onLoad) {
      onLoad(rectangle);
    }
    return function() {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightClickListener !== null) {
        google.maps.event.removeListener(rightClickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      if (onUnmount) {
        onUnmount(rectangle);
      }
      rectangle.setMap(null);
    };
  }, []);
  return null;
}
reactExports.memo(RectangleFunctional);
/** @class */
(function(_super) {
  __extends(Rectangle2, _super);
  function Rectangle2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      rectangle: null
    };
    _this.setRectangleCallback = function() {
      if (_this.state.rectangle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.rectangle);
      }
    };
    return _this;
  }
  Rectangle2.prototype.componentDidMount = function() {
    var rectangle = new google.maps.Rectangle(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });
    this.setState(function setRectangle() {
      return {
        rectangle
      };
    }, this.setRectangleCallback);
  };
  Rectangle2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  };
  Rectangle2.prototype.componentWillUnmount = function() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }
      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  };
  Rectangle2.prototype.render = function() {
    return null;
  };
  Rectangle2.contextType = MapContext;
  return Rectangle2;
})(reactExports.PureComponent);
var eventMap$8 = {
  onCenterChanged: "center_changed",
  onRadiusChanged: "radius_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$8 = {
  center: function(instance, center) {
    instance.setCenter(center);
  },
  draggable: function(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable: function(instance, editable) {
    instance.setEditable(editable);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  radius: function(instance, radius) {
    instance.setRadius(radius);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions = {};
function CircleFunctional(_a) {
  var options = _a.options, center = _a.center, radius = _a.radius, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onCenterChanged = _a.onCenterChanged, onRadiusChanged = _a.onRadiusChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
  var _e = reactExports.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
  var _f = reactExports.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
  var _g = reactExports.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
  var _h = reactExports.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
  var _j = reactExports.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
  var _k = reactExports.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
  var _l = reactExports.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
  var _m = reactExports.useState(null), clickListener = _m[0], setClickListener = _m[1];
  var _o = reactExports.useState(null), dragListener = _o[0], setDragListener = _o[1];
  var _p = reactExports.useState(null), centerChangedListener = _p[0], setCenterChangedListener = _p[1];
  var _q = reactExports.useState(null), radiusChangedListener = _q[0], setRadiusChangedListener = _q[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  reactExports.useEffect(function() {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  reactExports.useEffect(function() {
    if (typeof radius === "number" && instance !== null) {
      instance.setRadius(radius);
    }
  }, [instance, radius]);
  reactExports.useEffect(function() {
    if (typeof center !== "undefined" && instance !== null) {
      instance.setCenter(center);
    }
  }, [instance, center]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  reactExports.useEffect(function() {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  reactExports.useEffect(function() {
    if (instance && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(instance, "center_changed", onCenterChanged));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onRadiusChanged) {
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      setRadiusChangedListener(google.maps.event.addListener(instance, "radius_changed", onRadiusChanged));
    }
  }, [onRadiusChanged]);
  reactExports.useEffect(function() {
    var circle = new google.maps.Circle(__assign(__assign({}, options || defaultOptions), { map }));
    if (typeof radius === "number") {
      circle.setRadius(radius);
    }
    if (typeof center !== "undefined") {
      circle.setCenter(center);
    }
    if (typeof radius === "number") {
      circle.setRadius(radius);
    }
    if (typeof visible !== "undefined") {
      circle.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      circle.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      circle.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(circle, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(circle, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(circle, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(circle, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(circle, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(circle, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(circle, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(circle, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(circle, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(circle, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(circle, "drag", onDrag));
    }
    if (onCenterChanged) {
      setCenterChangedListener(google.maps.event.addListener(circle, "center_changed", onCenterChanged));
    }
    if (onRadiusChanged) {
      setRadiusChangedListener(google.maps.event.addListener(circle, "radius_changed", onRadiusChanged));
    }
    setInstance(circle);
    if (onLoad) {
      onLoad(circle);
    }
    return function() {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      if (onUnmount) {
        onUnmount(circle);
      }
      circle.setMap(null);
    };
  }, []);
  return null;
}
reactExports.memo(CircleFunctional);
/** @class */
(function(_super) {
  __extends(Circle2, _super);
  function Circle2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      circle: null
    };
    _this.setCircleCallback = function() {
      if (_this.state.circle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.circle);
      }
    };
    return _this;
  }
  Circle2.prototype.componentDidMount = function() {
    var circle = new google.maps.Circle(__assign(__assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });
    this.setState(function setCircle() {
      return {
        circle
      };
    }, this.setCircleCallback);
  };
  Circle2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  };
  Circle2.prototype.componentWillUnmount = function() {
    var _a;
    if (this.state.circle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }
      unregisterEvents(this.registeredEvents);
      (_a = this.state.circle) === null || _a === void 0 ? void 0 : _a.setMap(null);
    }
  };
  Circle2.prototype.render = function() {
    return null;
  };
  Circle2.contextType = MapContext;
  return Circle2;
})(reactExports.PureComponent);
var eventMap$7 = {
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAddFeature: "addfeature",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
};
var updaterMap$7 = {
  add: function(instance, feature) {
    instance.add(feature);
  },
  addgeojson: function(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains: function(instance, feature) {
    instance.contains(feature);
  },
  foreach: function(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson: function(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle: function(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove: function(instance, feature) {
    instance.remove(feature);
  },
  revertstyle: function(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition: function(instance, controlPosition) {
    instance.setControlPosition(controlPosition);
  },
  controls: function(instance, controls) {
    instance.setControls(controls);
  },
  drawingmode: function(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  style: function(instance, style) {
    instance.setStyle(style);
  },
  togeojson: function(instance, callback) {
    instance.toGeoJson(callback);
  }
};
function DataFunctional(_a) {
  var options = _a.options, onClick = _a.onClick, onDblClick = _a.onDblClick, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onAddFeature = _a.onAddFeature, onRemoveFeature = _a.onRemoveFeature, onRemoveProperty = _a.onRemoveProperty, onSetGeometry = _a.onSetGeometry, onSetProperty = _a.onSetProperty, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  var _c = reactExports.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
  var _d = reactExports.useState(null), mousedownListener = _d[0], setMousedownListener = _d[1];
  var _e = reactExports.useState(null), mousemoveListener = _e[0], setMousemoveListener = _e[1];
  var _f = reactExports.useState(null), mouseoutListener = _f[0], setMouseoutListener = _f[1];
  var _g = reactExports.useState(null), mouseoverListener = _g[0], setMouseoverListener = _g[1];
  var _h = reactExports.useState(null), mouseupListener = _h[0], setMouseupListener = _h[1];
  var _j = reactExports.useState(null), rightclickListener = _j[0], setRightclickListener = _j[1];
  var _k = reactExports.useState(null), clickListener = _k[0], setClickListener = _k[1];
  var _l = reactExports.useState(null), addFeatureListener = _l[0], setAddFeatureListener = _l[1];
  var _m = reactExports.useState(null), removeFeatureListener = _m[0], setRemoveFeatureListener = _m[1];
  var _o = reactExports.useState(null), removePropertyListener = _o[0], setRemovePropertyListener = _o[1];
  var _p = reactExports.useState(null), setGeometryListener = _p[0], setSetGeometryListener = _p[1];
  var _q = reactExports.useState(null), setPropertyListener = _q[0], setSetPropertyListener = _q[1];
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  reactExports.useEffect(function() {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  reactExports.useEffect(function() {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  reactExports.useEffect(function() {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  reactExports.useEffect(function() {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  reactExports.useEffect(function() {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  reactExports.useEffect(function() {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  reactExports.useEffect(function() {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  reactExports.useEffect(function() {
    if (instance && onAddFeature) {
      if (addFeatureListener !== null) {
        google.maps.event.removeListener(addFeatureListener);
      }
      setAddFeatureListener(google.maps.event.addListener(instance, "addfeature", onAddFeature));
    }
  }, [onAddFeature]);
  reactExports.useEffect(function() {
    if (instance && onRemoveFeature) {
      if (removeFeatureListener !== null) {
        google.maps.event.removeListener(removeFeatureListener);
      }
      setRemoveFeatureListener(google.maps.event.addListener(instance, "removefeature", onRemoveFeature));
    }
  }, [onRemoveFeature]);
  reactExports.useEffect(function() {
    if (instance && onRemoveProperty) {
      if (removePropertyListener !== null) {
        google.maps.event.removeListener(removePropertyListener);
      }
      setRemovePropertyListener(google.maps.event.addListener(instance, "removeproperty", onRemoveProperty));
    }
  }, [onRemoveProperty]);
  reactExports.useEffect(function() {
    if (instance && onSetGeometry) {
      if (setGeometryListener !== null) {
        google.maps.event.removeListener(setGeometryListener);
      }
      setSetGeometryListener(google.maps.event.addListener(instance, "setgeometry", onSetGeometry));
    }
  }, [onSetGeometry]);
  reactExports.useEffect(function() {
    if (instance && onSetProperty) {
      if (setPropertyListener !== null) {
        google.maps.event.removeListener(setPropertyListener);
      }
      setSetPropertyListener(google.maps.event.addListener(instance, "setproperty", onSetProperty));
    }
  }, [onSetProperty]);
  reactExports.useEffect(function() {
    if (map !== null) {
      var data = new google.maps.Data(__assign(__assign({}, options || {}), { map }));
      if (onDblClick) {
        setDblclickListener(google.maps.event.addListener(data, "dblclick", onDblClick));
      }
      if (onMouseDown) {
        setMousedownListener(google.maps.event.addListener(data, "mousedown", onMouseDown));
      }
      if (onMouseMove) {
        setMousemoveListener(google.maps.event.addListener(data, "mousemove", onMouseMove));
      }
      if (onMouseOut) {
        setMouseoutListener(google.maps.event.addListener(data, "mouseout", onMouseOut));
      }
      if (onMouseOver) {
        setMouseoverListener(google.maps.event.addListener(data, "mouseover", onMouseOver));
      }
      if (onMouseUp) {
        setMouseupListener(google.maps.event.addListener(data, "mouseup", onMouseUp));
      }
      if (onRightClick) {
        setRightclickListener(google.maps.event.addListener(data, "rightclick", onRightClick));
      }
      if (onClick) {
        setClickListener(google.maps.event.addListener(data, "click", onClick));
      }
      if (onAddFeature) {
        setAddFeatureListener(google.maps.event.addListener(data, "addfeature", onAddFeature));
      }
      if (onRemoveFeature) {
        setRemoveFeatureListener(google.maps.event.addListener(data, "removefeature", onRemoveFeature));
      }
      if (onRemoveProperty) {
        setRemovePropertyListener(google.maps.event.addListener(data, "removeproperty", onRemoveProperty));
      }
      if (onSetGeometry) {
        setSetGeometryListener(google.maps.event.addListener(data, "setgeometry", onSetGeometry));
      }
      if (onSetProperty) {
        setSetPropertyListener(google.maps.event.addListener(data, "setproperty", onSetProperty));
      }
      setInstance(data);
      if (onLoad) {
        onLoad(data);
      }
    }
    return function() {
      if (instance) {
        if (dblclickListener !== null) {
          google.maps.event.removeListener(dblclickListener);
        }
        if (mousedownListener !== null) {
          google.maps.event.removeListener(mousedownListener);
        }
        if (mousemoveListener !== null) {
          google.maps.event.removeListener(mousemoveListener);
        }
        if (mouseoutListener !== null) {
          google.maps.event.removeListener(mouseoutListener);
        }
        if (mouseoverListener !== null) {
          google.maps.event.removeListener(mouseoverListener);
        }
        if (mouseupListener !== null) {
          google.maps.event.removeListener(mouseupListener);
        }
        if (rightclickListener !== null) {
          google.maps.event.removeListener(rightclickListener);
        }
        if (clickListener !== null) {
          google.maps.event.removeListener(clickListener);
        }
        if (addFeatureListener !== null) {
          google.maps.event.removeListener(addFeatureListener);
        }
        if (removeFeatureListener !== null) {
          google.maps.event.removeListener(removeFeatureListener);
        }
        if (removePropertyListener !== null) {
          google.maps.event.removeListener(removePropertyListener);
        }
        if (setGeometryListener !== null) {
          google.maps.event.removeListener(setGeometryListener);
        }
        if (setPropertyListener !== null) {
          google.maps.event.removeListener(setPropertyListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(DataFunctional);
/** @class */
(function(_super) {
  __extends(Data2, _super);
  function Data2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      data: null
    };
    _this.setDataCallback = function() {
      if (_this.state.data !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.data);
      }
    };
    return _this;
  }
  Data2.prototype.componentDidMount = function() {
    if (this.context !== null) {
      var data_1 = new google.maps.Data(__assign(__assign({}, this.props.options || {}), { map: this.context }));
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: {},
        nextProps: this.props,
        instance: data_1
      });
      this.setState(function() {
        return {
          data: data_1
        };
      }, this.setDataCallback);
    }
  };
  Data2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  };
  Data2.prototype.componentWillUnmount = function() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  };
  Data2.prototype.render = function() {
    return null;
  };
  Data2.contextType = MapContext;
  return Data2;
})(reactExports.PureComponent);
var eventMap$6 = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
};
var updaterMap$6 = {
  options: function(instance, options) {
    instance.setOptions(options);
  },
  url: function(instance, url) {
    instance.setUrl(url);
  },
  zIndex: function(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
/** @class */
(function(_super) {
  __extends(KmlLayer2, _super);
  function KmlLayer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      kmlLayer: null
    };
    _this.setKmlLayerCallback = function() {
      if (_this.state.kmlLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.kmlLayer);
      }
    };
    return _this;
  }
  KmlLayer2.prototype.componentDidMount = function() {
    var kmlLayer = new google.maps.KmlLayer(__assign(__assign({}, this.props.options), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });
    this.setState(function setLmlLayer() {
      return {
        kmlLayer
      };
    }, this.setKmlLayerCallback);
  };
  KmlLayer2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  };
  KmlLayer2.prototype.componentWillUnmount = function() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  };
  KmlLayer2.prototype.render = function() {
    return null;
  };
  KmlLayer2.contextType = MapContext;
  return KmlLayer2;
})(reactExports.PureComponent);
function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === "function" ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {
    x: 0,
    y: 0
  };
}
function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}
function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}
function ensureOfType(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
}
function ensureOfTypeBounds(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
}
function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
  if (ne && sw) {
    return {
      left: "".concat(sw.x + offset.x, "px"),
      top: "".concat(ne.y + offset.y, "px"),
      width: "".concat(ne.x - sw.x - offset.x, "px"),
      height: "".concat(sw.y - ne.y - offset.y, "px")
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
  if (point) {
    var x = point.x, y = point.y;
    return {
      left: "".concat(x + offset.x, "px"),
      top: "".concat(y + offset.y, "px")
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
  return bounds !== void 0 ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
}
function arePositionsEqual(currentPosition, previousPosition) {
  return currentPosition.left === previousPosition.left && currentPosition.top === previousPosition.top && currentPosition.width === previousPosition.height && currentPosition.height === previousPosition.height;
}
function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
  var Overlay = (
    /** @class */
    function(_super) {
      __extends(Overlay2, _super);
      function Overlay2(container2, pane2, position2, bounds2) {
        var _this = _super.call(this) || this;
        _this.container = container2;
        _this.pane = pane2;
        _this.position = position2;
        _this.bounds = bounds2;
        return _this;
      }
      Overlay2.prototype.onAdd = function() {
        var _a;
        var pane2 = (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a[this.pane];
        pane2 === null || pane2 === void 0 ? void 0 : pane2.appendChild(this.container);
      };
      Overlay2.prototype.draw = function() {
        var projection = this.getProjection();
        var offset = __assign({}, this.container ? getOffsetOverride(this.container, getPixelPositionOffset) : {
          x: 0,
          y: 0
        });
        var layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
        for (var _i = 0, _a = Object.entries(layoutStyles); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          this.container.style[key] = value;
        }
      };
      Overlay2.prototype.onRemove = function() {
        if (this.container.parentNode !== null) {
          this.container.parentNode.removeChild(this.container);
        }
      };
      return Overlay2;
    }(google.maps.OverlayView)
  );
  return new Overlay(container, pane, position, bounds);
}
function convertToLatLngString(latLngLike) {
  if (!latLngLike) {
    return "";
  }
  var latLng = latLngLike instanceof google.maps.LatLng ? latLngLike : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
  return latLng + "";
}
function convertToLatLngBoundsString(latLngBoundsLike) {
  if (!latLngBoundsLike) {
    return "";
  }
  var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds ? latLngBoundsLike : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
  return latLngBounds + "";
}
function OverlayViewFunctional(_a) {
  var position = _a.position, bounds = _a.bounds, mapPaneName = _a.mapPaneName, zIndex = _a.zIndex, onLoad = _a.onLoad, onUnmount = _a.onUnmount, getPixelPositionOffset = _a.getPixelPositionOffset, children = _a.children;
  var map = reactExports.useContext(MapContext);
  var container = reactExports.useMemo(function() {
    var div = document.createElement("div");
    div.style.position = "absolute";
    return div;
  }, []);
  var overlay = reactExports.useMemo(function() {
    return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
  }, [container, mapPaneName, position, bounds]);
  reactExports.useEffect(function() {
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(overlay);
    overlay === null || overlay === void 0 ? void 0 : overlay.setMap(map);
    return function() {
      onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(overlay);
      overlay === null || overlay === void 0 ? void 0 : overlay.setMap(null);
    };
  }, [map, overlay]);
  reactExports.useEffect(function() {
    container.style.zIndex = "".concat(zIndex);
  }, [zIndex, container]);
  return reactDomExports.createPortal(children, container);
}
reactExports.memo(OverlayViewFunctional);
/** @class */
(function(_super) {
  __extends(OverlayView2, _super);
  function OverlayView2(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: "absolute"
      }
    };
    _this.updatePane = function() {
      var mapPaneName = _this.props.mapPaneName;
      var mapPanes = _this.overlayView.getPanes();
      invariant$1(!!mapPaneName, "OverlayView requires props.mapPaneName but got %s", mapPaneName);
      if (mapPanes) {
        _this.setState({
          paneEl: mapPanes[mapPaneName]
        });
      } else {
        _this.setState({
          paneEl: null
        });
      }
    };
    _this.onAdd = function() {
      var _a, _b;
      _this.updatePane();
      (_b = (_a = _this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
    };
    _this.onPositionElement = function() {
      var _a;
      var mapCanvasProjection = _this.overlayView.getProjection();
      var offset = __assign({ x: 0, y: 0 }, _this.containerRef.current ? getOffsetOverride(_this.containerRef.current, _this.props.getPixelPositionOffset) : {});
      var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
      var left = (_a = _this.state.containerStyle, _a.left), top = _a.top, width = _a.width, height = _a.height;
      if (!arePositionsEqual(layoutStyles, { left, top, width, height })) {
        _this.setState({
          containerStyle: {
            top: layoutStyles.top || 0,
            left: layoutStyles.left || 0,
            width: layoutStyles.width || 0,
            height: layoutStyles.height || 0,
            position: "absolute"
          }
        });
      }
    };
    _this.draw = function() {
      _this.onPositionElement();
    };
    _this.onRemove = function() {
      var _a, _b;
      _this.setState(function() {
        return {
          paneEl: null
        };
      });
      (_b = (_a = _this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
    };
    _this.containerRef = reactExports.createRef();
    var overlayView = new google.maps.OverlayView();
    overlayView.onAdd = _this.onAdd;
    overlayView.draw = _this.draw;
    overlayView.onRemove = _this.onRemove;
    _this.overlayView = overlayView;
    return _this;
  }
  OverlayView2.prototype.componentDidMount = function() {
    this.overlayView.setMap(this.context);
  };
  OverlayView2.prototype.componentDidUpdate = function(prevProps) {
    var prevPositionString = convertToLatLngString(prevProps.position);
    var positionString = convertToLatLngString(this.props.position);
    var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
    var boundsString = convertToLatLngBoundsString(this.props.bounds);
    if (prevPositionString !== positionString || prevBoundsString !== boundsString) {
      this.overlayView.draw();
    }
    if (prevProps.mapPaneName !== this.props.mapPaneName) {
      this.updatePane();
    }
  };
  OverlayView2.prototype.componentWillUnmount = function() {
    this.overlayView.setMap(null);
  };
  OverlayView2.prototype.render = function() {
    var paneEl = this.state.paneEl;
    if (paneEl) {
      return reactDomExports.createPortal(jsxRuntimeExports.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: reactExports.Children.only(this.props.children) }), paneEl);
    } else {
      return null;
    }
  };
  OverlayView2.FLOAT_PANE = "floatPane";
  OverlayView2.MAP_PANE = "mapPane";
  OverlayView2.MARKER_LAYER = "markerLayer";
  OverlayView2.OVERLAY_LAYER = "overlayLayer";
  OverlayView2.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
  OverlayView2.contextType = MapContext;
  return OverlayView2;
})(reactExports.PureComponent);
function noop() {
  return;
}
var eventMap$5 = {
  onDblClick: "dblclick",
  onClick: "click"
};
var updaterMap$5 = {
  opacity: function(instance, opacity) {
    instance.setOpacity(opacity);
  }
};
function GroundOverlayFunctional(_a) {
  var url = _a.url, bounds = _a.bounds, options = _a.options, visible = _a.visible;
  var map = reactExports.useContext(MapContext);
  var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
  var groundOverlay = reactExports.useMemo(function() {
    var overlay = new google.maps.GroundOverlay(url, imageBounds, __assign({}, options));
    return overlay;
  }, []);
  reactExports.useEffect(function() {
    if (groundOverlay !== null) {
      groundOverlay.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (typeof url !== "undefined" && groundOverlay !== null) {
      groundOverlay.set("url", url);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, url]);
  reactExports.useEffect(function() {
    if (typeof visible !== "undefined" && groundOverlay !== null) {
      groundOverlay.setOpacity(visible ? 1 : 0);
    }
  }, [groundOverlay, visible]);
  reactExports.useEffect(function() {
    var newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
    if (typeof bounds !== "undefined" && groundOverlay !== null) {
      groundOverlay.set("bounds", newBounds);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, bounds]);
  return null;
}
reactExports.memo(GroundOverlayFunctional);
/** @class */
(function(_super) {
  __extends(GroundOverlay2, _super);
  function GroundOverlay2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      groundOverlay: null
    };
    _this.setGroundOverlayCallback = function() {
      if (_this.state.groundOverlay !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.groundOverlay);
      }
    };
    return _this;
  }
  GroundOverlay2.prototype.componentDidMount = function() {
    invariant$1(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
    var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, __assign(__assign({}, this.props.options), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });
    this.setState(function setGroundOverlay() {
      return {
        groundOverlay
      };
    }, this.setGroundOverlayCallback);
  };
  GroundOverlay2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  };
  GroundOverlay2.prototype.componentWillUnmount = function() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }
      this.state.groundOverlay.setMap(null);
    }
  };
  GroundOverlay2.prototype.render = function() {
    return null;
  };
  GroundOverlay2.defaultProps = {
    onLoad: noop
  };
  GroundOverlay2.contextType = MapContext;
  return GroundOverlay2;
})(reactExports.PureComponent);
var eventMap$4 = {};
var updaterMap$4 = {
  data: function(instance, data) {
    instance.setData(data);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  }
};
function HeatmapLayerFunctional(_a) {
  var data = _a.data, onLoad = _a.onLoad, onUnmount = _a.onUnmount, options = _a.options;
  var map = reactExports.useContext(MapContext);
  var _b = reactExports.useState(null), instance = _b[0], setInstance = _b[1];
  reactExports.useEffect(function() {
    if (!google.maps.visualization) {
      invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
    }
  }, []);
  reactExports.useEffect(function() {
    invariant$1(!!data, "data property is required in HeatmapLayer %s", data);
  }, [data]);
  reactExports.useEffect(function() {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  reactExports.useEffect(function() {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  reactExports.useEffect(function() {
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, options || {}), { data, map }));
    setInstance(heatmapLayer);
    if (onLoad) {
      onLoad(heatmapLayer);
    }
    return function() {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
reactExports.memo(HeatmapLayerFunctional);
/** @class */
(function(_super) {
  __extends(HeatmapLayer2, _super);
  function HeatmapLayer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      heatmapLayer: null
    };
    _this.setHeatmapLayerCallback = function() {
      if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.heatmapLayer);
      }
    };
    return _this;
  }
  HeatmapLayer2.prototype.componentDidMount = function() {
    invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
    invariant$1(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, this.props.options || {}), { data: this.props.data, map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });
    this.setState(function setHeatmapLayer() {
      return {
        heatmapLayer
      };
    }, this.setHeatmapLayerCallback);
  };
  HeatmapLayer2.prototype.componentDidUpdate = function(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  };
  HeatmapLayer2.prototype.componentWillUnmount = function() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  };
  HeatmapLayer2.prototype.render = function() {
    return null;
  };
  HeatmapLayer2.contextType = MapContext;
  return HeatmapLayer2;
})(reactExports.PureComponent);
var eventMap$3 = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$3 = {
  register: function(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links: function(instance, links) {
    instance.setLinks(links);
  },
  motionTracking: function(instance, motionTracking) {
    instance.setMotionTracking(motionTracking);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  pano: function(instance, pano) {
    instance.setPano(pano);
  },
  position: function(instance, position) {
    instance.setPosition(position);
  },
  pov: function(instance, pov) {
    instance.setPov(pov);
  },
  visible: function(instance, visible) {
    instance.setVisible(visible);
  },
  zoom: function(instance, zoom) {
    instance.setZoom(zoom);
  }
};
/** @class */
(function(_super) {
  __extends(StreetViewPanorama2, _super);
  function StreetViewPanorama2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      streetViewPanorama: null
    };
    _this.setStreetViewPanoramaCallback = function() {
      if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewPanorama);
      }
    };
    return _this;
  }
  StreetViewPanorama2.prototype.componentDidMount = function() {
    var _a, _b;
    var streetViewPanorama = (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getStreetView()) !== null && _b !== void 0 ? _b : null;
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });
    this.setState(function() {
      return {
        streetViewPanorama
      };
    }, this.setStreetViewPanoramaCallback);
  };
  StreetViewPanorama2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  };
  StreetViewPanorama2.prototype.componentWillUnmount = function() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }
      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  };
  StreetViewPanorama2.prototype.render = function() {
    return null;
  };
  StreetViewPanorama2.contextType = MapContext;
  return StreetViewPanorama2;
})(reactExports.PureComponent);
/** @class */
(function(_super) {
  __extends(StreetViewService2, _super);
  function StreetViewService2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      streetViewService: null
    };
    _this.setStreetViewServiceCallback = function() {
      if (_this.state.streetViewService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewService);
      }
    };
    return _this;
  }
  StreetViewService2.prototype.componentDidMount = function() {
    var streetViewService = new google.maps.StreetViewService();
    this.setState(function setStreetViewService() {
      return {
        streetViewService
      };
    }, this.setStreetViewServiceCallback);
  };
  StreetViewService2.prototype.componentWillUnmount = function() {
    if (this.state.streetViewService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.streetViewService);
    }
  };
  StreetViewService2.prototype.render = function() {
    return null;
  };
  StreetViewService2.contextType = MapContext;
  return StreetViewService2;
})(reactExports.PureComponent);
/** @class */
(function(_super) {
  __extends(DirectionsService2, _super);
  function DirectionsService2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      directionsService: null
    };
    _this.setDirectionsServiceCallback = function() {
      if (_this.state.directionsService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.directionsService);
      }
    };
    return _this;
  }
  DirectionsService2.prototype.componentDidMount = function() {
    invariant$1(!!this.props.options, "DirectionsService expected options object as parameter, but got %s", this.props.options);
    var directionsService = new google.maps.DirectionsService();
    this.setState(function setDirectionsService() {
      return {
        directionsService
      };
    }, this.setDirectionsServiceCallback);
  };
  DirectionsService2.prototype.componentDidUpdate = function() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  };
  DirectionsService2.prototype.componentWillUnmount = function() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  };
  DirectionsService2.prototype.render = function() {
    return null;
  };
  return DirectionsService2;
})(reactExports.PureComponent);
var eventMap$2 = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap$2 = {
  directions: function(instance, directions) {
    instance.setDirections(directions);
  },
  map: function(instance, map) {
    instance.setMap(map);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  panel: function(instance, panel) {
    instance.setPanel(panel);
  },
  routeIndex: function(instance, routeIndex) {
    instance.setRouteIndex(routeIndex);
  }
};
/** @class */
(function(_super) {
  __extends(DirectionsRenderer2, _super);
  function DirectionsRenderer2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      directionsRenderer: null
    };
    _this.setDirectionsRendererCallback = function() {
      if (_this.state.directionsRenderer !== null) {
        _this.state.directionsRenderer.setMap(_this.context);
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.directionsRenderer);
        }
      }
    };
    return _this;
  }
  DirectionsRenderer2.prototype.componentDidMount = function() {
    var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  };
  DirectionsRenderer2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  };
  DirectionsRenderer2.prototype.componentWillUnmount = function() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  };
  DirectionsRenderer2.prototype.render = function() {
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  };
  DirectionsRenderer2.contextType = MapContext;
  return DirectionsRenderer2;
})(reactExports.PureComponent);
/** @class */
(function(_super) {
  __extends(DistanceMatrixService2, _super);
  function DistanceMatrixService2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.state = {
      distanceMatrixService: null
    };
    _this.setDistanceMatrixServiceCallback = function() {
      if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.distanceMatrixService);
      }
    };
    return _this;
  }
  DistanceMatrixService2.prototype.componentDidMount = function() {
    invariant$1(!!this.props.options, "DistanceMatrixService expected options object as parameter, but go %s", this.props.options);
    var distanceMatrixService = new google.maps.DistanceMatrixService();
    this.setState(function setDistanceMatrixService() {
      return {
        distanceMatrixService
      };
    }, this.setDistanceMatrixServiceCallback);
  };
  DistanceMatrixService2.prototype.componentDidUpdate = function() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  };
  DistanceMatrixService2.prototype.componentWillUnmount = function() {
    if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.distanceMatrixService);
    }
  };
  DistanceMatrixService2.prototype.render = function() {
    return null;
  };
  return DistanceMatrixService2;
})(reactExports.PureComponent);
var eventMap$1 = {
  onPlacesChanged: "places_changed"
};
var updaterMap$1 = {
  bounds: function(instance, bounds) {
    instance.setBounds(bounds);
  }
};
/** @class */
(function(_super) {
  __extends(StandaloneSearchBox2, _super);
  function StandaloneSearchBox2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = reactExports.createRef();
    _this.state = {
      searchBox: null
    };
    _this.setSearchBoxCallback = function() {
      if (_this.state.searchBox !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.searchBox);
      }
    };
    return _this;
  }
  StandaloneSearchBox2.prototype.componentDidMount = function() {
    invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    if (this.containerElement !== null && this.containerElement.current !== null) {
      var input = this.containerElement.current.querySelector("input");
      if (input !== null) {
        var searchBox_1 = new google.maps.places.SearchBox(input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$1,
          eventMap: eventMap$1,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox_1
        });
        this.setState(function setSearchBox() {
          return {
            searchBox: searchBox_1
          };
        }, this.setSearchBoxCallback);
      }
    }
  };
  StandaloneSearchBox2.prototype.componentDidUpdate = function(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  };
  StandaloneSearchBox2.prototype.componentWillUnmount = function() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }
      unregisterEvents(this.registeredEvents);
    }
  };
  StandaloneSearchBox2.prototype.render = function() {
    return jsxRuntimeExports.jsx("div", { ref: this.containerElement, children: reactExports.Children.only(this.props.children) });
  };
  StandaloneSearchBox2.contextType = MapContext;
  return StandaloneSearchBox2;
})(reactExports.PureComponent);
var eventMap = {
  onPlaceChanged: "place_changed"
};
var updaterMap = {
  bounds: function(instance, bounds) {
    instance.setBounds(bounds);
  },
  restrictions: function(instance, restrictions) {
    instance.setComponentRestrictions(restrictions);
  },
  fields: function(instance, fields) {
    instance.setFields(fields);
  },
  options: function(instance, options) {
    instance.setOptions(options);
  },
  types: function(instance, types) {
    instance.setTypes(types);
  }
};
/** @class */
(function(_super) {
  __extends(Autocomplete2, _super);
  function Autocomplete2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = reactExports.createRef();
    _this.state = {
      autocomplete: null
    };
    _this.setAutocompleteCallback = function() {
      if (_this.state.autocomplete !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.autocomplete);
      }
    };
    return _this;
  }
  Autocomplete2.prototype.componentDidMount = function() {
    var _a;
    invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    var input = (_a = this.containerElement.current) === null || _a === void 0 ? void 0 : _a.querySelector("input");
    if (input) {
      var autocomplete_1 = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap,
        eventMap,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete_1
      });
      this.setState(function() {
        return {
          autocomplete: autocomplete_1
        };
      }, this.setAutocompleteCallback);
    }
  };
  Autocomplete2.prototype.componentDidUpdate = function(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap,
      eventMap,
      prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  };
  Autocomplete2.prototype.componentWillUnmount = function() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  };
  Autocomplete2.prototype.render = function() {
    return jsxRuntimeExports.jsx("div", { ref: this.containerElement, className: this.props.className, children: reactExports.Children.only(this.props.children) });
  };
  Autocomplete2.defaultProps = {
    className: ""
  };
  Autocomplete2.contextType = MapContext;
  return Autocomplete2;
})(reactExports.PureComponent);
const apiKey = "AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA";
const defaultZoom = 11;
const defaultCenter = { lat: 37.431489, lng: -122.163719 };
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: "S",
    draggable: false,
    title: "Stanford",
    www: "https://www.stanford.edu/"
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: "T",
    draggable: false,
    title: "Tesla",
    www: "https://www.tesla.com/"
  },
  {
    lat: 37.331681,
    lng: -122.0301,
    label: "A",
    draggable: false,
    title: "Apple",
    www: "https://www.apple.com/"
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: "F",
    draggable: false,
    title: "Facebook",
    www: "https://www.facebook.com/"
  }
];
const MarkerList = () => {
  return locations.map((location, index) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MarkerWithInfoWindow, { location }, index.toString());
  });
};
const MarkerWithInfoWindow = ({ location }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Marker,
    {
      onClick: () => setIsOpen(!isOpen),
      position: location,
      title: location.title,
      label: location.label,
      children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoWindow, { onCloseClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: location.www, target: "_blank", children: location.title }) })
    }
  );
};
const GoogleMapsComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey
  });
  return isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(GoogleMap, { mapContainerStyle: { height: `400px` }, center: defaultCenter, zoom: defaultZoom, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarkerList, { locations }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
  ] });
};
const GoogleMaps = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
      "React Google Maps ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProBadge, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleMapsComponent, {}) })
  ] });
};
export {
  GoogleMaps as default
};
