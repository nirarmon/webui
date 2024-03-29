/*
 Product Name: dhtmlxSuite 
 Version: 4.0.3 
 Edition: Standard 
 License: content of this file is covered by GPL. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
 Copyright UAB Dinamenta http://www.dhtmlx.com
 */

dhtmlXCalendarObject.prototype.draw = function () {
    this.show()
};
dhtmlXCalendarObject.prototype.close = function () {
    this.hide()
};
dhtmlXCalendarObject.prototype.setYearsRange = function () {
};
dhtmlXCombo.prototype.loadXML = function (a, b) {
    this.load(a, b)
};
dhtmlXCombo.prototype.loadXMLString = function (a) {
    this.load(a)
};
dhtmlXCombo.prototype.enableOptionAutoHeight = function () {
};
dhtmlXCombo.prototype.enableOptionAutoPositioning = function () {
};
dhtmlXCombo.prototype.enableOptionAutoWidth = function () {
};
dhtmlXCombo.prototype.destructor = function () {
    this.unload()
};
dhtmlXCombo.prototype.render = function () {
};
dhtmlXCombo.prototype.setOptionHeight = function () {
};
dhtmlXCombo.prototype.attachChildCombo = function () {
};
dhtmlXCombo.prototype.setAutoSubCombo = function () {
};
window.dhtmlXColorPickerInput = function () {
    return dhtmlXColorPicker.apply(window, arguments)
};
dhtmlXColorPicker.prototype.init = function () {
};
dhtmlXColorPicker.prototype.setOnSelectHandler = function (a) {
    if (typeof a == "function") {
        this.attachEvent("onSelect", a)
    }
};
dhtmlXColorPicker.prototype.setOnCancelHandler = function (a) {
    if (typeof a == "function") {
        this.attachEvent("onCancel", a)
    }
};
dhtmlXColorPicker.prototype._mergeLangModules = function () {
    if (typeof dhtmlxColorPickerLangModules != "object") {
        return
    }
    for (var a in dhtmlxColorPickerLangModules) {
        this.i18n[a] = dhtmlxColorPickerLangModules[a]
    }
};
window.dhtmlxColorPickerLangModules = dhtmlXColorPicker.prototype.i18n;
dhtmlXColorPicker.prototype.close = function () {
    this.hide()
};
dhtmlXColorPicker.prototype.setImagePath = function (a) {
};
dhtmlXMenuObject.prototype.loadXML = function (a, b) {
    this.loadStruct(a, b)
};
dhtmlXMenuObject.prototype.loadXMLString = function (b, a) {
    this.loadStruct(b, a)
};
dhtmlXMenuObject.prototype.setIconPath = function (a) {
    this.setIconsPath(a)
};
dhtmlXMenuObject.prototype.setImagePath = function () {
};
dhtmlXToolbarObject.prototype.loadXML = function (a, b) {
    this.loadStruct(a, b)
};
dhtmlXToolbarObject.prototype.loadXMLString = function (b, a) {
    this.loadStruct(b, a)
};
dhtmlXToolbarObject.prototype.setIconPath = function (a) {
    this.setIconsPath(a)
};
dhtmlXTreeObject.prototype.addPath = function (b, e, c, h) {
    this.activatePaths();
    c = c || {};
    var d = [];
    var g = null;
    var f = this._idpull[e];
    var a = this._idpull[b];
    while (a != g) {
        d.push({open: this._getOpenState(f), from: f.id, size: (g ? this._getIndex(g) : 0), to: (g ? g.id : null), style: "border-left:" + (c.width || 1) + "px " + (c.mode || "solid") + " " + (c.color || "red") + "; border-bottom:" + (c.width || 1) + "px " + (c.mode || "solid") + " " + (c.color || "red") + ";"});
        g = f;
        f = f.parentObject
    }
    while (!h || this._pathspull[h]) {
        h = (h || 0) + 1
    }
    this._pathspull[h] = {path: d, id: h};
    this._paths.push(this._pathspull[h]);
    this._renderPath(this._pathspull[h])
};
dhtmlXTreeObject.prototype.activatePaths = function (a) {
    var b = this;
    this.attachEvent("onOpenEnd", function () {
        for (var c = 0; c < b._paths.length; c++) {
            b._clearPath(b._paths[c]);
            b._renderPath(b._paths[c])
        }
    });
    this.attachEvent("onXLE", function () {
        var d = b.XMLLoader.doXPath("//pathend");
        var g = b.XMLLoader.doXPath("//pathstart");
        var f = {};
        for (var e = 0; e < g.length; e++) {
            f[g[e].getAttribute("id")] = g[e]
        }
        for (var e = 0; e < g.length; e++) {
            var c = d[e].parentNode;
            var h = f[d[e].getAttribute("id")];
            this.addPath(h.parentNode.getAttribute("id"), c.getAttribute("id"), {color: h.getAttribute("color"), mode: h.getAttribute("mode"), width: h.getAttribute("width")}, h.getAttribute("id"))
        }
    });
    if (a) {
        this._halfHeight = a
    } else {
        if (this._idpull[0].childsCount) {
            this._halfHeight = Math.floor(this._idpull[0].childNodes[0].span.parentNode.offsetHeight / 2)
        }
    }
    if (!this._halfHeight) {
        this._halfHeight = 9
    }
    this.activatePaths = function () {
    }
};
dhtmlXTreeObject.prototype._clearPath = function (c) {
    for (var b = c.path.length - 1; b > 0; b--) {
        var a = c.path[b];
        if (a._html) {
            a._html.parentNode.removeChild(a._html)
        }
        a._html = null
    }
};
dhtmlXTreeObject.prototype._renderPath = function (g) {
    var k = this._idpull[g.path[g.path.length - 1].from].span.parentNode.parentNode;
    var f = (_isIE ? 9 : 8) + this._halfHeight;
    var e = (_isIE ? 27 : 27);
    while (k.offsetParent != this.allTree) {
        f += k.offsetTop;
        e += k.offsetLeft;
        k = k.offsetParent
    }
    for (var b = g.path.length - 1; b > 0; b--) {
        var a = g.path[b];
        var h = document.createElement("div");
        if (!this._idpull[a.to].tr.offsetHeight) {
            return
        }
        var j = this._idpull[a.to].tr.offsetTop;
        h.style.cssText = "position:absolute; z-index:1; width:" + (_isIE ? 10 : 8) + "px; height:" + (j - 9) + "px; left:" + e + "px; top:" + f + "px;" + a.style;
        f += j;
        e += 18;
        this.allTree.appendChild(h);
        a._html = h
    }
};
dhtmlXTreeObject.prototype.deletePath = function (c) {
    var b = this._pathspull[c];
    if (b) {
        this._clearPath(b);
        delete this._pathspull[c];
        for (var a = 0; a < this._paths.length; a++) {
            if (this._paths[a] == b) {
                return this._paths.splice(a, 1)
            }
        }
    }
};
dhtmlXTreeObject.prototype.deleteAllPaths = function (b) {
    for (var a = this._paths.length - 1; a >= 0; a--) {
        this.deletePath(this._paths[a].id)
    }
};
dhtmlXTreeObject.prototype._paths = [];
dhtmlXTreeObject.prototype._pathspull = {};
dhtmlXTreeObject.prototype.enableSmartRendering = function () {
    this.enableSmartXMLParsing(true);
    this._srnd = true;
    this.itemHeight = 18;
    var a = this;
    this.allTree.onscroll = function () {
        if (a._srndT) {
            return
        }
        a._srndT = window.setTimeout(function () {
            a._srndT = null;
            a._renderState()
        }, 300)
    };
    this.attachEvent("onXLE", function () {
        a._renderState()
    });
    this._singleTimeSRND()
};
dhtmlXTreeObject.prototype._renderState = function () {
    if (!this._idpull[this.rootId]._sready) {
        this.prepareSR(this.rootId, true)
    }
    var b = this.allTree.scrollTop;
    var c = Math.floor(b / this.itemHeight);
    var a = Math.ceil(this.allTree.offsetHeight / this.itemHeight);
    this._group_render = true;
    this._getItemByPos(b, this.itemHeight, a, null, false, this._renderItemSRND);
    this._group_render = false
};
dhtmlXTreeObject.prototype._renderItemSRND = function (k, j) {
    if (!k.span) {
        k.span = -1;
        var f = k.parentObject.htmlNode.childNodes[0].childNodes;
        var e = j * this.itemHeight;
        var l = null;
        for (var c = 1; c < f.length; c++) {
            l = f[c];
            var g = l.nodem ? this.itemHeight : (l.offsetHeight || parseInt(l.childNodes[1].firstChild.style.height));
            e -= g;
            if (e < 0) {
                if (e == -1) {
                    e++;
                    continue
                }
                var d = l.childNodes[1].firstChild;
                d.style.height = (parseInt(d.style.height) - (g - Math.abs(e) + this.itemHeight)) + "px";
                if (Math.abs(e) != g) {
                    var n = this._drawNewHolder(e + g, true);
                    l.parentNode.insertBefore(n, l)
                }
                l.tr = {nextSibling: l};
                break
            }
        }
        if (d && d.style.height != "0px" && !l.offsetHeight) {
            var m = this._hAdI;
            this._hAdI = true
        }
        this._parseItem(k._sxml, k.parentObject, null, l);
        if (d && d.style.height != "0px" && !l.offsetHeight) {
            this._hAdI = m
        }
        if (k.unParsed) {
            this._correctPlus(k)
        }
        if (d && d.style.height == "0px") {
            l.parentNode.removeChild(l)
        }
    }
};
dhtmlXTreeObject.prototype._buildSRND = function (b, a) {
    if (b.parentObject) {
        this._globalIdStorageFind(b.parentObject.id)
    }
    if (!this._idpull[this.rootId]._sready) {
        this.prepareSR(this.rootId, true)
    }
    this._renderItemSRND(b, this._getIndex(b));
    if ((b.unParsed) && (!a)) {
        this.reParse(b, 0)
    }
    if (!b.prepareSR) {
        this.prepareSR(b.id)
    }
};
dhtmlXTreeObject.prototype._getIndex = function (c) {
    for (var b = 0; b < c.parentObject.childsCount; b++) {
        if (c.parentObject.childNodes[b] == c) {
            return b
        }
    }
};
dhtmlXTreeObject.prototype.prepareSR = function (a, c) {
    a = this._idpull[a];
    if (a._sready) {
        return
    }
    var b = this._drawNewHolder(this.itemHeight * a.childsCount, c);
    a.htmlNode.childNodes[0].appendChild(b);
    a._sready = true
};
dhtmlXTreeObject.prototype._drawNewHolder = function (e, g) {
    var d = document.createElement("TR");
    var a = document.createElement("TD");
    var c = document.createElement("TD");
    var f = document.createElement("DIV");
    f.innerHTML = "&nbsp;";
    a.appendChild(f);
    d.appendChild(c);
    d.appendChild(a);
    if (!g) {
        d.style.display = "none"
    }
    f.style.height = e + "px";
    return d
};
dhtmlXTreeObject.prototype._getNextNodeSR = function (a, b) {
    if ((!b) && (a.childsCount)) {
        return a.childNodes[0]
    }
    if (a == this.htmlNode) {
        return -1
    }
    if ((a.tr) && (a.tr.nextSibling) && (a.tr.nextSibling.nodem)) {
        return a.tr.nextSibling.nodem
    }
    return this._getNextNode(a.parentObject, true)
};
dhtmlXTreeObject.prototype._getItemByPos = function (k, e, b, d, a, g) {
    if (!d) {
        this._pos_c = k;
        d = this._idpull[this.rootId]
    }
    for (var c = 0; c < d.childsCount; c++) {
        this._pos_c -= e;
        if (this._pos_c <= 0) {
            a = true
        }
        if (a) {
            g.apply(this, [d.childNodes[c], c]);
            b--
        }
        if (b < 0) {
            return b
        }
        if (d.childNodes[c]._open) {
            b = this._getItemByPos(null, e, b, d.childNodes[c], a, g);
            if (b < 0) {
                return b
            }
        }
    }
    return b
};
dhtmlXTreeObject.prototype._addItemSRND = function (b, f, e) {
    var c = this._idpull[b];
    var a = c.childsCount;
    var d = c.childNodes;
    d[a] = new dhtmlXTreeItemObject(f, "", c, this, null, 1);
    itemId = d[a].id;
    d[a]._sxml = e.clone();
    c.childsCount++
};
dhtmlXTreeObject.prototype._singleTimeSRND = function () {
    this._redrawFrom = function () {
    };
    var a = dhtmlXTreeItemObject;
    this._singleTimeSRND = function () {
    };
    window.dhtmlXTreeItemObject = function (g, c, d, b, e, f) {
        if (!b._srnd) {
            return a.call(this, g, c, d, b, e, f)
        }
        this.htmlNode = "";
        this.acolor = "";
        this.scolor = "";
        this.tr = 0;
        this.childsCount = 0;
        this.tempDOMM = 0;
        this.tempDOMU = 0;
        this.dragSpan = 0;
        this.dragMove = 0;
        this.span = 0;
        this.closeble = 1;
        this.childNodes = new Array();
        this.userData = new cObject();
        this.checkstate = 0;
        this.treeNod = b;
        this.label = c;
        this.parentObject = d;
        this.actionHandler = e;
        this.images = new Array(b.imageArray[0], b.imageArray[1], b.imageArray[2]);
        this.id = b._globalIdStorageAdd(g, this);
        if (g == b.rootId) {
            if (this.treeNod.checkBoxOff) {
                this.htmlNode = this.treeNod._createItem(1, this, f)
            } else {
                this.htmlNode = this.treeNod._createItem(0, this, f)
            }
            this.htmlNode.objBelong = this
        }
        return this
    };
    this.setCheckSR = this.setCheck;
    this.setCheck = function (c, b) {
        this._globalIdStorageFind(c);
        return this.setCheckSR(c, b)
    };
    this._get_srnd_p = function (e) {
        var d = [];
        while (e != this.rootId) {
            var b = this.getParentId(e);
            for (var c = 0; c < this._idpull[b].childsCount; c++) {
                if (this._idpull[b].childNodes[c].id == e) {
                    d.push([b, c]);
                    break
                }
            }
            e = b
        }
        d.reverse();
        return d
    };
    this._get_srnd_p_last = function (f, d, b) {
        d = d || [];
        var e = 0;
        while (true) {
            var c = this._idpull[f];
            if (c._sxml && this.findStrInXML(c._sxml.d, "text", b)) {
                this._globalIdStorageFind(c.id)
            }
            var e = c.childsCount;
            if (!e) {
                break
            }
            d.push([f, e - 1]);
            f = c.childNodes[e - 1].id
        }
        return d
    };
    this._get_prev_srnd = function (e, b) {
        var c;
        if (!e.length) {
            e.push.apply(e, this._get_srnd_p_last(this.rootId, null, b));
            c = e[e.length - 1];
            return this._idpull[c[0]].childNodes[c[1]]
        }
        c = e[e.length - 1];
        if (c[1]) {
            c[1]--;
            var d = this._idpull[c[0]].childNodes[c[1]];
            this._get_srnd_p_last(d.id, e, b);
            var c = e[e.length - 1];
            return this._idpull[c[0]].childNodes[c[1]]
        } else {
            e.pop();
            if (!e.length) {
                return this._get_prev_srnd(e, b)
            }
            var c = e[e.length - 1];
            return this._idpull[c[0]].childNodes[c[1]]
        }
    };
    this._get_next_srnd = function (e, c) {
        if (!e.length) {
            e.push([this.rootId, 0]);
            return this._idpull[this.rootId].childNodes[0]
        }
        var b = e[e.length - 1];
        var d = this._idpull[b[0]].childNodes[b[1]];
        if (d.childsCount && !c) {
            e.push([d.id, 0]);
            return d.childNodes[0]
        }
        b[1]++;
        var d = this._idpull[b[0]].childNodes[b[1]];
        if (d) {
            return d
        }
        e.pop();
        if (!e.length) {
            return this.htmlNode
        }
        return this._get_next_srnd(e, true)
    };
    this._findNodeByLabel = function (b, f, d) {
        var b = b.replace(new RegExp("^( )+"), "").replace(new RegExp("( )+$"), "");
        b = new RegExp(b.replace(/([\*\+\\\[\]\(\)]{1})/gi, "\\$1").replace(/ /gi, ".*"), "gi");
        if (!d) {
            d = this._selected[0];
            if (!d) {
                d = this.htmlNode
            }
        }
        var c = d;
        var e = this._get_srnd_p(c.id);
        while (d = (f ? this._get_prev_srnd(e, b) : this._get_next_srnd(e))) {
            if (d.label) {
                if (d.label.search(b) != -1) {
                    return d
                }
            } else {
                if (d._sxml) {
                    if (d._sxml.get("text").search(b) != -1) {
                        return d
                    }
                    if (this.findStrInXML(d._sxml.d, "text", b)) {
                        this._globalIdStorageFind(d.id)
                    }
                }
            }
            if ((d.unParsed) && (this.findStrInXML(d.unParsed.d, "text", b))) {
                this.reParse(d)
            }
            if (c.id == d.id) {
                break
            }
            if (f && e.length == 1 && e[0][1] == 0) {
                break
            }
        }
        return null
    };
    this.deleteChildItems = function (b) {
        if (this.rootId == b) {
            this._selected = new Array();
            this._idpull = {};
            this._p = this._pos_c = this._pullSize = null;
            this.allTree.removeChild(this.htmlNode.htmlNode);
            this.htmlNode = new dhtmlXTreeItemObject(this.rootId, "", 0, this);
            this.htmlNode.htmlNode.childNodes[0].childNodes[0].style.display = "none";
            this.htmlNode.htmlNode.childNodes[0].childNodes[0].childNodes[0].className = "hiddenRow";
            this.allTree.insertBefore(this.htmlNode.htmlNode, this.selectionBar);
            if (_isFF) {
                this.allTree.childNodes[0].width = "100%";
                this.allTree.childNodes[0].style.overflow = "hidden"
            }
        }
    };
    this._HideShow = function (c, g) {
        if ((this.XMLsource) && (!c.XMLload)) {
            if (g == 1) {
                return
            }
            c.XMLload = 1;
            this._loadDynXML(c.id);
            return
        }
        if (!c.span) {
            this._buildSRND(c)
        }
        if (c.unParsed) {
            this.reParse(c);
            this.prepareSR(c.id)
        }
        if (c.childsCount == 0) {
            return
        }
        var f = c.htmlNode.childNodes[0].childNodes;
        var b = f.length;
        if (b > 1) {
            if (((f[1].style.display != "none") || (g == 1)) && (g != 2)) {
                this.allTree.childNodes[0].border = "1";
                this.allTree.childNodes[0].border = "0";
                var e = "none";
                c._open = false
            } else {
                var e = "";
                c._open = true
            }
            for (var d = 1; d < b; d++) {
                f[d].style.display = e
            }
            this._renderState()
        }
        this._correctPlus(c)
    }
};
dhtmlXGridObject.prototype.hidePivot = function (a) {
    if (this._pgridCont) {
        if (this._pgrid) {
            this._pgrid.destructor()
        }
        var b = this._pgridCont.parentNode;
        b.innerHTML = "";
        if (b.parentNode == this.entBox) {
            this.entBox.removeChild(b)
        }
        this._pgrid = this._pgridSelect = this._pUNI = this._pgridCont = null
    }
};
dhtmlXGridObject.prototype.makePivot = function (j, a) {
    a = a || {};
    this.hidePivot();
    if (!j) {
        var j = document.createElement("DIV");
        j.style.cssText = "position:absolute; top:0px; left:0px;background-color:white;";
        j.style.height = this.entBox.offsetHeight + "px";
        j.style.width = this.entBox.offsetWidth + "px";
        if (this.entBox.style.position != "absolute") {
            this.entBox.style.position = "relative"
        }
        this.entBox.appendChild(j)
    }
    if (typeof(j) != "object") {
        j = document.getElementById(j)
    }
    if (a.column_list) {
        this._column_list = a.column_list
    } else {
        this._column_list = [];
        for (var g = 0; g < this.hdr.rows[1].cells.length; g++) {
            this._column_list.push(this.hdr.rows[1].cells[g][_isIE ? "innerText" : "textContent"])
        }
    }
    var h = this;
    j.innerHTML = "<table cellspacing='0' cellpadding='0'><tr><td style='width:160px' align='center'></td><td>&nbsp;&nbsp;&nbsp;</td><td></td></tr></table><div></div>";
    var f = this.makePivotSelect(this._column_list);
    f.style.width = "80px";
    f.onchange = function () {
        if (this.value != -1) {
            h._pivotS.value = this.value
        } else {
            h._pivotS.value = ""
        }
        h._reFillPivotLists();
        h._renderPivot2()
    };
    var e = this.makePivotSelect(this._column_list);
    e.onchange = function () {
        if (this.value != -1) {
            h._pivotS.x = this.value
        } else {
            h._pivotS.x = ""
        }
        h._reFillPivotLists();
        h._renderPivot()
    };
    var d = this.makePivotSelect(this._column_list);
    d.onchange = function () {
        if (this.value != -1) {
            h._pivotS.y = this.value
        } else {
            h._pivotS.y = ""
        }
        h._reFillPivotLists();
        h._renderPivot()
    };
    var c = this.makePivotSelect(["Sum", "Min", "Max", "Average", "Count"], -1);
    c.style.width = "70px";
    c.onchange = function () {
        if (this.value != -1) {
            h._pivotS.action = this.value
        } else {
            h._pivotS.action = null
        }
        h._renderPivot2()
    };
    if (a.readonly) {
        f.disabled = e.disabled = d.disabled = c.disabled = true
    }
    j.firstChild.rows[0].cells[0].appendChild(c);
    j.firstChild.rows[0].cells[0].appendChild(f);
    j.firstChild.rows[0].cells[2].appendChild(e);
    var b = j.childNodes[1];
    b.style.width = j.offsetWidth + "px";
    b.style.height = j.offsetHeight - 20 + "px";
    b.style.overflow = "hidden";
    this._pgridCont = b;
    this._pgridSelect = [f, e, d, c];
    this._pData = this._fetchPivotData();
    this._pUNI = [];
    this._pivotS = {action: (a.action || "0"), value: (typeof a.value != "undefined" ? (a.value || "0") : null), x: (typeof a.x != "undefined" ? (a.x || "0") : null), y: (typeof a.y != "undefined" ? (a.y || "0") : null)};
    f.value = this._pivotS.value;
    e.value = this._pivotS.x;
    d.value = this._pivotS.y;
    c.value = this._pivotS.action;
    h._reFillPivotLists();
    this._renderPivot()
};
dhtmlXGridObject.prototype._fetchPivotData = function () {
    var e = [];
    for (var b = 0; b < this._cCount; b++) {
        var c = [];
        for (var a = 0; a < this.rowsCol.length; a++) {
            if (this.rowsCol[a]._cntr) {
                continue
            }
            c.push(this.cells2(a, b).getValue())
        }
        e.push(c)
    }
    return e
};
dhtmlXGridObject.prototype._renderPivot = function () {
    if (_isIE) {
        this._pgridSelect[2].removeNode(true)
    }
    if (this._pgrid) {
        this._pgrid.destructor()
    }
    this._pgrid = new dhtmlXGridObject(this._pgridCont);
    this._pgrid.setImagePath(this.imgURL);
    this._pgrid.attachEvent("onBeforeSelect", function () {
        return false
    });
    if (this._pivotS.x) {
        var a = this._getUniList(this._pivotS.x);
        var d = [160];
        for (var c = 0; c < a.length; c++) {
            d.push(100)
        }
        a = [""].concat(a);
        this._pgrid.setHeader(a);
        this._pgrid.setInitWidths(d.join(","))
    } else {
        this._pgrid.setHeader("");
        this._pgrid.setInitWidths("160")
    }
    this._pgrid.init();
    this._pgrid.setEditable(false);
    this._pgrid.setSkin(this.entBox.className.replace("gridbox gridbox_", ""));
    var b = this._pgrid.hdr.rows[1].cells[0];
    if (b.firstChild && b.firstChild.tagName == "DIV") {
        b = b.firstChild
    }
    b.appendChild(this._pgridSelect[2]);
    this._pgrid.setSizes();
    if (this._pivotS.y) {
        var a = this._getUniList(this._pivotS.y);
        for (var c = 0; c < a.length; c++) {
            this._pgrid.addRow(this._pgrid.uid(), [a[c]], -1)
        }
    } else {
        this._pgrid.addRow(1, "not ready", 1)
    }
    this._renderPivot2()
};
dhtmlXGridObject.prototype._pivot_action_0 = function (n, m, l, d, o, j) {
    var k = 0;
    var g = j[n];
    var f = j[m];
    var e = j[l];
    for (var h = g.length - 1; h >= 0; h--) {
        if (g[h] == d && f[h] == o) {
            k += this.parseFloat(e[h])
        }
    }
    return k
};
dhtmlXGridObject.prototype._pivot_action_1 = function (m, l, k, d, n, j) {
    ret = 9999999999;
    var g = j[m];
    var f = j[l];
    var e = j[k];
    for (var h = g.length - 1; h >= 0; h--) {
        if (g[h] == d && f[h] == n) {
            ret = Math.min(this.parseFloat(e[h]), ret)
        }
    }
    if (ret == 9999999999) {
        ret = ""
    }
    return ret
};
dhtmlXGridObject.prototype._pivot_action_2 = function (m, l, k, d, n, j) {
    ret = -9999999999;
    var g = j[m];
    var f = j[l];
    var e = j[k];
    for (var h = g.length - 1; h >= 0; h--) {
        if (g[h] == d && f[h] == n) {
            ret = Math.max(this.parseFloat(e[h]), ret)
        }
    }
    if (ret == -9999999999) {
        ret = ""
    }
    return ret
};
dhtmlXGridObject.prototype._pivot_action_3 = function (o, n, m, d, p, j) {
    var l = 0;
    var k = 0;
    var g = j[o];
    var f = j[n];
    var e = j[m];
    for (var h = g.length - 1; h >= 0; h--) {
        if (g[h] == d && f[h] == p) {
            l += this.parseFloat(e[h]);
            k++
        }
    }
    return k ? l / k : ""
};
dhtmlXGridObject.prototype._pivot_action_4 = function (o, n, m, d, p, j) {
    var l = 0;
    var k = 0;
    var g = j[o];
    var f = j[n];
    var e = j[m];
    for (var h = g.length - 1; h >= 0; h--) {
        if (g[h] == d && f[h] == p) {
            l++
        }
    }
    return l
};
dhtmlXGridObject.prototype.parseFloat = function (a) {
    a = parseFloat(a);
    if (isNaN(a)) {
        return 0
    }
    return a
};
dhtmlXGridObject.prototype._renderPivot2 = function () {
    if (!(this._pivotS.x && this._pivotS.y && this._pivotS.value && this._pivotS.action)) {
        return
    }
    var d = this["_pivot_action_" + this._pivotS.action];
    var a = this._getUniList(this._pivotS.x);
    var e = this._getUniList(this._pivotS.y);
    for (var c = 0; c < a.length; c++) {
        for (var b = 0; b < e.length; b++) {
            this._pgrid.cells2(b, c + 1).setValue(Math.round(d(this._pivotS.x, this._pivotS.y, this._pivotS.value, a[c], e[b], this._pData) * 100) / 100)
        }
    }
};
dhtmlXGridObject.prototype._getUniList = function (c) {
    if (!this._pUNI[c]) {
        var e = {};
        var b = [];
        for (var d = this._pData[c].length - 1; d >= 0; d--) {
            e[this._pData[c][d]] = true
        }
        for (var f in e) {
            if (e[f] === true) {
                b.push(f)
            }
        }
        this._pUNI[c] = b.sort()
    }
    return this._pUNI[c]
};
dhtmlXGridObject.prototype._fillPivotList = function (e, d, c, a) {
    if (!c) {
        c = {};
        a = -1
    }
    e.innerHTML = "";
    e.options[e.options.length] = new Option("-select-", -1);
    for (var b = 0; b < d.length; b++) {
        if (c[b] || d[b] === null) {
            continue
        }
        e.options[e.options.length] = new Option(d[b], b)
    }
    e.value = parseInt(a)
};
dhtmlXGridObject.prototype._reFillPivotLists = function () {
    var e = [];
    var b = [];
    for (var d = 0; d < 3; d++) {
        e.push(this._pgridSelect[d]);
        b.push(e[d].value)
    }
    var c = this._reFfillPivotLists;
    var a = {};
    a[b[1]] = a[b[2]] = true;
    this._fillPivotList(e[0], this._column_list, a, b[0]);
    a = {};
    a[b[0]] = a[b[2]] = true;
    this._fillPivotList(e[1], this._column_list, a, b[1]);
    a = {};
    a[b[1]] = a[b[0]] = true;
    this._fillPivotList(e[2], this._column_list, a, b[2]);
    this._reFfillPivotLists = c
};
dhtmlXGridObject.prototype.makePivotSelect = function (b, a) {
    var c = document.createElement("SELECT");
    this._fillPivotList(c, b, a);
    c.style.cssText = "width:150px; height:20px; font-family:Tahoma; font-size:8pt; font-weight:normal;";
    return c
};
function eXcell_dec(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.getValue = function () {
        return parseFloat(this.cell.innerHTML.replace(/,/g, ""))
    };
    this.setValue = function (h) {
        var f = "0,000.00";
        if (h == "0") {
            this.setCValue(f.replace(/.*(0\.[0]+)/, "$1"), h);
            return
        }
        var g = f.substr(f.indexOf(".") + 1).length;
        h = Math.round(h * Math.pow(10, g)).toString();
        var b = "";
        var d = 0;
        var e = false;
        for (var c = h.length - 1; c >= 0; c--) {
            d++;
            b = h.charAt(c) + b;
            if (!e && d == g) {
                b = "." + b;
                d = 0;
                e = true
            }
            if (e && d == 3 && c != 0 && h.charAt(c - 1) != "-") {
                b = "," + b;
                d = 0
            }
        }
        this.setCValue(b, h)
    }
}
eXcell_dec.prototype = new eXcell_ed;
function eXcell_cor(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        this.combo = this.grid.getCombo(this.cell._cellIndex);
        this.editable = true
    }
    this.shiftNext = function () {
        var b = this.list.options[this.list.selectedIndex + 1];
        if (b) {
            b.selected = true
        }
        this.obj.value = this.list.value;
        return true
    };
    this.shiftPrev = function () {
        var b = this.list.options[this.list.selectedIndex - 1];
        if (b) {
            b.selected = true
        }
        this.obj.value = this.list.value;
        return true
    };
    this.edit = function () {
        this.val = this.getValue();
        this.text = this.cell.innerHTML._dhx_trim();
        var d = this.grid.getPosition(this.cell);
        this.obj = document.createElement("TEXTAREA");
        this.obj.className = "dhx_combo_edit";
        this.obj.style.height = (this.cell.offsetHeight - 4) + "px";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.align;
        this.obj.onclick = function (g) {
            (g || event).cancelBubble = true
        };
        this.obj.value = this.text;
        this.list = document.createElement("SELECT");
        this.list.editor_obj = this;
        this.list.className = "dhx_combo_select";
        this.list.style.width = this.cell.offsetWidth + "px";
        this.list.style.left = d[0] + "px";
        this.list.style.top = d[1] + this.cell.offsetHeight + "px";
        this.list.onclick = function (i) {
            var h = i || window.event;
            var g = h.target || h.srcElement;
            if (g.tagName == "OPTION") {
                g = g.parentNode
            }
            if (g.value != -1) {
                g.editor_obj._byClick = true;
                g.editor_obj.editable = false;
                g.editor_obj.grid.editStop()
            } else {
                h.cancelBubble = true;
                g.editor_obj.obj.value = "";
                g.editor_obj.obj.focus()
            }
        };
        var b = this.combo.getKeys();
        var f = 0;
        this.list.options[0] = new Option(this.combo.get(b[0]), b[0]);
        this.list.options[0].selected = true;
        for (var c = 1; c < b.length; c++) {
            var e = this.combo.get(b[c]);
            this.list.options[this.list.options.length] = new Option(e, b[c]);
            if (b[c] == this.val) {
                f = this.list.options.length - 1
            }
        }
        document.body.appendChild(this.list);
        this.list.size = "6";
        this.cstate = 1;
        if (this.editable) {
            this.cell.innerHTML = ""
        } else {
            this.obj.style.width = "1px";
            this.obj.style.height = "1px"
        }
        this.cell.appendChild(this.obj);
        this.list.options[f].selected = true;
        if ((!_isFF) || (this.editable)) {
            this.obj.focus();
            this.obj.focus()
        }
        if (!this.editable) {
            this.obj.style.visibility = "hidden"
        }
    };
    this.getValue = function () {
        return((this.cell.combo_value == window.undefined) ? "" : this.cell.combo_value)
    };
    this.getText = function () {
        return this.cell.innerHTML
    };
    this.getState = function () {
        return{prev: this.cell.__prev, now: this.cell.__now}
    };
    this.detach = function () {
        if (this.val != this.getValue()) {
            this.cell.wasChanged = true
        }
        if (this.list.parentNode != null) {
            if ((this.obj.value._dhx_trim() != this.text) || (this._byClick)) {
                var b = this.list.value;
                if (!this._byClick) {
                    this.combo.values[this.combo.keys._dhx_find(b)] = this.obj.value
                }
                this.setValue(b)
            } else {
                this.setValue(this.val)
            }
        }
        if (this.list.parentNode) {
            this.list.parentNode.removeChild(this.list)
        }
        if (this.obj.parentNode) {
            this.obj.parentNode.removeChild(this.obj)
        }
        return this.val != this.getValue()
    }
}
eXcell_cor.prototype = new eXcell;
eXcell_cor.prototype.setValue = function (b) {
    if ((b || "").toString()._dhx_trim() == "") {
        b = null
    }
    var a = this.grid.getCombo(this.cell._cellIndex).get(b);
    if ((b == -1) && (a == "")) {
        this.combo.values[this.combo.keys._dhx_find(-1)] = "Create new value";
        b = null
    }
    if (b !== null) {
        this.setCValue(a, b)
    } else {
        this.setCValue("&nbsp;", b)
    }
    this.cell.__prev = this.cell.__now;
    this.cell.__now = {key: b, value: a};
    this.cell.combo_value = b
};
function eXcell_wbut(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    this.edit = function () {
        var h = this.getValue().toString();
        this.obj = document.createElement("INPUT");
        this.obj.readOnly = true;
        this.obj.style.width = "60px";
        this.obj.style.height = (this.cell.offsetHeight - (this.grid.multiLine ? 5 : 4)) + "px";
        this.obj.style.border = "0px";
        this.obj.style.margin = "0px";
        this.obj.style.padding = "0px";
        this.obj.style.overflow = "hidden";
        this.obj.style.fontSize = _isKHTML ? "10px" : "12px";
        this.obj.style.fontFamily = "Arial";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.align;
        this.obj.onclick = function (i) {
            (i || event).cancelBubble = true
        };
        this.cell.innerHTML = "";
        this.cell.appendChild(this.obj);
        this.obj.onselectstart = function (i) {
            if (!i) {
                i = event
            }
            i.cancelBubble = true;
            return true
        };
        this.obj.style.textAlign = this.cell.align;
        this.obj.value = h;
        this.obj.focus();
        this.obj.focus();
        this.cell.appendChild(document.createTextNode(" "));
        var e = document.createElement("input");
        if (_isIE) {
            e.style.height = (this.cell.offsetHeight - (this.grid.multiLine ? 5 : 4)) + "px";
            e.style.lineHeight = "5px"
        } else {
            e.style.fontSize = "8px";
            e.style.width = "10px";
            e.style.marginTop = "-5px"
        }
        e.type = "button";
        e.name = "Lookup";
        e.value = "...";
        var f = this.obj;
        var b = this.cell.cellIndex;
        var d = this.cell.parentNode.idd;
        var g = this.grid;
        var c = this;
        this.dhx_m_func = this.grid.getWButFunction(this.cell._cellIndex);
        e.onclick = function (i) {
            c.dhx_m_func(c, c.cell.parentNode.idd, c.cell._cellIndex, h)
        };
        this.cell.appendChild(e)
    };
    this.detach = function () {
        this.setValue(this.obj.value);
        return this.val != this.getValue()
    }
}
eXcell_wbut.prototype = new eXcell;
dhtmlXGridObject.prototype.getWButFunction = function (a) {
    if (this._wbtfna) {
        return this._wbtfna[a]
    } else {
        return(function () {
        })
    }
};
dhtmlXGridObject.prototype.setWButFunction = function (a, b) {
    if (!this._wbtfna) {
        this._wbtfna = new Array()
    }
    this._wbtfna[a] = b
};
function eXcell_passw(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.cell.innerHTML = "";
        this.cell.atag = "INPUT";
        this.val = this.getValue();
        this.obj = document.createElement(this.cell.atag);
        this.obj.style.height = (this.cell.offsetHeight - (_isIE ? 6 : 4)) + "px";
        this.obj.className = "dhx_combo_edit";
        this.obj.type = "password";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.align;
        this.obj.onclick = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.onmousedown = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.value = this.cell._rval || "";
        this.cell.appendChild(this.obj);
        if (_isFF) {
            this.obj.style.overflow = "visible";
            if ((this.grid.multiLine) && (this.obj.offsetHeight >= 18) && (this.obj.offsetHeight < 40)) {
                this.obj.style.height = "36px";
                this.obj.style.overflow = "scroll"
            }
        }
        this.obj.onselectstart = function (b) {
            if (!b) {
                b = event
            }
            b.cancelBubble = true;
            return true
        };
        this.obj.focus();
        this.obj.focus()
    };
    this.getValue = function () {
        return this.cell._rval
    };
    this.setValue = function (c) {
        var b = "*****";
        this.cell.innerHTML = b;
        this.cell._rval = c
    };
    this.detach = function () {
        this.setValue(this.obj.value);
        return this.val != this.getValue()
    }
}
eXcell_passw.prototype = new eXcell;
function eXcell_num(a) {
    try {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    } catch (b) {
    }
    this.edit = function () {
        this.val = this.getValue();
        this.obj = document.createElement(_isKHTML ? "INPUT" : "TEXTAREA");
        this.obj.className = "dhx_combo_edit";
        this.obj.style.height = (this.cell.offsetHeight - 4) + "px";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.align;
        this.obj.onclick = function (c) {
            (c || event).cancelBubble = true
        };
        this.obj.value = this.val;
        this.cell.innerHTML = "";
        this.cell.appendChild(this.obj);
        this.obj.onselectstart = function (c) {
            if (!c) {
                c = event
            }
            c.cancelBubble = true;
            return true
        };
        this.obj.focus();
        this.obj.focus()
    };
    this.getValue = function () {
        if ((this.cell.firstChild) && (this.cell.firstChild.tagName == "TEXTAREA")) {
            return this.cell.firstChild.value
        } else {
            return this.grid._aplNFb(this.cell.innerHTML.toString()._dhx_trim(), this.cell._cellIndex)
        }
    };
    this.setValue = function (d) {
        var c = new RegExp("[a-z]|[A-Z]", "i");
        if (d.match(c)) {
            d = "&nbsp;"
        }
        this.cell.innerHTML = d
    };
    this.detach = function () {
        var c = this.obj.value;
        this.setValue(c);
        return this.val != this.getValue()
    }
}
eXcell_num.prototype = new eXcell;
function eXcell_mro(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    this.edit = function () {
    }
}
eXcell_mro.prototype = new eXcell;
eXcell_mro.prototype.getValue = function () {
    return this.cell.childNodes[0].innerHTML._dhx_trim()
};
eXcell_mro.prototype.setValue = function (a) {
    if (!this.cell.childNodes.length) {
        this.cell.style.whiteSpace = "normal";
        this.cell.innerHTML = "<div style='height:100%; white-space:nowrap; overflow:hidden;'></div>"
    }
    if (!a || a.toString()._dhx_trim() == "") {
        a = "&nbsp;"
    }
    this.cell.childNodes[0].innerHTML = a
};
function eXcell_liveedit(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.cell.inputObj.focus();
        this.cell.inputObj.focus()
    };
    this.detach = function () {
        this.setValue(this.cell.inputObj.value)
    };
    this.getValue = function () {
        return this.cell.inputObj ? this.cell.inputObj.value : ""
    };
    this.destructor = function () {
    };
    this.onFocus = function () {
        var b = this.grid.callEvent("onEditCell", [0, this.cell.parentNode.idd, this.cell._cellIndex]);
        if (b === false) {
            this.cell.inputObj.blur()
        }
    };
    this.onBlur = function () {
        var b = this.grid.callEvent("onEditCell", [2, this.cell.parentNode.idd, this.cell._cellIndex]);
        this.detach()
    };
    this.onChange = function () {
        var b = this.grid.callEvent("onCellChanged", [this.cell.parentNode.idd, this.cell._cellIndex, this.cell.inputObj.value]);
        this.detach()
    }
}
eXcell_liveedit.prototype = new eXcell_ed;
eXcell_liveedit.prototype.setValue = function (b) {
    var a = this;
    this.cell.innerHTML = '<input type="text" value="" style="width:100%;" />';
    this.cell.inputObj = this.cell.firstChild;
    this.cell.inputObj = this.cell.firstChild;
    this.cell.inputObj.value = b;
    this.cell.inputObj.onfocus = function () {
        a.onFocus()
    };
    this.cell.inputObj.onblur = function () {
        a.onFocus()
    };
    this.cell.inputObj.onchange = function () {
        a.onChange()
    }
};
if (window.eXcell_math) {
    eXcell_liveedit.prototype.setValueA = eXcell_liveedit.prototype.setValue;
    eXcell_liveedit.prototype.setValue = eXcell_math.prototype._NsetValue
}
function eXcell_limit(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.cell.atag = ((!this.grid.multiLine) && (_isKHTML || _isMacOS || _isFF)) ? "INPUT" : "TEXTAREA";
        this.val = this.getValue();
        this.obj = document.createElement(this.cell.atag);
        this.obj.style.height = (this.cell.offsetHeight - (_isIE ? 6 : 4)) + "px";
        this.obj.className = "dhx_combo_edit";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.align;
        this.obj.onclick = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.onmousedown = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.value = this.val;
        this.cell.innerHTML = "";
        this.cell.appendChild(this.obj);
        if (_isFF) {
            this.obj.style.overflow = "visible";
            if ((this.grid.multiLine) && (this.obj.offsetHeight >= 18) && (this.obj.offsetHeight < 40)) {
                this.obj.style.height = "36px";
                this.obj.style.overflow = "scroll"
            }
        }
        this.obj.onkeypress = function (b) {
            if (this.value.length >= 15) {
                return false
            }
        };
        this.obj.onselectstart = function (b) {
            if (!b) {
                b = event
            }
            b.cancelBubble = true;
            return true
        };
        this.obj.focus();
        this.obj.focus()
    };
    this.getValue = function () {
        if ((this.cell.firstChild) && ((this.cell.atag) && (this.cell.firstChild.tagName == this.cell.atag))) {
            return this.cell.firstChild.value
        } else {
            return this.cell.innerHTML.toString()._dhx_trim()
        }
    };
    this.setValue = function (b) {
        if (b.length > 15) {
            this.cell.innerHTML = b.substring(0, 14)
        } else {
            this.cell.innerHTML = b
        }
    };
    this.detach = function () {
        this.setValue(this.obj.value);
        return this.val != this.getValue()
    }
}
eXcell_limit.prototype = new eXcell;
if (window.dhtmlxHierarchy) {
    if (window.dhtmlXCellObject) {
        dhtmlXCellObject.prototype.attachPropertyGrid = function () {
            var a = this.attachGrid();
            new dhtmlXPropertyGrid(a);
            return a
        }
    }
    function eXcell_tree_property(a) {
        if (a) {
            this.cell = a;
            this.grid = this.cell.parentNode.grid
        }
        this.isDisabled = function () {
            return true
        };
        this.getValue = function () {
            return this.cell.parentNode.valTag.innerHTML
        }
    }

    eXcell_tree_property.prototype = new eXcell_tree;
    eXcell_tree.prototype.setValue = function (a) {
        if (this.cell.parentNode.imgTag) {
            return this.setLabel(a)
        }
        if ((this.grid._tgc.iconTree == null) || (this.grid._tgc.iconTree != this.grid.iconTree)) {
            var d = {};
            d.imst = "<img src='" + this.grid.iconTree;
            d.imsti = "<img src='" + (this.grid.iconURL || this.grid.iconTree);
            d.imact = "' align='absmiddle'  onclick='this." + (_isKHTML ? "" : "parentNode.") + "parentNode.parentNode.parentNode.parentNode.grid.doExpand(this);event.cancelBubble=true;' class='property_image'>";
            d.plus = d.imst + "plus.gif" + d.imact;
            d.minus = d.imst + "minus.gif" + d.imact;
            d.blank = d.imst + "blank.gif" + d.imact;
            d.start = "<div style=' overflow:hidden; white-space : nowrap; height:" + (_isIE ? 20 : 19) + "px;'>";
            d.itemim = "<span " + (_isFF ? "style='position:relative; top:2px;'" : "") + "id='nodeval'>";
            d.close = "</span><div class='property_space'></div></div>";
            this.grid._tgc = d
        }
        var e = this.grid._h2;
        var d = this.grid._tgc;
        var c = this.cell.parentNode.idd;
        var f = this.grid._h2.get[c];
        if (this.grid.kidsXmlFile || this.grid._slowParse) {
            f.has_kids = (f.has_kids || (this.cell.parentNode._attrs.xmlkids && (f.state != "minus")));
            f._xml_await = !!f.has_kids
        }
        f.image = f.image || (this.cell._attrs.image || "leaf.gif");
        f.label = a;
        var b = [d.start];
        if (f.has_kids) {
            b.push(d.plus);
            f.state = "plus"
        } else {
            b.push(d.imst + f.state + ".gif" + d.imact + d.itemim)
        }
        b.push(f.label);
        b.push(d.close);
        this.cell.innerHTML = b.join("");
        this.cell.style.paddingLeft = "0px";
        this.cell.parentNode.imgTag = this.cell.childNodes[0].childNodes[0];
        this.cell.parentNode.valTag = this.cell.childNodes[0].childNodes[1];
        if (f.childs.length) {
            this.grid.getRowById(this.cell.parentNode.idd)._attrs["class"] = " dhx_parent_row ";
            this.cell.nextSibling.style.borderLeft = "1px solid #D4D0C8"
        }
        if (_isKHTML) {
            this.cell.vAlign = "top"
        }
        if (f.parent.id != 0 && f.parent.state == "plus") {
            this.grid._updateTGRState(f.parent, false);
            this.cell.parentNode._skipInsert = true
        }
        this.grid.callEvent("onCellChanged", [c, this.cell._cellIndex, a])
    }
}
function eXcell_list(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.cell.innerHTML = "<select style='width:100%;' ></select>";
        this.obj = this.cell.firstChild;
        this.obj.onclick = function (f) {
            (f || event).cancelBubble = true
        };
        this.obj.onmousedown = function (f) {
            (f || event).cancelBubble = true
        };
        this.obj.onkeydown = function (g) {
            var f = (g || event);
            if (f.keyCode == 9 || f.keyCode == 13) {
                globalActiveDHTMLGridObject.entBox.focus();
                globalActiveDHTMLGridObject.doKey({keyCode: f.keyCode, shiftKey: f.shiftKey, srcElement: "0"});
                return false
            }
            f.cancelBubble = true
        };
        var b = this;
        this.obj.onchange = function () {
            b.grid.editStop();
            b = null
        };
        var d = this.getAttribute("values").split(",");
        for (var c = 0; c < d.length; c++) {
            this.obj.options[c] = new Option(d[c], d[c])
        }
        this.obj.value = this.cell._val;
        this.obj.focus()
    };
    this.getValue = function () {
        return this.cell._val
    };
    this.detach = function () {
        var c = this.obj.value;
        var b = this.obj.selectedIndex;
        this.setValue(b == -1 ? "" : this.obj.options[b].value);
        return c != this.getValue()
    }
}
eXcell_list.prototype = new eXcell;
eXcell_list.prototype.setValue = function (a) {
    this.cell._val = a;
    if (!a || a.toString()._dhx_trim() == "") {
        this.cell._clearCell = true;
        this.setCValue("&nbsp", "")
    } else {
        this.cell._clearCell = false;
        this.setCValue(this.grid._aplNF(a, this.cell._cellIndex))
    }
};
function dhtmlXPropertyGrid(a) {
    var b;
    if (a.objBox) {
        b = a
    } else {
        b = new dhtmlXGridObject(a)
    }
    b.setHeader("Name,Value");
    b.setColAlign("left,left");
    if (window.dhtmlxHierarchy) {
        b.setColTypes("tree_property,ro");
        b.isTreeGrid = function () {
            return true
        };
        b.enableSmartXMLParsing(false)
    } else {
        b.setColTypes("ro,ro")
    }
    b.setColSorting("na,na");
    b.setInitWidths("*,*");
    b.setNoHeader(true);
    b.setSkin("dhx_skyblue");
    b.entBox.className += " gridbox_property";
    b.i18n.validation_error = "Value is incorrect";
    b.attachEvent("onRowSelect", function (d, c) {
        if (!this.editor) {
            this.selectCell(this.getRowIndex(d), 1);
            this.editCell()
        }
    });
    b.attachEvent("onBeforeSelect", function (c) {
        if (this._block_selection) {
            return false
        }
        return true
    });
    b.attachEvent("onRowCreated", function (d, c) {
        if (!this._h2 || !this._h2.get[d].childs.length) {
            c.childNodes[1].style.backgroundColor = "white"
        }
    });
    b.attachEvent("onEditCell", function (f, j, h, e, g) {
        if (f == 1 && this.editor && this.editor.obj && this.editor.obj.select) {
            this.editor.obj.select()
        }
        if (f == 2 && g != e) {
            var i = this.cells(j, 1).getAttribute("validate");
            var c = true;
            switch (i) {
                case"int":
                    c = (parseFloat(e) == e);
                    break
            }
            if (c) {
                this._block_selection = false;
                this.callEvent("onPropertyChanged", [this.cells(j, 0).getValue(), e, g])
            } else {
                alert(this.i18n.validation_error);
                this._block_selection = true;
                var d = this;
                window.setTimeout(function () {
                    d.selectCell(j, h);
                    d.editCell()
                }, 1)
            }
        }
        return true
    });
    b._key_events.k13_0_0 = b._key_events.k9_0_0 = b._key_events.k40_0_0;
    b.getProperties = function () {
        this.editStop(true);
        var c = {};
        this.forEachRow(function (d) {
            c[this.cells(d, 0).getValue()] = this.cells(d, 1).getValue()
        });
        return c
    };
    b.setProperties = function (c) {
        this.editStop();
        this.forEachRow(function (e) {
            var d = this.cells(e, 0).getValue();
            if (typeof c[d] != "undefined") {
                this.cells(e, 1).setValue(c[d])
            }
        });
        this.callEvent("onPropertyChanged", [])
    };
    return b
}
dhtmlXForm.prototype.getItemsList = function () {
    var d = [];
    var c = [];
    for (var b in this.itemPull) {
        var e = null;
        if (this.itemPull[b]._group) {
            e = this.itemPull[b]._group
        } else {
            e = b.replace(this.idPrefix, "")
        }
        if (c[e] != true) {
            d.push(e)
        }
        c[e] = true
    }
    return d
};
dhtmlXForm.prototype.setItemText = function () {
    this.setItemLabel.apply(this, arguments)
};
dhtmlXForm.prototype.getItemText = function () {
    return this.getItemLabel.apply(this, arguments)
};
dhtmlXForm.prototype.loadStructString = function (b, a) {
    this.loadStruct(b, a)
};
dhtmlXAccordion.prototype.setEffect = function (a) {
};
dhtmlXAccordion.prototype.setIcon = function (b, a) {
    this.cells(b).setIcon(a)
};
dhtmlXAccordion.prototype.clearIcon = function (a) {
    this.cells(a).clearIcon()
};
dhtmlXAccordion.prototype.setActive = function (a) {
    this.cells(a).open()
};
dhtmlXAccordion.prototype.isActive = function (a) {
    return this.cells(a).isOpened()
};
dhtmlXAccordion.prototype.openItem = function (a) {
    this.cells(a).open()
};
dhtmlXAccordion.prototype.closeItem = function (a) {
    this.cells(a).close()
};
dhtmlXAccordion.prototype.moveOnTop = function (a) {
    this.cells(a).moveOnTop()
};
dhtmlXAccordion.prototype.setItemHeight = function (a) {
    this.cells(id).setHeight(a)
};
dhtmlXAccordion.prototype.setText = function (b, a) {
    this.cells(b).setText(a)
};
dhtmlXAccordion.prototype.getText = function () {
    return this.cells(id).getText()
};
dhtmlXAccordion.prototype.showItem = function (a) {
    this.cells(a).show()
};
dhtmlXAccordion.prototype.hideItem = function (a) {
    this.cells(a).hide()
};
dhtmlXAccordion.prototype.isItemHidden = function (a) {
    return !this.cells(a).isVisible()
};
dhtmlXAccordion.prototype.loadJSON = function (a, b) {
    this.loadStruct(a, b)
};
dhtmlXAccordion.prototype.loadXML = function (a, b) {
    this.loadStruct(a, b)
};
dhtmlXAccordion.prototype.setSkinParameters = function (a, b) {
    if (a != null) {
        this.setOffset(a)
    }
};
dhtmlXLayoutObject.prototype.listViews = function () {
    return this.listPatterns()
};
dhtmlXLayoutObject.prototype.setEffect = function () {
};
dhtmlXLayoutObject.prototype.getEffect = function () {
};
dhtmlXLayoutObject.prototype.dockWindow = function (a) {
    this.cells(a).dock()
};
dhtmlXLayoutObject.prototype.unDockWindow = function (a) {
    this.cells(a).undock()
};
dhtmlXLayoutObject.prototype.setCollapsedText = function (b, a) {
    this.cells(b).setCollapsedText(a)
};
dhtmlXLayoutObject.prototype.getIdByIndex = function (a) {
    if (a < 0 || a > this.items.length - 1) {
        return null
    }
    var b = null;
    this.forEachItem(function (c) {
        if (b == null && c == this.items[a]) {
            b = c.conf.name
        }
    });
    return b
};
dhtmlXLayoutObject.prototype.getIndexById = function (d) {
    var a = this.cells(d);
    var b = -1;
    for (var c = 0; c < this.items.length; c++) {
        if (a == this.items[c]) {
            b = c
        }
    }
    return b
};
dhtmlXLayoutObject.prototype.showPanel = function (a) {
    this.cells(a).showHeader()
};
dhtmlXLayoutObject.prototype.hidePanel = function (a) {
    this.cells(a).hideHeader()
};
dhtmlXLayoutObject.prototype.isPanelVisible = function (a) {
    return this.cells(a).isHeaderVisible()
};
dhtmlXLayoutObject.prototype.setImagePath = function () {
};
dhtmlXLayoutCell.prototype.getIndex = function () {
    return this.conf.index
};
dhtmlXTabBar.prototype.destructor = function () {
    this.unload()
};
dhtmlXTabBar.prototype.normalize = function () {
};
dhtmlXTabBar.prototype.setStyle = function () {
};
dhtmlXTabBar.prototype.setContent = function (b, a) {
    this.cells(b).attachObject(a)
};
dhtmlXTabBar.prototype.setContentHTML = function (b, a) {
    this.cells(b).attachHTMLString(a)
};
dhtmlXTabBar.prototype.setHrefMode = function (a) {
    this._hrfmode = a
};
dhtmlXTabBar.prototype.setContentHref = function (b, a) {
    if (!this._hrfmode) {
        this._hrfmode = "iframe"
    }
    switch (this._hrfmode) {
        case"iframes":
        case"iframe":
        case"iframes-on-demand":
            this.cells(b).attachURL(a);
            break;
        case"ajax":
        case"ajax-html":
            this.cells(b).attachURL(a, true);
            break
    }
};
dhtmlXTabBar.prototype.setMargin = function () {
};
dhtmlXTabBar.prototype.setOffset = function () {
};
dhtmlXTabBar.prototype.setImagePath = function (b, a) {
};
dhtmlXTabBar.prototype.setSkinColors = function (b, a) {
};
dhtmlXTabBar.prototype.tabWindow = function (a) {
    return this.cells(a).getFrame()
};
dhtmlXTabBar.prototype.setCustomStyle = function () {
};
dhtmlXTabBar.prototype.enableScroll = function () {
};
dhtmlXTabBar.prototype.enableForceHiding = function () {
};
dhtmlXTabBar.prototype.setSize = function (a, b) {
    this.base.style.width = a + "px";
    this.base.style.height = b + "px";
    this.setSizes()
};
dhtmlXTabBar.prototype.enableAutoSize = function () {
};
dhtmlXTabBar.prototype.adjustOuterSize = function () {
    this.setSizes()
};
dhtmlXTabBar.prototype.showInnerScroll = function (c) {
    for (var b in this.t) {
        if (c == null || c == b) {
            this.t[b].cell.showInnerScroll()
        }
    }
};
dhtmlXTabBar.prototype.loadXML = function (a, b) {
    this.loadStruct.apply(this, [a, b])
};
dhtmlXTabBar.prototype.loadXMLString = function (b, a) {
    this.loadStruct.apply(this, [b, a])
};
dhtmlXTabBar.prototype.hideTab = function (b, a) {
    this.tabs(b).hide(a)
};
dhtmlXTabBar.prototype.showTab = function (b, a) {
    this.tabs(b).show(a)
};
dhtmlXTabBar.prototype.enableTab = function (a) {
    this.tabs(a).enable()
};
dhtmlXTabBar.prototype.disableTab = function (a) {
    this.tabs(a).disable()
};
dhtmlXTabBar.prototype.getIndex = function (a) {
    return this.tabs(a).getIndex()
};
dhtmlXTabBar.prototype.getLabel = function (a) {
    return this.tabs(a).getText()
};
dhtmlXTabBar.prototype.setLabel = function (b, a) {
    this.tabs(b).setText(a)
};
dhtmlXTabBar.prototype.setTabActive = function (a) {
    this.tabs(a).setActive()
};
dhtmlXTabBar.prototype.removeTab = function (a) {
    this.tabs(a).close()
};
dhtmlXTabBar.prototype.forceLoad = function (a) {
    this.tabs(a).reloadURL()
};
dhtmlXWindows.prototype.enableAutoViewport = function () {
};
dhtmlXWindows.prototype.setImagePath = function () {
};
dhtmlXWindows.prototype.setEffect = function () {
};
dhtmlXWindows.prototype.getEffect = function () {
};
dhtmlXWindowsCell.prototype.setToFullScreen = function () {
};
dhtmlXWindowsCell.prototype.setIcon = function () {
};
dhtmlXWindowsCell.prototype.getIcon = function () {
};
dhtmlXWindowsCell.prototype.restoreIcon = function () {
};
dhtmlXWindowsCell.prototype.clearIcon = function () {
};