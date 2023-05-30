const ContactForm = () => {
  return (
    <form className="flex min-w-[80%] flex-col gap-1 xl:min-w-[500px] 2xl:min-w-[50%]">
      <label className="font-semibold" htmlFor="name">
        Full Name
      </label>
      <input
        className="mb-6 bg-gray-200 px-2 py-4 text-black"
        required
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name..."
      />
      <label className="font-semibold" htmlFor="email">
        Email
      </label>
      <input
        className="mb-6 bg-gray-200 px-2 py-4 text-black"
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email..."
      />
      <label className="font-semibold" htmlFor="message">
        Message
      </label>
      <textarea
        className="mb-6 bg-gray-200 px-2 py-4 text-black"
        required
        id="message"
        name="message"
        placeholder="Write here..."
      />
      <button
        className="rounded-sm bg-red-500 px-2 py-4 text-xl font-semibold text-white transition duration-300 hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-white"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
