const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 356 >>
stream
BT
/F1 22 Tf
72 720 Td
(Aronia Dynamics - Free Digital Audit) Tj
/F1 12 Tf
0 -42 Td
(Use this checklist to review your digital presence.) Tj
0 -32 Td
(1. Is your website clear about who you help and why it matters?) Tj
0 -24 Td
(2. Can a visitor contact you in less than two minutes?) Tj
0 -24 Td
(3. Are your core workflows measurable and repeatable?) Tj
0 -24 Td
(4. Is your data accessible for better decisions?) Tj
0 -24 Td
(5. Does your technology support your next stage of growth?) Tj
0 -40 Td
(Ready for a deeper review? Visit aroniadynamics.com/contact) Tj
ET
endstream
endobj
trailer
<< /Root 1 0 R >>
%%EOF`

export function GET() {
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="aronia-digital-audit.pdf"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
