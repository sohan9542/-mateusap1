import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../component/Cards";
import { toast } from "react-toastify";
const Questions = [
  {
    id: 1,
    question: "1.What is the height of Burj Al Khalifa ?",
    options: ["a) 829.8 m", "b) 826.8 m", "c) 828.8 m", "d) 824.8 m"],
    eliminate: ["a) 829.8 m", "b) 826.8 m"],
    tip: "The value contains a odd number.",
    percentage: ["50%", "30%", "10%", "10%"],
    answer: "a) 829.8 m",
  },
  {
    id: 2,
    question: "2.What is the capital of Bangladesh?",
    options: ["a) Rajshahi", "b) Khulna", "c) Dhaka", "d) Chittagong"],
    eliminate: ["b) Khulna", "c) Dhaka"],
    tip: "The name contains letter 'K' & 'A' ",
    percentage: ["40%", "10%", "40%", "10%"],
    answer: "c) Dhaka",
  },
  {
    id: 3,
    question: "3.What is the biggest country in the world?",
    options: ["a) America", "b) Africa", "c) India", "d) Russia"],
    eliminate: ["b) Africa",  "d) Russia"],
    tip: "It is corrently doing war!",
    percentage: ["10%", "10%", "10%", "70%"],
    answer: "d) Russia",
  },
  {
    id: 4,
    question: "4.Who wins the 2018 FIFA World Cup final?",
    options: ["a) Argentina", "b) Brazil", "c) France", "d) Jamaica"],
    eliminate: ["b) Brazil", "c) France"],
    tip: "The country wins FIFA World Cup 2 times.",
    percentage: ["10%", "5%", "80%", "5%"],
    answer: "c) France",
  },
];

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(120);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        if (refresh) {
          setTimer(120);
          setRefresh(false)
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
    if(timer === 0){
      window.location.href = "/loose";
    }
  }, [timer]);

  const [lifeLine, setLifeLine] = useState({
    first: false,
    second: false,
    third: false,
    four: false,
  });

  const [containLifeLines, setContainLifeLines] = useState([]);

  const controlLifeLines = (life, id) => {
    let demLife = containLifeLines.filter((item) => item?.id === id);
    if (demLife.length === 0) {
      let demLifeLine = lifeLine;
      if (life === 1) {
        demLifeLine.first = true;
        setContainLifeLines([...containLifeLines, { id: id, life: 1 }]);
      }
      if (life === 2) {
        demLifeLine.second = true;
        setContainLifeLines([...containLifeLines, { id: id, life: 2 }]);
      }
      if (life === 3) {
        demLifeLine.third = true;
        setContainLifeLines([...containLifeLines, { id: id, life: 3 }]);
      }
      if (life === 4) {
        demLifeLine.four = true;
        setContainLifeLines([...containLifeLines, { id: id, life: 4 }]);
      }
      setLifeLine({ ...demLifeLine });
    }
  };

  const controlUsersAnswer = (answer) => {
    if (answer === Questions[questionIndex].answer) {
      setRefresh(true);
      setTimer(120);
      toast.success("Congratulation you give the right answer!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setQuestionIndex(questionIndex + 1);
      if (questionIndex + 1 === Questions.length) {
        window.location.href = "/win";
      }
    } else {
      window.location.href = "/loose";
    }
  };

  const skip = ()=>{
    setRefresh(true);
    toast.success("Successfully shipped to another question", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setQuestionIndex(questionIndex + 1);
    if (questionIndex + 1 === Questions.length) {
      window.location.href = "/win";
    }

  }
  return (
    <div className=" min-h-screen w-full">
      <div className=" pt-36 w-full flex items-center justify-center flex-col">
      {refresh === false  &&   <p className=" text-center text-hr pb-6">{timer} seconds remaining</p>}
        <h1 className=" text-center text-3xl text-white w-full lg:w-2/4">
          {Questions[questionIndex].question}
        </h1>
        {/* ------------------------------------------ */}
        {/* options */}
        {containLifeLines.filter(
          (item) => item?.id === Questions[questionIndex].id
        )[0]?.life !== 4 && (
          <div className=" w-full lg:w-2/4 mt-20 grid grid-cols-2 gap-x-20 gap-y-10">
            {containLifeLines.filter(
              (item) => item?.id === Questions[questionIndex].id
            ).length === 1 &&
            containLifeLines.filter(
              (item) => item?.id === Questions[questionIndex].id
            )[0]?.life === 1 ? (
              <>
                {Questions[questionIndex].eliminate?.map((item) => (
                  <div
                    onClick={() => controlUsersAnswer(item)}
                    className=" w-full py-3 px-5 hover:bg-hr transition-all ease-linear duration-150 hover:text-pr rounded-xl bg-pr text-white font-semibold text-xl cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </>
            ) : (
              <>
                {Questions[questionIndex].options?.map((item) => (
                  <div
                    onClick={() => controlUsersAnswer(item)}
                    className=" w-full py-3 px-5 hover:bg-hr transition-all ease-linear duration-150 hover:text-pr rounded-xl bg-pr text-white font-semibold text-xl cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
        {/* ------------------------------------------ */}
        {/* tips */}
        {containLifeLines.filter(
          (item) => item?.id === Questions[questionIndex].id
        ).length === 1 &&
          containLifeLines.filter(
            (item) => item?.id === Questions[questionIndex].id
          )[0]?.life === 2 && (
            <div className=" w-full lg:w-2/4 mt-10 bg-pr text-hr rounded-md px-2 py-2 flex items-center justify-center">
              [Tip: {Questions[questionIndex]?.tip} ]
            </div>
          )}

        {/* ------------------------------------------ */}

        {/* skip */}
        {containLifeLines.filter(
          (item) => item?.id === Questions[questionIndex].id
        ).length === 1 &&
          containLifeLines.filter(
            (item) => item?.id === Questions[questionIndex].id
          )[0]?.life === 3 && (
            <div className=" w-full lg:w-2/4 mt-10   flex items-center justify-center">
              <button onClick={skip} className=" px-7 py-2 rounded-md bg-hr text-pr hover:bg-pr hover:text-white font-semibold">
                Skip
              </button>
            </div>
          )}
        {/* ------------------------------------------ */}

        {/* percentage */}

        <div className=" w-full lg:w-2/4 mt-20 grid grid-cols-2 gap-x-20 gap-y-10">
          {containLifeLines.filter(
            (item) => item?.id === Questions[questionIndex].id
          ).length === 1 &&
            containLifeLines.filter(
              (item) => item?.id === Questions[questionIndex].id
            )[0]?.life === 4 && (
              <>
                {Questions[questionIndex].options?.map((item, ind) => (
                  <div>
                    <div
                      onClick={() => controlUsersAnswer(item)}
                      className=" w-full py-3 px-5 hover:bg-hr transition-all ease-linear duration-150 hover:text-pr rounded-xl bg-pr text-white font-semibold text-xl cursor-pointer"
                    >
                      {item}
                    </div>
                    <p className=" pt-2 text-center text-hr">
                      {Questions[questionIndex].percentage[ind]}
                    </p>
                  </div>
                ))}
              </>
            )}
        </div>

        {/* ------------------------------------------ */}

        {/* lifeLines */}
        <div className=" mt-10 w-full">
          <Cards
            lifeLine={lifeLine}
            controlLifeLines={controlLifeLines}
            id={Questions[questionIndex].id}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
