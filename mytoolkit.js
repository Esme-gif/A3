import {SVG} from './svg.min.js';

var radiolength = []
var MyToolkit = (function() {
    var Container = function(){
        var draw = SVG().addTo('body').size('1000px','1000px');
        var frame = draw.group();
        frame.rect(500,500).stroke("orange").fill("white")
        return [draw, frame];
    }

    var Button = function(draw, frame){
        var button = draw.group();
        var rect = button.rect(100,50).fill('blanchedalmond').radius(10)
        var clickEvent = null
        var stateEvent = null
        var defaultState = "idle"
    
        rect.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultState = "hover"
            transition()
        })
        rect.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultState = "clicked"
            transition()
        })
        rect.mouseout(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultState = "idle"
            transition()
        })
        rect.mouseup(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultState = "idle"
            transition()
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })

        function transition()
        {
            if (stateEvent != null){
                stateEvent(defaultState)
            }
        }
        
        frame.add(button);
        return {
            move: function(x, y) {
                button.move(x, y);
            },
            customText: function(custom){
                button.text(custom).font({size: 25}).move(25, 10);
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
    
    var TextBox = function(draw, frame){
        var textbox = draw.group();
        var rectT = textbox.rect(200, 30).fill("white").stroke("black")
        var textT = textbox.text("").move(2,0);
        var caret = textbox.rect(2,20).move(2,4)
        var runner = caret.animate().width(0)
        runner.loop(1000, 1, 0)

        var textEv = null
        var stateEv = null
        var defaultSt = "idle"
        

        rectT.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultSt = "hover"
            transtitioning()
        })
        rectT.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultSt = "pressed"
            transtitioning()
        })
        rectT.mouseout(function(){
            this.fill({ color: 'white'})
            defaultSt = "idle"
            transtitioning()
        })
        rectT.mouseup(function(){
            this.fill({ color: 'white'})
            defaultSt = "idle"
            transtitioning()
        })

        SVG.on(window, 'keyup', (event)=>{
            if (event.key.length == 1){
                if (caret.x() < 277)
                    textT.text(textT.text() + event.key)
                    caret.x(textT.length()+ 93)
                    defaultSt = "Adding Text"
                    transtitioning()
                    if(textEv != null)
                        textEv(event)
            }
            else if (event.key == "Backspace"){
                textT.text(textT.text().slice(0,-1))
                caret.x(textT.length()+ 93)
            }
        })

        function transtitioning(){
            if (stateEv != null){
                stateEv(defaultSt)
            }
        }

        frame.add(textbox);
        return {
            move: function(x,y){
                textbox.move(x,y)
            },
            stateChanged: function(eventHandler){
                stateEv = eventHandler
            },
            onTextChange: function(eventHandler){
                textEv = eventHandler
            }
        }
    }

    var Checkbox = function(draw, frame){
        var checkbox = draw.group();
        var rectC = checkbox.rect(30,30).fill('white').stroke({ width: 3, color: "black" }).move(2,4)
        var defaultS = "unchecked"
        var clickE = null
        var stateE = null
        var filled = false
        

        rectC.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultS = "hover"
            transitions()
        })
        rectC.mousedown(function(){
            if (filled == false) {
                defaultS = "checked"
                filled = true
                this.fill({ color: 'blanchedalmond'})
            }
            else{
                defaultS = "unchecked"
                filled = false
                this.fill({ color: 'white'})
            }
            transitions()
        })

        rectC.mouseout(function(){
            if (filled == false) {
                this.fill({ color: 'white'})
            }
            else{
                this.fill({ color: 'blanchedalmond'})
            }
            transitions()
        })
        rectC.mouseup(function(){
            if (filled == false) {
                this.fill({ color: 'white'})
            }
            else{
                this.fill({ color: 'blanchedalmond'})
            }
            transitions()
        })
        
        rectC.click(function(event){
            this.fill({ color: 'pink'})
            if (filled) {
                if(clickE != null)
                    clickE(event)
            }
        })

        function transitions()
        {
            if (stateE != null){
                stateE(defaultS)
            }
        }
        frame.add(checkbox);
        return {
            move: function(x, y) {
                checkbox.move(x, y);
            },
            customText: function(custom){
                checkbox.text(custom).move(50,6);
            },
            stateChanged: function(eventHandler){
                stateE = eventHandler
            },
            onchecked: function(eventHandler){
                clickE = eventHandler
            }
        }
    }

    var RadioB = function(draw, frame, nRadio){
        var radbutton = draw.group();
        var recttt = []
        for (let i = 0; i < nRadio.length; i++){
            radiolength.push(nRadio[i][1]);
        }
        
        for (let i = 0; i < nRadio.length; i++){
            recttt.push(new WidgetParent(nRadio[i][0], radbutton, i, draw));
        }
        //var rectMR = radbutton.rect(90,40).fill('white').stroke({width : 3, color : "black" })
        //var rectOne = radbutton.circle(20).fill('white').stroke({width : 2, color : "black"}).move(4,10)
        //var textOne = radbutton.text("dogs").move(45,10);
        
        frame.add(radbutton);
        return {
            move: function(x,y){
                radbutton.move(x,y)
            }
        }
    }

    var ProgressBar = function(draw, frame){
        var progressBar = draw.group();
        var rectP = progressBar.rect(200, 20).fill("white").stroke("black").radius(10)
        var rectPB = progressBar.rect(200,27).fill("blanchedalmond").radius(10).move(0,1)

        var addButton = draw.group() //supports 0 - 100
        var addRect = addButton.rect(30,30).fill("white").stroke({ width: 2, color: "black" }).radius(10)
        var line = addButton.line(0, 0, 20, 0).move(5, 15)
        line.stroke({ color: 'black', width: 3, linecap: 'round' })
        var line = addButton.line(0, 20, 0, 0).move(15, 5)
        line.stroke({ color: 'black', width: 3, linecap: 'round' })

        
        progressBar.add(addButton)

        var subButton = draw.group() //supports 0 - 100
        var subRect = subButton.rect(30,30).fill("white").stroke({ width: 2, color: "black" }).radius(10)
        var subline = subButton.line(0, 0, 20, 0).move(5, 15)
        subline.stroke({ color: 'black', width: 3, linecap: 'round' })
        
        progressBar.add(subButton)

        var defaultStt = "idle"
        var maxSize = 200
        
        var getIncrement = false
        

        var incremented = 5
        

        var iEvent = null
        var sEvent = null
    
        addRect.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultStt = "hover"
            GetState()
        })
        addRect.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultStt = "increase increment"
            GetState()
        })
        addRect.mouseout(function(){
            this.fill({ color: 'white'})
            defaultStt = "idle"
            GetState()
        })
        addRect.mouseup(function(){
            this.fill({ color: 'white'})
            defaultStt = "idle"
            GetState()
        })
        addRect.click(function(event){
            this.fill({ color: 'pink'})
            if (incremented < 100){
                incremented = 1 + incremented
            }
            if (getIncrement){
                console.log(incremented)
            }
            if(iEvent != null)
                iEvent(event)
        })

        subRect.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultStt = "hover"
            GetState()
        })
        subRect.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultStt = "decreasing increment"
            GetState()
        })
        subRect.mouseout(function(){
            this.fill({ color: 'white'})
            defaultStt = "idle"
            GetState()
        })
        subRect.mouseup(function(){
            this.fill({ color: 'white'})
            defaultStt = "idle"
            GetState()
        })
        subRect.click(function(event){
            this.fill({ color: 'pink'})
            if (0 < incremented){
                incremented = incremented - 1
            }
            if (getIncrement){
                console.log(incremented)
            }
            if(iEvent != null)
                iEvent(event)
        })


        function GetState()
        {
            if (sEvent != null){
                sEvent(defaultStt)
            }
        }
        
        var myVar = setInterval(myTimer, 1000);

        function myTimer() {
            if (incremented <= maxSize && incremented != 0){
                if(incremented == 100){
                    rectPB.size(maxSize,18)
                }
                else{
                    rectPB.size((maxSize*incremented)/100,18)
                }
            }
            else{
                rectPB.size(0,18)
            }
        }

        frame.add(progressBar);
        return {
            widthSet: function(setX){
                rectP.size(setX,20)
                rectPB.size(setX,18)
                addButton.move(setX,-5)
                subButton.move(-30,-5)
                maxSize = setX
                
            },
            setIncrement: function(value){
                incremented = value;
            },
            getValue: function(yes_no){
                getIncrement = yes_no;
            },
            move: function(x,y){
                progressBar.move(x,y)
            },
            stateChanged: function(eventHandler){
                sEvent = eventHandler
            },
            onIncrement: function(eventHandler){
                iEvent = eventHandler
            }
        }
    }

    var ScrollBar = function(draw, frame){
        var scrollBar = draw.group();
        var rectSB = scrollBar.rect(30, 200).fill("white").stroke("black").radius(10)
        var rectSRect = scrollBar.rect(29,60).fill("blanchedalmond").radius(10).move(1,1)

        var rectUp = scrollBar.rect(29,29).fill('white').stroke({width : 2, color : "black"}).radius(10)
        
        var arrowUP = draw.group();
        var arrowup1 = arrowUP.line(0, 10, 10, 0).move(20, 20)
        arrowup1.stroke({ color: 'black', width: 3, linecap: 'round' })
        var arrowup2 = arrowUP.line(0, 0, 10, 10).move(30, 20)
        arrowup2.stroke({ color: 'black', width: 3, linecap: 'round' })

       
        scrollBar.add(arrowUP);
        
        var rectDown = scrollBar.rect(29,29).fill('white').stroke({width : 2, color : "black"}).radius(10)

        var arrowDown = draw.group();
        var arrowd1 = arrowDown.line(0, 10, 10, 0).move(30, 20)
        arrowd1.stroke({ color: 'black', width: 3, linecap: 'round' })
        var arrowd2 = arrowDown.line(0, 0, 10, 10).move(20, 20)
        arrowd2.stroke({ color: 'black', width: 3, linecap: 'round' })

       
        scrollBar.add(arrowDown);

        var defaultState = "idle"
        var moveEvent = null
        var stateEvent = null
        var direction = ""
        var maxLength = 200
        var getposition = false

        rectUp.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultState = "hover"
            transition()
        })
        rectUp.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultState = "Moving UP"
            if (rectSRect.y() > 65){
                if ((rectSRect.y() - 5) > 65){
                    rectSRect.y(rectSRect.y() - 5)
                }
                else{
                    rectSRect.y(65)
                }
                if (getposition){
                    if (rectSRect.y() < (maxLength/2)){
                        console.log("upper half");
                    }
                    else{
                        console.log("lower half");
                    }
                }
            }
            transition()
        })
        rectUp.mouseout(function(){
            this.fill({ color: 'white'})
            defaultState = "idle"
            transition()
        })
        rectUp.mouseup(function(){
            this.fill({ color: 'white'})
            defaultState = "idle"
            transition()
        })
        rectUp.click(function(event){
            this.fill({ color: 'pink'})
            direction = "UP"
            console.log(direction);
            if(moveEvent != null)
                moveEvent(event)
        })


        rectDown.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultState = "hover"
            transition()
        })
        rectDown.mousedown(function(){
            this.fill({ color: 'blanchedalmond'})
            defaultState = "Moving Down"
            
            if (rectSRect.y() < maxLength){
                if ((rectSRect.y() + 5) < maxLength){
                    rectSRect.y(rectSRect.y() + 5)
                }
                else{
                    rectSRect.y(maxLength)
                }
                if (getposition){
                    if (rectSRect.y() < (maxLength/2)){
                        console.log("upper half");
                    }
                    else{
                        console.log("lower half");
                    }
                }
            }
            transition()
        })
        rectDown.mouseout(function(){
            this.fill({ color: 'white'})
            defaultState = "idle"
            transition()
        })
        rectDown.mouseup(function(){
            this.fill({ color: 'white'})
            defaultState = "idle"
            transition()
        })
        rectDown.click(function(event){
            this.fill({ color: 'pink'})
            direction = "DOWN"
            console.log(direction);
            if(moveEvent != null)
                moveEvent(event)
        })



        function transition()
        {
            if (stateEvent != null){
                stateEvent(defaultState)
            }
        }

        frame.add(scrollBar);
        return {
            move: function(x,y){
                scrollBar.move(x,y)
            },
            heightSet: function(setY){
                rectSB.size(30,setY)
                rectUp.move(1,-35)
                arrowUP.move(5,-26)
                rectDown.move(1,setY+5)
                arrowDown.move(5,setY+15)
                maxLength = setY+5
            },
            getPosition(yes_no){
                getposition = yes_no;
            },
            onMovement: function(event){
                moveEvent = event;
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            }
        }
    }
