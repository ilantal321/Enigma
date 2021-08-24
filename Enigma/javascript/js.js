
class EnigmaRoter{
  constructor (roternumber,rotateletter){
    this.name=roternumber;
    this.RotateL=rotateletter;
    this.LettersArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.wiring=setwiring(roternumber);
  }
  copyconstructor (r1){
    this.name=r1.roternumber;
    this.RotateL=r1.RotateL;
    this.LettersArray=r1.LettersArray
    this.wiring=r1.wiring;
  }
  reset()
  {
    this.LettersArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.wiring=setwiring(this.name);
  }
  rotate(){
      v=this.wiring.shift();
      this.wiring.push(v);
      var v=this.LettersArray.shift();
      this.LettersArray.push(v);
      if (v==this.RotateL)
      {
        return 1;
      }
      return 0;
    }
  rotateReverse(){
      var v=this.LettersArray.pop();
      this.LettersArray.unshift(v);
      v=this.wiring.pop();
      this.wiring.unshift(v);
    }
  }
  function clickn(n){
    var letter=n;
    if (n>='a'||n<='z')
    {
      document.getElementById("screen").innerHTML += n;
      this.document.getElementById(letter).style.backgroundColor='lightslategray';
      this.document.getElementById(letter).style.boxShadow='0 5px #666';
      this.document.getElementById(letter).style.transform='translateY(2px)';
      audioClick.play();
      setTimeout(() =>{
        this.document.getElementById(letter).style.boxShadow='none';
        this.document.getElementById(letter).style.backgroundColor='whitesmoke';
        this.document.getElementById(letter).style.transform='translateY(0px)';
      }, 150);
      enigma(letter);
    }
  }
  function clickadd(n){
    var num=parseInt(document.getElementById("place"+n).innerHTML)+1;
    if (num==27){
      num=1;
    }
    document.getElementById("place"+n).innerHTML=num.toString();
    audioTick.play();
    return RotersMachine[n-1].rotate();
  }
  function clicksub(n){
    var num=parseInt(document.getElementById("place"+n).innerHTML)-1;
    RotersMachine[n-1].rotateReverse();
    if (num==0){
      num=26;
    }
    document.getElementById("place"+n).innerHTML=num.toString();
    audioTick.play();
  }
  function Switch(a,b){
    var temp=RotersMachine[a];
    RotersMachine[a]=RotersMachine[b];
    RotersMachine[b]=temp;
    roter1.reset();
    roter2.reset();
    roter3.reset();
    roter4.reset();
    roter5.reset();
    document.getElementById("place1").innerHTML=1;
    document.getElementById("place2").innerHTML=1;
    document.getElementById("place3").innerHTML=1;
    setroters();
  }
  function setwiring(varName)
  {
    switch (varName)
    {
      case "Roter 1":
        return ['e','k','m','f','l','g','d','q','v','z','n','t','o','w','y','h','x','u','s','p','a','i','b','r','c','j'];
        break;
      case "Roter 2":
        return ['a','j','d','k','s','i','r','u','x','b','l','h','w','t','m','c','q','g','z','n','p','y','f','v','o','e'];
        break;
      case "Roter 3":
        return ['b','d','f','h','j','l','c','p','r','t','x','v','z','n','y','e','i','w','g','a','k','m','u','s','q','o'];
        break;
      case "Roter 4":
        return ['e','s','o','v','p','z','j','a','y','q','u','i','r','h','x','l','n','f','t','g','k','d','c','m','w','b'];
        break;
        case "Roter 5":
        return ['v','z','b','r','g','i','t','y','u','p','s','d','n','h','l','x','a','w','m','j','q','o','f','e','c','k'];
        break;
    }
  }
  function setroters()
  { 
    document.getElementById("roterplace1").innerHTML=RotersMachine[0].name;
    document.getElementById("roterplace2").innerHTML=RotersMachine[1].name;
    document.getElementById("roterplace3").innerHTML=RotersMachine[2].name;
    document.getElementById("roterplace4").innerHTML=RotersMachine[3].name;
    document.getElementById("roterplace5").innerHTML=RotersMachine[4].name;
  }
  document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if ((event.which>=65 && event.which<=90))
    {
      name=name.toLowerCase();
      clickn(name);
    }


  }, false);
function enigma(letter)
{
  if (clickadd(1))
  {
    if (clickadd(2))
    {
      clickadd(3);
    }
  }
     var place = letter.charCodeAt(0)-97;
     var v=RotersMachine[0].wiring[place];
     //alert(v);
     v=RotersMachine[0].LettersArray.indexOf(v);
     //alert(v);
     v=RotersMachine[1].wiring[v];
     //alert(v);
     v=RotersMachine[1].LettersArray.indexOf(v);
     //alert(v);
     v=RotersMachine[2].wiring[v];
     //alert(v);
     var num=v;
     v=RotersMachine[2].LettersArray.indexOf(v);
     //alert(v);
     v=reflector[v];
     //alert(v);
     if (reflector.indexOf(v)==RotersMachine[2].LettersArray.indexOf(num))
     {
       v=reflector.lastIndexOf(v);
     }
     else
     {
      v=reflector.indexOf(v);
     }
     //alert(v);
     v=RotersMachine[2].LettersArray[v];
     //alert(v);
     v=RotersMachine[2].wiring.indexOf(v);
     //alert(v);
     v=RotersMachine[1].LettersArray[v];
     //alert(v);
     v=RotersMachine[1].wiring.indexOf(v);
     //alert(v);
     v=RotersMachine[0].LettersArray[v];
     //alert(v);
     v=RotersMachine[0].wiring.indexOf(v);
     //alert(v);
     v=Letters[v];
     //alert(v);
     document.getElementById("screenout").innerHTML += v;

     this.document.getElementById("Return"+v).style.backgroundColor='yellow';
     this.document.getElementById("Return"+v).style.boxShadow='0 5px #666';
     this.document.getElementById("Return"+v).style.transform='translateY(2px)';
     audioClick.play();
     setTimeout(() =>{
       this.document.getElementById("Return"+v).style.boxShadow='none';
       this.document.getElementById("Return"+v).style.backgroundColor='whitesmoke';
       this.document.getElementById("Return"+v).style.transform='translateY(0px)';
     }, 150);
     
}
let Letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let roter1=new EnigmaRoter("Roter 1",'q');
let roter2=new EnigmaRoter("Roter 2",'e');
let roter3=new EnigmaRoter("Roter 3",'v');
let roter4=new EnigmaRoter("Roter 4",'j');
let roter5=new EnigmaRoter("Roter 5",'z');
let RotersMachine=[roter1,roter2,roter3,roter4,roter5];
let reflector=['a','b','c','d','e','f','g','d','i','j','k','g','m','k','m','i','e','b','f','t','c','v','v','j','a','t'];
const audioClick = new Audio("javascript/sounds/Click.mp3");
audioClick.playbackRate = 3;
const audioTick = new Audio("javascript/sounds/Tick.mp3");
audioTick.playbackRate = 3;
