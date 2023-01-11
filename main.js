(() => {
    "use strict";

    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var t, o, n, a, i, s = function() {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.touchStaX, this.toucnendX, this.touchSta, this.touchEnd, null === (e = e || document.body).getAttribute("x-swipe") && (e.setAttribute("x-swipe", ""), e.addEventListener("touchstart", this.setTouchSta.bind(this)), e.addEventListener("mousedown", this.setTouchSta.bind(this)), e.addEventListener("touchend", this.setTouchEnd.bind(this)), e.addEventListener("mouseup", this.setTouchEnd.bind(this)))
        }
        var o, n, a;
        return o = t, (n = [{
            key: "handleGesture",
            value: function() {
                if (!(Math.abs(this.touchEndX - this.touchStaX) < 80 || this.touchEnd - this.touchSta > 500)) {
                    var e = this.touchEndX < this.touchStaX ? "left" : "right",
                        t = new CustomEvent("x-swipe", {
                            bubbles: !0,
                            detail: e
                        });
                    document.body.dispatchEvent(t)
                }
            }
        }, {
            key: "setTouchSta",
            value: function(e) {
                this.touchStaX = "touchstart" === e.type ? e.changedTouches[0].screenX : e.screenX, this.touchSta = (new Date).getTime()
            }
        }, {
            key: "setTouchEnd",
            value: function(e) {
                this.touchEndX = "touchend" === e.type ? e.changedTouches[0].screenX : e.screenX, this.touchEnd = (new Date).getTime(), this.handleGesture()
            }
        }]) && e(o.prototype, n), a && e(o, a), Object.defineProperty(o, "prototype", {
            writable: !1
        }), t
    }();
    window.debounce = function(e, t, o) {
        var n;
        return function() {
            var a = this,
                i = arguments,
                s = function() {
                    n = null, o || e.apply(a, i)
                },
                r = o && !n;
            clearTimeout(n), n = setTimeout(s, t), r && e.apply(a, i)
        }
    }, window.NumberFormat = function(e) {
        return void 0 !== window.Intl ? Intl.NumberFormat().format(e) : (e + "").replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    }, window.attempt = function(e) {
        try {
            e()
        } catch (e) {
            console.warn("Block attempt failed:", e)
        }
    }, window.hasWebp = ((t = new Image).onload = function() {
        var e = t.width > 0 && t.height > 0;
        window.hasWebp = e, $("body").addClass(e ? "has-webp" : "no-webp")
    }, t.onerror = function() {
        $("body").addClass("no-webp")
    }, t.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", !1), window.hasStorage = function() {
        try {
            return "localStorage" in window && null != window.localStorage
        } catch (e) {
            return !1
        }
    }(), window.hookScroll = (o = {}, n = $(window), a = $("body"), i = null, $((function() {
        n.on("scroll", (function() {
            null === i && (i = window.requestAnimationFrame((function() {
                var e = n.scrollTop();
                for (var t in o) o[t] && e < +t && (a.removeClass("_s" + t), o[t] = !1), !o[t] && e >= +t && (a.addClass("_s" + t), o[t] = !0);
                i = null
            })))
        })).trigger("scroll")
    })), function(e) {
        o[e] = !1, n.trigger("scroll")
    }), window.loadScript = function(e, t, o) {
        var n = "undefined" != typeof localStorage;
        return new Promise((function(a, i) {
            var s = function(e) {
                    e = e.slice(1, -1);
                    var i = JSON.parse(e);
                    n && (localStorage.setItem(t, e), localStorage.setItem(t + ":hash", o)), a(i), console.log("Remote load:", t + "@" + o)
                },
                r = function() {
                    clearScript(t), i(Error("Load error:", t))
                };
            if (!n) return $.get(e, s).fail(r);
            var l = localStorage.getItem(t + ":hash");
            null !== l && l !== o && clearScript(t);
            var c = localStorage.getItem(t);
            if (null !== c) return a(JSON.parse(c));
            $.get(e, s).fail(r)
        }))
    }, window.clearScript = function(e) {
        "undefined" != typeof localStorage && (localStorage.removeItem(e), localStorage.removeItem(e + ":hash"))
    }, window.Tooltip = function() {
        if (!("ontouchstart" in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
            var e = [
                    [1, 1, 1, 1, 1, .714, 1, .51, .714, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1.4, 1, .714, .714, 1, 1.4, .714, .51, 1.4, 1, 1, 1, 1, .714, 1.4, 1, 1.4, .714],
                    [1, 1.4, 1, 1, 1, .714, 1.4, 1, .714, 1, 1, 1.4, .714, 1, 1, 1, 1, 1],
                    [1, 1, 1, .714, .714, .714, 1, .714, .51, 1, 1, 1.4, 1, 1, 1, 1, 1, 1.4],
                    [1, 1, .51, 1.4, 1, 1.4, .714, 1, 1.4, 1.4, 1, .714, 1.4, 1, 1, 1, 1, 1],
                    [1, .714, 1.4, 1, .714, 1, 1.4, 1, .714, 1.4, 1, 1, 1, 1, 1.4, 1, 1, 1],
                    [1, .714, .714, .714, 1, 1, 1, .714, .714, .714, 1, 1.4, 1, 1.4, 1, 1, 1.4, .714],
                    [.51, 1, 1, 1, 1, 1, 1, 1.4, 1, 1, 1, 1, 1, 1.4, 1, 1, .714, 1],
                    [1, 1, 1, 1, 1, 1.4, 1, 1, .714, .714, .714, 1, .714, 1, 1.4, 1, 1, 1.4],
                    [1, 1, 1, 1, 1, .714, 1.4, 1, 1.4, .714, .714, 1.4, 1, 1, 1.4, .714, 1, 1],
                    [1, 1, 1, 1, 1.4, 1.4, 1, 1, 1, 1.4, .714, .714, 1, 1, 1, .714, 1, 1],
                    [1, 1, .714, .714, 1.4, 1.4, .714, 1, .714, .714, 1.4, .714, 1, 1, 1, .714, 1, 1],
                    [1, 1, 1.4, 1, .51, 1, 1, 1, 1, 1, 1.4, .714, .714, 1, 1, .714, 1, 1],
                    [1, 1.4, 1, 1.4, 1, 1, 1, 1, .714, 1, 1, 1, 1, .714, 1, 1, .51, 1],
                    [1, 1, 1.4, 1, 1.4, 1, 1, 1, .714, .714, .714, 1.4, 1, 1, .714, 1.4, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, .714, 1, 1, 1, 1, 1, 1, 1.4, 1, .51],
                    [1, .714, 1, 1, 1, 1, 1, 1.4, 1, 1, 1, 1, 1, 1.4, 1, 1, .714, .714],
                    [1, 1.4, 1, .714, 1, 1, 1, 1, .714, .714, 1, 1, 1, 1, 1, 1.4, 1.4, 1]
                ],
                t = "NORMAL,FIGHTING,FLYING,POISON,GROUND,ROCK,BUG,GHOST,STEEL,FIRE,WATER,GRASS,ELECTRIC,PSYCHIC,ICE,DRAGON,DARK,FAIRY".split(","),
                o = $('<div class="tooltip"><p class="title">PokÃ©mon</p><div class="split"><div class="strong"><p>Strong vs.</p></div><div class="weak"><p>Weak vs.</p></div><div class="immune"><p>Ineffective vs.</p></div></div></div>').appendTo("body"),
                n = o.find(".strong"),
                a = o.find(".weak"),
                i = o.find(".immune"),
                s = {
                    .714: a,
                    1.4: n,
                    .51: i
                },
                r = function(r, l) {
                    var c = Dict.types.indexOf(r);
                    if (o.find(".type").remove(), o.find("sup").remove(), n.children("p").text(Dict.tooltip.strongvs), a.children("p").text(Dict.tooltip.weakvs), "move" == l) {
                        var d = '<span class="move-icon move-type-' + r + '" data-type="' + r + '">&nbsp;</span>';
                        o.find(".title").html(d + r + " " + Dict.tooltip.move), e[c].forEach((function(e, o) {
                            1 != e && s[e].append('<span class="type POKEMON_TYPE_' + t[o] + '">' + Dict.types[o] + "</span>")
                        })), a.children().length <= 1 && a.append("<sup>-</sup>"), n.children().length <= 1 && n.append("<sup>-</sup>"), i.children().length <= 1 && i.append("<sup>-</sup>"), i.show()
                    }
                    if ("pokemon" == l) {
                        d = '<span class="move-icon move-type-' + r + '" data-type="' + r + '">&nbsp;</span>';
                        o.find(".title").html(d + r + " " + Dict.tooltip.pokemon), e.forEach((function(e, o) {
                            var i = e[c];
                            1 != i && (i > 1 ? a : n).append('<span class="type POKEMON_TYPE_' + t[o] + '">' + Dict.types[o] + "</span>")
                        })), a.children().length <= 1 && a.append("<sup>-</sup>"), n.children().length <= 1 && n.append("<sup>-</sup>"), i.children().length <= 1 && i.append("<sup>-</sup>"), i.hide()
                    }
                    o.show()
                },
                l = function() {
                    o.hide()
                };
            $("body").on("mouseout", ".tooltip", l), $("body").on("mouseout", ".move-tooltip", l), $("body").on("mouseover", ".move-tooltip", (function(e) {
                var t = $(this),
                    n = t.offset(),
                    a = t.data("type") || t.text();
                o.css({
                    left: n.left + t.outerWidth() / 2,
                    top: n.top + t.outerHeight() + 2
                }), r(a, "move")
            })), $("body").on("mouseout", ".pokemon-tooltip", l), $("body").on("mouseover", ".pokemon-tooltip", (function(e) {
                var t = $(this),
                    n = t.offset();
                o.css({
                    left: n.left + t.outerWidth() / 2,
                    top: n.top + t.outerHeight() + 2
                }), r(t.text(), "pokemon")
            }))
        }
    }(), window.Popup = new function() {
        var e, t, o, n = !1,
            a = !1,
            i = {
                hash: !1
            };
        this.init = function() {
            a = !0, e = $('<div class="_popup"></div>').appendTo("body"), t = $('<div class="_popup-cover"></div>').appendTo("body"), o = $('<div class="inner"></div>').appendTo(e), $("._popup-cover").on("click", Popup.hide), $("._popup").on("click", ".close", Popup.hide)
        }, this.show = function(i, s, r) {
            s = !0 === s, "string" == typeof i && "#" == i[0] && (i = $(i).html()), !1 === a && Popup.init(), s ? o.append(i.toString()) : (e.attr("class", "_popup"), r && e.addClass(r), o.html(i.toString()), $('<div class="close">&times;</div>').prependTo(o)), e.show(), t.show(), n = !0
        }, this.hide = function() {
            !1 !== a && (o.html(""), e.hide(), t.hide(), n = !1, !0 === i.hash && history.replaceState({}, document.title, location.pathname + location.search))
        }, this.set = function(e, t) {
            i[e] = t
        }, $(document).on("keydown", (function(e) {
            n && 27 === e.keyCode && Popup.hide()
        }))
    }, attempt((function() {
        $("a[data-pokemon]").each((function() {
            var e = $(this),
                t = +e.data("pokemon");
            e.prepend(pokemon_names[t][2])
        }))
    })), attempt((function() {
        $("header .mobile-menu").on("click", (function() {
            $("body").toggleClass("_m")
        })), $(".mobile-side-cover").on("click", (function() {
            $("body").removeClass("_m")
        })), $("header .mobile-search").on("click", (function() {
            $("body").toggleClass("_ms"), $("body").hasClass("_ms") && $(".mobile-search-box input").focus()
        })), $(".mobile-search-close").on("click", (function() {
            $("body").removeClass("_ms")
        }))
    })), attempt((function() {
        $("#top .language").on("mouseover", (function() {
            $("#top .language .dropdown").show()
        })), $("#top .language").on("mouseout", (function() {
            $("#top .language .dropdown").hide()
        }))
    })), attempt((function() {
        new s, document.body.addEventListener("x-swipe", (function(e) {
            var t = e.detail;
            "left" === t && document.body.classList.remove("_m"), "right" === t && window.innerWidth <= 870 && document.body.classList.add("_m")
        }))
    })), attempt((function() {
        var e = null,
            t = (new Date).toISOString().substr(0, 10),
            o = Date.now() / 1e3,
            n = $("nav .ev"),
            a = function() {
                o = Date.now() / 1e3;
                var a = e.filter((function(e) {
                    return null !== e.day ? e.day == t : o > e.start && o < e.finish
                })).length;
                n.data("events") !== a && n.attr("data-events", a), n.toggleClass("events", a > 0)
            },
            i = function t() {
                var n = null;
                if (!hasStorage && window.hasOwnProperty("event_data") && (n = window.event_data), hasStorage && null !== localStorage.getItem("event_data") && (n = JSON.parse(localStorage.getItem("event_data"))), null === n) return setTimeout(t, 1e3);
                e = n.filter((function(e) {
                    return e.day || (e.finish || e.start) > o
                })), setInterval(a, 1e3), a()
            };
        i(), $(document).on("event_data_updated", i)
    })), attempt((function() {
        var e = [];
        for (var t in pokemon_names)
            if (pokemon_links.hasOwnProperty(t))
                for (var o in 1 === pokemon_links[t].length && void 0 !== pokemon_forms[pokemon_links[t][0]] && 1 === pokemon_forms[pokemon_links[t][0]][8] && e.push(pokemon_names[t].slice(0, 3)), pokemon_links[t]) e.push(pokemon_forms[pokemon_links[t][o]].slice(0, 3));
            else e.push(pokemon_names[t].slice(0, 3));
        for (var n in e) e[n].push(e[n][0].toLowerCase());
        $("header .search input").on("keydown", (function(e) {
            if (-1 !== [9, 13, 38, 40, 27].indexOf(e.keyCode)) {
                var t = $("header .search .results"),
                    o = $("li.active", t);
                switch (e.preventDefault(), e.keyCode) {
                    case 27:
                        t.hide().children().html(""), $(this).blur();
                        break;
                    case 13:
                        o.length || (o = $("li", t).first()), o.length && (location.href = o.children("a").attr("href"));
                        break;
                    case 9:
                    case 40:
                        o.removeClass("active").next().addClass("active").length || $("li", t).first().addClass("active");
                        break;
                    case 38:
                        o.removeClass("active").prev().addClass("active").length || $("li", t).last().addClass("active")
                }
            }
        })), $("header .search input").on("keyup", (function(t) {
            if (-1 === [9, 13, 38, 40, 27].indexOf(t.keyCode)) {
                var o = $(this).val().toLowerCase(),
                    n = 0,
                    a = $("header .search .results ul");
                for (var i in a.html("").parent().show(), e) {
                    var s = e[i];
                    if (-1 !== s[3].indexOf(o)) {
                        if (++n > 16) break;
                        $('<li><a href="' + s[1] + '">' + s[2] + s[0] + "</a></li>").appendTo(a)
                    }
                }
            } else t.preventDefault()
        })), $("header .search").on("submit", (function(e) {
            e.preventDefault()
        })), $("header .search").on("click", (function(e) {
            e.stopPropagation()
        })), $("body").on("click", (function(e) {
            $("header .search .results").hide().children().html("")
        }))
    })), attempt((function() {
        var e = $("header .mobile-search-box"),
            t = e.find(".results ul");
        e.find("input").on("keyup", (function() {
            var e = $(this).val().toLowerCase(),
                o = 0;
            for (var n in t.html("").parent().show(), pokemon_names) {
                var a = pokemon_names[n];
                if (-1 !== a[0].toLowerCase().indexOf(e)) {
                    if (++o > 16) break;
                    $('<li><a href="' + a[1] + '">' + a[2] + a[0] + "</a></li>").appendTo(t)
                }
            }
        }))
    }))
})();