var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = {};
    }
    EventManager.prototype.addListener = function (eventName, callable) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    EventManager.prototype.runEvent = function (eventName) {
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
var Boxlist = /** @class */ (function () {
    function Boxlist(eventManager) {
        this.eventManager = eventManager;
        this.buttonListSelector = '#${Boxlist.boxId}>button[type=button]';
        this.init();
    }
    Boxlist.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent('box-post-list-click-hidden');
        });
        this.eventManager.addListener('box-post-form-click-hidden', function () {
            _this.showBox();
        });
    };
    Boxlist.prototype.hiddenBox = function () {
        var boxlist = document.getElementById(Boxlist.boxId);
        boxlist.style.display = 'none';
    };
    Boxlist.prototype.showBox = function () {
        var boxlist = document.getElementById(Boxlist.boxId);
        boxlist.removeAttribute("style");
    };
    Boxlist.boxId = 'box-post-list';
    return Boxlist;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm(eventManager) {
        this.eventManager = eventManager;
        this.buttonListSelector = '#${BoxPostForm.boxId}>button[type=button]';
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonListSelector);
        buttonForm.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent('box-post-form-click-hidden');
        });
    };
    BoxPostForm.prototype.hiddenBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute("style");
    };
    BoxPostForm.boxId = 'box-post-form';
    return BoxPostForm;
}());
var eventManager = new EventManager();
new BoxPostForm(eventManager);
new Boxlist(eventManager);
