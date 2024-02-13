import { useEffect, useState } from "react"
import { Read } from "./tempva";
export let Readpage = (position) => {
    const [studentdetails, setStudentdetails] = useState({
        studentname: "",
        studentage: 0,
        studentemail: "",
        studentplace: "",
        pinnumber: 0
    });


    useEffect(() => {
        setStudentdetails(Read(position.who))
    })

    return (
        <>
            <div className="row justify-content-center">
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
                        <li>{studentdetails.studentname}</li>
                        <li>{studentdetails.studentage}</li>
                        <li>{studentdetails.studentplace}</li>
                        <li>{studentdetails.studentemail}</li>
                        <li>{studentdetails.pinnumber}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}