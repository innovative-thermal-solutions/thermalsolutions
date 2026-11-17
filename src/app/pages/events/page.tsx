import { redirect } from "next/navigation";

export default function OldEventsRedirect() {
  redirect("/events");
}

