import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z, ZodError, ZodIssue } from "zod";

import CheckboxInput from "../components/form/checkboxInput";
import ContactInfo from "../components/form/contactInfo";
import Textarea from "../components/form/textarea";
import TextInput from "../components/form/textInput";
import Layout from "../components/layout";
import Seo from "../components/seo";

const validateSchema = z.object({
  user_name: z
    .string({ required_error: "Name is required." })
    .min(1, { message: "Name is required." })
    .max(30, { message: "Name could not be more than 30 characters." }),
  user_email: z
    .string({ required_error: "Email is required." })
    .min(1, { message: "Email is required." })
    .max(40, { message: "Email could not be more than 40 characters." })
    .email("This is not a valid email."),
  user_subject: z
    .string({ required_error: "Subject is required." })
    .min(1, { message: "Please add a subject." })
    .max(30, { message: "Subject could not be more than 30 characters." }),
  message: z
    .string({ required_error: "Message is required." })
    .min(1, { message: "Please add your message." })
    .max(500, { message: "Message could not be more than 500 characters." }),
  // interest: z.string(),
});

const ContactForm = () => {
  const serviceId: string = process.env.GATSBY_SERVICE_ID!;
  const templateId: string = process.env.GATSBY_TEMPLATE_ID!;
  const publicKey: string = process.env.GATSBY_PUBLIC_KEY!;

  const [interest, setInterest] = useState("");
  const handleClick = (label: string) => {
    setInterest(label);
  };

  const form = useRef<HTMLFormElement>(null);
  const formatZodIssue = (issue: ZodIssue): string => {
    const { path, message } = issue;
    const pathString = path.join(".");

    return `${pathString}: ${message}`;
  };
  const formatZodError = (error: ZodError) => {
    const { issues } = error;

    if (issues.length) {
      const currentIssue = issues[0];

      return formatZodIssue(currentIssue);
    }
  };
  const sendEmail = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const validatedForm = validateSchema.parse(data);
      if (form && form.current) {
        emailjs
          .sendForm(serviceId, templateId, form.current, {
            publicKey: publicKey,
          })
          .then(
            () => {
              toast.success("Message sent successfully.");
            },
            (error: Error) => {
              console.log("FAILED...", error.message);
            }
          );
      }
    } catch (error: any) {
      console.error(error);
      // throw new Error(formatZodError(error));
    }
  };

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={1998}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <div className="max-w-6xl mx-auto rounded-lg ">
        <div className="grid md:grid-cols-2  gap-16 sm:p-10 p-4 ">
          <ContactInfo />

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <h2 className="mt-0">Contact Form</h2>
            <div className="bg-gray-200 p-6 rounded-lg">
              <p className="text-sm font-semibold text-[#333]">
                I'm interested in...
              </p>

              <div className=" flex flex-wrap gap-4 mt-5">
                <CheckboxInput
                  name="Web design"
                  interest={interest}
                  clickHandler={handleClick}
                  id="web"
                  htmlFor="web"
                  label="Web design"
                />
                <CheckboxInput
                  name="Graphic design"
                  interest={interest}
                  clickHandler={handleClick}
                  id="graphic"
                  htmlFor="graphic"
                  label="Graphic design"
                />
                <CheckboxInput
                  name="Design system"
                  interest={interest}
                  clickHandler={handleClick}
                  id="system"
                  htmlFor="system"
                  label="Design system"
                />
              </div>
              <TextInput
                // errors={errors}
                name="user_name"
                id="name"
                type="text"
                placeholder="Name"
              />
              <TextInput
                // errors={errors}
                name="user_email"
                id="email"
                type="email"
                placeholder="Email"
              />
              <TextInput
                // errors={errors}
                name="subject"
                id="subject"
                type="text"
                placeholder="Subject"
              />

              <Textarea
                // errors={errors}
                name="message"
                id="message"
                rows={6}
                placeholder="Message"
              />

              <button
                className="text-white bg-[#a91079] hover:bg-[#a91079e2] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactForm;

export const Head = () => <Seo title="Get in Touch" />;