return {Container, Button, TextBox, Checkbox, RadioB, ProgressBar, ScrollBar}
}());


class WidgetParent{
    constructor(text, radbutton, position, draw){
        
        var grouped = draw.group();
        var rectone = grouped.circle(20).fill('white').stroke({width : 2, color : "black"}).move(4,10)
        var rectOne = grouped.circle(14).fill('white').move(7,13)
        if (radiolength[position]){
            rectOne.fill("black")
        }
        var textOne = grouped.text(text).move(45,10)

        grouped.move(10,(10 + (30 * position)));

        this.clickEvent = null
        this.stateEvent = null
        this.defaultState = "idle"
        
    
        rectOne.mouseover(function(){
            this.fill({ color: 'beige'})
            defaultState = "hover"
            transition()
        })
        rectOne.mousedown(function(){
            
            if (radiolength[position] == false){
                for (let i = 0; i < radiolength.length; i++){
                    if (radiolength[i]){
                        radiolength[i] = false;
                    }
                }
                radiolength[position] = true;

                this.fill({ color: 'black'})
                defaultState = "checked"
            }
            console.log(radiolength)
            transition()
        })
        rectOne.mouseout(function(){
            if (radiolength[position] == false){
                this.fill({ color: 'white'})
            }
            else{
                this.fill({ color: 'black'})
            }
            defaultState = "idle"
            transition()
        })
        rectOne.mouseup(function(){
            if (radiolength[position] == false){
                this.fill({ color: 'white'})
            }
            else{
                this.fill({ color: 'black'})
            }
            defaultState = "idle"
            transition()
        })
        rectOne.mousemove(function(){
            if (radiolength[position] == false){
                this.fill({ color: 'white'})
            }
            else{
                this.fill({ color: 'black'})
            }
        })
        rectOne.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })

        function transition()
        {
            if (stateEvent != null){
                stateEvent(defaultState)
            }
        }
        

        radbutton.add(grouped)


    }

    

}

export{MyToolkit}