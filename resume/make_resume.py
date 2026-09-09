#!/usr/bin/env python3
"""
Prem Tiwari ka resume PDF generator.

Content badalna ho to neeche CONTENT wale hisse ko edit karo, phir chalao:

    python3 resume/make_resume.py

Output: public/resume.pdf  (portfolio ka Resume button isi file ko uthata hai)

Design: single-column, real selectable text — taaki company ka ATS software
resume theek se padh sake. Do-column resume ATS me aksar toot jaate hain.
"""

import os

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

# ══════════════════════════════════════════════════════════
#  CONTENT — sirf yahan edit karo
# ══════════════════════════════════════════════════════════

NAME = "PREM TIWARI"
TITLE = "Full-Stack Developer &amp; AI  |  BTech CSE (AI)"

CONTACT = [
    ("premt8544@gmail.com", "mailto:premt8544@gmail.com"),
    ("prem-2255.github.io/portfolio", "https://prem-2255.github.io/portfolio/"),
    ("github.com/prem-2255", "https://github.com/prem-2255"),
    (
        "linkedin.com/in/prem-tiwari-84ba85248",
        "https://www.linkedin.com/in/prem-tiwari-84ba85248",
    ),
]

SUMMARY = (
    "BTech CSE (AI) student with a Diploma in Information Technology and a UI/UX "
    "web design internship, building production-style full-stack applications and "
    "AI-powered learning systems. Comfortable across React/TypeScript front-ends, "
    "FastAPI and Node.js backends, Gemini AI integrations, real-time Socket.io "
    "layers, and Docker-based delivery. Seeking internships in full-stack "
    "development or AI/ML."
)

SKILLS = [
    ("Languages", "Python (Advanced), JavaScript, TypeScript"),
    ("Frontend", "React, HTML, CSS, Vite, Responsive Design, UI/UX"),
    ("Backend", "Node.js, Express, FastAPI, REST APIs, Socket.io / WebSockets"),
    ("Databases", "Prisma ORM, PostgreSQL, SQLite, Database Design"),
    ("AI / ML", "Google Gemini AI, TensorFlow/Keras, CNNs, Transfer Learning, OpenCV, Grad-CAM"),
    ("Tools", "Docker &amp; Compose, Git &amp; GitHub, Streamlit, JWT, Third-party APIs"),
    ("Interests", "Cyber Security, System Architecture"),
]

# Internship / job mile to yahan add karo. Khaali hai to resume me
# "EXPERIENCE" section apne aap gayab rehta hai — kuch tootega nahi.
# Format (# hatake, apni detail bharo):
#
# EXPERIENCE = [
#     {
#         "role": "Full-Stack Developer Intern",
#         "org": "Company ka naam, Sheher",
#         "when": "Jun 2026 - Aug 2026",
#         "bullets": [
#             "Kya banaya aur uska asar kya hua — number ho to zaroor likho.",
#             "Doosra kaam.",
#         ],
#     },
# ]
EXPERIENCE = [
    {
        "role": "Web Design (UI/UX) Intern",
        "org": "Nirvana Tech, Vadodara",
        "when": "Apr 2026 - May 2026  &#183;  5 weeks",
        "bullets": [
            "Designed and built responsive web page layouts, converting design "
            "mockups into working HTML/CSS interfaces that held up across screen sizes.",
            "Applied UI/UX fundamentals — visual hierarchy, typography, spacing and "
            "consistent components — to improve clarity and usability of assigned pages.",
        ],
    },
]

