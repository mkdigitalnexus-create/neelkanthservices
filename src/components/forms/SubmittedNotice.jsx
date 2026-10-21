import { CheckCircle2 } from "lucide-react";

export default function SubmittedNotice({ summary, onReset }) {
  return (
    <div className="rounded-md border border-line bg-white p-8 md:p-10" role="status" aria-live="polite">
      <CheckCircle2 size={36} className="text-blue" />
      <h2 className="mt-4 font-heading text-2xl font-bold text-navy">Form validated — demo mode</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Your details passed validation. Because this website is a frontend demonstration, nothing has been sent and
        <strong className="text-ink"> no quote or booking has been created</strong>. In the live version, this is where your enquiry would be delivered to the team.
      </p>
      {summary && (
        <dl className="mt-6 grid gap-3 border-t border-line pt-6 text-sm sm:grid-cols-2">
          {summary.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wider text-muted">{k}</dt>
              <dd className="mt-0.5 font-medium text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      <button type="button" onClick={onReset} className="btn btn-outline-dark btn-sm mt-8">Fill the form again</button>
    </div>
  );
}
