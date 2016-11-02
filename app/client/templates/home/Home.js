Template.Home.onRendered(function() {
    
    skrollr.init({
        constants: {
            //fill the box for a "duration" of 150% of the viewport (pause for 150%)
            //adjust for shorter/longer pause
            box: '100p',
            two: '200p'
        }
    });
    
    //Setup a session variable for the length of the presentation
    Session.set('presLength',8);
    
    //Setup a session variable for storing our position in the presentation
    Session.set('slidePos',0);
    
    
    $(document).ready(function() {  
        $("#main-content > .row").niceScroll().resize();
    });
    
})

//Setting up listener for keypress

globalHotKeys = new Hotkeys();


//Adding the keypress listeners

globalHotKeys.add({
    combo: "right",
    callback: function(){
        console.log("you pressed right!")
        x = Session.get('slidePos')
        y = Session.get('presLength')
        
        //Make sure we can't go past the length of the presentation
        if(x < y){
            x = x + 1
        }
        Session.set('slidePos', x);
        
        //Set some variables
        winHeight = document.body.scrollHeight-34
        slideHeight = winHeight/Session.get('presLength')
        currentSlide = Session.get('slidePos')
        
        //Doing some stupid stuff with the second slide to handle the navbar height
        
        window.scrollTo(0,slideHeight*currentSlide)
        
        //I removed the NavBar for the time being so we don't need this
        
//        if(currentSlide === 1 || 6){
//            window.scrollTo(0, slideHeight*currentSlide-60)
//        } else {
//            window.scrollTo(0, slideHeight*currentSlide)
//        }
    }
})

globalHotKeys.add({
    combo: "left",
    callback: function(){
        console.log("you pressed left!")
        x = Session.get('slidePos')
        
        //Make sure we can't go past the beginning of the presentation
        if(x > 0){
            x = x-1
        } else {
            x = 0
        }
        Session.set('slidePos', x);
        
        //Set some variables
        winHeight = document.body.scrollHeight-34
        slideHeight = winHeight/Session.get('presLength')
        currentSlide = Session.get('slidePos')
        
        //Doing some stupid stuff with the second slide to handle the navbar height
        
        window.scrollTo(0, slideHeight*currentSlide-1)
        
        //I removed the NavBar for the time being so we don't need this
        
//        if(currentSlide === 1 || 6){
//            window.scrollTo(0, slideHeight*currentSlide-60)
//        } else {
//            window.scrollTo(0, slideHeight*currentSlide-1)
//        }
    }
})

//We need to check for scrolling to adjust our position variable
$(window).on('scroll', function(e){
    //Grab the distance from the top
    x = document.body.scrollTop
    y = document.body.scrollHeight/Session.get('presLength')
    
    Session.set('slidePos', Math.round(x/y))
})

Template.Home.events({
    
})


Template.Home.helpers({
// Keeping this for when I build the role/user dropdowns.
//    dbClients() {
//        //grab the unique dateOf values from the database
//        var cursor = Clients.find().fetch();
//        var distinct = _.uniq(cursor, false, function(d) {return d.friendlyName});
//        var dValues = _.pluck(distinct, 'friendlyName');
//        
//        //Spacebars expects an array of objects for iteration, so let's make one!
//        var uniqueValues = []
//        
//        for(i in dValues){
//            uniqueValues.push({ friendlyName: dValues[i]})
//        }
//        
//        //return to use in the Template
//        return uniqueValues;
//    }
});




