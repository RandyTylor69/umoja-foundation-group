"use client"

export default function Contact() {

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2730c65a-cdaa-492b-af80-3cc988a16b13");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    console.log("it's cliedk")
    if (result.success) {
      alert("Your email is sent!")
    }
  }
  return (
    <main
      className="h-screen w-full bg-secondary 
    flex justify-center items-center rounded-[8rem] p-6 my-20"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-[40rem]"
      >
        <h1 className="text-4xl mx-auto">Talk to us!</h1>
        <p className="mx-auto">
          Have questions or ideas? We’d love to hear from you! Reach out and
          let’s work together to make a difference.
        </p>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Name
          <input name="name" type="text" placeholder="Mark Scout" required />
        </label>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Email
          <input name="email" type="text" placeholder="mark@gmail.com" required />
        </label>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Message
          <input name="message" type="text" placeholder="Write your message" required />
        </label>

        <button type="submit" className="mx-auto mt-6">
          Send Message
        </button>
      </form>
    </main>
  );
}
