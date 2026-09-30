"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import { checkServiceArea } from "@/lib/site-data";

/** Postal-code check, same logic as the site's service finder. */
export default function PostalCheck() {
  const [v, setV] = useState("");
  const [res, setRes] = useState<"" | "yes" | "no" | "bad">("");
  const check = () => {
    const r = checkServiceArea(v);
    if (r === null) return setRes("bad");
    setRes(r === "available" ? "yes" : "no");
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="flex-1 flex items-center gap-3 rounded border border-gray-300 bg-white px-4">
          <span className="text-gray-500"><Icon n="pin" size={18} /></span>
          <span className="sr-only">Postal code</span>
          <input value={v} onChange={(e) => { setV(e.target.value); setRes(""); }} onKeyDown={(e) => e.key === "Enter" && check()} placeholder="Enter your postal code" autoComplete="postal-code" className="w-full py-3.5 outline-none bg-transparent" />
        </label>
        <button type="button" onClick={check} className="hbtn justify-center">Check Service Area <Icon n="arrow" size={16} /></button>
      </div>
      <p role="status" className="mt-3 text-sm min-h-[1.25rem] text-gray-700">
        {res === "yes" && "Good news: we serve your area. Request a consultation to confirm."}
        {res === "no" && "That postal code is outside our usual area. Contact us and we'll see what we can do."}
        {res === "bad" && "Enter a valid postal code, for example L5B 1M2."}
      </p>
    </div>
  );
}
