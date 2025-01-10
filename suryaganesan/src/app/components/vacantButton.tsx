"use client";

export default function VacantButton() {
  return (
    <span
      className="btn btn-primary btn-ghost btn-xs text-sm border-stone-900"
      onClick={() =>
        alert(
          "send me an email to fill the position: suryaganesan925@gmail.com"
        )
      }
      title="click the button to fill this position"
    >
      vacant
    </span>
  );
}
