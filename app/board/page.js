import { site } from "../../content/site";
import { PageHero, SectionHeading } from "../../components/ui";
import BoardMessageForm from "../../components/BoardMessageForm";

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
            company directly (right). For board-specific matters, email the board at{" "}
            <a href={`mailto:${site.boardEmail}`} className="text-accent hover:underline">
              {site.boardEmail}
            </a>
            .
          </p>
        </div>

        <div>
          <SectionHeading>Management Company</SectionHeading>
          <div className="bg-cream border border-cream2 rounded-lg p-5">
            <div className="font-sans font-bold text-primary text-lg">{site.management.company}</div>
            {site.management.dba && <p className="text-sm text-subink italic">{site.management.dba}</p>}
            <p className="mt-1 text-subink">{site.management.address}</p>
            <p className="text-subink">{site.management.phone}</p>
            {site.management.website && (
              <a href={site.management.website} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                {site.management.website.replace("https://", "")}
              </a>
            )}

            <div className="mt-4 divide-y divide-cream2">
              {site.management.contacts.map((c) => (
                <div key={c.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="font-sans font-semibold text-primary">{c.name}</div>
                  <div className="text-sm text-subink">{c.role}</div>
                  {c.email && (
                    <a href={`mailto:${c.email}`} className="text-sm text-accent hover:underline">
                      {c.email}
                    </a>
                  )}
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
            For general questions or committee interest, use the form below — it opens your email app with your
            message addressed to the board. You can also email us directly at{" "}
            <a href={`mailto:${site.boardEmail}`} className="text-accent hover:underline">
              {site.boardEmail}
            </a>
            .
          </p>
          <BoardMessageForm to={site.boardEmail} />
        </div>
      </div>
    </div>
  );
}
