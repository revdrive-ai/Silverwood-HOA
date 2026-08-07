import { site } from "../../content/site";
import { PageHero, SectionHeading } from "../../components/ui";

export const metadata = { title: "Board & Contact — Silverwood HOA" };

export default function BoardPage() {
  return (
    <div>
      <PageHero
        title="Board & Management"
        subtitle="Meet the volunteer board and find the right contact at our management company."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading>Board of Directors</SectionHeading>
          <div className="border border-cream2 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-cream2">
                {site.board.map((b) => (
                  <tr key={b.name} className="odd:bg-white even:bg-cream">
                    <td className="px-4 py-3 font-sans font-semibold text-primary w-1/2">{b.role}</td>
                    <td className="px-4 py-3 text-ink">{b.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-subink">
            For most day-to-day items — dues, ARC requests, maintenance issues — please contact our management
            company directly (right). Board members can be reached through management for board-specific matters.
          </p>
        </div>

        <div>
          <SectionHeading>Management Company</SectionHeading>
          <div className="bg-cream border border-cream2 rounded-lg p-5">
            <div className="font-sans font-bold text-primary text-lg">{site.management.company}</div>
            <p className="mt-1 text-subink">{site.management.address}</p>
            <p className="text-subink">{site.management.phone}</p>
            <a href={site.management.website} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              {site.management.website.replace("https://", "")}
            </a>

            <div className="mt-4 divide-y divide-cream2">
              {site.management.contacts.map((c) => (
                <div key={c.email} className="py-3 first:pt-0 last:pb-0">
                  <div className="font-sans font-semibold text-primary">{c.name}</div>
                  <div className="text-sm text-subink">{c.role}</div>
                  <a href={`mailto:${c.email}`} className="text-sm text-accent hover:underline">
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream border-y border-cream2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
          <SectionHeading>Send the Board a Message</SectionHeading>
          <p className="text-subink mb-4">
            For general questions or committee interest, use the form below. This form needs to be connected to a
            form service (e.g. Formspree) or email address before it will actually deliver messages — see the
            project README for setup steps.
          </p>
          <form className="grid gap-4 bg-white border border-cream2 rounded-lg p-6" action="#" method="POST">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-sans font-semibold text-primary mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded border border-cream2 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-semibold text-primary mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded border border-cream2 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-sans font-semibold text-primary mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded border border-cream2 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="justify-self-start rounded-full bg-primary text-white px-6 py-2.5 font-sans font-semibold hover:bg-accent transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
