
    //For text to speech
    const textarea=document.querySelector("textarea");
        const button= document.querySelector("button");
        
        function texttospeech(text){
            let utterance=new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
        
        button.addEventListener("click",e =>{
            e.preventDefault();
            if(textarea.value!=""){
                texttospeech(textarea.value);
            }
        });
    
    
 


    //For speech to text    
    document.querySelector('#b').onclick=function(){
        var recognition=new webkitSpeechRecognition();
        recognition.lang="en-GB"
        recognition.onresult=function(event){
            document.getElementById("a").value=event.results[0][0].transcript;
        }
        recognition.start();
    }
