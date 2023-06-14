import React, { useState } from 'react';
import './Form.css';
import InputText from '../input/Input';
import Button from '../button/Button';

const Form = () => {
  const [semesterData, setSemesterData] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    eighth: '',
    result: ''
  });

  const [totalCgpa, setTotalCgpa] = useState(0);

  const handleInputChange = (event, semester) => {
    const { value } = event.target;
    setSemesterData((prevData) => ({ ...prevData, [semester]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Semester Data:', semesterData);

    // Calculate total CGPA
    let total = 0;

    const firstNum = semesterData.first * 0.05;
    const secondNum = semesterData.second * 0.05;
    const thirdNum = semesterData.third * 0.05;
    const fourthNum = semesterData.fourth * 0.10;
    const fifthNum = semesterData.fifth * 0.15;
    const sixthNum = semesterData.sixth * 0.15;
    const seventhNum = semesterData.seventh * 0.25;
    const eigthNum = semesterData.eighth * 0.20;

    total = firstNum + secondNum + thirdNum + fourthNum + fifthNum + sixthNum + seventhNum + eigthNum;
    setTotalCgpa(total)

    // your cgpa: 
    console.log('Total CGPA:', total.toFixed(2));
  };

  return (
    <div>
      <div className='form-group'>
      <h1>CGPA
        <span>
          Calculator
        </span>
      </h1>

      <form
        action="form"
        className="form"
        onSubmit={handleSubmit}>

        <div className="semesters">

          <div className="left-group">
            <InputText
              title="1st Semester"
              semester="first"
              value={semesterData.first}
              onChange={handleInputChange}
            />

            <InputText
              title="2nd Semester"
              semester="second"
              value={semesterData.second}
              onChange={handleInputChange}
            />

            <InputText
              title="3rd Semester"
              semester="third"
              value={semesterData.third}
              onChange={handleInputChange}
            />

            <InputText
              title="4th Semester"
              semester="fourth"
              value={semesterData.fourth}
              onChange={handleInputChange}
            />
          </div>

          <div className="right-group">
            <InputText
              title="5th Semester"
              semester="fifth"
              value={semesterData.fifth}
              onChange={handleInputChange}
            />

            <InputText
              title="6th Semester"
              semester="sixth"
              value={semesterData.sixth}
              onChange={handleInputChange}
            />
            <InputText
              title="7th Semester"
              semester="seventh"
              value={semesterData.seventh}
              onChange={handleInputChange}
            />
            <InputText
              title="8th Semester"
              semester="eighth"
              value={semesterData.eighth}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <h2>
          Your CGPA: <strong>{totalCgpa.toFixed(2)}</strong>
        </h2>

        <div className="btn-group">
          <Button />
        </div>
      </form>
    </div>
    </div>
  );
};

<InputText />

export default Form;
