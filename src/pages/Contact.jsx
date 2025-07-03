import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { cn } from "../lib/util";
import { IconBrandGithub, IconBrandOnlyfans } from "@tabler/icons-react";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <div className="dark:bg-black shadow-input mx-auto w-full max-w-lg rounded-none p-4 md:rounded-2xl md:p-8">
      <motion.h2
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: -30,
          scrollBehavior: "smooth",
        }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
      >
        Contact Me
        <hr className="border-gray-200 border-1 w-1/2 mt-1.5" />
      </motion.h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill out the form below to get in touch with me.
      </p>
      <form className="my-8" onSubmit={handleSubmit} ref={formRef}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full name</Label>
            <Input id="fullname" placeholder="John Doe" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message..."
            rows={4}
            required
          />
        </LabelInputContainer>
        <button
          className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message&rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;
