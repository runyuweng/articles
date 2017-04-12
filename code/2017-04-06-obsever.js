//发布者
var publisher = {
    subscribers : {
        any: []
    },
    subscribe: function(fn, type){
        type = type || 'any';
        if(typeof this.subscribers[type] === "undefined"){
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    unsubscribe: function(fn, type){
        this.visitSubscribers('unsubscribe', fn, type);
    },
    publish: function(publication, type){
        this.visitSubscribers('publish', publication, type);
    },
    visitSubscribers: function(action, arg, type){
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;
        for (var i = 0; i < max; i++) {
            if(action === 'publish'){
                subscribers[i](arg);
            }else{
                if(subscribers[i] === arg){
                    subscribers.splice(i, 1);
                }
            }
        }
    }
}



//创建发布者
function makePublisher(o){
    var i;
    for(i in publisher){
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any : []};
}

var paper = {
    daily: function(){
        this.publish("big news today");
    },
    monthly: function(){
        this.publish("interesting analysis");
    }
}

makePublisher(paper);

//订阅者
var joe = {
    drink: function(paper){
        console.log('Just read '+ paper);
    },
    sunday:function(monthly){
        console.log('sd '+ monthly);
    }
}


paper.subscribe(joe.drink);
paper.subscribe(joe.sunday, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.daily();
