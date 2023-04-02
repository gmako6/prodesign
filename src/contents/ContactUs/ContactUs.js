import React, { useRef } from "react";
//import { Form } from "../../components";
import emailjs from "@emailjs/browser";

function ContactUs() {
  //Configuration of emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9to2svg",
        "template_ah9j9na",
        form.current,
        "dJH12-yukXrsxqa1t"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20 mb-20 pl-5 pr-5 md:pl-0 md:pr-0">
      <div className="mt-10">
        <div class="max-w-md px-8 pt-20 mx-auto space-y-2">
          <details class="p-4 rounded-lg open:bg-white open:shadow-xl">
            <summary class="font-semibold">How does it work ?</summary>
            <div class="mt-3">
              <p class="text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur fugit libero sunt quasi error, sequi tempore quo
                impedit porro saepe nesciunt. Ratione provident, assumenda modi
                delectus accusantium officiis vero eum!
              </p>
            </div>
          </details>
          <details class="p-4 rounded-lg">
            <summary class="font-semibold">
              How to use tailwind css 3 in react
            </summary>
            <div class="mt-3">
              <p class="text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur fugit libero sunt quasi error, sequi tempore quo
                impedit porro saepe nesciunt. Ratione provident, assumenda modi
                delectus accusantium officiis vero eum!
              </p>
            </div>
          </details>
          <details class="p-4 rounded-lg">
            <summary class="font-semibold">
              How to install Tailwind CSS 3 ?
            </summary>
            <div class="mt-3">
              <p class="text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur fugit libero sunt quasi error, sequi tempore quo
                impedit porro saepe nesciunt. Ratione provident, assumenda modi
                delectus accusantium officiis vero eum!
              </p>
            </div>
          </details>
          <details class="p-4 rounded-lg">
            <summary class="font-semibold">How to send feedback ?</summary>
            <div class="mt-3">
              <p class="text-sm leading-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur fugit libero sunt quasi error, sequi tempore quo
                impedit porro saepe nesciunt. Ratione provident, assumenda modi
                delectus accusantium officiis vero eum!
              </p>
            </div>
          </details>
        </div>
      </div>

      {/* Top Description*/}
      <div className="grid justify-items-center">
        <h1 className="text-3xl font-bold ">Let's Get Connected</h1>
        <p className="mt-5">
          Let's discuss your project and get it into a real working product of
          your desire.
        </p>
      </div>

      {/* Form Details */}
      <div className="flex flex-col justify-items-center pt-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:flex justify-evenly "
        >
          <input
            name="client_name"
            placeholder="Name"
            type="text"
            className="form-text m-1 rounded-full border-2 border-[#c1262d] hover:border-[#c1262d] p-3 focus:border-[#cf343c]"
          />
          <input
            name="client_email"
            placeholder="Email"
            type="email"
            className="form-email  m-1 rounded-full border-2 border-[#c1262d] hover:border-[#c1262d] p-3"
          />

          <input
            name="client_number"
            placeholder="Phone Number"
            type="number"
            className="form-number  m-1 rounded-full border-2 border-[#c1262d] hover:border-[#c1262d] p-3"
          />

          <input
            name="client_message"
            placeholder="Brief Explanation"
            type="textarea"
            className="form-textarea m-1 rounded-full border-2 border-[#c1262d] hover:border-[#c1262d] p-3"
          />

          <input
            type="submit"
            value="Send"
            className="py-2 px-6 m-1 text-m md:flex bg-gradient-to-r from-[#c1262d] to-[#c73b42] hover:bg-gradient-to-l  rounded-full shadow-lg text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-800 hover:animate-pulse"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
