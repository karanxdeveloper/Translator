import { FaVolumeHigh } from "react-icons/fa6"; //<FaVolumeHigh />
import { FaCopy } from "react-icons/fa6"; //<FaCopy />
import { TbArrowsExchange2 } from "react-icons/tb"; //<TbArrowsExchange2 />
import Languages from "./Languages";

function Translator() {
    return (
        <><div className="main w-[100vw] h-[100vh] bg-purple-500 flex flex-col justify-center items-center gap-[0.5rem]">

            <div className="wrapper w-[45%] h-[40%]  rounded-md ">
                <div className="text-input w-[100%] h-[85%] border-none rounded-md">
                    <textarea className="from-text border w-[50%] bg-white outline-none border-gray-500 rounded-md h-[100%] p-3" name="from" id="from" placeholder="Enter text..."></textarea>
                    <textarea className="to-text border w-[50%] bg-white outline-none border-gray-500 rounded-md h-[100%] p-3" name="to" id="to" ></textarea>
                </div>

                <ul className="flex bg-gray-500 h-[15%] rounded-md">
                    <li className="row from flex w-[45%]  items-center justify-around">
                        <div className="icons flex text-[25px] w-[30%] h-[60%] items-center   justify-around">
                            <FaVolumeHigh />
                            <FaCopy />
                        </div>
                        <select className=" w-[70%] h-[60%]">
                            {
                                Object.entries(Languages).map(([code,name])=>{
                                   return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                    </li>

                    <li className="exchange w-[10%] flex  justify-center items-center text-[28px]"><TbArrowsExchange2 /></li>

                    <li className="row to flex w-[45%]  items-center justify-around">
                        <select className=" w-[70%] h-[60%]">
                        {
                                Object.entries(Languages).map(([code,name])=>{
                                   return <option key={code} value={code}>{name}</option>
                                })
                            }
                        </select>
                        <div className="icons flex text-[25px] w-[30%] h-[60%] items-center justify-around">
                            <FaCopy />
                            <FaVolumeHigh />
                        </div>

                    </li>
                </ul>
            </div>

            <button className="border bg-blue-500 w-[45%] py-[8px] border-none rounded-md text-[18px] font-bold font">Translate</button>

        </div>
        </>
    )
}

export default Translator