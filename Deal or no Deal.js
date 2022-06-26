let Koffer1 = document.getElementById("Koffer1")
let Koffer2 = document.getElementById("Koffer2")
let Koffer3 = document.getElementById("Koffer3")
let Koffer4 = document.getElementById("Koffer4")
let Koffer5 = document.getElementById("Koffer5")
let Koffer6 = document.getElementById("Koffer6")
let Koffer7 = document.getElementById("Koffer7")
let Koffer8 = document.getElementById("Koffer8")
let Koffer9 = document.getElementById("Koffer9")
let Koffer10 = document.getElementById("Koffer10")
let Koffer11 = document.getElementById("Koffer11")
let Koffer12 = document.getElementById("Koffer12")
let Koffer13 = document.getElementById("Koffer13")
let Koffer14 = document.getElementById("Koffer14")
let Koffer15 = document.getElementById("Koffer15")
let Koffer16 = document.getElementById("Koffer16")
let Koffer17 = document.getElementById("Koffer17")
let Koffer18 = document.getElementById("Koffer18")
let Koffer19 = document.getElementById("Koffer19")
let Koffer20 = document.getElementById("Koffer20")
let Koffer21 = document.getElementById("Koffer21")
let Koffer22 = document.getElementById("Koffer22")
let Koffer23 = document.getElementById("Koffer23")
let Koffer24 = document.getElementById("Koffer24")
let Koffer25 = document.getElementById("Koffer25")
let Koffer26 = document.getElementById("Koffer26")
let HauptNummer = 0;

Koffer1.addEventListener("click",Koffer1Click)
Koffer2.addEventListener("click",Koffer2Click)
Koffer3.addEventListener("click",Koffer3Click)
Koffer4.addEventListener("click",Koffer4Click)
Koffer5.addEventListener("click",Koffer5Click)
Koffer6.addEventListener("click",Koffer6Click)
Koffer7.addEventListener("click",Koffer7Click)
Koffer8.addEventListener("click",Koffer8Click)
Koffer9.addEventListener("click",Koffer9Click)
Koffer10.addEventListener("click",Koffer10Click)
Koffer11.addEventListener("click",Koffer11Click)
Koffer12.addEventListener("click",Koffer12Click)
Koffer13.addEventListener("click",Koffer13Click)
Koffer14.addEventListener("click",Koffer14Click)
Koffer15.addEventListener("click",Koffer15Click)
Koffer16.addEventListener("click",Koffer16Click)
Koffer17.addEventListener("click",Koffer17Click)
Koffer18.addEventListener("click",Koffer18Click)
Koffer19.addEventListener("click",Koffer19Click)
Koffer20.addEventListener("click",Koffer20Click)
Koffer21.addEventListener("click",Koffer21Click)
Koffer22.addEventListener("click",Koffer22Click)
Koffer23.addEventListener("click",Koffer23Click)
Koffer24.addEventListener("click",Koffer24Click)
Koffer25.addEventListener("click",Koffer25Click)
Koffer26.addEventListener("click",Koffer26Click)

let Euro1 = document.getElementById("1Euro")
let Euro5 = document.getElementById("5Euro")
let Euro10 = document.getElementById("10Euro")
let Euro15 = document.getElementById("15Euro")
let Euro25 = document.getElementById("25Euro")
let Euro50 = document.getElementById("50Euro")
let Euro75 = document.getElementById("75Euro")
let Euro100 = document.getElementById("100Euro")
let Euro200 = document.getElementById("200Euro")
let Euro300 = document.getElementById("300Euro")
let Euro400 = document.getElementById("400Euro")
let Euro500 = document.getElementById("500Euro")
let Euro750 = document.getElementById("750Euro")
let Euro1Tausend = document.getElementById("1Tausend")
let Euro5Tausend = document.getElementById("5Tausend")
let Euro10Tausend = document.getElementById("10Tausend")
let Euro25Tausend = document.getElementById("25Tausend")
let Euro50Tausend = document.getElementById("50Tausend")
let Euro75Tausend = document.getElementById("75Tausend")
let Euro100Tausend = document.getElementById("100Tausend")
let Euro200Tausend = document.getElementById("200Tausend")
let Euro300Tausend = document.getElementById("300Tausend")
let Euro400Tausend = document.getElementById("400Tausend")
let Euro500Tausend = document.getElementById("500Tausend")
let Euro750Tausend = document.getElementById("750Tausend")
let Mio = document.getElementById("1Mio")

