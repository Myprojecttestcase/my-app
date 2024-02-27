import { useEffect, useState } from "react"
import { Read } from "./valu";
export let Readp=(position)=>{
    const [std,setstd]=useState(
        {
            stdName:"",
            stdage:0,
            stdplace:"",
            stdemail:"",
            pinNumber:0
        });
        useEffect(()=>{
            setstd(Read(position.who))});
    return (
        <>
            <div className="row  justify-content-center mt-5">
                <div className="card col-5">
                    <h1 className="card-title"> MY Record</h1>
                    <p className="card-text">
                        Hello gd afternoon.

                        First of all Thankyou for giving me this opportunity to introduce myself.

                        My name is Anuja Srivastava.

                        I'm from Kanpur but currently staying in Kota.

                        I did my post-graduation in M.A. English from Kanpur University. I also completed BED. From Kanpur University. I have teaching experience of 7 years. My strengths are good listening, honesty, and hard work.

                        My hobbies are reading books, cooking, and listening to music.
                    </p>
                    <ul className="">
                        <li>{std.stdName}</li>
                        <li>{std.stdage}</li>
                        <li>{std.stdplace}</li>
                        <li>{std.stdemail}</li>
                        <li>{std.pinNumber}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}