PROJECTS = [
    {
        "name": "AI Study Helper",
        "subtitle": "AI-Powered Learning &amp; Interactive Simulation Platform",
        "stack": "React 18, FastAPI, Python, Google Gemini AI, SQLite, JWT, Tailwind CSS",
        "bullets": [
            "Built a full-stack AI tutor with note/PDF summarization, concept simplification, "
            "MCQ quiz generation, personalized study plans and Socratic tutoring.",
            "Added a YouTube lecture analyzer plus interactive system-failure simulations "
            "and a visual logic builder to support multi-modal, hands-on learning.",
            "Hardened the application through a 12-point security audit covering JWT auth, "
            "sliding-window rate limiting, prompt-injection defenses and magic-byte PDF validation.",
        ],
    },
    {
        "name": "RentApp",
        "subtitle": "Full-Stack PropTech &amp; Rental Management Platform",
        "stack": "React 19, TypeScript, Node.js, Express, Prisma ORM, Socket.io, Docker",
        "bullets": [
            "Architected a multi-role platform (tenant, owner, admin) with route guards "
            "enforced on both client and server, plus passwordless phone-OTP login.",
            "Built a real-time layer with Socket.io for sub-second chat, booking updates "
            "and emergency broadcasts, using room-based scoping per property and user.",
            "Delivered end-to-end lease onboarding: canvas e-signatures, multi-app UPI "
            "checkout with instant receipts, QR visitor passes and maintenance ticketing.",
            "Modelled related entities in Prisma with strict foreign-key constraints and "
            "containerised the multi-tier stack using Docker Compose multi-stage builds.",
        ],
    },
    {
        "name": "Skin Cancer Classification System",
        "subtitle": "AI-Powered Computer-Aided Diagnosis",
        "stack": "Python, TensorFlow/Keras, OpenCV, Transfer Learning, Grad-CAM, Streamlit",
        "bullets": [
            "Trained a CNN via transfer learning on HAM10000 (10,015 dermoscopic images) "
            "to classify lesions as benign or malignant — 92.4% accuracy, 0.94 ROC-AUC.",
            "Handled class imbalance and applied preprocessing plus augmentation "
            "(rotation, flip, zoom); evaluated with precision, recall, F1 and ROC-AUC.",
            "Added Grad-CAM explainability and shipped a Streamlit app that returns a "
            "prediction with a confidence score for any uploaded lesion image.",
        ],
    },
    {
        "name": "ScrapBajar",
        "subtitle": "Scrap Collection Platform",
        "stack": "Python, Web Development",
        "bullets": [
            "Web platform for requesting scrap pickup by location, with pricing driven by "
            "current market rates — built around sustainability and digital convenience.",
        ],
    },
    # NOTE: "Portfolio Website" project yahan se hata diya, kyunki uska link
    # ab header wali contact line me hai (prem-2255.github.io/portfolio).
    # Do jagah likhne se resume 2 page ho jaata tha. Wapas chahiye to ye
    # comment hatake block add kar lo.
]

EDUCATION = [
    (
        "BTech, Computer Science Engineering (Artificial Intelligence)",
        "Expected 2027",
        "Currently pursuing",
    ),
    (
        "Diploma in Information Technology",
        "2024",
        "Parul University, Gujarat, India",
    ),
]

# ══════════════════════════════════════════════════════════
#  STYLES
# ══════════════════════════════════════════════════════════

INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#4a4a4a")
RULE = colors.HexColor("#999999")

s_name = ParagraphStyle(
    "name",
    fontName="Helvetica-Bold",
    fontSize=21,
    leading=24,
    textColor=INK,
    spaceAfter=2,
)
s_title = ParagraphStyle(
    "title",
    fontName="Helvetica",
    fontSize=10.4,
    leading=13,
    textColor=MUTED,
    spaceAfter=3,
)
s_contact = ParagraphStyle(
    "contact",
    fontName="Helvetica",
    fontSize=9,
    leading=11.5,
    textColor=MUTED,
)
s_section = ParagraphStyle(
    "section",
    fontName="Helvetica-Bold",
    fontSize=10.2,
    leading=12,
    textColor=INK,
    spaceBefore=11,
    spaceAfter=1,
)
s_body = ParagraphStyle(
    "body",
    fontName="Helvetica",
    fontSize=9.1,
    leading=12.0,
    textColor=INK,
    alignment=TA_JUSTIFY,
)
s_proj = ParagraphStyle(
    "proj", fontName="Helvetica", fontSize=9.7, leading=12.4, textColor=INK
)
s_stack = ParagraphStyle(
    "stack",
    fontName="Helvetica-Oblique",
    fontSize=8.6,
    leading=10.8,
    textColor=MUTED,
    spaceAfter=1.5,
)
s_bullet = ParagraphStyle(
    "bullet",
    fontName="Helvetica",
    fontSize=9.0,
    leading=11.9,
    textColor=INK,
    alignment=TA_JUSTIFY,
)
s_edu = ParagraphStyle(
    "edu", fontName="Helvetica", fontSize=9.2, leading=12.0, textColor=INK
)


