import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function Sidebar({children, data}) {
  const [open, setOpen] = useState(true);
  const [openChapter, setOpenChapter] = useState(null);
  const [openExercise, setOpenExercise] = useState(null);
  const [selectedExcercise, setSelectedExcercise] = useState({
    chapterName: null,
    introduction: false,
    exerciseName: null,
  });
  const [showPage, setShowPage] = useState(null);


  // Toggle Chapter Dropdown
  const handleOpenChapter = (chapterName) => {
    setOpenChapter(openChapter === chapterName ? null : chapterName);
    setOpenExercise(null); // Close exercises when switching chapters
  };

  // Toggle Exercise Dropdown
  const handleOpenExercise = (chapterName) => {
    setOpenExercise(openExercise === chapterName ? null : chapterName);
  };


  useEffect(()=>{

    if(selectedExcercise.chapterName != null && selectedExcercise.introduction){
      const value = data.find((chapter)=> selectedExcercise.chapterName == chapter.name);
      setShowPage(value.intro);
    }
    else if(selectedExcercise.chapterName != null && selectedExcercise.exerciseName != null){
      const value = data.find((chapter)=> selectedExcercise.chapterName == chapter.name);
      setShowPage(value.exerciseComponents[0]);
    }

  }, [selectedExcercise]);

  return (
    <div className="flex">
      <div
      className={`bg-red-600 h-[calc(100vh-82px)] relative shadow-lg transition-all ${
        open ? "w-72" : "w-20"
      } duration-300 ease-in-out overflow-y-scroll overflow-x-hidden`}
      style={{scrollbarWidth: "none"}}
    >
      

      {/* Sidebar Title */}
      <p className="text-white text-2xl font-bold text-center py-4 tracking-wide">
        Chapters
      </p>

      {/* Chapters List */}
      <ul className="space-y-2">
        {data.map((chapter, index) => (
          <li key={index} className="text-white">
            {/* Chapter Title */}
            <p
              className="p-4 flex justify-between items-center hover:bg-red-700 text-lg font-medium cursor-pointer transition-all duration-300 rounded-md"
              onClick={() => handleOpenChapter(chapter.name)}
            >
              {chapter.name}
              <span className="text-xl transition-transform duration-300">
                {openChapter === chapter.name ? "▲" : "▼"}
              </span>
            </p>

            {/* Chapter Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                open && openChapter === chapter.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-6 space-y-1">
                <li className="text-md p-2 bg-white text-red-600 rounded-md shadow transition-all duration-300 mr-2" onClick={()=> setSelectedExcercise({chapterName: chapter.name, exerciseNo: null, introduction: true})}>
                  Introduction
                </li>
                <li
                  className="text-md p-2 bg-white text-red-600 rounded-md shadow cursor-pointer flex justify-between items-center transition-all duration-300 mr-2"
                  onClick={() => handleOpenExercise(chapter.name)}
                >
                  Exercises
                  <span className="transition-transform duration-300">
                    {openExercise === chapter.name ? "▲" : "▼"}
                  </span>
                </li>

                {/* Exercise Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openExercise === chapter.name ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-4 space-y-1 mt-1">
                    {chapter.exercise.map((exercise, exIndex) => (
                      <li
                        key={exIndex}
                        className="text-sm p-2 bg-gray-100 text-red-700 border-l-4 border-red-500 rounded-md transition-all duration-300 mr-2"
                        onClick={()=> setSelectedExcercise({chapterName: chapter.name, introduction: false, exerciseName: exercise})}
                      >
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Sidebar Toggle Button */}
    <IoIosArrowRoundBack
        size={30}
        className={`bg-white rounded-full border-2 border-red-500 absolute top-28 ${open ? "left-[270px]" : "left-[65px]"} cursor-pointer transition-transform duration-300 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

    <div className="p-10 h-[calc(100vh-82px)] overflow-y-scroll" style={{scrollbarWidth: "none"}}>
        {(selectedExcercise.chapterName == null && showPage == null) ? "select chapter" : showPage}
    </div>
    </div>
  );
}

export default Sidebar;
