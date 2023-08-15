import { useState } from "react";

export default function Decryption() {
  const [encryptedString, setEncryptedString] = useState("");
  const [decodedString, setDecodedString] = useState("");
  const [isProcessing, setIsProcessing] = useState(true);

  let person = {
    first_name: "",
    last_name: "",
    id: "",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDecodedString("");
    const result = await decodeString(encryptedString);
    setDecodedString(result);
  };

  function decodeString(encodedString) {
    return new Promise((resolve) => {
      let modifiedString = encodedString.replaceAll(0, " ");
      const result = modifiedString
        .split(/(\s+)/)
        .filter((e) => e.trim().length > 0);
      Object.entries(person).forEach(([key], index) => {
        person[key] = result[index];
      });
      const string = JSON.stringify(person);
      setTimeout(() => {
        resolve(string);
      }, 1000);
    });
  }

  const handleChange = (event) => {
    setEncryptedString(event.target.value);
  };

  return (
    <>
      <section className="flex flex-row justify-center my-3">
        <div className="w-full lg:w-1/2 flex justify-center flex-wrap">
          <div className="w-3/4 lg:w-full my-5 lg:m-0 text-left">
            <p className="text-xl mb-5">String to decode</p>
            <form method="post" onSubmit={handleSubmit}>
              <textarea
                className="w-full h-40 text-black p-2"
                value={encryptedString}
                onChange={handleChange}
              ></textarea>
              <button
                
                type="submit"
                className="w-full bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent my-3 cursor-pointer"
              >
                Decode
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-center my-3">
        <div className="w-full lg:w-1/2 flex justify-center flex-wrap">
          <div className="w-3/4 lg:w-full mt-10 lg:m-0 text-left">
            <p className="text-xl mb-5">Decoded string result</p>
            <textarea
              value={decodedString}
              className="w-full h-40 text-black p-2"
              readOnly
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}
