import { FaVolumeHigh } from "react-icons/fa6"; //<FaVolumeHigh />
import { FaCopy } from "react-icons/fa6"; //<FaCopy />
import { TbArrowsExchange2 } from "react-icons/tb"; //<TbArrowsExchange2 />
import Languages from "./Languages";
import { useState } from "react";

function Translator() {


    const [fromText, setFromText] = useState("")
    const [toText, setToText] = useState("")
    const [fromLanguage,setFromLanguage] = useState("en-GB")
    const [toLanguage,setToLanguage] = useState("hi-IN")

    function handleExchange(){
        let tempText = fromText;
        setFromText(toText)
        setToText(tempText)

        let tempLang = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(tempLang)

    }

    const copyContent = (text) =>{
        navigator.clipboard.writeText(text)
    }

    const utterText = (text,language)=>{
        const synth = window.speechSynthesis;
        const utterance  = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        synth.speak(utterance)
    }

    function handleIconClick(target, id){
        if(target.classList.contains("copy")){
            if(id == "from"){
                copyContent(fromText)
            } else{
                copyContent(toText)
            }
        }else{
            if(id == "from"){
                utterText(fromText, fromLanguage);
            }else{
                utterText(toText, toLanguage)
            }
        }
    }

    async function handleTranslate(){
        let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
        try {
            console.log("API URL:", url,fromText);
            let response = await fetch(url);
            let data = await response.json();
            setToText(data.responseData.translatedText);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
        
    }

    return (
        <><div className="main w-[100vw] h-[100vh] bg-purple-500 flex flex-col justify-center items-center gap-[0.5rem]">

            <div className="wrapper w-[45%] h-[40%]  rounded-md ">
                <div className="text-input w-[100%] h-[85%] border-none rounded-md">
                    <textarea onChange={(event => {setFromText(event.target.value)})} value={fromText} className="from-text border w-[50%] bg-white outline-none border-gray-500 rounded-md h-[100%] p-3" name="from" id="from" placeholder="Enter text..."></textarea>
                    <textarea onChange={(event => {setToText(event.target.value)})} readOnly value={toText} className="to-text border w-[50%] bg-white outline-none border-gray-500 rounded-md h-[100%] p-3" name="to" id="to" ></textarea>
                </div>

                <ul className="flex bg-gray-500 h-[15%] rounded-md">

                    <li className="row from flex w-[45%]  items-center justify-around">
                        <div className="icons flex text-[25px] w-[30%] h-[60%] items-center   justify-around">
                            <FaVolumeHigh id="from" className="volume"  onClick={(event)=>  handleIconClick(event.target, "from")}/>
                            <FaCopy id="from" className="copy" onClick={(event)=>  handleIconClick(event.target, "from")}/>
                        </div>
                        <select value={fromLanguage} onChange={(event)=>{setFromLanguage(event.target.value)}} className=" w-[70%] h-[60%]">
                            {
                                Object.entries(Languages).map(([code,name])=>{
                                   return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                    </li>

                    <li onClick={handleExchange} className="exchange w-[10%] flex  justify-center items-center text-[28px]"><TbArrowsExchange2 /></li>

                    <li className="row to flex w-[45%]  items-center justify-around">
                        <select value={toLanguage} onChange={(event)=>{setToLanguage(event.target.value)}} className=" w-[70%] h-[60%]">
                        {
                                Object.entries(Languages).map(([code,name])=>{
                                   return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                        <div className="icons flex text-[25px] w-[30%] h-[60%] items-center justify-around">
                            <FaCopy id="to" className="copy"  onClick={(event)=>  handleIconClick(event.target, "to")}/>
                            <FaVolumeHigh id="to" className="volume"  onClick={(event)=>  handleIconClick(event.target, "to")}/>
                        </div>

                    </li>
                </ul>
            </div>

            <button onClick={handleTranslate} className="border bg-blue-500 w-[45%] py-[8px] border-none rounded-md text-[18px] font-bold font">Translate</button>

        </div>
        </>
    )
}

export default Translator