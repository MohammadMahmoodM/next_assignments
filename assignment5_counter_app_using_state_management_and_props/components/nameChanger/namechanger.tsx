"use client"

import MyButton from "../button/mybutton";
import Student from "../../types/type";
import { useState } from "react";

export default function NameChanger() {
  const studentNames: Student[] = [
    {
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
    },
    {
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
    },
    {
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
    },
    {
      name: "raja",
      gender: "Male",
      physics: 30,
      maths: 25,
      english: 40,
    },
    {
      name: "usha",
      gender: "Female",
      physics: 67,
      maths: 45,
      english: 78,
    },
    {
      name: "priya",
      gender: "Female",
      physics: 56,
      maths: 46,
      english: 78,
    },
    {
      name: "Sundar",
      gender: "Male",
      physics: 12,
      maths: 67,
      english: 67,
    },
    {
      name: "Kavitha",
      gender: "Female",
      physics: 78,
      maths: 71,
      english: 67,
    },
    {
      name: "Dinesh",
      gender: "Male",
      physics: 56,
      maths: 45,
      english: 67,
    },
    {
      name: "Hema",
      gender: "Female",
      physics: 71,
      maths: 90,
      english: 23,
    },
    {
      name: "Gowri",
      gender: "Female",
      physics: 100,
      maths: 100,
      english: 100,
    },
    {
      name: "Ram",
      gender: "Male",
      physics: 78,
      maths: 55,
      english: 47,
    },
    {
      name: "Murugan",
      gender: "Male",
      physics: 34,
      maths: 89,
      english: 78,
    },
    {
      name: "Jenifer",
      gender: "Female",
      physics: 67,
      maths: 88,
      english: 90,
    },
  ];

  let [index, setIndex] = useState(0);
  let [studentObject, setStudentObject] = useState(studentNames[index]);

  let nextIndex = () => {
    if (index < studentNames.length - 1) {
      let newIndex = index + 1;
      setIndex(newIndex);

      let studentObject = studentNames[newIndex];

      setStudentObject(studentObject);
    } else {
      alert("No More Student in List");
    }
  }

  
  let previousIndex = () => {
    if (index > 0) {
      let newIndex = index - 1;
      setIndex(newIndex);

      let studentObject = studentNames[newIndex];

      setStudentObject(studentObject);
    } else {
      alert("No More Student in List");
    }
  }

    return (
      <div>
        name changer
        <br />
        <br />
        <br />
        {studentObject.name}
        <MyButton buttonTitle="Next Student" nextFunction={nextIndex} />

        <MyButton buttonTitle="Previous Student" nextFunction={previousIndex} />

      </div>
    )
  }

