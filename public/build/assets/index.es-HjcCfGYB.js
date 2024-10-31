import { r as reactExports, R as React$1, f as ReactDOM, d as reactDomExports } from "./client-DnTwIhck.js";
var define_process_env_default$1 = {};
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t2) {
    for (var s3, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s3 = arguments[i2];
      for (var p in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p))
          t2[p] = s3[p];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
function __rest$1(s3, e2) {
  var t2 = {};
  for (var p in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p) && e2.indexOf(p) < 0)
      t2[p] = s3[p];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s3); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p[i2]))
        t2[p[i2]] = s3[p[i2]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs$1(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var propTypes$1 = { exports: {} };
var ReactPropTypesSecret_1$1;
var hasRequiredReactPropTypesSecret$1;
function requireReactPropTypesSecret$1() {
  if (hasRequiredReactPropTypesSecret$1)
    return ReactPropTypesSecret_1$1;
  hasRequiredReactPropTypesSecret$1 = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1$1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1$1;
}
var factoryWithThrowingShims$1;
var hasRequiredFactoryWithThrowingShims$1;
function requireFactoryWithThrowingShims$1() {
  if (hasRequiredFactoryWithThrowingShims$1)
    return factoryWithThrowingShims$1;
  hasRequiredFactoryWithThrowingShims$1 = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret$1();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims$1 = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims$1;
}
{
  propTypes$1.exports = requireFactoryWithThrowingShims$1()();
}
var propTypesExports$1 = propTypes$1.exports;
var PropTypes$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(propTypesExports$1);
var classnames$1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames$1);
var classnamesExports$1 = classnames$1.exports;
var classNames$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(classnamesExports$1);
var CAccordionContext = reactExports.createContext({});
var CAccordion = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, activeItemKey = _a2.activeItemKey, _b2 = _a2.alwaysOpen, alwaysOpen = _b2 === void 0 ? false : _b2, className = _a2.className, flush = _a2.flush, rest = __rest$1(_a2, ["children", "activeItemKey", "alwaysOpen", "className", "flush"]);
  var _c2 = reactExports.useState(activeItemKey), _activeItemKey = _c2[0], setActiveKey = _c2[1];
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("accordion", { "accordion-flush": flush }, className) }, rest, { ref }),
    React$1.createElement(CAccordionContext.Provider, { value: { _activeItemKey, alwaysOpen, setActiveKey } }, children)
  );
});
CAccordion.propTypes = {
  alwaysOpen: PropTypes$1.bool,
  activeItemKey: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  flush: PropTypes$1.bool
};
CAccordion.displayName = "CAccordion";
var CAccordionItemContext = reactExports.createContext({});
var CAccordionItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, itemKey = _a2.itemKey, rest = __rest$1(_a2, ["children", "className", "itemKey"]);
  var _itemKey = reactExports.useRef(itemKey !== null && itemKey !== void 0 ? itemKey : Math.random().toString(36).slice(2, 11));
  var _b2 = reactExports.useContext(CAccordionContext), _activeItemKey = _b2._activeItemKey, alwaysOpen = _b2.alwaysOpen, setActiveKey = _b2.setActiveKey;
  var _c2 = reactExports.useState(Boolean(_activeItemKey === _itemKey.current)), visible = _c2[0], setVisible = _c2[1];
  reactExports.useEffect(function() {
    !alwaysOpen && visible && setActiveKey(_itemKey.current);
  }, [visible]);
  reactExports.useEffect(function() {
    setVisible(Boolean(_activeItemKey === _itemKey.current));
  }, [_activeItemKey]);
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("accordion-item", className) }, rest, { ref }),
    React$1.createElement(CAccordionItemContext.Provider, { value: { setVisible, visible } }, children)
  );
});
CAccordionItem.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  itemKey: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])
};
CAccordionItem.displayName = "CAccordionItem";
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
var config = {
  disabled: false
};
var TransitionGroupContext = React$1.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React$1.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return addClass(node, c2);
  });
};
var removeClass = function removeClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return removeClass$1(node, c2);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);
    return /* @__PURE__ */ React$1.createElement(Transition$1, _extends$1({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React$1.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = {};
var CSSTransition$1 = CSSTransition;
var useDebouncedCallback = function(callback, delay) {
  var timeout2 = reactExports.useRef();
  return reactExports.useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var handler = function() {
      clearTimeout(timeout2.current);
      callback.apply(void 0, args);
    };
    clearTimeout(timeout2.current);
    timeout2.current = setTimeout(handler, delay);
  }, [callback, delay]);
};
function useForkedRef() {
  var refs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }
  return reactExports.useMemo(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node) {
      refs.forEach(function(ref) {
        assignRef(ref, node);
      });
    };
  }, refs);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (_a2) {
      throw new Error('Cannot assign value "'.concat(value, '" to ref "').concat(ref, '"'));
    }
  }
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
var useIsVisible = function(ref) {
  var _a2 = reactExports.useState(false), isIntersecting = _a2[0], setIntersecting = _a2[1];
  reactExports.useEffect(function() {
    var observer = new IntersectionObserver(function(_a3) {
      var entry = _a3[0];
      return setIntersecting(entry.isIntersecting);
    });
    ref.current && observer.observe(ref.current);
    return function() {
      return observer.disconnect();
    };
  }, []);
  return isIntersecting;
};
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y3 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y3,
    right: x2 + width,
    bottom: y3 + height,
    left: x2,
    x: x2,
    y: y3
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox2 = /firefox/i.test(getUAString());
  var isIE2 = /Trident/i.test(getUAString());
  if (isIE2 && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox2 && css.willChange === "filter" || isFirefox2 && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y3 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y3 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y3 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y3
  }) : {
    x: x2,
    y: y3
  };
  x2 = _ref3.x;
  y3 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y3 -= offsetY - popperRect.height;
      y3 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y3
  }, getWindow(popper2)) : {
    x: x2,
    y: y3
  };
  x2 = _ref4.x;
  y3 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y3 + "px)" : "translate3d(" + x2 + "px, " + y3 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y3 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y3
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y3 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y3
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a3, b2) {
    return overflows[a3] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y3 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y3;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
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
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m3) {
          return m3.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var getTransitionDurationFromElement = function(element) {
  if (!element) {
    return 0;
  }
  var _a2 = window.getComputedStyle(element), transitionDuration = _a2.transitionDuration, transitionDelay = _a2.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1e3;
};
var execute = function(callback) {
  if (typeof callback === "function") {
    callback();
  }
};
var triggerTransitionEnd = function(element) {
  element.dispatchEvent(new Event("transitionend"));
};
var executeAfterTransition = function(callback, transitionElement, waitForTransition) {
  if (waitForTransition === void 0) {
    waitForTransition = true;
  }
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;
  var handler = function(_a2) {
    var target = _a2.target;
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener("transitionend", handler);
    execute(callback);
  };
  transitionElement.addEventListener("transitionend", handler);
  setTimeout(function() {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var isRTL = function(element) {
  if (typeof document !== "undefined" && document.documentElement.dir === "rtl") {
    return true;
  }
  if (element) {
    return element.closest('[dir="rtl"]') !== null;
  }
  return false;
};
var getRTLPlacement = function(placement, element) {
  switch (placement) {
    case "right": {
      return isRTL(element) ? "left" : "right";
    }
    case "left": {
      return isRTL(element) ? "right" : "left";
    }
    default: {
      return placement;
    }
  }
};
var isInViewport = function(element) {
  var rect = element.getBoundingClientRect();
  return Math.floor(rect.top) >= 0 && Math.floor(rect.left) >= 0 && Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
};
var isObjectInArray = function(array, item, ignore) {
  if (ignore === void 0) {
    ignore = [];
  }
  return array.some(function(_item) {
    var result = true;
    for (var key in item) {
      if (!ignore.includes(key) && item[key] !== _item[key]) {
        result = false;
        break;
      }
    }
    return result;
  });
};
var usePopper = function() {
  var _popper = reactExports.useRef();
  var el = reactExports.useRef();
  var initPopper = function(reference2, popper2, options) {
    _popper.current = createPopper(reference2, popper2, options);
    el.current = popper2;
  };
  var destroyPopper = function() {
    var popperInstance = _popper.current;
    if (popperInstance && el.current) {
      executeAfterTransition(function() {
        popperInstance.destroy();
      }, el.current);
    }
    _popper.current = void 0;
  };
  return {
    popper: _popper.current,
    initPopper,
    destroyPopper
  };
};
var useStateWithCallback = function(initialState, handler, runHandler) {
  var _a2 = reactExports.useState(initialState), state = _a2[0], setState = _a2[1];
  handler && reactExports.useEffect(function() {
    runHandler && handler(state);
  }, [state]);
  return [state, setState];
};
var CCollapse = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, horizontal = _a2.horizontal, onHide = _a2.onHide, onShow = _a2.onShow, visible = _a2.visible, rest = __rest$1(_a2, ["children", "className", "horizontal", "onHide", "onShow", "visible"]);
  var collapseRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, collapseRef);
  var _b2 = reactExports.useState(), height = _b2[0], setHeight = _b2[1];
  var _c2 = reactExports.useState(), width = _c2[0], setWidth = _c2[1];
  var onEntering = function() {
    onShow && onShow();
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onEntered = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExit = function() {
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onExiting = function() {
    onHide && onHide();
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExited = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  return React$1.createElement(CSSTransition$1, { in: visible, nodeRef: collapseRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 350 }, function(state) {
    var currentHeight = height === 0 ? null : { height };
    var currentWidth = width === 0 ? null : { width };
    return React$1.createElement("div", __assign$1({ className: classNames$1(className, {
      "collapse-horizontal": horizontal,
      collapsing: state === "entering" || state === "exiting",
      "collapse show": state === "entered",
      collapse: state === "exited"
    }), style: __assign$1(__assign$1({}, currentHeight), currentWidth) }, rest, { ref: forkedRef }), children);
  });
});
CCollapse.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  horizontal: PropTypes$1.bool,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  visible: PropTypes$1.bool
};
CCollapse.displayName = "CCollapse";
var CAccordionBody = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var visible = reactExports.useContext(CAccordionItemContext).visible;
  return React$1.createElement(
    CCollapse,
    { className: "accordion-collapse", visible },
    React$1.createElement("div", __assign$1({ className: classNames$1("accordion-body", className) }, rest, { ref }), children)
  );
});
CAccordionBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CAccordionBody.displayName = "CAccordionBody";
var CAccordionButton = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var _b2 = reactExports.useContext(CAccordionItemContext), visible = _b2.visible, setVisible = _b2.setVisible;
  return React$1.createElement("button", __assign$1({ type: "button", className: classNames$1("accordion-button", { collapsed: !visible }, className), "aria-expanded": !visible, onClick: function() {
    return setVisible(!visible);
  } }, rest, { ref }), children);
});
CAccordionButton.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CAccordionButton.displayName = "CAccordionButton";
var CAccordionHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("accordion-header", className) }, rest, { ref }),
    React$1.createElement(CAccordionButton, null, children)
  );
});
CAccordionHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CAccordionHeader.displayName = "CAccordionHeader";
var CCloseButton = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, disabled = _a2.disabled, white = _a2.white, rest = __rest$1(_a2, ["className", "disabled", "white"]);
  return React$1.createElement("button", __assign$1({ type: "button", className: classNames$1("btn", "btn-close", {
    "btn-close-white": white
  }, disabled, className), "aria-label": "Close", disabled }, rest, { ref }));
});
CCloseButton.propTypes = {
  className: PropTypes$1.string,
  disabled: PropTypes$1.bool,
  white: PropTypes$1.bool
};
CCloseButton.displayName = "CCloseButton";
var colorPropType = PropTypes$1.oneOfType([
  PropTypes$1.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  PropTypes$1.string
]);
var fallbackPlacementsPropType = PropTypes$1.oneOfType([
  PropTypes$1.arrayOf(PropTypes$1.oneOf(["top", "bottom", "right", "left"]).isRequired),
  PropTypes$1.oneOf(["top", "bottom", "right", "left"])
]);
var gradientsPropType = PropTypes$1.oneOf([
  "primary-gradient",
  "secondary-gradient",
  "success-gradient",
  "danger-gradient",
  "warning-gradient",
  "info-gradient",
  "dark-gradient",
  "light-gradient"
]);
var placementPropType = PropTypes$1.oneOf([
  "auto",
  "auto-start",
  "auto-end",
  "top-end",
  "top",
  "top-start",
  "bottom-end",
  "bottom",
  "bottom-start",
  "right-start",
  "right",
  "right-end",
  "left-start",
  "left",
  "left-end"
]);
var shapePropType = PropTypes$1.oneOfType([
  PropTypes$1.oneOf([
    "rounded",
    "rounded-top",
    "rounded-end",
    "rounded-bottom",
    "rounded-start",
    "rounded-circle",
    "rounded-pill",
    "rounded-0",
    "rounded-1",
    "rounded-2",
    "rounded-3"
  ]),
  PropTypes$1.string
]);
var textColorsPropType = PropTypes$1.oneOfType([
  colorPropType,
  PropTypes$1.oneOf(["white", "muted"]),
  PropTypes$1.string
]);
var triggerPropType = PropTypes$1.oneOfType([
  PropTypes$1.arrayOf(PropTypes$1.oneOf(["hover", "focus", "click"]).isRequired),
  PropTypes$1.oneOf(["hover", "focus", "click"])
]);
var CAlert = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.color, color = _b2 === void 0 ? "primary" : _b2, dismissible = _a2.dismissible, variant = _a2.variant, _c2 = _a2.visible, visible = _c2 === void 0 ? true : _c2, onClose = _a2.onClose, rest = __rest$1(_a2, ["children", "className", "color", "dismissible", "variant", "visible", "onClose"]);
  var alertRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, alertRef);
  var _d2 = reactExports.useState(visible), _visible = _d2[0], setVisible = _d2[1];
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  return React$1.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: alertRef, onExit: onClose, timeout: 150, unmountOnExit: true }, function(state) {
    return React$1.createElement(
      "div",
      __assign$1({ className: classNames$1("alert", variant === "solid" ? "bg-".concat(color, " text-white") : "alert-".concat(color), {
        "alert-dismissible fade": dismissible,
        show: state === "entered"
      }, className), role: "alert" }, rest, { ref: forkedRef }),
      children,
      dismissible && React$1.createElement(CCloseButton, { onClick: function() {
        return setVisible(false);
      } })
    );
  });
});
CAlert.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType.isRequired,
  dismissible: PropTypes$1.bool,
  onClose: PropTypes$1.func,
  variant: PropTypes$1.string,
  visible: PropTypes$1.bool
};
CAlert.displayName = "CAlert";
var CAlertHeading = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "h4" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("alert-heading", className) }, rest, { ref }), children);
});
CAlertHeading.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CAlertHeading.displayName = "CAlertHeading";
var CLink = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, active = _a2.active, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "a" : _b2, disabled = _a2.disabled, rest = __rest$1(_a2, ["children", "active", "className", "component", "disabled"]);
  return React$1.createElement(
    Component,
    __assign$1({
      // TODO: remove duplicated classes ex. `active active` in `<CListGroupItem>`
      className: classNames$1(className, { active, disabled })
    }, active && { "aria-current": "page" }, Component === "a" && disabled && { "aria-disabled": true, tabIndex: -1 }, (Component === "a" || Component === "button") && {
      onClick: function(event) {
        event.preventDefault;
        !disabled && rest.onClick && rest.onClick(event);
      }
    }, { disabled }, rest, { ref }),
    children
  );
});
CLink.propTypes = {
  active: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  disabled: PropTypes$1.bool
};
CLink.displayName = "CLink";
var CAlertLink = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement(CLink, __assign$1({ className: classNames$1("alert-link", className) }, rest, { ref }), children);
});
CAlertLink.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CAlertLink.displayName = "CAlertLink";
var CAvatar = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, shape = _a2.shape, size = _a2.size, src = _a2.src, status = _a2.status, textColor = _a2.textColor, rest = __rest$1(_a2, ["children", "className", "color", "shape", "size", "src", "status", "textColor"]);
  var statusClassName = status && classNames$1("avatar-status", "bg-".concat(status));
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("avatar", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["avatar-".concat(size)] = size, _b2["text-".concat(textColor)] = textColor, _b2), shape, className) }, rest, { ref }),
    src ? React$1.createElement("img", { src, className: "avatar-img" }) : children,
    status && React$1.createElement("span", { className: statusClassName })
  );
});
CAvatar.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  shape: shapePropType,
  size: PropTypes$1.string,
  src: PropTypes$1.string,
  status: PropTypes$1.string,
  textColor: textColorsPropType
};
CAvatar.displayName = "CAvatar";
var CBackdrop = reactExports.forwardRef(function(_a2, ref) {
  var _b2 = _a2.className, className = _b2 === void 0 ? "modal-backdrop" : _b2, visible = _a2.visible, rest = __rest$1(_a2, ["className", "visible"]);
  var backdropRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, backdropRef);
  return React$1.createElement(Transition$1, { in: visible, mountOnEnter: true, nodeRef: backdropRef, timeout: 150, unmountOnExit: true }, function(state) {
    return React$1.createElement("div", __assign$1({ className: classNames$1(className, "fade", {
      show: state === "entered"
    }) }, rest, { ref: forkedRef }));
  });
});
CBackdrop.propTypes = {
  className: PropTypes$1.string,
  visible: PropTypes$1.bool
};
CBackdrop.displayName = "CBackdrop";
var CBadge = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, _c2 = _a2.component, Component = _c2 === void 0 ? "span" : _c2, position = _a2.position, shape = _a2.shape, size = _a2.size, textColor = _a2.textColor, rest = __rest$1(_a2, ["children", "className", "color", "component", "position", "shape", "size", "textColor"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("badge", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["position-absolute translate-middle"] = position, _b2["top-0"] = position === null || position === void 0 ? void 0 : position.includes("top"), _b2["top-100"] = position === null || position === void 0 ? void 0 : position.includes("bottom"), _b2["start-100"] = position === null || position === void 0 ? void 0 : position.includes("end"), _b2["start-0"] = position === null || position === void 0 ? void 0 : position.includes("start"), _b2["badge-".concat(size)] = size, _b2["text-".concat(textColor)] = textColor, _b2), shape, className) }, rest, { ref }), children);
});
CBadge.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: PropTypes$1.oneOfType([colorPropType, gradientsPropType]),
  component: PropTypes$1.string,
  position: PropTypes$1.oneOf(["top-start", "top-end", "bottom-end", "bottom-start"]),
  shape: shapePropType,
  size: PropTypes$1.oneOf(["sm"]),
  textColor: textColorsPropType
};
CBadge.displayName = "CBadge";
var CBreadcrumb = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement(
    "nav",
    { "aria-label": "breadcrumb" },
    React$1.createElement("ol", __assign$1({ className: classNames$1("breadcrumb", className) }, rest, { ref }), children)
  );
});
CBreadcrumb.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CBreadcrumb.displayName = "CBreadcrumb";
var CBreadcrumbItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, active = _a2.active, className = _a2.className, href = _a2.href, rest = __rest$1(_a2, ["children", "active", "className", "href"]);
  return React$1.createElement("li", __assign$1({ className: classNames$1("breadcrumb-item", {
    active
  }, className) }, active && { "aria-current": "page" }, rest, { ref }), href ? React$1.createElement(CLink, { href }, children) : children);
});
CBreadcrumbItem.propTypes = {
  active: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  href: PropTypes$1.string
};
CBreadcrumbItem.displayName = "CBreadcrumbItem";
var CButton = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, _c2 = _a2.color, color = _c2 === void 0 ? "primary" : _c2, _d2 = _a2.component, component = _d2 === void 0 ? "button" : _d2, shape = _a2.shape, size = _a2.size, _e2 = _a2.type, type = _e2 === void 0 ? "button" : _e2, variant = _a2.variant, rest = __rest$1(_a2, ["children", "className", "color", "component", "shape", "size", "type", "variant"]);
  return React$1.createElement(CLink, __assign$1({ component: rest.href ? "a" : component, type, className: classNames$1("btn", variant ? "btn-".concat(variant, "-").concat(color) : "btn-".concat(color), (_b2 = {}, _b2["btn-".concat(size)] = size, _b2), shape, className) }, rest, { ref }), children);
});
CButton.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  component: PropTypes$1.elementType,
  shape: PropTypes$1.string,
  size: PropTypes$1.oneOf(["sm", "lg"]),
  type: PropTypes$1.oneOf(["button", "submit", "reset"]),
  variant: PropTypes$1.oneOf(["outline", "ghost"])
};
CButton.displayName = "CButton";
var CButtonToolbar = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("btn-toolbar", className) }, rest, { ref }), children);
});
CButtonToolbar.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CButtonToolbar.displayName = "CButtonToolbar";
var CButtonGroup = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, size = _a2.size, vertical = _a2.vertical, rest = __rest$1(_a2, ["children", "className", "size", "vertical"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1(vertical ? "btn-group-vertical" : "btn-group", (_b2 = {}, _b2["btn-group-".concat(size)] = size, _b2), className) }, rest, { ref }), children);
});
CButtonGroup.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  size: PropTypes$1.oneOf(["sm", "lg"]),
  vertical: PropTypes$1.bool
};
CButtonGroup.displayName = "CButtonGroup";
var CCallout = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "className", "color"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("callout", (_b2 = {}, _b2["callout-".concat(color)] = color, _b2), className) }, rest, { ref }), children);
});
CCallout.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CCallout.displayName = "CCallout";
var CCard = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, textColor = _a2.textColor, rest = __rest$1(_a2, ["children", "className", "color", "textColor"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("card", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["text-".concat(textColor)] = textColor, _b2), className) }, rest, { ref }), children);
});
CCard.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: PropTypes$1.oneOfType([colorPropType, gradientsPropType]),
  textColor: PropTypes$1.string
};
CCard.displayName = "CCard";
var CCardBody = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("card-body", className) }, rest, { ref }), children);
});
CCardBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CCardBody.displayName = "CCardBody";
var CCardFooter = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("card-footer", className) }, rest, { ref }), children);
});
CCardFooter.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CCardFooter.displayName = "CCardFooter";
var CCardGroup = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("card-group", className) }, rest, { ref }), children);
});
CCardGroup.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CCardGroup.displayName = "CCardGroup";
var CCardHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "div" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("card-header", className) }, rest, { ref }), children);
});
CCardHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CCardHeader.displayName = "CCardHeader";
var CCardImage = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "img" : _b2, orientation = _a2.orientation, rest = __rest$1(_a2, ["children", "className", "component", "orientation"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1(orientation ? "card-img-".concat(orientation) : "card-img", className) }, rest, { ref }), children);
});
CCardImage.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  orientation: PropTypes$1.oneOf(["top", "bottom"])
};
CCardImage.displayName = "CCardImage";
var CCardImageOverlay = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("card-img-overlay", className) }, rest, { ref }), children);
});
CCardImageOverlay.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CCardImageOverlay.displayName = "CCardImageOverlay";
var CCardLink = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement(CLink, __assign$1({ className: classNames$1("card-link", className) }, rest, { ref }), children);
});
CCardLink.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CCardLink.displayName = "CCardLink";
var CCardSubtitle = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "h6" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("card-subtitle", className) }, rest, { ref }), children);
});
CCardSubtitle.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CCardSubtitle.displayName = "CCardSubtitle";
var CCardText = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "p" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("card-text", className) }, rest, { ref }), children);
});
CCardText.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CCardText.displayName = "CCardText";
var CCardTitle = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "h5" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("card-title", className) }, rest, { ref }), children);
});
CCardTitle.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CCardTitle.displayName = "CCardTitle";
var CCarouselContext = reactExports.createContext({});
var CCarousel = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.activeIndex, activeIndex = _b2 === void 0 ? 0 : _b2, className = _a2.className, controls = _a2.controls, dark = _a2.dark, indicators = _a2.indicators, _c2 = _a2.interval, interval = _c2 === void 0 ? 5e3 : _c2, onSlid = _a2.onSlid, onSlide = _a2.onSlide, _d2 = _a2.pause, pause = _d2 === void 0 ? "hover" : _d2, _e2 = _a2.touch, touch = _e2 === void 0 ? true : _e2, transition = _a2.transition, _f2 = _a2.wrap, wrap = _f2 === void 0 ? true : _f2, rest = __rest$1(_a2, ["children", "activeIndex", "className", "controls", "dark", "indicators", "interval", "onSlid", "onSlide", "pause", "touch", "transition", "wrap"]);
  var carouselRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, carouselRef);
  var data = reactExports.useRef({}).current;
  var _g2 = reactExports.useState(activeIndex), active = _g2[0], setActive = _g2[1];
  var _h2 = reactExports.useState(false), animating = _h2[0], setAnimating = _h2[1];
  var _j2 = reactExports.useState(), customInterval = _j2[0], setCustomInterval = _j2[1];
  var _k2 = reactExports.useState("next"), direction = _k2[0], setDirection = _k2[1];
  var _l2 = reactExports.useState(0), itemsNumber = _l2[0], setItemsNumber = _l2[1];
  var _m2 = reactExports.useState(null), touchPosition = _m2[0], setTouchPosition = _m2[1];
  var _o = reactExports.useState(), visible = _o[0], setVisible = _o[1];
  reactExports.useEffect(function() {
    setItemsNumber(reactExports.Children.toArray(children).length);
  });
  reactExports.useEffect(function() {
    visible && cycle();
  }, [visible]);
  reactExports.useEffect(function() {
    !animating && cycle();
    !animating && onSlid && onSlid(active, direction);
    animating && onSlide && onSlide(active, direction);
  }, [animating]);
  reactExports.useEffect(function() {
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  var cycle = function() {
    _pause();
    if (!wrap && active === itemsNumber - 1) {
      return;
    }
    if (typeof interval === "number") {
      data.timeout = setTimeout(function() {
        return nextItemWhenVisible();
      }, typeof customInterval === "number" ? customInterval : interval);
    }
  };
  var _pause = function() {
    return pause && data.timeout && clearTimeout(data.timeout);
  };
  var nextItemWhenVisible = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      if (animating) {
        return;
      }
      handleControlClick("next");
    }
  };
  var handleControlClick = function(direction2) {
    if (animating) {
      return;
    }
    setDirection(direction2);
    if (direction2 === "next") {
      active === itemsNumber - 1 ? setActive(0) : setActive(active + 1);
    } else {
      active === 0 ? setActive(itemsNumber - 1) : setActive(active - 1);
    }
  };
  var handleIndicatorClick = function(index) {
    if (active === index) {
      return;
    }
    if (active < index) {
      setDirection("next");
      setActive(index);
      return;
    }
    if (active > index) {
      setDirection("prev");
      setActive(index);
    }
  };
  var handleScroll = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  var handleTouchMove = function(e2) {
    var touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    var currentTouch = e2.touches[0].clientX;
    var diff = touchDown - currentTouch;
    if (diff > 5) {
      handleControlClick("next");
    }
    if (diff < -5) {
      handleControlClick("prev");
    }
    setTouchPosition(null);
  };
  var handleTouchStart = function(e2) {
    var touchDown = e2.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("carousel slide", {
      "carousel-dark": dark,
      "carousel-fade": transition === "crossfade"
    }, className), onMouseEnter: _pause, onMouseLeave: cycle }, touch && { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove }, rest, { ref: forkedRef }),
    React$1.createElement(
      CCarouselContext.Provider,
      { value: {
        setAnimating,
        setCustomInterval
      } },
      indicators && React$1.createElement("ol", { className: "carousel-indicators" }, Array.from({ length: itemsNumber }, function(_, i2) {
        return i2;
      }).map(function(index) {
        return React$1.createElement("li", { key: "indicator".concat(index), onClick: function() {
          !animating && handleIndicatorClick(index);
        }, className: active === index ? "active" : "", "data-coreui-target": "" });
      })),
      React$1.createElement("div", { className: "carousel-inner" }, reactExports.Children.map(children, function(child, index) {
        if (React$1.isValidElement(child)) {
          return React$1.cloneElement(child, {
            active: active === index ? true : false,
            direction,
            key: index
          });
        }
        return;
      })),
      controls && React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(
          "button",
          { className: "carousel-control-prev", onClick: function() {
            return handleControlClick("prev");
          } },
          React$1.createElement("span", { className: "carousel-control-prev-icon", "aria-label": "prev" })
        ),
        React$1.createElement(
          "button",
          { className: "carousel-control-next", onClick: function() {
            return handleControlClick("next");
          } },
          React$1.createElement("span", { className: "carousel-control-next-icon", "aria-label": "next" })
        )
      )
    )
  );
});
CCarousel.propTypes = {
  activeIndex: PropTypes$1.number,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  controls: PropTypes$1.bool,
  dark: PropTypes$1.bool,
  indicators: PropTypes$1.bool,
  interval: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.number]),
  onSlid: PropTypes$1.func,
  onSlide: PropTypes$1.func,
  pause: PropTypes$1.oneOf([false, "hover"]),
  touch: PropTypes$1.bool,
  transition: PropTypes$1.oneOf(["slide", "crossfade"]),
  wrap: PropTypes$1.bool
};
CCarousel.displayName = "CCarousel";
var CCarouselCaption = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, rest = __rest$1(_a2, ["className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("carousel-caption", className) }, rest, { ref }));
});
CCarouselCaption.propTypes = {
  className: PropTypes$1.string
};
CCarouselCaption.displayName = "CCarouselCaption";
var CCarouselItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, active = _a2.active, direction = _a2.direction, _b2 = _a2.interval, interval = _b2 === void 0 ? false : _b2, rest = __rest$1(_a2, ["children", "className", "active", "direction", "interval"]);
  var _c2 = reactExports.useContext(CCarouselContext), setAnimating = _c2.setAnimating, setCustomInterval = _c2.setCustomInterval;
  var carouselItemRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, carouselItemRef);
  var prevActive = reactExports.useRef();
  var _d2 = reactExports.useState(), directionClassName = _d2[0], setDirectionClassName = _d2[1];
  var _e2 = reactExports.useState(), orderClassName = _e2[0], setOrderClassName = _e2[1];
  var _f2 = reactExports.useState(active && "active"), activeClassName = _f2[0], setActiveClassName = _f2[1];
  var _g2 = reactExports.useState(0), count = _g2[0], setCount = _g2[1];
  reactExports.useEffect(function() {
    if (active) {
      setCustomInterval(interval);
      if (count !== 0)
        setOrderClassName("carousel-item-".concat(direction));
    }
    if (prevActive.current && !active) {
      setActiveClassName("active");
    }
    if (active || prevActive.current) {
      setTimeout(function() {
        var _a3;
        if (count !== 0) {
          (_a3 = carouselItemRef.current) === null || _a3 === void 0 ? void 0 : _a3.offsetHeight;
          setDirectionClassName("carousel-item-".concat(direction === "next" ? "start" : "end"));
        }
      }, 0);
    }
    prevActive.current = active;
    if (count === 0)
      setCount(count + 1);
  }, [active]);
  reactExports.useEffect(function() {
    var _a3, _b3;
    (_a3 = carouselItemRef.current) === null || _a3 === void 0 ? void 0 : _a3.addEventListener("transitionstart", function() {
      active && setAnimating(true);
    });
    (_b3 = carouselItemRef.current) === null || _b3 === void 0 ? void 0 : _b3.addEventListener("transitionend", function() {
      active && setAnimating(false);
      setDirectionClassName("");
      setOrderClassName("");
      if (active) {
        setActiveClassName("active");
      }
      if (!active) {
        setActiveClassName("");
      }
    });
    return function() {
      var _a4, _b4;
      (_a4 = carouselItemRef.current) === null || _a4 === void 0 ? void 0 : _a4.removeEventListener("transitionstart", function() {
        active && setAnimating(true);
      });
      (_b4 = carouselItemRef.current) === null || _b4 === void 0 ? void 0 : _b4.removeEventListener("transitionend", function() {
        active && setAnimating(false);
        setDirectionClassName("");
        setOrderClassName("");
        if (active) {
          setActiveClassName("active");
        }
        if (!active) {
          setActiveClassName("");
        }
      });
    };
  });
  return React$1.createElement("div", __assign$1({ className: classNames$1("carousel-item", activeClassName, directionClassName, orderClassName, className), ref: forkedRef }, rest), children);
});
CCarouselItem.propTypes = {
  active: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  direction: PropTypes$1.string,
  interval: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.number])
};
CCarouselItem.displayName = "CCarouselItem";
var getContainer = function(container) {
  if (container) {
    return typeof container === "function" ? container() : container;
  }
  return document.body;
};
var CConditionalPortal = function(_a2) {
  var children = _a2.children, container = _a2.container, portal = _a2.portal;
  var _b2 = reactExports.useState(null), _container = _b2[0], setContainer = _b2[1];
  reactExports.useEffect(function() {
    portal && setContainer(getContainer(container) || document.body);
  }, [container, portal]);
  return typeof window !== "undefined" && portal && _container ? reactDomExports.createPortal(children, _container) : React$1.createElement(React$1.Fragment, null, children);
};
CConditionalPortal.propTypes = {
  children: PropTypes$1.node,
  container: PropTypes$1.any,
  portal: PropTypes$1.bool
};
CConditionalPortal.displayName = "CConditionalPortal";
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof$1(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof$1(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$2 = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$3.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$3.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$3.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$3.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$3.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$3.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$3.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return formatters$3.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset2, dirtyDelimiter) {
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset2, dirtyDelimiter) {
  if (offset2 % 60 === 0) {
    var sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, dirtyDelimiter);
}
function formatTimezone(offset2, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters$1 = formatters;
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$1 = formatDistance;
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$1 = localize;
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters$1[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
var lib = {};
var uaParser_min = { exports: {} };
(function(module, exports) {
  (function(window2, undefined$1) {
    var LIBVERSION = "1.0.35", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
    var extend = function(regexes2, extensions) {
      var mergedRegexes = {};
      for (var i2 in regexes2) {
        if (extensions[i2] && extensions[i2].length % 2 === 0) {
          mergedRegexes[i2] = extensions[i2].concat(regexes2[i2]);
        } else {
          mergedRegexes[i2] = regexes2[i2];
        }
      }
      return mergedRegexes;
    }, enumerize = function(arr) {
      var enums = {};
      for (var i2 = 0; i2 < arr.length; i2++) {
        enums[arr[i2].toUpperCase()] = arr[i2];
      }
      return enums;
    }, has2 = function(str1, str2) {
      return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
      return str.toLowerCase();
    }, majorize = function(version) {
      return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
    }, trim = function(str, len) {
      if (typeof str === STR_TYPE) {
        str = str.replace(/^\s\s*/, EMPTY);
        return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
      }
    };
    var rgxMapper = function(ua2, arrays) {
      var i2 = 0, j, k2, p, q2, matches, match2;
      while (i2 < arrays.length && !matches) {
        var regex = arrays[i2], props = arrays[i2 + 1];
        j = k2 = 0;
        while (j < regex.length && !matches) {
          if (!regex[j]) {
            break;
          }
          matches = regex[j++].exec(ua2);
          if (!!matches) {
            for (p = 0; p < props.length; p++) {
              match2 = matches[++k2];
              q2 = props[p];
              if (typeof q2 === OBJ_TYPE && q2.length > 0) {
                if (q2.length === 2) {
                  if (typeof q2[1] == FUNC_TYPE) {
                    this[q2[0]] = q2[1].call(this, match2);
                  } else {
                    this[q2[0]] = q2[1];
                  }
                } else if (q2.length === 3) {
                  if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                    this[q2[0]] = match2 ? q2[1].call(this, match2, q2[2]) : undefined$1;
                  } else {
                    this[q2[0]] = match2 ? match2.replace(q2[1], q2[2]) : undefined$1;
                  }
                } else if (q2.length === 4) {
                  this[q2[0]] = match2 ? q2[3].call(this, match2.replace(q2[1], q2[2])) : undefined$1;
                }
              } else {
                this[q2] = match2 ? match2 : undefined$1;
              }
            }
          }
        }
        i2 += 2;
      }
    }, strMapper = function(str, map) {
      for (var i2 in map) {
        if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
          for (var j = 0; j < map[i2].length; j++) {
            if (has2(map[i2][j], str)) {
              return i2 === UNKNOWN ? undefined$1 : i2;
            }
          }
        } else if (has2(map[i2], str)) {
          return i2 === UNKNOWN ? undefined$1 : i2;
        }
      }
      return str;
    };
    var oldSafariMap = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, windowsVersionMap = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" };
    var regexes = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [VERSION, [NAME, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [VERSION, [NAME, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [NAME, VERSION], [/opios[\/ ]+([\w\.]+)/i], [VERSION, [NAME, OPERA + " Mini"]], [/\bopr\/([\w\.]+)/i], [VERSION, [NAME, OPERA]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [NAME, VERSION], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [VERSION, [NAME, "UC" + BROWSER]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [VERSION, [NAME, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [VERSION, [NAME, "WeChat"]], [/konqueror\/([\w\.]+)/i], [VERSION, [NAME, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [VERSION, [NAME, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [VERSION, [NAME, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION], [/\bfocus\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " Focus"]], [/\bopt\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [VERSION, [NAME, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [VERSION, [NAME, "Dolphin"]], [/coast\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI " + BROWSER]], [/fxios\/([-\w\.]+)/i], [VERSION, [NAME, FIREFOX]], [/\bqihu|(qi?ho?o?|360)browser/i], [[NAME, "360 " + BROWSER]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 " + BROWSER], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [NAME, VERSION], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [NAME], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[NAME, FACEBOOK], VERSION], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [NAME, VERSION], [/\bgsa\/([\w\.]+) .*safari\//i], [VERSION, [NAME, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [VERSION, [NAME, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [VERSION, [NAME, CHROME + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[NAME, CHROME + " WebView"], VERSION], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [VERSION, [NAME, "Android " + BROWSER]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [VERSION, NAME], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, strMapper, oldSafariMap]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[NAME, "Netscape"], VERSION], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [VERSION, [NAME, FIREFOX + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [NAME, VERSION], [/(cobalt)\/([\w\.]+)/i], [NAME, [VERSION, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[ARCHITECTURE, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[ARCHITECTURE, "armhf"]], [/windows (ce|mobile); ppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[ARCHITECTURE, lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [/(macintosh);/i], [MODEL, [VENDOR, APPLE]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]], [/(pixel c)\b/i], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]], [/(playbook);[-\w\),; ]+(rim)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [/(nexus 9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(surface duo)/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]], [/(u304aa)/i], [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]], [/\bsie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/\b(rct\w+) b/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/\b(venue[\d ]{2,7}) b/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/\b(q(?:mv|ta)\w+) b/i], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]], [/\b(tm\d{3}\w+) b/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/\b(k88) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/\b(nx\d{3}j) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]], [/\b(gen\d{3}) b.+49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/\b(zur\d{3}) b/i], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/\b((zeki)?tb.*\b) b/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/\b(ns-?\w{0,9}) b/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/\b((nxa|next)-?\w{0,9}) b/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/\b(lvtel\-)?(v1[12]) b/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/\b(ph-1) /i], [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/\b(trio[-\w\. ]+) b/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/\btu_(1491) b/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/(shield[\w ]+) b/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]], [/(sprint) (\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[VENDOR, LG], [TYPE, SMARTTV]], [/(apple) ?tv/i], [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]], [/crkey/i], [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [/droid.+aft(\w)( bui|\))/i], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]], [/(bravia[\w ]+)( bui|\))/i], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [/(mitv-\w{5}) bui/i], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [/Hbbtv.*(technisat) (.*);/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[TYPE, SMARTTV]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/droid.+; (shield) bui/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation [345portablevi]+)/i], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [/((pebble))app/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [/droid.+; (glass) \d/i], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [/droid.+; (wt63?0{2,3})\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [/(quest( 2| pro)?)/i], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [VENDOR, [TYPE, EMBEDDED]], [/(aeobc)\b/i], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [MODEL, [TYPE, MOBILE]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [MODEL, [TYPE, TABLET]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[TYPE, TABLET]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[TYPE, MOBILE]], [/(android[-\w\. ]{0,9});.+buil/i], [MODEL, [VENDOR, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [VERSION, [NAME, EDGE + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [VERSION, [NAME, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [VERSION, NAME]], os: [[/microsoft (windows) (vista|xp)/i], [NAME, VERSION], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [NAME, [VERSION, strMapper, windowsVersionMap]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[NAME, "Windows"], [VERSION, strMapper, windowsVersionMap]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[NAME, MAC_OS], [VERSION, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [VERSION, NAME], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [NAME, VERSION], [/\(bb(10);/i], [VERSION, [NAME, BLACKBERRY]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [VERSION, [NAME, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [VERSION, [NAME, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [VERSION, [NAME, "watchOS"]], [/crkey\/([\d\.]+)/i], [VERSION, [NAME, CHROME + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[NAME, CHROMIUM_OS], VERSION], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [NAME, VERSION], [/(sunos) ?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [NAME, VERSION]] };
    var UAParser2 = function(ua2, extensions) {
      if (typeof ua2 === OBJ_TYPE) {
        extensions = ua2;
        ua2 = undefined$1;
      }
      if (!(this instanceof UAParser2)) {
        return new UAParser2(ua2, extensions).getResult();
      }
      var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
      var _ua = ua2 || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
      var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
      var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
      var _isSelfNav = _navigator && _navigator.userAgent == _ua;
      this.getBrowser = function() {
        var _browser = {};
        _browser[NAME] = undefined$1;
        _browser[VERSION] = undefined$1;
        rgxMapper.call(_browser, _ua, _rgxmap.browser);
        _browser[MAJOR] = majorize(_browser[VERSION]);
        if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
          _browser[NAME] = "Brave";
        }
        return _browser;
      };
      this.getCPU = function() {
        var _cpu = {};
        _cpu[ARCHITECTURE] = undefined$1;
        rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
        return _cpu;
      };
      this.getDevice = function() {
        var _device = {};
        _device[VENDOR] = undefined$1;
        _device[MODEL] = undefined$1;
        _device[TYPE] = undefined$1;
        rgxMapper.call(_device, _ua, _rgxmap.device);
        if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
          _device[TYPE] = MOBILE;
        }
        if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
          _device[MODEL] = "iPad";
          _device[TYPE] = TABLET;
        }
        return _device;
      };
      this.getEngine = function() {
        var _engine = {};
        _engine[NAME] = undefined$1;
        _engine[VERSION] = undefined$1;
        rgxMapper.call(_engine, _ua, _rgxmap.engine);
        return _engine;
      };
      this.getOS = function() {
        var _os = {};
        _os[NAME] = undefined$1;
        _os[VERSION] = undefined$1;
        rgxMapper.call(_os, _ua, _rgxmap.os);
        if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") {
          _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
        }
        return _os;
      };
      this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      };
      this.getUA = function() {
        return _ua;
      };
      this.setUA = function(ua3) {
        _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim(ua3, UA_MAX_LENGTH) : ua3;
        return this;
      };
      this.setUA(_ua);
      return this;
    };
    UAParser2.VERSION = LIBVERSION;
    UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
    UAParser2.CPU = enumerize([ARCHITECTURE]);
    UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
    {
      if (module.exports) {
        exports = module.exports = UAParser2;
      }
      exports.UAParser = UAParser2;
    }
    var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
    if ($ && !$.ua) {
      var parser = new UAParser2();
      $.ua = parser.getResult();
      $.ua.get = function() {
        return parser.getUA();
      };
      $.ua.set = function(ua2) {
        parser.setUA(ua2);
        var result = parser.getResult();
        for (var prop in result) {
          $.ua[prop] = result[prop];
        }
      };
    }
  })(typeof window === "object" ? window : commonjsGlobal);
})(uaParser_min, uaParser_min.exports);
var uaParser_minExports = uaParser_min.exports;
Object.defineProperty(lib, "__esModule", { value: true });
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React = React$1;
var React__default = _interopDefault(React);
var UAParser = uaParser_minExports;
var ClientUAInstance = new UAParser();
var browser = ClientUAInstance.getBrowser();
var cpu = ClientUAInstance.getCPU();
var device = ClientUAInstance.getDevice();
var engine = ClientUAInstance.getEngine();
var os = ClientUAInstance.getOS();
var ua = ClientUAInstance.getUA();
var setUa = function setUa2(userAgentString) {
  return ClientUAInstance.setUA(userAgentString);
};
var parseUserAgent = function parseUserAgent2(userAgent) {
  if (!userAgent) {
    console.error("No userAgent string was provided");
    return;
  }
  var UserAgentInstance = new UAParser(userAgent);
  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: function setUserAgent3(userAgentString) {
      return UserAgentInstance.setUA(userAgentString);
    }
  };
};
var UAHelper = /* @__PURE__ */ Object.freeze({
  ClientUAInstance,
  browser,
  cpu,
  device,
  engine,
  os,
  ua,
  setUa,
  parseUserAgent
});
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d2 = false;
  var _s, _e2;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d2 = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d2)
        throw _e2;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var DeviceTypes = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
};
var BrowserTypes = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
};
var OsTypes = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
};
var InitialDeviceTypes = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkDeviceType = function checkDeviceType2(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };
    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };
    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };
    case DeviceTypes.Console:
      return {
        isConsole: true
      };
    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };
    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };
    case DeviceTypes.Embedded:
      return {
        isEmbedded: true
      };
    default:
      return InitialDeviceTypes;
  }
};
var setUserAgent = function setUserAgent2(userAgent) {
  return setUa(userAgent);
};
var setDefaults = function setDefaults2(p) {
  var d3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return p ? p : d3;
};
var getNavigatorInstance = function getNavigatorInstance2() {
  if (typeof window !== "undefined") {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }
  return false;
};
var isIOS13Check = function isIOS13Check2(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === "MacIntel" && nav.maxTouchPoints > 1 && !window.MSStream);
};
var browserPayload = function browserPayload2(isBrowser2, browser2, engine2, os2, ua2) {
  return {
    isBrowser: isBrowser2,
    browserMajorVersion: setDefaults(browser2.major),
    browserFullVersion: setDefaults(browser2.version),
    browserName: setDefaults(browser2.name),
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var mobilePayload = function mobilePayload2(type, device2, os2, ua2) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device2.vendor),
    model: setDefaults(device2.model),
    os: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    ua: setDefaults(ua2)
  });
};
var smartTvPayload = function smartTvPayload2(isSmartTV2, engine2, os2, ua2) {
  return {
    isSmartTV: isSmartTV2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var consolePayload = function consolePayload2(isConsole2, engine2, os2, ua2) {
  return {
    isConsole: isConsole2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var wearablePayload = function wearablePayload2(isWearable2, engine2, os2, ua2) {
  return {
    isWearable: isWearable2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var embeddedPayload = function embeddedPayload2(isEmbedded2, device2, engine2, os2, ua2) {
  return {
    isEmbedded: isEmbedded2,
    vendor: setDefaults(device2.vendor),
    model: setDefaults(device2.model),
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
function deviceDetect(userAgent) {
  var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper, device2 = _ref.device, browser2 = _ref.browser, engine2 = _ref.engine, os2 = _ref.os, ua2 = _ref.ua;
  var type = checkDeviceType(device2.type);
  var isBrowser2 = type.isBrowser, isMobile2 = type.isMobile, isTablet2 = type.isTablet, isSmartTV2 = type.isSmartTV, isConsole2 = type.isConsole, isWearable2 = type.isWearable, isEmbedded2 = type.isEmbedded;
  if (isBrowser2) {
    return browserPayload(isBrowser2, browser2, engine2, os2, ua2);
  }
  if (isSmartTV2) {
    return smartTvPayload(isSmartTV2, engine2, os2, ua2);
  }
  if (isConsole2) {
    return consolePayload(isConsole2, engine2, os2, ua2);
  }
  if (isMobile2) {
    return mobilePayload(type, device2, os2, ua2);
  }
  if (isTablet2) {
    return mobilePayload(type, device2, os2, ua2);
  }
  if (isWearable2) {
    return wearablePayload(isWearable2, engine2, os2, ua2);
  }
  if (isEmbedded2) {
    return embeddedPayload(isEmbedded2, device2, engine2, os2, ua2);
  }
}
var isMobileType = function isMobileType2(_ref) {
  var type = _ref.type;
  return type === DeviceTypes.Mobile;
};
var isTabletType = function isTabletType2(_ref2) {
  var type = _ref2.type;
  return type === DeviceTypes.Tablet;
};
var isMobileAndTabletType = function isMobileAndTabletType2(_ref3) {
  var type = _ref3.type;
  return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
};
var isSmartTVType = function isSmartTVType2(_ref4) {
  var type = _ref4.type;
  return type === DeviceTypes.SmartTv;
};
var isBrowserType = function isBrowserType2(_ref5) {
  var type = _ref5.type;
  return type === DeviceTypes.Browser;
};
var isWearableType = function isWearableType2(_ref6) {
  var type = _ref6.type;
  return type === DeviceTypes.Wearable;
};
var isConsoleType = function isConsoleType2(_ref7) {
  var type = _ref7.type;
  return type === DeviceTypes.Console;
};
var isEmbeddedType = function isEmbeddedType2(_ref8) {
  var type = _ref8.type;
  return type === DeviceTypes.Embedded;
};
var getMobileVendor = function getMobileVendor2(_ref9) {
  var vendor = _ref9.vendor;
  return setDefaults(vendor);
};
var getMobileModel = function getMobileModel2(_ref10) {
  var model = _ref10.model;
  return setDefaults(model);
};
var getDeviceType = function getDeviceType2(_ref11) {
  var type = _ref11.type;
  return setDefaults(type, "browser");
};
var isAndroidType = function isAndroidType2(_ref12) {
  var name = _ref12.name;
  return name === OsTypes.Android;
};
var isWindowsType = function isWindowsType2(_ref13) {
  var name = _ref13.name;
  return name === OsTypes.Windows;
};
var isMacOsType = function isMacOsType2(_ref14) {
  var name = _ref14.name;
  return name === OsTypes.MAC_OS;
};
var isWinPhoneType = function isWinPhoneType2(_ref15) {
  var name = _ref15.name;
  return name === OsTypes.WindowsPhone;
};
var isIOSType = function isIOSType2(_ref16) {
  var name = _ref16.name;
  return name === OsTypes.IOS;
};
var getOsVersion = function getOsVersion2(_ref17) {
  var version = _ref17.version;
  return setDefaults(version);
};
var getOsName = function getOsName2(_ref18) {
  var name = _ref18.name;
  return setDefaults(name);
};
var isChromeType = function isChromeType2(_ref19) {
  var name = _ref19.name;
  return name === BrowserTypes.Chrome;
};
var isFirefoxType = function isFirefoxType2(_ref20) {
  var name = _ref20.name;
  return name === BrowserTypes.Firefox;
};
var isChromiumType = function isChromiumType2(_ref21) {
  var name = _ref21.name;
  return name === BrowserTypes.Chromium;
};
var isEdgeType = function isEdgeType2(_ref22) {
  var name = _ref22.name;
  return name === BrowserTypes.Edge;
};
var isYandexType = function isYandexType2(_ref23) {
  var name = _ref23.name;
  return name === BrowserTypes.Yandex;
};
var isSafariType = function isSafariType2(_ref24) {
  var name = _ref24.name;
  return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
};
var isMobileSafariType = function isMobileSafariType2(_ref25) {
  var name = _ref25.name;
  return name === BrowserTypes.MobileSafari;
};
var isOperaType = function isOperaType2(_ref26) {
  var name = _ref26.name;
  return name === BrowserTypes.Opera;
};
var isIEType = function isIEType2(_ref27) {
  var name = _ref27.name;
  return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
};
var isMIUIType = function isMIUIType2(_ref28) {
  var name = _ref28.name;
  return name === BrowserTypes.MIUI;
};
var isSamsungBrowserType = function isSamsungBrowserType2(_ref29) {
  var name = _ref29.name;
  return name === BrowserTypes.SamsungBrowser;
};
var getBrowserFullVersion = function getBrowserFullVersion2(_ref30) {
  var version = _ref30.version;
  return setDefaults(version);
};
var getBrowserVersion = function getBrowserVersion2(_ref31) {
  var major = _ref31.major;
  return setDefaults(major);
};
var getBrowserName = function getBrowserName2(_ref32) {
  var name = _ref32.name;
  return setDefaults(name);
};
var getEngineName = function getEngineName2(_ref33) {
  var name = _ref33.name;
  return setDefaults(name);
};
var getEngineVersion = function getEngineVersion2(_ref34) {
  var version = _ref34.version;
  return setDefaults(version);
};
var isElectronType = function isElectronType2() {
  var nav = getNavigatorInstance();
  var ua2 = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua2 === "string" ? /electron/.test(ua2) : false;
};
var isEdgeChromiumType = function isEdgeChromiumType2(ua2) {
  return typeof ua2 === "string" && ua2.indexOf("Edg/") !== -1;
};
var getIOS13 = function getIOS132() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === "MacIntel" && nav.maxTouchPoints > 1) && !window.MSStream;
};
var getIPad13 = function getIPad132() {
  return isIOS13Check("iPad");
};
var getIphone13 = function getIphone132() {
  return isIOS13Check("iPhone");
};
var getIPod13 = function getIPod132() {
  return isIOS13Check("iPod");
};
var getUseragent = function getUseragent2(userAg) {
  return setDefaults(userAg);
};
function buildSelectorsObject(options) {
  var _ref = options ? options : UAHelper, device2 = _ref.device, browser2 = _ref.browser, os2 = _ref.os, engine2 = _ref.engine, ua2 = _ref.ua;
  return {
    isSmartTV: isSmartTVType(device2),
    isConsole: isConsoleType(device2),
    isWearable: isWearableType(device2),
    isEmbedded: isEmbeddedType(device2),
    isMobileSafari: isMobileSafariType(browser2) || getIPad13(),
    isChromium: isChromiumType(browser2),
    isMobile: isMobileAndTabletType(device2) || getIPad13(),
    isMobileOnly: isMobileType(device2),
    isTablet: isTabletType(device2) || getIPad13(),
    isBrowser: isBrowserType(device2),
    isDesktop: isBrowserType(device2),
    isAndroid: isAndroidType(os2),
    isWinPhone: isWinPhoneType(os2),
    isIOS: isIOSType(os2) || getIPad13(),
    isChrome: isChromeType(browser2),
    isFirefox: isFirefoxType(browser2),
    isSafari: isSafariType(browser2),
    isOpera: isOperaType(browser2),
    isIE: isIEType(browser2),
    osVersion: getOsVersion(os2),
    osName: getOsName(os2),
    fullBrowserVersion: getBrowserFullVersion(browser2),
    browserVersion: getBrowserVersion(browser2),
    browserName: getBrowserName(browser2),
    mobileVendor: getMobileVendor(device2),
    mobileModel: getMobileModel(device2),
    engineName: getEngineName(engine2),
    engineVersion: getEngineVersion(engine2),
    getUA: getUseragent(ua2),
    isEdge: isEdgeType(browser2) || isEdgeChromiumType(ua2),
    isYandex: isYandexType(browser2),
    deviceType: getDeviceType(device2),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua2),
    isLegacyEdge: isEdgeType(browser2) && !isEdgeChromiumType(ua2),
    isWindows: isWindowsType(os2),
    isMacOs: isMacOsType(os2),
    isMIUI: isMIUIType(browser2),
    isSamsungBrowser: isSamsungBrowserType(browser2)
  };
}
var isSmartTV = isSmartTVType(device);
var isConsole = isConsoleType(device);
var isWearable = isWearableType(device);
var isEmbedded = isEmbeddedType(device);
var isMobileSafari = isMobileSafariType(browser) || getIPad13();
var isChromium = isChromiumType(browser);
var isMobile = isMobileAndTabletType(device) || getIPad13();
var isMobileOnly = isMobileType(device);
var isTablet = isTabletType(device) || getIPad13();
var isBrowser = isBrowserType(device);
var isDesktop = isBrowserType(device);
var isAndroid = isAndroidType(os);
var isWinPhone = isWinPhoneType(os);
var isIOS = isIOSType(os) || getIPad13();
var isChrome = isChromeType(browser);
var isFirefox = isFirefoxType(browser);
var isSafari = isSafariType(browser);
var isOpera = isOperaType(browser);
var isIE = isIEType(browser);
var osVersion = getOsVersion(os);
var osName = getOsName(os);
var fullBrowserVersion = getBrowserFullVersion(browser);
var browserVersion = getBrowserVersion(browser);
var browserName = getBrowserName(browser);
var mobileVendor = getMobileVendor(device);
var mobileModel = getMobileModel(device);
var engineName = getEngineName(engine);
var engineVersion = getEngineVersion(engine);
var getUA = getUseragent(ua);
var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
var isYandex = isYandexType(browser);
var deviceType = getDeviceType(device);
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType(ua);
var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
var isWindows = isWindowsType(os);
var isMacOs = isMacOsType(os);
var isMIUI = isMIUIType(browser);
var isSamsungBrowser = isSamsungBrowserType(browser);
var getSelectorsByUserAgent = function getSelectorsByUserAgent2(userAgent) {
  if (!userAgent || typeof userAgent !== "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var _UAHelper$parseUserAg = parseUserAgent(userAgent), device2 = _UAHelper$parseUserAg.device, browser2 = _UAHelper$parseUserAg.browser, os2 = _UAHelper$parseUserAg.os, engine2 = _UAHelper$parseUserAg.engine, ua2 = _UAHelper$parseUserAg.ua;
  return buildSelectorsObject({
    device: device2,
    browser: browser2,
    os: os2,
    engine: engine2,
    ua: ua2
  });
};
var AndroidView = function AndroidView2(_ref) {
  var renderWithFragment = _ref.renderWithFragment, children = _ref.children, props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);
  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var BrowserView = function BrowserView2(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment, children = _ref2.children, props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);
  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IEView = function IEView2(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment, children = _ref3.children, props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);
  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IOSView = function IOSView2(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment, children = _ref4.children, props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);
  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileView = function MobileView2(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment, children = _ref5.children, props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);
  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var TabletView = function TabletView2(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment, children = _ref6.children, props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);
  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WinPhoneView = function WinPhoneView2(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment, children = _ref7.children, props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);
  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileOnlyView = function MobileOnlyView2(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment, children = _ref8.children;
  _ref8.viewClassName;
  _ref8.style;
  var props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);
  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var SmartTVView = function SmartTVView2(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment, children = _ref9.children, props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);
  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var ConsoleView = function ConsoleView2(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment, children = _ref10.children, props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);
  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WearableView = function WearableView2(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment, children = _ref11.children, props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);
  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var CustomView = function CustomView2(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment, children = _ref12.children;
  _ref12.viewClassName;
  _ref12.style;
  var condition = _ref12.condition, props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
function withOrientationChange(WrappedComponent) {
  return /* @__PURE__ */ function(_React$Component) {
    _inherits(_class, _React$Component);
    function _class(props) {
      var _this;
      _classCallCheck(this, _class);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.isEventListenerAdded = false;
      _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
      _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
      _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
      _this.state = {
        isLandscape: false,
        isPortrait: false
      };
      return _this;
    }
    _createClass(_class, [{
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        if (!this.isEventListenerAdded) {
          this.isEventListenerAdded = true;
        }
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: orientation === 0,
          isLandscape: orientation === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function onOrientationChange() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function onPageLoad() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile) {
          if (!this.isEventListenerAdded) {
            this.handleOrientationChange();
            window.addEventListener("load", this.onPageLoad, false);
          } else {
            window.removeEventListener("load", this.onPageLoad, false);
          }
          window.addEventListener("resize", this.onOrientationChange, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.onOrientationChange, false);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]);
    return _class;
  }(React__default.Component);
}
function useMobileOrientation() {
  var _useState = React.useState(function() {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? "portrait" : "landscape"
    };
  }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var handleOrientationChange = React.useCallback(function() {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    var next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? "portrait" : "landscape"
    };
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  React.useEffect(function() {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }
    return function() {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    };
  }, [handleOrientationChange]);
  return state;
}
function useDeviceData(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  return parseUserAgent(hookUserAgent);
}
function useDeviceSelectors(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  var deviceData = useDeviceData(hookUserAgent);
  var selectors = buildSelectorsObject(deviceData);
  return [selectors, deviceData];
}
lib.AndroidView = AndroidView;
lib.BrowserTypes = BrowserTypes;
lib.BrowserView = BrowserView;
lib.ConsoleView = ConsoleView;
lib.CustomView = CustomView;
lib.IEView = IEView;
lib.IOSView = IOSView;
lib.MobileOnlyView = MobileOnlyView;
lib.MobileView = MobileView;
lib.OsTypes = OsTypes;
lib.SmartTVView = SmartTVView;
lib.TabletView = TabletView;
lib.WearableView = WearableView;
lib.WinPhoneView = WinPhoneView;
lib.browserName = browserName;
lib.browserVersion = browserVersion;
lib.deviceDetect = deviceDetect;
lib.deviceType = deviceType;
lib.engineName = engineName;
lib.engineVersion = engineVersion;
lib.fullBrowserVersion = fullBrowserVersion;
lib.getSelectorsByUserAgent = getSelectorsByUserAgent;
lib.getUA = getUA;
lib.isAndroid = isAndroid;
lib.isBrowser = isBrowser;
lib.isChrome = isChrome;
lib.isChromium = isChromium;
lib.isConsole = isConsole;
lib.isDesktop = isDesktop;
lib.isEdge = isEdge;
lib.isEdgeChromium = isEdgeChromium;
lib.isElectron = isElectron;
lib.isEmbedded = isEmbedded;
lib.isFirefox = isFirefox;
lib.isIE = isIE;
lib.isIOS = isIOS;
lib.isIOS13 = isIOS13;
lib.isIPad13 = isIPad13;
lib.isIPhone13 = isIPhone13;
lib.isIPod13 = isIPod13;
lib.isLegacyEdge = isLegacyEdge;
lib.isMIUI = isMIUI;
lib.isMacOs = isMacOs;
var isMobile_1 = lib.isMobile = isMobile;
lib.isMobileOnly = isMobileOnly;
lib.isMobileSafari = isMobileSafari;
lib.isOpera = isOpera;
lib.isSafari = isSafari;
lib.isSamsungBrowser = isSamsungBrowser;
lib.isSmartTV = isSmartTV;
lib.isTablet = isTablet;
lib.isWearable = isWearable;
lib.isWinPhone = isWinPhone;
lib.isWindows = isWindows;
lib.isYandex = isYandex;
lib.mobileModel = mobileModel;
lib.mobileVendor = mobileVendor;
lib.osName = osName;
lib.osVersion = osVersion;
lib.parseUserAgent = parseUserAgent;
lib.setUserAgent = setUserAgent;
lib.useDeviceData = useDeviceData;
lib.useDeviceSelectors = useDeviceSelectors;
lib.useMobileOrientation = useMobileOrientation;
lib.withOrientationChange = withOrientationChange;
var createGroupsInArray = function(arr, numberOfGroups) {
  var perGroup = Math.ceil(arr.length / numberOfGroups);
  return Array.from({ length: numberOfGroups }).fill("").map(function(_, i2) {
    return arr.slice(i2 * perGroup, (i2 + 1) * perGroup);
  });
};
var getMonthsNames = function(locale2) {
  var months = [];
  var d3 = /* @__PURE__ */ new Date();
  d3.setDate(1);
  for (var i2 = 0; i2 < 12; i2++) {
    d3.setMonth(i2);
    months.push(d3.toLocaleString(locale2, { month: "short" }));
  }
  return months;
};
var getYears = function(year) {
  var years = [];
  for (var _year = year - 6; _year < year + 6; _year++) {
    years.push(_year);
  }
  return years;
};
var getLeadingDays = function(year, month, firstDayOfWeek) {
  var dates = [];
  var d3 = new Date(year, month);
  var y3 = d3.getFullYear();
  var m3 = d3.getMonth();
  var firstWeekday = new Date(y3, m3, 1).getDay();
  var leadingDays = 6 - (6 - firstWeekday) - firstDayOfWeek;
  if (firstDayOfWeek) {
    leadingDays = leadingDays < 0 ? 7 + leadingDays : leadingDays;
  }
  for (var i2 = leadingDays * -1; i2 < 0; i2++) {
    dates.push({
      date: new Date(y3, m3, i2 + 1),
      month: "previous"
    });
  }
  return dates;
};
var getMonthDays = function(year, month) {
  var dates = [];
  var lastDay = new Date(year, month + 1, 0).getDate();
  for (var i2 = 1; i2 <= lastDay; i2++) {
    dates.push({
      date: new Date(year, month, i2),
      month: "current"
    });
  }
  return dates;
};
var getTrailingDays = function(year, month, leadingDays, monthDays) {
  var dates = [];
  var days = 42 - (leadingDays.length + monthDays.length);
  for (var i2 = 1; i2 <= days; i2++) {
    dates.push({
      date: new Date(year, month + 1, i2),
      month: "next"
    });
  }
  return dates;
};
var getMonthDetails = function(year, month, firstDayOfWeek) {
  var daysPrevMonth = getLeadingDays(year, month, firstDayOfWeek);
  var daysThisMonth = getMonthDays(year, month);
  var daysNextMonth = getTrailingDays(year, month, daysPrevMonth, daysThisMonth);
  var days = __spreadArray(__spreadArray(__spreadArray([], daysPrevMonth, true), daysThisMonth, true), daysNextMonth, true);
  var weeks = [];
  days.forEach(function(day, index) {
    if (index % 7 === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(day);
  });
  return weeks;
};
var isDisableDateInRange = function(startDate, endDate, dates) {
  if (startDate && endDate) {
    var date = new Date(startDate);
    var disabled = false;
    while (date < endDate) {
      date.setDate(date.getDate() + 1);
      if (isDateDisabled(date, null, null, dates)) {
        disabled = true;
        break;
      }
    }
    return disabled;
  }
  return false;
};
var isDateDisabled = function(date, min2, max2, dates) {
  var disabled;
  if (dates) {
    dates.forEach(function(_date) {
      if (Array.isArray(_date) && isDateInRange(date, _date[0], _date[1])) {
        disabled = true;
      }
      if (_date instanceof Date && isSameDateAs(date, _date)) {
        disabled = true;
      }
    });
  }
  if (min2 && date < min2) {
    disabled = true;
  }
  if (max2 && date > max2) {
    disabled = true;
  }
  return disabled;
};
var isDateInRange = function(date, start2, end2) {
  return start2 && end2 && start2 <= date && date <= end2;
};
var isDateSelected = function(date, start2, end2) {
  return start2 && isSameDateAs(start2, date) || end2 && isSameDateAs(end2, date);
};
var isEndDate = function(date, start2, end2) {
  return start2 && end2 && isSameDateAs(end2, date) && start2 < end2;
};
var isLastDayOfMonth = function(date) {
  var test = new Date(date.getTime());
  var month = test.getMonth();
  test.setDate(test.getDate() + 1);
  return test.getMonth() !== month;
};
var isSameDateAs = function(date, date2) {
  if (date instanceof Date && date2 instanceof Date) {
    return date.getDate() === date2.getDate() && date.getMonth() === date2.getMonth() && date.getFullYear() === date2.getFullYear();
  }
  if (date === null && date2 === null) {
    return true;
  }
  return false;
};
var isStartDate = function(date, start2, end2) {
  return start2 && end2 && isSameDateAs(start2, date) && start2 < end2;
};
var isToday = function(date) {
  var today = /* @__PURE__ */ new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
var Calendar = function(props) {
  var addMonths = props.addMonths, calendarDate = props.calendarDate, dayFormat = props.dayFormat, disabledDates = props.disabledDates, endDate = props.endDate, firstDayOfWeek = props.firstDayOfWeek, hoverDate = props.hoverDate, locale2 = props.locale, maxDate = props.maxDate, minDate = props.minDate, onDayClick = props.onDayClick, onDayKeyDown = props.onDayKeyDown, onDayMouseEnter = props.onDayMouseEnter, onDayMouseLeave = props.onDayMouseLeave, onMonthClick = props.onMonthClick, onMonthKeyDown = props.onMonthKeyDown, onYearClick = props.onYearClick, onYearKeyDown = props.onYearKeyDown, selectAdjacementDays = props.selectAdjacementDays, selectEndDate = props.selectEndDate, showAdjacementDays = props.showAdjacementDays, startDate = props.startDate, view = props.view, weekdayFormat = props.weekdayFormat;
  var _a2 = reactExports.useState(calendarDate), date = _a2[0], setDate = _a2[1];
  var _b2 = reactExports.useState([]), listOfMonths = _b2[0], setListOfMonths = _b2[1];
  reactExports.useEffect(function() {
    if (addMonths !== 0) {
      setDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + addMonths, 1));
      return;
    }
    setDate(calendarDate);
  }, [calendarDate]);
  reactExports.useEffect(function() {
    setListOfMonths(createGroupsInArray(getMonthsNames(locale2), 4));
  }, []);
  var monthDetails = getMonthDetails(date.getFullYear(), date.getMonth(), firstDayOfWeek);
  var listOfYears = createGroupsInArray(getYears(date.getFullYear()), 4);
  var weekDays = monthDetails[0];
  return React$1.createElement(
    "table",
    null,
    view === "days" && React$1.createElement(
      "thead",
      null,
      React$1.createElement("tr", null, weekDays.map(function(_a3, idx) {
        var date2 = _a3.date;
        return React$1.createElement(
          "th",
          { key: idx, className: "calendar-cell" },
          React$1.createElement("div", { className: "calendar-header-cell-inner" }, typeof weekdayFormat === "function" ? weekdayFormat(date2) : typeof weekdayFormat === "string" ? date2.toLocaleDateString(locale2, { weekday: weekdayFormat }) : date2.toLocaleDateString(locale2, { weekday: "long" }).slice(0, weekdayFormat))
        );
      }))
    ),
    React$1.createElement(
      "tbody",
      null,
      view === "days" && monthDetails.map(function(week, index) {
        return React$1.createElement("tr", { key: index }, week.map(function(_a3, idx) {
          var _b3;
          var date2 = _a3.date, month = _a3.month;
          return month === "current" || showAdjacementDays ? React$1.createElement(
            "td",
            __assign$1({ className: classNames$1("calendar-cell", (_b3 = {
              today: month === "current" && isToday(date2),
              disabled: isDateDisabled(date2, minDate, maxDate, disabledDates)
            }, _b3[month] = true, _b3.clickable = month !== "current" && selectAdjacementDays, _b3.last = isLastDayOfMonth(date2), _b3["range-hover"] = month === "current" && (hoverDate && selectEndDate ? isDateInRange(date2, startDate, hoverDate) : isDateInRange(date2, hoverDate, endDate)), _b3.range = month === "current" && isDateInRange(date2, startDate, endDate), _b3.selected = isDateSelected(date2, startDate, endDate), _b3.start = isStartDate(date2, startDate, endDate), _b3.end = isEndDate(date2, startDate, endDate), _b3)), key: idx, tabIndex: (month === "current" || selectAdjacementDays) && !isDateDisabled(date2, minDate, maxDate, disabledDates) ? 0 : -1, title: date2.toLocaleDateString(locale2) }, (month === "current" || selectAdjacementDays) && {
              onBlur: function() {
                return onDayMouseLeave();
              },
              onClick: function() {
                return onDayClick(date2);
              },
              onFocus: function() {
                return onDayMouseEnter(date2);
              },
              onKeyDown: function(event) {
                return onDayKeyDown(event, date2);
              },
              onMouseEnter: function() {
                return onDayMouseEnter(date2);
              },
              onMouseLeave: function() {
                return onDayMouseLeave();
              }
            }, month !== "current" && !selectAdjacementDays && {
              onMouseEnter: function() {
                return onDayMouseLeave();
              }
            }),
            React$1.createElement("div", { className: "calendar-cell-inner" }, typeof dayFormat === "function" ? dayFormat(date2) : date2.toLocaleDateString(locale2, { day: dayFormat }))
          ) : React$1.createElement("td", { key: idx });
        }));
      }),
      view === "months" && listOfMonths.map(function(row, index) {
        return React$1.createElement("tr", { key: index }, row.map(function(month, idx) {
          return React$1.createElement(
            "td",
            { className: "calendar-cell month", key: idx, onClick: function() {
              return onMonthClick(index * 3 + idx - addMonths);
            }, onKeyDown: function(event) {
              return onMonthKeyDown(event, index * 3 + idx - addMonths);
            }, tabIndex: 0 },
            React$1.createElement("div", { className: "calendar-cell-inner" }, month)
          );
        }));
      }),
      view === "years" && listOfYears.map(function(row, index) {
        return React$1.createElement("tr", { key: index }, row.map(function(year, idx) {
          return React$1.createElement(
            "td",
            { className: "calendar-cell year", key: idx, onClick: function() {
              return onYearClick(new Date(year, date.getMonth() - addMonths, date.getDate()));
            }, onKeyDown: function(event) {
              return onYearKeyDown(event, new Date(year, date.getMonth() - addMonths, date.getDate()));
            }, tabIndex: 0 },
            React$1.createElement("div", { className: "calendar-cell-inner" }, new Date(year, 0, 1).toLocaleDateString(locale2, { year: "numeric" }))
          );
        }));
      })
    )
  );
};
var Navigation = function(props) {
  var addMonths = props.addMonths, calendarDate = props.calendarDate, locale2 = props.locale, navigation = props.navigation, navNextDoubleIcon = props.navNextDoubleIcon, navNextIcon = props.navNextIcon, navPrevDoubleIcon = props.navPrevDoubleIcon, navPrevIcon = props.navPrevIcon, navYearFirst = props.navYearFirst, onMonthClick = props.onMonthClick, onNavigationClick = props.onNavigationClick, onYearClick = props.onYearClick, view = props.view;
  var _a2 = reactExports.useState(), date = _a2[0], setDate = _a2[1];
  reactExports.useEffect(function() {
    if (addMonths !== 0) {
      setDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + addMonths, 1));
      return;
    }
    setDate(calendarDate);
  }, [calendarDate]);
  return React$1.createElement(
    "div",
    { className: "calendar-nav" },
    navigation && React$1.createElement(
      "div",
      { className: "calendar-nav-prev" },
      React$1.createElement(CButton, { color: "transparent", size: "sm", onClick: function() {
        return onNavigationClick("prev", true);
      } }, navPrevDoubleIcon !== null && navPrevDoubleIcon !== void 0 ? navPrevDoubleIcon : React$1.createElement("span", { className: "calendar-nav-icon calendar-nav-icon-double-prev" })),
      view === "days" && React$1.createElement(CButton, { color: "transparent", size: "sm", onClick: function() {
        return onNavigationClick("prev");
      } }, navPrevIcon !== null && navPrevIcon !== void 0 ? navPrevIcon : React$1.createElement("span", { className: "calendar-nav-icon calendar-nav-icon-prev" }))
    ),
    React$1.createElement(
      "div",
      __assign$1({ className: "calendar-nav-date" }, navYearFirst && { style: { display: "flex", justifyContent: "center" } }),
      view === "days" && React$1.createElement(CButton, { color: "transparent", size: "sm", onClick: function() {
        return navigation && onMonthClick();
      } }, date && date.toLocaleDateString(locale2, { month: "long" })),
      React$1.createElement(CButton, __assign$1({ color: "transparent", size: "sm", onClick: function() {
        return navigation && onYearClick();
      } }, navYearFirst && { style: { order: "-1" } }), date && date.toLocaleDateString(locale2, { year: "numeric" }))
    ),
    navigation && React$1.createElement(
      "div",
      { className: "calendar-nav-next" },
      view === "days" && React$1.createElement(CButton, { color: "transparent", size: "sm", onClick: function() {
        return onNavigationClick("next");
      } }, navNextIcon !== null && navNextIcon !== void 0 ? navNextIcon : React$1.createElement("span", { className: "calendar-nav-icon calendar-nav-icon-next" })),
      React$1.createElement(CButton, { color: "transparent", size: "sm", onClick: function() {
        return onNavigationClick("next", true);
      } }, navNextDoubleIcon !== null && navNextDoubleIcon !== void 0 ? navNextDoubleIcon : React$1.createElement("span", { className: "calendar-nav-icon calendar-nav-icon-double-next" }))
    )
  );
};
var CCalendar = reactExports.forwardRef(function(_a2, ref) {
  var startDate = _a2.startDate, endDate = _a2.endDate, _b2 = _a2.calendarDate, calendarDate = _b2 === void 0 ? startDate || endDate || null : _b2, _c2 = _a2.calendars, calendars = _c2 === void 0 ? 1 : _c2, className = _a2.className, _d2 = _a2.dayFormat, dayFormat = _d2 === void 0 ? "numeric" : _d2, disabledDates = _a2.disabledDates, _e2 = _a2.firstDayOfWeek, firstDayOfWeek = _e2 === void 0 ? 1 : _e2, _f2 = _a2.locale, locale2 = _f2 === void 0 ? "default" : _f2, maxDate = _a2.maxDate, minDate = _a2.minDate, _g2 = _a2.navigation, navigation = _g2 === void 0 ? true : _g2, navNextIcon = _a2.navNextIcon, navNextDoubleIcon = _a2.navNextDoubleIcon, navPrevIcon = _a2.navPrevIcon, navPrevDoubleIcon = _a2.navPrevDoubleIcon, navYearFirst = _a2.navYearFirst, range = _a2.range, _h2 = _a2.selectAdjacementDays, selectAdjacementDays = _h2 === void 0 ? false : _h2, selectEndDate = _a2.selectEndDate, _j2 = _a2.showAdjacementDays, showAdjacementDays = _j2 === void 0 ? true : _j2, _k2 = _a2.weekdayFormat, weekdayFormat = _k2 === void 0 ? 2 : _k2, onDayHover = _a2.onDayHover, onCalendarDateChange = _a2.onCalendarDateChange, onEndDateChange = _a2.onEndDateChange, onStartDateChange = _a2.onStartDateChange, onSelectEndChange = _a2.onSelectEndChange, onViewChanged = _a2.onViewChanged;
  var isInitialMount = reactExports.useRef(true);
  var _l2 = reactExports.useState(null), _calendarDate = _l2[0], setCalendarDate = _l2[1];
  reactExports.useEffect(function() {
    if (calendarDate === null) {
      setCalendarDate(/* @__PURE__ */ new Date());
      return;
    }
    if (calendarDate) {
      var date = new Date(calendarDate);
      !isSameDateAs(_calendarDate, date) && setCalendarDate(date);
    }
  }, [calendarDate]);
  var _m2 = useStateWithCallback(startDate ? new Date(startDate) : null, onStartDateChange, !isInitialMount.current), _startDate = _m2[0], setStartDate = _m2[1];
  reactExports.useEffect(function() {
    var date = startDate ? new Date(startDate) : null;
    if (!isSameDateAs(date, _startDate)) {
      setStartDate(date);
    }
  }, [startDate]);
  var _o = useStateWithCallback(endDate ? new Date(endDate) : null, onEndDateChange, !isInitialMount.current), _endDate = _o[0], setEndDate = _o[1];
  reactExports.useEffect(function() {
    var date = endDate ? new Date(endDate) : null;
    if (!isSameDateAs(date, _endDate)) {
      setEndDate(date);
    }
  }, [endDate]);
  var _p = reactExports.useState(null), _hoverDate = _p[0], setHoverDate = _p[1];
  var _q = reactExports.useState(maxDate ? new Date(maxDate) : null), _maxDate = _q[0], setMaxDate = _q[1];
  reactExports.useEffect(function() {
    maxDate && setMaxDate(new Date(maxDate));
  }, [maxDate]);
  var _r = reactExports.useState(minDate ? new Date(minDate) : null), _minDate = _r[0], setMinDate = _r[1];
  reactExports.useEffect(function() {
    minDate && setMinDate(new Date(minDate));
  }, [minDate]);
  var _s = useStateWithCallback(selectEndDate, onSelectEndChange), _selectEndDate = _s[0], setSelectEndDate = _s[1];
  reactExports.useEffect(function() {
    setSelectEndDate(selectEndDate);
  }, [selectEndDate]);
  reactExports.useEffect(function() {
    !isInitialMount.current && typeof _selectEndDate === "boolean" && onSelectEndChange && onSelectEndChange(_selectEndDate);
  }, [_selectEndDate]);
  var _t = useStateWithCallback("days", onViewChanged), view = _t[0], setView = _t[1];
  reactExports.useEffect(function() {
    isInitialMount.current = false;
  }, []);
  var setCalendarPage = function(years, months, setMonth) {
    if (months === void 0) {
      months = 0;
    }
    if (_calendarDate === null) {
      return;
    }
    var year = _calendarDate.getFullYear();
    var month = _calendarDate.getMonth();
    var d3 = new Date(year, month, 1);
    years && d3.setFullYear(d3.getFullYear() + years);
    months && d3.setMonth(d3.getMonth() + months);
    typeof setMonth === "number" && d3.setMonth(setMonth);
    setCalendarDate(d3);
    onCalendarDateChange && onCalendarDateChange(d3);
  };
  var handleDayClick = function(date, index) {
    if (isDateDisabled(date, _minDate, _maxDate, disabledDates)) {
      return;
    }
    var _date = new Date(date);
    setCalendarDate(index ? new Date(_date.setMonth(_date.getMonth() - index)) : _date);
    if (range) {
      if (_selectEndDate) {
        setSelectEndDate(false);
        if (_startDate && _startDate > date) {
          setStartDate(null);
          setEndDate(null);
          return;
        }
        if (isDisableDateInRange(_startDate, date, disabledDates)) {
          setStartDate(null);
          setEndDate(null);
          return;
        }
        setEndDate(date);
        return;
      }
      if (_endDate && _endDate < date) {
        setStartDate(null);
        setEndDate(null);
        return;
      }
      if (isDisableDateInRange(date, _endDate, disabledDates)) {
        setStartDate(null);
        setEndDate(null);
        return;
      }
      setSelectEndDate(true);
      setStartDate(date);
      return;
    }
    setStartDate(date);
  };
  var handleDayKeyDown = function(event, date, index) {
    if (event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      handleDayClick(date, index);
    }
  };
  var handleDayMouseEnter = function(date) {
    if (isDateDisabled(date, _minDate, _maxDate, disabledDates)) {
      return;
    }
    setHoverDate(date);
    onDayHover && onDayHover(date);
  };
  var handleDayMouseLeave = function() {
    setHoverDate(null);
    onDayHover && onDayHover(null);
  };
  var handleMonthClick = function(month) {
    setCalendarPage(0, 0, month);
    setView("days");
  };
  var handleMonthKeyDown = function(event, month) {
    if (event.code === "Space" || event.key === "Enter") {
      handleMonthClick(month);
    }
  };
  var handleNavigationOnClick = function(direction, double) {
    if (double === void 0) {
      double = false;
    }
    if (direction === "prev") {
      if (double) {
        setCalendarPage(view === "years" ? -10 : -1);
        return;
      }
      if (view !== "days") {
        setCalendarPage(-1);
        return;
      }
      setCalendarPage(0, -1);
      return;
    }
    if (direction === "next") {
      if (double) {
        setCalendarPage(view === "years" ? 10 : 1);
        return;
      }
      if (view !== "days") {
        setCalendarPage(1);
        return;
      }
      setCalendarPage(0, 1);
      return;
    }
  };
  var handleYearClick = function(date) {
    setCalendarDate(date);
    setView("months");
  };
  var handleYearKeyDown = function(event, date) {
    if (event.code === "Space" || event.key === "Enter") {
      handleYearClick(date);
    }
  };
  return React$1.createElement("div", { className: classNames$1("calendars", className) }, _calendarDate && Array.from({ length: calendars }, function(_, index) {
    return React$1.createElement(
      "div",
      { className: classNames$1("calendar", view), key: index, ref },
      React$1.createElement(Navigation, { addMonths: index, calendarDate: _calendarDate, locale: locale2, navigation, navNextDoubleIcon, navNextIcon, navPrevDoubleIcon, navPrevIcon, navYearFirst, onMonthClick: function() {
        return setView("months");
      }, onNavigationClick: handleNavigationOnClick, onYearClick: function() {
        return setView("years");
      }, view }),
      React$1.createElement(Calendar, { addMonths: index, calendarDate: _calendarDate, dayFormat, disabledDates, endDate: _endDate, firstDayOfWeek, hoverDate: _hoverDate, locale: locale2, maxDate: _maxDate, minDate: _minDate, onDayClick: function(date) {
        return handleDayClick(date, index);
      }, onDayKeyDown: function(event, date) {
        return handleDayKeyDown(event, date, index);
      }, onDayMouseEnter: handleDayMouseEnter, onDayMouseLeave: handleDayMouseLeave, onMonthClick: handleMonthClick, onMonthKeyDown: handleMonthKeyDown, onYearClick: handleYearClick, onYearKeyDown: handleYearKeyDown, selectEndDate: _selectEndDate, selectAdjacementDays, showAdjacementDays, startDate: _startDate, view, weekdayFormat })
    );
  }));
});
CCalendar.propTypes = {
  className: PropTypes$1.string,
  calendarDate: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]),
  calendars: PropTypes$1.number,
  dayFormat: PropTypes$1.oneOfType([
    PropTypes$1.func,
    PropTypes$1.oneOf(["2-digit", "numeric"])
  ]),
  disabledDates: PropTypes$1.array,
  endDate: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]),
  firstDayOfWeek: PropTypes$1.number,
  locale: PropTypes$1.string,
  maxDate: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]),
  minDate: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]),
  navigation: PropTypes$1.bool,
  navNextIcon: PropTypes$1.node,
  navNextDoubleIcon: PropTypes$1.node,
  navPrevIcon: PropTypes$1.node,
  navPrevDoubleIcon: PropTypes$1.node,
  navYearFirst: PropTypes$1.bool,
  range: PropTypes$1.bool,
  selectAdjacementDays: PropTypes$1.bool,
  selectEndDate: PropTypes$1.bool,
  showAdjacementDays: PropTypes$1.bool,
  startDate: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]),
  weekdayFormat: PropTypes$1.oneOfType([
    PropTypes$1.func,
    PropTypes$1.number,
    PropTypes$1.oneOf(["long", "narrow", "short"])
  ]),
  onDayHover: PropTypes$1.func,
  onCalendarDateChange: PropTypes$1.func,
  onEndDateChange: PropTypes$1.func,
  onSelectEndChange: PropTypes$1.func,
  onStartDateChange: PropTypes$1.func,
  onViewChanged: PropTypes$1.func
};
CCalendar.displayName = "CCalendar";
var CFormFeedback = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, _c2 = _a2.component, Component = _c2 === void 0 ? "div" : _c2, invalid = _a2.invalid, tooltip = _a2.tooltip, valid = _a2.valid, rest = __rest$1(_a2, ["children", "className", "component", "invalid", "tooltip", "valid"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1((_b2 = {}, _b2["invalid-".concat(tooltip ? "tooltip" : "feedback")] = invalid, _b2["valid-".concat(tooltip ? "tooltip" : "feedback")] = valid, _b2), className) }, rest, { ref }), children);
});
CFormFeedback.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  invalid: PropTypes$1.bool,
  tooltip: PropTypes$1.bool,
  valid: PropTypes$1.bool
};
CFormFeedback.displayName = "CFormFeedback";
var CFormControlValidation = function(_a2) {
  var describedby = _a2.describedby, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, invalid = _a2.invalid, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid;
  return React$1.createElement(
    React$1.Fragment,
    null,
    feedback && (valid || invalid) && React$1.createElement(CFormFeedback, __assign$1({}, invalid && { id: describedby }, { invalid, tooltip: tooltipFeedback, valid }), feedback),
    feedbackInvalid && React$1.createElement(CFormFeedback, { id: describedby, invalid: true, tooltip: tooltipFeedback }, feedbackInvalid),
    feedbackValid && React$1.createElement(CFormFeedback, { valid: true, tooltip: tooltipFeedback }, feedbackValid)
  );
};
CFormControlValidation.propTypes = {
  describedby: PropTypes$1.string,
  feedback: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  feedbackValid: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  feedbackInvalid: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  invalid: PropTypes$1.bool,
  tooltipFeedback: PropTypes$1.bool,
  valid: PropTypes$1.bool
};
CFormControlValidation.displayName = "CFormControlValidation";
var CFormFloating = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("form-floating", className) }, rest, { ref }), children);
});
CFormFloating.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CFormFloating.displayName = "CFormFloating";
var CFormLabel = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, customClassName = _a2.customClassName, rest = __rest$1(_a2, ["children", "className", "customClassName"]);
  return React$1.createElement("label", __assign$1({ className: customClassName !== null && customClassName !== void 0 ? customClassName : classNames$1("form-label", className) }, rest, { ref }), children);
});
CFormLabel.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  customClassName: PropTypes$1.string
};
CFormLabel.displayName = "CFormLabel";
var CFormText = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "div" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("form-text", className) }, rest, { ref }), children);
});
CFormText.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CFormText.displayName = "CFormText";
var CFormControlWrapper = function(_a2) {
  var children = _a2.children, describedby = _a2.describedby, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, floatingClassName = _a2.floatingClassName, floatingLabel = _a2.floatingLabel, id = _a2.id, invalid = _a2.invalid, label = _a2.label, text = _a2.text, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid;
  var FormControlValidation = function() {
    return React$1.createElement(CFormControlValidation, { describedby, feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  return floatingLabel ? React$1.createElement(
    CFormFloating,
    { className: floatingClassName },
    children,
    React$1.createElement(CFormLabel, { htmlFor: id }, label || floatingLabel),
    text && React$1.createElement(CFormText, { id: describedby }, text),
    React$1.createElement(FormControlValidation, null)
  ) : React$1.createElement(
    React$1.Fragment,
    null,
    label && React$1.createElement(CFormLabel, { htmlFor: id }, label),
    children,
    text && React$1.createElement(CFormText, { id: describedby }, text),
    React$1.createElement(FormControlValidation, null)
  );
};
CFormControlWrapper.propTypes = __assign$1({ children: PropTypes$1.node, floatingClassName: PropTypes$1.string, floatingLabel: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]), label: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]), text: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]) }, CFormControlValidation.propTypes);
CFormControlWrapper.displayName = "CFormControlWrapper";
var CPicker = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.container, container = _b2 === void 0 ? "dropdown" : _b2, disabled = _a2.disabled, dropdownClassNames = _a2.dropdownClassNames, footer = _a2.footer, footerContent = _a2.footerContent, onHide = _a2.onHide, onShow = _a2.onShow, toggler = _a2.toggler, visible = _a2.visible;
  var pickerRef = reactExports.useRef(null);
  var pickerForkedRef = useForkedRef(ref, pickerRef);
  var dropdownRef = reactExports.useRef(null);
  var togglerRef = reactExports.useRef(null);
  var _c2 = usePopper(), initPopper = _c2.initPopper, destroyPopper = _c2.destroyPopper;
  var _d2 = reactExports.useState(visible), _visible = _d2[0], setVisible = _d2[1];
  var popperConfig = {
    placement: isRTL(pickerRef.current) ? "bottom-end" : "bottom-start",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary: "clippingParents"
        }
      },
      {
        name: "offset",
        options: {
          offset: [0, 2]
        }
      }
    ]
  };
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    if (container !== "inline" && _visible) {
      onShow && onShow();
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("keyup", handleKeyUp);
      togglerRef.current && dropdownRef.current && initPopper(togglerRef.current, dropdownRef.current, popperConfig);
    }
    return function() {
      onHide && onHide();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keyup", handleKeyUp);
      destroyPopper();
    };
  }, [_visible]);
  var handleKeyUp = function(event) {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };
  var handleMouseUp = function(event) {
    if (pickerRef.current && pickerRef.current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };
  switch (container) {
    case "inline": {
      return React$1.createElement("div", { className: classNames$1("picker", className), ref: pickerForkedRef }, children);
    }
    default: {
      return React$1.createElement(
        "div",
        { className: classNames$1("dropdown", "picker", className, {
          show: _visible
        }), onClick: function() {
          return !disabled && setVisible(true);
        }, ref: pickerForkedRef },
        toggler && React$1.isValidElement(toggler) && React$1.cloneElement(toggler, {
          ref: togglerRef
        }),
        React$1.createElement(
          "div",
          { className: classNames$1("dropdown-menu", {
            show: _visible
          }, dropdownClassNames), ref: dropdownRef },
          children,
          footer && footerContent
        )
      );
    }
  }
});
CPicker.displayName = "CPicker";
CPicker.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  container: PropTypes$1.oneOf(["dropdown", "inline"]),
  disabled: PropTypes$1.bool,
  dropdownClassNames: PropTypes$1.string,
  footer: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]),
  footerContent: PropTypes$1.node,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  toggler: PropTypes$1.node
};
var CTimePickerRollCol = reactExports.forwardRef(function(_a2, ref) {
  var elements = _a2.elements, onClick = _a2.onClick, selected = _a2.selected;
  var init = reactExports.useRef(true);
  var colRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, colRef);
  var isVisible = useIsVisible(colRef);
  reactExports.useEffect(function() {
    var _a3, _b2;
    var nodeEl = (_a3 = colRef.current) === null || _a3 === void 0 ? void 0 : _a3.querySelector(".selected");
    if (isVisible && nodeEl && nodeEl instanceof HTMLElement) {
      (_b2 = colRef.current) === null || _b2 === void 0 ? void 0 : _b2.scrollTo({
        top: nodeEl.offsetTop,
        behavior: init.current ? "auto" : "smooth"
      });
    }
    if (isVisible) {
      init.current = false;
    }
  }, [isVisible, selected]);
  var handleKeyDown = function(event, value) {
    if (event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      onClick && onClick(value);
    }
  };
  return React$1.createElement("div", { className: "time-picker-roll-col", ref: forkedRef }, elements.map(function(element, index) {
    return React$1.createElement("div", { className: classNames$1("time-picker-roll-cell", {
      selected: element.value === selected
    }), key: index, onClick: function() {
      return onClick && onClick(element.value);
    }, onKeyDown: function(event) {
      return handleKeyDown(event, element.value);
    }, role: "button", tabIndex: 0 }, element.label);
  }));
});
CTimePickerRollCol.propTypes = {
  elements: PropTypes$1.array.isRequired,
  onClick: PropTypes$1.func,
  selected: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string])
};
CTimePickerRollCol.displayName = "CTimePickerRollCol";
var convert12hTo24h = function(abbr, hour) {
  if (abbr === "am" && hour === 12) {
    return 0;
  }
  if (abbr === "am") {
    return hour;
  }
  if (abbr === "pm" && hour === 12) {
    return 12;
  }
  return hour + 12;
};
var convert24hTo12h = function(hour) {
  return hour % 12 || 12;
};
var convertTimeToDate = function(time) {
  return time ? time instanceof Date ? new Date(time) : new Date("1970-01-01 ".concat(time)) : null;
};
var getAmPm = function(date, locale2) {
  if (date.toLocaleTimeString(locale2).includes("AM")) {
    return "am";
  }
  if (date.toLocaleTimeString(locale2).includes("PM")) {
    return "pm";
  }
  return date.getHours() >= 12 ? "pm" : "am";
};
var getLocalizedTimePartials = function(locale2, ampm) {
  if (ampm === void 0) {
    ampm = "auto";
  }
  var date = /* @__PURE__ */ new Date();
  var hour12 = ["am", "AM", "pm", "PM"].some(function(el) {
    return date.toLocaleString(locale2).includes(el);
  });
  var listOfHours = Array.from({ length: ampm === "auto" && hour12 || ampm === true ? 12 : 24 }, function(_, i2) {
    return {
      value: ampm === "auto" && hour12 || ampm === true ? i2 + 1 : i2,
      label: (ampm === "auto" && hour12 || ampm === true ? i2 + 1 : i2).toLocaleString(locale2)
    };
  });
  var listOfMinutesSeconds = Array.from({ length: 60 }, function(_, i2) {
    date.setMinutes(i2);
    return {
      value: i2,
      label: date.toLocaleTimeString(locale2, {
        minute: "2-digit",
        second: "2-digit"
      }).split(/[^A-Za-z0-9\u06F0-\u06F90-9]/)[0]
    };
  });
  return {
    listOfHours,
    listOfMinutes: listOfMinutesSeconds,
    listOfSeconds: listOfMinutesSeconds,
    hour12
  };
};
var getSelectedHour = function(date, locale2, ampm) {
  if (ampm === void 0) {
    ampm = "auto";
  }
  return date ? ampm === "auto" && isAmPm(locale2) || ampm === true ? convert24hTo12h(date.getHours()) : date.getHours() : "";
};
var getSelectedMinutes = function(date) {
  return date ? date.getMinutes() : "";
};
var getSelectedSeconds = function(date) {
  return date ? date.getSeconds() : "";
};
var isAmPm = function(locale2) {
  return ["am", "AM", "pm", "PM"].some(function(el) {
    return (/* @__PURE__ */ new Date()).toLocaleString(locale2).includes(el);
  });
};
var isValidTime = function(time) {
  var d3 = new Date("1970-01-01 ".concat(time));
  return d3 instanceof Date && d3.getTime();
};
var _a$1, _b$1, _c$1, _d$1, _e$1, _f$1;
var CTimePicker = reactExports.forwardRef(function(_a2, ref) {
  var _b2, _c2;
  var _d2 = _a2.ampm, ampm = _d2 === void 0 ? "auto" : _d2, _e2 = _a2.cancelButton, cancelButton = _e2 === void 0 ? "Cancel" : _e2, _f2 = _a2.cancelButtonColor, cancelButtonColor = _f2 === void 0 ? "primary" : _f2, _g2 = _a2.cancelButtonSize, cancelButtonSize = _g2 === void 0 ? "sm" : _g2, _h2 = _a2.cancelButtonVariant, cancelButtonVariant = _h2 === void 0 ? "ghost" : _h2, className = _a2.className, _j2 = _a2.cleaner, cleaner = _j2 === void 0 ? true : _j2, _k2 = _a2.confirmButton, confirmButton = _k2 === void 0 ? "OK" : _k2, _l2 = _a2.confirmButtonColor, confirmButtonColor = _l2 === void 0 ? "primary" : _l2, _m2 = _a2.confirmButtonSize, confirmButtonSize = _m2 === void 0 ? "sm" : _m2, confirmButtonVariant = _a2.confirmButtonVariant, _o = _a2.container, container = _o === void 0 ? "dropdown" : _o, disabled = _a2.disabled, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, _p = _a2.footer, footer = _p === void 0 ? true : _p, id = _a2.id, _q = _a2.indicator, indicator = _q === void 0 ? true : _q, inputReadOnly = _a2.inputReadOnly, invalid = _a2.invalid, label = _a2.label, _r = _a2.locale, locale2 = _r === void 0 ? "default" : _r, onTimeChange = _a2.onTimeChange, onHide = _a2.onHide, onShow = _a2.onShow, _s = _a2.placeholder, placeholder = _s === void 0 ? "Select time" : _s, required = _a2.required, _t = _a2.seconds, seconds = _t === void 0 ? true : _t, size = _a2.size, text = _a2.text, time = _a2.time, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid, _u = _a2.variant, variant = _u === void 0 ? "roll" : _u, visible = _a2.visible, rest = __rest$1(_a2, ["ampm", "cancelButton", "cancelButtonColor", "cancelButtonSize", "cancelButtonVariant", "className", "cleaner", "confirmButton", "confirmButtonColor", "confirmButtonSize", "confirmButtonVariant", "container", "disabled", "feedback", "feedbackInvalid", "feedbackValid", "footer", "id", "indicator", "inputReadOnly", "invalid", "label", "locale", "onTimeChange", "onHide", "onShow", "placeholder", "required", "seconds", "size", "text", "time", "tooltipFeedback", "valid", "variant", "visible"]);
  var formRef = reactExports.useRef();
  var inputRef = reactExports.useRef(null);
  var _v = reactExports.useState(convertTimeToDate(time)), date = _v[0], setDate = _v[1];
  var _w = reactExports.useState(null), initialDate = _w[0], setInitialDate = _w[1];
  var _x = reactExports.useState(valid !== null && valid !== void 0 ? valid : invalid === true ? false : void 0), isValid2 = _x[0], setIsValid = _x[1];
  var _y = reactExports.useState(date ? getAmPm(new Date(date), locale2) : "am"), _ampm = _y[0], setAmPm = _y[1];
  var _z = reactExports.useState(visible), _visible = _z[0], setVisible = _z[1];
  var _0 = reactExports.useState({
    listOfHours: [],
    listOfMinutes: [],
    listOfSeconds: [],
    hour12: false
  }), localizedTimePartials = _0[0], setLocalizedTimePartials = _0[1];
  reactExports.useEffect(function() {
    setDate(time ? convertTimeToDate(time) : null);
  }, [time]);
  reactExports.useEffect(function() {
    setIsValid(valid !== null && valid !== void 0 ? valid : invalid === true ? false : void 0);
  }, [valid, invalid]);
  reactExports.useEffect(function() {
    setLocalizedTimePartials(getLocalizedTimePartials(locale2, ampm));
    if (inputRef.current) {
      inputRef.current.value = date ? date.toLocaleTimeString(locale2, __assign$1({ hour12: localizedTimePartials && localizedTimePartials.hour12 }, !seconds && { timeStyle: "short" })) : "";
    }
    date && setAmPm(getAmPm(new Date(date), locale2));
  }, [date]);
  reactExports.useEffect(function() {
    if (inputRef.current && inputRef.current.form) {
      formRef.current = inputRef.current.form;
    }
  }, [inputRef]);
  reactExports.useEffect(function() {
    if (formRef.current) {
      formRef.current.addEventListener("submit", function(event) {
        setTimeout(function() {
          return handleFormValidation(event.target);
        });
      });
      handleFormValidation(formRef.current);
    }
  }, [formRef, date]);
  var handleClear = function(event) {
    event.stopPropagation();
    setDate(null);
    onTimeChange && onTimeChange(null);
  };
  var handleFormValidation = function(form) {
    if (!form.classList.contains("was-validated")) {
      return;
    }
    if (date) {
      return setIsValid(true);
    }
    setIsValid(false);
  };
  var handleTimeChange = function(set, value) {
    var _date = date || /* @__PURE__ */ new Date("1970-01-01");
    if (set === "toggle") {
      if (value === "am") {
        _date.setHours(_date.getHours() - 12);
      }
      if (value === "pm") {
        _date.setHours(_date.getHours() + 12);
      }
    }
    if (set === "hours") {
      if (localizedTimePartials && localizedTimePartials.hour12) {
        _date.setHours(convert12hTo24h(_ampm, Number.parseInt(value)));
      } else {
        _date.setHours(Number.parseInt(value));
      }
    }
    if (set === "minutes") {
      _date.setMinutes(Number.parseInt(value));
    }
    if (set === "seconds") {
      _date.setSeconds(Number.parseInt(value));
    }
    setDate(new Date(_date));
    onTimeChange && onTimeChange(_date.toTimeString(), _date.toLocaleTimeString(), _date);
  };
  var InputGroup = function() {
    var _a3;
    return React$1.createElement(
      "div",
      { className: classNames$1("input-group", "picker-input-group", (_a3 = {}, _a3["input-group-".concat(size)] = size, _a3)) },
      React$1.createElement("input", { autoComplete: "off", className: "form-control", disabled, onChange: function(event) {
        return isValidTime(event.target.value) && setDate(convertTimeToDate(event.target.value));
      }, placeholder, readOnly: inputReadOnly, required, ref: inputRef }),
      (indicator || cleaner) && React$1.createElement(
        "span",
        { className: "input-group-text" },
        indicator && React$1.createElement("span", { className: "picker-input-group-indicator" }, typeof indicator === "boolean" ? React$1.createElement("span", { className: "picker-input-group-icon time-picker-input-icon" }) : indicator),
        cleaner && date && React$1.createElement("span", { className: "picker-input-group-cleaner", role: "button", onClick: function(event) {
          return handleClear(event);
        } }, typeof cleaner === "boolean" ? React$1.createElement("span", { className: "picker-input-group-icon time-picker-cleaner-icon" }) : cleaner)
      )
    );
  };
  var TimePickerSelect = function() {
    return React$1.createElement(
      React$1.Fragment,
      null,
      React$1.createElement("span", { className: "time-picker-inline-icon" }),
      React$1.createElement("select", { className: "form-select", disabled, onChange: function(event) {
        return handleTimeChange("hours", event.target.value);
      }, value: getSelectedHour(date, locale2) }, localizedTimePartials && localizedTimePartials.listOfHours.map(function(option, index) {
        return React$1.createElement("option", { value: option.value.toString(), key: index }, option.label);
      })),
      React$1.createElement(React$1.Fragment, null, ":"),
      React$1.createElement("select", { className: "form-select", disabled, onChange: function(event) {
        return handleTimeChange("minutes", event.target.value);
      }, value: getSelectedMinutes(date) }, localizedTimePartials && localizedTimePartials.listOfMinutes.map(function(option, index) {
        return React$1.createElement("option", { value: option.value.toString(), key: index }, option.label);
      })),
      seconds && React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(React$1.Fragment, null, ":"),
        React$1.createElement("select", { className: "form-select", disabled, onChange: function(event) {
          return handleTimeChange("seconds", event.target.value);
        }, value: getSelectedSeconds(date) }, localizedTimePartials && localizedTimePartials.listOfSeconds.map(function(option, index) {
          return React$1.createElement("option", { value: option.value.toString(), key: index }, option.label);
        }))
      ),
      localizedTimePartials && localizedTimePartials.hour12 && React$1.createElement(
        "select",
        { className: "form-select", disabled, onChange: function(event) {
          return handleTimeChange("toggle", event.target.value);
        }, value: _ampm },
        React$1.createElement("option", { value: "am" }, "AM"),
        React$1.createElement("option", { value: "pm" }, "PM")
      )
    );
  };
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, id, invalid: isValid2 === false ? true : false, label, text, tooltipFeedback, valid: isValid2 },
    React$1.createElement(
      CPicker,
      __assign$1({ className: classNames$1("time-picker", (_b2 = {}, _b2["time-picker-".concat(size)] = size, _b2.disabled = disabled, _b2["is-invalid"] = isValid2 === false ? true : false, _b2["is-valid"] = isValid2, _b2), className), container, disabled, dropdownClassNames: "time-picker-dropdown", footer, footerContent: React$1.createElement(
        "div",
        { className: "picker-footer" },
        cancelButton && React$1.createElement(CButton, { color: cancelButtonColor, size: cancelButtonSize, variant: cancelButtonVariant, onClick: function() {
          initialDate && setDate(new Date(initialDate));
          setVisible(false);
        } }, cancelButton),
        confirmButton && React$1.createElement(CButton, { color: confirmButtonColor, size: confirmButtonSize, variant: confirmButtonVariant, onClick: function() {
          setVisible(false);
        } }, confirmButton)
      ), id, onHide: function() {
        setVisible(false);
        onHide && onHide();
      }, onShow: function() {
        date && setInitialDate(new Date(date));
        setVisible(true);
        onShow && onShow();
      }, toggler: InputGroup(), visible: _visible }, rest, { ref }),
      React$1.createElement("div", { className: classNames$1("time-picker-body", (_c2 = {}, _c2["time-picker-roll"] = variant === "roll", _c2)) }, variant === "select" ? React$1.createElement(TimePickerSelect, null) : React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(CTimePickerRollCol, { elements: localizedTimePartials && localizedTimePartials.listOfHours, onClick: function(index) {
          return handleTimeChange("hours", index.toString());
        }, selected: getSelectedHour(date, locale2, ampm) }),
        React$1.createElement(CTimePickerRollCol, { elements: localizedTimePartials && localizedTimePartials.listOfMinutes, onClick: function(index) {
          return handleTimeChange("minutes", index.toString());
        }, selected: getSelectedMinutes(date) }),
        seconds && React$1.createElement(CTimePickerRollCol, { elements: localizedTimePartials && localizedTimePartials.listOfSeconds, onClick: function(index) {
          return handleTimeChange("seconds", index.toString());
        }, selected: getSelectedSeconds(date) }),
        localizedTimePartials && localizedTimePartials.hour12 && React$1.createElement(CTimePickerRollCol, { elements: [
          { value: "am", label: "AM" },
          { value: "pm", label: "PM" }
        ], onClick: function(value) {
          return handleTimeChange("toggle", value);
        }, selected: _ampm })
      ))
    )
  );
});
CTimePicker.propTypes = __assign$1(__assign$1(__assign$1({}, CFormControlWrapper.propTypes), CPicker.propTypes), { ampm: PropTypes$1.oneOfType([PropTypes$1.oneOf(["auto"]), PropTypes$1.bool]), cancelButton: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), cancelButtonColor: (_a$1 = CButton.propTypes) === null || _a$1 === void 0 ? void 0 : _a$1.color, cancelButtonSize: (_b$1 = CButton.propTypes) === null || _b$1 === void 0 ? void 0 : _b$1.size, cancelButtonVariant: (_c$1 = CButton.propTypes) === null || _c$1 === void 0 ? void 0 : _c$1.variant, className: PropTypes$1.string, confirmButton: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), confirmButtonColor: (_d$1 = CButton.propTypes) === null || _d$1 === void 0 ? void 0 : _d$1.color, confirmButtonSize: (_e$1 = CButton.propTypes) === null || _e$1 === void 0 ? void 0 : _e$1.size, confirmButtonVariant: (_f$1 = CButton.propTypes) === null || _f$1 === void 0 ? void 0 : _f$1.variant, locale: PropTypes$1.string, onTimeChange: PropTypes$1.func, required: PropTypes$1.bool, seconds: PropTypes$1.bool, time: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]), variant: PropTypes$1.oneOf(["roll", "select"]) });
CTimePicker.displayName = "CTimePicker";
var getLocalDateFromString = function(string, locale2, time) {
  if (!Number.isNaN(Date.parse(string))) {
    return new Date(Date.parse(string));
  }
  var date = new Date(2013, 11, 31, 17, 19, 22);
  var regex = time ? date.toLocaleString(locale2) : date.toLocaleDateString(locale2);
  regex = regex.replace("2013", "(?<year>[0-9]{2,4})").replace("12", "(?<month>[0-9]{1,2})").replace("31", "(?<day>[0-9]{1,2})");
  if (time) {
    regex = regex.replace("5", "(?<hour>[0-9]{1,2})").replace("17", "(?<hour>[0-9]{1,2})").replace("19", "(?<minute>[0-9]{1,2})").replace("22", "(?<second>[0-9]{1,2})").replace("PM", "(?<ampm>[A-Z]{2})");
  }
  var rgx = new RegExp("".concat(regex));
  var partials = string.match(rgx);
  if (partials === null)
    return;
  var newDate = partials.groups && (time ? new Date(Number(partials.groups["year"]), Number(partials.groups["month"]) - 1, Number(partials.groups["day"]), partials.groups["ampm"] ? partials.groups["ampm"] === "PM" ? Number(partials.groups["hour"]) + 12 : Number(partials.groups["hour"]) : Number(partials.groups["hour"]), Number(partials.groups["minute"]), Number(partials.groups["second"])) : new Date(Number(partials.groups["year"]), Number(partials.groups["month"]) - 1, Number(partials.groups["day"])));
  return newDate;
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
var CDateRangePicker = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var _c2 = _a2.calendars, calendars = _c2 === void 0 ? 2 : _c2, calendarDate = _a2.calendarDate, _d2 = _a2.cancelButton, cancelButton = _d2 === void 0 ? "Cancel" : _d2, _e2 = _a2.cancelButtonColor, cancelButtonColor = _e2 === void 0 ? "primary" : _e2, _f2 = _a2.cancelButtonSize, cancelButtonSize = _f2 === void 0 ? "sm" : _f2, _g2 = _a2.cancelButtonVariant, cancelButtonVariant = _g2 === void 0 ? "ghost" : _g2, className = _a2.className, _h2 = _a2.cleaner, cleaner = _h2 === void 0 ? true : _h2, _j2 = _a2.closeOnSelect, closeOnSelect = _j2 === void 0 ? true : _j2, _k2 = _a2.confirmButton, confirmButton = _k2 === void 0 ? "OK" : _k2, _l2 = _a2.confirmButtonColor, confirmButtonColor = _l2 === void 0 ? "primary" : _l2, _m2 = _a2.confirmButtonSize, confirmButtonSize = _m2 === void 0 ? "sm" : _m2, confirmButtonVariant = _a2.confirmButtonVariant, dayFormat = _a2.dayFormat, disabled = _a2.disabled, disabledDates = _a2.disabledDates, endDate = _a2.endDate, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, firstDayOfWeek = _a2.firstDayOfWeek, format$1 = _a2.format, footer = _a2.footer, id = _a2.id, _o = _a2.indicator, indicator = _o === void 0 ? true : _o, inputDateFormat = _a2.inputDateFormat, inputDateParse = _a2.inputDateParse, _p = _a2.inputOnChangeDelay, inputOnChangeDelay = _p === void 0 ? 750 : _p, inputReadOnly = _a2.inputReadOnly, invalid = _a2.invalid, label = _a2.label, _q = _a2.locale, locale2 = _q === void 0 ? "default" : _q, maxDate = _a2.maxDate, minDate = _a2.minDate, navigation = _a2.navigation, navYearFirst = _a2.navYearFirst, onEndDateChange = _a2.onEndDateChange, onHide = _a2.onHide, onStartDateChange = _a2.onStartDateChange, onShow = _a2.onShow, _r = _a2.placeholder, placeholder = _r === void 0 ? ["Start date", "End date"] : _r, _s = _a2.range, range = _s === void 0 ? true : _s, ranges = _a2.ranges, _t = _a2.rangesButtonsColor, rangesButtonsColor = _t === void 0 ? "secondary" : _t, rangesButtonsSize = _a2.rangesButtonsSize, _u = _a2.rangesButtonsVariant, rangesButtonsVariant = _u === void 0 ? "ghost" : _u, required = _a2.required, _v = _a2.separator, separator = _v === void 0 ? true : _v, selectAdjacementDays = _a2.selectAdjacementDays, showAdjacementDays = _a2.showAdjacementDays, size = _a2.size, startDate = _a2.startDate, text = _a2.text, timepicker = _a2.timepicker, toggler = _a2.toggler, _w = _a2.todayButton, todayButton = _w === void 0 ? "Today" : _w, _x = _a2.todayButtonColor, todayButtonColor = _x === void 0 ? "primary" : _x, _y = _a2.todayButtonSize, todayButtonSize = _y === void 0 ? "sm" : _y, todayButtonVariant = _a2.todayButtonVariant, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid, visible = _a2.visible, weekdayFormat = _a2.weekdayFormat, rest = __rest$1(_a2, ["calendars", "calendarDate", "cancelButton", "cancelButtonColor", "cancelButtonSize", "cancelButtonVariant", "className", "cleaner", "closeOnSelect", "confirmButton", "confirmButtonColor", "confirmButtonSize", "confirmButtonVariant", "dayFormat", "disabled", "disabledDates", "endDate", "feedback", "feedbackInvalid", "feedbackValid", "firstDayOfWeek", "format", "footer", "id", "indicator", "inputDateFormat", "inputDateParse", "inputOnChangeDelay", "inputReadOnly", "invalid", "label", "locale", "maxDate", "minDate", "navigation", "navYearFirst", "onEndDateChange", "onHide", "onStartDateChange", "onShow", "placeholder", "range", "ranges", "rangesButtonsColor", "rangesButtonsSize", "rangesButtonsVariant", "required", "separator", "selectAdjacementDays", "showAdjacementDays", "size", "startDate", "text", "timepicker", "toggler", "todayButton", "todayButtonColor", "todayButtonSize", "todayButtonVariant", "tooltipFeedback", "valid", "visible", "weekdayFormat"]);
  var inputEndRef = reactExports.useRef(null);
  var inputStartRef = reactExports.useRef(null);
  var formRef = reactExports.useRef();
  var _z = reactExports.useState(calendarDate ? new Date(calendarDate) : /* @__PURE__ */ new Date()), _calendarDate = _z[0], setCalendarDate = _z[1];
  var _0 = reactExports.useState(endDate ? new Date(endDate) : null), _endDate = _0[0], setEndDate = _0[1];
  var _1 = reactExports.useState(maxDate ? new Date(maxDate) : null), _maxDate = _1[0], setMaxDate = _1[1];
  var _2 = reactExports.useState(minDate ? new Date(minDate) : null), _minDate = _2[0], setMinDate = _2[1];
  var _3 = reactExports.useState(startDate ? new Date(startDate) : null), _startDate = _3[0], setStartDate = _3[1];
  var _4 = reactExports.useState(visible), _visible = _4[0], setVisible = _4[1];
  var _5 = reactExports.useState(startDate ? new Date(startDate) : null), initialStartDate = _5[0], setInitialStartDate = _5[1];
  var _6 = reactExports.useState(endDate ? new Date(endDate) : null), initialEndDate = _6[0], setInitialEndDate = _6[1];
  var _7 = reactExports.useState(null), inputStartHoverValue = _7[0], setInputStartHoverValue = _7[1];
  var _8 = reactExports.useState(null), inputEndHoverValue = _8[0], setInputEndHoverValue = _8[1];
  var _9 = reactExports.useState(valid !== null && valid !== void 0 ? valid : invalid === true ? false : void 0), isValid2 = _9[0], setIsValid = _9[1];
  var _10 = reactExports.useState(false), selectEndDate = _10[0], setSelectEndDate = _10[1];
  reactExports.useEffect(function() {
    setIsValid(valid !== null && valid !== void 0 ? valid : invalid === true ? false : void 0);
  }, [valid, invalid]);
  reactExports.useEffect(function() {
    setStartDate(startDate ? new Date(startDate) : null);
    setCalendarDate(startDate ? new Date(startDate) : /* @__PURE__ */ new Date());
  }, [startDate]);
  reactExports.useEffect(function() {
    setEndDate(endDate ? new Date(endDate) : null);
    range && setCalendarDate(endDate ? new Date(endDate) : /* @__PURE__ */ new Date());
  }, [endDate]);
  reactExports.useEffect(function() {
    maxDate && setMaxDate(new Date(maxDate));
  }, [maxDate]);
  reactExports.useEffect(function() {
    minDate && setMinDate(new Date(minDate));
  }, [minDate]);
  reactExports.useEffect(function() {
    if (inputStartHoverValue) {
      setInputValue(inputStartRef.current, inputStartHoverValue);
      return;
    }
    setInputValue(inputStartRef.current, _startDate);
  }, [inputStartHoverValue, _startDate]);
  reactExports.useEffect(function() {
    if (inputEndHoverValue) {
      setInputValue(inputEndRef.current, inputEndHoverValue);
      return;
    }
    setInputValue(inputEndRef.current, _endDate);
  }, [inputEndHoverValue, _endDate]);
  reactExports.useEffect(function() {
    if (inputStartRef.current && inputStartRef.current.form) {
      formRef.current = inputStartRef.current.form;
    }
  }, [inputStartRef]);
  reactExports.useEffect(function() {
    if (formRef.current) {
      formRef.current.addEventListener("submit", function(event) {
        setTimeout(function() {
          return handleFormValidation(event.target);
        });
      });
      handleFormValidation(formRef.current);
    }
  }, [formRef, _startDate, _endDate]);
  var formatDate = function(date) {
    return inputDateFormat ? inputDateFormat(date) : format$1 ? format(date, format$1) : timepicker ? date.toLocaleString(locale2) : date.toLocaleDateString(locale2);
  };
  var setInputValue = function(el, date) {
    if (!el) {
      return;
    }
    if (date) {
      el.value = formatDate(date);
      return;
    }
    el.value = "";
  };
  var handleDayHover = function(date) {
    selectEndDate ? setInputEndHoverValue(date) : setInputStartHoverValue(date);
  };
  var handleCalendarDateChange = function(date, difference) {
    difference ? setCalendarDate(new Date(date.getFullYear(), date.getMonth() - difference, 1)) : setCalendarDate(date);
  };
  var handleClear = function(event) {
    event.stopPropagation();
    setStartDate(null);
    setEndDate(null);
  };
  var handleEndDateChange = function(date) {
    setEndDate(date);
    setInputEndHoverValue(null);
    onEndDateChange && onEndDateChange(date, date ? formatDate(date) : void 0);
    if (timepicker || footer) {
      return;
    }
    if (closeOnSelect) {
      _startDate !== null && setVisible(false);
    }
  };
  var handleFormValidation = function(form) {
    if (!form.classList.contains("was-validated")) {
      return;
    }
    if (range && _startDate && _endDate || !range && _startDate) {
      return setIsValid(true);
    }
    setIsValid(false);
  };
  var handleStartDateChange = function(date) {
    setStartDate(date);
    setInputStartHoverValue(null);
    onStartDateChange && onStartDateChange(date, date ? formatDate(date) : void 0);
    if (timepicker || footer) {
      return;
    }
    if (closeOnSelect && !range) {
      setVisible(false);
    }
  };
  var handleOnChange = useDebouncedCallback(function(value, input) {
    var date = inputDateParse ? inputDateParse(value) : getLocalDateFromString(value, locale2, timepicker);
    if (date instanceof Date && date.getTime()) {
      setCalendarDate(date);
      input === "start" ? setStartDate(date) : setEndDate(date);
    }
  }, inputOnChangeDelay);
  var InputGroup = function() {
    var _a3;
    return React$1.createElement(
      "div",
      { className: classNames$1("input-group", "picker-input-group", (_a3 = {}, _a3["input-group-".concat(size)] = size, _a3)) },
      React$1.createElement("input", __assign$1({ autoComplete: "off", className: classNames$1("form-control date-picker-input", {
        hover: inputStartHoverValue
      }), disabled }, id && { name: range ? "".concat(id, "-start-date") : "".concat(id, "-date") }, { placeholder: Array.isArray(placeholder) ? placeholder[0] : placeholder, readOnly: inputReadOnly || typeof format$1 === "string", required, onChange: function(event) {
        handleOnChange(event.target.value, "start");
      }, onClick: function() {
        return setSelectEndDate(false);
      }, ref: inputStartRef })),
      range && separator !== false && React$1.createElement(
        "span",
        { className: "input-group-text" },
        React$1.createElement("span", { className: "picker-input-group-icon date-picker-arrow-icon" })
      ),
      range && React$1.createElement("input", __assign$1({ autoComplete: "off", className: classNames$1("form-control date-picker-input", {
        hover: inputEndHoverValue
      }), disabled }, id && { name: "".concat(id, "-end-date") }, { placeholder: placeholder[1], readOnly: inputReadOnly || typeof format$1 === "string", required, onChange: function(event) {
        handleOnChange(event.target.value, "end");
      }, onClick: function() {
        return setSelectEndDate(true);
      }, ref: inputEndRef })),
      (indicator || cleaner) && React$1.createElement(
        "span",
        { className: "input-group-text" },
        indicator && React$1.createElement("span", { className: "picker-input-group-indicator" }, typeof indicator === "boolean" ? React$1.createElement("span", { className: "picker-input-group-icon date-picker-input-icon" }) : indicator),
        cleaner && (_startDate || _endDate) && React$1.createElement("span", { className: "picker-input-group-cleaner", role: "button", onClick: function(event) {
          return handleClear(event);
        } }, typeof cleaner === "boolean" ? React$1.createElement("span", { className: "picker-input-group-icon date-picker-cleaner-icon" }) : cleaner)
      )
    );
  };
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, id, invalid: isValid2 === false ? true : false, label, text, tooltipFeedback, valid: isValid2 },
    React$1.createElement(
      CPicker,
      __assign$1({ className: classNames$1("date-picker", (_b2 = {}, _b2["date-picker-".concat(size)] = size, _b2.disabled = disabled, _b2["is-invalid"] = isValid2 === false ? true : false, _b2["is-valid"] = isValid2, _b2), className), disabled, footer: footer || timepicker, footerContent: React$1.createElement(
        "div",
        { className: "picker-footer" },
        todayButton && React$1.createElement(CButton, { className: "me-auto", color: todayButtonColor, size: todayButtonSize, variant: todayButtonVariant, onClick: function() {
          var date = /* @__PURE__ */ new Date();
          handleStartDateChange(date);
          range && handleEndDateChange(date);
          setCalendarDate(date);
        } }, todayButton),
        cancelButton && React$1.createElement(CButton, { color: cancelButtonColor, size: cancelButtonSize, variant: cancelButtonVariant, onClick: function() {
          handleStartDateChange(initialStartDate);
          range && handleEndDateChange(initialEndDate);
          setVisible(false);
        } }, cancelButton),
        confirmButton && React$1.createElement(CButton, { color: confirmButtonColor, size: confirmButtonSize, variant: confirmButtonVariant, onClick: function() {
          setVisible(false);
        } }, confirmButton)
      ), id, toggler: toggler !== null && toggler !== void 0 ? toggler : InputGroup(), onHide: function() {
        setVisible(false);
        onHide && onHide();
      }, onShow: function() {
        setInitialStartDate(_startDate);
        setInitialEndDate(_endDate);
        setVisible(true);
        onShow && onShow();
      }, visible: _visible }, rest, { ref }),
      React$1.createElement(
        "div",
        { className: "date-picker-body" },
        ranges && React$1.createElement("div", { className: "date-picker-ranges" }, Object.keys(ranges).map(function(key, index) {
          return React$1.createElement(CButton, { color: rangesButtonsColor, key: index, onClick: function() {
            handleStartDateChange(ranges[key][0]);
            handleEndDateChange(ranges[key][1]);
          }, size: rangesButtonsSize, variant: rangesButtonsVariant }, key);
        })),
        React$1.createElement(CCalendar, { calendarDate: _calendarDate, calendars: isMobile_1 ? 1 : calendars, className: "date-picker-calendars", dayFormat, disabledDates, endDate: _endDate, firstDayOfWeek, locale: locale2, maxDate: _maxDate, minDate: _minDate, navigation, navYearFirst, range, selectAdjacementDays, selectEndDate, showAdjacementDays, startDate: _startDate, onDayHover: function(date) {
          return handleDayHover(date);
        }, onCalendarDateChange: function(date) {
          return handleCalendarDateChange(date);
        }, onStartDateChange: function(date) {
          return handleStartDateChange(date);
        }, onEndDateChange: function(date) {
          return handleEndDateChange(date);
        }, onSelectEndChange: function(value) {
          return setSelectEndDate(value);
        }, weekdayFormat }),
        timepicker && React$1.createElement("div", { className: "date-picker-timepickers" }, isMobile_1 || range && calendars === 1 ? React$1.createElement(
          React$1.Fragment,
          null,
          React$1.createElement(CTimePicker, { container: "inline", disabled: _startDate === null ? true : false, locale: locale2, onTimeChange: function(_, __, date) {
            return date && handleStartDateChange(date);
          }, time: _startDate, variant: "select" }),
          React$1.createElement(CTimePicker, { container: "inline", disabled: _endDate === null ? true : false, locale: locale2, onTimeChange: function(_, __, date) {
            return date && handleEndDateChange(date);
          }, time: _endDate, variant: "select" })
        ) : Array.from({ length: calendars }).map(function(_, index) {
          return React$1.createElement(CTimePicker, { container: "inline", disabled: index === 0 ? _startDate === null ? true : false : _endDate === null ? true : false, key: index, locale: locale2, onTimeChange: function(_11, __, date) {
            return index === 0 ? date && handleStartDateChange(date) : date && handleEndDateChange(date);
          }, time: index === 0 ? _startDate : _endDate, variant: "select" });
        }))
      )
    )
  );
});
CDateRangePicker.displayName = "CDateRangePicker";
CDateRangePicker.propTypes = __assign$1(__assign$1(__assign$1(__assign$1({}, CCalendar.propTypes), CFormControlWrapper.propTypes), CPicker.propTypes), { cancelButton: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), cancelButtonColor: (_a = CButton.propTypes) === null || _a === void 0 ? void 0 : _a.color, cancelButtonSize: (_b = CButton.propTypes) === null || _b === void 0 ? void 0 : _b.size, cancelButtonVariant: (_c = CButton.propTypes) === null || _c === void 0 ? void 0 : _c.variant, calendars: PropTypes$1.number, className: PropTypes$1.string, cleaner: PropTypes$1.bool, closeOnSelect: PropTypes$1.bool, confirmButton: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), confirmButtonColor: (_d = CButton.propTypes) === null || _d === void 0 ? void 0 : _d.color, confirmButtonSize: (_e = CButton.propTypes) === null || _e === void 0 ? void 0 : _e.size, confirmButtonVariant: (_f = CButton.propTypes) === null || _f === void 0 ? void 0 : _f.variant, id: PropTypes$1.string, indicator: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), inputDateFormat: PropTypes$1.func, inputDateParse: PropTypes$1.func, inputOnChangeDelay: PropTypes$1.number, inputReadOnly: PropTypes$1.bool, placeholder: PropTypes$1.oneOfType([
  PropTypes$1.string,
  PropTypes$1.arrayOf(PropTypes$1.string.isRequired)
]), range: PropTypes$1.bool, ranges: PropTypes$1.object, rangesButtonsColor: (_g = CButton.propTypes) === null || _g === void 0 ? void 0 : _g.color, rangesButtonsSize: (_h = CButton.propTypes) === null || _h === void 0 ? void 0 : _h.size, rangesButtonsVariant: (_j = CButton.propTypes) === null || _j === void 0 ? void 0 : _j.variant, required: PropTypes$1.bool, separator: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), size: PropTypes$1.oneOf(["sm", "lg"]), timepicker: PropTypes$1.bool, todayButton: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.node]), todayButtonColor: (_k = CButton.propTypes) === null || _k === void 0 ? void 0 : _k.color, todayButtonSize: (_l = CButton.propTypes) === null || _l === void 0 ? void 0 : _l.size, todayButtonVariant: (_m = CButton.propTypes) === null || _m === void 0 ? void 0 : _m.variant });
var CDatePicker = reactExports.forwardRef(function(_a2, ref) {
  var date = _a2.date, id = _a2.id, onDateChange = _a2.onDateChange, _b2 = _a2.placeholder, placeholder = _b2 === void 0 ? "Select date" : _b2, rest = __rest$1(_a2, ["date", "id", "onDateChange", "placeholder"]);
  return React$1.createElement(CDateRangePicker, __assign$1({ calendars: 1, id, startDate: date, onStartDateChange: onDateChange, placeholder, range: false, ref }, rest));
});
CDatePicker.displayName = "CDatePicker";
CDatePicker.propTypes = __assign$1(__assign$1({}, CDateRangePicker.propTypes), { date: PropTypes$1.oneOfType([PropTypes$1.instanceOf(Date), PropTypes$1.string]), onDateChange: PropTypes$1.func });
var getPlacement = function(placement, direction, alignment, isRTL2) {
  var _placement = placement;
  if (direction === "dropup") {
    _placement = isRTL2 ? "top-end" : "top-start";
  }
  if (direction === "dropup-center") {
    _placement = "top";
  }
  if (direction === "dropend") {
    _placement = isRTL2 ? "left-start" : "right-start";
  }
  if (direction === "dropstart") {
    _placement = isRTL2 ? "right-start" : "left-start";
  }
  if (alignment === "end") {
    _placement = isRTL2 ? "bottom-start" : "bottom-end";
  }
  return _placement;
};
var CDropdownContext = reactExports.createContext({});
var CDropdown = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, alignment = _a2.alignment, _c2 = _a2.autoClose, autoClose = _c2 === void 0 ? true : _c2, className = _a2.className, container = _a2.container, dark = _a2.dark, direction = _a2.direction, _d2 = _a2.offset, offset2 = _d2 === void 0 ? [0, 2] : _d2, onHide = _a2.onHide, onShow = _a2.onShow, _e2 = _a2.placement, placement = _e2 === void 0 ? "bottom-start" : _e2, _f2 = _a2.popper, popper2 = _f2 === void 0 ? true : _f2, _g2 = _a2.portal, portal = _g2 === void 0 ? false : _g2, _h2 = _a2.variant, variant = _h2 === void 0 ? "btn-group" : _h2, _j2 = _a2.component, component = _j2 === void 0 ? "div" : _j2, _k2 = _a2.visible, visible = _k2 === void 0 ? false : _k2, rest = __rest$1(_a2, ["children", "alignment", "autoClose", "className", "container", "dark", "direction", "offset", "onHide", "onShow", "placement", "popper", "portal", "variant", "component", "visible"]);
  var dropdownRef = reactExports.useRef(null);
  var dropdownToggleRef = reactExports.useRef(null);
  var dropdownMenuRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, dropdownRef);
  var _l2 = reactExports.useState(visible), _visible = _l2[0], setVisible = _l2[1];
  var _m2 = usePopper(), initPopper = _m2.initPopper, destroyPopper = _m2.destroyPopper;
  var Component = variant === "nav-item" ? "li" : component;
  if (typeof alignment === "object") {
    popper2 = false;
  }
  var contextValues = {
    alignment,
    container,
    dark,
    dropdownToggleRef,
    dropdownMenuRef,
    popper: popper2,
    portal,
    variant,
    visible: _visible,
    setVisible
  };
  var popperConfig = {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getPlacement(placement, direction, alignment, isRTL(dropdownMenuRef.current))
  };
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    if (_visible && dropdownToggleRef.current && dropdownMenuRef.current) {
      popper2 && initPopper(dropdownToggleRef.current, dropdownMenuRef.current, popperConfig);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("keyup", handleKeyup);
      onShow && onShow();
    }
    return function() {
      popper2 && destroyPopper();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keyup", handleKeyup);
      onHide && onHide();
    };
  }, [_visible]);
  var handleKeyup = function(event) {
    if (autoClose === false) {
      return;
    }
    if (event.key === "Escape") {
      setVisible(false);
    }
  };
  var handleMouseUp = function(event) {
    if (!dropdownToggleRef.current || !dropdownMenuRef.current) {
      return;
    }
    if (dropdownToggleRef.current.contains(event.target)) {
      return;
    }
    if (autoClose === true || autoClose === "inside" && dropdownMenuRef.current.contains(event.target) || autoClose === "outside" && !dropdownMenuRef.current.contains(event.target)) {
      setTimeout(function() {
        return setVisible(false);
      }, 1);
      return;
    }
  };
  return React$1.createElement(CDropdownContext.Provider, { value: contextValues }, variant === "input-group" ? React$1.createElement(React$1.Fragment, null, children) : React$1.createElement(Component, __assign$1({ className: classNames$1(variant === "nav-item" ? "nav-item dropdown" : variant, (_b2 = {
    "dropdown-center": direction === "center",
    "dropup dropup-center": direction === "dropup-center"
  }, _b2["".concat(direction)] = direction && direction !== "center" && direction !== "dropup-center", _b2.show = _visible, _b2), className) }, rest, { ref: forkedRef }), children));
});
var alignmentDirection = PropTypes$1.oneOf(["start", "end"]);
CDropdown.propTypes = {
  alignment: PropTypes$1.oneOfType([
    alignmentDirection,
    PropTypes$1.shape({ xs: alignmentDirection.isRequired }),
    PropTypes$1.shape({ sm: alignmentDirection.isRequired }),
    PropTypes$1.shape({ md: alignmentDirection.isRequired }),
    PropTypes$1.shape({ lg: alignmentDirection.isRequired }),
    PropTypes$1.shape({ xl: alignmentDirection.isRequired }),
    PropTypes$1.shape({ xxl: alignmentDirection.isRequired })
  ]),
  autoClose: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["inside", "outside"])
  ]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  dark: PropTypes$1.bool,
  direction: PropTypes$1.oneOf(["center", "dropup", "dropup-center", "dropend", "dropstart"]),
  offset: PropTypes$1.any,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  placement: placementPropType,
  popper: PropTypes$1.bool,
  portal: PropTypes$1.bool,
  variant: PropTypes$1.oneOf(["btn-group", "dropdown", "input-group", "nav-item"]),
  visible: PropTypes$1.bool
};
CDropdown.displayName = "CDropdown";
var CDropdownDivider = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, rest = __rest$1(_a2, ["className"]);
  return React$1.createElement("hr", __assign$1({ className: classNames$1("dropdown-divider", className) }, rest, { ref }));
});
CDropdownDivider.propTypes = {
  className: PropTypes$1.string
};
CDropdownDivider.displayName = "CDropdownDivider";
var CDropdownHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "h6" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("dropdown-header", className) }, rest, { ref }), children);
});
CDropdownHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CDropdownHeader.displayName = "CDropdownHeader";
var CDropdownItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, component = _b2 === void 0 ? "a" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(CLink, __assign$1({ className: classNames$1("dropdown-item", className), component }, rest, { ref }), children);
});
CDropdownItem.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CDropdownItem.displayName = "CDropdownItem";
var CDropdownItemPlain = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "span" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("dropdown-item-text", className) }, rest, { ref }), children);
});
CDropdownItemPlain.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CDropdownItemPlain.displayName = "CDropdownItemPlain";
var alignmentClassNames = function(alignment) {
  var classNames2 = [];
  if (typeof alignment === "object") {
    Object.keys(alignment).map(function(key) {
      classNames2.push("dropdown-menu".concat(key === "xs" ? "" : "-".concat(key), "-").concat(alignment[key]));
    });
  }
  if (typeof alignment === "string") {
    classNames2.push("dropdown-menu-".concat(alignment));
  }
  return classNames2;
};
var CDropdownMenu = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "ul" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  var _c2 = reactExports.useContext(CDropdownContext), alignment = _c2.alignment, container = _c2.container, dark = _c2.dark, dropdownMenuRef = _c2.dropdownMenuRef, popper2 = _c2.popper, portal = _c2.portal, visible = _c2.visible;
  var forkedRef = useForkedRef(ref, dropdownMenuRef);
  return React$1.createElement(
    CConditionalPortal,
    { container, portal: portal !== null && portal !== void 0 ? portal : false },
    React$1.createElement(Component, __assign$1({ className: classNames$1("dropdown-menu", {
      "dropdown-menu-dark": dark,
      show: visible
    }, alignment && alignmentClassNames(alignment), className), ref: forkedRef, role: "menu", "aria-hidden": !visible }, !popper2 && { "data-coreui-popper": "static" }, rest), Component === "ul" ? React$1.Children.map(children, function(child, index) {
      if (React$1.isValidElement(child)) {
        return React$1.createElement("li", { key: index }, React$1.cloneElement(child));
      }
      return;
    }) : children)
  );
});
CDropdownMenu.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CDropdownMenu.displayName = "CDropdownMenu";
var CDropdownToggle = function(_a2) {
  var children = _a2.children, _b2 = _a2.caret, caret = _b2 === void 0 ? true : _b2, custom = _a2.custom, className = _a2.className, split = _a2.split, _c2 = _a2.trigger, trigger = _c2 === void 0 ? "click" : _c2, rest = __rest$1(_a2, ["children", "caret", "custom", "className", "split", "trigger"]);
  var _d2 = reactExports.useContext(CDropdownContext), dropdownToggleRef = _d2.dropdownToggleRef, variant = _d2.variant, visible = _d2.visible, setVisible = _d2.setVisible;
  var triggers = __assign$1(__assign$1({}, (trigger === "click" || trigger.includes("click")) && {
    onClick: function(event) {
      event.preventDefault();
      setVisible(!visible);
    }
  }), (trigger === "focus" || trigger.includes("focus")) && {
    onFocus: function() {
      return setVisible(true);
    },
    onBlur: function() {
      return setVisible(false);
    }
  });
  var togglerProps = __assign$1({ className: classNames$1({
    "dropdown-toggle": caret,
    "dropdown-toggle-split": split,
    "nav-link": variant === "nav-item"
  }, className), "aria-expanded": visible }, !rest.disabled && __assign$1({}, triggers));
  var Toggler = function() {
    if (custom && React$1.isValidElement(children)) {
      return React$1.createElement(React$1.Fragment, null, React$1.cloneElement(children, __assign$1(__assign$1({ "aria-expanded": visible }, !rest.disabled && __assign$1({}, triggers)), { ref: dropdownToggleRef })));
    }
    if (variant === "nav-item") {
      return React$1.createElement("a", __assign$1({ href: "#" }, togglerProps, { ref: dropdownToggleRef }), children);
    }
    return React$1.createElement(
      CButton,
      __assign$1({ type: "button" }, togglerProps, { tabIndex: 0 }, rest, { ref: dropdownToggleRef }),
      children,
      split && React$1.createElement("span", { className: "visually-hidden" }, "Toggle Dropdown")
    );
  };
  return React$1.createElement(Toggler, null);
};
CDropdownToggle.propTypes = {
  caret: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  custom: PropTypes$1.bool,
  split: PropTypes$1.bool,
  trigger: triggerPropType
};
CDropdownToggle.displayName = "CDropdownToggle";
var CSpinner = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var className = _a2.className, color = _a2.color, _c2 = _a2.component, Component = _c2 === void 0 ? "div" : _c2, size = _a2.size, _d2 = _a2.variant, variant = _d2 === void 0 ? "border" : _d2, _e2 = _a2.visuallyHiddenLabel, visuallyHiddenLabel = _e2 === void 0 ? "Loading..." : _e2, rest = __rest$1(_a2, ["className", "color", "component", "size", "variant", "visuallyHiddenLabel"]);
  return React$1.createElement(
    Component,
    __assign$1({ className: classNames$1("spinner-".concat(variant), (_b2 = {}, _b2["spinner-".concat(variant, "-").concat(size)] = size, _b2["text-".concat(color)] = color, _b2), className), role: "status" }, rest, { ref }),
    React$1.createElement("span", { className: "visually-hidden" }, visuallyHiddenLabel)
  );
});
CSpinner.propTypes = {
  className: PropTypes$1.string,
  color: colorPropType,
  component: PropTypes$1.string,
  size: PropTypes$1.oneOf(["sm"]),
  variant: PropTypes$1.oneOf(["border", "grow"]),
  visuallyHiddenLabel: PropTypes$1.string
};
CSpinner.displayName = "CSpinner";
var CElementCover = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, boundaries = _a2.boundaries, _b2 = _a2.opacity, opacity = _b2 === void 0 ? 0.4 : _b2, rest = __rest$1(_a2, ["children", "className", "boundaries", "opacity"]);
  var elementCoverRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, elementCoverRef);
  var _c2 = reactExports.useState({}), customBoundaries = _c2[0], setCustomBoundaries = _c2[1];
  var getCustomBoundaries = function() {
    if (!elementCoverRef || !elementCoverRef.current || !boundaries) {
      return {};
    }
    var parent = elementCoverRef.current.parentElement;
    if (!parent) {
      return {};
    }
    var parentCoords = parent.getBoundingClientRect();
    var customBoundaries2 = {};
    boundaries.forEach(function(_a3) {
      var sides = _a3.sides, query = _a3.query;
      var element = parent.querySelector(query);
      if (!element || !sides) {
        return;
      }
      var coords = element.getBoundingClientRect();
      sides.forEach(function(side) {
        var sideMargin = Math.abs(coords[side] - parentCoords[side]);
        customBoundaries2[side] = "".concat(sideMargin, "px");
      });
    });
    return customBoundaries2;
  };
  reactExports.useEffect(function() {
    setCustomBoundaries(getCustomBoundaries());
  }, [JSON.stringify(getCustomBoundaries())]);
  var classes = classNames$1(className);
  var containerCoords = __assign$1({ top: 0, left: 0, right: 0, bottom: 0 }, customBoundaries);
  var coverStyles = __assign$1(__assign$1({}, containerCoords), { position: "absolute", zIndex: 2, backgroundColor: "rgba(255,255,255,".concat(opacity, ")") });
  return React$1.createElement(
    "div",
    __assign$1({ className: classes, style: coverStyles }, rest, { ref: forkedRef }),
    React$1.createElement("div", { style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)"
    } }, children || React$1.createElement(CSpinner, { variant: "grow", color: "primary" }))
  );
});
CElementCover.propTypes = {
  boundaries: PropTypes$1.array,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  opacity: PropTypes$1.number
};
CElementCover.displayName = "CElementCover";
var CFooter = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, position = _a2.position, rest = __rest$1(_a2, ["children", "className", "position"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("footer", (_b2 = {}, _b2["footer-".concat(position)] = position, _b2), className) }, rest, { ref }), children);
});
CFooter.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  position: PropTypes$1.oneOf(["fixed", "sticky"])
};
CFooter.displayName = "CFooter";
var CForm = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, validated = _a2.validated, rest = __rest$1(_a2, ["children", "className", "validated"]);
  return React$1.createElement("form", __assign$1({ className: classNames$1({ "was-validated": validated }, className) || void 0 }, rest, { ref }), children);
});
CForm.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  validated: PropTypes$1.bool
};
CForm.displayName = "CForm";
var CFormCheck = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, button = _a2.button, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, floatingLabel = _a2.floatingLabel, tooltipFeedback = _a2.tooltipFeedback, hitArea = _a2.hitArea, id = _a2.id, indeterminate = _a2.indeterminate, inline = _a2.inline, invalid = _a2.invalid, label = _a2.label, reverse = _a2.reverse, _b2 = _a2.type, type = _b2 === void 0 ? "checkbox" : _b2, valid = _a2.valid, rest = __rest$1(_a2, ["className", "button", "feedback", "feedbackInvalid", "feedbackValid", "floatingLabel", "tooltipFeedback", "hitArea", "id", "indeterminate", "inline", "invalid", "label", "reverse", "type", "valid"]);
  var inputRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, inputRef);
  reactExports.useEffect(function() {
    if (inputRef.current && indeterminate) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, inputRef.current]);
  var FormControl = function() {
    return React$1.createElement("input", __assign$1({ type, className: classNames$1(button ? "btn-check" : "form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid,
      "me-2": hitArea
    }), id }, rest, { ref: forkedRef }));
  };
  var FormValidation = function() {
    return React$1.createElement(CFormControlValidation, { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  var FormLabel = function() {
    var _a3;
    return React$1.createElement(CFormLabel, __assign$1({ customClassName: classNames$1(button ? classNames$1("btn", button.variant ? "btn-".concat(button.variant, "-").concat(button.color) : "btn-".concat(button.color), (_a3 = {}, _a3["btn-".concat(button.size)] = button.size, _a3), "".concat(button.shape)) : "form-check-label") }, id && { htmlFor: id }), label);
  };
  var FormCheck = function() {
    if (button) {
      return React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(FormControl, null),
        label && React$1.createElement(FormLabel, null),
        React$1.createElement(FormValidation, null)
      );
    }
    if (label) {
      return hitArea ? React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(FormControl, null),
        React$1.createElement(CFormLabel, __assign$1({ customClassName: classNames$1("form-check-label stretched-link", className) }, id && { htmlFor: id }), label),
        React$1.createElement(FormValidation, null)
      ) : React$1.createElement(
        "div",
        { className: classNames$1("form-check", {
          "form-check-inline": inline,
          "form-check-reverse": reverse,
          "is-invalid": invalid,
          "is-valid": valid
        }, className) },
        React$1.createElement(FormControl, null),
        React$1.createElement(FormLabel, null),
        React$1.createElement(FormValidation, null)
      );
    }
    return React$1.createElement(FormControl, null);
  };
  return React$1.createElement(FormCheck, null);
});
CFormCheck.propTypes = __assign$1({ button: PropTypes$1.object, className: PropTypes$1.string, hitArea: PropTypes$1.oneOf(["full"]), id: PropTypes$1.string, indeterminate: PropTypes$1.bool, inline: PropTypes$1.bool, label: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]), reverse: PropTypes$1.bool, type: PropTypes$1.oneOf(["checkbox", "radio"]) }, CFormControlValidation.propTypes);
CFormCheck.displayName = "CFormCheck";
var CFormInput = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, _c2 = _a2.delay, delay = _c2 === void 0 ? false : _c2, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, floatingClassName = _a2.floatingClassName, floatingLabel = _a2.floatingLabel, id = _a2.id, invalid = _a2.invalid, label = _a2.label, onChange = _a2.onChange, plainText = _a2.plainText, size = _a2.size, text = _a2.text, tooltipFeedback = _a2.tooltipFeedback, _d2 = _a2.type, type = _d2 === void 0 ? "text" : _d2, valid = _a2.valid, rest = __rest$1(_a2, ["children", "className", "delay", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "onChange", "plainText", "size", "text", "tooltipFeedback", "type", "valid"]);
  var _e2 = reactExports.useState(), value = _e2[0], setValue = _e2[1];
  reactExports.useEffect(function() {
    var timeOutId = setTimeout(function() {
      return value && onChange && onChange(value);
    }, typeof delay === "number" ? delay : 500);
    return function() {
      return clearTimeout(timeOutId);
    };
  }, [value]);
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    React$1.createElement("input", __assign$1({ className: classNames$1(plainText ? "form-control-plaintext" : "form-control", (_b2 = {}, _b2["form-control-".concat(size)] = size, _b2["form-control-color"] = type === "color", _b2["is-invalid"] = invalid, _b2["is-valid"] = valid, _b2), className), id, type, onChange: function(event) {
      return delay ? setValue(event) : onChange && onChange(event);
    } }, rest, { ref }), children)
  );
});
CFormInput.propTypes = __assign$1({ className: PropTypes$1.string, id: PropTypes$1.string, delay: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.number]), plainText: PropTypes$1.bool, size: PropTypes$1.oneOf(["sm", "lg"]), type: PropTypes$1.oneOfType([PropTypes$1.oneOf(["color", "file", "text"]), PropTypes$1.string]) }, CFormControlWrapper.propTypes);
CFormInput.displayName = "CFormInput";
var CFormRange = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, label = _a2.label, rest = __rest$1(_a2, ["className", "label"]);
  return React$1.createElement(
    React$1.Fragment,
    null,
    label && React$1.createElement(CFormLabel, { htmlFor: rest.id }, label),
    React$1.createElement("input", __assign$1({ type: "range", className: classNames$1("form-range", className) }, rest, { ref }))
  );
});
CFormRange.propTypes = {
  className: PropTypes$1.string,
  label: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string])
};
CFormRange.displayName = "CFormRange";
var CFormSelect = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, floatingClassName = _a2.floatingClassName, floatingLabel = _a2.floatingLabel, htmlSize = _a2.htmlSize, id = _a2.id, invalid = _a2.invalid, label = _a2.label, options = _a2.options, size = _a2.size, text = _a2.text, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid, rest = __rest$1(_a2, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "htmlSize", "id", "invalid", "label", "options", "size", "text", "tooltipFeedback", "valid"]);
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    React$1.createElement("select", __assign$1({ id, className: classNames$1("form-select", (_b2 = {}, _b2["form-select-".concat(size)] = size, _b2["is-invalid"] = invalid, _b2["is-valid"] = valid, _b2), className), size: htmlSize }, rest, { ref }), options ? options.map(function(option, index) {
      return React$1.createElement("option", __assign$1({}, typeof option === "object" && option.disabled && { disabled: option.disabled }, typeof option === "object" && option.value !== void 0 && { value: option.value }, { key: index }), typeof option === "string" ? option : option.label);
    }) : children)
  );
});
CFormSelect.propTypes = __assign$1({ className: PropTypes$1.string, htmlSize: PropTypes$1.number, options: PropTypes$1.array }, CFormControlWrapper.propTypes);
CFormSelect.displayName = "CFormSelect";
var CFormSwitch = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var className = _a2.className, id = _a2.id, invalid = _a2.invalid, label = _a2.label, reverse = _a2.reverse, size = _a2.size, _c2 = _a2.type, type = _c2 === void 0 ? "checkbox" : _c2, valid = _a2.valid, rest = __rest$1(_a2, ["className", "id", "invalid", "label", "reverse", "size", "type", "valid"]);
  return React$1.createElement(
    "div",
    { className: classNames$1("form-check form-switch", (_b2 = {
      "form-check-reverse": reverse
    }, _b2["form-switch-".concat(size)] = size, _b2["is-invalid"] = invalid, _b2["is-valid"] = valid, _b2), className) },
    React$1.createElement("input", __assign$1({ type, className: classNames$1("form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid
    }), id }, rest, { ref })),
    label && React$1.createElement(CFormLabel, __assign$1({ customClassName: "form-check-label" }, id && { htmlFor: id }), label)
  );
});
CFormSwitch.propTypes = {
  className: PropTypes$1.string,
  id: PropTypes$1.string,
  invalid: PropTypes$1.bool,
  label: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  reverse: PropTypes$1.bool,
  size: PropTypes$1.oneOf(["lg", "xl"]),
  type: PropTypes$1.oneOf(["checkbox", "radio"]),
  valid: PropTypes$1.bool
};
CFormSwitch.displayName = "CFormSwitch";
var CFormTextarea = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, floatingClassName = _a2.floatingClassName, floatingLabel = _a2.floatingLabel, id = _a2.id, invalid = _a2.invalid, label = _a2.label, plainText = _a2.plainText, text = _a2.text, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid, rest = __rest$1(_a2, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "plainText", "text", "tooltipFeedback", "valid"]);
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    React$1.createElement("textarea", __assign$1({ className: classNames$1(plainText ? "form-control-plaintext" : "form-control", {
      "is-invalid": invalid,
      "is-valid": valid
    }, className), id }, rest, { ref }), children)
  );
});
CFormTextarea.propTypes = __assign$1({ className: PropTypes$1.string, id: PropTypes$1.string, plainText: PropTypes$1.bool }, CFormControlWrapper.propTypes);
CFormTextarea.displayName = "CFormTextarea";
var CInputGroup = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, size = _a2.size, rest = __rest$1(_a2, ["children", "className", "size"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("input-group", (_b2 = {}, _b2["input-group-".concat(size)] = size, _b2), className) }, rest, { ref }), children);
});
CInputGroup.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  size: PropTypes$1.oneOf(["sm", "lg"])
};
CInputGroup.displayName = "CInputGroup";
var CInputGroupText = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.component, Component = _b2 === void 0 ? "span" : _b2, rest = __rest$1(_a2, ["children", "className", "component"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("input-group-text", className) }, rest, { ref }), children);
});
CInputGroupText.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CInputGroupText.displayName = "CInputGroupText";
var BREAKPOINTS$3 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CCol = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$3.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number" || typeof breakpoint === "string") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
    if (breakpoint && typeof breakpoint === "object") {
      if (typeof breakpoint.span === "number" || typeof breakpoint.span === "string") {
        repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint.span));
      }
      if (typeof breakpoint.span === "boolean") {
        repsonsiveClassNames.push("col".concat(infix));
      }
      if (typeof breakpoint.order === "number" || typeof breakpoint.order === "string") {
        repsonsiveClassNames.push("order".concat(infix, "-").concat(breakpoint.order));
      }
      if (typeof breakpoint.offset === "number") {
        repsonsiveClassNames.push("offset".concat(infix, "-").concat(breakpoint.offset));
      }
    }
  });
  return React$1.createElement("div", __assign$1({ className: classNames$1(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "col", className) }, rest, { ref }), children);
});
var span = PropTypes$1.oneOfType([
  PropTypes$1.bool,
  PropTypes$1.number,
  PropTypes$1.string,
  PropTypes$1.oneOf(["auto"])
]);
var col = PropTypes$1.oneOfType([
  span,
  PropTypes$1.shape({
    span,
    offset: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
    order: PropTypes$1.oneOfType([
      PropTypes$1.oneOf(["first", "last"]),
      PropTypes$1.number,
      PropTypes$1.string
    ])
  })
]);
CCol.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  xs: col,
  sm: col,
  md: col,
  lg: col,
  xl: col,
  xxl: col
};
CCol.displayName = "CCol";
var BREAKPOINTS$2 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "fluid"
];
var CContainer = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$2.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    breakpoint && repsonsiveClassNames.push("container-".concat(bp2));
  });
  return React$1.createElement("div", __assign$1({ className: classNames$1(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "container", className) }, rest, { ref }), children);
});
CContainer.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  sm: PropTypes$1.bool,
  md: PropTypes$1.bool,
  lg: PropTypes$1.bool,
  xl: PropTypes$1.bool,
  xxl: PropTypes$1.bool,
  fluid: PropTypes$1.bool
};
CContainer.displayName = "CContainer";
var BREAKPOINTS$1 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CRow = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$1.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "object") {
      if (breakpoint.cols) {
        repsonsiveClassNames.push("row-cols".concat(infix, "-").concat(breakpoint.cols));
      }
      if (typeof breakpoint.gutter === "number") {
        repsonsiveClassNames.push("g".concat(infix, "-").concat(breakpoint.gutter));
      }
      if (typeof breakpoint.gutterX === "number") {
        repsonsiveClassNames.push("gx".concat(infix, "-").concat(breakpoint.gutterX));
      }
      if (typeof breakpoint.gutterY === "number") {
        repsonsiveClassNames.push("gy".concat(infix, "-").concat(breakpoint.gutterY));
      }
    }
  });
  return React$1.createElement("div", { className: classNames$1("row", repsonsiveClassNames, className), ref }, children);
});
var bp = PropTypes$1.shape({
  cols: PropTypes$1.oneOfType([PropTypes$1.oneOf(["auto"]), PropTypes$1.number, PropTypes$1.string]),
  gutter: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
  gutterX: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
  gutterY: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number])
});
CRow.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  xs: bp,
  sm: bp,
  md: bp,
  lg: bp,
  xl: bp,
  xxl: bp
};
CRow.displayName = "CRow";
var CHeader = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, container = _a2.container, position = _a2.position, rest = __rest$1(_a2, ["children", "className", "container", "position"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("header", (_b2 = {}, _b2["header-".concat(position)] = position, _b2), className) }, rest, { ref }), container ? React$1.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : React$1.createElement(React$1.Fragment, null, children));
});
CHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  container: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  position: PropTypes$1.oneOf(["fixed", "sticky"])
};
CHeader.displayName = "CHeader";
var CHeaderBrand = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "a" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("header-brand", className) }, rest, { ref }), children);
});
CHeaderBrand.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CHeaderBrand.displayName = "CHeaderBrand";
var CHeaderDivider = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, rest = __rest$1(_a2, ["className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("header-divider", className) }, rest, { ref }));
});
CHeaderDivider.propTypes = {
  className: PropTypes$1.string
};
CHeaderDivider.displayName = "CHeaderDivider";
var CHeaderNav = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "ul" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("header-nav", className), role: "navigation" }, rest, { ref }), children);
});
CHeaderNav.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CHeaderNav.displayName = "CHeaderNav";
var CHeaderText = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("span", __assign$1({ className: classNames$1("header-text", className) }, rest, { ref }), children);
});
CHeaderText.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CHeaderText.displayName = "CHeaderText";
var CHeaderToggler = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("button", __assign$1({ type: "button", className: classNames$1("header-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : React$1.createElement("span", { className: "header-toggler-icon" }));
});
CHeaderToggler.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CHeaderToggler.displayName = "CHeaderToggler";
var CImage = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var align = _a2.align, className = _a2.className, fluid = _a2.fluid, rounded = _a2.rounded, thumbnail = _a2.thumbnail, rest = __rest$1(_a2, ["align", "className", "fluid", "rounded", "thumbnail"]);
  return React$1.createElement("img", __assign$1({ className: classNames$1((_b2 = {}, _b2["float-".concat(align)] = align && (align === "start" || align === "end"), _b2["d-block mx-auto"] = align && align === "center", _b2["img-fluid"] = fluid, _b2.rounded = rounded, _b2["img-thumbnail"] = thumbnail, _b2), className) || void 0 }, rest, { ref }));
});
CImage.propTypes = {
  align: PropTypes$1.oneOf(["start", "center", "end"]),
  className: PropTypes$1.string,
  fluid: PropTypes$1.bool,
  rounded: PropTypes$1.bool,
  thumbnail: PropTypes$1.bool
};
CImage.displayName = "CImage";
var CListGroup = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, _c2 = _a2.component, Component = _c2 === void 0 ? "ul" : _c2, flush = _a2.flush, layout = _a2.layout;
  return React$1.createElement(Component, { className: classNames$1("list-group", (_b2 = {
    "list-group-flush": flush
  }, _b2["list-group-".concat(layout)] = layout, _b2), className), ref }, children);
});
CListGroup.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  flush: PropTypes$1.bool,
  layout: PropTypes$1.oneOf([
    "horizontal",
    "horizontal-sm",
    "horizontal-md",
    "horizontal-lg",
    "horizontal-xl",
    "horizontal-xxl"
  ])
};
CListGroup.displayName = "CListGroup";
var CListGroupItem = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, active = _a2.active, className = _a2.className, disabled = _a2.disabled, color = _a2.color, _c2 = _a2.component, component = _c2 === void 0 ? "li" : _c2, rest = __rest$1(_a2, ["children", "active", "className", "disabled", "color", "component"]);
  var Component = component === "a" || component === "button" ? CLink : component;
  rest = __assign$1(__assign$1(__assign$1(__assign$1({}, (component === "a" || component === "button") && {
    active,
    disabled,
    component,
    ref
  }), active && { "aria-current": true }), disabled && { "aria-disabled": true }), rest);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("list-group-item", (_b2 = {}, _b2["list-group-item-".concat(color)] = color, _b2["list-group-item-action"] = component === "a" || component === "button", _b2.active = active, _b2.disabled = disabled, _b2), className) }, rest), children);
});
CListGroupItem.propTypes = {
  active: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  component: PropTypes$1.elementType,
  disabled: PropTypes$1.bool
};
CListGroupItem.displayName = "CListGroupItem";
var CLoadingButton = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, disabledOnLoading = _a2.disabledOnLoading, loading = _a2.loading, onClick = _a2.onClick, _b2 = _a2.spinnerType, spinnerType = _b2 === void 0 ? "border" : _b2, timeout2 = _a2.timeout, rest = __rest$1(_a2, ["children", "className", "disabledOnLoading", "loading", "onClick", "spinnerType", "timeout"]);
  var _c2 = reactExports.useState(), _loading = _c2[0], setLoading = _c2[1];
  reactExports.useEffect(function() {
    setLoading(loading);
  }, [loading]);
  var handleOnClick = function() {
    onClick && onClick();
    if (timeout2) {
      setLoading(true);
      setTimeout(function() {
        setLoading(false);
      }, timeout2);
    }
  };
  return React$1.createElement(
    CButton,
    __assign$1({ className: classNames$1("btn-loading", _loading && "is-loading", className) }, disabledOnLoading && _loading && { disabled: true }, { onClick: handleOnClick }, rest, { ref }),
    React$1.createElement(CSpinner, { className: "btn-loading-spinner", size: "sm", variant: spinnerType }),
    children
  );
});
CLoadingButton.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  disabledOnLoading: PropTypes$1.bool,
  loading: PropTypes$1.bool,
  onClick: PropTypes$1.func,
  spinnerType: PropTypes$1.oneOf(["border", "grow"]),
  timeout: PropTypes$1.number
};
CLoadingButton.displayName = "CLoadingButton";
var CModalContent = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("modal-content", className) }, rest, { ref }), children);
});
CModalContent.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CModalContent.displayName = "CModalContent";
var CModalDialog = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, alignment = _a2.alignment, className = _a2.className, fullscreen = _a2.fullscreen, scrollable = _a2.scrollable, size = _a2.size, rest = __rest$1(_a2, ["children", "alignment", "className", "fullscreen", "scrollable", "size"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("modal-dialog", (_b2 = {
    "modal-dialog-centered": alignment === "center"
  }, _b2[typeof fullscreen === "boolean" ? "modal-fullscreen" : "modal-fullscreen-".concat(fullscreen, "-down")] = fullscreen, _b2["modal-dialog-scrollable"] = scrollable, _b2["modal-".concat(size)] = size, _b2), className) }, rest, { ref }), children);
});
CModalDialog.propTypes = {
  alignment: PropTypes$1.oneOf(["top", "center"]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  fullscreen: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scrollable: PropTypes$1.bool,
  size: PropTypes$1.oneOf(["sm", "lg", "xl"])
};
CModalDialog.displayName = "CModalDialog";
var CModalContext = reactExports.createContext({});
var CModal = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, alignment = _a2.alignment, _b2 = _a2.backdrop, backdrop = _b2 === void 0 ? true : _b2, className = _a2.className, _c2 = _a2.duration, duration = _c2 === void 0 ? 150 : _c2, _d2 = _a2.focus, focus = _d2 === void 0 ? true : _d2, fullscreen = _a2.fullscreen, _e2 = _a2.keyboard, keyboard = _e2 === void 0 ? true : _e2, onClose = _a2.onClose, onClosePrevented = _a2.onClosePrevented, onShow = _a2.onShow, _f2 = _a2.portal, portal = _f2 === void 0 ? true : _f2, scrollable = _a2.scrollable, size = _a2.size, _g2 = _a2.transition, transition = _g2 === void 0 ? true : _g2, _h2 = _a2.unmountOnClose, unmountOnClose = _h2 === void 0 ? true : _h2, visible = _a2.visible, rest = __rest$1(_a2, ["children", "alignment", "backdrop", "className", "duration", "focus", "fullscreen", "keyboard", "onClose", "onClosePrevented", "onShow", "portal", "scrollable", "size", "transition", "unmountOnClose", "visible"]);
  var activeElementRef = reactExports.useRef(null);
  var modalRef = reactExports.useRef(null);
  var modalContentRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, modalRef);
  var _j2 = reactExports.useState(visible), _visible = _j2[0], setVisible = _j2[1];
  var _k2 = reactExports.useState(false), staticBackdrop = _k2[0], setStaticBackdrop = _k2[1];
  var contextValues = {
    visible: _visible,
    setVisible
  };
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    var _a3;
    if (_visible) {
      activeElementRef.current = document.activeElement;
      document.addEventListener("mouseup", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      (_a3 = activeElementRef.current) === null || _a3 === void 0 ? void 0 : _a3.focus();
    }
    return function() {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [_visible]);
  var handleDismiss = function() {
    if (backdrop === "static") {
      return setStaticBackdrop(true);
    }
    setVisible(false);
    return onClose && onClose();
  };
  reactExports.useLayoutEffect(function() {
    onClosePrevented && onClosePrevented();
    setTimeout(function() {
      return setStaticBackdrop(false);
    }, duration);
  }, [staticBackdrop]);
  reactExports.useLayoutEffect(function() {
    if (_visible) {
      document.body.classList.add("modal-open");
      if (backdrop) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "0px";
      }
      setTimeout(function() {
        var _a3;
        focus && ((_a3 = modalRef.current) === null || _a3 === void 0 ? void 0 : _a3.focus());
      }, transition ? duration : 0);
    } else {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    }
    return function() {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    };
  }, [_visible]);
  var handleClickOutside = function(event) {
    if (modalRef.current && modalRef.current == event.target) {
      handleDismiss();
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      handleDismiss();
    }
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: modalRef, onEnter: onShow, onExit: onClose, unmountOnExit: unmountOnClose, timeout: transition ? duration : 0 }, function(state) {
      return React$1.createElement(
        CConditionalPortal,
        { portal },
        React$1.createElement(
          CModalContext.Provider,
          { value: contextValues },
          React$1.createElement(
            "div",
            __assign$1({ className: classNames$1("modal", {
              "modal-static": staticBackdrop,
              fade: transition,
              show: state === "entered"
            }, className), tabIndex: -1 }, _visible ? { "aria-modal": true, role: "dialog" } : { "aria-hidden": "true" }, { style: __assign$1({}, state !== "exited" && { display: "block" }) }, rest, { ref: forkedRef }),
            React$1.createElement(
              CModalDialog,
              { alignment, fullscreen, scrollable, size },
              React$1.createElement(CModalContent, { ref: modalContentRef }, children)
            )
          )
        )
      );
    }),
    backdrop && React$1.createElement(
      CConditionalPortal,
      { portal },
      React$1.createElement(CBackdrop, { visible: _visible })
    )
  );
});
CModal.propTypes = {
  alignment: PropTypes$1.oneOf(["top", "center"]),
  backdrop: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.oneOf(["static"])]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  duration: PropTypes$1.number,
  focus: PropTypes$1.bool,
  fullscreen: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  keyboard: PropTypes$1.bool,
  onClose: PropTypes$1.func,
  onClosePrevented: PropTypes$1.func,
  onShow: PropTypes$1.func,
  portal: PropTypes$1.bool,
  scrollable: PropTypes$1.bool,
  size: PropTypes$1.oneOf(["sm", "lg", "xl"]),
  transition: PropTypes$1.bool,
  unmountOnClose: PropTypes$1.bool,
  visible: PropTypes$1.bool
};
CModal.displayName = "CModal";
var CModalBody = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("modal-body", className) }, rest, { ref }), children);
});
CModalBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CModalBody.displayName = "CModalBody";
var CModalFooter = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("modal-footer", className) }, rest, { ref }), children);
});
CModalFooter.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CModalFooter.displayName = "CModalFooter";
var CModalHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, _b2 = _a2.closeButton, closeButton = _b2 === void 0 ? true : _b2, rest = __rest$1(_a2, ["children", "className", "closeButton"]);
  var setVisible = reactExports.useContext(CModalContext).setVisible;
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("modal-header", className) }, rest, { ref }),
    children,
    closeButton && React$1.createElement(CCloseButton, { onClick: function() {
      return setVisible(false);
    } })
  );
});
CModalHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  closeButton: PropTypes$1.bool
};
CModalHeader.displayName = "CModalHeader";
var CModalTitle = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "h5" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("modal-title", className) }, rest, { ref }), children);
});
CModalTitle.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CModalTitle.displayName = "CModalTitle";
var createNativeOptions = function(options) {
  return options && options.map(function(option, index) {
    return option.options ? React$1.createElement("optgroup", { label: option.label, key: index }, createNativeOptions(option.options)) : React$1.createElement("option", { value: option.value, key: index, disabled: option.disabled }, option.text);
  });
};
var CMultiSelectNativeSelect = reactExports.forwardRef(function(_a2, ref) {
  var id = _a2.id, options = _a2.options, rest = __rest$1(_a2, ["id", "options"]);
  return React$1.createElement("select", __assign$1({ className: "multi-select-new" }, id && { id: "".concat(id, "-multi-select") }, id && { name: "".concat(id, "-multi-select") }, { tabIndex: -1, style: { display: "none" } }, rest, { ref }), options && createNativeOptions(options));
});
CMultiSelectNativeSelect.propTypes = {
  options: PropTypes$1.array,
  value: PropTypes$1.oneOfType([
    PropTypes$1.number,
    PropTypes$1.string,
    PropTypes$1.arrayOf(PropTypes$1.string.isRequired)
  ])
};
CMultiSelectNativeSelect.displayName = "CMultiSelectNativeSelect";
var CVirtualScroller = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, visibleItems = _a2.visibleItems, onScroll = _a2.onScroll;
  var virtualScrollRef = reactExports.useRef(null);
  var virtualScrollContentRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, virtualScrollRef);
  var _b2 = reactExports.useState(Math.floor(visibleItems / 2)), buffer = _b2[0], setBuffer = _b2[1];
  var _c2 = reactExports.useState(1), currentItemIndex = _c2[0], setCurrentItemIndex = _c2[1];
  var _d2 = reactExports.useState(0), itemHeight = _d2[0], setItemHeight = _d2[1];
  var _e2 = reactExports.useState(React$1.Children.count(children)), itemsNumber = _e2[0], setItemsNumber = _e2[1];
  var _f2 = reactExports.useState(0), viewportPadding = _f2[0], setViewportPadding = _f2[1];
  var _g2 = reactExports.useState(visibleItems * itemHeight + 2 * viewportPadding), viewportHeight = _g2[0], setViewportHeight = _g2[1];
  var _h2 = reactExports.useState(itemsNumber * itemHeight + 2 * viewportPadding), maxHeight = _h2[0], setMaxHeight = _h2[1];
  reactExports.useEffect(function() {
    virtualScrollRef.current && virtualScrollRef.current.scrollTop;
    virtualScrollRef.current && setViewportPadding(Number.parseFloat(getComputedStyle(virtualScrollRef.current).paddingTop));
  });
  reactExports.useEffect(function() {
    setItemsNumber(React$1.Children.count(children));
  }, [children]);
  reactExports.useEffect(function() {
    setViewportHeight(Math.min(visibleItems, itemsNumber) * itemHeight + 2 * viewportPadding);
  }, [itemHeight, itemsNumber, viewportPadding, visibleItems]);
  reactExports.useEffect(function() {
    setMaxHeight(itemsNumber * itemHeight);
    virtualScrollRef.current && virtualScrollRef.current.scrollTop;
  }, [itemHeight, itemsNumber]);
  reactExports.useEffect(function() {
    setBuffer(Math.floor(visibleItems / 2));
  }, [visibleItems]);
  var handleScroll = function(scrollTop) {
    var _currentItemIndex = itemHeight && Math.max(Math.ceil(scrollTop / itemHeight), 1);
    setCurrentItemIndex(_currentItemIndex);
    onScroll && onScroll(_currentItemIndex);
  };
  return React$1.createElement(
    "div",
    { className: classNames$1("virtual-scroller", className), onScroll: function(event) {
      return handleScroll(event.target.scrollTop);
    }, ref: forkedRef, style: {
      height: viewportHeight,
      overflowY: "auto"
    } },
    React$1.createElement("div", { className: "virtual-scroller-content", style: {
      height: maxHeight
    }, ref: virtualScrollContentRef }, React$1.Children.map(children, function(child, index) {
      if (React$1.isValidElement(child) && index + 1 > Math.max(currentItemIndex - buffer, 0) && index + 1 <= currentItemIndex + visibleItems + buffer) {
        return React$1.cloneElement(child, {
          className: classNames$1(child.props.className, {
            "virtual-scroller-item-preload": index + 1 > currentItemIndex + visibleItems || index + 1 < currentItemIndex
          }),
          key: index,
          style: __assign$1({}, currentItemIndex > buffer && {
            transform: "translateY(".concat((currentItemIndex - buffer) * itemHeight, "px)")
          }),
          ref: function(node) {
            return node && node.offsetHeight && setItemHeight(node.offsetHeight + Number.parseFloat(getComputedStyle(node).marginTop) + Number.parseFloat(getComputedStyle(node).marginBottom));
          }
        });
      }
      return;
    }))
  );
});
CVirtualScroller.propTypes = {
  onScroll: PropTypes$1.func,
  visibleItems: PropTypes$1.number.isRequired
};
CVirtualScroller.displayName = "CVirtualScroller";
var createOption = function(text, options) {
  var value = text.toLowerCase().replace(/\s/g, "-");
  var uniqueValue = value;
  var i2 = 1;
  while (options.some(function(option) {
    return String(option.value) === uniqueValue;
  })) {
    uniqueValue = "".concat(value, "-").concat(i2);
    i2++;
  }
  return [
    {
      value: uniqueValue,
      text,
      custom: true
    }
  ];
};
var filterOptionsList = function(search, _options) {
  if (search.length > 0 && _options) {
    var optionsList = [];
    for (var _i = 0, _options_1 = _options; _i < _options_1.length; _i++) {
      var option = _options_1[_i];
      var options = option.options && option.options.filter(function(option2) {
        return option2.text && option2.text.toLowerCase().includes(search.toLowerCase());
      });
      if (option.text && option.text.toLowerCase().includes(search.toLowerCase()) || options && options.length > 0) {
        optionsList.push(Object.assign({}, option, options && options.length > 0 && { options }));
      }
    }
    return optionsList;
  }
  return _options;
};
var flattenOptionsArray = function(options, keepGroupLabel) {
  var optionsList = [];
  for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
    var option = options_1[_i];
    if (Array.isArray(option.options)) {
      var options_2 = option.options, rest = __rest$1(option, ["options"]);
      if (keepGroupLabel) {
        optionsList.push(rest);
      }
      optionsList.push.apply(optionsList, options_2);
    } else {
      optionsList.push(option);
    }
  }
  return optionsList;
};
var getNextSibling = function(elem, selector) {
  var sibling = elem.nextElementSibling;
  if (!selector)
    return sibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.nextElementSibling;
  }
  return;
};
var getPreviousSibling = function(elem, selector) {
  var sibling = elem.previousElementSibling;
  if (!selector)
    return sibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.previousElementSibling;
  }
  return;
};
var selectOptions = function(options, selected, deselected) {
  var _selected = __spreadArray(__spreadArray([], selected, true), options, true);
  if (deselected) {
    _selected = _selected.filter(function(selectedOption) {
      return !deselected.some(function(deselectedOption) {
        return deselectedOption.value === selectedOption.value;
      });
    });
  }
  var deduplicated = [];
  var _loop_1 = function(option2) {
    if (!deduplicated.some(function(obj) {
      return obj.value === option2.value;
    })) {
      deduplicated.push(option2);
    }
  };
  for (var _i = 0, _selected_1 = _selected; _i < _selected_1.length; _i++) {
    var option = _selected_1[_i];
    _loop_1(option);
  }
  return deduplicated;
};
var CMultiSelectOptions = reactExports.forwardRef(function(_a2, ref) {
  var handleOptionOnClick = _a2.handleOptionOnClick, loading = _a2.loading, options = _a2.options, optionsMaxHeight = _a2.optionsMaxHeight, optionsStyle = _a2.optionsStyle, optionsTemplate = _a2.optionsTemplate, optionsGroupsTemplate = _a2.optionsGroupsTemplate, searchNoResultsLabel = _a2.searchNoResultsLabel, selected = _a2.selected, virtualScroller = _a2.virtualScroller, _b2 = _a2.visibleItems, visibleItems = _b2 === void 0 ? 10 : _b2;
  var handleKeyDown = function(event, option) {
    if (event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      handleOptionOnClick && handleOptionOnClick(option);
    }
    if (event.key === "Down" || event.key === "ArrowDown") {
      event.preventDefault();
      var target = event.target;
      var next = getNextSibling(target, ".form-multi-select-option");
      next && next.focus();
    }
    if (event.key === "Up" || event.key === "ArrowUp") {
      event.preventDefault();
      var target = event.target;
      var prev = getPreviousSibling(target, ".form-multi-select-option");
      prev && prev.focus();
    }
  };
  var createOptions = function(options2) {
    return options2.length > 0 ? options2.map(function(option, index) {
      return "value" in option ? React$1.createElement("div", { className: classNames$1("form-multi-select-option", {
        "form-multi-select-option-with-checkbox": optionsStyle === "checkbox",
        "form-multi-selected": selected.some(function(_option) {
          return _option.value === option.value;
        }),
        disabled: option.disabled
      }), key: index, onClick: function() {
        return handleOptionOnClick && handleOptionOnClick(option);
      }, onKeyDown: function(event) {
        return handleKeyDown(event, option);
      }, tabIndex: 0 }, optionsTemplate ? optionsTemplate(option) : option.text) : React$1.createElement("div", { className: "form-multi-select-optgroup-label", key: index }, optionsGroupsTemplate ? optionsGroupsTemplate(option) : option.label);
    }) : React$1.createElement("div", { className: "form-multi-select-options-empty" }, searchNoResultsLabel);
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    virtualScroller ? React$1.createElement(CVirtualScroller, { className: "form-multi-select-options", visibleItems, ref }, createOptions(options)) : React$1.createElement("div", __assign$1({ className: "form-multi-select-options" }, optionsMaxHeight !== "auto" && {
      style: { maxHeight: optionsMaxHeight, overflow: "scroll" }
    }, { ref }), createOptions(options)),
    loading && React$1.createElement(CElementCover, null)
  );
});
CMultiSelectOptions.propTypes = {
  handleOptionOnClick: PropTypes$1.func,
  loading: PropTypes$1.bool,
  options: PropTypes$1.array.isRequired,
  optionsMaxHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]),
  optionsStyle: PropTypes$1.oneOf(["checkbox", "text"]),
  optionsTemplate: PropTypes$1.func,
  optionsGroupsTemplate: PropTypes$1.func,
  searchNoResultsLabel: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  virtualScroller: PropTypes$1.bool,
  visibleItems: PropTypes$1.number
};
CMultiSelectOptions.displayName = "CMultiSelectOptions";
var CMultiSelectSelection = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, multiple = _a2.multiple, placeholder = _a2.placeholder, onRemove = _a2.onRemove, search = _a2.search, _b2 = _a2.selected, selected = _b2 === void 0 ? [] : _b2, selectionType = _a2.selectionType, selectionTypeCounterText = _a2.selectionTypeCounterText;
  return React$1.createElement(
    "span",
    { className: classNames$1("form-multi-select-selection", {
      "form-multi-select-selection-tags": multiple && selectionType === "tags"
    }), ref },
    multiple && selectionType === "counter" && !search && selected.length === 0 && placeholder,
    multiple && selectionType === "counter" && !search && selected.length > 0 && "".concat(selected.length, " ").concat(selectionTypeCounterText),
    multiple && selectionType === "tags" && selected.map(function(option, index) {
      if (selectionType === "tags") {
        return React$1.createElement(
          "span",
          { className: "form-multi-select-tag", key: index },
          option.text,
          !option.disabled && React$1.createElement(
            "button",
            { className: "form-multi-select-tag-delete", "aria-label": "Close", onClick: function() {
              return onRemove && onRemove(option);
            } },
            React$1.createElement("span", { "aria-hidden": "true" }, "×")
          )
        );
      }
      return;
    }),
    multiple && selectionType === "text" && selected.map(function(option, index) {
      return React$1.createElement(
        "span",
        { key: index },
        option.text,
        index === selected.length - 1 ? "" : ",",
        " "
      );
    }),
    !multiple && !search && selected.map(function(option) {
      return option.text;
    })[0],
    children
  );
});
CMultiSelectSelection.propTypes = {
  multiple: PropTypes$1.bool,
  onRemove: PropTypes$1.func,
  placeholder: PropTypes$1.string,
  search: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.oneOf(["external"])]),
  selected: PropTypes$1.array,
  selectionType: PropTypes$1.oneOf(["counter", "tags", "text"]),
  selectionTypeCounterText: PropTypes$1.string
};
CMultiSelectSelection.displayName = "CMultiSelectSelection";
var CMultiSelect = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var allowCreateOptions = _a2.allowCreateOptions, className = _a2.className, _c2 = _a2.cleaner, cleaner = _c2 === void 0 ? true : _c2, clearSearchOnSelect = _a2.clearSearchOnSelect, disabled = _a2.disabled, feedback = _a2.feedback, feedbackInvalid = _a2.feedbackInvalid, feedbackValid = _a2.feedbackValid, loading = _a2.loading, _d2 = _a2.multiple, multiple = _d2 === void 0 ? true : _d2, id = _a2.id, invalid = _a2.invalid, label = _a2.label, onChange = _a2.onChange, onFilterChange = _a2.onFilterChange, onHide = _a2.onHide, onShow = _a2.onShow, options = _a2.options, _e2 = _a2.optionsMaxHeight, optionsMaxHeight = _e2 === void 0 ? "auto" : _e2, _f2 = _a2.optionsStyle, optionsStyle = _f2 === void 0 ? "checkbox" : _f2, optionsTemplate = _a2.optionsTemplate, optionsGroupsTemplate = _a2.optionsGroupsTemplate, _g2 = _a2.placeholder, placeholder = _g2 === void 0 ? "Select..." : _g2, required = _a2.required, _h2 = _a2.search, search = _h2 === void 0 ? true : _h2, _j2 = _a2.searchNoResultsLabel, searchNoResultsLabel = _j2 === void 0 ? "No results found" : _j2, _k2 = _a2.selectAll, selectAll = _k2 === void 0 ? true : _k2, _l2 = _a2.selectAllLabel, selectAllLabel = _l2 === void 0 ? "Select all options" : _l2, _m2 = _a2.selectionType, selectionType = _m2 === void 0 ? "tags" : _m2, _o = _a2.selectionTypeCounterText, selectionTypeCounterText = _o === void 0 ? "item(s) selected" : _o, size = _a2.size, text = _a2.text, tooltipFeedback = _a2.tooltipFeedback, valid = _a2.valid, virtualScroller = _a2.virtualScroller, _p = _a2.visible, visible = _p === void 0 ? false : _p, _q = _a2.visibleItems, visibleItems = _q === void 0 ? 10 : _q, rest = __rest$1(_a2, ["allowCreateOptions", "className", "cleaner", "clearSearchOnSelect", "disabled", "feedback", "feedbackInvalid", "feedbackValid", "loading", "multiple", "id", "invalid", "label", "onChange", "onFilterChange", "onHide", "onShow", "options", "optionsMaxHeight", "optionsStyle", "optionsTemplate", "optionsGroupsTemplate", "placeholder", "required", "search", "searchNoResultsLabel", "selectAll", "selectAllLabel", "selectionType", "selectionTypeCounterText", "size", "text", "tooltipFeedback", "valid", "virtualScroller", "visible", "visibleItems"]);
  var multiSelectRef = reactExports.useRef(null);
  var multiSelectForkedRef = useForkedRef(ref, multiSelectRef);
  var dropdownRef = reactExports.useRef(null);
  var nativeSelectRef = reactExports.useRef(null);
  var togglerRef = reactExports.useRef(null);
  var searchRef = reactExports.useRef(null);
  var isInitialMount = reactExports.useRef(true);
  var _r = usePopper(), popper2 = _r.popper, initPopper = _r.initPopper, destroyPopper = _r.destroyPopper;
  var _s = reactExports.useState(options), _options = _s[0], setOptions = _s[1];
  var _t = reactExports.useState(visible), _visible = _t[0], setVisible = _t[1];
  var _u = reactExports.useState(""), searchValue = _u[0], setSearchValue = _u[1];
  var _v = reactExports.useState([]), selected = _v[0], setSelected = _v[1];
  var _w = reactExports.useState([]), userOptions = _w[0], setUserOptions = _w[1];
  var filteredOptions = reactExports.useMemo(function() {
    return flattenOptionsArray(search === "external" ? __spreadArray(__spreadArray([], _options, true), filterOptionsList(searchValue, userOptions), true) : filterOptionsList(searchValue, __spreadArray(__spreadArray([], _options, true), userOptions, true)), true);
  }, [_options, searchValue, userOptions]);
  var flattenedOptions = reactExports.useMemo(function() {
    return flattenOptionsArray(options);
  }, [JSON.stringify(options)]);
  var userOption = reactExports.useMemo(function() {
    if (allowCreateOptions && filteredOptions.some(function(option) {
      return option.text && option.text.toLowerCase() === searchValue.toLowerCase();
    })) {
      return false;
    }
    return searchRef.current && createOption(String(searchValue), flattenedOptions);
  }, [filteredOptions, searchValue]);
  var popperConfig = {
    placement: isRTL(multiSelectRef.current) ? "bottom-end" : "bottom-start",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary: "clippingParents"
        }
      },
      {
        name: "offset",
        options: {
          offset: [0, 2]
        }
      }
    ]
  };
  reactExports.useEffect(function() {
    setOptions(options);
    var _selected = flattenedOptions.filter(function(option) {
      return option.selected === true;
    });
    var deselected = flattenedOptions.filter(function(option) {
      return option.selected === false;
    });
    _selected && setSelected(selectOptions(_selected, selected, deselected));
  }, [JSON.stringify(options)]);
  reactExports.useEffect(function() {
    !isInitialMount.current && onFilterChange && onFilterChange(searchValue);
  }, [searchValue]);
  reactExports.useEffect(function() {
    if (!isInitialMount.current && nativeSelectRef.current) {
      nativeSelectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (popper2) {
      popper2.update();
    }
  }, [JSON.stringify(selected)]);
  reactExports.useEffect(function() {
    if (_visible) {
      onShow && onShow();
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("keyup", handleKeyUp);
      togglerRef.current && dropdownRef.current && initPopper(togglerRef.current, dropdownRef.current, popperConfig);
      searchRef.current && searchRef.current.focus();
    }
    return function() {
      onHide && onHide();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keyup", handleKeyUp);
      destroyPopper();
    };
  }, [_visible]);
  reactExports.useEffect(function() {
    isInitialMount.current = false;
  }, []);
  var handleKeyUp = function(event) {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };
  var handleMouseUp = function(event) {
    if (multiSelectRef.current && multiSelectRef.current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };
  var handleSearchChange = function(event) {
    var value = event.target.value;
    setSearchValue(value);
  };
  var handleSearchKeyDown = function(event) {
    if (event.key === "Enter" && searchValue && allowCreateOptions) {
      event.preventDefault();
      if (userOption) {
        setSelected(__spreadArray(__spreadArray([], selected, true), userOption, true));
        setUserOptions(__spreadArray(__spreadArray([], userOptions, true), userOption, true));
      }
      if (!userOption) {
        setSelected(__spreadArray(__spreadArray([], selected, true), [
          filteredOptions.find(function(option) {
            return String(option.text).toLowerCase() === searchValue.toLowerCase();
          })
        ], false));
      }
      setSearchValue("");
      if (searchRef.current) {
        searchRef.current.value = "";
      }
      return;
    }
    if (searchValue.length > 0) {
      return;
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      var last_1 = selected.filter(function(option) {
        return !option.disabled;
      }).pop();
      last_1 && setSelected(selected.filter(function(option) {
        return option.value !== last_1.value;
      }));
    }
  };
  var handleOptionOnClick = function(option) {
    if (!multiple) {
      setSelected([option]);
      setVisible(false);
      setSearchValue("");
      if (searchRef.current) {
        searchRef.current.value = "";
      }
      return;
    }
    if (option.custom && !userOptions.some(function(_option) {
      return _option.value === option.value;
    })) {
      setUserOptions(__spreadArray(__spreadArray([], userOptions, true), [option], false));
    }
    if (clearSearchOnSelect || option.custom) {
      setSearchValue("");
      if (searchRef.current) {
        searchRef.current.value = "";
        searchRef.current.focus();
      }
    }
    if (selected.some(function(_option) {
      return _option.value === option.value;
    })) {
      setSelected(selected.filter(function(_option) {
        return _option.value !== option.value;
      }));
    } else {
      setSelected(__spreadArray(__spreadArray([], selected, true), [option], false));
    }
  };
  var handleSelectAll = function() {
    setSelected(selectOptions(__spreadArray(__spreadArray([], flattenedOptions.filter(function(option) {
      return !option.disabled;
    }), true), userOptions, true), selected));
  };
  var handleDeselectAll = function() {
    setSelected(selected.filter(function(option) {
      return option.disabled;
    }));
  };
  return React$1.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, id, invalid, label, text, tooltipFeedback, valid },
    React$1.createElement(CMultiSelectNativeSelect, { className: "form-multi-select", id, multiple, options: selected, required, value: multiple ? selected.map(function(option) {
      return option.value.toString();
    }) : selected.map(function(option) {
      return option.value;
    })[0], onChange: function() {
      return onChange && onChange(selected);
    }, ref: nativeSelectRef }),
    React$1.createElement(
      "div",
      { className: classNames$1("form-multi-select", (_b2 = {
        "form-multi-select-with-cleaner": cleaner
      }, _b2["form-multi-select-".concat(size)] = size, _b2["form-multi-select-selection-tags"] = multiple && selectionType === "tags", _b2.disabled = disabled, _b2["is-invalid"] = invalid, _b2["is-valid"] = valid, _b2.show = _visible, _b2), className), "aria-expanded": _visible, id, ref: multiSelectForkedRef },
      React$1.createElement(
        "div",
        { className: "form-multi-select-input-group", onClick: function() {
          return setVisible(true);
        }, ref: togglerRef },
        React$1.createElement(CMultiSelectSelection, { multiple, onRemove: function(option) {
          return !disabled && handleOptionOnClick(option);
        }, placeholder, search, selected, selectionType, selectionTypeCounterText }, search && React$1.createElement("input", __assign$1({ type: "text", className: "form-multi-select-search", disabled, autoComplete: "off", onChange: handleSearchChange, onKeyDown: handleSearchKeyDown }, selected.length === 0 && { placeholder }, selected.length > 0 && selectionType === "counter" && {
          placeholder: "".concat(selected.length, " ").concat(selectionTypeCounterText)
        }, selected.length > 0 && !multiple && { placeholder: selected.map(function(option) {
          return option.text;
        })[0] }, multiple && selected.length > 0 && selectionType !== "counter" && { size: searchValue.length + 2 }, { ref: searchRef }))),
        !disabled && cleaner && selected.length > 0 && React$1.createElement("button", { type: "button", className: "form-multi-select-selection-cleaner", onClick: function() {
          return handleDeselectAll();
        } })
      ),
      React$1.createElement(
        "div",
        { className: "form-multi-select-dropdown", role: "menu", ref: dropdownRef },
        multiple && selectAll && React$1.createElement("button", { type: "button", className: "form-multi-select-all", onClick: function() {
          return handleSelectAll();
        } }, selectAllLabel),
        React$1.createElement(CMultiSelectOptions, { handleOptionOnClick: function(option) {
          return !disabled && handleOptionOnClick(option);
        }, loading, options: filteredOptions.length === 0 && allowCreateOptions ? userOption || [] : filteredOptions, optionsMaxHeight, optionsStyle, optionsTemplate, optionsGroupsTemplate, searchNoResultsLabel, selected, virtualScroller, visibleItems })
      )
    )
  );
});
CMultiSelect.propTypes = __assign$1({ className: PropTypes$1.string, cleaner: PropTypes$1.bool, clearSearchOnSelect: PropTypes$1.bool, disabled: PropTypes$1.bool, loading: PropTypes$1.bool, multiple: PropTypes$1.bool, onChange: PropTypes$1.func, onFilterChange: PropTypes$1.func, onHide: PropTypes$1.func, onShow: PropTypes$1.func, options: PropTypes$1.array.isRequired, optionsMaxHeight: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]), optionsStyle: PropTypes$1.oneOf(["checkbox", "text"]), optionsTemplate: PropTypes$1.func, optionsGroupsTemplate: PropTypes$1.func, placeholder: PropTypes$1.string, required: PropTypes$1.bool, search: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.oneOf(["external"])]), searchNoResultsLabel: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]), selectAll: PropTypes$1.bool, selectAllLabel: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]), selectionType: PropTypes$1.oneOf(["counter", "tags", "text"]), selectionTypeCounterText: PropTypes$1.string, size: PropTypes$1.oneOf(["sm", "lg"]), virtualScroller: PropTypes$1.bool, visible: PropTypes$1.bool, visibleItems: PropTypes$1.number }, CFormControlWrapper.propTypes);
CMultiSelect.displayName = "CMultiSelect";
var CNav = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, _c2 = _a2.component, Component = _c2 === void 0 ? "ul" : _c2, layout = _a2.layout, variant = _a2.variant, rest = __rest$1(_a2, ["children", "className", "component", "layout", "variant"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("nav", (_b2 = {}, _b2["nav-".concat(layout)] = layout, _b2["nav-".concat(variant)] = variant, _b2), className), role: "navigation" }, rest, { ref }), children);
});
CNav.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType,
  layout: PropTypes$1.oneOf(["fill", "justified"]),
  variant: PropTypes$1.oneOf(["tabs", "pills", "underline"])
};
CNav.displayName = "CNav";
var CNavGroupItems = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("ul", __assign$1({ className: classNames$1("nav-group-items", className) }, rest, { ref }), children);
});
CNavGroupItems.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CNavGroupItems.displayName = "CNavGroupItems";
var CNavContext = reactExports.createContext({});
var CSidebarNav = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  var _b2 = reactExports.useState(""), visibleGroup = _b2[0], setVisibleGroup = _b2[1];
  var CNavContextValues = {
    visibleGroup,
    setVisibleGroup
  };
  return React$1.createElement(
    "ul",
    __assign$1({ className: classNames$1("sidebar-nav", className), ref }, rest),
    React$1.createElement(CNavContext.Provider, { value: CNavContextValues }, React$1.Children.map(children, function(child, index) {
      if (React$1.isValidElement(child)) {
        return React$1.cloneElement(child, {
          key: index,
          idx: "".concat(index)
        });
      }
      return;
    }))
  );
});
CSidebarNav.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CSidebarNav.displayName = "CSidebarNav";
var isInVisibleGroup = function(el1, el2) {
  var array1 = el1.toString().split(".");
  var array2 = el2.toString().split(".");
  return array2.every(function(item, index) {
    return item === array1[index];
  });
};
var CNavGroup = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, compact = _a2.compact, idx = _a2.idx, toggler = _a2.toggler, visible = _a2.visible, rest = __rest$1(_a2, ["children", "className", "compact", "idx", "toggler", "visible"]);
  var _b2 = reactExports.useState(), height = _b2[0], setHeight = _b2[1];
  var navItemsRef = reactExports.useRef(null);
  var _c2 = reactExports.useContext(CNavContext), visibleGroup = _c2.visibleGroup, setVisibleGroup = _c2.setVisibleGroup;
  var _d2 = reactExports.useState(Boolean(visible || idx && visibleGroup && isInVisibleGroup(visibleGroup, idx))), _visible = _d2[0], setVisible = _d2[1];
  reactExports.useEffect(function() {
    setVisible(Boolean(idx && visibleGroup && isInVisibleGroup(visibleGroup, idx)));
  }, [visibleGroup]);
  var handleTogglerOnCLick = function(event) {
    event.preventDefault();
    setVisibleGroup(_visible ? (idx === null || idx === void 0 ? void 0 : idx.toString().includes(".")) ? idx.slice(0, idx.lastIndexOf(".")) : "" : idx);
    setVisible(!_visible);
  };
  var style = {
    height: 0
  };
  var onEntering = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onEntered = function() {
    setHeight("auto");
  };
  var onExit = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onExiting = function() {
    var _a3;
    (_a3 = navItemsRef.current) === null || _a3 === void 0 ? void 0 : _a3.offsetHeight;
    setHeight(0);
  };
  var onExited = function() {
    setHeight(0);
  };
  var transitionStyles = {
    entering: { display: "block", height },
    entered: { display: "block", height },
    exiting: { display: "block", height },
    exited: { height }
  };
  return React$1.createElement(
    "li",
    __assign$1({ className: classNames$1("nav-group", { show: _visible }, className) }, rest, { ref }),
    toggler && React$1.createElement("a", { className: "nav-link nav-group-toggle", onClick: function(event) {
      return handleTogglerOnCLick(event);
    } }, toggler),
    React$1.createElement(Transition$1, { in: _visible, nodeRef: navItemsRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 300 }, function(state) {
      return React$1.createElement("ul", { className: classNames$1("nav-group-items", {
        compact
      }), style: __assign$1(__assign$1({}, style), transitionStyles[state]), ref: navItemsRef }, React$1.Children.map(children, function(child, index) {
        if (React$1.isValidElement(child)) {
          return React$1.cloneElement(child, {
            key: index,
            idx: "".concat(idx, ".").concat(index)
          });
        }
        return;
      }));
    })
  );
});
CNavGroup.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  compact: PropTypes$1.bool,
  idx: PropTypes$1.string,
  toggler: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  visible: PropTypes$1.bool
};
CNavGroup.displayName = "CNavGroup";
var CNavLink = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, idx = _a2.idx, rest = __rest$1(_a2, ["children", "className", "idx"]);
  var navLinkRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, navLinkRef);
  var setVisibleGroup = reactExports.useContext(CNavContext).setVisibleGroup;
  reactExports.useEffect(function() {
    var _a3;
    rest.active = (_a3 = navLinkRef.current) === null || _a3 === void 0 ? void 0 : _a3.classList.contains("active");
    idx && rest.active && setVisibleGroup(idx);
  }, [rest.active, className]);
  return React$1.createElement(CLink, __assign$1({ className: classNames$1("nav-link", className) }, rest, { ref: forkedRef }), children);
});
CNavLink.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  idx: PropTypes$1.string
};
CNavLink.displayName = "CNavLink";
var CNavItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("li", { className: classNames$1("nav-item", className), ref }, rest.href || rest.to ? React$1.createElement(CNavLink, __assign$1({ className }, rest), children) : children);
});
CNavItem.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CNavItem.displayName = "CNavItem";
var CNavTitle = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("li", __assign$1({ className: classNames$1("nav-title", className) }, rest, { ref }), children);
});
CNavTitle.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CNavTitle.displayName = "CNavTitle";
var CNavbar = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, colorScheme = _a2.colorScheme, _c2 = _a2.component, Component = _c2 === void 0 ? "nav" : _c2, container = _a2.container, expand = _a2.expand, placement = _a2.placement, rest = __rest$1(_a2, ["children", "className", "color", "colorScheme", "component", "container", "expand", "placement"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("navbar", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["navbar-".concat(colorScheme)] = colorScheme, _b2[typeof expand === "boolean" ? "navbar-expand" : "navbar-expand-".concat(expand)] = expand, _b2), placement, className) }, rest, { ref }), container ? React$1.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : React$1.createElement(React$1.Fragment, null, children));
});
CNavbar.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  colorScheme: PropTypes$1.oneOf(["dark", "light"]),
  component: PropTypes$1.elementType,
  container: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  expand: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  placement: PropTypes$1.oneOf(["fixed-top", "fixed-bottom", "sticky-top"])
};
CNavbar.displayName = "CNavbar";
var CNavbarBrand = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, component = _a2.component, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  var Component = component !== null && component !== void 0 ? component : rest.href ? "a" : "span";
  return React$1.createElement(Component, __assign$1({ className: classNames$1("navbar-brand", className) }, rest, { ref }), children);
});
CNavbarBrand.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CNavbarBrand.displayName = "CNavbarBrand";
var CNavbarNav = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "ul" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("navbar-nav", className), role: "navigation" }, rest, { ref }), children);
});
CNavbarNav.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CNavbarNav.displayName = "CNavbarNav";
var CNavbarText = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("span", __assign$1({ className: classNames$1("navbar-text", className) }, rest, { ref }), children);
});
CNavbarText.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CNavbarText.displayName = "CNavbarText";
var CNavbarToggler = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("button", __assign$1({ type: "button", className: classNames$1("navbar-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : React$1.createElement("span", { className: "navbar-toggler-icon" }));
});
CNavbarToggler.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CNavbarToggler.displayName = "CNavbarToggler";
var COffcanvas = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.backdrop, backdrop = _b2 === void 0 ? true : _b2, className = _a2.className, _c2 = _a2.keyboard, keyboard = _c2 === void 0 ? true : _c2, onHide = _a2.onHide, onShow = _a2.onShow, placement = _a2.placement, _d2 = _a2.portal, portal = _d2 === void 0 ? false : _d2, _e2 = _a2.responsive, responsive = _e2 === void 0 ? true : _e2, _f2 = _a2.scroll, scroll = _f2 === void 0 ? false : _f2, _g2 = _a2.visible, visible = _g2 === void 0 ? false : _g2, rest = __rest$1(_a2, ["children", "backdrop", "className", "keyboard", "onHide", "onShow", "placement", "portal", "responsive", "scroll", "visible"]);
  var _h2 = reactExports.useState(visible), _visible = _h2[0], setVisible = _h2[1];
  var offcanvasRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, offcanvasRef);
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    if (_visible && !scroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      return;
    }
    if (!scroll) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    }
  }, [_visible]);
  var handleDismiss = function() {
    setVisible(false);
  };
  var handleBackdropDismiss = function() {
    if (backdrop !== "static") {
      setVisible(false);
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      return handleDismiss();
    }
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.createElement(Transition$1, { in: _visible, nodeRef: offcanvasRef, onEnter: onShow, onEntered: function() {
      var _a3;
      return (_a3 = offcanvasRef.current) === null || _a3 === void 0 ? void 0 : _a3.focus();
    }, onExit: onHide, timeout: 300 }, function(state) {
      var _a3;
      return React$1.createElement(
        CConditionalPortal,
        { portal },
        React$1.createElement("div", __assign$1({ className: classNames$1((_a3 = {}, _a3["offcanvas".concat(typeof responsive === "string" ? "-" + responsive : "")] = responsive, _a3["offcanvas-".concat(placement)] = placement, _a3.showing = state === "entering", _a3.show = state === "entered", _a3["show hiding"] = state === "exiting", _a3), className), role: "dialog", tabIndex: -1, onKeyDown: handleKeyDown }, rest, { ref: forkedRef }), children)
      );
    }),
    backdrop && React$1.createElement(
      CConditionalPortal,
      { portal },
      React$1.createElement(CBackdrop, { className: "offcanvas-backdrop", onClick: handleBackdropDismiss, visible: _visible })
    )
  );
});
COffcanvas.propTypes = {
  backdrop: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.oneOf(["static"])]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  keyboard: PropTypes$1.bool,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  placement: PropTypes$1.oneOf(["start", "end", "top", "bottom"]).isRequired,
  portal: PropTypes$1.bool,
  responsive: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scroll: PropTypes$1.bool,
  visible: PropTypes$1.bool
};
COffcanvas.displayName = "COffcanvas";
var COffcanvasBody = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("offcanvas-body", className) }, rest, { ref }), children);
});
COffcanvasBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
COffcanvasBody.displayName = "COffcanvasBody";
var COffcanvasHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("offcanvas-header", className) }, rest, { ref }), children);
});
COffcanvasHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
COffcanvasHeader.displayName = "COffcanvasHeader";
var COffcanvasTitle = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.component, Component = _b2 === void 0 ? "h5" : _b2, className = _a2.className, rest = __rest$1(_a2, ["children", "component", "className"]);
  return React$1.createElement(Component, __assign$1({ className: classNames$1("offcanvas-title", className) }, rest, { ref }), children);
});
COffcanvasTitle.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
COffcanvasTitle.displayName = "COffcanvasTitle";
var CPagination = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, align = _a2.align, className = _a2.className, size = _a2.size, rest = __rest$1(_a2, ["children", "align", "className", "size"]);
  return React$1.createElement(
    "nav",
    __assign$1({ ref }, rest),
    React$1.createElement("ul", { className: classNames$1("pagination", (_b2 = {}, _b2["justify-content-".concat(align)] = align, _b2["pagination-".concat(size)] = size, _b2), className) }, children)
  );
});
CPagination.propTypes = {
  align: PropTypes$1.oneOf(["start", "center", "end"]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  size: PropTypes$1.oneOf(["sm", "lg"])
};
CPagination.displayName = "CPagination";
var CPaginationItem = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, component = _a2.component, rest = __rest$1(_a2, ["children", "className", "component"]);
  var Component = component !== null && component !== void 0 ? component : rest.active ? "span" : "a";
  return React$1.createElement("li", __assign$1({ className: classNames$1("page-item", {
    active: rest.active,
    disabled: rest.disabled
  }, className) }, rest.active && { "aria-current": "page" }), Component === "a" ? React$1.createElement(CLink, __assign$1({ className: "page-link", component: Component }, rest, { ref }), children) : React$1.createElement(Component, { className: "page-link", ref }, children));
});
CPaginationItem.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  component: PropTypes$1.elementType
};
CPaginationItem.displayName = "CPaginationItem";
var BREAKPOINTS = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CPlaceholder = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, animation = _a2.animation, className = _a2.className, color = _a2.color, _c2 = _a2.component, Component = _c2 === void 0 ? "span" : _c2, size = _a2.size, rest = __rest$1(_a2, ["children", "animation", "className", "color", "component", "size"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
  });
  return React$1.createElement(Component, __assign$1({ className: classNames$1(animation ? "placeholder-".concat(animation) : "placeholder", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["placeholder-".concat(size)] = size, _b2), repsonsiveClassNames, className) }, rest, { ref }), children);
});
CPlaceholder.propTypes = {
  animation: PropTypes$1.oneOf(["glow", "wave"]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  component: PropTypes$1.elementType,
  size: PropTypes$1.oneOf(["xs", "sm", "lg"])
};
CPlaceholder.displayName = "CPlaceholder";
var CProgressStackedContext = reactExports.createContext({});
var CProgressStacked = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("progress-stacked", className), ref }, rest),
    React$1.createElement(CProgressStackedContext.Provider, { value: {
      stacked: true
    } }, children)
  );
});
CProgressStacked.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CProgressStacked.displayName = "CProgressStacked";
var CProgressBar = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, animated = _a2.animated, className = _a2.className, color = _a2.color, _c2 = _a2.value, value = _c2 === void 0 ? 0 : _c2, variant = _a2.variant, rest = __rest$1(_a2, ["children", "animated", "className", "color", "value", "variant"]);
  var stacked = reactExports.useContext(CProgressStackedContext).stacked;
  return React$1.createElement("div", __assign$1({ className: classNames$1("progress-bar", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2["progress-bar-".concat(variant)] = variant, _b2["progress-bar-animated"] = animated, _b2), className) }, !stacked && { style: { width: "".concat(value, "%") } }, rest, { ref }), children);
});
CProgressBar.propTypes = {
  animated: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: PropTypes$1.oneOfType([colorPropType, gradientsPropType]),
  value: PropTypes$1.number,
  variant: PropTypes$1.oneOf(["striped"])
};
CProgressBar.displayName = "CProgressBar";
var CProgress = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, height = _a2.height, progressBarClassName = _a2.progressBarClassName, thin = _a2.thin, value = _a2.value, white = _a2.white, rest = __rest$1(_a2, ["children", "className", "height", "progressBarClassName", "thin", "value", "white"]);
  var stacked = reactExports.useContext(CProgressStackedContext).stacked;
  return React$1.createElement("div", __assign$1({ className: classNames$1("progress", {
    "progress-thin": thin,
    "progress-white": white
  }, className) }, value !== void 0 && {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, { style: __assign$1(__assign$1({}, height ? { height: "".concat(height, "px") } : {}), stacked ? { width: "".concat(value, "%") } : {}), ref }), React$1.Children.toArray(children).some(
    // @ts-expect-error displayName is set in the CProgressBar component
    function(child) {
      return child.type && child.type.displayName === "CProgressBar";
    }
  ) ? React$1.Children.map(children, function(child) {
    if (React$1.isValidElement(child) && child.type.displayName === "CProgressBar") {
      return React$1.cloneElement(child, __assign$1(__assign$1({}, value && { value }), rest));
    }
    return;
  }) : React$1.createElement(CProgressBar, __assign$1({}, progressBarClassName && { className: progressBarClassName }, { value }, rest), children));
});
CProgress.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  height: PropTypes$1.number,
  progressBarClassName: PropTypes$1.string,
  thin: PropTypes$1.bool,
  value: PropTypes$1.number,
  white: PropTypes$1.bool
};
CProgress.displayName = "CProgress";
var CPopover = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.animation, animation = _b2 === void 0 ? true : _b2, className = _a2.className, container = _a2.container, content = _a2.content, _c2 = _a2.delay, delay = _c2 === void 0 ? 0 : _c2, _d2 = _a2.fallbackPlacements, fallbackPlacements = _d2 === void 0 ? ["top", "right", "bottom", "left"] : _d2, _e2 = _a2.offset, offset2 = _e2 === void 0 ? [0, 8] : _e2, onHide = _a2.onHide;
  _a2.onShow;
  var _f2 = _a2.placement, placement = _f2 === void 0 ? "top" : _f2, title = _a2.title, _g2 = _a2.trigger, trigger = _g2 === void 0 ? "click" : _g2, visible = _a2.visible, rest = __rest$1(_a2, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "title", "trigger", "visible"]);
  var popoverRef = reactExports.useRef(null);
  var togglerRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, popoverRef);
  var uID = reactExports.useRef("popover".concat(Math.floor(Math.random() * 1e6)));
  var _h2 = usePopper(), initPopper = _h2.initPopper, destroyPopper = _h2.destroyPopper;
  var _j2 = reactExports.useState(visible), _visible = _j2[0], setVisible = _j2[1];
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var popperConfig = {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: ".popover-arrow"
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements
        }
      },
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  var toggleVisible = function(visible2) {
    if (visible2) {
      setTimeout(function() {
        return setVisible(true);
      }, _delay.show);
      return;
    }
    setTimeout(function() {
      return setVisible(false);
    }, _delay.hide);
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.cloneElement(children, __assign$1(__assign$1(__assign$1(__assign$1(__assign$1({}, _visible && {
      "aria-describedby": uID.current
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return toggleVisible(!_visible);
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return toggleVisible(true);
      },
      onBlur: function() {
        return toggleVisible(false);
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return toggleVisible(true);
      },
      onMouseLeave: function() {
        return toggleVisible(false);
      }
    })),
    React$1.createElement(
      CConditionalPortal,
      { container, portal: true },
      React$1.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: popoverRef, onEnter: function() {
        if (togglerRef.current && popoverRef.current) {
          initPopper(togglerRef.current, popoverRef.current, popperConfig);
        }
      }, onEntering: function() {
        if (togglerRef.current && popoverRef.current) {
          popoverRef.current.style.display = "initial";
        }
      }, onExit: onHide, onExited: function() {
        destroyPopper();
      }, timeout: {
        enter: 0,
        exit: popoverRef.current ? getTransitionDurationFromElement(popoverRef.current) + 50 : 200
      }, unmountOnExit: true }, function(state) {
        return React$1.createElement(
          "div",
          __assign$1({ className: classNames$1("popover", "bs-popover-auto", {
            fade: animation,
            show: state === "entered"
          }, className), id: uID.current, ref: forkedRef, role: "tooltip", style: {
            display: "none"
          } }, rest),
          React$1.createElement("div", { className: "popover-arrow" }),
          React$1.createElement("div", { className: "popover-header" }, title),
          React$1.createElement("div", { className: "popover-body" }, content)
        );
      })
    )
  );
});
CPopover.propTypes = {
  animation: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  container: PropTypes$1.any,
  content: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  delay: PropTypes$1.oneOfType([
    PropTypes$1.number,
    PropTypes$1.shape({
      show: PropTypes$1.number.isRequired,
      hide: PropTypes$1.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: PropTypes$1.any,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  placement: PropTypes$1.oneOf(["auto", "top", "right", "bottom", "left"]),
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  trigger: triggerPropType,
  visible: PropTypes$1.bool
};
CPopover.displayName = "CPopover";
var cilArrowBottom = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"];
var cilArrowTop = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"];
var cilFilterX = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='40 16 40 53.828 109.024 136 150.815 136 76.896 48 459.51 48 304 242.388 304 401.373 241.373 464 240 464 240 368 208 368 208 496 254.627 496 336 414.627 336 253.612 496 53.612 496 16 40 16' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='166.403 248.225 226.864 187.763 204.237 165.135 143.775 225.597 83.313 165.135 60.687 187.763 121.148 248.225 60.687 308.687 83.313 331.314 143.775 270.852 204.237 331.314 226.864 308.687 166.403 248.225' class='ci-primary'/>"];
var cilSwapVertical = ["512 512", "<polygon fill='var(--ci-primary-color, currentColor)' points='384 433.373 384 160 352 160 352 434.51 282.177 364.687 259.55 387.313 367.432 495.196 475.313 387.313 452.687 364.687 384 433.373' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='159.432 17.372 51.55 125.255 74.177 147.882 144 78.059 144 352 176 352 176 79.195 244.687 147.882 267.313 125.255 159.432 17.372' class='ci-primary'/>"];
var __assign$2 = function() {
  __assign$2 = Object.assign || function __assign2(t2) {
    for (var s3, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s3 = arguments[i2];
      for (var p in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p))
          t2[p] = s3[p];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
function __rest$2(s3, e2) {
  var t2 = {};
  for (var p in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p) && e2.indexOf(p) < 0)
      t2[p] = s3[p];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s3); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p[i2]))
        t2[p[i2]] = s3[p[i2]];
    }
  return t2;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function getDefaultExportFromCjs$2(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var propTypes$2 = { exports: {} };
var ReactPropTypesSecret_1$2;
var hasRequiredReactPropTypesSecret$2;
function requireReactPropTypesSecret$2() {
  if (hasRequiredReactPropTypesSecret$2)
    return ReactPropTypesSecret_1$2;
  hasRequiredReactPropTypesSecret$2 = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1$2 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1$2;
}
var factoryWithThrowingShims$2;
var hasRequiredFactoryWithThrowingShims$2;
function requireFactoryWithThrowingShims$2() {
  if (hasRequiredFactoryWithThrowingShims$2)
    return factoryWithThrowingShims$2;
  hasRequiredFactoryWithThrowingShims$2 = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret$2();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims$2 = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims$2;
}
{
  propTypes$2.exports = requireFactoryWithThrowingShims$2()();
}
var propTypesExports$2 = propTypes$2.exports;
var PropTypes$2 = /* @__PURE__ */ getDefaultExportFromCjs$2(propTypesExports$2);
var classnames$2 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames$2);
var classnamesExports$2 = classnames$2.exports;
var classNames$2 = /* @__PURE__ */ getDefaultExportFromCjs$2(classnamesExports$2);
var toCamelCase$1 = function(str) {
  return str.replace(/([-_][a-z0-9])/gi, function($1) {
    return $1.toUpperCase();
  }).replace(/-/gi, "");
};
var CIcon$1 = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var className = _a2.className, content = _a2.content, customClassName = _a2.customClassName, height = _a2.height, icon = _a2.icon, name = _a2.name, size = _a2.size, title = _a2.title, use = _a2.use, width = _a2.width, rest = __rest$2(_a2, ["className", "content", "customClassName", "height", "icon", "name", "size", "title", "use", "width"]);
  var _c2 = reactExports.useState(0), change = _c2[0], setChange = _c2[1];
  var _icon = icon || content || name;
  if (content) {
    process && define_process_env_default$1 && false;
  }
  if (name) {
    process && define_process_env_default$1 && false;
  }
  reactExports.useMemo(function() {
    return setChange(change + 1);
  }, [_icon, JSON.stringify(_icon)]);
  var titleCode = title ? "<title>".concat(title, "</title>") : "";
  var code = reactExports.useMemo(function() {
    var iconName = _icon && typeof _icon === "string" && _icon.includes("-") ? toCamelCase$1(_icon) : _icon;
    if (Array.isArray(_icon)) {
      return _icon;
    }
    if (typeof _icon === "string" && React$1["icons"]) {
      return React$1["icons"][iconName];
    }
  }, [change]);
  var iconCode = reactExports.useMemo(function() {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [change]);
  var scale = function() {
    return Array.isArray(code) && code.length > 1 ? code[0] : "64 64";
  }();
  var viewBox = function() {
    return rest["viewBox"] || "0 0 ".concat(scale);
  }();
  var _className = customClassName ? classNames$2(customClassName) : classNames$2("icon", (_b2 = {}, _b2["icon-".concat(size)] = size, _b2["icon-custom-size"] = height || width, _b2), className);
  return React$1.createElement(
    React$1.Fragment,
    null,
    use ? React$1.createElement(
      "svg",
      __assign$2({ xmlns: "http://www.w3.org/2000/svg", className: _className }, height && { height }, width && { width }, { role: "img", "aria-hidden": "true" }, rest, { ref }),
      React$1.createElement("use", { href: use })
    ) : React$1.createElement("svg", __assign$2({ xmlns: "http://www.w3.org/2000/svg", viewBox, className: _className }, height && { height }, width && { width }, { role: "img", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: titleCode + iconCode } }, rest, { ref })),
    title && React$1.createElement("span", { className: "visually-hidden" }, title)
  );
});
CIcon$1.propTypes = {
  className: PropTypes$2.string,
  content: PropTypes$2.oneOfType([PropTypes$2.array, PropTypes$2.string]),
  customClassName: PropTypes$2.string,
  height: PropTypes$2.number,
  icon: PropTypes$2.oneOfType([PropTypes$2.array, PropTypes$2.string]),
  name: PropTypes$2.string,
  size: PropTypes$2.oneOf([
    "custom",
    "custom-size",
    "sm",
    "lg",
    "xl",
    "xxl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl"
  ]),
  title: PropTypes$2.any,
  use: PropTypes$2.any,
  width: PropTypes$2.number
};
CIcon$1.displayName = "CIcon";
var CSmartPagination = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, _b2 = _a2.activePage, activePage = _b2 === void 0 ? 1 : _b2, _c2 = _a2.align, align = _c2 === void 0 ? "start" : _c2, _d2 = _a2.arrows, arrows = _d2 === void 0 ? true : _d2, _e2 = _a2.dots, dots = _e2 === void 0 ? true : _e2, _f2 = _a2.doubleArrows, doubleArrows = _f2 === void 0 ? true : _f2, _g2 = _a2.firstButton, firstButton = _g2 === void 0 ? React$1.createElement(React$1.Fragment, null, "«") : _g2, _h2 = _a2.lastButton, lastButton = _h2 === void 0 ? React$1.createElement(React$1.Fragment, null, "»") : _h2, _j2 = _a2.limit, limit = _j2 === void 0 ? 5 : _j2, _k2 = _a2.nextButton, nextButton = _k2 === void 0 ? React$1.createElement(React$1.Fragment, null, "›") : _k2, onActivePageChange = _a2.onActivePageChange, pages = _a2.pages, _l2 = _a2.previousButton, previousButton = _l2 === void 0 ? React$1.createElement(React$1.Fragment, null, "‹") : _l2, size = _a2.size, rest = __rest$1(_a2, ["className", "activePage", "align", "arrows", "dots", "doubleArrows", "firstButton", "lastButton", "limit", "nextButton", "onActivePageChange", "pages", "previousButton", "size"]);
  var showDots = function() {
    return dots && limit > 4 && limit < pages;
  }();
  var maxPrevItems = function() {
    return Math.floor((limit - 1) / 2);
  }();
  var maxNextItems = function() {
    return Math.ceil((limit - 1) / 2);
  }();
  var beforeDots = function() {
    return showDots && activePage > maxPrevItems + 1;
  }();
  var afterDots = function() {
    return showDots && activePage < pages - maxNextItems;
  }();
  var computedLimit = function() {
    return limit - (afterDots ? 1 : 0) - (beforeDots ? 1 : 0);
  }();
  var range = function() {
    return activePage + maxNextItems;
  }();
  var lastItem = function() {
    return range >= pages ? pages : range - (afterDots ? 1 : 0);
  }();
  var itemsAmount = function() {
    return pages < computedLimit ? pages : computedLimit;
  }();
  var items = function() {
    return activePage - maxPrevItems <= 1 ? Array.from({
      length: itemsAmount
    }, function(_v, i2) {
      return i2 + 1;
    }) : Array.from({
      length: itemsAmount
    }, function(_v, i2) {
      return lastItem - i2;
    }).reverse();
  }();
  var setPage = function(number) {
    if (number !== activePage) {
      onActivePageChange && onActivePageChange(number);
    }
  };
  return React$1.createElement(
    CPagination,
    __assign$1({ className: classNames$1("justify-content-".concat(align), className), "aria-label": "pagination", size }, rest, { ref }),
    doubleArrows && React$1.createElement(CPaginationItem, { onClick: function() {
      return setPage(1);
    }, "aria-label": "Go to first page", "aria-disabled": activePage === 1, disabled: activePage === 1 }, firstButton),
    arrows && React$1.createElement(CPaginationItem, { onClick: function() {
      return setPage(activePage - 1);
    }, "aria-label": "Go to previous page", "aria-disabled": activePage === 1, disabled: activePage === 1 }, previousButton),
    beforeDots && React$1.createElement(CPaginationItem, { role: "separator", disabled: true }, "…"),
    items.map(function(i2) {
      return React$1.createElement(CPaginationItem, { onClick: function() {
        return setPage(i2);
      }, "aria-label": activePage === i2 ? "Current page ".concat(i2) : "Go to page ".concat(i2), active: activePage === i2, key: i2 }, i2);
    }),
    afterDots && React$1.createElement(CPaginationItem, { role: "separator", disabled: true }, "…"),
    arrows && React$1.createElement(CPaginationItem, { onClick: function() {
      return setPage(activePage + 1);
    }, "aria-label": "Go to next page", "aria-disabled": activePage === pages, disabled: activePage === pages }, nextButton),
    doubleArrows && React$1.createElement(CPaginationItem, { onClick: function() {
      return setPage(pages);
    }, "aria-label": "Go to last page", "aria-disabled": activePage === pages, disabled: activePage === pages }, lastButton)
  );
});
CSmartPagination.propTypes = {
  className: PropTypes$1.oneOfType([PropTypes$1.string]),
  activePage: PropTypes$1.number,
  dots: PropTypes$1.bool,
  arrows: PropTypes$1.bool,
  doubleArrows: PropTypes$1.bool,
  firstButton: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  previousButton: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  nextButton: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  lastButton: PropTypes$1.oneOfType([PropTypes$1.node, PropTypes$1.string]),
  size: PropTypes$1.oneOf(["sm", "lg"]),
  align: PropTypes$1.oneOf(["start", "center", "end"]),
  limit: PropTypes$1.number,
  pages: PropTypes$1.number.isRequired,
  onActivePageChange: PropTypes$1.func
};
CSmartPagination.displayName = "CSmartPagination";
var CTableHead = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "className", "color"]);
  return React$1.createElement("thead", __assign$1({ className: classNames$1((_b2 = {}, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableHead.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableHead.displayName = "CTableHead";
var CTableHeaderCell = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "className", "color"]);
  return React$1.createElement("th", __assign$1({ className: classNames$1((_b2 = {}, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableHeaderCell.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableHeaderCell.displayName = "CTableHeaderCell";
var CTableBody = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "className", "color"]);
  return React$1.createElement("tbody", __assign$1({ className: classNames$1((_b2 = {}, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableBody.displayName = "CTableBody";
var CTableDataCell = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, active = _a2.active, align = _a2.align, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "active", "align", "className", "color"]);
  var Component = rest.scope ? "th" : "td";
  return React$1.createElement(Component, __assign$1({ className: classNames$1((_b2 = {}, _b2["align-".concat(align)] = align, _b2["table-active"] = active, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableDataCell.propTypes = {
  active: PropTypes$1.bool,
  align: PropTypes$1.oneOf(["bottom", "middle", "top"]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableDataCell.displayName = "CTableDataCell";
var CTableRow = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, active = _a2.active, align = _a2.align, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "active", "align", "className", "color"]);
  return React$1.createElement("tr", __assign$1({ className: classNames$1((_b2 = {}, _b2["align-".concat(align)] = align, _b2["table-active"] = active, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableRow.propTypes = {
  active: PropTypes$1.bool,
  align: PropTypes$1.oneOf(["bottom", "middle", "top"]),
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableRow.displayName = "CTableRow";
var CTableFoot = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, color = _a2.color, rest = __rest$1(_a2, ["children", "className", "color"]);
  return React$1.createElement("tfoot", __assign$1({ className: classNames$1((_b2 = {}, _b2["table-".concat(color)] = color, _b2), className) || void 0 }, rest, { ref }), children);
});
CTableFoot.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType
};
CTableFoot.displayName = "CTableFoot";
var CTableCaption = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, props = __rest$1(_a2, ["children"]);
  return React$1.createElement("caption", __assign$1({}, props, { ref }), children);
});
CTableCaption.propTypes = {
  children: PropTypes$1.node
};
CTableCaption.displayName = "CTableCaption";
var CTableResponsiveWrapper = function(_a2) {
  var children = _a2.children, responsive = _a2.responsive, rest = __rest$1(_a2, ["children", "responsive"]);
  return responsive ? React$1.createElement("div", __assign$1({ className: typeof responsive === "boolean" ? "table-responsive" : "table-responsive-".concat(responsive) }, rest), children) : React$1.createElement(React$1.Fragment, null, children);
};
CTableResponsiveWrapper.propTypes = {
  children: PropTypes$1.node,
  responsive: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ])
};
CTableResponsiveWrapper.displayName = "CTableResponsiveWrapper";
var pretifyName$1 = function(name) {
  return name.replace(/[-_.]/g, " ").replace(/ +/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
var getColumnLabel$1 = function(column) {
  var _a2;
  return typeof column === "object" ? (_a2 = column.label) !== null && _a2 !== void 0 ? _a2 : pretifyName$1(column.key) : pretifyName$1(column);
};
var getColumnNames$1 = function(columns, items) {
  return columns ? columns.map(function(column) {
    return typeof column === "object" ? column.key : column;
  }) : items && getColumnNamesFromItems$1(items);
};
var getColumnNamesFromItems$1 = function(items) {
  return Object.keys(items[0] || {}).filter(function(el) {
    return el.charAt(0) !== "_";
  });
};
var CTable = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, align = _a2.align, borderColor = _a2.borderColor, bordered = _a2.bordered, borderless = _a2.borderless, caption = _a2.caption, captionTop = _a2.captionTop, className = _a2.className, color = _a2.color, columns = _a2.columns, footer = _a2.footer, hover = _a2.hover, items = _a2.items, responsive = _a2.responsive, small = _a2.small, striped = _a2.striped, stripedColumns = _a2.stripedColumns, tableFootProps = _a2.tableFootProps, tableHeadProps = _a2.tableHeadProps, rest = __rest$1(_a2, ["children", "align", "borderColor", "bordered", "borderless", "caption", "captionTop", "className", "color", "columns", "footer", "hover", "items", "responsive", "small", "striped", "stripedColumns", "tableFootProps", "tableHeadProps"]);
  var columnNames = reactExports.useMemo(function() {
    return getColumnNames$1(columns, items);
  }, [columns, items]);
  return React$1.createElement(
    CTableResponsiveWrapper,
    { responsive },
    React$1.createElement(
      "table",
      __assign$1({ className: classNames$1("table", (_b2 = {}, _b2["align-".concat(align)] = align, _b2["border-".concat(borderColor)] = borderColor, _b2["caption-top"] = captionTop || caption === "top", _b2["table-bordered"] = bordered, _b2["table-borderless"] = borderless, _b2["table-".concat(color)] = color, _b2["table-hover"] = hover, _b2["table-sm"] = small, _b2["table-striped"] = striped, _b2["table-striped-columns"] = stripedColumns, _b2), className) }, rest, { ref }),
      (caption && caption !== "top" || captionTop) && React$1.createElement(CTableCaption, null, caption || captionTop),
      columns && React$1.createElement(
        CTableHead,
        __assign$1({}, tableHeadProps),
        React$1.createElement(CTableRow, null, columns.map(function(column, index) {
          return React$1.createElement(CTableHeaderCell, __assign$1({}, column._props && __assign$1({}, column._props), column._style && { style: __assign$1({}, column._style) }, { key: index }), getColumnLabel$1(column));
        }))
      ),
      items && React$1.createElement(CTableBody, null, items.map(function(item, index) {
        return React$1.createElement(CTableRow, __assign$1({}, item._props && __assign$1({}, item._props), { key: index }), columnNames && columnNames.map(function(colName, index2) {
          return item[colName] !== void 0 ? React$1.createElement(CTableDataCell, __assign$1({}, item._cellProps && __assign$1(__assign$1({}, item._cellProps["all"] && __assign$1({}, item._cellProps["all"])), item._cellProps[colName] && __assign$1({}, item._cellProps[colName])), { key: index2 }), item[colName]) : null;
        }));
      })),
      children,
      footer && React$1.createElement(
        CTableFoot,
        __assign$1({}, tableFootProps),
        React$1.createElement(CTableRow, null, footer.map(function(item, index) {
          return React$1.createElement(CTableDataCell, __assign$1({}, typeof item === "object" && item._props && __assign$1({}, item._props), { key: index }), typeof item === "object" ? item.label : item);
        }))
      )
    )
  );
});
CTable.propTypes = {
  align: PropTypes$1.oneOf(["bottom", "middle", "top"]),
  borderColor: PropTypes$1.string,
  bordered: PropTypes$1.bool,
  borderless: PropTypes$1.bool,
  caption: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.oneOf(["top"])]),
  captionTop: PropTypes$1.string,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  columns: PropTypes$1.array,
  footer: PropTypes$1.array,
  hover: PropTypes$1.bool,
  items: PropTypes$1.array,
  responsive: PropTypes$1.oneOfType([
    PropTypes$1.bool,
    PropTypes$1.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  small: PropTypes$1.bool,
  striped: PropTypes$1.bool,
  stripedColumns: PropTypes$1.bool,
  tableFootProps: PropTypes$1.shape(__assign$1({}, CTableFoot.propTypes)),
  tableHeadProps: PropTypes$1.shape(__assign$1({}, CTableHead.propTypes))
};
CTable.displayName = "CTable";
var filterColumns = function(items, columnFilter, columnFilterState, itemsDataColumns) {
  if (columnFilter && typeof columnFilter === "object" && columnFilter.external) {
    return items;
  }
  Object.entries(columnFilterState).forEach(function(_a2) {
    var key = _a2[0], value = _a2[1];
    if (value instanceof Function) {
      items = items.filter(function(item) {
        return value(item[key]);
      });
      return;
    }
    var columnFilter2 = String(value).toLowerCase();
    if (columnFilter2 && itemsDataColumns.includes(key)) {
      items = items.filter(function(item) {
        return String(item[key]).toLowerCase().includes(columnFilter2);
      });
    }
  });
  return items;
};
var filterTable = function(items, tableFilter, tableFilterState, itemsDataColumns) {
  if (!tableFilterState || tableFilter && typeof tableFilter === "object" && tableFilter.external) {
    return items;
  }
  var filter = tableFilterState.toLowerCase();
  var valueContainFilter = function(val) {
    return String(val).toLowerCase().includes(filter);
  };
  items = items.filter(function(item) {
    return !!itemsDataColumns.find(function(key) {
      return valueContainFilter(item[key]);
    });
  });
  return items;
};
var getClickedColumnName = function(target, columnNames) {
  var closest = target.closest("tr");
  var children = closest ? Array.from(closest.children) : [];
  var clickedCell = children.filter(function(child) {
    return child.contains(target);
  })[0];
  return columnNames[children.indexOf(clickedCell)];
};
var getColumnKey = function(column) {
  return typeof column === "object" ? column.key : column;
};
var getColumnLabel = function(column) {
  return typeof column === "object" ? column.label !== void 0 ? column.label : pretifyName(column.key) : pretifyName(column);
};
var getColumnNames = function(columns, items) {
  if (columns) {
    var _columns = [];
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
      var column = columns_1[_i];
      if (typeof column === "object" && column.children) {
        _columns.push.apply(_columns, getColumnNames(column.children, []));
        continue;
      }
      typeof column === "object" ? _columns.push(column.key) : _columns.push(column);
    }
    return _columns;
  }
  return getColumnNamesFromItems(items);
};
var getColumns = function(_columns) {
  var columns = [];
  for (var _i = 0, _columns_1 = _columns; _i < _columns_1.length; _i++) {
    var column = _columns_1[_i];
    if (typeof column === "object" && column.group && column.children) {
      columns.push.apply(columns, getColumns(column.children));
      continue;
    }
    if (typeof column === "object" && column.children) {
      columns.push.apply(columns, getColumns(column.children));
    }
    columns.push(column);
  }
  return columns;
};
var countColumns = function(columns, counter) {
  if (counter === void 0) {
    counter = 0;
  }
  var _counter = counter;
  for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
    var column = columns_2[_i];
    if (!column.children) {
      _counter++;
    }
    if (column.children) {
      _counter = countColumns(column.children, _counter);
    }
  }
  return _counter;
};
var getColumnGroups = function(columns) {
  var groups = [];
  var traverseColumns = function(column2, deep2, colSpan) {
    if (deep2 === void 0) {
      deep2 = 0;
    }
    var groups2 = [];
    if (column2.children) {
      for (var _i2 = 0, _a3 = column2.children; _i2 < _a3.length; _i2++) {
        var _column = _a3[_i2];
        if (!_column.group)
          ;
        groups2.push.apply(groups2, traverseColumns(_column, deep2 + 1));
      }
    }
    if (typeof column2 === "object" && column2.group) {
      var children = column2.children, group = column2.group, rest2 = __rest$1(column2, ["children", "group"]);
      groups2.push(__assign$1(__assign$1({ deep: deep2, label: group }, children && { colspan: countColumns(children) }), rest2));
    }
    return groups2;
  };
  if (columns) {
    for (var _i = 0, columns_3 = columns; _i < columns_3.length; _i++) {
      var column = columns_3[_i];
      if (typeof column === "object" && column.group) {
        var objects = traverseColumns(column);
        if (objects) {
          for (var _a2 = 0, objects_1 = objects; _a2 < objects_1.length; _a2++) {
            var object = objects_1[_a2];
            var deep = object.deep, rest = __rest$1(object, ["deep"]);
            if (deep === void 0) {
              continue;
            }
            for (var i2 = 0; i2 < deep; i2++) {
              if (groups[i2]) {
                continue;
              }
              groups.push([]);
            }
            if (groups[deep]) {
              groups[deep].push(rest);
            } else {
              groups.push([rest]);
            }
          }
        }
      }
    }
  }
  return groups;
};
var getColumnNamesFromItems = function(items) {
  return Object.keys(items[0] || {}).filter(function(el) {
    return el.charAt(0) !== "_";
  });
};
var getColumnSorterState = function(key, sorterState) {
  if (sorterState && sorterState.column === key) {
    if (sorterState.state) {
      return sorterState.state;
    }
    return 0;
  }
  return 0;
};
var getColumnValues = function(items, key) {
  return items.map(function(item) {
    return item[key];
  });
};
var getTableDataCellProps = function(item, colName) {
  var props = item._cellProps && __assign$1(__assign$1({}, item._cellProps["all"] && __assign$1({}, item._cellProps["all"])), item._cellProps[colName] && __assign$1({}, item._cellProps[colName]));
  return props;
};
var getTableHeaderCellProps = function(column) {
  if (typeof column === "object" && column._props) {
    return column._props;
  }
  return {};
};
var getTableHeaderCellStyles = function(column, columnSorter) {
  var style = {};
  if (columnSorter && (typeof column !== "object" || typeof column === "object" && (column.sorter === void 0 || column.sorter))) {
    style["cursor"] = "pointer";
  }
  if (typeof column === "object" && column._style) {
    return __assign$1(__assign$1({}, style), column._style);
  }
  return style;
};
var isSortable = function(i2, columns, columnSorter, itemsDataColumns, columnNames) {
  var isDataColumn = itemsDataColumns.includes(columnNames[i2]);
  var column;
  if (columns)
    column = columns[i2];
  return columnSorter && (!columns || typeof column !== "object" || typeof column === "object" && (column.sorter === void 0 || column.sorter)) && isDataColumn;
};
var pretifyName = function(name) {
  return name.replace(/[-_.]/g, " ").replace(/ +/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
var sortItems = function(columnSorter, items, itemsDataColumns, sorterState) {
  var column = sorterState.column;
  if (!column || !itemsDataColumns.includes(column) || columnSorter && typeof columnSorter === "object" && columnSorter.external) {
    return items;
  }
  var flip2 = sorterState.state === "asc" ? 1 : sorterState.state === "desc" ? -1 : 0;
  var sorted = items.slice().sort(function(item, item2) {
    var value = item[column];
    var value2 = item2[column];
    var a3 = typeof value === "number" ? value : String(value).toLowerCase();
    var b2 = typeof value2 === "number" ? value2 : String(value2).toLowerCase();
    return a3 > b2 ? 1 * flip2 : b2 > a3 ? -1 * flip2 : 0;
  });
  return sorted;
};
var CSmartTableBody = reactExports.forwardRef(function(_a2, ref) {
  var clickableRows = _a2.clickableRows, columnNames = _a2.columnNames, currentItems = _a2.currentItems, firstItemOnActivePageIndex = _a2.firstItemOnActivePageIndex, noItemsLabel = _a2.noItemsLabel, onRowChecked = _a2.onRowChecked, onRowClick = _a2.onRowClick, scopedColumns = _a2.scopedColumns, selectable = _a2.selectable, selected = _a2.selected, rest = __rest$1(_a2, ["clickableRows", "columnNames", "currentItems", "firstItemOnActivePageIndex", "noItemsLabel", "onRowChecked", "onRowClick", "scopedColumns", "selectable", "selected"]);
  var colspan = selectable ? columnNames.length + 1 : columnNames.length;
  return React$1.createElement(CTableBody, __assign$1({}, clickableRows && {
    style: { cursor: "pointer" }
  }, rest, { ref }), currentItems.length > 0 ? currentItems.map(function(item, trIndex) {
    return React$1.createElement(
      React$1.Fragment,
      { key: trIndex },
      React$1.createElement(
        CTableRow,
        __assign$1({}, item._props && __assign$1({}, item._props), clickableRows && { tabIndex: 0 }, { onClick: function(event) {
          return onRowClick && onRowClick(item, trIndex + firstItemOnActivePageIndex, getClickedColumnName(event.target, columnNames), event);
        } }),
        selectable && React$1.createElement(
          CTableDataCell,
          null,
          React$1.createElement(CFormCheck, { checked: selected && isObjectInArray(selected, item, ["_cellProps", "_props", "_selected"]), onChange: function(event) {
            var _item = __assign$1({}, item);
            delete _item["_cellProps"];
            delete _item["_props"];
            delete _item["_selected"];
            onRowChecked && onRowChecked(_item, event.target.checked);
          } })
        ),
        columnNames.map(function(colName, index) {
          return scopedColumns && scopedColumns[colName] && React$1.cloneElement(scopedColumns[colName](item, trIndex + firstItemOnActivePageIndex), {
            key: index
          }) || item[colName] !== void 0 && React$1.createElement(CTableDataCell, __assign$1({}, getTableDataCellProps(item, colName), { key: index }), item[colName]);
        })
      ),
      scopedColumns && scopedColumns.details && React$1.createElement(
        React$1.Fragment,
        null,
        React$1.createElement(
          CTableRow,
          null,
          React$1.createElement(CTableDataCell, { colSpan: colspan, className: "p-0", style: { borderBottomWidth: 0 }, tabIndex: -1 })
        ),
        React$1.createElement(
          CTableRow,
          { onClick: function(event) {
            return onRowClick && onRowClick(item, trIndex + firstItemOnActivePageIndex, getClickedColumnName(event.target, columnNames), true);
          }, className: "p-0", key: "details".concat(trIndex) },
          React$1.createElement(CTableDataCell, { colSpan: colspan, className: "p-0", style: { border: 0 } }, scopedColumns.details(item, trIndex + firstItemOnActivePageIndex))
        )
      )
    );
  }) : React$1.createElement(
    CTableRow,
    null,
    React$1.createElement(CTableDataCell, { colSpan: colspan }, noItemsLabel)
  ));
});
CSmartTableBody.propTypes = {
  clickableRows: PropTypes$1.bool,
  currentItems: PropTypes$1.array.isRequired,
  firstItemOnActivePageIndex: PropTypes$1.number.isRequired,
  noItemsLabel: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  onRowChecked: PropTypes$1.func,
  onRowClick: PropTypes$1.func,
  columnNames: PropTypes$1.array.isRequired,
  scopedColumns: PropTypes$1.object,
  selectable: PropTypes$1.bool,
  selected: PropTypes$1.array
};
CSmartTableBody.displayName = "CSmartTableBody";
var CSmartTableHead = reactExports.forwardRef(function(_a2, ref) {
  var columnFilter = _a2.columnFilter, columnFilterState = _a2.columnFilterState, columnSorter = _a2.columnSorter, _b2 = _a2.component, Component = _b2 === void 0 ? CTableHead : _b2, columns = _a2.columns, handleOnCustomFilterChange = _a2.handleOnCustomFilterChange, handleFilterOnChange = _a2.handleFilterOnChange, handleFilterOnInput = _a2.handleFilterOnInput, handleSelectAllChecked = _a2.handleSelectAllChecked, handleSort = _a2.handleSort, items = _a2.items, selectable = _a2.selectable, selectAll = _a2.selectAll, selectedAll = _a2.selectedAll, _c2 = _a2.showGroups, showGroups = _c2 === void 0 ? true : _c2, sorterState = _a2.sorterState, sortingIcon = _a2.sortingIcon, sortingIconAscending = _a2.sortingIconAscending, sortingIconDescending = _a2.sortingIconDescending, rest = __rest$1(_a2, ["columnFilter", "columnFilterState", "columnSorter", "component", "columns", "handleOnCustomFilterChange", "handleFilterOnChange", "handleFilterOnInput", "handleSelectAllChecked", "handleSort", "items", "selectable", "selectAll", "selectedAll", "showGroups", "sorterState", "sortingIcon", "sortingIconAscending", "sortingIconDescending"]);
  var selectAllcheckboxRef = reactExports.useRef(null);
  var _d2 = reactExports.useState(false), refresh = _d2[0], setRefresh = _d2[1];
  var _columns = reactExports.useMemo(function() {
    return getColumns(columns);
  }, [columns]);
  var groups = reactExports.useMemo(function() {
    return getColumnGroups(columns);
  }, [columns]);
  reactExports.useEffect(function() {
    if (columnFilterState && Object.keys(columnFilterState).length === 0) {
      setRefresh(true);
    }
  }, [columnFilterState]);
  reactExports.useEffect(function() {
    setRefresh(true);
  }, [items]);
  reactExports.useEffect(function() {
    if (setRefresh) {
      setRefresh(false);
    }
  }, [refresh]);
  var columnSorterIcon = function(column) {
    if (getColumnSorterState(getColumnKey(column), sorterState) === 0) {
      return React$1.createElement("span", { className: "opacity-25 float-end me-1" }, sortingIcon);
    }
    if (getColumnSorterState(getColumnKey(column), sorterState) === "asc") {
      return React$1.createElement("span", { className: "float-end me-1" }, sortingIconAscending);
    }
    if (getColumnSorterState(getColumnKey(column), sorterState) === "desc") {
      return React$1.createElement("span", { className: "float-end me-1" }, sortingIconDescending);
    }
    return;
  };
  return React$1.createElement(
    Component,
    __assign$1({}, rest, { ref }),
    showGroups && groups && groups.length > 0 && groups.map(function(row, index) {
      return React$1.createElement(
        CTableRow,
        { key: index },
        selectable && React$1.createElement(CTableHeaderCell, null),
        row.map(function(cell, index2) {
          return React$1.createElement(CTableHeaderCell, __assign$1({ colSpan: cell.colspan }, getTableHeaderCellProps(cell), { key: index2 }), cell.label);
        })
      );
    }),
    React$1.createElement(
      CTableRow,
      null,
      selectable && React$1.createElement(CTableHeaderCell, null, selectAll && React$1.createElement(CFormCheck, { checked: typeof selectedAll === "boolean" ? selectedAll : false, indeterminate: selectedAll === "indeterminate" ? true : false, onChange: function() {
        return handleSelectAllChecked && handleSelectAllChecked();
      }, ref: selectAllcheckboxRef })),
      _columns.map(function(column, index) {
        return React$1.createElement(
          CTableHeaderCell,
          __assign$1({}, getTableHeaderCellProps(column), { onClick: function() {
            return handleSort && handleSort(getColumnKey(column), index);
          }, style: getTableHeaderCellStyles(column, columnSorter), key: index }),
          React$1.createElement("div", { className: "d-inline" }, getColumnLabel(column)),
          columnSorter && (typeof column === "object" ? column.sorter === void 0 ? true : column.sorter : true) && columnSorterIcon(column)
        );
      })
    ),
    columnFilter && React$1.createElement(
      CTableRow,
      null,
      selectable && React$1.createElement(CTableHeaderCell, null),
      _columns.map(function(column, index) {
        return React$1.createElement(CTableHeaderCell, __assign$1({}, getTableHeaderCellProps(column), { key: index }), (typeof column === "object" ? column.filter === void 0 ? true : column.filter : true) ? typeof column !== "string" && typeof column.filter === "function" ? !refresh && column.filter(getColumnValues(items, getColumnKey(column)), function(value) {
          return handleOnCustomFilterChange && handleOnCustomFilterChange(getColumnKey(column), value);
        }) : React$1.createElement(CFormInput, { size: "sm", onInput: function(event) {
          return handleFilterOnInput && handleFilterOnInput(getColumnKey(column), event.target.value);
        }, onChange: function(event) {
          return handleFilterOnChange && handleFilterOnChange(getColumnKey(column), event.target.value);
        }, value: columnFilterState && columnFilterState[getColumnKey(column)] ? columnFilterState[getColumnKey(column)] : "", "aria-label": "column name: '".concat(getColumnLabel(column), "' filter input") }) : "");
      })
    )
  );
});
CSmartTableHead.propTypes = {
  columnFilter: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  columnFilterState: PropTypes$1.object,
  columnSorter: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  component: PropTypes$1.elementType,
  children: PropTypes$1.node,
  columns: PropTypes$1.arrayOf(PropTypes$1.oneOfType([PropTypes$1.any, PropTypes$1.string])).isRequired,
  handleFilterOnChange: PropTypes$1.func,
  handleFilterOnInput: PropTypes$1.func,
  handleSelectAllChecked: PropTypes$1.func,
  handleSort: PropTypes$1.func,
  selectable: PropTypes$1.bool,
  selectAll: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  selectedAll: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.string]),
  sorterState: PropTypes$1.object,
  sortingIcon: PropTypes$1.node,
  sortingIconAscending: PropTypes$1.node,
  sortingIconDescending: PropTypes$1.node
};
CSmartTableHead.displayName = "CSmartTableHead";
var CSmartTable = reactExports.forwardRef(function(_a2, ref) {
  var _b2 = _a2.activePage, activePage = _b2 === void 0 ? 1 : _b2, cleaner = _a2.cleaner, clickableRows = _a2.clickableRows, columnFilter = _a2.columnFilter, columnFilterValue = _a2.columnFilterValue, columns = _a2.columns, columnSorter = _a2.columnSorter, elementCover = _a2.elementCover, footer = _a2.footer, _c2 = _a2.header, header = _c2 === void 0 ? true : _c2, items = _a2.items, itemsNumber = _a2.itemsNumber, _d2 = _a2.itemsPerPage, itemsPerPage = _d2 === void 0 ? 10 : _d2, _e2 = _a2.itemsPerPageLabel, itemsPerPageLabel = _e2 === void 0 ? "Items per page:" : _e2, _f2 = _a2.itemsPerPageOptions, itemsPerPageOptions = _f2 === void 0 ? [5, 10, 20, 50] : _f2, itemsPerPageSelect = _a2.itemsPerPageSelect, loading = _a2.loading, _g2 = _a2.noItemsLabel, noItemsLabel = _g2 === void 0 ? "No items found" : _g2, onActivePageChange = _a2.onActivePageChange, onColumnFilterChange = _a2.onColumnFilterChange, onFilteredItemsChange = _a2.onFilteredItemsChange, onItemsPerPageChange = _a2.onItemsPerPageChange, onRowClick = _a2.onRowClick, onSelectAll = _a2.onSelectAll, onSelectedItemsChange = _a2.onSelectedItemsChange, onSorterChange = _a2.onSorterChange, onTableFilterChange = _a2.onTableFilterChange, pagination = _a2.pagination, paginationProps = _a2.paginationProps, scopedColumns = _a2.scopedColumns, selected = _a2.selected, selectable = _a2.selectable, _h2 = _a2.selectAll, selectAll = _h2 === void 0 ? true : _h2, sorterValue = _a2.sorterValue, _j2 = _a2.sortingIcon, sortingIcon = _j2 === void 0 ? React$1.createElement(CIcon$1, { width: 18, icon: cilSwapVertical, key: "csv" }) : _j2, _k2 = _a2.sortingIconAscending, sortingIconAscending = _k2 === void 0 ? React$1.createElement(CIcon$1, { width: 18, icon: cilArrowTop, key: "cat" }) : _k2, _l2 = _a2.sortingIconDescending, sortingIconDescending = _l2 === void 0 ? React$1.createElement(CIcon$1, { width: 18, icon: cilArrowBottom, key: "cab" }) : _l2, tableBodyProps = _a2.tableBodyProps, tableFootProps = _a2.tableFootProps, tableFilter = _a2.tableFilter, _m2 = _a2.tableFilterLabel, tableFilterLabel = _m2 === void 0 ? "Filter:" : _m2, _o = _a2.tableFilterPlaceholder, tableFilterPlaceholder = _o === void 0 ? "type string..." : _o, tableFilterValue = _a2.tableFilterValue, tableHeadProps = _a2.tableHeadProps, tableProps = _a2.tableProps, rest = __rest$1(_a2, ["activePage", "cleaner", "clickableRows", "columnFilter", "columnFilterValue", "columns", "columnSorter", "elementCover", "footer", "header", "items", "itemsNumber", "itemsPerPage", "itemsPerPageLabel", "itemsPerPageOptions", "itemsPerPageSelect", "loading", "noItemsLabel", "onActivePageChange", "onColumnFilterChange", "onFilteredItemsChange", "onItemsPerPageChange", "onRowClick", "onSelectAll", "onSelectedItemsChange", "onSorterChange", "onTableFilterChange", "pagination", "paginationProps", "scopedColumns", "selected", "selectable", "selectAll", "sorterValue", "sortingIcon", "sortingIconAscending", "sortingIconDescending", "tableBodyProps", "tableFootProps", "tableFilter", "tableFilterLabel", "tableFilterPlaceholder", "tableFilterValue", "tableHeadProps", "tableProps"]);
  var mountedRef = reactExports.useRef(false);
  var _p = reactExports.useState(activePage), _activePage = _p[0], setActivePage = _p[1];
  var _q = reactExports.useState([]), _items = _q[0], setItems = _q[1];
  var _r = reactExports.useState(itemsNumber), _itemsNumber = _r[0], setItemsNumber = _r[1];
  var _s = reactExports.useState(itemsPerPage), _itemsPerPage = _s[0], setItemsPerPage = _s[1];
  var _t = reactExports.useState([]), _selected = _t[0], setSelected = _t[1];
  var _u = reactExports.useState({}), columnFilterState = _u[0], setColumnFilterState = _u[1];
  var _v = reactExports.useState(), selectedAll = _v[0], setSelectedAll = _v[1];
  var _w = reactExports.useState({}), sorterState = _w[0], setSorterState = _w[1];
  var _x = reactExports.useState(tableFilterValue !== null && tableFilterValue !== void 0 ? tableFilterValue : ""), tableFilterState = _x[0], setTableFilterState = _x[1];
  reactExports.useEffect(function() {
    setActivePage(activePage);
  }, [activePage]);
  reactExports.useEffect(function() {
    if (items && items.length < _itemsPerPage * _activePage - _itemsPerPage) {
      setActivePage(1);
    }
    var selected2 = [];
    items && items.forEach(function(item) {
      if (item._selected) {
        var _item = __assign$1({}, item);
        delete _item["_cellProps"];
        delete _item["_props"];
        delete _item["_selected"];
        selected2.push(_item);
      }
    });
    if (selected2.length > 0) {
      setSelected(__spreadArray(__spreadArray([], _selected, true), selected2, true));
    }
    if (Array.isArray(items)) {
      setItems(items);
      setItemsNumber(itemsNumber || items.length);
    }
  }, [JSON.stringify(items)]);
  reactExports.useEffect(function() {
    Array.isArray(selected) && setSelected(selected);
  }, [JSON.stringify(selected)]);
  reactExports.useEffect(function() {
    itemsNumber && setItemsNumber(itemsNumber);
  }, [itemsNumber]);
  reactExports.useEffect(function() {
    columnFilterValue && setColumnFilterState(columnFilterValue);
  }, [JSON.stringify(columnFilterValue)]);
  reactExports.useEffect(function() {
    setSorterState(__assign$1({}, sorterValue));
  }, [JSON.stringify(sorterValue)]);
  reactExports.useEffect(function() {
    return setItemsPerPage(itemsPerPage);
  }, [itemsPerPage]);
  reactExports.useEffect(function() {
    mountedRef.current && onActivePageChange && onActivePageChange(_activePage);
  }, [_activePage]);
  reactExports.useEffect(function() {
    mountedRef.current && onItemsPerPageChange && onItemsPerPageChange(_itemsPerPage);
    itemsPerPage !== _itemsPerPage && setActivePage(1);
  }, [_itemsPerPage]);
  reactExports.useEffect(function() {
    mountedRef.current && sorterState && onSorterChange && onSorterChange(sorterState);
  }, [JSON.stringify(sorterState)]);
  reactExports.useEffect(function() {
    mountedRef.current && onColumnFilterChange && onColumnFilterChange(columnFilterState);
  }, [columnFilterState]);
  reactExports.useEffect(function() {
    mountedRef.current && onTableFilterChange && onTableFilterChange(tableFilterState);
  }, [tableFilterState]);
  reactExports.useEffect(function() {
    if (selectable) {
      onSelectedItemsChange && onSelectedItemsChange(_selected);
      if (_selected.length === _itemsNumber) {
        setSelectedAll(true);
        return;
      }
      if (_selected.length === 0) {
        setSelectedAll(false);
        return;
      }
      if (_selected.length > 0 && _selected.length !== _itemsNumber) {
        setSelectedAll("indeterminate");
      }
    }
  }, [JSON.stringify(_selected), _itemsNumber]);
  var columnNames = reactExports.useMemo(function() {
    return getColumnNames(columns, _items);
  }, [columns, _items]);
  var itemsDataColumns = reactExports.useMemo(function() {
    return columnNames.filter(function(name) {
      return getColumnNamesFromItems(_items).includes(name);
    });
  }, [columnNames, _items]);
  var filteredColumns = reactExports.useMemo(function() {
    return filterColumns(_items, columnFilter, columnFilterState, itemsDataColumns);
  }, [columnFilterState, JSON.stringify(_items)]);
  var filteredTable = reactExports.useMemo(function() {
    return filterTable(filteredColumns, tableFilter, tableFilterState, itemsDataColumns);
  }, [tableFilterState, JSON.stringify(tableFilterValue), JSON.stringify(filteredColumns)]);
  var sortedItems = reactExports.useMemo(function() {
    return sortItems(columnSorter, filteredTable, itemsDataColumns, sorterState);
  }, [
    JSON.stringify(filteredTable),
    JSON.stringify(sorterState),
    JSON.stringify(columnSorter),
    JSON.stringify(filteredColumns),
    JSON.stringify(_items)
  ]);
  var numberOfPages = _itemsPerPage ? Math.ceil(sortedItems.length / _itemsPerPage) : 1;
  var firstItemOnActivePageIndex = _activePage ? (_activePage - 1) * _itemsPerPage : 0;
  var currentItems = _activePage ? sortedItems.slice(firstItemOnActivePageIndex, firstItemOnActivePageIndex + _itemsPerPage) : sortedItems;
  reactExports.useEffect(function() {
    mountedRef.current && onFilteredItemsChange && onFilteredItemsChange(sortedItems);
  }, [JSON.stringify(sortedItems)]);
  var handleClean = function() {
    setTableFilterState("");
    setColumnFilterState({});
    setSorterState({});
  };
  var handleColumnFilterChange = function(colName, value, type) {
    var _a3;
    var isLazy = columnFilter && typeof columnFilter === "object" && columnFilter.lazy === true;
    if (isLazy && type === "input" || !isLazy && type === "change") {
      return;
    }
    var newState = __assign$1(__assign$1({}, columnFilterState), (_a3 = {}, _a3["".concat(colName)] = value, _a3));
    setActivePage(1);
    setColumnFilterState(newState);
  };
  var handleItemsPerPageChange = function(event) {
    if (typeof itemsPerPageSelect !== "object" || typeof itemsPerPageSelect === "object" && !itemsPerPageSelect.external) {
      setItemsPerPage(Number(event.target.value));
    }
  };
  var handleRowChecked = function(item, value) {
    if (value && !isObjectInArray(_selected, item, ["_cellProps", "_props", "_selected"])) {
      setSelected(__spreadArray(__spreadArray([], _selected, true), [item], false));
      return;
    }
    setSelected(_selected.filter(function(_item) {
      return !isObjectInArray([_item], item, ["_cellProps", "_props", "_selected"]);
    }));
  };
  var handleSelectAllChecked = function() {
    if (selectedAll === true) {
      setSelected([]);
      return;
    }
    onSelectAll && onSelectAll();
    if (selectAll && typeof selectAll === "object" && selectAll.external) {
      return;
    }
    var selected2 = _items.map(function(item) {
      return __assign$1({}, item);
    });
    setSelected(selected2.map(function(item) {
      delete item["_cellProps"];
      delete item["_props"];
      delete item["_selected"];
      return item;
    }));
  };
  var handleSorterChange = function(column, index) {
    if (!isSortable(index, columns, columnSorter, itemsDataColumns, columnNames)) {
      return;
    }
    var state = sorterState !== null && sorterState !== void 0 ? sorterState : { column: "", state: "" };
    if (state.column === column) {
      if (state.state === 0) {
        state.state = "asc";
      } else if (state.state === "asc") {
        state.state = "desc";
      } else {
        state.state = typeof columnSorter === "object" && !columnSorter.resetable ? "asc" : 0;
      }
    } else {
      state.column = column;
      state.state = "asc";
    }
    setSorterState(__assign$1({}, state));
  };
  var handleTableFilterChange = function(value, type) {
    var isLazy = tableFilter && typeof tableFilter === "object" && tableFilter.lazy === true;
    if (isLazy && type === "input" || !isLazy && type === "change") {
      return;
    }
    setActivePage(1);
    setTableFilterState(value);
  };
  reactExports.useEffect(function() {
    mountedRef.current = true;
  }, []);
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.createElement("div", __assign$1({}, rest, { ref }), (itemsPerPageSelect || tableFilter || cleaner) && React$1.createElement("div", { className: "row my-2 mx-0" }, (tableFilter || cleaner) && React$1.createElement(
      React$1.Fragment,
      null,
      React$1.createElement("div", { className: "col-auto p-0" }, tableFilter && React$1.createElement(
        "div",
        { className: "row mb-2" },
        React$1.createElement(CFormLabel, { className: "col-sm-auto col-form-label" }, tableFilterLabel),
        React$1.createElement(
          "div",
          { className: "col-sm-auto" },
          React$1.createElement(CFormInput, { onInput: function(e2) {
            handleTableFilterChange(e2.target.value, "input");
          }, onChange: function(e2) {
            handleTableFilterChange(e2.target.value, "change");
          }, placeholder: tableFilterPlaceholder, value: tableFilterState || "" })
        )
      )),
      React$1.createElement("div", { className: "col-auto p-0" }, cleaner && React$1.createElement(
        "button",
        __assign$1({ type: "button", className: "btn btn-transparent" }, !(tableFilterState || (sorterState === null || sorterState === void 0 ? void 0 : sorterState.column) || Object.values(columnFilterState).join("")) && {
          disabled: true,
          tabIndex: -1
        }, { onClick: function() {
          return handleClean();
        }, onKeyDown: function(event) {
          if (event.key === "Enter")
            handleClean();
        } }),
        React$1.createElement(CIcon$1, { width: 18, icon: cilFilterX })
      ))
    ))),
    React$1.createElement(
      "div",
      { className: "position-relative" },
      React$1.createElement(
        CTable,
        __assign$1({}, tableProps),
        header && React$1.createElement(CSmartTableHead, __assign$1({}, tableHeadProps, { columnFilter, columnFilterState, columns: columns !== null && columns !== void 0 ? columns : columnNames, columnSorter, items: _items, selectable, selectAll, selectedAll, sorterState, sortingIcon, sortingIconAscending, sortingIconDescending, handleFilterOnChange: function(key, event) {
          return handleColumnFilterChange(key, event, "change");
        }, handleFilterOnInput: function(key, event) {
          return handleColumnFilterChange(key, event, "input");
        }, handleOnCustomFilterChange: function(key, event) {
          return handleColumnFilterChange(key, event);
        }, handleSelectAllChecked: function() {
          return handleSelectAllChecked();
        }, handleSort: function(key, index) {
          return handleSorterChange(key, index);
        } })),
        React$1.createElement(CSmartTableBody, __assign$1({ clickableRows, currentItems, firstItemOnActivePageIndex, noItemsLabel, onRowClick: function(item, index, columnName, event) {
          return clickableRows && onRowClick && onRowClick(item, index, columnName, event);
        }, onRowChecked: function(item, value) {
          return handleRowChecked(item, value);
        }, columnNames, scopedColumns, selectable, selected: _selected }, tableBodyProps)),
        typeof footer === "boolean" && footer && React$1.createElement(CSmartTableHead, __assign$1({ component: CTableFoot }, tableFootProps, { columnFilter: false, columnSorter: false, columns: columns !== null && columns !== void 0 ? columns : columnNames, items: _items, handleSelectAllChecked: function() {
          return handleSelectAllChecked();
        }, selectable, selectAll, selectedAll, showGroups: false })),
        Array.isArray(footer) && React$1.createElement(
          CTableFoot,
          __assign$1({}, tableFootProps),
          React$1.createElement(CTableRow, null, footer.map(function(item, index) {
            return React$1.createElement(CTableDataCell, __assign$1({}, typeof item === "object" && item._props && __assign$1({}, item._props), { key: index }), typeof item === "object" ? item.label : item);
          }))
        )
      ),
      loading && React$1.createElement(CElementCover, { boundaries: [
        { sides: ["top"], query: "tbody" },
        { sides: ["bottom"], query: "tbody" }
      ] }, elementCover)
    ),
    (pagination || itemsPerPageSelect) && React$1.createElement(
      "div",
      { className: "row" },
      React$1.createElement("div", { className: "col" }, (pagination && numberOfPages > 1 || paginationProps && paginationProps.pages > 1) && React$1.createElement(CSmartPagination, __assign$1({ activePage: _activePage, onActivePageChange: function(page) {
        pagination && typeof pagination === "object" && pagination.external ? onActivePageChange && onActivePageChange(page) : setActivePage(page);
      }, pages: numberOfPages }, paginationProps))),
      React$1.createElement("div", { className: "col-auto ms-auto" }, itemsPerPageSelect && React$1.createElement(
        "div",
        { className: "row" },
        React$1.createElement(CFormLabel, { className: "col-auto col-form-label" }, itemsPerPageLabel),
        React$1.createElement(
          "div",
          { className: "col-auto" },
          React$1.createElement(CFormSelect, { defaultValue: _itemsPerPage, onChange: function(event) {
            return handleItemsPerPageChange(event);
          } }, itemsPerPageOptions && itemsPerPageOptions.map(function(number, index) {
            return React$1.createElement("option", { value: number, key: index }, number);
          }))
        )
      ))
    )
  );
});
CSmartTable.propTypes = {
  activePage: PropTypes$1.number,
  cleaner: PropTypes$1.bool,
  clickableRows: PropTypes$1.bool,
  columnFilter: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  columnFilterValue: PropTypes$1.object,
  columns: PropTypes$1.array,
  columnSorter: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  elementCover: PropTypes$1.node,
  footer: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.array]),
  header: PropTypes$1.bool,
  items: PropTypes$1.array,
  itemsNumber: PropTypes$1.number,
  itemsPerPage: PropTypes$1.number,
  itemsPerPageLabel: PropTypes$1.string,
  itemsPerPageOptions: PropTypes$1.array,
  itemsPerPageSelect: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  loading: PropTypes$1.bool,
  noItemsLabel: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  onActivePageChange: PropTypes$1.func,
  onColumnFilterChange: PropTypes$1.func,
  onFilteredItemsChange: PropTypes$1.func,
  onItemsPerPageChange: PropTypes$1.func,
  onRowClick: PropTypes$1.func,
  onSelectAll: PropTypes$1.func,
  onSelectedItemsChange: PropTypes$1.func,
  onSorterChange: PropTypes$1.func,
  onTableFilterChange: PropTypes$1.func,
  pagination: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  paginationProps: PropTypes$1.any,
  scopedColumns: PropTypes$1.object,
  selectable: PropTypes$1.bool,
  selectAll: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  selected: PropTypes$1.array,
  sorterValue: PropTypes$1.object,
  sortingIcon: PropTypes$1.node,
  sortingIconAscending: PropTypes$1.node,
  sortingIconDescending: PropTypes$1.node,
  tableBodyProps: PropTypes$1.object,
  tableFootProps: PropTypes$1.object,
  tableFilter: PropTypes$1.oneOfType([PropTypes$1.bool, PropTypes$1.object]),
  tableFilterLabel: PropTypes$1.string,
  tableFilterPlaceholder: PropTypes$1.string,
  tableFilterValue: PropTypes$1.string,
  tableHeadProps: PropTypes$1.object,
  tableProps: PropTypes$1.object
};
CSmartTable.displayName = "CSmartTable";
var isOnMobile = function(element) {
  return Boolean(getComputedStyle(element).getPropertyValue("--cui-is-mobile"));
};
var CSidebar = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var children = _a2.children, className = _a2.className, colorScheme = _a2.colorScheme, narrow = _a2.narrow, onHide = _a2.onHide, onShow = _a2.onShow, onVisibleChange = _a2.onVisibleChange, overlaid = _a2.overlaid, placement = _a2.placement, position = _a2.position, size = _a2.size, unfoldable = _a2.unfoldable, visible = _a2.visible, rest = __rest$1(_a2, ["children", "className", "colorScheme", "narrow", "onHide", "onShow", "onVisibleChange", "overlaid", "placement", "position", "size", "unfoldable", "visible"]);
  var sidebarRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, sidebarRef);
  var _c2 = reactExports.useState(false), mobile = _c2[0], setMobile = _c2[1];
  var _d2 = reactExports.useState(visible), _visible = _d2[0], setVisible = _d2[1];
  var _e2 = reactExports.useState(), inViewport = _e2[0], setInViewport = _e2[1];
  reactExports.useEffect(function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    setVisible(visible);
  }, [visible]);
  reactExports.useEffect(function() {
    inViewport !== void 0 && onVisibleChange && onVisibleChange(inViewport);
    !inViewport && onHide && onHide();
    inViewport && onShow && onShow();
  }, [inViewport]);
  reactExports.useEffect(function() {
    mobile && visible && setVisible(false);
  }, [mobile]);
  reactExports.useEffect(function() {
    var _a3, _b3;
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("keyup", handleKeyup);
    (_a3 = sidebarRef.current) === null || _a3 === void 0 ? void 0 : _a3.addEventListener("mouseup", handleOnClick);
    (_b3 = sidebarRef.current) === null || _b3 === void 0 ? void 0 : _b3.addEventListener("transitionend", function() {
      sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    });
    return function() {
      var _a4, _b4;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("keyup", handleKeyup);
      (_a4 = sidebarRef.current) === null || _a4 === void 0 ? void 0 : _a4.removeEventListener("mouseup", handleOnClick);
      (_b4 = sidebarRef.current) === null || _b4 === void 0 ? void 0 : _b4.removeEventListener("transitionend", function() {
        sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
      });
    };
  });
  var handleHide = function() {
    setVisible(false);
  };
  var handleResize = function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
  };
  var handleKeyup = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleClickOutside = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleOnClick = function(event) {
    var target = event.target;
    target && target.classList.contains("nav-link") && !target.classList.contains("nav-group-toggle") && mobile && handleHide();
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.createElement("div", __assign$1({ className: classNames$1("sidebar", (_b2 = {}, _b2["sidebar-".concat(colorScheme)] = colorScheme, _b2["sidebar-narrow"] = narrow, _b2["sidebar-overlaid"] = overlaid, _b2["sidebar-".concat(placement)] = placement, _b2["sidebar-".concat(position)] = position, _b2["sidebar-".concat(size)] = size, _b2["sidebar-narrow-unfoldable"] = unfoldable, _b2.show = _visible === true && mobile, _b2.hide = _visible === false && !mobile, _b2), className) }, rest, { ref: forkedRef }), children),
    typeof window !== "undefined" && mobile && reactDomExports.createPortal(React$1.createElement(CBackdrop, { className: "sidebar-backdrop", visible: _visible }), document.body)
  );
});
CSidebar.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  colorScheme: PropTypes$1.oneOf(["dark", "light"]),
  narrow: PropTypes$1.bool,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  onVisibleChange: PropTypes$1.func,
  overlaid: PropTypes$1.bool,
  placement: PropTypes$1.oneOf(["start", "end"]),
  position: PropTypes$1.oneOf(["fixed", "sticky"]),
  size: PropTypes$1.oneOf(["sm", "lg", "xl"]),
  unfoldable: PropTypes$1.bool,
  visible: PropTypes$1.bool
};
CSidebar.displayName = "CSidebar";
var CSidebarBrand = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("sidebar-brand", className), ref }, rest), children);
});
CSidebarBrand.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CSidebarBrand.displayName = "CSidebarBrand";
var CSidebarFooter = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("sidebar-footer", className), ref }, rest), children);
});
CSidebarFooter.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CSidebarFooter.displayName = "CSidebarFooter";
var CSidebarToggler = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("button", __assign$1({ className: classNames$1("sidebar-toggler", className), ref }, rest), children);
});
CSidebarToggler.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CSidebarToggler.displayName = "CSidebarToggler";
var CSidebarHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("sidebar-header", className), ref }, rest), children);
});
CSidebarHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CSidebarHeader.displayName = "CSidebarHeader";
var CTabContent = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("tab-content", className) }, rest, { ref }), children);
});
CTabContent.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CTabContent.displayName = "CTabContent";
var CTabPane = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, onHide = _a2.onHide, onShow = _a2.onShow, visible = _a2.visible, rest = __rest$1(_a2, ["children", "className", "onHide", "onShow", "visible"]);
  var tabPaneRef = reactExports.useRef();
  var forkedRef = useForkedRef(ref, tabPaneRef);
  return React$1.createElement(Transition$1, { in: visible, nodeRef: tabPaneRef, onEnter: onShow, onExit: onHide, timeout: 150 }, function(state) {
    return React$1.createElement("div", __assign$1({ className: classNames$1("tab-pane", "fade", {
      active: visible,
      show: state === "entered"
    }, className) }, rest, { ref: forkedRef }), children);
  });
});
CTabPane.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  visible: PropTypes$1.bool
};
CTabPane.displayName = "CTabPane";
var CToastContext = reactExports.createContext({});
var CToast = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.animation, animation = _b2 === void 0 ? true : _b2, _c2 = _a2.autohide, autohide = _c2 === void 0 ? true : _c2, className = _a2.className, color = _a2.color, _d2 = _a2.delay, delay = _d2 === void 0 ? 5e3 : _d2, index = _a2.index, key = _a2.key, _e2 = _a2.visible, visible = _e2 === void 0 ? false : _e2, onClose = _a2.onClose, onShow = _a2.onShow, rest = __rest$1(_a2, ["children", "animation", "autohide", "className", "color", "delay", "index", "key", "visible", "onClose", "onShow"]);
  var toastRef = reactExports.useRef();
  var forkedRef = useForkedRef(ref, toastRef);
  var _f2 = reactExports.useState(false), _visible = _f2[0], setVisible = _f2[1];
  var timeout2 = reactExports.useRef();
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  var contextValues = {
    visible: _visible,
    setVisible
  };
  reactExports.useEffect(function() {
    return function() {
      return clearTimeout(timeout2.current);
    };
  }, []);
  reactExports.useEffect(function() {
    _autohide();
  }, [_visible]);
  var _autohide = function() {
    if (autohide) {
      clearTimeout(timeout2.current);
      timeout2.current = window.setTimeout(function() {
        setVisible(false);
      }, delay);
    }
  };
  return React$1.createElement(Transition$1, { in: _visible, nodeRef: toastRef, onEnter: function() {
    return onShow && onShow(index !== null && index !== void 0 ? index : null);
  }, onExited: function() {
    return onClose && onClose(index !== null && index !== void 0 ? index : null);
  }, timeout: 250, unmountOnExit: true }, function(state) {
    var _a3;
    return React$1.createElement(
      CToastContext.Provider,
      { value: contextValues },
      React$1.createElement("div", __assign$1({ className: classNames$1("toast", (_a3 = {
        fade: animation
      }, _a3["bg-".concat(color)] = color, _a3["border-0"] = color, _a3["show showing"] = state === "entering" || state === "exiting", _a3.show = state === "entered", _a3), className), "aria-live": "assertive", "aria-atomic": "true", role: "alert", onMouseEnter: function() {
        return clearTimeout(timeout2.current);
      }, onMouseLeave: function() {
        return _autohide();
      } }, rest, { key, ref: forkedRef }), children)
    );
  });
});
CToast.propTypes = {
  animation: PropTypes$1.bool,
  autohide: PropTypes$1.bool,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  color: colorPropType,
  delay: PropTypes$1.number,
  index: PropTypes$1.number,
  key: PropTypes$1.number,
  onClose: PropTypes$1.func,
  onShow: PropTypes$1.func,
  visible: PropTypes$1.bool
};
CToast.displayName = "CToast";
var CToastBody = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, rest = __rest$1(_a2, ["children", "className"]);
  return React$1.createElement("div", __assign$1({ className: classNames$1("toast-body", className) }, rest, { ref }), children);
});
CToastBody.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string
};
CToastBody.displayName = "CToastBody";
var CToastClose = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, Component = _a2.component, rest = __rest$1(_a2, ["children", "component"]);
  var setVisible = reactExports.useContext(CToastContext).setVisible;
  return Component ? React$1.createElement(Component, __assign$1({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }), children) : React$1.createElement(CCloseButton, __assign$1({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }));
});
CToastClose.propTypes = __assign$1(__assign$1({}, CCloseButton.propTypes), { component: PropTypes$1.elementType });
CToastClose.displayName = "CToastClose";
var CToastHeader = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, closeButton = _a2.closeButton, rest = __rest$1(_a2, ["children", "className", "closeButton"]);
  return React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("toast-header", className) }, rest, { ref }),
    children,
    closeButton && React$1.createElement(CToastClose, null)
  );
});
CToastHeader.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  closeButton: PropTypes$1.bool
};
CToastHeader.displayName = "CToastHeader";
var CToaster = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, className = _a2.className, placement = _a2.placement, push = _a2.push, rest = __rest$1(_a2, ["children", "className", "placement", "push"]);
  var _b2 = reactExports.useState([]), toasts = _b2[0], setToasts = _b2[1];
  var index = reactExports.useRef(0);
  reactExports.useEffect(function() {
    index.current++;
    push && addToast(push);
  }, [push]);
  var addToast = function(push2) {
    setToasts(function(state) {
      return __spreadArray(__spreadArray([], state, true), [
        React$1.cloneElement(push2, {
          index: index.current,
          key: index.current,
          onClose: function(index2) {
            return setToasts(function(state2) {
              return state2.filter(function(i2) {
                return i2.props.index !== index2;
              });
            });
          }
        })
      ], false);
    });
  };
  return React$1.createElement(CConditionalPortal, { portal: typeof placement === "string" }, toasts.length > 0 || children ? React$1.createElement(
    "div",
    __assign$1({ className: classNames$1("toaster toast-container p-3", {
      "position-fixed": placement,
      "top-0": placement && placement.includes("top"),
      "top-50 translate-middle-y": placement && placement.includes("middle"),
      "bottom-0": placement && placement.includes("bottom"),
      "start-0": placement && placement.includes("start"),
      "start-50 translate-middle-x": placement && placement.includes("center"),
      "end-0": placement && placement.includes("end")
    }, className) }, rest, { ref }),
    children,
    toasts.map(function(toast) {
      return React$1.cloneElement(toast, { visible: true });
    })
  ) : null);
});
CToaster.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  placement: PropTypes$1.oneOfType([
    PropTypes$1.string,
    PropTypes$1.oneOf([
      "top-start",
      "top-center",
      "top-end",
      "middle-start",
      "middle-center",
      "middle-end",
      "bottom-start",
      "bottom-center",
      "bottom-end"
    ])
  ]),
  push: PropTypes$1.any
};
CToaster.displayName = "CToaster";
var CTooltip = reactExports.forwardRef(function(_a2, ref) {
  var children = _a2.children, _b2 = _a2.animation, animation = _b2 === void 0 ? true : _b2, className = _a2.className, container = _a2.container, content = _a2.content, _c2 = _a2.delay, delay = _c2 === void 0 ? 0 : _c2, _d2 = _a2.fallbackPlacements, fallbackPlacements = _d2 === void 0 ? ["top", "right", "bottom", "left"] : _d2, _e2 = _a2.offset, offset2 = _e2 === void 0 ? [0, 6] : _e2, onHide = _a2.onHide;
  _a2.onShow;
  var _f2 = _a2.placement, placement = _f2 === void 0 ? "top" : _f2, _g2 = _a2.trigger, trigger = _g2 === void 0 ? ["hover", "focus"] : _g2, visible = _a2.visible, rest = __rest$1(_a2, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "trigger", "visible"]);
  var tooltipRef = reactExports.useRef(null);
  var togglerRef = reactExports.useRef(null);
  var forkedRef = useForkedRef(ref, tooltipRef);
  var uID = reactExports.useRef("tooltip".concat(Math.floor(Math.random() * 1e6)));
  var _h2 = usePopper(), initPopper = _h2.initPopper, destroyPopper = _h2.destroyPopper;
  var _j2 = reactExports.useState(visible), _visible = _j2[0], setVisible = _j2[1];
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var popperConfig = {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: ".tooltip-arrow"
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements
        }
      },
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  reactExports.useEffect(function() {
    setVisible(visible);
  }, [visible]);
  var toggleVisible = function(visible2) {
    if (visible2) {
      setTimeout(function() {
        return setVisible(true);
      }, _delay.show);
      return;
    }
    setTimeout(function() {
      return setVisible(false);
    }, _delay.hide);
  };
  return React$1.createElement(
    React$1.Fragment,
    null,
    React$1.cloneElement(children, __assign$1(__assign$1(__assign$1(__assign$1(__assign$1({}, _visible && {
      "aria-describedby": uID.current
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return toggleVisible(!_visible);
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return toggleVisible(true);
      },
      onBlur: function() {
        return toggleVisible(false);
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return toggleVisible(true);
      },
      onMouseLeave: function() {
        return toggleVisible(false);
      }
    })),
    React$1.createElement(
      CConditionalPortal,
      { container, portal: true },
      React$1.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: tooltipRef, onEnter: function() {
        if (togglerRef.current && tooltipRef.current) {
          initPopper(togglerRef.current, tooltipRef.current, popperConfig);
        }
      }, onEntering: function() {
        if (togglerRef.current && tooltipRef.current) {
          tooltipRef.current.style.display = "initial";
        }
      }, onExit: onHide, onExited: function() {
        destroyPopper();
      }, timeout: {
        enter: 0,
        exit: tooltipRef.current ? getTransitionDurationFromElement(tooltipRef.current) + 50 : 200
      }, unmountOnExit: true }, function(state) {
        return React$1.createElement(
          "div",
          __assign$1({ className: classNames$1("tooltip", "bs-tooltip-auto", {
            fade: animation,
            show: state === "entered"
          }, className), id: uID.current, ref: forkedRef, role: "tooltip", style: {
            display: "none"
          } }, rest),
          React$1.createElement("div", { className: "tooltip-arrow" }),
          React$1.createElement("div", { className: "tooltip-inner" }, content)
        );
      })
    )
  );
});
CTooltip.propTypes = {
  animation: PropTypes$1.bool,
  children: PropTypes$1.node,
  container: PropTypes$1.any,
  content: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  delay: PropTypes$1.oneOfType([
    PropTypes$1.number,
    PropTypes$1.shape({
      show: PropTypes$1.number.isRequired,
      hide: PropTypes$1.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: PropTypes$1.any,
  onHide: PropTypes$1.func,
  onShow: PropTypes$1.func,
  placement: PropTypes$1.oneOf(["auto", "top", "right", "bottom", "left"]),
  trigger: triggerPropType,
  visible: PropTypes$1.bool
};
CTooltip.displayName = "CTooltip";
var CWidgetStatsA = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var action = _a2.action, chart = _a2.chart, className = _a2.className, color = _a2.color, title = _a2.title, value = _a2.value, rest = __rest$1(_a2, ["action", "chart", "className", "color", "title", "value"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className: classNames$1((_b2 = {}, _b2["bg-".concat(color)] = color, _b2["text-high-emphasis-inverse"] = color, _b2), className) }, rest, { ref }),
    React$1.createElement(
      CCardBody,
      { className: "pb-0 d-flex justify-content-between align-items-start" },
      React$1.createElement(
        "div",
        null,
        value && React$1.createElement("div", { className: "fs-4 fw-semibold" }, value),
        title && React$1.createElement("div", null, title)
      ),
      action
    ),
    chart
  );
});
CWidgetStatsA.propTypes = {
  action: PropTypes$1.node,
  chart: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  className: PropTypes$1.string,
  color: colorPropType,
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node, PropTypes$1.number])
};
CWidgetStatsA.displayName = "CWidgetStatsA";
var CWidgetStatsB = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, color = _a2.color, inverse = _a2.inverse, progress = _a2.progress, text = _a2.text, title = _a2.title, value = _a2.value, rest = __rest$1(_a2, ["className", "color", "inverse", "progress", "text", "title", "value"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className, color }, inverse && { textColor: "high-emphasis-inverse" }, rest, { ref }),
    React$1.createElement(
      CCardBody,
      null,
      value && React$1.createElement("div", { className: "fs-4 fw-semibold" }, value),
      title && React$1.createElement("div", null, title),
      React$1.createElement(CProgress, __assign$1({ className: "my-2", height: 4 }, inverse && { white: true }, progress)),
      text && React$1.createElement("small", { className: inverse ? "text-medium-emphasis-inverse" : "text-medium-emphasis" }, text)
    )
  );
});
CWidgetStatsB.propTypes = {
  className: PropTypes$1.string,
  color: colorPropType,
  inverse: PropTypes$1.bool,
  progress: PropTypes$1.object,
  text: PropTypes$1.string,
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node, PropTypes$1.number])
};
CWidgetStatsB.displayName = "CWidgetCWidgetStatsB";
var CWidgetStatsC = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, color = _a2.color, icon = _a2.icon, inverse = _a2.inverse, progress = _a2.progress, title = _a2.title, value = _a2.value, rest = __rest$1(_a2, ["className", "color", "icon", "inverse", "progress", "title", "value"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className, color }, inverse && { textColor: "high-emphasis-inverse" }, rest, { ref }),
    React$1.createElement(
      CCardBody,
      null,
      icon && React$1.createElement("div", { className: "text-medium-emphasis".concat(inverse ? "-inverse" : "", " text-end mb-4") }, icon),
      value && React$1.createElement("div", { className: "text-high-emphasis".concat(inverse ? "-inverse" : "", " fs-4 fw-semibold") }, value),
      title && React$1.createElement("div", { className: inverse ? "text-medium-emphasis-inverse" : "text-medium-emphasis" }, title),
      React$1.createElement(CProgress, __assign$1({ className: "mt-3 mb-0", height: 4 }, inverse && { white: true }, progress))
    )
  );
});
CWidgetStatsC.propTypes = {
  className: PropTypes$1.string,
  color: colorPropType,
  icon: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  inverse: PropTypes$1.bool,
  progress: PropTypes$1.object,
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node, PropTypes$1.number])
};
CWidgetStatsC.displayName = "CWidgetStatsCWidgetStatsC";
var CWidgetStatsD = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var className = _a2.className, chart = _a2.chart, color = _a2.color, icon = _a2.icon, values = _a2.values, rest = __rest$1(_a2, ["className", "chart", "color", "icon", "values"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className }, rest, { ref }),
    React$1.createElement(
      CCardHeader,
      { className: classNames$1("position-relative d-flex justify-content-center align-items-center", (_b2 = {}, _b2["bg-".concat(color)] = color, _b2)) },
      icon,
      chart
    ),
    React$1.createElement(CCardBody, { className: "row text-center" }, values && values.map(function(value, index) {
      return React$1.createElement(
        React$1.Fragment,
        { key: index },
        index % 2 !== 0 && React$1.createElement("div", { className: "vr" }),
        React$1.createElement(
          CCol,
          null,
          React$1.createElement("div", { className: "fs-5 fw-semibold" }, value.value),
          React$1.createElement("div", { className: "text-uppercase text-medium-emphasis small" }, value.title)
        )
      );
    }))
  );
});
CWidgetStatsD.propTypes = {
  chart: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  className: PropTypes$1.string,
  color: colorPropType,
  icon: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  values: PropTypes$1.arrayOf(PropTypes$1.any)
};
CWidgetStatsD.displayName = "CWidgetStatsD";
var CWidgetStatsE = reactExports.forwardRef(function(_a2, ref) {
  var chart = _a2.chart, className = _a2.className, title = _a2.title, value = _a2.value, rest = __rest$1(_a2, ["chart", "className", "title", "value"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className: classNames$1(className) }, rest, { ref }),
    React$1.createElement(
      CCardBody,
      { className: "text-center" },
      title && React$1.createElement("div", { className: "text-medium-emphasis small text-uppercase fw-semibold" }, title),
      value && React$1.createElement("div", { className: "fs-6 fw-semibold py-3" }, value),
      chart
    )
  );
});
CWidgetStatsE.propTypes = {
  children: PropTypes$1.node,
  chart: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  className: PropTypes$1.string,
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node, PropTypes$1.number])
};
CWidgetStatsE.displayName = "CWidgetStatsE";
var CWidgetStatsF = reactExports.forwardRef(function(_a2, ref) {
  var className = _a2.className, color = _a2.color, footer = _a2.footer, icon = _a2.icon, _b2 = _a2.padding, padding = _b2 === void 0 ? true : _b2, title = _a2.title, value = _a2.value, rest = __rest$1(_a2, ["className", "color", "footer", "icon", "padding", "title", "value"]);
  return React$1.createElement(
    CCard,
    __assign$1({ className }, rest, { ref }),
    React$1.createElement(
      CCardBody,
      { className: "d-flex align-items-center ".concat(padding === false && "p-0") },
      React$1.createElement("div", { className: "me-3 text-white bg-".concat(color, " ").concat(padding ? "p-3" : "p-4") }, icon),
      React$1.createElement(
        "div",
        null,
        React$1.createElement("div", { className: "fs-6 fw-semibold text-".concat(color) }, value),
        React$1.createElement("div", { className: "text-medium-emphasis text-uppercase fw-semibold small" }, title)
      )
    ),
    footer && React$1.createElement(CCardFooter, null, footer)
  );
});
CWidgetStatsF.propTypes = {
  className: PropTypes$1.string,
  color: colorPropType,
  footer: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  icon: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  padding: PropTypes$1.bool,
  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
  value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node, PropTypes$1.number])
};
CWidgetStatsF.displayName = "CWidgetStatsF";
var define_process_env_default = {};
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s3, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s3 = arguments[i2];
      for (var p in s3)
        if (Object.prototype.hasOwnProperty.call(s3, p))
          t2[p] = s3[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s3, e2) {
  var t2 = {};
  for (var p in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p) && e2.indexOf(p) < 0)
      t2[p] = s3[p];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s3); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p[i2]))
        t2[p[i2]] = s3[p[i2]];
    }
  return t2;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
{
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var propTypesExports = propTypes.exports;
var PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
var classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
var toCamelCase = function(str) {
  return str.replace(/([-_][a-z0-9])/gi, function($1) {
    return $1.toUpperCase();
  }).replace(/-/gi, "");
};
var CIcon = reactExports.forwardRef(function(_a2, ref) {
  var _b2;
  var className = _a2.className, content = _a2.content, customClassName = _a2.customClassName, height = _a2.height, icon = _a2.icon, name = _a2.name, size = _a2.size, title = _a2.title, use = _a2.use, width = _a2.width, rest = __rest(_a2, ["className", "content", "customClassName", "height", "icon", "name", "size", "title", "use", "width"]);
  var _c2 = reactExports.useState(0), change = _c2[0], setChange = _c2[1];
  var _icon = icon || content || name;
  if (content) {
    process && define_process_env_default && false;
  }
  if (name) {
    process && define_process_env_default && false;
  }
  reactExports.useMemo(function() {
    return setChange(change + 1);
  }, [_icon, JSON.stringify(_icon)]);
  var titleCode = title ? "<title>".concat(title, "</title>") : "";
  var code = reactExports.useMemo(function() {
    var iconName = _icon && typeof _icon === "string" && _icon.includes("-") ? toCamelCase(_icon) : _icon;
    if (Array.isArray(_icon)) {
      return _icon;
    }
    if (typeof _icon === "string" && React$1["icons"]) {
      return React$1["icons"][iconName];
    }
  }, [change]);
  var iconCode = reactExports.useMemo(function() {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [change]);
  var scale = function() {
    return Array.isArray(code) && code.length > 1 ? code[0] : "64 64";
  }();
  var viewBox = function() {
    return rest["viewBox"] || "0 0 ".concat(scale);
  }();
  var _className = customClassName ? classNames(customClassName) : classNames("icon", (_b2 = {}, _b2["icon-".concat(size)] = size, _b2["icon-custom-size"] = height || width, _b2), className);
  return React$1.createElement(
    React$1.Fragment,
    null,
    use ? React$1.createElement(
      "svg",
      __assign({ xmlns: "http://www.w3.org/2000/svg", className: _className }, height && { height }, width && { width }, { role: "img", "aria-hidden": "true" }, rest, { ref }),
      React$1.createElement("use", { href: use })
    ) : React$1.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox, className: _className }, height && { height }, width && { width }, { role: "img", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: titleCode + iconCode } }, rest, { ref })),
    title && React$1.createElement("span", { className: "visually-hidden" }, title)
  );
});
CIcon.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  customClassName: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  name: PropTypes.string,
  size: PropTypes.oneOf([
    "custom",
    "custom-size",
    "sm",
    "lg",
    "xl",
    "xxl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl"
  ]),
  title: PropTypes.any,
  use: PropTypes.any,
  width: PropTypes.number
};
CIcon.displayName = "CIcon";
export {
  CWidgetStatsD as $,
  CSidebarHeader as A,
  CNav as B,
  CContainer as C,
  CNavLink as D,
  CCloseButton as E,
  CTabContent as F,
  CTabPane as G,
  CListGroup as H,
  CListGroupItem as I,
  CAvatar as J,
  CFormSwitch as K,
  CProgress as L,
  CBreadcrumb as M,
  CBreadcrumbItem as N,
  CFooter as O,
  CDropdownHeader as P,
  CDropdownDivider as Q,
  CHeader as R,
  CHeaderToggler as S,
  CHeaderBrand as T,
  CHeaderNav as U,
  CFormCheck as V,
  CHeaderDivider as W,
  CNavTitle as X,
  CNavGroup as Y,
  CCallout as Z,
  CLink as _,
  CRow as a,
  CCardTitle as a0,
  CDatePicker as a1,
  CCardHeader as a2,
  CAccordion as a3,
  CAccordionItem as a4,
  CAccordionHeader as a5,
  CAccordionBody as a6,
  CCardImage as a7,
  CCardText as a8,
  CCardSubtitle as a9,
  CTimePicker as aA,
  CFormFeedback as aB,
  CAlert as aC,
  CAlertLink as aD,
  CAlertHeading as aE,
  CModal as aF,
  CModalHeader as aG,
  CModalTitle as aH,
  CModalBody as aI,
  CModalFooter as aJ,
  CToast as aK,
  CToastHeader as aL,
  CToastBody as aM,
  CToaster as aN,
  CToastClose as aO,
  CSmartTable as aP,
  CWidgetStatsE as aQ,
  CWidgetStatsF as aR,
  CWidgetStatsC as aS,
  CCardLink as aa,
  CCardFooter as ab,
  CCarousel as ac,
  CCarouselItem as ad,
  CCarouselCaption as ae,
  CCollapse as af,
  CPagination as ag,
  CPaginationItem as ah,
  CPlaceholder as ai,
  CPopover as aj,
  CProgressBar as ak,
  CTable as al,
  CTableHead as am,
  CTableRow as an,
  CTableHeaderCell as ao,
  CTableBody as ap,
  CTableDataCell as aq,
  CTableCaption as ar,
  CTooltip as as,
  CLoadingButton as at,
  CWidgetStatsB as au,
  CDateRangePicker as av,
  CFormFloating as aw,
  CFormSelect as ax,
  CMultiSelect as ay,
  CFormRange as az,
  CCol as b,
  CCardGroup as c,
  CCard as d,
  CCardBody as e,
  CForm as f,
  CInputGroup as g,
  CInputGroupText as h,
  CIcon as i,
  CFormInput as j,
  CButton as k,
  CFormLabel as l,
  CButtonToolbar as m,
  CButtonGroup as n,
  CDropdown as o,
  CDropdownToggle as p,
  CDropdownMenu as q,
  CDropdownItem as r,
  CBadge as s,
  CFormTextarea as t,
  CSidebar as u,
  CSidebarBrand as v,
  CSidebarNav as w,
  CNavItem as x,
  CSidebarToggler as y,
  CSpinner as z
};
