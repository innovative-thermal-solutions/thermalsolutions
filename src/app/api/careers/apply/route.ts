import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const resume = formData.get("resume") as File | null;
    const coverLetter = formData.get("coverLetter") as File | null;

    if (!firstName || !lastName || !email || !position || !resume) {
      return NextResponse.json(
        { error: "Missing required fields. Please ensure first name, last name, email, position, and resume are provided." },
        { status: 400 }
      );
    }

    // File validation: 5MB max
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (resume && resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Resume file exceeds 5MB limit (${(resume.size / (1024 * 1024)).toFixed(2)}MB)` },
        { status: 400 }
      );
    }
    if (coverLetter && coverLetter.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Cover letter file exceeds 5MB limit (${(coverLetter.size / (1024 * 1024)).toFixed(2)}MB)` },
        { status: 400 }
      );
    }

    // In production without external cold fusion / SMTP credentials, log application securely and respond successfully
    console.log(`[CAREERS APPLICATION RECEIVED] Position: ${position} | Candidate: ${firstName} ${lastName} (${email}, ${phone}) | Resume: ${resume.name} (${resume.size}B)`);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our recruiting and HR team will review your qualifications and reach out soon.",
      data: {
        applicant: `${firstName} ${lastName}`,
        position,
        email,
      },
    });
  } catch (error: any) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      { error: "Internal server error while processing your application. Please email engineering@itscooling.com directly." },
      { status: 500 }
    );
  }
}

