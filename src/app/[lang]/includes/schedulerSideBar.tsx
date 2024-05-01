"use client"

// import "./../services/services-step-2/services-step-2.scss";
import Link from "next/link";
import {useDictionary} from "@/app/[lang]/dictionary-provider";

export default function SchedulerSideBar() {
  const dictionary = useDictionary()

  return (
    <div className="steps-left-column">
      <p className="steps-left-column-title">{dictionary.scheduler_title}</p>
      <div className="steps-column-items-container">
        <div className="steps-column-item">
          <h6>{dictionary.scheduler_step_1}</h6>
          <Link href={"/services/services-step-1"}>
            <p className="small-txt">{dictionary.scheduler_step_1_type}</p>
          </Link>
          <h6>{dictionary.scheduler_step_1_description}</h6>
        </div>
        <div className="steps-column-item">
          <h6>{dictionary.scheduler_step_2}</h6>
          <Link href={"/services/services-step-2"}>
            <p className="small-txt">{dictionary.scheduler_step_2_type}</p>
          </Link>
          <h6>{dictionary.scheduler_step_2_description}</h6>
        </div>
        <div className="steps-column-item">
          <h6>{dictionary.scheduler_step_3}</h6>
          <Link href={"/services/services-step-3"}>
            <p className="small-txt">{dictionary.scheduler_step_3_type} </p>
          </Link>
          <h6>{dictionary.scheduler_step_3_description}</h6>
        </div>
        <div className="steps-column-item">
          <h6>{dictionary.scheduler_step_4}</h6>
          <Link href={"/services/services-step-4"}>
            <p className="small-txt">{dictionary.scheduler_step_4_type}</p>
          </Link>
          <h6>{dictionary.scheduler_step_4_description}</h6>
        </div>
      </div>
    </div>
  )
}