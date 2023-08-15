import { useState } from "react";

export default function Header() {
  const [isHelpInfoActive, setIsHelpInfoActive] = useState(false);

  const displayHelpInfo = () => {
    setIsHelpInfoActive(!isHelpInfoActive);
  };

  return (
    <section className="flex flex-row justify-center my-10">
      <div className="w-full lg:w-1/2 flex justify-center flex-wrap">
        <div className="w-3/4 lg:w-full flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">
          <h2 className="text-2xl font-bold text-center mb-5 lg:mb-0">
            String Parser
          </h2>
          <div className="text-center" onClick={displayHelpInfo}>
            How does it work <span className="question-icon">?</span>
          </div>
        </div>
        {isHelpInfoActive && (
          <div className="w-3/4 lg:w-full bg-white text-black p-5">
            <ul>
              <li>The user has to insert a string in the textarea below.</li>
              <li>
                Values in the string can be separated by any number of zeros.
              </li>
              <li>
                Values in the string can be separated by any number of zeros.
              </li>
              <li>The id is a numeric value but will contain no zeros.</li>
              <li>
                The function should parse the string and return a dictionary
                that contains the first name, last name, and id values.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
