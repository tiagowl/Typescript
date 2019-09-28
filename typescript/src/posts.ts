
class EventManager{

    private listeners = {};

    addListener(eventName, callable){
        if(!(this.listeners[eventName] instanceof Array)){
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    }

    runEvent(eventName){
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }

}

class Boxlist{

    static boxId:string = 'box-post-list';
    private buttonListSelector = '#${Boxlist.boxId}>button[type=button]';

    constructor(private eventManager: EventManager){
        this.init();
    }

    private init(){
        const buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', () => {
            this.hiddenBox();

            this.eventManager.runEvent('box-post-list-click-hidden');
        });

        this.eventManager.addListener('box-post-form-click-hidden', ()=>{
            this.showBox();
        })
    }

    hiddenBox(){
        const boxlist = document.getElementById(Boxlist.boxId);
        boxlist.style.display = 'none';
    }

    showBox(){
        const boxlist = document.getElementById(Boxlist.boxId);
        boxlist.removeAttribute("style");
    }
}

class BoxPostForm{

    static boxId:string = 'box-post-form';
    private buttonListSelector = '#${BoxPostForm.boxId}>button[type=button]';

    constructor(private eventManager: EventManager){
        this.init();
    }

    private init(){
        const buttonForm = document.querySelector(this.buttonListSelector);
        buttonForm.addEventListener('click', () => {
            this.hiddenBox();

            this.eventManager.runEvent('box-post-form-click-hidden');
        });
    }

    hiddenBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    }

    showBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute("style");
    }

}

const eventManager = new EventManager();
new BoxPostForm(eventManager);
new Boxlist(eventManager);