let TextField = document.getElementById("News")
let ValueFirstChoice;
let FirstChoiceSet = false;
let FirstChoise
let Available1 = true,Available2 = true,Available3 = true,Available4 = true,Available5 = true,Available6 = true,Available7 = true,Available8 = true,Available9 = true,Available10 = true,Available11 = true,Available12 = true,Available13 = true,Available14 = true,Available15 = true,Available16 = true,Available17 = true,Available18 = true,Available19 = true,Available20 = true,Available21 = true,Available22 = true,Available23 = true,Available24 = true,Available25 = true,Available26 = true
let NumbersAvailable = 28;
let Zug = 0;

let Money1 = 1
let Money2 = 5
let Money3 = 10
let Money4 = 15
let Money5 = 25
let Money6 = 50
let Money7 = 75
let Money8 = 100
let Money9 = 200
let Money10 = 300
let Money11 = 400
let Money12 = 500
let Money13 = 750
let Money14 = 1000
let Money15 = 5000
let Money16 = 10000
let Money17 = 25000
let Money18 = 50000
let Money19 = 75000
let Money20 = 100000
let Money21 = 200000
let Money22 = 300000
let Money23 = 400000
let Money24 = 500000
let Money25 = 750000
let Money26 = 1000000

let GameDiv = document.getElementById("Game")

let KofferOffenDiv = document.createElement("div")
KofferOffenDiv.id="KofferOffenDiv"

let TellerStab = document.createElement("div")
TellerStab.id="TellerStab"
let Teller = document.createElement("div")
Teller.id="Teller"

let KofferOffenOben = document.createElement("div")
KofferOffenOben.id="KofferOffenOben"

let KofferOffenValue = document.createElement("div") 
KofferOffenValue.id="KofferOffenValue"

let KofferOffenUnten = document.createElement("div")
KofferOffenUnten.id="KofferOffenUnten"

KofferOffenDiv.appendChild(TellerStab)
KofferOffenDiv.appendChild(Teller)
KofferOffenDiv.appendChild(KofferOffenOben)
KofferOffenOben.appendChild(KofferOffenValue)
KofferOffenDiv.appendChild(KofferOffenUnten)

let OfferDiv = document.createElement("div")
OfferDiv.id="OfferDiv"
let DealersOffer = document.createElement("div")
DealersOffer.id="DealersOffer"
let OfferMoneyDiv = document.createElement("div")
OfferMoneyDiv.id="OfferMoneyDiv"
let OfferMoneyTextDiv = document.createElement("div")
OfferMoneyTextDiv.id="OfferMoneyTextDiv"
let OfferMoney = document.createElement("div")
OfferMoney.id="OfferMoney"
let TimerText = document.createElement("div")
TimerText.id="TimerText"
let Timer = document.createElement("div")
Timer.id="Timer"
let Deal = document.createElement("div")
Deal.id="Deal"
Deal.type = "button"
let NoDeal = document.createElement("div")
NoDeal.id="NoDeal"
NoDeal.type = "button"

DealersOffer.textContent="Dealer's Offer:"
TimerText.textContent="Time to decide:"
Deal.textContent="Deal"
NoDeal.textContent="No Deal"

let TimerToDecide="15"
OfferDiv.appendChild(OfferMoneyDiv)
OfferMoneyDiv.appendChild(DealersOffer)
DealersOffer.appendChild(OfferMoneyTextDiv)
OfferMoneyTextDiv.appendChild(OfferMoney)
OfferDiv.appendChild(TimerText)
TimerText.appendChild(Timer)
OfferDiv.appendChild(Deal)
OfferDiv.appendChild(NoDeal)

GeldLinks = document.getElementById("GeldLinks")
KofferDiv = document.getElementById("KofferDiv")
GeldRechts = document.getElementById("GeldRechts")

DealDiv=document.createElement("div")
DealDiv.id="DealDiv"
DealDivText=document.createElement("div")
DealDivText.id="DealDivText"
DealDiv.textContent="You won"
MoneyWonText=document.createElement("div")
MoneyWonText.id="MoneyWonText"
MoneyWonValue=document.createElement("div")
MoneyWonValue.id="MoneyWonValue"

