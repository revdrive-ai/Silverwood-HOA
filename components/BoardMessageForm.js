"use client";

// Opens the resident's email app with a pre-filled message to the board.
// No form service needed — the message is sent from the resident's own email.
export default function BoardMessageForm({ to }) {
  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Silverwood HOA website message from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")}\n${f.get("email")}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded border border-cream2 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent";
  const label = "block text-sm font-sans font-semibold text-primary mb-1";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 bg-white border border-cream2 rounded-lg p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Name</label>
          <input type="text" name="name" required className={field} />
        </div>
        <div>
          <label className={label}>Email</label>
          <input type="email" name="email" required className={field} />
        </div>
      </div>
      <div>
        <label className={label}>Message</label>
        <textarea name="message" rows={5} required className={field} />
      </div>
      <button
        type="submit"
        className="justify-self-start rounded-full bg-primary text-white px-6 py-2.5 font-sans font-semibold hover:bg-accent transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