def section(label):
    """Section heading + neeche patli line."""
    return [
        Paragraph(label.upper(), s_section),
        HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=1, spaceAfter=4),
    ]


def build(out_path):
    doc = SimpleDocTemplate(
        out_path,
        pagesize=A4,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=13 * mm,
        bottomMargin=12 * mm,
        title="Prem Tiwari - Resume",
        author="Prem Tiwari",
        subject="Full-Stack Developer & AI - Resume",
    )

    story = []

    # ── Header ────────────────────────────────────────────
    story.append(Paragraph(NAME, s_name))
    story.append(Paragraph(TITLE, s_title))
    contact_bits = [
        f'<link href="{url}" color="#1a4f8a">{text}</link>' for text, url in CONTACT
    ]
    story.append(Paragraph("  |  ".join(contact_bits), s_contact))
    story.append(
        HRFlowable(width="100%", thickness=1.1, color=INK, spaceBefore=6, spaceAfter=1)
    )

    # ── Summary ───────────────────────────────────────────
    story += section("Summary")
    story.append(Paragraph(SUMMARY, s_body))

    # ── Skills ────────────────────────────────────────────
    story += section("Technical Skills")
    for label, items in SKILLS:
        story.append(
            Paragraph(f"<b>{label}:</b>&nbsp;&nbsp;{items}", s_body)
        )

    # ── Experience ────────────────────────────────────────
    # EXPERIENCE khaali hai to ye poora section skip ho jaata hai
    if EXPERIENCE:
        story += section("Experience")
        for i, e in enumerate(EXPERIENCE):
            if i:
                story.append(Spacer(1, 6))
            story.append(
                Paragraph(f"<b>{e['role']}</b> &nbsp;—&nbsp; {e['org']}", s_proj)
            )
            story.append(Paragraph(e["when"], s_stack))
            story.append(
                ListFlowable(
                    [
                        ListItem(Paragraph(b, s_bullet), leftIndent=10)
                        for b in e["bullets"]
                    ],
                    bulletType="bullet",
                    start="•",
                    bulletFontSize=9,
                    bulletOffsetY=-1.5,
                    leftIndent=9,
                    spaceBefore=0.5,
                )
            )

    # ── Projects ──────────────────────────────────────────
    story += section("Projects")
    for i, p in enumerate(PROJECTS):
        if i:
            story.append(Spacer(1, 6))
        story.append(
            Paragraph(f"<b>{p['name']}</b> &nbsp;—&nbsp; {p['subtitle']}", s_proj)
        )
        story.append(Paragraph(p["stack"], s_stack))
        story.append(
            ListFlowable(
                [ListItem(Paragraph(b, s_bullet), leftIndent=10) for b in p["bullets"]],
                bulletType="bullet",
                start="•",
                bulletFontSize=9,
                bulletOffsetY=-1.5,
                leftIndent=9,
                spaceBefore=0.5,
            )
        )

    # ── Education ─────────────────────────────────────────
    story += section("Education")
    for degree, when, extra in EDUCATION:
        story.append(Paragraph(f"<b>{degree}</b>", s_edu))
        story.append(
            Paragraph(
                f'<font color="#4a4a4a">{extra} &nbsp;·&nbsp; {when}</font>', s_edu
            )
        )
        story.append(Spacer(1, 3))

    doc.build(story)
    return out_path


if __name__ == "__main__":
    here = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(os.path.dirname(here), "public")
    os.makedirs(out_dir, exist_ok=True)
    out = build(os.path.join(out_dir, "resume.pdf"))
    print("Ban gaya:", out)
