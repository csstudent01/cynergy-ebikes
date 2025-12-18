/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+(function (t) {
  "use strict";
  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend",
      };
    for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
    return !1;
  }
  (t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
      n = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0;
    });
    var o = function () {
      i || t(n).trigger(t.support.transition.end);
    };
    return setTimeout(o, e), this;
  }),
    t(function () {
      (t.support.transition = e()),
        t.support.transition &&
          (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          });
    });
})(jQuery)
/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.alert");
        o || i.data("bs.alert", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      n = function (e) {
        t(e).on("click", i, this.close);
      };
    (n.VERSION = "3.3.7"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (e) {
        function i() {
          r.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this),
          s = o.attr("data-target");
        s || ((s = o.attr("href")), (s = s && s.replace(/.*(?=#[^\s]*$)/, "")));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(),
          r.length || (r = o.closest(".alert")),
          r.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (r.removeClass("in"),
            t.support.transition && r.hasClass("fade")
              ? r
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var o = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = o), this;
      }),
      t(document).on("click.bs.alert.data-api", i, n.prototype.close);
  })(jQuery)
  /* ========================================================================
   * Bootstrap: button.js v3.3.7
   * http://getbootstrap.com/javascript/#buttons
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.button"),
          s = "object" == typeof e && e;
        o || n.data("bs.button", (o = new i(this, s))),
          "toggle" == e ? o.toggle() : e && o.setState(e);
      });
    }
    var i = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.3.7"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          n = this.$element,
          o = n.is("input") ? "val" : "html",
          s = n.data();
        (e += "Text"),
          null == s.resetText && n.data("resetText", n[o]()),
          setTimeout(
            t.proxy(function () {
              n[o](null == s[e] ? this.options[e] : s[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0),
                    n.addClass(i).attr(i, i).prop(i, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    n.removeClass(i).removeAttr(i).prop(i, !1));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var n = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = n), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var n = t(i.target).closest(".btn");
            e.call(n, "toggle"),
              t(i.target).is('input[type="radio"], input[type="checkbox"]') ||
                (i.preventDefault(),
                n.is("input,button")
                  ? n.trigger("focus")
                  : n
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery)
  /* ========================================================================
   * Bootstrap: carousel.js v3.3.7
   * http://getbootstrap.com/javascript/#carousel
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.carousel"),
          s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
          r = "string" == typeof e ? e : s.slide;
        o || n.data("bs.carousel", (o = new i(this, s))),
          "number" == typeof e
            ? o.to(e)
            : r
            ? o[r]()
            : s.interval && o.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
          n =
            ("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1);
        if (n && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
          s = (i + o) % this.$items.length;
        return this.$items.eq(s);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                e.to(t);
              })
            : i == t
            ? this.pause().cycle()
            : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (i.prototype.slide = function (e, n) {
        var o = this.$element.find(".item.active"),
          s = n || this.getItemForDirection(e, o),
          r = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (s.hasClass("active")) return (this.sliding = !1);
        var h = s[0],
          c = t.Event("slide.bs.carousel", { relatedTarget: h, direction: a });
        if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), r && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(s)]);
            d && d.addClass("active");
          }
          var p = t.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (s.addClass(e),
                s[0].offsetWidth,
                o.addClass(a),
                s.addClass(a),
                o
                  .one("bsTransitionEnd", function () {
                    s.removeClass([e, a].join(" ")).addClass("active"),
                      o.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (o.removeClass("active"),
                s.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(p)),
            r && this.cycle(),
            this
          );
        }
      });
    var n = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = n), this;
      });
    var o = function (i) {
      var n,
        o = t(this),
        s = t(
          o.attr("data-target") ||
            ((n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (s.hasClass("carousel")) {
        var r = t.extend({}, s.data(), o.data()),
          a = o.attr("data-slide-to");
        a && (r.interval = !1),
          e.call(s, r),
          a && s.data("bs.carousel").to(a),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", o)
      .on("click.bs.carousel.data-api", "[data-slide-to]", o),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery)
  /* ========================================================================
   * Bootstrap: collapse.js v3.3.7
   * http://getbootstrap.com/javascript/#collapse
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      var i,
        n =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(n);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.collapse"),
          s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
          o || i.data("bs.collapse", (o = new n(this, s))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (n.VERSION = "3.3.7"),
      (n.TRANSITION_DURATION = 350),
      (n.DEFAULTS = { toggle: !0 }),
      (n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            o =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              o &&
              o.length &&
              ((e = o.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var s = t.Event("show.bs.collapse");
            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
              o &&
                o.length &&
                (i.call(o, "hide"), e || o.data("bs.collapse", null));
              var r = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [r](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [r](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", r].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(n.TRANSITION_DURATION)
                [r](this.$element[0][l]);
            }
          }
        }
      }),
      (n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var o = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(o, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (n.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, n) {
              var o = t(n);
              this.addAriaAndCollapsedClass(e(o), o);
            }, this)
          )
          .end();
      }),
      (n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var o = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = n),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = o), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (n) {
          var o = t(this);
          o.attr("data-target") || n.preventDefault();
          var s = e(o),
            r = s.data("bs.collapse"),
            a = r ? "toggle" : o.data();
          i.call(s, a);
        }
      );
  })(jQuery)
  /* ========================================================================
   * Bootstrap: dropdown.js v3.3.7
   * http://getbootstrap.com/javascript/#dropdowns
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var n = i && t(i);
      return n && n.length ? n : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(o).remove(),
        t(s).each(function () {
          var n = t(this),
            o = e(n),
            s = { relatedTarget: this };
          o.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(o[0], i.target)) ||
              (o.trigger((i = t.Event("hide.bs.dropdown", s))),
              i.isDefaultPrevented() ||
                (n.attr("aria-expanded", "false"),
                o
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", s)))));
        }));
    }
    function n(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", (n = new r(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var o = ".dropdown-backdrop",
      s = '[data-toggle="dropdown"]',
      r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (r.VERSION = "3.3.7"),
      (r.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
          var s = e(o),
            r = s.hasClass("open");
          if ((i(), !r)) {
            "ontouchstart" in document.documentElement &&
              !s.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var a = { relatedTarget: this };
            if (
              (s.trigger((n = t.Event("show.bs.dropdown", a))),
              n.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (r.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var n = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !n.is(".disabled, :disabled"))
          ) {
            var o = e(n),
              r = o.hasClass("open");
            if ((!r && 27 != i.which) || (r && 27 == i.which))
              return (
                27 == i.which && o.find(s).trigger("focus"), n.trigger("click")
              );
            var a = " li:not(.disabled):visible a",
              l = o.find(".dropdown-menu" + a);
            if (l.length) {
              var h = l.index(i.target);
              38 == i.which && h > 0 && h--,
                40 == i.which && h < l.length - 1 && h++,
                ~h || (h = 0),
                l.eq(h).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = n),
      (t.fn.dropdown.Constructor = r),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", s, r.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", s, r.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          r.prototype.keydown
        );
  })(jQuery)
  /* ========================================================================
   * Bootstrap: modal.js v3.3.7
   * http://getbootstrap.com/javascript/#modals
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e, n) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.modal"),
          r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
        s || o.data("bs.modal", (s = new i(this, r))),
          "string" == typeof e ? s[e](n) : r.show && s.show(n);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var n = this,
          o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o),
          this.isShown ||
            o.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var o = t.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(n.$body),
                n.$element.show().scrollTop(0),
                n.adjustDialog(),
                o && n.$element[0].offsetWidth,
                n.$element.addClass("in"),
                n.enforceFocus();
              var s = t.Event("shown.bs.modal", { relatedTarget: e });
              o
                ? n.$dialog
                    .one("bsTransitionEnd", function () {
                      n.$element.trigger("focus").trigger(s);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n.$element.trigger("focus").trigger(s);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var n = this,
          o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var s = t.support.transition && o;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + o)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          s
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var r = function () {
            n.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : r();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var n = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = n), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var n = t(this),
            o = n.attr("href"),
            s = t(
              n.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            r = s.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(o) && o }, s.data(), n.data());
          n.is("a") && i.preventDefault(),
            s.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                s.one("hidden.bs.modal", function () {
                  n.is(":visible") && n.trigger("focus");
                });
            }),
            e.call(s, r, this);
        }
      );
  })(jQuery)
  /* ========================================================================
   * Bootstrap: tab.js v3.3.7
   * http://getbootstrap.com/javascript/#tabs
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.tab");
        o || n.data("bs.tab", (o = new i(this))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          n = e.data("target");
        if (
          (n ||
            ((n = e.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var o = i.find(".active:last a"),
            s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            r = t.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(s),
            e.trigger(r),
            !r.isDefaultPrevented() && !s.isDefaultPrevented())
          ) {
            var a = t(n);
            this.activate(e.closest("li"), i),
              this.activate(a, a.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, n, o) {
        function s() {
          r
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var r = n.find("> .active"),
          a =
            o &&
            t.support.transition &&
            ((r.length && r.hasClass("fade")) || !!n.find("> .fade").length);
        r.length && a
          ? r
              .one("bsTransitionEnd", s)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : s(),
          r.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = n), this;
      });
    var o = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery)
  /* ========================================================================
   * Bootstrap: affix.js v3.3.7
   * http://getbootstrap.com/javascript/#affix
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.affix"),
          s = "object" == typeof e && e;
        o || n.data("bs.affix", (o = new i(this, s))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e, n) {
      (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.3.7"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(),
          s = this.$element.offset(),
          r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed)
          return null != i
            ? !(o + this.unpin <= s.top) && "bottom"
            : !(o + r <= t - n) && "bottom";
        var a = null == this.affixed,
          l = a ? o : s.top,
          h = a ? r : e;
        return null != i && o <= i
          ? "top"
          : null != n && l + h >= t - n && "bottom";
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            n = this.options.offset,
            o = n.top,
            s = n.bottom,
            r = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof n && (s = o = n),
            "function" == typeof o && (o = n.top(this.$element)),
            "function" == typeof s && (s = n.bottom(this.$element));
          var a = this.getState(r, e, o, s);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              h = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(h), h.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: r - e - s });
        }
      });
    var n = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            n = i.data();
          (n.offset = n.offset || {}),
            null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            null != n.offsetTop && (n.offset.top = n.offsetTop),
            e.call(i, n);
        });
      });
  })(jQuery)
  /* ========================================================================
   * Bootstrap: scrollspy.js v3.3.7
   * http://getbootstrap.com/javascript/#scrollspy
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(i, n) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, n)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.scrollspy"),
          s = "object" == typeof i && i;
        o || n.data("bs.scrollspy", (o = new e(this, s))),
          "string" == typeof i && o[i]();
      });
    }
    (e.VERSION = "3.3.7"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          i = "offset",
          n = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (n = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
              return (
                (s && s.length && s.is(":visible") && [[s[i]().top + n, o]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          n = this.options.offset + i - this.$scrollElement.height(),
          o = this.offsets,
          s = this.targets,
          r = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= n))
          return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return (this.activeTarget = null), this.clear();
        for (t = o.length; t--; )
          r != s[t] &&
            e >= o[t] &&
            (void 0 === o[t + 1] || e < o[t + 1]) &&
            this.activate(s[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var n = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = n), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery)
  /* ========================================================================
   * Bootstrap: tooltip.js v3.3.7
   * http://getbootstrap.com/javascript/#tooltip
   * Inspired by the original jQuery.tipsy by Jason Frame
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.tooltip"),
          s = "object" == typeof e && e;
        (!o && /destroy|hide/.test(e)) ||
          (o || n.data("bs.tooltip", (o = new i(this, s))),
          "string" == typeof e && o[e]());
      });
    }
    var i = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (i.prototype.init = function (e, i, n) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var o = this.options.trigger.split(" "), s = o.length; s--; ) {
          var r = o[s];
          if ("click" == r)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != r) {
            var a = "hover" == r ? "mouseenter" : "focusin",
              l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, n) {
              i[t] != n && (e[t] = n);
            }),
          e
        );
      }),
      (i.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState
            ? void (i.hoverState = "in")
            : (clearTimeout(i.timeout),
              (i.hoverState = "in"),
              i.options.delay && i.options.delay.show
                ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show();
                  }, i.options.delay.show))
                : i.show())
        );
      }),
      (i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (i.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          !i.isInStateTrue())
        )
          return (
            clearTimeout(i.timeout),
            (i.hoverState = "out"),
            i.options.delay && i.options.delay.hide
              ? void (i.timeout = setTimeout(function () {
                  "out" == i.hoverState && i.hide();
                }, i.options.delay.hide))
              : i.hide()
          );
      }),
      (i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var n = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !n) return;
          var o = this,
            s = this.tip(),
            r = this.getUID(this.type);
          this.setContent(),
            s.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && s.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, s[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            h = l.test(a);
          h && (a = a.replace(l, "") || "top"),
            s
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? s.appendTo(this.options.container)
              : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var c = this.getPosition(),
            d = s[0].offsetWidth,
            p = s[0].offsetHeight;
          if (h) {
            var u = a,
              f = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && c.bottom + p > f.bottom
                ? "top"
                : "top" == a && c.top - p < f.top
                ? "bottom"
                : "right" == a && c.right + d > f.width
                ? "left"
                : "left" == a && c.left - d < f.left
                ? "right"
                : a),
              s.removeClass(u).addClass(a);
          }
          var g = this.getCalculatedOffset(a, c, d, p);
          this.applyPlacement(g, a);
          var v = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == t && o.leave(o);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? s
                .one("bsTransitionEnd", v)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : v();
        }
      }),
      (i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
          o = n[0].offsetWidth,
          s = n[0].offsetHeight,
          r = parseInt(n.css("margin-top"), 10),
          a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0),
          isNaN(a) && (a = 0),
          (e.top += r),
          (e.left += a),
          t.offset.setOffset(
            n[0],
            t.extend(
              {
                using: function (t) {
                  n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          n.addClass("in");
        var l = n[0].offsetWidth,
          h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? (e.left += c.left) : (e.top += c.top);
        var d = /top|bottom/.test(i),
          p = d ? 2 * c.left - o + l : 2 * c.top - s + h,
          u = d ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][u], d);
      }),
      (i.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (i.prototype.hide = function (e) {
        function n() {
          "in" != o.hoverState && s.detach(),
            o.$element &&
              o.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + o.type),
            e && e();
        }
        var o = this,
          s = t(this.$tip),
          r = t.Event("hide.bs." + this.type);
        if ((this.$element.trigger(r), !r.isDefaultPrevented()))
          return (
            s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n(),
            (this.hoverState = null),
            this
          );
      }),
      (i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          n = "BODY" == i.tagName,
          o = i.getBoundingClientRect();
        null == o.width &&
          (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var s = window.SVGElement && i instanceof window.SVGElement,
          r = n ? { top: 0, left: 0 } : s ? null : e.offset(),
          a = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          l = n
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, o, a, l, r);
      }),
      (i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
      }),
      (i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - s - r.scroll,
            l = e.top + s - r.scroll + n;
          a < r.top
            ? (o.top = r.top - a)
            : l > r.top + r.height && (o.top = r.top + r.height - l);
        } else {
          var h = e.left - s,
            c = e.left + s + i;
          h < r.left
            ? (o.left = r.left - h)
            : c > r.right && (o.left = r.left + r.width - c);
        }
        return o;
      }),
      (i.prototype.getTitle = function () {
        var t,
          e = this.$element,
          i = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
      }),
      (i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (i.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)),
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          e
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
            ? i.leave(i)
            : i.enter(i);
      }),
      (i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = n), this;
      });
  })(jQuery)
  /* ========================================================================
   * Bootstrap: popover.js v3.3.7
   * http://getbootstrap.com/javascript/#popovers
   * ========================================================================
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */,
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.popover"),
          s = "object" == typeof e && e;
        (!o && /destroy|hide/.test(e)) ||
          (o || n.data("bs.popover", (o = new i(this, s))),
          "string" == typeof e && o[e]());
      });
    }
    var i = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (i.VERSION = "3.3.7"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var n = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = n), this;
      });
  })(jQuery) /*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/,
  (function () {
    "use strict";
    function t(n) {
      if (!n) throw new Error("No options passed to Waypoint constructor");
      if (!n.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!n.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = t.Adapter.extend({}, t.defaults, n)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = n.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
          (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (i[this.key] = this),
        (e += 1);
    }
    var e = 0,
      i = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var o = 0, s = e.length; o < s; o++) e[o][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll("destroy");
      }),
      (t.disableAll = function () {
        t.invokeAll("disable");
      }),
      (t.enableAll = function () {
        t.invokeAll("enable");
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (t.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = o.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (n[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      n = {},
      o = window.Waypoint,
      s = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (e.didScroll && !o.isTouch) ||
            ((e.didScroll = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        o.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var n = e[i],
            o = n.newScroll > n.oldScroll,
            s = o ? n.forward : n.backward;
          for (var r in this.waypoints[i]) {
            var a = this.waypoints[i][r],
              l = n.oldScroll < a.triggerPoint,
              h = n.newScroll >= a.triggerPoint,
              c = l && h,
              d = !l && !h;
            (c || d) && (a.queueTrigger(s), (t[a.group.id] = a.group));
          }
        }
        for (var p in t) t[p].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? o.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? o.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; n < o; n++) t[n].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          n = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var s in t) {
          var r = t[s];
          for (var a in this.waypoints[s]) {
            var l,
              h,
              c,
              d,
              p,
              u = this.waypoints[s][a],
              f = u.options.offset,
              g = u.triggerPoint,
              v = 0,
              m = null == g;
            u.element !== u.element.window &&
              (v = u.adapter.offset()[r.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(u))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  u.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((r.contextDimension * f) / 100))),
              (l = r.contextScroll - r.contextOffset),
              (u.triggerPoint = v + l - f),
              (h = g < r.oldScroll),
              (c = u.triggerPoint >= r.oldScroll),
              (d = h && c),
              (p = !h && !c),
              !m && d
                ? (u.queueTrigger(r.backward), (n[u.group.id] = u.group))
                : !m && p
                ? (u.queueTrigger(r.forward), (n[u.group.id] = u.group))
                : m &&
                  r.oldScroll >= u.triggerPoint &&
                  (u.queueTrigger(r.forward), (n[u.group.id] = u.group));
          }
        }
        return (
          o.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in n) n[t].refresh();
      }),
      (e.findByElement = function (t) {
        return n[t.waypointContextKey];
      }),
      (window.onload = function () {
        s && s(), e.refreshAll();
      }),
      (o.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (o.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (n[this.axis][this.name] = this);
    }
    var n = { vertical: {}, horizontal: {} },
      o = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var n = this.triggerQueues[i],
            o = "up" === i || "left" === i;
          n.sort(o ? e : t);
          for (var s = 0, r = n.length; s < r; s += 1) {
            var a = n[s];
            (a.options.continuous || s === n.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints),
          n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t);
      }),
      (o.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
        t[n] = e[n];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          n = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((n = t.extend({}, arguments[1])), (n.handler = arguments[0])),
          this.each(function () {
            var o = t.extend({}, n, { element: this });
            "string" == typeof o.context &&
              (o.context = t(this).closest(o.context)[0]),
              i.push(new e(o));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })() /*!
Waypoints Sticky Element Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/,
  (function () {
    "use strict";
    function t(n) {
      (this.options = e.extend({}, i.defaults, t.defaults, n)),
        (this.element = this.options.element),
        (this.$element = e(this.element)),
        this.createWrapper(),
        this.createWaypoint();
    }
    var e = window.jQuery,
      i = window.Waypoint;
    (t.prototype.createWaypoint = function () {
      var t = this.options.handler;
      this.waypoint = new i(
        e.extend({}, this.options, {
          element: this.wrapper,
          handler: e.proxy(function (e) {
            var i = this.options.direction.indexOf(e) > -1,
              n = i ? this.$element.outerHeight(!0) : "";
            this.$wrapper.height(n),
              this.$element.toggleClass(this.options.stuckClass, i),
              t && t.call(this, e);
          }, this),
        })
      );
    }),
      (t.prototype.createWrapper = function () {
        this.options.wrapper && this.$element.wrap(this.options.wrapper),
          (this.$wrapper = this.$element.parent()),
          (this.wrapper = this.$wrapper[0]);
      }),
      (t.prototype.destroy = function () {
        this.$element.parent()[0] === this.wrapper &&
          (this.waypoint.destroy(),
          this.$element.removeClass(this.options.stuckClass),
          this.options.wrapper && this.$element.unwrap());
      }),
      (t.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: "stuck",
        direction: "down right",
      }),
      (i.Sticky = t);
  })() /*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/,
  (function () {
    "use strict";
    function t() {}
    function e(t) {
      (this.options = i.Adapter.extend({}, e.defaults, t)),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.waypoints = []),
        (this.element = this.options.element),
        this.createWaypoints();
    }
    var i = window.Waypoint;
    (e.prototype.createWaypoints = function () {
      for (
        var t = {
            vertical: [
              { down: "enter", up: "exited", offset: "100%" },
              { down: "entered", up: "exit", offset: "bottom-in-view" },
              { down: "exit", up: "entered", offset: 0 },
              {
                down: "exited",
                up: "enter",
                offset: function () {
                  return -this.adapter.outerHeight();
                },
              },
            ],
            horizontal: [
              { right: "enter", left: "exited", offset: "100%" },
              { right: "entered", left: "exit", offset: "right-in-view" },
              { right: "exit", left: "entered", offset: 0 },
              {
                right: "exited",
                left: "enter",
                offset: function () {
                  return -this.adapter.outerWidth();
                },
              },
            ],
          },
          e = 0,
          i = t[this.axis].length;
        e < i;
        e++
      ) {
        var n = t[this.axis][e];
        this.createWaypoint(n);
      }
    }),
      (e.prototype.createWaypoint = function (t) {
        var e = this;
        this.waypoints.push(
          new i({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: (function (t) {
              return function (i) {
                e.options[t[i]].call(e, i);
              };
            })(t),
            offset: t.offset,
            horizontal: this.options.horizontal,
          })
        );
      }),
      (e.prototype.destroy = function () {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
          this.waypoints[t].destroy();
        this.waypoints = [];
      }),
      (e.prototype.disable = function () {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
          this.waypoints[t].disable();
      }),
      (e.prototype.enable = function () {
        for (var t = 0, e = this.waypoints.length; t < e; t++)
          this.waypoints[t].enable();
      }),
      (e.defaults = {
        context: window,
        enabled: !0,
        enter: t,
        entered: t,
        exit: t,
        exited: t,
      }),
      (i.Inview = e);
  })(),
  function () {
    var t,
      e,
      i,
      n,
      o,
      s = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      r =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var i, n;
          for (i in e) (n = e[i]), null == t[i] && (t[i] = n);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        (t.prototype.createEvent = function (t, e, i, n) {
          var o;
          return (
            null == e && (e = !1),
            null == i && (i = !1),
            null == n && (n = null),
            null != document.createEvent
              ? ((o = document.createEvent("CustomEvent")),
                o.initCustomEvent(t, e, i, n))
              : null != document.createEventObject
              ? ((o = document.createEventObject()), (o.eventType = t))
              : (o.eventName = t),
            o
          );
        }),
        (t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent
            ? t.dispatchEvent(e)
            : e in (null != t)
            ? t[e]()
            : "on" + e in (null != t)
            ? t["on" + e]()
            : void 0;
        }),
        (t.prototype.addEvent = function (t, e, i) {
          return null != t.addEventListener
            ? t.addEventListener(e, i, !1)
            : null != t.attachEvent
            ? t.attachEvent("on" + e, i)
            : (t[e] = i);
        }),
        (t.prototype.removeEvent = function (t, e, i) {
          return null != t.removeEventListener
            ? t.removeEventListener(e, i, !1)
            : null != t.detachEvent
            ? t.detachEvent("on" + e, i)
            : delete t[e];
        }),
        (t.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        t
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, i, n, o, s;
              for (s = this.keys, e = n = 0, o = s.length; n < o; e = ++n)
                if (((i = s[e]), i === t)) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var i, n, o, s, r;
              for (r = this.keys, i = o = 0, s = r.length; o < s; i = ++o)
                if (((n = r[i]), n === t)) return void (this.values[i] = e);
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (t =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (t = (function () {
          function t() {
            "undefined" != typeof console && null !== console,
              "undefined" != typeof console && null !== console;
          }
          return (
            (t.notSupported = !0), (t.prototype.observe = function () {}), t
          );
        })())),
      (n =
        this.getComputedStyle ||
        function (t, e) {
          return (
            (this.getPropertyValue = function (e) {
              var i;
              return (
                "float" === e && (e = "styleFloat"),
                o.test(e) &&
                  e.replace(o, function (t, e) {
                    return e.toUpperCase();
                  }),
                (null != (i = t.currentStyle) ? i[e] : void 0) || null
              );
            }),
            this
          );
        }),
      (o = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function o(t) {
          null == t && (t = {}),
            (this.scrollCallback = s(this.scrollCallback, this)),
            (this.scrollHandler = s(this.scrollHandler, this)),
            (this.resetAnimation = s(this.resetAnimation, this)),
            (this.start = s(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            (this.animationNameCache = new i()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
          }),
          (o.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start
                  ),
              (this.finished = [])
            );
          }),
          (o.prototype.start = function () {
            var e, i, n, o;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, i, n, o;
                for (
                  n = this.element.querySelectorAll("." + this.config.boxClass),
                    o = [],
                    t = 0,
                    i = n.length;
                  t < i;
                  t++
                )
                  (e = n[t]), o.push(e);
                return o;
              }.call(this)),
              (this.all = function () {
                var t, i, n, o;
                for (n = this.boxes, o = [], t = 0, i = n.length; t < i; t++)
                  (e = n[t]), o.push(e);
                return o;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (o = this.boxes, i = 0, n = o.length; i < n; i++)
                  (e = o[i]), this.applyStyle(e, !0);
            if (
              (this.disabled() ||
                (this.util().addEvent(window, "scroll", this.scrollHandler),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live)
            )
              return new t(
                (function (t) {
                  return function (e) {
                    var i, n, o, s, r;
                    for (r = [], i = 0, n = e.length; i < n; i++)
                      (s = e[i]),
                        r.push(
                          function () {
                            var t, e, i, n;
                            for (
                              i = s.addedNodes || [],
                                n = [],
                                t = 0,
                                e = i.length;
                              t < e;
                              t++
                            )
                              (o = i[t]), n.push(this.doSync(o));
                            return n;
                          }.call(t)
                        );
                    return r;
                  };
                })(this)
              ).observe(document.body, { childList: !0, subtree: !0 });
          }),
          (o.prototype.stop = function () {
            if (
              ((this.stopped = !0),
              this.util().removeEvent(window, "scroll", this.scrollHandler),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval)
            )
              return clearInterval(this.interval);
          }),
          (o.prototype.sync = function (e) {
            if (t.notSupported) return this.doSync(this.element);
          }),
          (o.prototype.doSync = function (t) {
            var e, i, n, o, s;
            if ((null == t && (t = this.element), 1 === t.nodeType)) {
              for (
                t = t.parentNode || t,
                  o = t.querySelectorAll("." + this.config.boxClass),
                  s = [],
                  i = 0,
                  n = o.length;
                i < n;
                i++
              )
                (e = o[i]),
                  r.call(this.all, e) < 0
                    ? (this.boxes.push(e),
                      this.all.push(e),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(e, !0),
                      s.push((this.scrolled = !0)))
                    : s.push(void 0);
              return s;
            }
          }),
          (o.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(t),
              this.util().emitEvent(t, this.wowEvent),
              this.util().addEvent(t, "animationend", this.resetAnimation),
              this.util().addEvent(t, "oanimationend", this.resetAnimation),
              this.util().addEvent(
                t,
                "webkitAnimationEnd",
                this.resetAnimation
              ),
              this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
              t
            );
          }),
          (o.prototype.applyStyle = function (t, e) {
            var i, n, o;
            return (
              (n = t.getAttribute("data-wow-duration")),
              (i = t.getAttribute("data-wow-delay")),
              (o = t.getAttribute("data-wow-iteration")),
              this.animate(
                (function (s) {
                  return function () {
                    return s.customStyle(t, e, n, i, o);
                  };
                })(this)
              )
            );
          }),
          (o.prototype.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                };
          })()),
          (o.prototype.resetStyle = function () {
            var t, e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++)
              (t = n[e]), o.push((t.style.visibility = "visible"));
            return o;
          }),
          (o.prototype.resetAnimation = function (t) {
            var e;
            if (t.type.toLowerCase().indexOf("animationend") >= 0)
              return (
                (e = t.target || t.srcElement),
                (e.className = e.className
                  .replace(this.config.animateClass, "")
                  .trim())
              );
          }),
          (o.prototype.customStyle = function (t, e, i, n, o) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              i && this.vendorSet(t.style, { animationDuration: i }),
              n && this.vendorSet(t.style, { animationDelay: n }),
              o && this.vendorSet(t.style, { animationIterationCount: o }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (o.prototype.vendors = ["moz", "webkit"]),
          (o.prototype.vendorSet = function (t, e) {
            var i, n, o, s;
            n = [];
            for (i in e)
              (o = e[i]),
                (t["" + i] = o),
                n.push(
                  function () {
                    var e, n, r, a;
                    for (
                      r = this.vendors, a = [], e = 0, n = r.length;
                      e < n;
                      e++
                    )
                      (s = r[e]),
                        a.push(
                          (t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] =
                            o)
                        );
                    return a;
                  }.call(this)
                );
            return n;
          }),
          (o.prototype.vendorCSS = function (t, e) {
            var i, o, s, r, a, l;
            for (
              a = n(t),
                r = a.getPropertyCSSValue(e),
                s = this.vendors,
                i = 0,
                o = s.length;
              i < o;
              i++
            )
              (l = s[i]), (r = r || a.getPropertyCSSValue("-" + l + "-" + e));
            return r;
          }),
          (o.prototype.animationName = function (t) {
            var e;
            try {
              e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
              e = n(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
          }),
          (o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (o.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (o.prototype.scrollCallback = function () {
            var t;
            if (
              this.scrolled &&
              ((this.scrolled = !1),
              (this.boxes = function () {
                var e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++)
                  (t = n[e]),
                    t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o;
              }.call(this)),
              !this.boxes.length && !this.config.live)
            )
              return this.stop();
          }),
          (o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (o.prototype.isVisible = function (t) {
            var e, i, n, o, s;
            return (
              (i = t.getAttribute("data-wow-offset") || this.config.offset),
              (s = window.pageYOffset),
              (o =
                s +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                i),
              (n = this.offsetTop(t)),
              (e = n + t.clientHeight),
              n <= o && e >= s
            );
          }),
          (o.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (o.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          o
        );
      })());
  }.call(this),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    var e = -1,
      i = -1,
      n = function (t) {
        return parseFloat(t) || 0;
      },
      o = function (e) {
        var i = 1,
          o = t(e),
          s = null,
          r = [];
        return (
          o.each(function () {
            var e = t(this),
              o = e.offset().top - n(e.css("margin-top")),
              a = r.length > 0 ? r[r.length - 1] : null;
            null === a
              ? r.push(e)
              : Math.floor(Math.abs(s - o)) <= i
              ? (r[r.length - 1] = a.add(e))
              : r.push(e),
              (s = o);
          }),
          r
        );
      },
      s = function (e) {
        var i = { byRow: !0, property: "height", target: null, remove: !1 };
        return "object" == typeof e
          ? t.extend(i, e)
          : ("boolean" == typeof e
              ? (i.byRow = e)
              : "remove" === e && (i.remove = !0),
            i);
      },
      r = (t.fn.matchHeight = function (e) {
        var i = s(e);
        if (i.remove) {
          var n = this;
          return (
            this.css(i.property, ""),
            t.each(r._groups, function (t, e) {
              e.elements = e.elements.not(n);
            }),
            this
          );
        }
        return this.length <= 1 && !i.target
          ? this
          : (r._groups.push({ elements: this, options: i }),
            r._apply(this, i),
            this);
      });
    (r.version = "0.7.2"),
      (r._groups = []),
      (r._throttle = 80),
      (r._maintainScroll = !1),
      (r._beforeUpdate = null),
      (r._afterUpdate = null),
      (r._rows = o),
      (r._parse = n),
      (r._parseOptions = s),
      (r._apply = function (e, i) {
        var a = s(i),
          l = t(e),
          h = [l],
          c = t(window).scrollTop(),
          d = t("html").outerHeight(!0),
          p = l.parents().filter(":hidden");
        return (
          p.each(function () {
            var e = t(this);
            e.data("style-cache", e.attr("style"));
          }),
          p.css("display", "block"),
          a.byRow &&
            !a.target &&
            (l.each(function () {
              var e = t(this),
                i = e.css("display");
              "inline-block" !== i &&
                "flex" !== i &&
                "inline-flex" !== i &&
                (i = "block"),
                e.data("style-cache", e.attr("style")),
                e.css({
                  display: i,
                  "padding-top": "0",
                  "padding-bottom": "0",
                  "margin-top": "0",
                  "margin-bottom": "0",
                  "border-top-width": "0",
                  "border-bottom-width": "0",
                  height: "100px",
                  overflow: "hidden",
                });
            }),
            (h = o(l)),
            l.each(function () {
              var e = t(this);
              e.attr("style", e.data("style-cache") || "");
            })),
          t.each(h, function (e, i) {
            var o = t(i),
              s = 0;
            if (a.target) s = a.target.outerHeight(!1);
            else {
              if (a.byRow && o.length <= 1) return void o.css(a.property, "");
              o.each(function () {
                var e = t(this),
                  i = e.attr("style"),
                  n = e.css("display");
                "inline-block" !== n &&
                  "flex" !== n &&
                  "inline-flex" !== n &&
                  (n = "block");
                var o = { display: n };
                (o[a.property] = ""),
                  e.css(o),
                  e.outerHeight(!1) > s && (s = e.outerHeight(!1)),
                  i ? e.attr("style", i) : e.css("display", "");
              });
            }
            o.each(function () {
              var e = t(this),
                i = 0;
              (a.target && e.is(a.target)) ||
                ("border-box" !== e.css("box-sizing") &&
                  ((i +=
                    n(e.css("border-top-width")) +
                    n(e.css("border-bottom-width"))),
                  (i += n(e.css("padding-top")) + n(e.css("padding-bottom")))),
                e.css(a.property, s - i + "px"));
            });
          }),
          p.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null);
          }),
          r._maintainScroll &&
            t(window).scrollTop((c / d) * t("html").outerHeight(!0)),
          this
        );
      }),
      (r._applyDataApi = function () {
        var e = {};
        t("[data-match-height], [data-mh]").each(function () {
          var i = t(this),
            n = i.attr("data-mh") || i.attr("data-match-height");
          n in e ? (e[n] = e[n].add(i)) : (e[n] = i);
        }),
          t.each(e, function () {
            this.matchHeight(!0);
          });
      });
    var a = function (e) {
      r._beforeUpdate && r._beforeUpdate(e, r._groups),
        t.each(r._groups, function () {
          r._apply(this.elements, this.options);
        }),
        r._afterUpdate && r._afterUpdate(e, r._groups);
    };
    (r._update = function (n, o) {
      if (o && "resize" === o.type) {
        var s = t(window).width();
        if (s === e) return;
        e = s;
      }
      n
        ? i === -1 &&
          (i = setTimeout(function () {
            a(o), (i = -1);
          }, r._throttle))
        : a(o);
    }),
      t(r._applyDataApi);
    var l = t.fn.on ? "on" : "bind";
    t(window)[l]("load", function (t) {
      r._update(!1, t);
    }),
      t(window)[l]("resize orientationchange", function (t) {
        r._update(!0, t);
      });
  }),
  (function (t) {
    var e,
      i = t(window),
      n = (t(document), t("body")),
      o = (t("#HeaderMiniCart"), t("#SiteNavigator")),
      s = !1,
      r = !1,
      a = !1,
      l = 768,
      h = !1;
    window._invalidAttributeRequest;
    t.extend(!0, t.magnificPopup.defaults, {
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close"></button>',
      showCloseBtn: !0,
      removalDelay: 200,
      fixedContentPos: !0,
      closeBtnInside: !0,
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      gallery: {
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      image: { tError: '<a href="%url%">The image</a> could not be loaded.' },
      ajax: { tError: '<a href="%url%">The content</a> could not be loaded.' },
      callbacks: {
        change: function () {
          this.isOpen && this.wrap.addClass("mfp-open");
        },
        beforeOpen: function () {
          this.st.mainClass = "mfp-zoom-in";
        },
      },
    });
    var c = function (t) {
        return parseFloat(
          t
            .text()
            .trim()
            .replace(/[,\$]+/g, "")
        );
      },
      d = function (t) {
        return (
          "$" +
          t
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        );
      },
      p = function () {
        var e = 0,
          i = 0;
        t(".seCartItem").each(function () {
          var n = c(t(this).find(".seTotalPrice"));
          (e += n), i++;
        }),
          t(".seCartTotalItems").text(i),
          t(".seCartSubtotalAmount").text(d(e));
      },
      u = function () {
        r ||
          t("#FacetContainer")
            .find(".collapse")
            .filter(function () {
              return "collapsed" === t(this).attr("data-filterToggle");
            })
            .each(function () {
              0 !== t(this).find('[data-isselected="YES"]').length &&
                t(this).collapse("show");
            });
      },
      f = function () {
        return "ontouchstart" in window || navigator.maxTouchPoints;
      },
      g = function () {
        t(".royalSlider").each(function () {
          var e = t(this),
            n = e.siblings(".seslideshowWidth");
          if (e.length) {
            var o = 1e3,
              s = 1 === parseInt(n.data("loop")),
              r = parseInt(n.data("delay"), 10) * o,
              a = "scroll" === n.data("transition-type") ? "move" : "fade",
              l = "none" !== n.data("arrows"),
              h = "transparent" === n.data("arrows"),
              c =
                "thumbnails" === n.data("slide-indicators")
                  ? "thumbnails"
                  : "bullets",
              d = n.data("slideshow-height"),
              p = n.data("slideshow-width"),
              u = (i.width(), t(this).siblings(".seselideshowWidth").width()),
              f = u,
              g = 0,
              v = 0,
              m = 0,
              y = 0;
            e.find(".rsContent .rsImg").each(function () {
              var e = f / t(this).width();
              m = e;
              var i = t(this).height() * e;
              i > g && (g = i);
              var n = t(this).width() * e;
              n > v && (v = n);
            }),
              (y = g / v);
            var w,
              b = {
                imageWidth: p,
                autoScaleSlider: !0,
                autoHeight: !0,
                autoScaleSliderHeight: g,
                autoScaleSliderWidth: v,
                arrowsNav: l,
                arrowsNavAutoHide: h,
                autoPlay: { enabled: !0, delay: r },
                transitionType: a,
                controlNavigation: c,
                slidesSpacing: 0,
                loop: s,
                sliderDrag: !1,
                navigateByClick: !1,
                transitionSpeed: 1 * o,
                thumbs: { fitInViewport: !1 },
                imageScalePadding: 0,
                imageAlignCenter: !0,
                keyboardNavEnabled: !0,
                addActiveClass: !0,
              },
              C = {
                autoScaleSlider: !0,
                autoHeight: !1,
                imageScaleMode: "fit",
                autoScaleSliderWidth: p,
                autoScaleSliderHeight: d,
              };
            (w = t.extend(b, C)),
              e.royalSlider(w).animate({ opacity: "1" }, 500);
          }
        });
      },
      v = function () {
        var e = !1;
        t(".mega-dropdown").on("mouseenter", function () {
          e = !0;
          var i = t(".megamenu").height(),
            n = t(".megamenu").offset(),
            o = t(".sePageLayout").height();
          i + n.top > o && t(".sePageLayout").addClass("sePageLayoutOverflow");
        }),
          t(".mega-dropdown").on("mouseleave", function () {
            (e = !1),
              setTimeout(function () {
                e === !1 &&
                  t(".sePageLayoutOverflow").removeClass(
                    "sePageLayoutOverflow"
                  );
              }, 1e3);
          });
      },
      m = function () {
        o.find(".navbar-nav")
          .find("> .dropdown:not(.mega-dropdown)")
          .each(function () {
            var e = t(this),
              n = t(this).find(">.dropdown-menu"),
              o = n.find(".dropdown-menu"),
              s = 0;
            o.length &&
              o.each(function () {
                t(this).width() > s && (s = t(this).width());
              });
            var r = e.offset().left + e.find("> .dropdown-menu").width() + s;
            r > i.width() && i.width() - e.offset().left < i.width() / 2
              ? e.hasClass("dropdown-left") || e.addClass("dropdown-left")
              : e.hasClass("dropdown-left") && e.removeClass("dropdown-left");
          });
      },
      y = function () {
        t("#wsnavtoggle").on("click", function () {
          t(".wsmenucontainer").toggleClass("wsoffcanvasopener"),
            t(".wsmenucontainer").hasClass("wsoffcanvasopener")
              ? t("#wsnavtoggle").attr("title", "Menu close")
              : t("#wsnavtoggle").removeAttr("title");
        }),
          t("#off-canvas-toggle").on("click", function () {
            t("#wsnavtoggle").trigger("click");
          }),
          t(".overlapblackbg").on("click", function () {
            t(".wsmenucontainer").removeClass("wsoffcanvasopener");
          });
      },
      w = function () {
        o.find(".dropdown .dropdown-toggle").on("click", function (e) {
          var i = t(this);
          if (h) {
            e.preventDefault();
            var n, o;
            (n = i.closest(".is-drilldown-submenu-parent")),
              (o = i.next(".is-drilldown-submenu")),
              n
                .siblings(".is-active")
                .removeClass("is-active")
                .find(".is-active")
                .removeClass("is-active"),
              n.hasClass("is-active")
                ? (o
                    .addClass("is-closing")
                    .removeClass("is-active")
                    .removeClass("is-closing"),
                  n.removeClass("is-active"))
                : (n.addClass("is-active"), o.addClass("is-active"));
          }
        }),
          o
            .find(".dropdown")
            .on("show.bs.dropdown,hide.bs.dropdown", function (t) {
              if (h) return !1;
            }),
          o
            .find(".dropdown .dropdown-submenu .dropdown-toggle")
            .on("click", function (e) {
              if (!h)
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  t(this).parent().siblings().removeClass("open"),
                  t(this).parent().toggleClass("open"),
                  !1
                );
            }),
          o.find(".mobile-megamenu-title").on("click", function (e) {
            var i = t(this);
            if (h) {
              e.preventDefault();
              var n, o, s;
              (s = i.parents(".seMegaMenuGroup")),
                (n = s.find(".is-drilldown-submenu-parent").first()),
                (o = s.find(".is-drilldown-submenu")),
                s.siblings().find(".is-active").removeClass("is-active"),
                n.hasClass("is-active")
                  ? (o
                      .addClass("is-closing")
                      .removeClass("is-active")
                      .removeClass("is-closing"),
                    n.removeClass("is-active"))
                  : (n.addClass("is-active"), o.addClass("is-active"));
            }
          });
      },
      b = function () {
        y(),
          o.find(".navbar-nav").addClass("is-drilldown"),
          o
            .find(".dropdown-menu, .megamenu .link-list")
            .addClass("is-drilldown-submenu")
            .parents("li")
            .addClass("is-drilldown-submenu-parent"),
          w();
      },
      C = function () {
        r === window.innerWidth < l;
      },
      T = function () {
        (s = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function () {
            return (
              s.Android() ||
              s.BlackBerry() ||
              s.iOS() ||
              s.Opera() ||
              s.Windows()
            );
          },
        }),
          C(),
          (r = !!window.matchMedia("(max-width: 767px)").matches),
          (h = !!window.matchMedia("(max-width: 991px)").matches),
          (e = i.width()),
          (a = f()),
          !r &&
            t(".overlapblackbg").is(":visible") &&
            t(".overlapblackbg").hide(),
          m();
      },
      x = function () {
        n.height() < i.height() && n.addClass("stick-footer");
      },
      $ = function () {
        t(".seNavbarNav > li > a").css("height", "auto");
        var e = (t(".seNavbarNav > li > a").length, []);
        t(".seNavbarNav > li > a").each(function () {
          var i = t(this).outerHeight();
          e.push(i);
        });
        var i = Math.max.apply(null, e);
        t(".seNavbarNav > li > a").outerHeight(i);
      },
      S = function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
          $();
          var e = t(".seHeaderBottom").outerHeight(),
            i = t(".input-group-lg").outerHeight(),
            n = t(".seNavbarNav > li > a:first").outerHeight();
          if (e > i + n) {
            var o = e - i;
            t(".seNavbarNav > li > a").outerHeight(o);
          }
        } else t(".seNavbarNav > li > a").css("height", "auto");
      },
      k = function () {
        t(".seHeaderTop").height("auto");
        var e = t(".seHeaderTop").height(),
          i = t(".seHeaderTop .seStoreHours").height();
        e - i < 10
          ? ((e = i + 10), t(".seHeaderTop").height(e))
          : ((e = 35), t(".seHeaderTop").css("height", "" + e + "px"));
      },
      E = {
        common: {
          init: function () {
            S(),
              k(),
              T(),
              b(),
              u(),
              v(),
              t(function () {
                t("#PageLayout .sePageLayoutWrapper").append(
                  '<a href="#" id="return-to-top" title="Back to Top" class="seBackTop hidden-top"><i class="seIcon seIconChevronUp"><span class="sr-only">Back to Top:</span></i></a>'
                );
                var e = t("#return-to-top");
                i.on("scroll", function () {
                  t(this).scrollTop() >= 500
                    ? e.removeClass("hidden-top")
                    : e.addClass("hidden-top");
                }),
                  e.on("click", function (e) {
                    e.preventDefault(),
                      t("body,html").animate({ scrollTop: 0 }, 500);
                  });
              });
            var e = new WOW({
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !1,
              live: !0,
            });
            e.init(),
              t(".seClickCall").on("click", function () {
                if (!s.any()) return !1;
              });
          },
          finalize: function () {
            i.on("resize", function () {
              this.resizeTO && clearTimeout(this.resizeTO),
                (this.resizeTO = setTimeout(function () {
                  t(this).trigger("resizeEnd");
                }, 200));
            }),
              i.on("resizeEnd", function () {
                T(), k(), S();
              }),
              i.on("load", function () {
                x(),
                  t(".sePageMainWrapper form").each(function () {
                    t(this).find(".seIconRequired").length &&
                      t(this).after(
                        '<div class="seRequiredMessage"><p><i class="seIconRequired"></i> Indicates required information</p></div>'
                      );
                  });
              });
          },
        },
        seHomePage: { init: function () {}, finalize: function () {} },
        seItemList: {
          init: function () {
            t(".sePerPageSelected").on("click", function (t) {
              return !1;
            }),
              t(".seShowMore,.seShowLess").on("click", function () {
                t(this)
                  .parents(".seFacetPanel")
                  .toggleClass("seShowMoreExpanded");
              }),
              t(".seCloseText").on("click", function () {
                t(this).parents(".seItemListMenu").collapse("hide");
              }),
              r && t(".seFacetMenu").removeClass("in"),
              t(".seItemListMenu").collapse({ toggle: !1 }),
              t(".seItemListMenu").removeClass("collapse-loading"),
              t(".seProduct").matchHeight(),
              t(".seCleanTitle").matchHeight(),
              t(".seProductPrice").matchHeight();
          },
          finalize: function () {},
        },
        seShoppingCart: {
          init: function () {
            t(".seQuantityContainer .seCartQuantity").on("change", function () {
              var e = t(this).parents(".seCartItem"),
                i = t(this).val();
              e
                .find(".seTotalPrice")
                .text(d(c(e.find(".seItemTotalPrice")) * i)),
                p();
            });
          },
        },
        seItemDetails: {
          init: function () {
            var i = t(".seProductTabWrapper"),
              n = t('#ProductFeaturesAccordion a[data-toggle="collapse"]');
            if (!r) {
              new Waypoint.Sticky({
                element: i[0],
                offset: function () {
                  return i.height() * -1;
                },
              });
              if (t("#PageFooter").length) {
                new Waypoint({
                  element: document.getElementById("PageFooter"),
                  handler: function (e) {
                    t(".seProductTabWrapper").toggleClass("stuck-bottom");
                  },
                  offset: function () {
                    return (
                      i.height() -
                      t("#PageFooter").css("margin-top").replace("px", "")
                    );
                  },
                });
              }
            }
            if (
              (t("body").scrollspy({
                target: ".seProductDataContainer",
                offset: i.height() + 50,
              }),
              t(
                ".seReadReviewsLink,.seProductDescriptionReadMore,.prSnippetLink"
              ).on("click", function (n) {
                n.preventDefault();
                var o = t(this).attr("href");
                e < 768 &&
                  t('.seProductTabWrapper a[href="' + o + '"]').tab("show");
                var s = t(this);
                t("html, body")
                  .stop()
                  .animate(
                    { scrollTop: t(s.attr("href")).offset().top - i.height() },
                    500
                  );
              }),
              i.find("a").on("click", function (e) {
                if ((e.preventDefault(), r)) t(this).tab("show");
                else {
                  var n = t(this);
                  t("html, body")
                    .stop()
                    .animate(
                      {
                        scrollTop: t(n.attr("href")).offset().top - i.height(),
                      },
                      500
                    );
                }
              }),
              n.on("click", function (e) {
                var i =
                  t(this).closest("#ProductFeaturesAccordion").offset().top -
                  t(this).height();
                t(window).scrollTop() > i &&
                  t("html, body").animate({ scrollTop: i });
              }),
              r)
            ) {
              var o = !1;
              t("#RecentlyViewedTab").on("shown.bs.tab", function (e) {
                if (!o) {
                  var i = t(e.target).attr("href"),
                    n = t(i);
                  n.find(".seRecentlyViewedItemsCarousel ").slick("resize"),
                    (o = !0);
                }
              });
            }
          },
          finalize: function () {},
        },
        seStorePage: {
          init: function () {
            t("#singleStoreMap").height(t(".seStoreInformation").outerHeight());
          },
        },
        seLocationPage: { init: function () {}, finalize: function () {} },
        seImage: {},
        sePOSSpecials: {},
        seFormPage: {},
        seWishlist: {
          init: function () {
            t(".seWishListFooterWrapper .seReturnButton").on(
              "click",
              function (t) {
                return t.preventDefault(), window.history.go(-1), !1;
              }
            );
          },
        },
        sePage: {
          init: function () {},
          finalize: function () {
            t(".royalSlider").length && g();
          },
        },
      },
      A = {
        fire: function (t, e, i) {
          var n,
            o = E;
          (e = void 0 === e ? "init" : e),
            (n = "" !== t),
            (n = n && o[t]),
            (n = n && "function" == typeof o[t][e]),
            n && o[t][e](i);
        },
        loadEvents: function () {
          A.fire("common"),
            t.each(
              document.body.className.replace(/-/g, "_").split(/\s+/),
              function (t, e) {
                A.fire(e), A.fire(e, "finalize");
              }
            ),
            A.fire("common", "finalize");
        },
      };
    t(document).ready(A.loadEvents);
  })(jQuery);