DealDiv.appendChild(DealDivText)
DealDiv.appendChild(MoneyWonText)
DealDiv.appendChild(MoneyWonValue)

function RNG(){
    var X = Math.floor(Math.random()*26)+1;
    
    if(X==1){
        if(Available1==true){
            ValueFirstChoice = "1Euro"
                    Available1=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money1 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="1€"
                setTimeout(function(){
                    Euro1.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==2){
        if(Available2==true){
            ValueFirstChoice = "5Euro"
                    Available2=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money2 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="5€"
                setTimeout(function(){
                    Euro5.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==3){
        if(Available3==true){
            ValueFirstChoice = "10Euro"
                    Available3=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money3 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="10€"
                setTimeout(function(){
                    Euro10.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==4){
        if(Available4==true){
            ValueFirstChoice = "15Euro" 
            Available4=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money4 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="15€"
                setTimeout(function(){
                    Euro15.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==5){
        if(Available5==true){
            ValueFirstChoice = "25Euro"
                    Available5=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money5 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="25€"
                setTimeout(function(){
                    Euro25.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==6){
        if(Available6==true){
            ValueFirstChoice =  Available6=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money6 = 0;
                Money6 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="50€"
                setTimeout(function(){
                    Euro50.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==7){
        if(Available7==true){
            ValueFirstChoice = "75Euro"
            Available7=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money7 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="75€"
                setTimeout(function(){
                    Euro75.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==8){
        if(Available8==true){
            ValueFirstChoice = "100Euro"
                    Available8=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money8 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="100€"
                setTimeout(function(){
                    Euro100.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==9){
        if(Available9==true){
            ValueFirstChoice = "200Euro"
                    Available9=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money9 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="200€"
                setTimeout(function(){
                    Euro200.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==10){
        if(Available10==true){
            ValueFirstChoice = "300Euro";  
            Available10=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money10 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="300€"
                setTimeout(function(){
                    Euro300.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==11){
        if(Available11==true){
            ValueFirstChoice = "400Euro" 
            Available11=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money11 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="400€"
                setTimeout(function(){
                    Euro400.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==12){
        if(Available12==true){
            ValueFirstChoice = "500Euro"
            Available12=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money12 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="500€"
                setTimeout(function(){
                    Euro500.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==13){
        if(Available13==true){
            ValueFirstChoice = "750Euro"
            Available13=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money13 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="750€"
                setTimeout(function(){
                    Euro750.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==14){
        if(Available14==true){
            ValueFirstChoice = "1K" 
            Available14=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money14 = 0;
              GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="1.000€"
                setTimeout(function(){
                    Euro1Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==15){
        if(Available15==true){
            ValueFirstChoice = "5K"
            Available15=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money15 = 0;
              GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="5.000€"
                setTimeout(function(){
                    Euro5Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==16){
        if(Available16==true){
            ValueFirstChoice = "10K" 
            Available16=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money16 = 0;
               GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="10.000€"
                setTimeout(function(){
                    Euro10Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==17){
        if(Available17==true){
            ValueFirstChoice = "25K" 
            Available17=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money17 = 0;
               GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="25.000€"
                setTimeout(function(){
                    Euro25Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        } 
    }
    if(X==18){
        if(Available18==true){
            ValueFirstChoice = "50K" 
            Available18=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money18 = 0;
               GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="50.000€"
                setTimeout(function(){
                    Euro50Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==19){
        if(Available19==true){
            ValueFirstChoice = "75K"
            Available19=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money19 = 0;
               GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="75.000€"
                setTimeout(function(){
                    Euro75Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==20){
        if(Available20==true){
            ValueFirstChoice = "100K"
            Available20=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money20 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="100.000€"
                setTimeout(function(){
                    Euro100Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==21){
        if(Available21==true){
            ValueFirstChoice = "200K" 
            Available21=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money21 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="200.000€"
                setTimeout(function(){
                    Euro200Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==22){
        if(Available22==true){
            ValueFirstChoice = "300K" 
            Available22=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money22 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="300.000€"
                setTimeout(function(){
                    Euro300Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==23){
        if(Available23==true){
            ValueFirstChoice = "400K" 
            Available23=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money23 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="400.000€"
                setTimeout(function(){
                    Euro400Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==24){
        if(Available24==true){
            ValueFirstChoice = "500K" 
            Available24=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money24 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="500.000€"
                setTimeout(function(){
                    Euro500Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==25){
        if(Available25==true){
            ValueFirstChoice = "750K" 
            Available25=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money25 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="750.000€"
                setTimeout(function(){
                    Euro750Tausend.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
    if(X==26){
        if(Available26==true){
            ValueFirstChoice = "1Mio" 
            Available26=false;
            NumbersAvailable--;
            if(FirstChoiceSet==true){
                Money26 = 0;
                GameDiv.appendChild(KofferOffenDiv)
                KofferOffenValue.innerHTML ="1.000.000€"
                setTimeout(function(){
                    Mio.style.backgroundColor="gray"
                    GameDiv.removeChild(KofferOffenDiv)
                },2000);
            }
        }
        else{
            RNG();
        }
    }
}
function Offer(){
    TimerToDecide=15
    let OfferValue = 0
    OfferValue = Math.floor(((HauptNummer+Money1+Money2+Money3+Money4+Money5+Money6+Money7+Money8+Money9+Money10+Money11+Money12+Money13+Money14+Money15+Money16+Money17+Money18+Money19+Money20+Money21+Money22+Money23+Money24+Money25+Money26)/NumbersAvailable)/5)+1
    OfferMoney.textContent=OfferValue+"€"
    Timer.textContent=TimerToDecide
    GameDiv.appendChild(OfferDiv)
    GeldLinks.style.opacity = "10%"
    KofferDiv.style.opacity = "10%"
    GeldRechts.style.opacity = "10%"
    let DealButton = document.getElementById("Deal")
        DealButton.addEventListener("click",function(){
        GameDiv.removeChild(OfferDiv)
        GeldLinks.style.opacity = "100%"
        KofferDiv.style.opacity = "100%"
        GeldRechts.style.opacity = "100%"
        GameOver()
        function GameOver(){
            TextField.innerHTML="You won "+OfferMoney.textContent+"€"
            GameDiv.removeChild(GeldLinks)
            GameDiv.removeChild(GeldRechts)
            GameDiv.removeChild(KofferDiv)
            GameDiv.appendChild(DealDiv)
            MoneyWonValue.textContent=OfferMoney.textContent+"€"
        }
    })
    let NoDealButton = document.getElementById("NoDeal")
        NoDealButton.addEventListener("click",function(){
        clearInterval(Offerinterval)
        GameDiv.removeChild(OfferDiv)
        GeldLinks.style.opacity = "100%"
        KofferDiv.style.opacity = "100%"
        GeldRechts.style.opacity = "100%"
    })

    let Offerinterval = setInterval(function(){
        TimerToDecide--
        Timer.textContent=TimerToDecide
        if(TimerToDecide<=0){
            clearInterval(Offerinterval)
            GameDiv.removeChild(OfferDiv)
            GeldLinks.style.opacity = "100%"
            KofferDiv.style.opacity = "100%"
            GeldRechts.style.opacity = "100%"
        }
    },1000)
}
function setText(){
    if(Zug==0){
        TextField.innerHTML="choose 7 cases"
    }
    if(Zug==1){
        TextField.innerHTML="choose 6 cases"
    }
    if(Zug==2){
        TextField.innerHTML="choose 5 cases"
    }
    if(Zug==3){
        TextField.innerHTML="choose 4 cases"
    }
    if(Zug==4){
        TextField.innerHTML="choose 3 cases"
    }
    if(Zug==5){
        TextField.innerHTML="choose 2 cases"
    }
    if(Zug==6){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==7){
        TextField.innerHTML="choose 6 cases"
    }
    if(Zug==8){
        TextField.innerHTML="choose 5 cases"
    }
    if(Zug==9){
        TextField.innerHTML="choose 4 cases"
    }
    if(Zug==10){
        TextField.innerHTML="choose 3 cases"
    }
    if(Zug==11){
        TextField.innerHTML="choose 2 cases"
    }
    if(Zug==12){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==13){
        TextField.innerHTML="choose 4 cases"
    }
    if(Zug==14){
        TextField.innerHTML="choose 3 cases"
    }
    if(Zug==15){
        TextField.innerHTML="choose 2 cases"
    }
    if(Zug==16){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==17){
        TextField.innerHTML="choose 3 cases"
    }
    if(Zug==18){
        TextField.innerHTML="choose 2 cases"
    }
    if(Zug==19){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==20){
        TextField.innerHTML="choose 2 cases"
    }
    if(Zug==21){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==22){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==23){
        TextField.innerHTML="choose 1 cases"
    }
    if(Zug==24){
        TextField.innerHTML="choose your final case"
    }
}
function CheckZug(){
    if(Zug==7){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==13){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==17){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==20){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==22){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==23){
        setTimeout(function(){
            Offer();
        },2100)
    }
    if(Zug==24){
        setTimeout(function(){
            Offer();
        },2100)
    }
}
function Koffer1Click(){
    if(FirstChoiceSet==false){
        Koffer1.style.backgroundColor="gold"
        HauptNummer = 1;
        Koffer1.removeEventListener("click",Koffer1Click);
        FirstChoise=Koffer1
        RNG();
        setText();
        FirstChoiceSet=true;
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer1){
        RNG();
        Koffer1.removeEventListener("click",Koffer1Click)
        Koffer1.style.backgroundColor="transparent"
        Koffer1.style.color="transparent"
        Koffer1.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer2Click(){
    if(FirstChoiceSet==false){
        Koffer2.style.backgroundColor="gold"
        HauptNummer = 5;
        Koffer2.removeEventListener("click",Koffer2Click);
        FirstChoise=Koffer2
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer2){
        RNG();
        Koffer2.removeEventListener("click",Koffer2Click)
        Koffer2.style.backgroundColor="transparent"
        Koffer2.style.color="transparent"
        Koffer2.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer3Click(){
    if(FirstChoiceSet==false){
        Koffer3.style.backgroundColor="gold"
        HauptNummer = 1;
        Koffer3.removeEventListener("click",Koffer3Click);
        FirstChoise=Koffer3
        RNG();
        setText();
        HauptNummer = 10;
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer3){
        RNG();
        Koffer3.removeEventListener("click",Koffer3Click)
        Koffer3.style.backgroundColor="transparent"
        Koffer3.style.color="transparent"
        Koffer3.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer4Click(){
    if(FirstChoiceSet==false){
        Koffer4.style.backgroundColor="gold"
        HauptNummer = 15;
        Koffer4.removeEventListener("click",Koffer4Click);
        FirstChoise=Koffer4
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer4){
        RNG();
        Koffer4.removeEventListener("click",Koffer4Click)
        Koffer4.style.backgroundColor="transparent"
        Koffer4.style.color="transparent"
        Koffer4.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer5Click(){
    if(FirstChoiceSet==false){
        Koffer5.style.backgroundColor="gold"
        HauptNummer = 25;
        Koffer5.removeEventListener("click",Koffer5Click);
        FirstChoise=Koffer5
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer5){
        RNG();
        Koffer5.removeEventListener("click",Koffer5Click)
        Koffer5.style.backgroundColor="transparent"
        Koffer5.style.color="transparent"
        Koffer5.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer6Click(){
    if(FirstChoiceSet==false){
        Koffer6.style.backgroundColor="gold"
        HauptNummer = 50;
        Koffer6.removeEventListener("click",Koffer6Click);
        FirstChoise=Koffer6
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer6){
        RNG();
        Koffer6.removeEventListener("click",Koffer6Click)
        Koffer6.style.backgroundColor="transparent"
        Koffer6.style.color="transparent"
        Koffer6.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer7Click(){
    if(FirstChoiceSet==false){
        Koffer7.style.backgroundColor="gold"
        HauptNummer = 75;
        Koffer7.removeEventListener("click",Koffer7Click);
        FirstChoise=Koffer7
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer7){
        RNG();
        Koffer7.removeEventListener("click",Koffer7Click)
        Koffer7.style.backgroundColor="transparent"
        Koffer7.style.color="transparent"
        Koffer7.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer8Click(){
    if(FirstChoiceSet==false){
        Koffer8.style.backgroundColor="gold"
        HauptNummer = 100;
        Koffer8.removeEventListener("click",Koffer8Click);
        FirstChoise=Koffer8
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer8){
        RNG();
        Koffer8.removeEventListener("click",Koffer8Click)
        Koffer8.style.backgroundColor="transparent"
        Koffer8.style.color="transparent"
        Koffer8.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer9Click(){
    if(FirstChoiceSet==false){
        Koffer9.style.backgroundColor="gold"
        HauptNummer = 200;
        Koffer9.removeEventListener("click",Koffer9Click);
        FirstChoise=Koffer9
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer9){
        RNG();
        Koffer9.removeEventListener("click",Koffer9Click)
        Koffer9.style.backgroundColor="transparent"
        Koffer9.style.color="transparent"
        Koffer9.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer10Click(){
    if(FirstChoiceSet==false){
        Koffer10.style.backgroundColor="gold"
        HauptNummer = 300;
        Koffer10.removeEventListener("click",Koffer10Click);
        FirstChoise=Koffer10
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer10){
        RNG();
        Koffer10.removeEventListener("click",Koffer10Click)
        Koffer10.style.backgroundColor="transparent"
        Koffer10.style.color="transparent"
        Koffer10.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer11Click(){
    if(FirstChoiceSet==false){
        Koffer11.style.backgroundColor="gold"
        HauptNummer = 400;
        Koffer11.removeEventListener("click",Koffer11Click);
        FirstChoise=Koffer11
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer11){
        RNG();
        Koffer11.removeEventListener("click",Koffer11Click)
        Koffer11.style.backgroundColor="transparent"
        Koffer11.style.color="transparent"
        Koffer11.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer12Click(){
    if(FirstChoiceSet==false){
        Koffer12.style.backgroundColor="gold"
        HauptNummer = 500;
        Koffer12.removeEventListener("click",Koffer12Click);
        FirstChoise=Koffer12
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer12){
        RNG();
        Koffer12.removeEventListener("click",Koffer12Click)
        Koffer12.style.backgroundColor="transparent"
        Koffer12.style.color="transparent"
        Koffer12.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer13Click(){
    if(FirstChoiceSet==false){
        Koffer13.style.backgroundColor="gold"
        HauptNummer = 750;
        Koffer13.removeEventListener("click",Koffer13Click);
        FirstChoise=Koffer13
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer13){
        RNG();
        Koffer13.removeEventListener("click",Koffer13Click)
        Koffer13.style.backgroundColor="transparent"
        Koffer13.style.color="transparent"
        Koffer13.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer14Click(){
    if(FirstChoiceSet==false){
        Koffer14.style.backgroundColor="gold"
        HauptNummer = 1000;
        Koffer14.removeEventListener("click",Koffer14Click);
        FirstChoise=Koffer14
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer14){
        RNG();
        Koffer14.removeEventListener("click",Koffer14Click)
        Koffer14.style.backgroundColor="transparent"
        Koffer14.style.color="transparent"
        Koffer14.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer15Click(){
    if(FirstChoiceSet==false){
        Koffer15.style.backgroundColor="gold"
        HauptNummer = 5000;
        Koffer15.removeEventListener("click",Koffer15Click);
        FirstChoise=Koffer15
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer15){
        RNG();
        Koffer15.removeEventListener("click",Koffer15Click)
        Koffer15.style.backgroundColor="transparent"
        Koffer15.style.color="transparent"
        Koffer15.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer16Click(){
    if(FirstChoiceSet==false){
        Koffer16.style.backgroundColor="gold"
        HauptNummer = 10000;
        Koffer16.removeEventListener("click",Koffer16Click);
        FirstChoise=Koffer16
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer16){
        RNG();
        Koffer16.removeEventListener("click",Koffer16Click)
        Koffer16.style.backgroundColor="transparent"
        Koffer16.style.color="transparent"
        Koffer16.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer17Click(){
    if(FirstChoiceSet==false){
        Koffer17.style.backgroundColor="gold"
        HauptNummer = 25000;
        Koffer17.removeEventListener("click",Koffer17Click);
        FirstChoise=Koffer17
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer17){
        RNG();
        Koffer17.removeEventListener("click",Koffer17Click)
        Koffer17.style.backgroundColor="transparent"
        Koffer17.style.color="transparent"
        Koffer17.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer18Click(){
    if(FirstChoiceSet==false){
        Koffer18.style.backgroundColor="gold"
        HauptNummer = 50000;
        Koffer18.removeEventListener("click",Koffer18Click);
        FirstChoise=Koffer18
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer18){
        RNG();
        Koffer18.removeEventListener("click",Koffer18Click)
        Koffer18.style.backgroundColor="transparent"
        Koffer18.style.color="transparent"
        Koffer18.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer19Click(){
    if(FirstChoiceSet==false){
        Koffer19.style.backgroundColor="gold"
        HauptNummer = 75000;
        Koffer19.removeEventListener("click",Koffer19Click);
        FirstChoise=Koffer19
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer19){
        RNG();
        Koffer19.removeEventListener("click",Koffer19Click)
        Koffer19.style.backgroundColor="transparent"
        Koffer19.style.color="transparent"
        Koffer19.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer20Click(){
    if(FirstChoiceSet==false){
        Koffer20.style.backgroundColor="gold"
        HauptNummer = 100000;
        Koffer20.removeEventListener("click",Koffer20Click);
        FirstChoise=Koffer20
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer20){
        RNG();
        Koffer20.removeEventListener("click",Koffer20Click)
        Koffer20.style.backgroundColor="transparent"
        Koffer20.style.color="transparent"
        Koffer20.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer21Click(){
    if(FirstChoiceSet==false){
        Koffer21.style.backgroundColor="gold"
        HauptNummer = 200000;
        Koffer21.removeEventListener("click",Koffer21Click);
        FirstChoise=Koffer21
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer21){
        RNG();
        Koffer21.removeEventListener("click",Koffer21Click)
        Koffer21.style.backgroundColor="transparent"
        Koffer21.style.color="transparent"
        Koffer21.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer22Click(){
    if(FirstChoiceSet==false){
        Koffer22.style.backgroundColor="gold"
        HauptNummer = 300000;
        Koffer22.removeEventListener("click",Koffer22Click);
        FirstChoise=Koffer22
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer22){
        RNG();
        Koffer22.removeEventListener("click",Koffer22Click)
        Koffer22.style.backgroundColor="transparent"
        Koffer22.style.color="transparent"
        Koffer22.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer23Click(){
    if(FirstChoiceSet==false){
        Koffer23.style.backgroundColor="gold"
        HauptNummer = 400000;
        Koffer23.removeEventListener("click",Koffer23Click);
        FirstChoise=Koffer23
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer23){
        RNG();
        Koffer23.removeEventListener("click",Koffer23Click)
        Koffer23.style.backgroundColor="transparent"
        Koffer23.style.color="transparent"
        Koffer23.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer24Click(){
    if(FirstChoiceSet==false){
        Koffer24.style.backgroundColor="gold"
        HauptNummer = 500000;
        Koffer24.removeEventListener("click",Koffer24Click);
        FirstChoise=Koffer24
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer24){
        RNG();
        Koffer24.removeEventListener("click",Koffer24Click)
        Koffer24.style.backgroundColor="transparent"
        Koffer24.style.color="transparent"
        Koffer24.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer25Click(){
    if(FirstChoiceSet==false){
        Koffer25.style.backgroundColor="gold"
        HauptNummer = 750000;
        Koffer25.removeEventListener("click",Koffer25Click);
        FirstChoise=Koffer25
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer25){
        RNG();
        Koffer25.removeEventListener("click",Koffer25Click)
        Koffer25.style.backgroundColor="transparent"
        Koffer25.style.color="transparent"
        Koffer25.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}
function Koffer26Click(){
    if(FirstChoiceSet==false){
        Koffer26.style.backgroundColor="gold"
        HauptNummer = 1000000;
        Koffer26.removeEventListener("click",Koffer26Click);
        FirstChoise=Koffer26
        RNG();
        setText();
        FirstChoiceSet=true;
        
    }
    if(FirstChoiceSet==true&&FirstChoise!=Koffer26){
        RNG();
        Koffer26.removeEventListener("click",Koffer26Click)
        Koffer26.style.backgroundColor="transparent"
        Koffer26.style.color="transparent"
        Koffer26.style.border="none"
        Zug++;
        setText();
        CheckZug();
    }
}